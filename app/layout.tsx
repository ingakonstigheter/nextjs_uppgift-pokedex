import type { Metadata } from "next";
import { Jaldi, Jersey_10 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
const jaldi = Jaldi({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jaldi",
});

const jersey = Jersey_10({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jersey",
});

export const metadata: Metadata = {
  title: "Pokédex",
  description: "Explore the world of Pokémon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jaldi.variable} ${jersey.variable} antialiased grid grid-rows-[auto_1fr_auto] min-h-dvh min-w-dvw`}>
        <header className="content-grid bg-white">
          <Navbar></Navbar>
        </header>
        <main>{children}</main>
        <Footer></Footer>
        <SpeedInsights></SpeedInsights>
      </body>
    </html>
  );
}
