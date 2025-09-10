import React from "react";
import bgHero from "@/assets/bg-hero.png";
import bgFreeQuote from "@/assets/bg-free-quote.png";
import Image from "next/image";
import Link from "next/link";

import profile1 from "@/assets/profiles/1.png";
import profile2 from "@/assets/profiles/2.png";
import profile3 from "@/assets/profiles/3.png";

import brand1 from "@/assets/brands/1.png";
import brand2 from "@/assets/brands/2.png";
import brand3 from "@/assets/brands/3.png";
import brand4 from "@/assets/brands/4.png";

import tank1 from "@/assets/services/tank/1.webp";

import { works } from "@/data/works";
import { services } from "@/data/services";

import {
  IconArrowBearRight,
  IconArrowRight,
  IconHome,
  IconStar,
} from "@tabler/icons-react";
import CardWork from "@/components/CardWork";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  const profiles = [profile1, profile2, profile3];

  const brands = [brand1, brand2, brand3, brand4];

  function slugify(text: string) {
    return text
      .toLowerCase()
      .normalize("NFD") // Elimina acentos
      .replace(/[\u0300-\u036f]/g, "") // Remueve caracteres diacríticos
      .replace(/[^\w\s-]/g, "") // Elimina caracteres especiales
      .replace(/\s+/g, "-") // Reemplaza espacios por guiones
      .replace(/-+/g, "-"); // Evita múltiples guiones seguidos
  }

  const testimonials = [
    {
      id: "1",
      image: profile1.src,
      name: "Northview Consulting",
      position: "Facility Manager",
      testimonial:
        "We needed to repaint our offices, and Premium Coat did an awesome job. They were professional, knew exactly what we wanted, and finished early. We’d definitely hire them again.",
    },
    {
      id: "2",
      image: profile2.src,
      name: "Stonebridge Supplies",
      position: "Operations Director",
      testimonial:
        "We hired Premium Coat to paint the metal deck ceiling of our store, and they worked during the night to avoid disrupting our business hours. They were very organized, worked carefully, and made sure everything was ready for us to open the next day without any issues. Great service.",
    },

    {
      id: "3",
      image: profile3.src,
      name: "Diana Cameron",
      position: "Facility Supervisor",
      testimonial:
        "We hired Premium Coat to paint the metal deck ceiling of our store, and they worked during the night to avoid disrupting our business hours. They were very organized, worked carefully, and made sure everything was ready for us to open the next day without any issues. Great service.",
    },
    {
      id: "4",
      image: profile1.src,
      name: "Northview Consulting",
      position: "Facility Manager",
      testimonial:
        "We needed to repaint our offices, and Premium Coat did an awesome job. They were professional, knew exactly what we wanted, and finished early. We’d definitely hire them again.",
    },
    {
      id: "5",
      image: profile2.src,
      name: "Stonebridge Supplies",
      position: "Operations Director",
      testimonial:
        "We hired Premium Coat to paint the metal deck ceiling of our store, and they worked during the night to avoid disrupting our business hours. They were very organized, worked carefully, and made sure everything was ready for us to open the next day without any issues. Great service.",
    },

    {
      id: "6",
      image: profile3.src,
      name: "Diana Cameron",
      position: "Facility Supervisor",
      testimonial:
        "We hired Premium Coat to paint the metal deck ceiling of our store, and they worked during the night to avoid disrupting our business hours. They were very organized, worked carefully, and made sure everything was ready for us to open the next day without any issues. Great service.",
    },
    {
      id: "7",
      image: profile1.src,
      name: "Northview Consulting",
      position: "Facility Manager",
      testimonial:
        "We needed to repaint our offices, and Premium Coat did an awesome job. They were professional, knew exactly what we wanted, and finished early. We’d definitely hire them again.",
    },
    {
      id: "8",
      image: profile2.src,
      name: "Stonebridge Supplies",
      position: "Operations Director",
      testimonial:
        "We hired Premium Coat to paint the metal deck ceiling of our store, and they worked during the night to avoid disrupting our business hours. They were very organized, worked carefully, and made sure everything was ready for us to open the next day without any issues. Great service.",
    },

    {
      id: "9",
      image: profile3.src,
      name: "Diana Cameron",
      position: "Facility Supervisor",
      testimonial:
        "We hired Premium Coat to paint the metal deck ceiling of our store, and they worked during the night to avoid disrupting our business hours. They were very organized, worked carefully, and made sure everything was ready for us to open the next day without any issues. Great service.",
    },

    {
      id: "10",
      image: profile3.src,
      name: "Diana Cameron",
      position: "Facility Supervisor",
      testimonial:
        "We hired Premium Coat to paint the metal deck ceiling of our store, and they worked during the night to avoid disrupting our business hours. They were very organized, worked carefully, and made sure everything was ready for us to open the next day without any issues. Great service.",
    },

    {
      id: "11",
      image: profile3.src,
      name: "Diana Cameron",
      position: "Facility Supervisor",
      testimonial:
        "We hired Premium Coat to paint the metal deck ceiling of our store, and they worked during the night to avoid disrupting our business hours. They were very organized, worked carefully, and made sure everything was ready for us to open the next day without any issues. Great service.",
    },

    {
      id: "12",
      image: profile3.src,
      name: "Diana Cameron",
      position: "Facility Supervisor",
      testimonial:
        "We hired Premium Coat to paint the metal deck ceiling of our store, and they worked during the night to avoid disrupting our business hours. They were very organized, worked carefully, and made sure everything was ready for us to open the next day without any issues. Great service.",
    },
  ];

  return (
    <main className="w-full h-max flex flex-col justify-start items-center p-2 overflow-hidden ">
      <ChatBot />
      <section className="relative w-full h-[100dvh] text-white p-20 flex flex-col justify-center items-start rounded-4xl overflow-hidden">
        <Image
          src={bgHero}
          width={1920}
          height={1080}
          alt="bg-hero"
          className="absolute w-full h-full top-0 left-0 -z-10 object-cover"
        />

        <div className="space-y-10 flex-1 flex flex-col justify-center items-start">
          <div className="space-y-4">
            <h1 className="text-9xl font-zain font-bold leading-22">
              Industrial Painting <br /> Experts
            </h1>

            <p className="text-white/80 max-w-[500px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>

          <div className="flex flex-col justify-center items-start gap-6">
            <Link
              href={"/#works"}
              className="bg-secondary rounded-full px-6 py-4"
            >
              Discover our projects
            </Link>

            <div className="flex w-max justify-center items-center gap-6">
              <div className="flex justify-center items-center ">
                {[...profiles, ...profiles].map((profile, index) => (
                  <Image
                    src={profile}
                    key={index + "profile"}
                    alt=""
                    width={250}
                    height={250}
                    className="size-8 -mr-3"
                  />
                ))}
              </div>
              <p className="">+ than 100 satisfied customers</p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-between items-center">
          <p className="font-zain text-3xl">With the confidence of</p>

          <div className="flex justify-end items-center gap-30">
            {brands.map((brands, index) => (
              <Image
                src={brands}
                alt=""
                key={index + "brand"}
                width={700}
                height={400}
                className="h-8 w-auto object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full h-dvh min-h-max max-w-[1280px] py-20 flex justify-between items-center gap-20">
        <div className="flex flex-col justify-center items-start w-[49%] gap-y-6">
          <span className="text-secondary flex justify-center items-center gap-2 font-zain text-3xl">
            About
            <IconArrowBearRight />
          </span>

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
              dedication to customer satisfaction. Whether it's a large-scale
              industrial facility or specialized equipment, we provide tailored
              solutions that meet the highest industry standards. At Premium
              Coat, quality and reliability are at the core of everything we do.
            </p>
          </div>

          <Link
            href={"/#works"}
            className="bg-secondary rounded-full px-6 py-4 flex text-white font-medium gap-2"
          >
            Go to About us Page
            <IconArrowRight />
          </Link>

          <div className="w-full flex justify-between items-center gap-5 pt-10">
            <div>
              <h3 className="font-zain text-5xl font-semibold">200+</h3>
              <p className="font-medium text-black/70">Projects</p>
            </div>

            <div>
              <h3 className="font-zain text-5xl font-semibold">30 Years</h3>
              <p className="font-medium text-black/70">Experiencie</p>
            </div>

            <div>
              <h3 className="font-zain text-5xl font-semibold">4.8/5</h3>
              <p className="font-medium text-black/70">Client Rating</p>
            </div>
          </div>
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

      <section className="w-full h-dvh gap-y-20 min-h-max bg-[#001528] py-20 rounded-4xl flex flex-col justify-center items-center text-white">
        <div className="text-center max-w-[800px] flex flex-col justify-center items-center">
          <span className="text-secondary flex justify-center items-center gap-2 font-zain text-3xl pb-2">
            Services
            <IconArrowBearRight />
          </span>

          <h2 className="font-zain text-5xl font-bold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </h2>

          <p className="text-white/70 w-[70%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
          </p>
        </div>

        <div className="w-full max-w-[1500px] flex">
          <Image
            src={tank1}
            alt=""
            width={900}
            height={1080}
            className="w-[40%] h-full rounded-3xl object-cover"
          />
          <div className="flex flex-wrap items-center justify-center gap-3">
            {services &&
              services.map((service, index) => (
                <div
                  key={index}
                  className="w-[48%] h-[300px] bg-[#001F3C] rounded-3xl pb-10 pt-6 px-6 flex flex-col justify-between items-start"
                >
                  <IconHome className="size-8" />
                  <div>
                    <h3 className="text-4xl font-zain">{service.title}</h3>
                    <p className="opacity-70">{service.services.join(", ")}</p>

                    <Link
                      href={`services/${slugify(service.title)}`}
                      className="flex justify-center items-center gap-2 w-max border-b border-white mt-6"
                    >
                      View detail
                      <IconArrowRight className="size-5 -rotate-45" />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="w-full h-dvh min-h-max max-w-[1280px] py-20 flex flex-col justify-center items-center space-y-20">
        <div className="text-center max-w-[800px] flex flex-col justify-center items-center">
          <span className="text-secondary flex justify-center items-center gap-2 font-zain text-3xl pb-2">
            Services
            <IconArrowBearRight />
          </span>

          <h2 className="font-zain text-5xl font-bold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </h2>

          <p className="opacity-70 w-[70%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
          </p>
        </div>

        <div className="w-full flex flex-wrap justify-center items-center gap-4">
          {services &&
            services.map((service, index) => (
              <div
                key={index}
                className="w-[30%] h-[600px] relative rounded-3xl overflow-hidden flex flex-col justify-end items-start p-6 bg-gradient-to-t from-[#001B35]  to-transparent to-50% "
              >
                <Image
                  src={service.image}
                  width={500}
                  height={800}
                  alt={service.title}
                  className="w-full h-full absolute top-0 left-0 object-cover -z-10"
                />

                <div className="w-full flex justify-between items-center text-white">
                  <div>
                    <h3 className="text-4xl font-zain">{service.title}</h3>
                    <p className="opacity-70 text-sm">Lorem Ipsum</p>
                  </div>

                  <Link
                    href={`services/${slugify(service.title)}`}
                    className="size-10 flex justify-center items-center gap-2 w-max text-white  p-2 bg-secondary rounded-full "
                  >
                    <IconArrowRight className="size-full" />
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="w-full h-dvh min-h-max py-20 flex flex-col justify-center items-center space-y-20">
        <div className="text-center max-w-[800px] flex flex-col justify-center items-center">
          <span className="text-secondary flex justify-center items-center gap-2 font-zain text-3xl pb-2">
            Testimonials
            <IconArrowBearRight />
          </span>

          <h2 className="font-zain text-5xl font-bold">
            Why our customers loves us
          </h2>

          <p className="opacity-70 w-[70%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
          </p>
        </div>

        <div className="overflow-hidden w-full space-y-10 py-8">
          <div className="flex w-max animate-scroll-x-left hover:[animation-play-state:paused] gap-5">
            {[...testimonials, ...testimonials].map((review, index) => (
              <div
                key={index}
                className="w-[600px] max-lg:w-[350px] space-y-5 flex flex-col justify-center h-max items-start shrink-0 rounded-4xl p-6 transition-all relative group overflow-hidden shadow-xl"
              >
                <div className="flex justify-start items-center gap-2">
                  <Image
                    className="w-10 h-auto object-cover"
                    src={review.image}
                    width={250}
                    height={250}
                    alt={review.name}
                  />
                  <div>
                    <p className="w-full">{review.name}</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <IconStar
                          key={i}
                          className="w-3 h-3 text-[#F0AE4D]"
                          fill="#F0AE4D"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="font-zain text-2xl leading-7 ">
                  &quot;{review.testimonial}&quot;
                </p>
              </div>
            ))}
          </div>

          <div className="flex -translate-x-[50%] w-max animate-scroll-x-right hover:[animation-play-state:paused] gap-5">
            {[...testimonials, ...testimonials].map((review, index) => (
              <div
                key={index}
                className="w-[600px] max-lg:w-[350px] space-y-5 flex flex-col justify-center h-max items-start shrink-0 rounded-4xl p-6 transition-all relative group overflow-hidden shadow-xl"
              >
                <div className="flex justify-start items-center gap-2">
                  <Image
                    className="w-10 h-auto object-cover"
                    src={review.image}
                    width={250}
                    height={250}
                    alt={review.name}
                  />
                  <div>
                    <p className="w-full">{review.name}</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <IconStar
                          key={i}
                          className="w-3 h-3 text-[#F0AE4D]"
                          fill="#F0AE4D"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="font-zain text-2xl leading-7 ">
                  &quot;{review.testimonial}&quot;
                </p>
              </div>
            ))}
          </div>

          {/* <div className="flex -translate-x-[50%] w-max animate-scroll-x-right hover:[animation-play-state:paused] gap-5">
            {[...testimonials, ...testimonials].map((review, index) => (
              <div
                key={index}
                className="w-[600px] max-lg:w-[350px] max-lg:border max-lg:border-white/10 space-y-5 flex flex-col justify-between items-start shrink-0 border border-transparent hover:border-white/10 rounded-4xl p-6 hover:bg-radial-[at_100%_0%] from-white/15 to-transparent transition-all"
              >
                <p className="text-black/70">{review.testimonial}</p>
                <div className="flex justify-start items-center gap-2">
                  <Image
                    className="w-10 h-auto object-cover"
                    src={review.image}
                    width={250}
                    height={250}
                    alt={review.name}
                  />
                  <div>
                    <p className="w-full">{review.name}</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <IconStar
                          key={i}
                          className="w-3 h-3 text-[#F0AE4D]"
                          fill="#F0AE4D"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      <section className="relative w-full h-[50dvh] rounded-4xl overflow-hidden my-20 flex flex-col justify-center items-center space-y-20 bg-gradient-to-t from-[#001B35]  to-transparent ">
        <Image
          src={bgFreeQuote}
          width={1920}
          height={1080}
          alt="bg-hero"
          className="absolute w-full h-full top-0 left-0 -z-10 object-cover"
        />

        <div className="max-w-[800px] text-center text-white flex flex-col justify-center items-center gap-10">
          <div>
            <h2 className="font-zain text-6xl">Your vision, our commitment</h2>

            <p className="opacity-80">
              Premium Coat delivers professional industrial and commercial
              painting, using advanced techniques and premium materials for
              durable, long-lasting finishes. From large-scale coatings to
              detailed applications, we offer efficient, reliable solutions that
              protect and enhance your property.
            </p>
          </div>

          <Link
            href={"/contact"}
            className="bg-secondary rounded-full px-6 py-4 flex justify-center items-center gap-2 font-medium"
          >
            Get a Free Quote!
            <IconArrowRight className="-rotate-45" />
          </Link>

          <p>Prefer to chat first ? Call our : 01234 XXXX XX</p>
        </div>
      </section>

      <section className="w-full h-dvh min-h-max max-w-[1280px] py-20 flex flex-col justify-center items-center space-y-20">
        <div className="text-center max-w-[800px] flex flex-col justify-center items-center">
          <span className="text-secondary flex justify-center items-center gap-2 font-zain text-3xl pb-2">
            Works
            {/* <IconArrowBearRight /> */}
          </span>

          <h2 className="font-zain text-5xl font-bold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </h2>
        </div>

        <div className="w-full flex justify-center gap-5 items-center flex-wrap gap-y-5">
          {works &&
            works.map(({ title, id, images, subtitle }, index) => (
              <div
                // {...animationFadeInUp(index * 0.15)}
                key={id}
              >
                <CardWork company={title} images={images} service={subtitle} />
              </div>
            ))}
        </div>
        <Link
          href={"/contact"}
          className="bg-secondary rounded-full px-6 py-4 flex justify-center items-center gap-2 font-medium text-white"
        >
          Contact us
          <IconArrowRight className="-rotate-45" />
        </Link>
      </section>
    </main>
  );
}
