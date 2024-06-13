import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CITTAA",
  description: "Cittaa Mental Health Services Private Limited",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="min-w-full w-full max-w-full m-0 p-0 scrollbar-thin scrollbar-track-white scrollbar-thumb-[#6D8083] scrollbar-corner-popover bg-[#D3DED4] overflow-x-hidden" lang="en">
      <body className={`${inter.className} m-0 p-0 w-full max-w-full overscroll-none`}>{children}</body>
      {/* <body className="m-0 p-0 w-screen overscroll-none">{children}</body> */}
    </html>
  );
}
