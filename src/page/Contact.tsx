"use client";

import Input from "@/components/Input";
import ButtonSend from "@/components/ButtonSend";
import TextArea from "@/components/TextArea";

import bgContact from "@/assets/services/tank/1.webp";

import { sendEmail } from "@/services/resend";
import { useState } from "react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  const [loaderEmail, setLoaderEmail] = useState(false);
  const [isSender, setIsSender] = useState(false);

  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });

  // Función para validar y formatear el nombre (solo letras y espacios)
  const validateName = (value: string): string => {
    return value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]/g, "");
  };

  // Función para validar la estructura del email en tiempo real
  const validateEmailInput = (value: string): string => {
    return value.replace(/[^\w@.-]/g, "");
  };

  // Función para validar el nombre de la compañía (permitir caracteres comunes en nombres de empresas)
  const validateCompany = (value: string): string => {
    return value.replace(/[^\w\s&.,\-']/g, "");
  };

  function handelChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    let newValue = value;

    switch (name) {
      case "name":
        newValue = validateName(value);
        if (newValue.length > 30) newValue = newValue.slice(0, 30);
        break;
      case "email":
        newValue = validateEmailInput(value);
        if (newValue.length > 35) newValue = newValue.slice(0, 35);
        break;
      case "company":
        newValue = validateCompany(value);
        if (newValue.length > 30) newValue = newValue.slice(0, 30);
        break;
      case "message":
        if (newValue.length > 200) newValue = newValue.slice(0, 200);
        break;
    }

    // Actualizar el valor solo si ha pasado las validaciones
    if (newValue !== value) {
      // Si es un input de tipo HTMLInputElement, actualizar directamente su valor
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        e.target.value = newValue;
      }
    }

    setDataForm({ ...dataForm, [name]: newValue });
  }

  async function hadelSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoaderEmail(true);
    try {
      const respose = await sendEmail({
        name: dataForm.name,
        email: dataForm.email,
        message: dataForm.message,
        company: dataForm.company,
      });

      if (respose.success) {
        setIsSender(true);
        setDataForm({
          name: "",
          email: "",
          message: "",
          company: "",
        });
      } else {
        alert("Error sending the message. Please try again.");
      }
    } catch (error) {
      console.log(error);
      alert("Error sending the message. Please try again.");
    } finally {
      setLoaderEmail(false);
    }
  }

  return (
    <main className="w-full min-h-dvh flex justify-center items-center  overflow-hidden text-center px-2 relative">
      <Image
        width={2000}
        height={2000}
        src={bgContact}
        alt="bg-hero"
        className="w-full h-full object-cover absolute top-0 right-0  -z-10"
      />

      <div className="w-full max-w-[1280px] flex flex-col justify-center items-center gap-10 bg-white rounded-4xl p-2 my-40  z-50 max-lg:flex-col max-lg:shadow-none">
        <section className="flex max-lg:flex-col justify-center items-center gap-x-40 gap-y-10 py-10 px-3">
          <div className="w-full max-w-[500px] text-start space-y-5">
            <h1 className="text-5xl font-zain font-semibold ">
              Contact us today and transform your space
            </h1>

            <div className="space-y-3">
              <Link
                href={"mailto:hello@premiumcoat.ca"}
                target="_blank"
                className="flex justify-start items-center gap-2 "
              >
                <div className="bg-secondary rounded-full text-white p-2">
                  <IconMail />
                </div>
                <p className="text-base text-text-secondary">
                  hello@premiumcoat.ca
                </p>
              </Link>

              <Link
                href={"https://wa.me/14374412531"}
                target="_blank"
                className="flex justify-start items-center gap-2"
              >
                <div className="bg-secondary rounded-full text-white p-2">
                  <IconPhone />
                </div>
                <p className="text-base text-text-secondary">
                  +1 (437)-441-2531
                </p>
              </Link>

              <Link
                href={"https://www.instagram.com/premiumcoatca/"}
                target="_blank"
                className="flex justify-start items-center gap-2"
              >
                <div className="bg-secondary rounded-full text-white p-2">
                  <IconBrandInstagram />
                </div>
                <p className="text-base text-text-secondary">@premiumcoatca</p>
              </Link>

              <Link
                href={
                  "https://www.facebook.com/share/17sTcFB5qy/?mibextid=wwXIfr"
                }
                target="_blank"
                className="flex justify-start items-center gap-2"
              >
                <div className="bg-secondary rounded-full text-white p-2">
                  <IconBrandFacebook />
                </div>
                <p className="text-base text-text-secondary">Premium Coat </p>
              </Link>

              <div className="flex justify-start items-center gap-2">
                <div className="bg-secondary rounded-full text-white p-2">
                  <IconMapPin />
                </div>
                <p className="text-base text-text-secondary">
                  2015 Davenport Rd, Toronto, ON M6N 1C5
                </p>
              </div>
            </div>
          </div>

          <form
            action=""
            onSubmit={hadelSubmit}
            className="w-full max-w-[600px] flex flex-col justify-start items-start gap-2 "
          >
            <Input
              label="Name"
              name={"name"}
              placeholder="Your name"
              value={dataForm.name}
              onChange={handelChange}
              id="1"
              required={true}
            />
            <Input
              label="Company"
              name={"company"}
              placeholder="Your company name"
              value={dataForm.company}
              onChange={handelChange}
              id="Company"
            />
            <Input
              label="Email"
              name={"email"}
              placeholder="Your email"
              value={dataForm.email}
              onChange={handelChange}
              id="Email"
              required={true}
              type="email"
            />

            <TextArea
              label="Message"
              name={"message"}
              placeholder="I would like to know more about..."
              value={dataForm.message}
              onChange={handelChange}
              id="Message"
              required={true}
            />

            <ButtonSend
              text="Send"
              width="full"
              loader={loaderEmail}
              success={isSender}
              disabled={loaderEmail || isSender}
            />
          </form>
        </section>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.90977287243!2d-79.54286422431441!3d43.71837095799874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20Ontario%2C%20Canad%C3%A1!5e0!3m2!1ses!2sar!4v1742243905921!5m2!1ses!2sar"
          loading="lazy"
          className="w-full h-[350px] rounded-3xl"
        ></iframe>
      </div>
    </main>
  );
}
