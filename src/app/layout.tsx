import type { Metadata } from "next";

import "./globals.css";
import { GeistSans } from "geist/font/sans";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
