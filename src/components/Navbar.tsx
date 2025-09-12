"use client";

import React, { useEffect, useRef, useState } from "react";

import logoWhite from "@/assets/logos/horizontal-white.png";
import logoBlack from "@/assets/logos/horizontal-black.png";

import Image from "next/image";
import { IconCornerDownRight, IconMenuDeep, IconX } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { services } from "@/data/services";

export default function Navbar() {
  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState(false);

  const [openMenuServices, setOpenMenuServices] = useState(false);

  const [menuSubServices, setSubMenuServices] = useState({
    open: false,
    id: "20",
  });

  const [selectLink, setSelectLink] = useState("");

  const [scrolled, setScrolled] = useState(false);

  function slugify(text: string) {
    return text
      .toLowerCase()
      .normalize("NFD") // Elimina acentos
      .replace(/[\u0300-\u036f]/g, "") // Remueve caracteres diacríticos
      .replace(/[^\w\s-]/g, "") // Elimina caracteres especiales
      .replace(/\s+/g, "-") // Reemplaza espacios por guiones
      .replace(/-+/g, "-"); // Evita múltiples guiones seguidos
  }

  useEffect(() => {
    if (pathname) {
      const divideUrl = pathname.split("/");
      if (divideUrl[1] === "services") {
        setSelectLink("services");
        return;
      }

      if (divideUrl[1] === "blog") {
        setSelectLink("blog");
        return;
      }
      setSelectLink(divideUrl[divideUrl.length - 1] || "/");
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed text-white w-full px-20 max-md:px-5  pb-4 flex justify-between items-center gap-10 z-[1000] ${
        scrolled ? "bg-primary py-6" : "pt-10 bg-transparent"
      }`}
    >
      <Link href={"/"}>
        <Image
          src={selectLink === "blog" && !scrolled ? logoBlack : logoWhite}
          width={500}
          height={200}
          alt="logoWhite"
          className="h-10 w-auto"
        />
      </Link>

      <button
        onClick={() => setOpenMenu(true)}
        className={`cursor-pointer ${
          selectLink === "blog" && !scrolled ? "text-black" : "text-white"
        }`}
      >
        <IconMenuDeep className="size-10" />
      </button>

      {openMenu && (
        <div className="absolute w-80 max-md:w-full max-md:top-0 max-md:left-0 max-md:rounded-none max-md:h-dvh space-y-6 h-max  right-11 top-4 rounded-3xl p-6 max-md:pt-11 max-md:px-5   bg-white shadow-lg text-black">
          <div className="w-full flex justify-end items-center">
            <button
              onClick={() => setOpenMenu(false)}
              className="flex justify-center items-center bg-primary rounded-full px-4 py-2 text-white cursor-pointer"
            >
              Menu
              <IconX className="size-6" />
            </button>
          </div>
          <div className="space-y-2">
            <div className="uppercase font-medium text-2xl">
              <Link href={`/`} onClick={() => setOpenMenu(false)}>
                Home
              </Link>
            </div>

            <div className=" font-medium text-2xl">
              <button
                onClick={() => setOpenMenuServices(!openMenuServices)}
                className="uppercase cursor-pointer"
              >
                Services
              </button>

              {openMenuServices && (
                <div className="text-base flex flex-col justify-center items-start gap-y-4 my-4 ml-3 relative max-md:hidden">
                  {services.map((service) => (
                    <button
                      key={service.title}
                      className={` ${
                        menuSubServices.id === service.id
                          ? "opacity-100 text-secondary"
                          : "opacity-70"
                      } hover:opacity-100 text-start cursor-pointer`}
                      onClick={() =>
                        setSubMenuServices({
                          open: true,
                          id: service.id,
                        })
                      }
                    >
                      {service.title}

                      {menuSubServices.id === service.id &&
                        menuSubServices.open && (
                          <IconCornerDownRight className="absolute left-0 size-6" />
                        )}

                      {menuSubServices.id === service.id &&
                        menuSubServices.open && (
                          <div className="flex flex-col justify-center items-start gap-2 my-1 ml-7 text-black">
                            {service.services.map((subService) => (
                              <Link
                                key={subService}
                                href={`/services/${slugify(
                                  service.title
                                )}?s=${slugify(subService)}`}
                                onClick={() => {
                                  setOpenMenuServices(false);
                                  setOpenMenu(false);
                                }}
                                className="opacity-70 hover:opacity-100"
                              >
                                {subService}
                              </Link>
                            ))}
                          </div>
                        )}
                    </button>
                  ))}
                </div>
              )}

              {openMenuServices && (
                <div className="text-base flex flex-col justify-center items-start gap-y-4 my-4 ml-3 relative md:hidden">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={`/services/${slugify(service.title)}`}
                      className={` ${
                        menuSubServices.id === service.id
                          ? "opacity-100 text-secondary"
                          : "opacity-70"
                      } hover:opacity-100 text-start cursor-pointer`}
                      onClick={() => {
                        setOpenMenuServices(false);
                        setOpenMenu(false);
                      }}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="uppercase font-medium text-2xl">
              <Link href={`/about`} onClick={() => setOpenMenu(false)}>
                About
              </Link>
            </div>

            <div className="uppercase font-medium text-2xl">
              <Link href={`/blog`} onClick={() => setOpenMenu(false)}>
                Blog
              </Link>
            </div>

            <div className="uppercase font-medium text-2xl">
              <Link href={`/gallery`} onClick={() => setOpenMenu(false)}>
                Gallery
              </Link>
            </div>

            <div className="uppercase font-medium text-2xl">
              <Link href={`/contact`} onClick={() => setOpenMenu(false)}>
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-2 text-xs mt-10">
            <p>hello@premiumcoat.ca</p>

            <p>+1 (437)-441-2531</p>
          </div>
        </div>
      )}
    </header>
  );
}
