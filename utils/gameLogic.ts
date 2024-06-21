"use server";

import { unstable_cache } from "next/cache";
import { query } from "./query";
import { SavedWordSchema } from "./schema";
import type { SavedWordSchemaType } from "./types";

export async function genFakeWord(word: string[] | string) {
  if (typeof word === "string") {
    word = [word];
  }
  const data = await unstable_cache(
    async () => {
      const res = await query(`SELECT * FROM fake_words`);

      const parsedData = res
        .map((data) => {
          const parse = SavedWordSchema.safeParse(data);
          if (parse.success) {
            return parse.data;
          } else {
            return null;
          }
        })
        .filter((data) => data !== null) as unknown as SavedWordSchemaType[];
      return parsedData;
    },
    [],
    {
      revalidate: 3600,
    }
  )();

  let filteredData = data.filter((data) => !word.includes(data.word));
  if (filteredData.length === 0) {
    filteredData = data;
  }

  const selectedData =
    filteredData[Math.floor(Math.random() * filteredData.length)];
  const obj = {
    word: selectedData.word,
    definition: selectedData.definition,
    mode: "fake",
  };
  return obj;
}

export async function genOtherWords(word: string[] | string) {
  if (typeof word === "string") {
    word = [word];
  }
  const data = await unstable_cache(
    async () => {
      const res = await query(`SELECT * FROM real_words`);

      const parsedData = res
        .map((data) => {
          const parse = SavedWordSchema.safeParse(data);
          if (parse.success) {
            return parse.data;
          } else {
            return null;
          }
        })
        .filter((data) => data !== null) as unknown as SavedWordSchemaType[];
      return parsedData;
    },
    [],
    {
      revalidate: 3600,
    }
  )();

  let filteredData = data.filter((data) => !word.includes(data.word));
  if (filteredData.length === 0) {
    filteredData = data;
  }

  const selectedData =
    filteredData[Math.floor(Math.random() * filteredData.length)];
  const obj = {
    word: selectedData.word,
    definition: selectedData.definition,
    mode: "real",
  };
  return obj;
}
