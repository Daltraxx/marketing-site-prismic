import type { Metadata, ResolvingMetadata } from "next";
import "./globals.css";
import { nunito, nunitoSans } from "./fonts";
import clsx from "clsx";
import { createClient } from "@/prismicio";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const page = await client.getSingle('settings');
 
  return {
    title: page.data.site_title || 'Daltraxx Inc',
    description: page.data.meta_description || 'Daltraxx Inc. Marketing site',
    openGraph: {
      images: [page.data.og_image.url || '']
    }

  }
}

import Header from "@/components/Header";

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
        <footer>Footer!</footer>
      </body>
    </html>
  );
}
