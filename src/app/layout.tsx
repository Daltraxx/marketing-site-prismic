import type { Metadata } from "next";
import "./globals.css";
import { nunito, nunitoSans } from "./fonts";
import clsx from "clsx";
import { createClient, repositoryName } from "@/prismicio";
import { asImageSrc } from "@prismicio/client";
import { PrismicPreview } from "@prismicio/next";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle('settings');
 
  return {
    title: settings.data.site_title || 'Daltraxx Inc',
    description: settings.data.meta_description || 'Daltraxx Inc. Marketing site',
    openGraph: {
      images: [{ url: asImageSrc(settings.data.og_image) ?? ''}]
    }

  }
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${clsx(nunito.variable, nunitoSans.variable)} antialiased`}>
      <body>
        <Header />
        {children}
        <Footer />
        <div className="fixed bg-gradient-to-tr from-emerald-50 to-cyan-50 z-[-1] inset-0 opacity-50" />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
