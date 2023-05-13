"use client";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

function Page() {
  const [player1, setPlayer1] = useState({
    name: "Loading...",
    personSeed: "",
  });
  const [score1, setScore1] = useState("0");
  const [player2, setPlayer2] = useState({
    name: "Loading...",
    personSeed: "",
  });
  const [score2, setScore2] = useState("0");
  const [multi, setMulti] = useState(false);

  useEffect(() => {
    const player1 = localStorage.getItem("Player1");
    if (player1 !== null) setPlayer1(JSON.parse(player1));
    const player2 = localStorage.getItem("Player2");
    if (player2 !== null) {
      setMulti(true);
      setPlayer2(JSON.parse(player2));
    }

    const score1Loc = localStorage.getItem("score1");
    if (score1Loc !== null) setScore1(score1Loc);
    const score2Loc = localStorage.getItem("score2");
    if (score2Loc !== null) setScore2(score2Loc);
  }, []);

  useEffect(() => {
    console.log(player1, player2);
  }, [player1, player2]);
  return (
    <div className="w-full md:h-[100svh] h-fit relative flex flex-col items-center justify-center">
      <Image
        src={"/Finish.png"}
        fill
        className="object-cover"
        alt="Finish Image"
        priority
      />
      <div className="w-full h-full bg-[#1f1f1f] opacity-50 z-20 absolute"></div>
      <div className="w-full h-full flex flex-col items-center justify-start mt-56 md:mt-40 gap-5 z-30">
        <h1 className="text-[50px] font-bold text-white ">Game Over</h1>
        <div className="w-full h-fit flex flex-row items-center justify-evenly flex-wrap gap-y-4">
          {
            <Card
              name={player1.name}
              link={player1.personSeed}
              score={score1}
            />
          }
          {multi && (
            <Card
              name={player2.name}
              link={player2.personSeed}
              score={score2}
            />
          )}
        </div>
        <Link
          href={"/"}
          className="text-[40px] p-3 bg-[#009BBD] rounded-lg  transition-all ease-in-out duration-300 hover:cursor-pointer text-white border-2 border-[#009BBD] hover:text-[#009BBD] hover:bg-white mb-3"
        >
          {" "}
          Play Again
        </Link>
      </div>
    </div>
  );
}

const Card: FC<{ name: string; link: string; score: string }> = ({
  name,
  link,
  score,
}) => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    const genAvatar = async () => {
      const svg = await fetch(
        `https://api.dicebear.com/6.x/pixel-art/svg?seed=${link}`
      );
      console.log(link);
      const blob = await svg.blob();
      const linkLoc = URL.createObjectURL(blob);

      setUrl(linkLoc);
    };

    genAvatar();
  }, [link]);
  return (
    <div className=" w-[250px] h-[350px] bg-[#22C55E] rounded-lg flex flex-col items-center justify-start m-2 p-2 gap-4">
      <div className="w-[200px] h-[200px] bg-[#1E1E1E] flex flex-col items-center justify-center mt-4 rounded-lg">
        <Image src={url} alt="Player Image" width={150} height={150} />
      </div>
      <p className="text-[40px] text-white font-bold">{name}</p>
      <p className="text-[50px] text-[#EAB308] font-bold">{`Score: ${score}`}</p>
    </div>
  );
};

export default Page;
