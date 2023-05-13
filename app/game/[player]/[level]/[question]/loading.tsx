import { faThumbsDown, faThumbsUp } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-start fixed top-0 z-[500] bg-[#1E1E1E] gap-5 md:gap-10">
      <h1 className="mt-56 md:mt-40 text-[45px] md:text-[60px] text-white z-30 text-center">
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
          <div className="w-fit h-fit flex flex-col items-center justify-center">
            <div className="md:w-[130px] md:h-[100px] w-[90px] h-[60px] bg-[#22C55E] rounded-lg flex flex-col items-center justify-center">
              <FontAwesomeIcon
                icon={faThumbsUp as IconProp}
                className="text-white md:w-[60px] md:h-[60px] w-[45px] h-[45px]"
              />
            </div>
            <p>Real</p>
          </div>
          <div className="w-fit h-fit flex flex-col items-center justify-center">
            <div className="md:w-[130px] md:h-[100px] w-[90px] h-[60px] bg-[#DC2626] rounded-lg flex flex-col items-center justify-center">
              <FontAwesomeIcon
                icon={faThumbsDown as IconProp}
                className="text-white md:w-[60px] md:h-[60px] w-[45px] h-[45px]"
              />
            </div>
            <p>Fake</p>
          </div>
          <div className="w-fit h-fit flex flex-col items-center justify-center">
            <div className="md:w-[100px] md:h-[100px] w-[60px] h-[60px] bg-[#EAB308] rounded-full flex flex-col items-center justify-center">
              <p className="text-white text-[50px]">5</p>
            </div>
            <p>Time</p>
          </div>
        </div>
        <div className="w-fit h-fit flex flex-col items-center justify-center">
          <p className="text-white text-[30px] md:text-[50px]">Loading</p>
          <Image
            src={"/Duck.gif"}
            alt="Loading"
            width={200}
            height={200}
            quality={100}
            className="md:block hidden"
          />
          <Image
            src={"/Duck.gif"}
            alt="Loading"
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
