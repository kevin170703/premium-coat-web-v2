import Link from "next/link";
import logoWhite from "@/assets/logos/horizontal-white.png";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import Image from "next/image";

import bgHero from "@/assets/bg-hero.png";

export default function Footer() {
  return (
    <footer className="w-full px-20 max-md:px-5 bg-[#001D38]/80  text-white relative">
      <Image
        src={bgHero}
        width={1920}
        height={1080}
        alt="bg-hero"
        className="absolute w-full h-full top-0 left-0 -z-10 object-cover"
      />

      <div className="w-full flex flex-wrap gap-y-10 justify-between items-start py-6 ">
        <div className="space-y-2">
          <Image
            src={logoWhite}
            width={500}
            height={500}
            alt="logo"
            className="h-10 w-auto"
          />
          <div className="flex justify-start items-center gap-2 ">
            <Link
              href={""}
              target="_blank"
              className="flex justify-start items-center gap-2"
            >
              <IconBrandWhatsapp />
            </Link>

            <Link
              href={"https://www.instagram.com/premiumcoatca/"}
              target="_blank"
              className="flex justify-start items-center gap-2"
            >
              <IconBrandInstagram />
            </Link>

            <Link
              href={
                "https://www.facebook.com/share/17sTcFB5qy/?mibextid=wwXIfr"
              }
              target="_blank"
              className="flex justify-start items-center gap-2"
            >
              <IconBrandFacebook />
            </Link>
          </div>
        </div>

        <div className="flex max-lg:flex-col gap-10 text-sm ">
          <div className="flex flex-col space-y-3">
            <p className="font-zain text-2xl font-semibold">Services</p>
            <Link href={"/"}>Industrial Painting</Link>

            <Link href={"/"}>Commercial Painting</Link>

            <Link href={"/"}>Metal Deck Ceiling Painting</Link>

            <Link href={"/"}>Tank Painting</Link>
          </div>

          <div className="flex flex-col space-y-3">
            <p className="font-zain text-2xl font-semibold">Contact</p>

            <p>hello@premiumcoat.ca</p>

            <p>+1 (437)-441-2531</p>

            <p>2015 Davenport Rd, Toronto, ON M6N 1C5</p>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-[#999] py-6 text-sm flex justify-between flex-wrap gap-5 items-center">
        <p>@2025 PREMIUM COAT all rights reserved</p>
        <Link href={"https://www.molokaih.ca/"} target="_blank">
          Developed by{" "}
          <span className="font-semibold text-[#25D9D8]">Molokaih</span>
        </Link>
      </div>
    </footer>
  );
}
