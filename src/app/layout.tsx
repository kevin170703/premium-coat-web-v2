import { Zain, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { Metadata } from "next";
import ClientLayout from "@/components/ClientLayout";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const zain = Zain({
  weight: ["200", "300", "400", "700", "800", "900"],
  variable: "--font-zain",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Coat",
  description:
    "Expert painting services for residential, commercial, and industrial spaces across Ontario. High-quality finishes, lasting results, and professional craftsmanship in every project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${zain.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
