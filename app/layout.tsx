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
    description:
      "My personal web site, portfolio and blog. See my projects and articles. Technologies used: React, Next.js, Node.js, TypeScript, JavaScript, HTML, CSS. Contact me for freelance work or collaboration.",
    url: "https://francopaganoni.dev",
    siteName: "Franco Paganoni",
    images: [
      {
        url: "https://ik.imagekit.io/p2ho5d9bi/Portfolio/LogoFPFS.png?updatedAt=1756388635775",
        width: 1200,
        height: 630,
        alt: "Cover image from Franco Paganoni's site",
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
