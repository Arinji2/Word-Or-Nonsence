"use client";

import Image from "next/image";

import { Card } from "../selector";

export default async function Home() {
  return (
    <div className="w-full h-fit md:h-[120svh] flex flex-col items-center justify-start relative  font-bold">
      <Image
        src="/boat.png"
        fill
        quality={100}
        priority
        className="object-cover absolute"
        alt="Boat Image"
      />
      <div className="w-full h-full bg-[hsl(0,0%,12%)] opacity-50 absolute z-20"></div>
      <h1 className="mt-56 md:mt-40 text-[35px] md:text-[50px] text-white z-30 text-center">
        Begin your Journey
      </h1>
      <div className="w-full h-full flex flex-row items-center justify-evenly flex-wrap mb-5">
        <Card player="Player1" red={true} />
        <Card player="Player2" red={false} />
      </div>
      <p
        className="text-white bg-[#22C55E] p-3 text-3xl rounded-lg z-30 mb-5 hover:cursor-pointer"
        onClick={() => {
          if (localStorage.getItem("Player1") === null) {
            localStorage.setItem(
              "Player1",
              JSON.stringify({ name: "Guest1", url: "/Default.svg" })
            );
          }
          if (localStorage.getItem("Player2") === null) {
            localStorage.setItem(
              "Player2",
              JSON.stringify({ name: "Guest2", url: "/Default.svg" })
            );
          }
          window.location.assign("/level");
        }}
      >
        Continue
      </p>
    </div>
  );
}
