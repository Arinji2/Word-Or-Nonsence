import { genFakeWord, genOtherWords } from "./gameLogic";

export const gameGenFunc = async () => {
  const genRealFunc = async (words: string[]) => {
    const data = await genOtherWords(words);
    return data;
  };
  const genFakeFunc = async (words: string[]) => {
    const data = await genFakeWord(words);
    return data;
  };

  var finalArr = [];
  var finalWordArr = [""];
  for (let i = 0; i < 5; i++) {
    var num, data;
    num = Math.floor(Math.random() * 2);
    if (num === 0) {
      data = await genRealFunc(finalWordArr);
    } else {
      data = await genFakeFunc(finalWordArr);
    }
    finalArr.push(data);
    finalWordArr.push(data.word);
  }
  return finalArr;
};
