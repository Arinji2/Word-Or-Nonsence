"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface CardProps {
  title: string;
  image: string;
  link: string;
}
export default function Card({ title, image, link }: CardProps) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(
      localStorage.getItem("Player2") === null
        ? `/game/single${link}/0`
        : `/game/multi${link}/0`
    );
  }, [link]);

  return (
    <Link
      href={url}
      className="w-[200px] h-[200px] relative flex flex-col items-center justify-center gap-10 rounded-md text-white z-30 m-2 text-center hover:scale-110 transition-all ease-in-out duration-300 overflow-hidden"
    >
      <Image
        src={image}
        fill
        alt={title}
        sizes="200px"
        className="object-cover absolute"
      />
      <div className="w-full h-full absolute bg-[#1f1f1f] opacity-50 z-20"></div>
      <p className="text-[50px] z-30">{title}</p>
    </Link>
  );
}
