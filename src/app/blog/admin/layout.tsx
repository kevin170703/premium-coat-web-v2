"use client";
import SideBar from "@/components/admin/SideBar";
import ModalLogin from "@/components/ModalLogin";
import React, { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  if (isLoggedIn === null) {
    return <div>Cargando...</div>; // evita parpadeo
  }

  if (!isLoggedIn) {
    return <ModalLogin />; // muestra el login
  }

  return (
    <div className="flex justify-between items-start h-dvh overflow-hidden">
      <SideBar />
      <div className="flex-1  max-h-full overflow-y-scroll">{children}</div>
    </div>
  ); // si hay sesión, renderiza el layout
}
