"use client";
import {
  IconFilePlus,
  IconHome,
  IconNews,
  IconTags,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import logo from "@/assets/logos/horizontal-black.png";
import logoUser from "@/assets/logos/isotipo-white.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathname = usePathname();

  const [selectLink, setSelectLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (pathname) {
      const divideUrl = pathname.split("/");
      setSelectLink(divideUrl[divideUrl.length - 1] || "/");
    }
  }, [pathname]);

  return (
    <>
      {/* Botón toggle solo visible en mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-30 text-black bg-black rounded-lg p-1"
      >
        {isOpen ? (
          <IconX className="size-8" />
        ) : (
          <IconMenu2 className="size-8" />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 z-20 bg-white text-black flex flex-col justify-between items-start gap-10 px-6 py-10 h-dvh border-r border-black/10 transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="flex justify-start items-center gap-2 max-md:mt-10">
          <Image
            src={logo}
            width={500}
            height={500}
            alt="logo"
            className="size-8 w-auto"
          />
        </div>

        <div className="space-y-10 flex-1 ">
          <Link
            href={"/"}
            className={`flex justify-start items-center gap-2 px-4 py-2 rounded-2xl text-black/70`}
            onClick={() => setIsOpen(false)}
          >
            <IconHome />
            <p>Inicio</p>
          </Link>

          <div className="w-full space-y-2 border-t border-white/10 pt-4">
            <h2 className="font-medium">Blogs</h2>

            <Link
              href={"/blog/admin/list-articles"}
              className={`min-w-[250px] flex justify-start items-center gap-2 px-4 py-2 ${
                selectLink === "list-articles"
                  ? "rounded-full bg-primary/10"
                  : "text-black/70 border-transparent"
              }`}
              onClick={() => setIsOpen(false)}
            >
              <IconNews />
              <p>Articulos</p>
            </Link>

            <Link
              href={"/blog/admin/new-article"}
              className={`min-w-[250px] flex justify-start items-center gap-2 px-4 py-2 ${
                selectLink === "new-article"
                  ? "rounded-full bg-primary/10"
                  : "text-black/70 border-transparent"
              }`}
              onClick={() => setIsOpen(false)}
            >
              <IconFilePlus />
              <p>Crear articulo</p>
            </Link>

            <Link
              href={"/blog/admin/list-tags"}
              className={`min-w-[250px] flex justify-start items-center gap-2 px-4 py-2 ${
                selectLink === "list-tags"
                  ? "rounded-full bg-primary/10"
                  : "text-black/70 border-transparent"
              }`}
              onClick={() => setIsOpen(false)}
            >
              <IconTags />
              <p>Etiquetas</p>
            </Link>
          </div>
        </div>

        <div className="pl-4 pr-6 py-4 min-w-[250px] rounded-2xl bg-primary/10 shadow-xl">
          <div className="flex justify-start items-center gap-2">
            <div className="rounded-full overflow-hidden p-2 aspect-square bg-primary">
              <Image
                src={logoUser}
                width={500}
                height={500}
                alt="logo"
                className="size-8 object-contain "
              />
            </div>
            <div>
              <p>Premium coat</p>
              <p className="text-black/70 text-xs">hello@premiumcoat.ca</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
