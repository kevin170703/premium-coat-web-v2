"use client";

import { PostBody } from "@/components/blog/post-body";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

import logo from "@/assets/logos/horizontal-black.png";
import axios from "axios";

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

export default function PostDetailPage() {
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

  if (!post && !loading) {
    notFound();
  } else if (!post && loading) {
    return (
      <div className="min-h-screen bg-background py-30 animate-pulse px-5">
        <div className="container flex justify-center items-center flex-col mx-auto px-4 py-8 max-w-[846px]">
          <div className="w-[60%] h-8 bg-gray-200/30 rounded-full mb-6"></div>

          <div className="w-full h-14 bg-gray-200/30 rounded-full mb-2"></div>
          <div className="w-[70%] h-14 bg-gray-200/30 rounded-full mb-12"></div>

          <div className="w-full flex justify-between items-center gap-2 mb-12">
            <div className="w-[150px] h-8 bg-gray-200/30 rounded-full"></div>
            <div className="w-[100px] h-4 bg-gray-200/30 rounded-full"></div>
          </div>

          <div className="w-full aspect-2/1 bg-gray-200/30 rounded-4xl mb-8"></div>

          {Array.from({ length: 10 }, (_, i) => (
            <div
              key={i}
              className="w-full h-6 bg-gray-200/30 rounded-full mb-4"
            ></div>
          ))}
        </div>
      </div>
    );
  } else if (post && !loading)
    return (
      <div className="min-h-screen bg-background py-30 relative overflow-hidden px-5">
        <div className="container mx-auto px-4 py-8 max-w-[846px]">
          {/*  */}
          <div className="flex justify-center items-center gap-2 w-full mb-6 text-black/70">
            <Link href={"/"}>Home</Link>
            <span>/</span>
            <Link href={"/blog"}>Blog</Link>
            <span>/</span>
            <Link href={`/blog/${id}`} className="text-primary font-medium">
              {post.titulo}
            </Link>
          </div>

          {/* Post header */}
          <article>
            <header className="mb-8">
              <h1 className="text-7xl leading-16 font-zain max-lg:text-5xl max-md:text-3xl font-semibold text-foreground mb-12 text-center w-full text-balance">
                {post.titulo}
              </h1>

              <div className="w-full flex justify-between items-center mb-12">
                <Image
                  src={logo}
                  width={500}
                  height={500}
                  alt="logo"
                  className="h-8 w-auto object-cover"
                />

                <div className="flex items-center gap-4 text-gray-500 text-sm max-md:text-xs">
                  <time dateTime={post.fecha_publicacion}>
                    {new Date(post.fecha_publicacion).toLocaleDateString(
                      "en-EN",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </time>
                </div>
              </div>

              <Image
                width={1200}
                height={1200}
                src={post.imagenes[0].url || "/placeholder.svg"}
                alt={post.titulo}
                className="w-full h-64 md:h-96 object-cover rounded-3xl shadow-md"
              />
            </header>

            {/* Post content */}
            <div className="prose max-w-none ">
              <PostBody content={post.contenido} />
            </div>
          </article>
        </div>
      </div>
    );
}
