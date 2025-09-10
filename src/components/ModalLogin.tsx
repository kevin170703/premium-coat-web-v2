"use client";
import React, { useState } from "react";
import Input from "@/components/Input";

import logo from "@/assets/logos/isotipo-blue.png";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function ModalLogin() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.replace("/"); // reemplaza en el historial
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://blog-molokaih.onrender.com/api/login",
        {
          email: username, // el valor del input "Usuario"
          password: password,
        }
      );

      console.log(res.data);

      const { token, user } = res.data;

      // Guardamos token y usuario en localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      alert("Inicio de sesión exitoso ✅");
      window.location.reload();
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message || "Error al iniciar sesión ❌");
      } else if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Ocurrió un error inesperado ❌");
      }
    }
  };

  return (
    <div className="w-full min-h-dvh flex justify-center items-center relative overflow-hidden">
      <div className="absolute -right-1/12 -bottom-2/4 w-[50%] h-auto aspect-square rounded-full blur-2xl opacity-60 bg-radial-[at_50%_50%] py-20 from-white/40 to-black to-100% -z-10"></div>

      <div className="absolute -left-1/12 -top-2/4 w-[50%] h-auto aspect-square rounded-full blur-2xl opacity-60 bg-radial-[at_50%_50%] py-20 from-white/40 to-black to-100% -z-10"></div>
      <form
        onSubmit={handleLogin}
        className="shadow-lg rounded-xl p-6 w-[400px] flex flex-col gap-4 justify-center items-center"
      >
        <Image
          src={logo}
          width={500}
          height={500}
          alt="logo"
          className="size-16 mb-4"
        />

        <h2 className="text-4xl font-medium text-center -mb-2">
          Bienvenido Admin
        </h2>
        <p className="text-center mb-10 text-white/70">
          Si no eres admisitrador{" "}
          <Link
            href={"/"}
            onClick={handleClick}
            className="text-primary font-medium"
          >
            click aqui
          </Link>
        </p>

        <Input
          id="user"
          name="user"
          label={"Usuario"}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Admin"
          value={username}
        />
        {/* <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded-lg px-3 py-2"
        /> */}

        <Input
          id="password"
          name="password"
          label={"Contraseña"}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="1234"
          value={password}
        />
        {/* <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded-lg px-3 py-2"
        /> */}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary/10 border border-white/10 text-white px-6 py-3 rounded-full hover:scale-105 active:scale-95 transition-transform cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Ingresando..." : "Ingresar"}
        </button>
      </form>
    </div>
  );
}
