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
import { div } from "framer-motion/client";
import { IconMapPin } from "@tabler/icons-react";

interface ImageItem {
  src: string;
  location: string;
  title?: string;
  description?: string;
}

export default function Gallery() {
  const [serviceSelected, setServiceSelected] = useState("interior");

  const images: Record<string, ImageItem[]> = {
    interior: [
      { src: i1.src, location: "Living Room", title: "Interior 1" },
      { src: i2.src, location: "Bedroom", title: "Interior 2" },
      { src: i9.src, location: "Toronto", title: "Interior 3" },
      { src: i3.src, location: "Toronto", title: "Interior 4" },
      { src: i7.src, location: "Toronto", title: "Interior 5" },
      { src: i5.src, location: "Dining Room", title: "Interior 6" },
      { src: i6.src, location: "Office", title: "Interior 7" },
      { src: i4.src, location: "Stairs", title: "Interior 8" },
      { src: i8.src, location: "Toronto", title: "Interior 9" },
      { src: i10.src, location: "Toronto", title: "Interior 10" },
    ],

    exterior: [
      { src: ip1.src, location: "Front Yard", title: "Exterior 1" },
      { src: ip2.src, location: "Backyard", title: "Exterior 2" },
      { src: e1.src, location: "Facade", title: "Exterior 3" },
      { src: e2.src, location: "Balcony", title: "Exterior 4" },
      { src: e3.src, location: "Patio", title: "Exterior 5" },
      { src: e10.src, location: "Pool", title: "Exterior 6" },
      { src: e4.src, location: "Driveway", title: "Exterior 7" },
      { src: e5.src, location: "Garage", title: "Exterior 8" },
      { src: e6.src, location: "Roof", title: "Exterior 9" },
      { src: e7.src, location: "Terrace", title: "Exterior 10" },
      { src: e8.src, location: "Garden", title: "Exterior 11" },
      { src: e9.src, location: "Porch", title: "Exterior 12" },
    ],

    commercial: [
      { src: c10.src, location: "Storefront", title: "Commercial 1" },
      { src: c11.src, location: "Office Lobby", title: "Commercial 2" },
      { src: c12.src, location: "Showroom", title: "Commercial 3" },
      { src: c13.src, location: "Reception", title: "Commercial 4" },
      { src: c1.src, location: "Restaurant", title: "Commercial 5" },
      { src: c2.src, location: "Hotel Lobby", title: "Commercial 6" },
      { src: c24.src, location: "Café", title: "Commercial 7" },
      { src: c3.src, location: "Conference Room", title: "Commercial 8" },
      { src: c8.src, location: "Shopping Mall", title: "Commercial 9" },
      { src: c22.src, location: "Supermarket", title: "Commercial 10" },
      { src: c23.src, location: "Coworking", title: "Commercial 11" },
    ],

    industrial: [
      { src: im1.src, location: "Factory Floor", title: "Industrial 1" },
      { src: im2.src, location: "Warehouse", title: "Industrial 2" },
      { src: md1.src, location: "Workshop", title: "Industrial 3" },
      { src: md2.src, location: "Production Line", title: "Industrial 4" },
      { src: im3.src, location: "Storage Area", title: "Industrial 5" },
      { src: im4.src, location: "Loading Dock", title: "Industrial 6" },
      { src: im5.src, location: "Machinery Zone", title: "Industrial 7" },
      { src: im6.src, location: "Parking Lot", title: "Industrial 8" },
      { src: t1.src, location: "Tank 1", title: "Industrial 9" },
      { src: t2.src, location: "Tank 2", title: "Industrial 10" },
      { src: t3.src, location: "Tank 3", title: "Industrial 11" },
      { src: t4.src, location: "Tank 4", title: "Industrial 12" },
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
    <main className="w-full flex flex-col justify-start items-center text-sm min-h-dvh pb-24 ">
      <section className="w-full h-[60vh] max-lg:max-h-[250px]  flex justify-center items-center relative bg-[#001D38]/85 p-20 max-lg:p-5 overflow-hidden ">
        <Image
          width={2000}
          height={2000}
          src={t1}
          alt="bg-hero"
          className="w-full h-full absolute top-0 right-0 object-cover -z-10 saturate-200"
        />

        <h1 className="text-white font-zain text-8xl font-semibold text-center z-10 max-lg:text-5xl  lg:max-w-[50%] max-lg:pt-10">
          {"Gallery".slice(0, -2)}
          <span className="text-secondary">{"Gallery".slice(-2)}</span>
        </h1>
      </section>

      {/* <section className="lg:px-20 px-2 w-full pb-20">
        <section className="w-full h-[60vh] max-md:h-[100px] max-lg:max-h-[250px]  flex justify-center items-center relative bg-[#001D38]/85 p-20 max-lg:p-5 rounded-4xl overflow-hidden ">
          <Image
            width={2000}
            height={2000}
            src={t1}
            alt="bg-hero"
            className="w-full h-full absolute top-0 right-0 object-cover -z-10 saturate-200"
          />
          <h1 className="text-white font-zain text-8xl font-semibold text-center z-10 max-lg:text-5xl  lg:max-w-[50%]">
            Gallery
          </h1>
        </section>

        <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
          {services.map((service) => (
            <button
              key={service.name}
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

      <section className="h-max py-30 max-lg:pb-10">
        <div className="text-center flex flex-col justify-center items-center px-5">
          <h1 className="font-zain text-6xl font-bold">Gallery</h1>
          <p className="opacity-70 text-lg max-w-[450px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
          {services.map((service) => (
            <button
              key={service.name}
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

      <section className="relative h-max py-30 max-lg:pb-10 w-full ">
        <div className="size-40 bg-primary rounded-full absolute top-1/2 left-[10%] blur-2xl"></div>
        <div className="text-center flex flex-col justify-center items-center px-5">
          <h1 className="font-zain text-6xl font-bold">Gallery</h1>
          <p className="opacity-70 text-lg max-w-[450px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
          {services.map((service) => (
            <button
              key={service.name}
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
      </section> */}

      <section className="px-5 mb-5 w-full mt-10 pt-10 flex flex-col justify-center items-center text-center">
        <h2 className="font-zain text-7xl font-bold max-md:text-5xl leading-14 ">
          Work Performed with Quality <br /> and{" "}
          <span className="text-secondary">Precision</span>
        </h2>
        {/* <p className="text-lg max-w-[600px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p> */}
        <div className="w-full overflow-x-auto mt-10">
          <div className="w-full flex justify-center max-md:justify-start items-center gap-4   ">
            {services.map((service) => (
              <button
                key={service.name}
                onClick={() =>
                  setServiceSelected(service.name.toLocaleLowerCase())
                }
                className={`px-6 min-w-max py-2 rounded-full text-lg max-md:text-base border cursor-pointer font-medium  ${
                  serviceSelected === service.name.toLocaleLowerCase()
                    ? "bg-primary text-white border-transparent"
                    : "border-transparent text-primary"
                }`}
              >
                {service.name} Painting
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry gallery */}
      <section className="w-full columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3 px-5 max-md:px-2">
        {images &&
          images[serviceSelected].map((image, i) => (
            <div
              key={i}
              className="relative w-full h-auto  rounded-3xl mb-4 cursor-pointer overflow-hidden"
            >
              {/* <div className="w-full h-full absolute bottom-0 left-0 z-20 px-2 p-2 bg-gradient-to-t from-[#001B35]  to-transparent to-20% flex  justify-start items-end text-white">
                <div className="flex justify-center items-center gap-2">
                  <div className="bg-secondary rounded-full p-1.5 size-8">
                    <IconMapPin className="size-full" />
                  </div>
                  <p>{image.location}</p>
                </div>
              </div> */}
              <img
                src={image.src}
                alt=""
                className=" w-full h-auto  object-cover saturate-200 "
                onClick={() => setSelectedImage(image.src)}
              />
            </div>
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
