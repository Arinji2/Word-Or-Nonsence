import { genFakeWord, genOtherWords } from "./gameLogic";
import { WordType } from "./types";
const genRealFunc = async (words: string[] | string) => {
  const data = await genOtherWords(words);
  return data;
};
const genFakeFunc = async (words: string[] | string) => {
  const data = await genFakeWord(words);
  return data;
};
export const gameGenFunc = async () => {
  var finalArr = [];
  var finalWordArr = [""];
  for (let i = 0; i < 2; i++) {
    var num, data;
    num = Math.floor(Math.random() * 2);
    if (num === 0) {
      data = await genRealFunc(finalWordArr);
    } else {
      data = await genFakeFunc(finalWordArr);
    }
    console.log(data);
    finalArr.push(data);
    finalWordArr.push(data.word);
  }
  return finalArr;
};

export const getWordFunc = async () => {
  var data = {
    word: "",
    definition: "",
    mode: "",
  };
  const num = Math.floor(Math.random() * 2);
  if (num === 0) {
    data = (await genRealFunc(data.word)) as WordType;
  } else {
    data = (await genFakeFunc(data.word)) as WordType;
  }

  console.log(data);

  return data;
};
