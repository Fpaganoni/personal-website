import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Franco Paganoni Web Site",
  description: "Personal web site",
  generator: "v0.dev",
  authors: [{ name: "Franco Paganoni", url: "https://francopaganoni.dev" }],
  openGraph: {
    title: "Franco Paganoni's Portfolio",
    description: "Desarrollador web especializado en React y Next.js.",
    url: "https://francopaganoni.dev",
    siteName: "Franco Paganoni",
    images: [
      {
        url: "https://ik.imagekit.io/p2ho5d9bi/Portfolio/LogoFP.png?updatedAt=1756385239385",
        width: 1200,
        height: 630,
        alt: "Imagen de portada del sitio de Franco Paganoni",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
