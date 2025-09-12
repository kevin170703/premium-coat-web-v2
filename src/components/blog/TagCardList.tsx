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
        `https://blog-premium-coat.onrender.com/api/categorias/${id}`,
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
        <div className="flex justify-center items-center gap-10 bg-primary text-white rounded-full px-4 py-2 text-center">
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
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/10 z-100">
          <div className="bg-white text-black  rounded-2xl p-6 w-[350px] shadow-lg flex flex-col justify-center items-center relative overflow-hidden">
            <div className="bg-red-500 text-white rounded-full p-3 mb-4 z-10">
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
                className="px-4 py-2 rounded-xl bg-red-500 text-white text-sm cursor-pointer w-[48%] font-medium transition-colors"
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
