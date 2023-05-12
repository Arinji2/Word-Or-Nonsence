"use client";
import { faCheck, faRandom } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "next/image";

import { FC, useEffect, useState } from "react";

interface CardProps {
  player: string;
  red: boolean;
}

export const Card: FC<CardProps> = ({ player, red }) => {
  const seed = Math.random().toString();
  const [url, setUrl] = useState("/Default.svg");
  const [name, setName] = useState("Guest");

  const genAvatar = async () => {
    const svg = await fetch(
      `https://api.dicebear.com/6.x/pixel-art/svg?seed=${seed}`
    );
    const blob = await svg.blob();
    const link = URL.createObjectURL(blob);

    setUrl(link);
  };

  useEffect(() => {
    genAvatar();
  }, []);

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
        <FontAwesomeIcon
          icon={faRandom as IconProp}
          className="w-[50px] h-[50px] text-[#22C55E] bg-white p-4 rounded-lg"
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
      <FontAwesomeIcon
        icon={faCheck as IconProp}
        className="w-[50px] h-[50px] text-white bg-[#22C55E] p-4 rounded-lg"
        onClick={() => {
          localStorage.setItem(player, JSON.stringify({ name, url }));
        }}
      />
    </div>
  );
};
