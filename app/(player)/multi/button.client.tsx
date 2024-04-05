"use client";

import { useRouter } from "next/navigation";

export default function Continue() {
  const router = useRouter();
  return (
    <p
      className="text-white bg-[#22C55E] p-3 text-3xl rounded-lg z-30 mb-5 hover:cursor-pointer"
      onClick={() => {
        if (localStorage.getItem("Player1") === null) {
          localStorage.setItem(
            "Player1",
            JSON.stringify({ name: "Guest1", url: "1234" })
          );
        }
        if (localStorage.getItem("Player2") === null) {
          localStorage.setItem(
            "Player2",
            JSON.stringify({ name: "Guest2", url: "1234" })
          );
        }
        router.push("/level");
      }}
    >
      Continue
    </p>
  );
}
