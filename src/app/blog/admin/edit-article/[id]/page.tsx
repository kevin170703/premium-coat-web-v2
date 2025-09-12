"use client";

import { PostFormEdit } from "@/components/blog/PostFormEdit";
import axios from "axios";
import { useParams } from "next/navigation";
// import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

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

export default function EditPostPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState<Post | null>(null);

  async function getPost() {
    setLoading(true);
    const { data } = await axios.get(
      `https://blog-premium-coat.onrender.com/api/posteos/${id}`
    );

    setPost(data.data);
    setLoading(false);
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="min-h-screen bg-background py-10">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl max-md:text-2xl font-medium text-foreground">
            Editar post
          </h1>
        </header>

        {/* Form */}
        {!loading && post && <PostFormEdit initialData={post} />}
      </div>
    </div>
  );
}
