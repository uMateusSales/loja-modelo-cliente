import "./globals.css";
import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import { Suspense } from "react";
import LoadingSkeleton from "@/components/ui/loading-skeleton";
import { NextUIProvider } from "@nextui-org/react";

const fonte = Rajdhani({ subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
  authors: [
    {
      name: "Mateus",
      url: "https://www.linkedin.com/in/mateus-lins-061a5424a/",
    },
  ],

  title: "Loja fashion teste ",
  description:
    "Sua propia virutal totalmente personalizavel! Pronta para modernizar sua marca e realizar vendas diretamente pelo seu whatsapp!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="google-adsense-account" content="ca-pub-7914582297226182" />
        <link rel="icon" href="images/icon.ico" sizes="any" />
      </head>

      <body className={`${fonte.className} bg-rose-50`}>
        <ModalProvider />
        <ToastProvider />

        <Navbar />
        <Suspense fallback={<LoadingSkeleton />}>{children}</Suspense>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
