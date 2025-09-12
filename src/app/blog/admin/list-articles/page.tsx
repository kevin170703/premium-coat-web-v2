"use client";

import PostCardList from "@/components/blog/PostCardList";
import { IconNews } from "@tabler/icons-react";
import axios from "axios";
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

export default function ListPostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  async function getPosts() {
    const { data } = await axios.get(
      "https://blog-premium-coat.onrender.com/api/posteos"
    );

    setPosts(data.data);
    setLoading(false);
    console.log(data.data[0].categorias, "categorias");
    // setPosts([]);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="h-screen min-h-screen py-10 ">
      <div className="container mx-auto px-4 py-8 w-full h-full">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl max-md:text-2xl font-medium text-foreground">
            Lista de posts
          </h1>
        </header>

        {loading ? (
          <div className="w-full flex flex-wrap justify-start items-center gap-4 animate-pulse">
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className="w-[32%] max-2xl:w-[48%] max-md:w-full min-h-[300px] bg-gray-400 opacity-30 rounded-3xl"
              ></div>
            ))}
          </div>
        ) : posts.length <= 0 ? (
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="relative size-24 flex justify-center items-center">
              <IconNews className="size-20 text-yellow-400" strokeWidth={1} />
            </div>
            <p className="text-2xl font-medium">No se encontraron posts</p>
          </div>
        ) : (
          <div className="w-full flex flex-wrap justify-start items-center gap-4 max-md:pb-10">
            {posts.map((post) => (
              <PostCardList
                key={post.id}
                coverImage={post.imagenes[0].url}
                date={post.fecha_publicacion}
                id={post.id}
                title={post.titulo}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
