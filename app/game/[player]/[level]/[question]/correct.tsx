"use client";

import { faCheckCircle } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Correct() {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center fixed top-0 z-[500] bg-[#1d502f] gap-10">
      <h1 className="font-bold text-[60px] text-white text-center mt-56 md:mt-40">
        Correct Answer
      </h1>
      <FontAwesomeIcon
        icon={faCheckCircle as IconProp}
        className="text-white w-[200px] h-[200px] "
      />
    </div>
  );
}
