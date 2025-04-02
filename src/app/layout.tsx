import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";
import {twMerge} from "tailwind-merge"
import { Header } from "@/sections/Header";

const inter = localFont({
  src: '../../public/fonts/Inter-VariableFont_opsz,wght.ttf',
  variable: "--font-sans",
});
const calistoga = localFont({
  src: '../../public/fonts/Calistoga-Regular.ttf',
  variable: '--font-serif',
  weight: "400",
})

export const metadata: Metadata = {
  title: "Tajiyev Eziz",
  description: "I specialize in transforming designs into functional, high-performing web applications. Let's discuss your next project."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={twMerge(
         inter.variable,
         calistoga.variable,
         "bg-gray-900 text-white antialiased font-sans"
         )}
        >
          <Header />
          {children}
      </body>
    </html>
  );
}
