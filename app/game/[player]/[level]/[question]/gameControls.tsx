"use client";

import { getWordFunc } from "@/utils/gameGenFunc";
import { Player, WordType } from "@/utils/types";
import { faThumbsDown, faThumbsUp } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./loading";
import React from "react";
import Error from "./error";
import Correct from "./correct";

interface Props {
  level: string;
  question: string;
  player: string;
  serverArr: WordType[];
}

export function Card({ level, question, player, serverArr }: Props) {
  const router = useRouter();
  const [time, setTime] = useState(10);
  const [real, setReal] = useState(false);
  const [input, setInput] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [word, setWord] = useState({
    word: "",
    definition: "",
    mode: "",
  });
  const [correct, setCorrect] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [playerDet, setPlayerDet] = useState({
    name: "",
    personSeed: "",
  });
  const [currentlyPlaying, setCurrentlyPlaying] = useState(0);
  const [icon, setIcon] = useState("");
  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
    if (time === 0) {
      setError(true);
      setTimeout(() => {
        router.push(`/game/${player}/${level}/${parseInt(question) + 1}`);
      }, 1000);
    }
  }, [time]);

  useEffect(() => {
    if (word.mode === "Real" || word.mode === "real") setReal(true);
  }, [word.mode]);

  useEffect(() => {
    var score1 = localStorage.getItem("score1");
    if (score1 === null) {
      localStorage.setItem("score1", "0");
      score1 = "0";
    }
    var score2 = "0";
    if (player === "multi") {
      const locScore2 = localStorage.getItem("score2");
      score2 = locScore2 !== null ? locScore2 : "0";

      if (score2 === null) {
        localStorage.setItem("score2", "0");
        score2 = "0";
      }
    }

    var scoreInt =
      player !== "multi"
        ? parseInt(score1)
        : currentlyPlaying === 0
        ? parseInt(score1)
        : parseInt(score2);

    if (answered) {
      if (real === input) {
        scoreInt = scoreInt + 1;
        localStorage.setItem(
          currentlyPlaying === 0 ? "score1" : "score2",
          scoreInt.toString()
        );
        setCorrect(true);
        setTimeout(() => {
          router.push(`/game/${player}/${level}/${parseInt(question) + 1}`);
        }, 1000);
      }
      setError(true);
      setTimeout(() => {
        router.push(`/game/${player}/${level}/${parseInt(question) + 1}`);
      }, 1000);
    }
  }, [
    answered,
    real,
    input,
    currentlyPlaying,
    player,
    level,
    question,
    router,
  ]);

  useEffect(() => {
    if (parseInt(question) === 10) router.push("/game/finish");
    if (parseInt(question) === 0) {
      setWord({
        word: serverArr[parseInt(question)].word,
        definition: serverArr[parseInt(question)].definition,
        mode: serverArr[parseInt(question)].mode,
      });
      setLoading(false);
      setTime(5);
    } else {
      getWordFunc().then((word) => {
        setWord({
          word: word.word,
          definition: word.definition,
          mode: word.mode,
        });
        setLoading(false);
        setTime(5);
      });
    }
  }, [question, serverArr, router]);

  useEffect(() => {
    const locQuestion = parseInt(question);
    if (player === "multi") {
      if (locQuestion % 2 === 0) {
        setCurrentlyPlaying(0);
        setPlayerDet(setAvatars("Player1"));
      } else {
        setCurrentlyPlaying(1);
        setPlayerDet(setAvatars("Player2"));
      }
    } else {
      setCurrentlyPlaying(0);
      setPlayerDet(setAvatars("Player1"));
    }
  }, [question, player]);

  useEffect(() => {
    getAvatar(playerDet.personSeed).then((link) => {
      setIcon(link);
    });
  }, [playerDet]);

  const setAvatars = (player: string) => {
    var locPlayer = localStorage.getItem(player);
    if (locPlayer === null) return { name: "", personSeed: "" };
    const finalPlayer = JSON.parse(locPlayer);
    return finalPlayer as Player;
  };

  const getAvatar = async (seed: string) => {
    const svg = await fetch(
      `https://api.dicebear.com/6.x/pixel-art/svg?seed=${seed}`
    );

    const blob = await svg.blob();
    const link = URL.createObjectURL(blob);
    return link;
  };
  return (
    <React.Fragment>
      {loading && <Loading />}
      {error && <Error />}
      {correct && <Correct />}
      <div className="w-full h-[100svh]  flex flex-col items-center justify-center relative overflow-x-hidden">
        <Image
          src={`/levels/${level}.png`}
          alt="level"
          fill
          className="object-cover absolute"
          priority
          quality={100}
        />
        <div className="w-full h-full bg-[#1f1f1f] opacity-50 z-20 absolute"></div>

        <div className="w-full h-full flex flex-col items-center justify-end mt-56 md:mt-40 gap-4">
          <div className="w-full h-fit flex flex-row items-center justify-center gap-5 z-30">
            <p className="text-white font-bold text-[30px]">Playing: </p>
            <p className="text-[#EAB308] font-bold text-[30px]">
              {playerDet.name}
            </p>
            <Image
              src={icon}
              alt="icon"
              width={70}
              height={70}
              className="bg-[#1E1E1E] p-2 rounded-lg"
            />
          </div>
          <div className="w-fit min-w-[70%] md:min-w-[50%]  h-fit p-5 text-center bg-[#EAB308] text-white rounded-lg z-30 relative line-clamp-1">
            <p className="text-3xl md:text-5xl">{word.word}</p>
          </div>
          <div className="w-fit min-w-[95%] md:min-w-[80%]  h-fit p-3 text-center text-[#EAB308] bg-white rounded-lg z-30 relative line-clamp-1 ">
            <p className="text-2xl md:text-4xl">{word.definition}</p>
          </div>
          <div className="w-fit h-fit flex flex-row items-center justify-center gap-5 md:gap-20 z-30">
            <div
              className="w-[100px] md:w-[150px] h-[90px] md:h-[100px] flex flex-col items-center justify-center bg-[#22C55E] rounded-lg shadow-black shadow-lg hover:cursor-pointer hover:scale-90 transition-all ease-in-out duration-300"
              onClick={() => {
                setInput(true);
                setTime(0);
                setAnswered(true);
              }}
            >
              <FontAwesomeIcon
                icon={faThumbsUp as IconProp}
                className="w-[60px] h-[60px] text-white"
              />
            </div>
            <div className="h-[120px] md:h-[140px] w-[7px] bg-white rounded-lg"></div>
            <div
              className="w-[100px] md:w-[150px] h-[90px] md:h-[100px] flex flex-col items-center justify-center bg-[#DC2626] rounded-lg shadow-black shadow-lg hover:cursor-pointer hover:scale-90 transition-all ease-in-out duration-300"
              onClick={() => {
                setInput(false);
                setTime(0);
                setAnswered(true);
              }}
            >
              <FontAwesomeIcon
                icon={faThumbsDown as IconProp}
                className="w-[60px] h-[60px] text-white"
              />
            </div>
          </div>

          <p className="w-[70px] h-[70px] mb-3 rounded-full bg-[#EAB308] text-white text-5xl z-30 flex flex-col items-center justify-center">
            {time}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
