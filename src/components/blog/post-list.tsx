import { PostCard } from "./post-card";

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

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      {posts.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-muted-foreground">
            No se encontraron posts que coincidan con tu búsqueda.
          </p>
        </div>
      )}
    </div>
  );
}
