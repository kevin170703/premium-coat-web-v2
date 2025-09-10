"use client";

import { PostList } from "@/components/blog/post-list";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  IconArrowUp,
  IconCalendar,
  IconChevronsRight,
  IconMenuDeep,
  IconNews,
  IconSearch,
} from "@tabler/icons-react";
import Link from "next/link";
import Select from "@/components/Select";
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

interface Params {
  page: number;
  sort: string;
  category_id?: number;
  titulo?: string;
}

export default function BlogPage() {
  const [showFilters, setShowFilters] = useState(false);

  const [posts, setPosts] = useState<Post[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [lastPost, setLastPost] = useState<Post>();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<number>(0);
  const [selectedTagName] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");

  const [loading, setLoading] = useState(true);

  async function getTags() {
    const { data } = await axios.get(
      "https://blog-molokaih.onrender.com/api/categorias"
    );

    if (data.length >= 0) {
      const allTags = [...data, { id: 0, nombre: "All" }];
      setTags(allTags);
    } else {
      setTags([]);
    }
    setLoading(false);
  }

  async function getPosts() {
    // Creamos el objeto de params
    const params: Params = {
      page: 1,
      sort: sortOrder === "desc" ? "latest" : "oldest",
      category_id: selectedTag, // ejemplo, puedes eliminarlo después
      titulo: searchTerm,
    };

    // Eliminamos propiedades que no queramos enviar
    if (selectedTag === 0) {
      delete params.category_id;
    }

    if (searchTerm === "") {
      delete params.titulo;
    }

    // Llamada con axios
    const { data } = await axios.get(
      "https://blog-molokaih.onrender.com/api/posteos",
      { params }
    );

    setLastPost(data.last_post);
    setPosts(data.data);
    setLoading(false);
  }

  const orders = [
    {
      text: "Newest",
      value: "desc",
      key: "Newest",
    },
    {
      text: "Oldest",
      value: "asc",
      key: "Oldest",
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    getPosts();
  };

  useEffect(() => {
    getPosts();
    getTags();
  }, [sortOrder, selectedTag]);

  if (loading)
    return (
      <div className="min-h-screen py-40 w-full px-5 animate-pulse">
        <section className="w-full max-w-[1280px] aspect-2/1 relative mx-auto rounded-4xl overflow-hidden flex justify-start items-center bg-gray-200/30 mb-20"></section>

        <section className="mx-auto container px-4 py-8 w-full max-w-[1280px]">
          <div className="mb-6 w-full flex justify-between items-start gap-10">
            <div className="w-[200px] rounded-full h-12 bg-gray-200/30"></div>

            <div className="flex justify-end items-center gap-4">
              <div className="w-[200px] rounded-3xl h-16 bg-gray-200/30"></div>
              <div className="w-[200px] rounded-3xl h-16 bg-gray-200/30"></div>
              <div className="w-[400px] rounded-3xl h-16 bg-gray-200/30"></div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6">
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className="relative w-[400px] h-[500px] rounded-3xl flex flex-col justify-between items-end overflow-hidden bg-gray-200/30"
              ></div>
            ))}
          </div>
        </section>
      </div>
    );
  else
    return (
      <main className="min-h-screen py-40 w-full px-5">
        <div className="mx-auto max-w-[1280px] mb-10 ">
          <p className="text-secondary font-medium">Read Our Blog</p>
          <h1 className="font-zain text-5xl font-bold">Browse Our Resources</h1>

          <p className="opacity-70 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        {/* Post destacado */}
        {lastPost && (
          <Link
            href={`/blog/${lastPost.id}`}
            className="w-full max-w-[1280px] aspect-2/1 max-md:aspect-3/5  relative mx-auto rounded-4xl overflow-hidden flex justify-end items-end mb-20 text-white"
          >
            <Image
              width={1200}
              height={1200}
              alt={lastPost.titulo}
              src={lastPost.imagenes[0].url}
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />

            <div className="z-10 relative w-full h-[40%] max-md:h-[45%] min-h-[180px] bg-black/60 flex max-md:flex-col justify-between  items-center gap-y-6 px-10 py-5 pb-4 max-md:px-5 backdrop-blur-lg">
              <div className="h-full flex-1 flex flex-col justify-between items-start">
                <div className="w-full max-w-[1000px]">
                  <p className="text-3xl max-md:text-2xl font-medium w-full max-md:w-full mb-2 ">
                    {lastPost.titulo}
                  </p>

                  <p className="text-white/80 font-light text-base w-full max-md:w-full max-md:text-sm mb-6 max-md:hidden">
                    {lastPost.descripcion}
                  </p>
                </div>

                <div className="w-full flex justify-between items-center">
                  <div className="flex justify-start items-center gap-4">
                    <div className="text-sm max-md:text-xs flex justify-center items-center gap-2">
                      <div className="border border-white p-2 rounded-full">
                        <IconCalendar className="size-6" />
                      </div>
                      <p>
                        <time dateTime={lastPost.fecha_publicacion}>
                          {new Date(
                            lastPost.fecha_publicacion
                          ).toLocaleDateString("en-EN", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end items-center gap-2 max-md:hidden">
                    {lastPost.categorias
                      ?.slice(0, 3)
                      .map((categoria, index) => (
                        <div
                          key={index}
                          className="border border-white rounded-full w-max px-4 py-2 flex justify-center items-center gap-2"
                        >
                          <p className="text-white text-sm">
                            {categoria.nombre}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between items-end max-md:items-start max-md:w-full max-md:justify-center  h-full max-md:h-max">
                <button className="max-md:hidden relative z-10 hover:scale-105 transition-transform active:scale-100 w-max">
                  <IconArrowUp
                    className="rotate-45 size-10 hover:scale-105 active:scale-100 transition-all"
                    strokeWidth={1}
                  />
                </button>
              </div>
            </div>
          </Link>
        )}

        {/* Listado */}
        <section className="mx-auto container px-4 py-8 w-full max-w-[1280px]">
          <div className="mb-6 w-full flex  justify-between items-start gap-4">
            <h2 className="text-2xl font-medium">Recent Blogs</h2>

            {/* Botón en mobile */}
            <button onClick={() => setShowFilters(true)} className="xl:hidden">
              <IconMenuDeep className="size-8" />
            </button>

            {/* Filtros en Desktop */}
            <div className="hidden xl:flex flex-1 justify-end items-center gap-4">
              {/* Filtro etiquetas */}
              <div className="w-full max-w-[200px]">
                <Select
                  value={selectedTagName}
                  // label={"Tags"}
                  labelInput={"Name"}
                  messageNoResults={"No results"}
                  options={tags.map((tag: Tag) => ({
                    text: tag.nombre,
                    value: tag.id,
                    key: tag.id,
                  }))}
                  onChange={(value) => setSelectedTag(Number(value))}
                />
              </div>

              {/* Orden */}
              <div className="w-full max-w-[200px]">
                <Select
                  value={sortOrder === "desc" ? "Newest" : "Oldest"}
                  // label="Orden"
                  labelInput=""
                  messageNoResults="No hay resultados"
                  options={orders}
                  onChange={(value) => setSortOrder(value as "asc" | "desc")}
                  inputSearch={false}
                />
              </div>

              {/* Search */}
              <form
                onSubmit={handleSearch}
                className="relative w-full max-w-[300px]"
              >
                <button
                  type="submit"
                  className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none cursor-pointer"
                >
                  <IconSearch className="size-5 text-gray-400" />
                </button>

                <input
                  type="text"
                  placeholder={"Search article"}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="select-container min-w-max w-full max-h-max flex justify-between items-center gap-3 bg-active py-3 px-5 rounded-full relative transition-all border border-black/10 pl-10"
                />
              </form>
            </div>

            {/* Overlay de filtros en mobile */}
            {showFilters && (
              <div className="fixed inset-0 bg-black/10 flex justify-end z-[1200]">
                <div className="w-80 bg-white text-black h-full p-6 flex flex-col gap-6  text-lg bg-gradient-to-b from-transparent to-primary/10 px-5 py-10 rounded-l-2xl transform transition-transform duration-500 ease-in-out border-l border-black/10">
                  {/* Botón cerrar */}
                  <button
                    onClick={() => setShowFilters(false)}
                    className="self-end text-gray-600"
                  >
                    <IconChevronsRight />
                  </button>

                  {/* Filtro etiquetas */}
                  <div className="mt-10">
                    <Select
                      value={selectedTagName}
                      // label={"Tags"}
                      labelInput={"Name"}
                      messageNoResults={"No results"}
                      options={tags.map((tag: Tag) => ({
                        text: tag.nombre,
                        value: tag.id,
                        key: tag.id,
                      }))}
                      onChange={(value) => setSelectedTag(Number(value))}
                    />
                  </div>

                  {/* Orden */}
                  <div>
                    <Select
                      value={sortOrder === "desc" ? "Newest" : "Oldest"}
                      // label="Order"
                      labelInput=""
                      messageNoResults="No hay resultados"
                      options={orders}
                      onChange={(value) =>
                        setSortOrder(value as "asc" | "desc")
                      }
                      inputSearch={false}
                    />
                  </div>

                  {/* Search */}
                  <form onSubmit={handleSearch} className="relative">
                    <button
                      type="submit"
                      className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none cursor-pointer"
                    >
                      <IconSearch className="h-5 w-5 text-gray-400" />
                    </button>

                    <input
                      type="text"
                      placeholder={"Search article"}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="select-container w-full max-h-max flex justify-between items-center gap-3 bg-active py-3 px-5 rounded-full relative transition-all  border border-black/10 pl-10"
                    />
                  </form>
                </div>
              </div>
            )}
          </div>

          {posts.length <= 0 ? (
            <div className="py-40 w-full px-5 flex justify-center items-center">
              <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="relative size-24 flex justify-center items-center">
                  <div className="bg-yellow-400 rounded-full w-[100%] aspect-square absolute z-0 blur-2xl opacity-30"></div>

                  <IconNews
                    className="size-20 text-yellow-200"
                    strokeWidth={1}
                  />
                </div>
                <p className="text-2xl font-medium">No articles found</p>
              </div>
            </div>
          ) : (
            <PostList posts={posts} />
          )}

          {/* <div className="w-full flex justify-center items-center mt-10">
            <button className="text-black bg-white px-4 py-2 rounded-2xl cursor-pointer">
              Cargar más...
            </button>
          </div> */}
        </section>
      </main>
    );
}
