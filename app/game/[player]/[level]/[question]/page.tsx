export const dynamic = "force-dynamic";

import { gameGenFunc } from "../../../../../utils/gameGenFunc";

import * as React from "react";
import { Card } from "./gameControls";
import { WordType } from "@/utils/types";

export default async function Home({
  params,
}: {
  params: { player: string; level: string; question: string };
}) {
  var finalArr = [{ word: ``, definition: ``, mode: `` }];
  if (params[`question`] === `0`)
    finalArr = (await gameGenFunc()) as WordType[];
  console.log(finalArr, params[`question`]);
  const num = 0;

  console.log(params[`player`], params[`level`], params[`question`]);
  return (
    <div className="w-full h-[100svh] bg-black flex flex-col items-center justify-center">
      <Card
        question={params[`question`]}
        player={params[`player`]}
        level={params[`level`]}
        serverArr={finalArr}
      />
    </div>
  );
}
