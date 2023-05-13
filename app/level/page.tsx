/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
interface CardProps {
  title: string;
  image: string;
  link: string;
}
export default async function Home() {
  return (
    <div className="w-full h-fit md:h-[100svh] flex flex-col items-center justify-start relative  font-bold">
      <Image
        src="/Boat.png"
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
      <div className="w-full h-full flex flex-row items-center justify-evenly flex-wrap ">
        <Card image="/levels/Level1.png" title="City" link="/Level1" />
        <Card image="/levels/Level2.png" title="Boat" link="/Level2" />
        <Card image="/levels/Level3.png" title="Rocket" link="/Level3" />
        <Card image="/levels/Level4.png" title="Night" link="/Level4" />
      </div>
    </div>
  );
}

const Card: FC<CardProps> = ({ title, image, link }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(
      localStorage.getItem("Player2") === null
        ? `/game/single${link}/0`
        : `/game/multi${link}/0`
    );
  }, []);

  return (
    <Link
      href={url}
      className="w-[200px] h-[200px] relative flex flex-col items-center justify-center gap-10 rounded-md text-white z-30 m-2 text-center hover:scale-110 transition-all ease-in-out duration-300 overflow-hidden"
    >
      <Image src={image} fill alt={title} className="object-cover absolute" />
      <div className="w-full h-full absolute bg-[#1f1f1f] opacity-50 z-20"></div>
      <p className="text-[50px] z-30">{title}</p>
    </Link>
  );
};
