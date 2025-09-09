import { IconTrash, IconX } from "@tabler/icons-react";
import axios from "axios";
import React, { useState } from "react";

export default function TagCardList({
  name,
  id,
}: {
  name: string;
  id: number;
}) {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");

      setLoading(true);
      await axios.delete(
        `https://blog-molokaih.onrender.com/api/categorias/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("No se pudo eliminar el post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Tag */}
      <div className="space-y-2">
        <div className="flex justify-center items-center gap-10 bg-green-600/20 rounded-full px-4 py-2 text-center border border-white/20">
          <p className="flex-1">{name}</p>

          <button
            onClick={() => setShowModal(true)}
            className="flex justify-center items-center gap-2 cursor-pointer text-white/70 hover:text-red-400 transition-colors"
          >
            <IconX className="size-5" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/50 z-100">
          <div className="bg-[#151515] text-white border border-white/10 rounded-2xl p-6 w-[350px] shadow-lg flex flex-col justify-center items-center relative overflow-hidden">
            <div className="bg-red-400 rounded-full w-[50%] aspect-square absolute -top-[50%] z-0 blur-2xl opacity-30"></div>

            <div className="bg-red-500 rounded-full p-3 mb-4 z-10">
              <IconTrash className="size-7" />
            </div>

            <h2 className="text-lg font-semibold mb-4">
              ¿Seguro que quieres eliminar esta etiqueta?
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
