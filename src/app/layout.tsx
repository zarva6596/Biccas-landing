import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Header } from "@/components/global/AppHeader";
import AppFooter from "@/components/global/AppFooter";
import "./globals.css";
import { GradientLayer } from "./ui/GradientLayer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Biccas",
  description: "Landing page for Biccas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased `}>
        <div className="flex flex-col min-h-screen max-w-[100vw] overflow-hidden mx-auto bg-transparent">
          <GradientLayer />
          <Header />

          <main className="flex-grow relative overflow-hidden">
            {children}
          </main>

          <AppFooter />
        </div>
      </body>
    </html>
  );
}
