import React from "react";
import bgHero from "@/assets/bg-hero2.png";
import bgFreeQuote from "@/assets/bg-free-quote.png";
import Image from "next/image";
import Link from "next/link";

import profile1 from "@/assets/profiles/1.png";
import profile2 from "@/assets/profiles/2.png";
import profile3 from "@/assets/profiles/3.png";

import brand1 from "@/assets/brands-clients/1.png";
import brand2 from "@/assets/brands-clients/2.png";
import brand3 from "@/assets/brands-clients/3.png";
import brand4 from "@/assets/brands-clients/4.png";
// import brand5 from "@/assets/brands-clients/5.png";
// import brand6 from "@/assets/brands-clients/6.png";
// import brand7 from "@/assets/brands-clients/7.webp";

import logofacebook from "@/assets/brands/facebook.svg";
import logoinstagram from "@/assets/brands/instagram.svg";
import logogoogle from "@/assets/brands/google.svg";

import tank1 from "@/assets/services/tank/1.webp";
import industrialMachine1 from "@/assets/services/industrial-machine/1.webp";
import commercial1 from "@/assets/services/commercial/1.webp";

// import logoBg from "@/assets/logos/isotipo-blue.png";

import { works } from "@/data/works";
import { services } from "@/data/services";

import {
  IconArrowBearRight,
  IconArrowRight,
  IconBuildingFactory2,
  IconDoor,
  IconDroplets,
  IconHome,
  IconPaint,
  IconStar,
  IconTrolley,
} from "@tabler/icons-react";
import CardWork from "@/components/CardWork";

import certification1 from "@/assets/certificates/certification1.webp";
import certification2 from "@/assets/certificates/certification2.webp";
import certification3 from "@/assets/certificates/certification3.webp";
import certification4 from "@/assets/certificates/certification4.webp";

