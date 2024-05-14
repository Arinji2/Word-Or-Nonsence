export const maxDuration = 60;
export const dynamic = "force-dynamic";

import { Card } from "./gameControls";

export default async function Home({
  params,
}: {
  params: { player: string; level: string; question: string };
}) {
  return (
    <div className="w-full h-[100svh] bg-black flex flex-col items-center justify-center">
      <Card
        question={params[`question`]}
        player={params[`player`]}
        level={params[`level`]}
      />
    </div>
  );
}
