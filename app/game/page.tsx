import Image from "next/image";
import { genFakeWord, genOtherWords } from "../../utils/gameLogic";
import { gameGenFunc } from "../../utils/gameGenFunc";
import * as React from "react";

interface Props {
  word: string;
  definition: string;
  mode: string;
}
export default async function Home() {
  const genRealFunc = async (words: string[]) => {
    const data = await genOtherWords(words);
    return data;
  };
  const genFakeFunc = async (words: string[]) => {
    const data = await genFakeWord(words);
    return data;
  };

  const finalArr = (await gameGenFunc()) as any;

  return (
    <div className="w-full h-[100svh] bg-black flex flex-col items-center justify-center">
      {finalArr.map((word: any, i: number) => (
        <Card
          word={word.word}
          definition={word.definition}
          mode={word.mode}
          key={i}
        />
      ))}
    </div>
  );
}

const Card: React.FC<Props> = ({ word, definition, mode }) => {
  console.log(word, definition);
  return (
    <div className="flex flex-row items-center justify-center border-blue-300 border-2 m-2 p-2 ">
      <p className="z-30 text-white">Word: {word}</p>
      <p className="z-30 text-white">Definition: {definition}</p>
      <p className="z-30 text-white">Mode: {mode}</p>
    </div>
  );
};
