"use client";

import TagCardList from "@/components/blog/TagCardList";
import Input from "@/components/Input";
import { IconPlus, IconTag, IconTags } from "@tabler/icons-react";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface Tag {
  nombre: string;
  id: number;
}

export default function ListTags() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingCreate, setLoadingCreate] = useState(false);

  const [nameNewTag, setNameNewTag] = useState("");

  const [showModalCreate, setShowModalCreate] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Solo letras (a-zA-Z, acentos, ñ, Ñ) y espacios
    const onlyLetters = value.replace(/[^a-zA-ZÀ-ÿ\u00f1\u00d1\s]/g, "");

    setNameNewTag(onlyLetters);
  };

  const handelCreate = async () => {
    try {
      const token = localStorage.getItem("token");
      setLoadingCreate(true);
      await axios.post(
        `https://blog-molokaih.onrender.com/api/categorias`,
        {
          nombre: nameNewTag,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      window.location.reload();
      //   if (onDelete) onDelete(id);
    } catch (error) {
      console.error(error);
      alert("No se pudo eliminar el post");
    } finally {
      setLoadingCreate(false);
    }
  };

  async function getTags() {
    const { data } = await axios.get(
      "https://blog-molokaih.onrender.com/api/categorias"
    );
    // const data = {
    //   data: [
    //     {
    //       name: "Marketing",
    //       id: 1,
    //     },
    //     {
    //       name: "IT",
    //       id: 2,
    //     },

    //     {
    //       name: "SEO",
    //       id: 3,
    //     },
    //   ],
    // };

    setTags(data);
    setLoading(false);
    // setTags([]);
  }

  useEffect(() => {
    getTags();
  }, []);

  return (
    <div className="h-screen min-h-screen py-10">
      <div className="container mx-auto px-4 py-8 w-full h-full">
        {/* Header */}
        <header className="mb-8 flex justify-between items-center gap-2">
          <h1 className="text-3xl max-md:text-2xl font-medium text-foreground">
            Lista de etiquetas
          </h1>

          <button
            onClick={() => setShowModalCreate(true)}
            className="bg-secondary  text-white px-6 py-3 rounded-full hover:scale-105 active:scale-95 transition-transform cursor-pointer flex justify-center items-center gap-2"
          >
            <IconPlus />

            <p className="max-md:hidden">Crear etiqueta</p>
          </button>
        </header>

        {loading ? (
          <div className="w-full flex flex-wrap justify-start items-center gap-4 animate-pulse">
            {Array.from({ length: 19 }, (_, i) => (
              <div
                key={i}
                className="w-[10%] max-2xl:w-[48%] min-h-[42px] bg-gray-400 opacity-30 rounded-3xl"
              ></div>
            ))}
          </div>
        ) : tags.length <= 0 ? (
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="relative size-24 flex justify-center items-center">
              <div className="bg-yellow-400 rounded-full w-[100%] aspect-square absolute z-0 blur-2xl opacity-30"></div>

              <IconTags className="size-20 text-yellow-200" strokeWidth={1} />
            </div>
            <p className="text-2xl font-medium">No se encontraron etiquetas</p>
          </div>
        ) : (
          <div className="w-full flex flex-wrap justify-start items-center gap-4">
            {tags.map((post) => (
              <TagCardList id={post.id} name={post.nombre} key={post.id} />
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {showModalCreate && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/20 shadow z-100">
          <div className="bg-white text-black border border-white/10 rounded-2xl p-6 w-[350px] shadow-lg flex flex-col justify-center items-center relative overflow-hidden">
            <div className="bg-primary rounded-full p-3 mb-4 z-10 text-white">
              <IconTag className="size-7" />
            </div>

            <h2 className="text-lg font-semibold mb-4">
              Añade un nombre a la etiqueta para crear
            </h2>

            <Input
              id="name"
              name="name"
              // label={"Nombre"}
              onChange={(e) => handleChange(e)}
              placeholder="Nombre"
              value={nameNewTag}
            />

            <div className="w-full flex justify-center items-center gap-4 mt-6">
              <button
                onClick={() => setShowModalCreate(false)}
                className="px-4 py-2 rounded-2xl bg-white text-black text-sm cursor-pointer w-[48%]"
                disabled={loading}
              >
                Cancelar
              </button>
              <button
                onClick={handelCreate}
                className="px-4 py-2 rounded-full bg-secondary border border-white/10 text-white hover:text-red-200 text-sm cursor-pointer w-[48%] font-medium transition-colors"
                disabled={loading}
              >
                {loadingCreate ? "Creando..." : "Crear"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
