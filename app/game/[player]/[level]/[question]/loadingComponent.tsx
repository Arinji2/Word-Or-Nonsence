import { ThumbsDown, ThumbsUp } from "lucide-react";
import Image from "next/image";

export default function Loading({ loading }: { loading: boolean }) {
  return (
    <div
      className={`${
        loading ? "translate-y-0 " : "-translate-y-full "
      } ease-in-out duration-500 will-change-transform transition-transform w-full h-[100svh] flex flex-col items-center justify-center fixed top-0 z-[500] bg-[#1E1E1E] gap-5 md:gap-10 m-2`}
    >
      <h1 className="mt-52 md:mt-40 text-[35px] md:text-[60px] text-white z-30 text-center">
        How To Play
      </h1>
      <div className="w-[80%] md:w-[50%] h-fit flex flex-col items-center justify-center">
        <p className="text-[15px] md:text-[30px] font-bold text-[#009BBD] text-center">
          You will be shown a <span className="text-[#EAB308]">word</span> with
          its <span className="text-[#EAB308]">definition</span>, you will need
          to figure out if it is an actual word or not within the{" "}
          <span className="text-[#EAB308]">time limit</span>.
        </p>
      </div>
      <div className="w-full md:w-[80%] h-fit flex flex-row items-center justify-around flex-wrap mb-5">
        <div className="w-fit h-fit flex flex-row items-center justify-center gap-5 md:gap-10 text-[#009BBD] font-bold text-[30px]">
          <div className="w-fit h-fit flex flex-col items-center justify-center gap-2">
            <div className="md:w-[130px] md:h-[100px] w-[60px] h-[50px] bg-[#22C55E] rounded-lg flex flex-col items-center justify-center">
              <ThumbsUp className="text-white md:w-[60px] md:h-[60px] w-[30px] h-[30px]" />
            </div>
            <p className="md:text-[30px] text-[15px] ">Real</p>
          </div>
          <div className="w-fit h-fit flex flex-col items-center justify-center gap-2">
            <div className="md:w-[130px] md:h-[100px] w-[60px] h-[50px] bg-[#DC2626] rounded-lg flex flex-col items-center justify-center">
              <ThumbsDown className="text-white md:w-[60px] md:h-[60px] size-[30px]" />
            </div>
            <p className="md:text-[30px] text-[15px] ">Fake</p>
          </div>
          <div className="w-fit h-fit flex flex-col items-center justify-center gap-2">
            <div className="md:w-[100px] md:h-[100px] w-[50px] h-[50px] bg-[#EAB308] rounded-full flex flex-col items-center justify-center">
              <p className="text-white text-[30px] md:text-[50px]">5</p>
            </div>
            <p className="md:text-[30px] text-[15px] ">Time</p>
          </div>
        </div>
        <div className="w-fit h-fit flex flex-col items-center justify-center">
          <p className="text-white text-[30px] md:text-[50px]">Loading</p>
          <Image
            src={"/Duck.gif"}
            alt="Loading"
            unoptimized
            width={200}
            height={200}
            quality={100}
            className="md:block hidden"
          />
          <Image
            src={"/Duck.gif"}
            alt="Loading"
            unoptimized
            width={100}
            height={100}
            quality={100}
            className="md:hidden block"
          />
        </div>
      </div>
    </div>
  );
}
