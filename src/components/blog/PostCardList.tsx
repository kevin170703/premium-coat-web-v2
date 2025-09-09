import { IconPencil, IconTrash } from "@tabler/icons-react";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function PostCardList({
  id,
  coverImage,
  title,
  date,
}: {
  id: string;
  title: string;
  date: string;
  coverImage: string;
}) {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");

      setLoading(true);
      await axios.delete(
        `https://blog-molokaih.onrender.com/api/posteos/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      window.location.reload();

      // if (onDelete) onDelete(id);
    } catch (error) {
      console.error(error);
      alert("No se pudo eliminar el post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Card */}
      <div className="w-[32%] max-2xl:w-[48%] max-md:w-full min-h-[270px] flex flex-col justify-between items-start gap-y-4 bg-active text-white p-4 rounded-3xl border-active bg-white/3 border border-white/10 backdrop-blur-lg relative overflow-hidden">
        <div className="absolute -left-[35%] -top-[50%] w-[50%] h-auto aspect-square rounded-full blur-2xl opacity-60 bg-radial-[at_50%_50%] py-20 from-white/40 to-black to-100% -z-10"></div>

        <div className="w-full flex flex-col justify-start items-center gap-4">
          <Image
            width={500}
            height={500}
            src={coverImage}
            alt={title}
            className="w-full aspect-3/1 rounded-2xl  object-cover"
          />

          <div className="w-full">
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-white/70">{date}</p>
          </div>
        </div>

        <div className="w-full flex justify-start items-center gap-2">
          <Link
            href={`/blog/admin/edit-article/${id}`}
            className="bg-green-400/5 px-3 py-1 rounded-xl border border-white/10 flex justify-center items-center gap-2 cursor-pointer"
          >
            <IconPencil className="text-green-400 size-5" />
            Editar
          </Link>

          <button
            onClick={() => setShowModal(true)}
            className="bg-red-400/5 px-3 py-1 rounded-xl border border-white/10 flex justify-center items-center gap-2 cursor-pointer"
          >
            <IconTrash className="text-red-400 size-5" />
            Eliminar
          </button>
        </div>
      </div>

      {/* Modal de confirmación */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/50 z-100">
          <div className="bg-[#151515] text-white border border-white/10 rounded-2xl p-6 w-[350px] shadow-lg flex flex-col justify-center items-center relative overflow-hidden">
            <div className="bg-red-400 rounded-full w-[50%] aspect-square absolute -top-[50%] z-0 blur-2xl opacity-30"></div>

            <div className="bg-red-500 rounded-full p-3 mb-4 z-10">
              <IconTrash className="size-7" />
            </div>

            <h2 className="text-lg font-semibold mb-4">
              ¿Seguro que quieres eliminar este post?
            </h2>
            <div className="w-full flex justify-center items-center gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-xl bg-white text-black text-sm cursor-pointer w-[48%]"
                disabled={loading}
              >
                Cancelar
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 rounded-xl bg-red-800 border border-red-500 text-white hover:text-red-200 text-sm cursor-pointer w-[48%] font-medium transition-colors"
                disabled={loading}
              >
                {loading ? "Eliminando..." : "Eliminar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
