import { IconArrowUp } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

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

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="relative  w-[400px] h-[550px] max-md:h-[550px] max-lg:max-lg:aspect-2/1 max-lg:w-full max-lg:h-max max-md:w-full max-md:aspect-2/3 flex flex-col justify-between items-center ">
      <Link
        href={`/blog/${post.id}`}
        className="absolute top-0 right-0 z-10 p-6 hover:scale-105 transition-transform active:scale-100"
      >
        <div className="bg-white rounded-full text-black p-2">
          <IconArrowUp className="rotate-45" />
        </div>
      </Link>

      <Image
        width={700}
        height={700}
        alt={post.titulo}
        src={post.imagenes[0].url}
        className="w-full flex-1 object-cover z-0 group-hover:opacity-60 duration-400 transition-all rounded-4xl border border-white/10"
      />

      <div className="z-10 relative w-full bg-transparent h-[20%] flex flex-col justify-start gap-3 mt-2 items-start group-hover: transition-all">
        <p className="text-secondary font-medium text-sm">
          {post.categorias[0].nombre}
        </p>
        <p className="font-bold font-zain text-2xl max-md:leading-6 leading-7 max-md:max-h-[75px] line-clamp-3 ">
          {post.titulo}
        </p>
        {/* <p className="opacity-80 font-light line-clamp-2">{post.descripcion}</p> */}
      </div>
    </div>
  );
}
