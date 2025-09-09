import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Post no encontrado
        </h1>
        <p className="text-muted-foreground mb-8">
          El post que buscas no existe o ha sido eliminado.
        </p>
        <Link href="/blog">
          <button>Volver al blog</button>
        </Link>
      </div>
    </div>
  );
}
