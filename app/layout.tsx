import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FilterHeader from "@/app/(components)/FilterHeader";
import AiChat from "@/app/(components)/AiChat";
import {MobileDrawer} from "@/app/(components)/MobileDrawer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freya Ai",
  description: "Case Study",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen">
          <div className="hidden md:block md:w-1/3 min-h-screen bg-[#F7F7F7] flex flex-col">
            <AiChat/>
          </div>
          <div className="w-full md:w-2/3 h-full">
            <FilterHeader/>
            <div>
              {children}
            </div>
          </div>
        </main>
        <MobileDrawer/>
      </body>
    </html>
  );
}
