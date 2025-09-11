import Image from "next/image";
import React from "react";

import bgHero from "@/assets/bg-hero2.png";

import tank1 from "@/assets/services/tank/1.webp";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

export default function About() {
  return (
    <main className="w-full flex flex-col justify-start items-center text-sm min-h-dvh pb-24">
      <section className="w-full h-[60vh] max-lg:max-h-[250px]  flex justify-center items-center relative bg-[#001D38]/85 p-20 max-lg:p-5 overflow-hidden">
        <Image
          width={2000}
          height={2000}
          src={bgHero}
          alt="bg-hero"
          className="w-full h-full absolute top-0 right-0 object-cover -z-10 saturate-200"
        />
        <h1 className="text-white font-zain text-8xl font-semibold text-center z-10 max-lg:text-5xl  lg:max-w-[50%] max-lg:pt-10">
          {"About".slice(0, -2)}
          <span className="text-secondary">{"About".slice(-2)}</span>
        </h1>
      </section>

      <section className="w-full h-dvh min-h-max max-w-[1280px] py-20 flex max-lg:flex-col justify-between items-center gap-x-20 gap-y-10 max-lg:px-5">
        <div className="flex flex-col justify-center items-start w-[49%] max-lg:w-full gap-y-6">
          <div>
            <h2 className="font-zain text-5xl font-bold">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h2>
            <p>
              At Premium Coat, we are committed to delivering top-quality
              industrial and commercial painting solutions. With years of
              experience in the industry, we specialize in protective coatings,
              surface restoration, and high-performance finishes that enhance
              both aesthetics and durability. Our team of experts uses the
              latest technology and premium materials to ensure long-lasting
              results, even in the most demanding environments. <br /> <br /> We
              take pride in our professionalism, attention to detail, and
              dedication to customer satisfaction. Whether it&apos;s a
              large-scale industrial facility or specialized equipment, we
              provide tailored solutions that meet the highest industry
              standards. At Premium Coat, quality and reliability are at the
              core of everything we do.
            </p>
          </div>

          <Link
            href={"/#works"}
            className="bg-secondary rounded-full px-6 py-4 flex text-white font-medium gap-2"
          >
            Go to About us Page
            <IconArrowRight />
          </Link>
        </div>

        <div className="flex justify-center items-center flex-1 h-full gap-3 ">
          <Image
            src={tank1}
            alt=""
            width={900}
            height={1080}
            className="w-[50%] h-full rounded-3xl object-cover"
          />
          <div className="flex-1 h-full flex flex-col justify-between items-center gap-y-3">
            <Image
              src={tank1}
              alt=""
              width={900}
              height={1080}
              className="w-full h-[50%] rounded-3xl"
            />

            <Image
              src={tank1}
              alt=""
              width={900}
              height={1080}
              className="w-full h-[50%] rounded-3xl"
            />
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1280px] flex flex-col justify-center items-center gap-5 pt-10 max-lg:px-5">
        <div className="w-full flex justify-between items-center border-t border-black pt-10 max-md:flex-col max-md:items-start">
          <h3 className="font-zain text-9xl max-md:text-7xl font-semibold leading-24">
            200+
          </h3>
          <p className="font-medium text-black/70 max-w-[500px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
        </div>

        <div className="w-full flex justify-between items-center border-t border-black pt-10 max-md:flex-col max-md:items-start">
          <h3 className="font-zain text-9xl max-md:text-7xl font-semibold leading-24">
            30 Years
          </h3>
          <p className="font-medium text-black/70 max-w-[500px]">
            With over 30 years of experience in the industrial and commercial
            sectors, we have successfully completed more than 1,000 projects,
            working with hundreds of satisfied clients across the region. Our
            team brings decades of expertise, using industry-leading techniques
            and high-quality materials to ensure durability and precision in
            every job. From large-scale industrial facilities to specialized
            equipment, we have the knowledge and skill to deliver long-lasting
            results that meet the highest standards.
          </p>
        </div>

        <div className="w-full flex justify-between items-center border-t border-black pt-10 max-md:flex-col max-md:items-start">
          <h3 className="font-zain text-9xl max-md:text-7xl font-semibold leading-24">
            4.8/5
          </h3>
          <p className="font-medium text-black/70 max-w-[500px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
        </div>
      </section>

      <section className="w-full max-w-[1280px] flex flex-col justify-center items-center pb-20 pt-30 max-lg:px-5">
        <h2 className="text-5xl font-zain font-bold">Our Location</h2>

        <p className="text-text-secondary opacity-70 text-base mb-5 max-w-[500px] text-center">
          We are Toronto-based painters serving Canadian clients throughout
          Toronto, GTA, and most of Ontario.
        </p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.90977287243!2d-79.54286422431441!3d43.71837095799874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20Ontario%2C%20Canad%C3%A1!5e0!3m2!1ses!2sar!4v1742243905921!5m2!1ses!2sar"
          width="600"
          height="400"
          loading="lazy"
          className="w-full aspect-video rounded-4xl"
        ></iframe>
      </section>
    </main>
  );
}
