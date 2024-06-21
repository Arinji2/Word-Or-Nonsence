"use client";

import { XCircle } from "lucide-react";

export default function Error({ show }: { show: boolean }) {
  return (
    <div
      className={`${
        show ? "translate-y-0 " : "-translate-y-full "
      }ease-in-out duration-500 will-change-transform transition-transform w-full h-[100vh] flex flex-col items-center justify-center fixed top-0 z-[510] bg-[#6b2828] gap-10`}
    >
      <h1 className="font-bold text-[60px] text-white text-center mt-56 md:mt-40">
        Incorrect Answer
      </h1>
      <XCircle className="text-white w-[200px] h-[200px] " />
    </div>
  );
}
