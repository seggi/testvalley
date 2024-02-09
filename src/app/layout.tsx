import type { Metadata } from "next";
import "@/assets/styles/index.scss";
import { Inter } from "next/font/google";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Testvalley",
  description: "Testvalley",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className={`h-full ${inter.className}`}>
        <Header />
        <section className="flex flex-col grow">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
