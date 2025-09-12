import Image from "next/image";
import React from "react";

import bgAbout from "@/assets/services/industrial-machine/1.webp";

import tank1 from "@/assets/services/tank/1.webp";
import industrialMachine1 from "@/assets/services/industrial-machine/1.webp";
import commercial1 from "@/assets/services/commercial/1.webp";

import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

export default function About() {
  return (
    <main className="w-full flex flex-col justify-start items-center text-sm min-h-dvh pb-24 p-2">
      <section className="w-full h-[60vh] max-lg:max-h-[250px]  flex justify-center items-center relative bg-[#001D38]/85 p-20 max-lg:p-5 overflow-hidden rounded-4xl">
        <Image
          width={2000}
          height={2000}
          src={bgAbout}
          alt="bg-hero"
          className="w-full h-full absolute top-0 right-0 object-cover -z-10 saturate-200"
        />
        <h1 className="text-white font-zain text-8xl font-semibold text-center z-10 max-lg:text-5xl  lg:max-w-[50%] max-lg:pt-10">
          {"About".slice(0, -2)}
          <span className="text-secondary">{"About".slice(-2)}</span>
        </h1>
      </section>

      <section className="w-full h-dvh max-h-max min-h-max max-w-[1280px] py-20 flex max-lg:flex-col justify-between items-center gap-x-20 gap-y-10 max-lg:px-3">
        <div className="flex flex-col justify-center items-start w-[49%] max-lg:w-full gap-y-6">
          <div>
            <h2 className="font-zain text-5xl font-bold">
              Premium Coat delivers expert painting services with lasting
              quality and care.
            </h2>
            <p className="text-lg">
              At Premium Coat, we provide high-quality industrial, commercial,
              and residential painting services in Toronto and across Ontario.
              With decades of experience, our team is dedicated to precision,
              durability, and customer satisfaction. Using premium coatings,
              modern equipment, and proven techniques, we deliver finishes
              designed to last. From factories and pipelines to office spaces
              and custom homes, we handle every project with care and expertise,
              always focused on enhancing the appearance and protection of every
              surface.
            </p>
          </div>

          <Link
            href={"/contact"}
            className="bg-secondary rounded-full px-6 py-4 flex text-white font-medium gap-2"
          >
            Contact us
            <IconArrowRight />
          </Link>
        </div>

        <div className="flex justify-center items-center flex-1 h-full gap-3 max-h-[70dvh]">
          <Image
            src={tank1}
            alt=""
            width={900}
            height={1080}
            className="w-[50%] h-full rounded-3xl object-cover"
          />
          <div className="flex-1 h-full flex flex-col justify-between items-center gap-y-3">
            <Image
              src={industrialMachine1}
              alt=""
              width={900}
              height={1080}
              className="w-full h-[50%] rounded-3xl"
            />

            <Image
              src={commercial1}
              alt=""
              width={900}
              height={1080}
              className="w-full h-[50%] rounded-3xl"
            />
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1280px] flex flex-col justify-center items-center gap-5 pt-10 max-lg:px-3">
        <div className="w-full flex justify-between items-center border-t border-secondary pt-10 max-md:flex-col max-md:items-start py-10">
          <h3 className="font-zain text-9xl max-md:text-7xl font-semibold leading-24">
            200<span className="text-secondary">+</span>
          </h3>
          <p className="font-medium text-black/70 max-w-[500px]">
            With more than 200 projects successfully completed across Toronto
            and Ontario, Premium Coat has built a reputation for reliability,
            precision, and craftsmanship. From industrial warehouses and
            commercial offices to residential spaces, each project reflects our
            commitment to quality and lasting protection, ensuring every surface
            looks its best for years to come.
          </p>
        </div>

        <div className="w-full flex justify-between items-center border-t border-secondary pt-10 max-md:flex-col max-md:items-start">
          <h3 className="font-zain text-9xl max-md:text-7xl font-semibold leading-24">
            30<span className="text-secondary">Years</span>
          </h3>
          <p className="font-medium text-black/70 max-w-[500px]">
            With over 30 years in the industry, Premium Coat has successfully
            completed more than 200 projects across Toronto and Ontario. As
            trusted home painters, exterior house painters, and commercial
            painting contractors in Toronto, we bring professionalism and
            consistent results that meet the highest standards.
          </p>
        </div>

        <div className="w-full flex justify-between items-center border-t border-secondary pt-10 max-md:flex-col max-md:items-start">
          <h3 className="font-zain text-9xl max-md:text-7xl font-semibold leading-24">
            4.8/<span className="text-secondary">5</span>
          </h3>
          <p className="font-medium text-black/70 max-w-[500px]">
            With an outstanding 4.8 out of 5 average client rating, Premium Coat
            is trusted by homeowners, businesses, and contractors alike for
            delivering consistent results that exceed expectations. Our
            dedication to customer satisfaction, attention to detail, and
            professional service have made us one of the most highly rated
            painting companies in Toronto and Ontario.
          </p>
        </div>
      </section>

      <section className="w-full max-w-[1280px] flex flex-col justify-center items-center pb-20 pt-30 max-lg:px-3">
        <h2 className="text-5xl font-zain font-bold">
          {" "}
          Serving Ontario & Nearby Regions
        </h2>

        <p className="text-text-secondary opacity-70 text-base mb-5 max-w-[500px] text-center">
          Proudly based in Toronto, delivering professional painting services
          across Ontario and extending to other Canadian cities.
        </p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.90977287243!2d-79.54286422431441!3d43.71837095799874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20Ontario%2C%20Canad%C3%A1!5e0!3m2!1ses!2sar!4v1742243905921!5m2!1ses!2sar"
          width="600"
          height="400"
          loading="lazy"
          className="w-full aspect-video rounded-4xl"
        ></iframe>

        <Link
          href={"/Contact"}
          className="bg-secondary rounded-full px-6 py-4 text-white mt-10"
        >
          Get a Free Quote
        </Link>
      </section>
    </main>
  );
}