export default function Home() {
  const profiles = [profile1, profile2, profile3];

  // const brands = [brand1, brand2, brand3, brand4];

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
      image: logofacebook,
      name: "Northview Consulting",
      position: "Facility Manager",
      testimonial:
        "We needed to repaint our offices, and Premium Coat did an awesome job. They were professional, knew exactly what we wanted, and finished early. We’d definitely hire them again.",
    },
    {
      id: "2",
      image: logogoogle.src,
      name: "Stonebridge Supplies",
      position: "Operations Director",
      testimonial:
        "We hired Premium Coat to paint the metal deck ceiling of our store, and they worked during the night to avoid disrupting our business hours. They were very organized, worked carefully, and made sure everything was ready for us to open the next day without any issues. Great service.",
    },

    {
      id: "3",
      image: logogoogle.src,
      name: "Diana Cameron",
      position: "Facility Supervisor",
      testimonial:
        "We hired Premium Coat to paint the metal deck ceiling of our store, and they worked during the night to avoid disrupting our business hours. They were very organized, worked carefully, and made sure everything was ready for us to open the next day without any issues. Great service.",
    },
    {
      id: "4",
      image: logoinstagram.src,
      name: "Northview Consulting",
      position: "Facility Manager",
      testimonial:
        "We needed to repaint our offices, and Premium Coat did an awesome job. They were professional, knew exactly what we wanted, and finished early. We’d definitely hire them again.",
    },
    {
      id: "5",
      image: logofacebook.src,
      name: "Stonebridge Supplies",
      position: "Operations Director",
      testimonial:
        "We hired Premium Coat to paint the metal deck ceiling of our store, and they worked during the night to avoid disrupting our business hours. They were very organized, worked carefully, and made sure everything was ready for us to open the next day without any issues. Great service.",
    },

    {
      id: "6",
      image: logofacebook.src,
      name: "Diana Cameron",
      position: "Facility Supervisor",
      testimonial:
        "We hired Premium Coat to paint the metal deck ceiling of our store, and they worked during the night to avoid disrupting our business hours. They were very organized, worked carefully, and made sure everything was ready for us to open the next day without any issues. Great service.",
    },
    {
      id: "7",
      image: logoinstagram.src,
      name: "Northview Consulting",
      position: "Facility Manager",
      testimonial:
        "We needed to repaint our offices, and Premium Coat did an awesome job. They were professional, knew exactly what we wanted, and finished early. We’d definitely hire them again.",
    },
    {
      id: "8",
      image: logogoogle.src,
      name: "Michael Thompson",
      position: "Operations Director",
      testimonial:
        "Premium Coat did an outstanding job painting our warehouse ceiling. They worked overnight to ensure no disruption, and everything was spotless and ready by morning. Truly professional and efficient.",
    },

    {
      id: "9",
      image: logoinstagram.src,
      name: "Diana Roberts",
      position: "Facility Supervisor",
      testimonial:
        "We were impressed with Premium Coat's attention to detail. The team worked quietly at night, ensuring our operations were unaffected. The ceiling looks fantastic, and the service was excellent.",
    },

    {
      id: "10",
      image: logofacebook.src,
      name: "James Wilson",
      position: "Maintenance Manager",
      testimonial:
        "Hiring Premium Coat was the best decision for our store renovation. They completed the metal deck painting without interfering with business hours, and the results exceeded our expectations.",
    },

    {
      id: "11",
      image: logogoogle.src,
      name: "Emily Johnson",
      position: "Facility Supervisor",
      testimonial:
        "Premium Coat delivered exceptional service from start to finish. Their night shift work minimized disruption, and they ensured everything was perfectly prepared for the next day. Highly recommended.",
    },

    {
      id: "12",
      image: logogoogle.src,
      name: "Robert Smith",
      position: "Operations Manager",
      testimonial:
        "The team at Premium Coat was punctual, careful, and professional. Our metal deck ceiling looks amazing, and the overnight work meant we never had to close the store. Great experience overall.",
    },
  ];

  const certificates = [
    {
      tags: ["Security", "Workplace"],
      title: "Workplace Safety Training",
      image: certification1.src,
      completionDate: "20 SEP 2021",
      description:
        "Comprehensive training focused on maintaining a safe and compliant workplace, covering essential safety protocols.",
    },

    {
      tags: ["Security", "Heights"],
      title: "Working at Heights Certification",
      image: certification2.src,
      completionDate: "20 SEP 2021",
      description:
        "Certification program that teaches safe practices and equipment use when working at elevated heights and platforms.",
    },

    {
      tags: ["Security", "Hazardous"],
      title: "Hazardous Material Handling",
      image: certification3.src,
      completionDate: "20 SEP 2021",
      description:
        "Specialized training designed to ensure safe identification, storage, and disposal of hazardous and toxic materials.",
    },

    {
      tags: ["Security", "Confined Space"],
      title: "Confined Space Entry & Monitoring",
      image: certification4.src,
      completionDate: "20 SEP 2021",
      description:
        "Practical course on safe entry procedures, risk assessment, and monitoring practices within confined workspaces.",
    },
  ];

  const iconMap: { [key: string]: React.ElementType } = {
    IconDoor: IconDoor,
    IconHome: IconHome,
    IconTrolley: IconTrolley,
    IconBuildingFactory2: IconBuildingFactory2,
    IconDroplets: IconDroplets,
    IconPaint: IconPaint,
  };

  return (
    <main className=" w-full h-max flex flex-col justify-start items-center p-2 overflow-hidden ">
      <section className="relative w-full min-h-dvh text-white p-20 max-lg:p-10 max-md:pt-20 max-md:px-5 flex flex-col justify-center items-start rounded-4xl overflow-hidden">
        <Image
          src={bgHero}
          width={1920}
          height={1080}
          alt="bg-hero"
          className="absolute w-full h-full top-0 left-0 -z-10 object-cover"
        />

        <div className="space-y-10 flex-1 flex flex-col justify-center items-start">
          <div className="space-y-4">
            <h1 className="text-9xl max-md:text-5xl max-2xl:text-8xl max-2xl:leading-18 max-md:leading-10 font-zain font-bold leading-22">
              Industrial Painting <br /> Experts
            </h1>

            <p className="text-white/80 w-full max-w-[500px]">
              High-quality coatings and professional finishes for residential,
              commercial, and industrial projects in Toronto and across Ontario.
            </p>
          </div>

          <div className="flex flex-col justify-center items-start gap-6">
            <Link
              href={"/Contact"}
              className="bg-secondary rounded-full px-6 py-4"
            >
              Get a Free Quote
            </Link>

            <div className="flex max-md:flex-col max-md:items-start w-max justify-center items-center gap-x-6 gap-y-2">
              <div className="flex justify-center items-center ">
                {[...profiles, ...profiles].map((profile, index) => (
                  <Image
                    src={profile}
                    key={index + "profile"}
                    alt=""
                    width={250}
                    height={250}
                    className="size-8 w-auto -mr-3"
                  />
                ))}
              </div>
              <p className="max-md:text-xs">+ than 100 satisfied customers</p>
            </div>
          </div>
        </div>

        {/* <div className="w-full flex max-2xl:flex-col max-2xl:items-start gap-y-2 justify-between items-center max-md:hidden">
          <p className="font-zain text-3xl max-lg:text-xl">
            With the confidence of
          </p>

          <div className="flex flex-wrap justify-end items-center gap-30 max-lg:gap-5 max-lg:w-full max-lg:justify-between max-md:justify-start max-md:gap-x-6">
            {brands.map((brands, index) => (
              <Image
                src={brands}
                alt=""
                key={index + "brand"}
                width={700}
                height={400}
                className="h-8 max-2xl:h-6 max-md:h-4  w-auto object-cover"
              />
            ))}
          </div>
        </div> */}
      </section>

      <section className="relative w-full h-dvh min-h-max max-w-[1280px] py-20 flex max-lg:flex-col justify-between items-center gap-x-20 gap-y-10 max-lg:px-3">
        {/* <Image
          width={500}
          height={500}
          alt="lofo"
          src={logoBg}
          className="absolute top-1/2 -left-[10%] opacity-10 w-30 h-auto rotate-45 -z-10"
        /> */}
        <div className="flex flex-col justify-center items-start w-[49%] max-lg:w-full gap-y-6">
          <span className="text-secondary flex justify-center items-center gap-2 font-zain text-3xl">
            About
            <IconArrowBearRight />
          </span>

          <div>
            <h2 className="font-zain text-5xl font-bold">
              Premium Coat delivers expert painting services with lasting
              quality and care.
            </h2>
            <p>
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
            href={"/about"}
            className="bg-secondary rounded-full px-6 py-4 flex text-white font-medium gap-2"
          >
            Go to About us Page
            <IconArrowRight />
          </Link>

          <div className="w-full flex justify-between items-center gap-5 pt-10">
            <div>
              <h3 className="font-zain text-5xl max-md:text-3xl font-semibold">
                200+
              </h3>
              <p className="font-medium text-black/70">Projects</p>
            </div>

            <div>
              <h3 className="font-zain text-5xl max-md:text-3xl font-semibold">
                30 Years
              </h3>
              <p className="font-medium text-black/70">Experiencie</p>
            </div>

            <div>
              <h3 className="font-zain text-5xl max-md:text-3xl font-semibold">
                4.8/5
              </h3>
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

      <section className="w-full h-dvh gap-y-20 min-h-max bg-[#001528] py-20 max-lg:pb-5 rounded-4xl flex flex-col justify-center items-center text-white max-lg:px-5">
        <div className="text-center max-w-[800px] flex flex-col justify-center items-center">
          <span className="text-secondary flex justify-center items-center gap-2 font-zain text-3xl pb-2">
            Services
            <IconArrowBearRight />
          </span>

          <h2 className="font-zain text-5xl font-bold">
            Our Professional Services
          </h2>

          <p className="text-white/70 w-[70%]">
            Comprehensive solutions tailored to residential, commercial, and
            industrial needs.
          </p>
        </div>

        <div className="w-full max-w-[1500px] flex max-lg:flex-col-reverse gap-3">
          <Image
            src={industrialMachine1}
            alt=""
            width={900}
            height={1080}
            className="w-[40%] h-full rounded-3xl object-cover max-lg:w-full max-lg:h-[300px]"
          />
          <div className="flex flex-wrap items-center justify-center gap-3">
            {services &&
              services.map((service, index) => (
                <div
                  key={index}
                  className="w-[49%] max-md:w-full h-[300px] max-lg:h-[320px] rounded-3xl  flex flex-col justify-between items-start relative overflow-hidden"
                >
                  <Image
                    src={service.image}
                    width={500}
                    height={500}
                    alt="bg-service"
                    className="absolute top-0 left-0 -z-0 w-full h-full object-cover"
                  />

                  <div className="flex flex-col justify-center items-start relative z-10 w-full h-full bg-gradient-to-r from-[#001F3C] to-[#001F3C] hover:to-[#001F3C]/80 px-6 transition-colors duration-700">
                    {/* <IconHome className="size-8 " /> */}

                    {React.createElement(iconMap[service.icon], {
                      className: "size-8",
                    })}

                    <h3 className="text-4xl font-zain  pt-6">
                      {service.title}
                    </h3>
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

      {/* <section className="w-full h-dvh min-h-max max-w-[1280px] py-20 flex flex-col justify-center items-center space-y-20">
        <div className="text-center max-w-[800px] flex flex-col justify-center items-center">
          <span className="text-secondary flex justify-center items-center gap-2 font-zain text-3xl pb-2">
            Services
            <IconArrowBearRight />
          </span>

          <h2 className="font-zain text-5xl font-bold">
            Our Professional Services
          </h2>

          <p className="opacity-70 w-[70%]">
            Comprehensive solutions tailored to residential, commercial, and
            industrial needs.
          </p>
        </div>

        <div className="w-full flex flex-wrap justify-center items-center gap-4">
          {services &&
            services.map((service, index) => (
              <div
                key={index}
                className="w-[30%] max-lg:w-[49%] max-md:w-full h-[600px] relative rounded-3xl overflow-hidden flex flex-col justify-end items-start p-6 bg-gradient-to-t from-[#001B35]  to-transparent to-50% "
              >
                <Image
                  src={service.image}
                  width={500}
                  height={800}
                  alt={service.title}
                  className="w-full h-full absolute top-0 left-0 object-cover -z-10"
                />

                <div className="w-full flex justify-between items-end text-white">
                  <div className="flex-1">
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
      </section> */}

      <section className="w-full h-dvh min-h-max py-20 flex flex-col justify-center items-center space-y-20 ">
        <div className="text-center max-w-[800px] flex flex-col justify-center items-center">
          <span className="text-secondary flex justify-center items-center gap-2 font-zain text-3xl pb-2">
            Testimonials
            <IconArrowBearRight />
          </span>

          <h2 className="font-zain text-5xl font-bold">
            Why Our Customers Choose Us
          </h2>

          <p className="opacity-70 w-[70%]">
            Trusted by homeowners, businesses, and industries across Toronto and
            Ontario.
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
                    className="size-8 object-cover"
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
                    className="size-8 object-cover"
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

      <section className="w-full max-w-[1280px] flex flex-col justify-center items-center gap-y-20 max-lg:px-3">
        <div className="text-center max-w-[800px] flex flex-col justify-center items-center">
          <span className="text-secondary flex justify-center items-center gap-2 font-zain text-3xl pb-2">
            Certificates
          </span>

          <h2 className="font-zain text-5xl font-bold">
            Certified Excellence in Every Project
          </h2>

          <p className="opacity-70 w-[70%]">
            At Premium Coat, we take quality and safety seriously. Our team is
            fully trained and certified to meet industry standards, ensuring
            every project is completed with precision and care
          </p>
        </div>

        <div className="w-full flex flex-wrap justify-center items-center gap-3">
          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="bg-[#1E1E1E] text-white rounded-3xl p-6 w-[24%] max-lg:w-[49%] max-md:w-full  flex flex-col justify-center items-center"
            >
              <div className="w-full flex justify-start items-center gap-2">
                {certificate.tags.map((tag, i) => (
                  <div
                    key={tag + i}
                    className="border border-white rounded-full px-4 py-1 text-xs opacity-80"
                  >
                    {tag}
                  </div>
                ))}
              </div>

              <div className="flex justify-start items-center w-full">
                <h3 className="font-zain text-3xl font-bold mt-4 w-full line-clamp-2 max-w-[80%] leading-8">
                  {certificate.title}
                </h3>
              </div>

              <Image
                src={certificate.image}
                width={500}
                height={500}
                alt={`certificate-${certificate.title}`}
                className="size-40 object-cover rounded-full mt-4"
              />

              {/* <div className="w-full flex justify-between items-center gap-2 mt-4 font-medium">
                <p>COMPLETION DATE</p>

                <p>{certificate.completionDate}</p>
              </div> */}

              <p className="text-sm font-light mt-4">
                {certificate.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative w-full h-[50dvh] max-md:h-max max-md:py-20 rounded-4xl overflow-hidden my-20 flex flex-col justify-center items-center space-y-20 bg-gradient-to-t from-[#001B35]  to-transparent px-5">
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

            <p className="opacity-80 max-md:hidden">
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

      <section
        id="works"
        className="w-full h-dvh min-h-max max-w-[1280px] py-20 flex flex-col justify-center items-center space-y-20"
      >
        <div className="text-center max-w-[800px] flex flex-col justify-center items-center">
          <span className="text-secondary flex justify-center items-center gap-2 font-zain text-3xl pb-2">
            Recent Projects
            {/* <IconArrowBearRight /> */}
          </span>

          <h2 className="font-zain text-5xl font-bold">
            Take a look at some of our completed work across industries and
            sectors
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
