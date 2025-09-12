import Link from "next/link";
import logoWhite from "@/assets/logos/horizontal-white.png";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import Image from "next/image";

import bgHero from "@/assets/services/industrial-machine/8.webp";
import { services } from "@/data/services";

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD") // Elimina acentos
    .replace(/[\u0300-\u036f]/g, "") // Remueve caracteres diacríticos
    .replace(/[^\w\s-]/g, "") // Elimina caracteres especiales
    .replace(/\s+/g, "-") // Reemplaza espacios por guiones
    .replace(/-+/g, "-"); // Evita múltiples guiones seguidos
}

export default function Footer() {
  return (
    <footer className="w-full px-60 max-2xl:px-5 bg-[#001D38]/80  text-white relative">
      <Image
        src={bgHero}
        width={1920}
        height={1080}
        alt="bg-hero"
        className="absolute w-full h-full top-0 left-0 -z-10 object-cover"
      />

      <div className="w-full flex flex-wrap gap-y-10 justify-between items-start pt-20 pb-10 ">
        <div className="max-lg:w-full lg:flex-1 space-y-4">
          <div className="max-w-[42%] max-md:max-w-full">
            <Image
              src={logoWhite}
              width={500}
              height={500}
              alt="logo"
              className="h-15 w-auto"
            />
            <p>
              High-quality coatings and professional finishes for residential,
              commercial, and industrial projects in Toronto and across Ontario.
            </p>
          </div>
          <div className="flex justify-start items-center gap-2 ">
            <Link
              href={""}
              target="_blank"
              className="flex justify-start items-center gap-2"
            >
              <IconBrandWhatsapp className="size-7" />
            </Link>

            <Link
              href={"https://www.instagram.com/premiumcoatca/"}
              target="_blank"
              className="flex justify-start items-center gap-2"
            >
              <IconBrandInstagram className="size-7" />
            </Link>

            <Link
              href={
                "https://www.facebook.com/share/17sTcFB5qy/?mibextid=wwXIfr"
              }
              target="_blank"
              className="flex justify-start items-center gap-2"
            >
              <IconBrandFacebook className="size-7" />
            </Link>
          </div>
        </div>

        <div className="flex max-md:flex-col gap-10 text-sm ">
          <div className="flex flex-col gap-y-3 gap-x-4">
            <p className="font-zain text-2xl font-semibold">Services</p>
            {services.map((service) => (
              <Link
                key={service.title}
                href={`/services/${slugify(service.title)}`}
              >
                {service.title}
              </Link>
            ))}

            {/* <Link href={"/"}>Commercial Painting</Link>

            <Link href={"/"}>Metal Deck Ceiling Painting</Link>

            <Link href={"/"}>Tank Painting</Link> */}
          </div>

          <div className="flex flex-col gap-y-3 gap-x-4">
            <p className="font-zain text-2xl font-semibold">Links</p>
            <Link href={"/"}>Home</Link>

            <Link href={"/"}>About</Link>

            <Link href={"/"}>Blog</Link>

            <Link href={"/"}>Gallery</Link>

            <Link href={"/"}>Contact</Link>
          </div>

          <div className="flex flex-col space-y-3">
            <p className="font-zain text-2xl font-semibold">Contact</p>

            <p>hello@premiumcoat.ca</p>

            <p>+1 (437)-441-2531</p>
          </div>
        </div>
      </div>

      <div className="w-full border-t-2 border-white pb-20 pt-10 text-sm flex justify-between flex-wrap gap-5 items-center">
        <p>© 2025 PREMIUM COAT all rights reserved</p>
        <Link href={"https://www.molokaih.ca/"} target="_blank">
          Developed by{" "}
          <span className="font-semibold text-[#25D9D8]">Molokaih</span>
        </Link>
      </div>
    </footer>
  );
}
