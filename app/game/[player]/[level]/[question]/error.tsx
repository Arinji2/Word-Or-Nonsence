"use client";

import { faTimesCircle } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Error() {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center fixed top-0 z-[500] bg-[#6b2828] gap-10">
      <h1 className="font-bold text-[60px] text-white text-center mt-56 md:mt-40">
        Incorrect Answer
      </h1>
      <FontAwesomeIcon
        icon={faTimesCircle as IconProp}
        className="text-white w-[200px] h-[200px] "
      />
    </div>
  );
}
