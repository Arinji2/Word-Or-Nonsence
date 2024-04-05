import { Chakra_Petch } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const chakra_Petch = Chakra_Petch({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-Chakra",
});

export const metadata = {
  title: "Word or Nonsense",
  description: "AI Game by Arinji",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className={`${chakra_Petch.variable} ${chakra_Petch.className} `}>
        <Toaster position="top-right" />
        <div className=" text-white text-[50px] md:text-[80px] font-bold mt-10 text-center w-full  absolute top-0 z-[1000]">
          <p>
            <span className="text-[#22C55E]">Word</span> or{" "}
            <span className="text-[#DC2626]">Nonsense</span>
          </p>
        </div>
        {children}
      </body>
    </html>
  );
}
