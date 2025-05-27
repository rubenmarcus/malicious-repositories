import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Sidebar from "@/components/common/Sidebar";
import TopParticles from "@/public/assets/svg/top-particles.svg";
import Background from "@/public/assets/images/Background.png";
import { cn } from "@/utils/tw-merge";
import Footer from "@/components/common/Footer";
import Providers from "@/components/common/Providers";
import Image from "next/image";
import localFont from "next/font/local";

const Stopbuck = localFont({
  src: "./fonts/stopbuck/Stopbuck.otf",
  variable: '--font-stopbuck',
});

const fredoka = Fredoka({
      subsets: ["latin"],
      variable: "--font-fredoka"
});

export const metadata: Metadata = {
  title: "RustyFlip",
  description: "RustyFlip",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body
        className={cn(
          fredoka.className, fredoka.variable, Stopbuck.variable,
          "noscrollbar relative overflow-x-hidden"
        )}
      >
          <Providers>
            <div className="flex min-h-screen flex-1">
              <div
                className={` min-h-screen h-[100vh] flex flex-col w-full  border-r border-b rounded-br border-[#21201F] gap-3 relative`}
              >
                <Image
                  src={Background}
                  className="absolute h-full w-full z-0 inset-0"
                  alt="image"
                />
                {/* <TopParticles className="absolute w-auto h-auto -top-[22rem] -right-[20rem]" /> */}
                <Navbar />
                <div className=" h-[99vh] z-40 pt-24 overflow-auto noScrollbar overflow-x-hidden">
                  <div className="lg:pl-[90px] px-4 pb-12">
                  {children}

                  </div>
                  <Footer />
                </div>
              </div>
              <Sidebar />
            </div>
          </Providers>
      </body>
    </html>
  );
}
