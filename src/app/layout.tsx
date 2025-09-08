import { Zain, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${zain.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
