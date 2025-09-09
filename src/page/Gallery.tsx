"use client";

import c1 from "@/assets/services/commercial/1.webp";
import c2 from "@/assets/services/commercial/2.webp";
import c3 from "@/assets/services/commercial/3.webp";
import c8 from "@/assets/services/commercial/8.webp";
import c10 from "@/assets/services/commercial/10.webp";
import c11 from "@/assets/services/commercial/11.webp";
import c12 from "@/assets/services/commercial/12.webp";
import c13 from "@/assets/services/commercial/13.webp";
import c22 from "@/assets/services/commercial/22.webp";
import c23 from "@/assets/services/commercial/23.webp";
import c24 from "@/assets/services/commercial/24.webp";

import im1 from "@/assets/services/industrial-machine/1.webp";
import im2 from "@/assets/services/industrial-machine/2.webp";
import im3 from "@/assets/services/industrial-machine/3.webp";
import im4 from "@/assets/services/industrial-machine/4.webp";
import im5 from "@/assets/services/industrial-machine/5.webp";
import im6 from "@/assets/services/industrial-machine/6.webp";

import ip1 from "@/assets/services/industrial-plant/1.webp";
import ip2 from "@/assets/services/industrial-plant/2.webp";

import md1 from "@/assets/services/metal-deck/1.webp";
import md2 from "@/assets/services/metal-deck/2.webp";

import t1 from "@/assets/services/tank/1.webp";
import t2 from "@/assets/services/tank/2.webp";
import t3 from "@/assets/services/tank/3.webp";
import t4 from "@/assets/services/tank/4.webp";

import e1 from "@/assets/services/exterior/9.webp";
import e2 from "@/assets/services/exterior/2.webp";
import e3 from "@/assets/services/exterior/3.webp";
import e4 from "@/assets/services/exterior/4.webp";
import e5 from "@/assets/services/exterior/5.webp";
import e6 from "@/assets/services/exterior/6.webp";
import e7 from "@/assets/services/exterior/7.webp";
import e8 from "@/assets/services/exterior/8.webp";
import e9 from "@/assets/services/exterior/1.webp";
import e10 from "@/assets/services/exterior/10.webp";

import i1 from "@/assets/services/interior/1.webp";
import i2 from "@/assets/services/interior/2.webp";
import i3 from "@/assets/services/interior/3.webp";
import i4 from "@/assets/services/interior/4.webp";
import i5 from "@/assets/services/interior/5.webp";
import i6 from "@/assets/services/interior/6.webp";
import i7 from "@/assets/services/interior/7.webp";
import i8 from "@/assets/services/interior/8.webp";
import i9 from "@/assets/services/interior/9.webp";
import i10 from "@/assets/services/interior/10.webp";

import { useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const [serviceSelected, setServiceSelected] = useState("interior");

  const images = {
    interior: [
      i1.src,
      i2.src,
      i9.src,
      i3.src,
      i7.src,
      i5.src,
      i6.src,
      i4.src,
      i8.src,
      i10.src,
    ],

    exterior: [
      ip1.src,
      ip2.src,
      e1.src,
      e2.src,
      e3.src,
      e10.src,
      e4.src,
      e5.src,
      e6.src,
      e7.src,
      e8.src,
      e9.src,
    ],

    commercial: [
      c10.src,
      c11.src,
      c12.src,
      c13.src,
      c1.src,
      c2.src,
      c24.src,
      c3.src,
      c8.src,
      c22.src,
      c23.src,
    ],

    industrial: [
      im1.src,
      im2.src,
      md1.src,
      md2.src,
      im3.src,
      im4.src,
      im5.src,
      im6.src,
      t1.src,
      t2.src,
      t3.src,
      t4.src,
    ],
  };

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const services = [
    {
      name: "Interior",
    },
    {
      name: "Exterior",
    },

    {
      name: "Commercial",
    },

    {
      name: "Industrial",
    },
  ];

  return (
    <main className="w-full flex flex-col justify-start items-center text-sm min-h-dvh py-24 ">
      <section className="h-max py-30">
        <div className="text-center flex flex-col justify-center items-center">
          <h1 className="font-zain text-6xl font-bold">Gallery</h1>
          <p className="opacity-70 text-lg max-w-[450px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>

        <div className="flex justify-center items-center gap-4 mt-10">
          {services.map((service) => (
            <button
              onClick={() =>
                setServiceSelected(service.name.toLocaleLowerCase())
              }
              className={`px-6 py-2 rounded-full text-lg border cursor-pointer  ${
                serviceSelected === service.name.toLocaleLowerCase()
                  ? "bg-secondary text-white border-transparent"
                  : "border-secondary text-secondary"
              }`}
            >
              {service.name} Painting
            </button>
          ))}
        </div>
      </section>

      {/* Masonry gallery */}
      <section className="w-full columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3 px-5">
        {images &&
          images[serviceSelected].map((image, i) => (
            <img
              key={i}
              src={image}
              alt=""
              className="w-full h-auto object-cover rounded-3xl mb-4 cursor-pointer saturate-200"
              onClick={() => setSelectedImage(image)}
            />
          ))}
      </section>

      {/* Modal fullscreen */}
      {selectedImage && (
        <div
          className="fixed inset-0 backdrop-blur-lg bg-opacity-80 flex justify-center items-center z-[10000] "
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt=""
            className="max-w-[90%] max-h-[90%] object-contain rounded-xl saturate-200"
          />
        </div>
      )}
    </main>
  );
}
