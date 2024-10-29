import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../providers/providers";
import { bric } from "@/utils/font";
import { siteConfig } from "@/config/site-config";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: [
    {
      url: "/om.jpeg",
      href: "/om.jpeg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
         <body className={`${bric} antialiased bg-[#fffaf4]`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
