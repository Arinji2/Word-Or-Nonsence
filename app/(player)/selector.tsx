"use client";

import { Check, Shuffle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { FC, useState } from "react";
import toast from "react-hot-toast";

interface CardProps {
  player: string;
  red: boolean;
  redirect?: boolean;
}

export const Card: FC<CardProps> = ({ player, red, redirect }) => {
  const [url, setUrl] = useState("/Default.svg");
  const [name, setName] = useState("Guest");
  const [personSeed, setPersonSeed] = useState("1234");
  const router = useRouter();

  const genAvatar = async () => {
    const seed = Math.random().toString();
    const svg = await fetch(
      `https://api.dicebear.com/6.x/pixel-art/svg?seed=${seed}`
    );

    const blob = await svg.blob();
    const link = URL.createObjectURL(blob);

    setPersonSeed(seed);
    setUrl(link);
  };

  return (
    <div
      className={`${
        red ? "bg-[#DC2626] " : "bg-[#009BBD] "
      }w-[300px] h-[455px] flex flex-col items-center justify-center gap-10 rounded-md text-white z-30 m-2 text-center  shadow-lg shadow-black`}
    >
      <div className="w-full h-[30%] flex flex-row items-center justify-evenly gap-5">
        <div className="w-[130px] h-[130px] bg-[#1E1E1E] flex flex-col items-center justify-center ml-2">
          <Image alt="Avatar" src={url} width={100} height={100}></Image>
        </div>
        <Shuffle
          className="w-[50px] h-[50px] text-[#22C55E] bg-white p-4 rounded-lg hover:cursor-pointer hover:scale-110 transition-all ease-in-out duration-300"
          onClick={genAvatar}
        />
      </div>
      <div className="w-[80%] h-[5px] bg-white"></div>
      <input
        type="text"
        className="w-[80%] h-[50px] bg-white text-[#EAB308] text-center rounded-md outline-none text-4xl"
        placeholder="Enter Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <Check
        className="w-[50px] h-[50px] text-white bg-[#22C55E] p-4 rounded-lg hover:cursor-pointer hover:scale-110 transition-all ease-in-out duration-300"
        onClick={() => {
          localStorage.setItem(player, JSON.stringify({ name, personSeed }));
          toast.success(`${player} Created`);
          if (redirect) {
            localStorage.setItem(
              player,
              JSON.stringify({ name: name, url: url })
            );
            router.prefetch("/level");
            router.push("/level");
          }
        }}
      />
    </div>
  );
};
