"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import { useParams } from "next/navigation";
import { Service, services } from "@/data/services";
import Link from "next/link";

import { useSearchParams } from "next/navigation";
import { IconArrowRight } from "@tabler/icons-react";

export default function DetailService() {
  const params = useParams();

  const searchParams = useSearchParams();

  const serviceId = searchParams?.get("s");

  const [service, setService] = useState<Service | null>(null);

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
    if (params?.id) {
      const findService =
        services.find(
          (service) => slugify(service.title) === slugify(params.id!.toString())
        ) || services[0];
      setService(findService);
    }
  }, []);

  useEffect(() => {
    // Asegurarse de que el DOM esté completamente cargado antes de hacer scroll
    if (!serviceId) return;
    const timer = setTimeout(() => {
      const section = document.getElementById(serviceId);
      if (section) {
        const position =
          section.getBoundingClientRect().top + window.pageYOffset; // Posición de la sección en el documento
        window.scrollTo({
          top: position - 210, // Desplazamiento personalizado
          behavior: "smooth", // Scroll suave
        });
      }
    }, 100);

    // Limpiar el timeout cuando el componente se desmonte
    return () => clearTimeout(timer);
  }, [serviceId]);

  if (service === null) {
    return null;
  } else
    return (
      <main className="w-full flex flex-col justify-start items-center text-sm relative min-h-dvh">
        <section className="w-full h-[60vh] max-lg:max-h-[250px]  flex justify-center items-center relative bg-[#001D38]/85 p-20 max-lg:p-5 overflow-hidden">
          <Image
            width={2000}
            height={2000}
            src={service.image}
            alt="bg-hero"
            className="w-full h-full absolute top-0 right-0 object-cover -z-10 saturate-200"
          />
          <h1 className="text-white font-zain text-8xl font-semibold text-center z-10 max-lg:text-5xl  lg:max-w-[50%] max-lg:pt-10">
            {service?.title.slice(0, -2)}
            <span className="text-secondary">{service?.title.slice(-2)}</span>
          </h1>
        </section>

        {/* <section className="px-20 w-full mt-10">
          <section className="w-full h-[60vh] max-lg:max-h-[250px]  flex justify-center items-center relative bg-[#001D38]/85 p-20 max-lg:p-5 rounded-4xl overflow-hidden ">
            <Image
              width={2000}
              height={2000}
              src={service.image}
              alt="bg-hero"
              className="w-full h-full absolute top-0 right-0 object-cover -z-10 saturate-200"
            />
            <h1 className="text-white font-zain text-8xl font-semibold text-center z-10 max-lg:text-5xl  lg:max-w-[50%] max-lg:pt-10">
              {service?.title}
            </h1>
          </section>
        </section> */}

        <section className="w-full flex flex-col justify-start items-center py-20 gap-30 max-lg:px-3">
          {service.text.map(({ title, text, image }, i) => (
            <div
              key={i}
              className={`p-2 w-full max-w-[1400px] text-white flex max-lg:flex-col justify-between rounded-4xl items-center gap-10 bg-primary/95 overflow-hidden relative ${
                i % 2 === 0 ? "flex-row-reverse" : "flex-row"
              }`}
              id={slugify(title)}
            >
              <div className="w-[50%] max-lg:w-full max-lg:pt-10 md:px-6 max-lg:px-3">
                <h2 className="text-5xl font-zain font-semibold">{title}</h2>
                <p className="text-base opacity-70">{text}</p>

                <Link
                  href={"/contact"}
                  className="bg-secondary rounded-full px-6 py-4 flex justify-center items-center gap-2 font-medium text-white w-max mt-10"
                >
                  I am interested
                  <IconArrowRight className="-rotate-45" />
                </Link>
              </div>

              <Image
                width={900}
                height={900}
                src={image}
                alt={service?.title || "image-service"}
                className="lg:flex-1 h-[500px] max-lg:h-[400px] max-md:h-[300px] lg:aspect-square rounded-3xl saturate-200 object-cover"
              />

              <Image
                width={900}
                height={900}
                src={image}
                alt={service?.title || "image-service"}
                className={`w-[60%] h-full absolute top-0 right-0 -z-10 ${
                  i % 2 === 0 ? "right-0" : "left-0"
                }`}
              />
            </div>
          ))}
        </section>
      </main>
    );
}
