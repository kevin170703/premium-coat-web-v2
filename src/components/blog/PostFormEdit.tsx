"use client";

import type React from "react";

import { useEffect, useState } from "react";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import UploadImage from "@/components/UploadImage";
import Link from "next/link";
import BlogEditor from "./BlogEditor";
import axios from "axios";
import { storage } from "@/lib/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import SelectTags from "./ui/SelectTags";

interface FormData {
  title: string;
  description: string;
  date: string;
  coverImage: string | null;
  body: string;
  categories: number[];
}

interface FormErrors {
  title?: string;
  description?: string;
  date?: string;
  coverImage?: string;
  body?: string;
  categories?: string;
}

interface Post {
  id: string;
  titulo: string;
  descripcion: string;
  fecha_publicacion: string;
  imagenes: Images[];
  contenido: string;
  categorias: Tag[];
}

interface Images {
  id: number;
  url: string;
}

interface Tag {
  nombre: string;
  id: number;
}

interface PostFormEditProps {
  initialData?: Post;
}

export function PostFormEdit({ initialData }: PostFormEditProps) {
  const [loader, setLoader] = useState(true);
  const [tags, setTags] = useState<Tag[]>([]);

  const [selectedCategories, setSelectedCategories] = useState<Tag[]>([]);

  const [coverFile, setCoverFile] = useState<File | null>(null);

  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    date: "",
    coverImage: "",
    body: "",
    categories: [],
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Title validation
    if (!formData.title.trim()) {
      newErrors.title = "El título es requerido";
    } else if (formData.title.length < 3 || formData.title.length > 120) {
      newErrors.title = "El título debe tener entre 3 y 120 caracteres";
    }

    // Description validation
    if (!formData.description.trim()) {
      newErrors.description = "La descripción es requerida";
    } else if (
      formData.description.length < 10 ||
      formData.description.length > 200
    ) {
      newErrors.description =
        "La descripción debe tener entre 10 y 200 caracteres";
    }

    // Date validation
    if (!formData.date) {
      newErrors.date = "La fecha es requerida";
    }

    // Cover image validation
    if (formData.coverImage === null || !formData.coverImage.trim()) {
      newErrors.coverImage = "La imagen de portada es requerida";
    } else {
      try {
        new URL(formData.coverImage);
      } catch {
        newErrors.coverImage = "Debe ser una URL válida";
      }
    }

    // Body validation
    if (!formData.body.trim()) {
      newErrors.body = "El contenido es requerido";
    } else if (formData.body.length < 50) {
      newErrors.body = "El contenido debe tener al menos 50 caracteres";
    }

    // Categories validation
    if (!formData.categories || formData.categories.length === 0) {
      newErrors.categories = "Debes seleccionar al menos una categoría";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    const token = localStorage.getItem("token");

    try {
      // 1. Subir imagen a Firebase si hay coverImage (asumo que es un File)
      let imageUrl = "";
      if (coverFile !== null && coverFile instanceof File) {
        console.log("entre a crear imagen");
        const imageRef = ref(storage, `pruebas/${Date.now()}-${"PRUEBA"}`);
        await uploadBytes(imageRef, coverFile);
        imageUrl = await getDownloadURL(imageRef);
      }

      // 3. Construir payload según tu API
      const newPost = {
        titulo: formData.title,
        descripcion: formData.description,
        contenido: formData.body,
        fecha_de_publicacion: formData.date,
        urls_imagenes: coverFile === null ? [formData.coverImage] : [imageUrl],
        categorias: formData.categories, // agrega categorías dinámicas si quieres
      };

      // 4. Llamar a tu API con Axios
      const res = await axios.put(
        `https://blog-premium-coat.onrender.com/api/posteos/${initialData?.id}`,
        newPost,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res, "respuesta editacion");

      // 5. Redirigir al detalle del post (usando el id generado)
      // router.push(`/blog/${id}`);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Error creando posteo:",
          error.response?.data || error.message
        );
      } else if (error instanceof Error) {
        console.error("Error creando posteo:", error.message);
      } else {
        console.error("Error creando posteo:", error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // Función para añadir tags al formData y al estado visual
  const handleAddTag = (tagId: number) => {
    const tag = tags.find((t) => t.id === tagId);
    if (!tag) return;

    // Actualizamos formData
    setFormData((prev) => {
      if (!prev.categories.includes(tagId)) {
        return {
          ...prev,
          categories: [...prev.categories, tagId],
        };
      }
      return prev;
    });

    // Actualizamos estado visual
    setSelectedCategories((prev) => {
      if (!prev.find((t) => t.id === tagId)) {
        return [...prev, { id: tag.id, nombre: tag.nombre }];
      }
      return prev;
    });
  };

  // Función opcional para eliminar una categoría
  const handleRemoveTag = (tagId: number) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.filter((id) => id !== tagId),
    }));

    setSelectedCategories((prev) => prev.filter((t) => t.id !== tagId));
  };

  async function getTags() {
    const { data } = await axios.get(
      "https://blog-premium-coat.onrender.com/api/categorias"
    );

    if (data.length >= 0) {
      setTags(data);
    } else {
      setTags([]);
    }
    // setLoading(false);
  }

  // 👇 Cuando llega initialData, rellenamos
  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.titulo,
        description: initialData.descripcion,
        date: initialData.fecha_publicacion,
        coverImage: initialData.imagenes[0].url,
        body: initialData.contenido,
        categories: initialData.categorias.map((tag) => tag.id),
      });

      setSelectedCategories(initialData.categorias);

      setLoader(false);
    }
  }, [initialData]);

  useEffect(() => {
    getTags();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Title */}
      <div>
        <Input
          name="Titulo"
          label="Titulo"
          onChange={(e) => handleChange("title", e.target.value)}
          placeholder="Ingresa el título del post"
          value={formData.title}
          id="title"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <TextArea
          name="description"
          onChange={(e) => handleChange("description", e.target.value)}
          placeholder={"Breve descripción del post"}
          value={formData.description}
          id="description"
          label={"Descripción "}
          maxLength={200}
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">{errors.description}</p>
        )}
      </div>

      <div>
        <SelectTags
          value={""}
          label="Etiqueta"
          labelInput="Nombre etiqueta"
          messageNoResults="No hay resultados"
          selectedTags={selectedCategories}
          options={tags.map((tag) => ({
            text: tag.nombre,
            value: tag.id,
            key: tag.id,
          }))}
          handleRemoveTag={handleRemoveTag}
          onChange={(value) => {
            handleAddTag(Number(value));
          }}
        />

        {errors.categories && (
          <p className="text-red-500 text-sm mt-1">{errors.categories}</p>
        )}
      </div>

      {/* Cover Image */}
      {!loader && (
        <div>
          <UploadImage
            value={formData.coverImage}
            onChange={(image) => {
              handleChange("coverImage", image?.preview ?? null);
              setCoverFile(image?.file ?? null); // opcional: guardar el file real
            }}
          />

          {errors.coverImage && (
            <p className="text-red-500 text-sm mt-1">{errors.coverImage}</p>
          )}
        </div>
      )}

      {formData.body && (
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Cuerpo del artículo
          </label>
          <BlogEditor
            // label={"Cuerpo de articulo"}
            value={formData.body}
            onChange={(html) => handleChange("body", html)}
          />
          {errors.body && (
            <p className="text-red-500 text-sm mt-1">{errors.body}</p>
          )}
        </div>
      )}

      {/* Submit button */}
      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-secondary text-white px-6 py-3 rounded-full hover:scale-105 active:scale-95 transition-transform cursor-pointer"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Guardando..." : "Guardar"}
        </button>

        <Link
          href={"/blog/admin/list"}
          type="button"
          className="px-6 py-2 rounded-md flex justify-center items-center"
        >
          Cancelar
        </Link>
      </div>
    </form>
  );
}
