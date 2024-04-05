import Image from "next/image";

import { Card } from "../selector";
import Continue from "./button.client";

export default function Home() {
  return (
    <div className="w-full h-fit md:h-[100svh] flex flex-col items-center justify-start relative  font-bold">
      <Image
        src="/Boat.png"
        fill
        quality={100}
        priority
        className="object-cover absolute"
        alt="Boat Image"
      />
      <div className="w-full h-full bg-[hsl(0,0%,12%)] opacity-50 absolute z-20"></div>
      <h1 className="mt-56 md:mt-40 text-[35px] md:text-[50px] text-white z-30 text-center">
        Begin your Journey
      </h1>
      <div className="w-full h-full flex flex-row items-center justify-evenly flex-wrap mb-5">
        <Card player="Player1" red={true} />
        <Card player="Player2" red={false} />
      </div>
      <Continue />
    </div>
  );
}
