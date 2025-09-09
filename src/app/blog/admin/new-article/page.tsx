"use client";

import { PostForm } from "@/components/blog/post-form";

export default function NewPostPage() {
  return (
    <div className="min-h-screen bg-background py-10">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl max-md:text-2xl font-medium text-foreground">
            Crear nuevo post
          </h1>
        </header>

        {/* Form */}
        <PostForm />
      </div>
    </div>
  );
}
