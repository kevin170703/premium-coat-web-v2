"use client";

import { usePathname } from "next/navigation";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import ChatBot from "./ChatBot";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayoutOn = [
    "/blog/admin/list",
    "/blog/admin/new",
    "/blog/admin/edit",
  ];

  const shouldHideLayout = hideLayoutOn.some((route) =>
    pathname?.startsWith(route)
  );

  return (
    <>
      {!shouldHideLayout && <NavBar />}

      {/* <Link
        href={"https://wa.me/14378714955"}
        target="_blank"
        className="fixed bottom-5 right-5 rounded-full bg-[#25d366] text-white p-2 w-16 h-16 max-lg:w-14 max-lg:h-14 flex justify-center items-center cursor-pointer z-30"
      >
        <IconBrandWhatsapp stroke={1.5} className="w-full h-full" />
      </Link> */}

      {!shouldHideLayout && <ChatBot />}

      {children}
      {!shouldHideLayout && <Footer />}
    </>
  );
}
