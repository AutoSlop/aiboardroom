import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Boardroom — Consultoría Estratégica de IA para Banca y Seguros",
  description:
    "Workshops ejecutivos y sprints estratégicos de IA para grandes empresas de banca y seguros en New York. Hoja de ruta clara con foco en decisiones de negocio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
