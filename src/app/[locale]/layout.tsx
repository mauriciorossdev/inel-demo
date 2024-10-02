
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import NextIntlProvider from "./NextIntlProvider";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
const inter = Nunito({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export const metadata: Metadata = {
  title: "Mauricio Ross / Null Pointer Ross",
  description: "Portfolio de Mauricio Ross",
};

export default async function RootLayout({ children, params }: Props) {
  let messages;
  try {
    messages = (await import(`../../messages/${params.locale}.json`))
      .default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={params.locale}>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>Mauricio Ross / Null Pointer Ross</title>
      </head>
      <body className={inter.className}>
      <NextIntlProvider
          locale={params.locale}
          messages={messages}
          timeZone="America/Santiago"
          now={new Date()}
        >
          <Navbar/>
          {children}
        </NextIntlProvider>
      </body>
    </html>
  );
}
