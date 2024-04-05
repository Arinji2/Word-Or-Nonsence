import { User, Users2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
interface CardProps {
  title: string;
  children: React.ReactNode;
  link: string;
}
export default async function Home() {
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
      <div className="w-full h-full flex flex-row items-center justify-evenly flex-wrap ">
        <Card title="Single Player" link="/single">
          <User className="w-[70px] h-[70px] " />
        </Card>
        <Card title="Multi Player" link="/multi">
          <Users2 className="w-[70px] h-[70px] " />
        </Card>
      </div>
    </div>
  );
}

const Card: FC<CardProps> = ({ title, children, link }) => {
  return (
    <Link
      href={link}
      className="w-[230px] h-[355px] bg-[#EAB308] flex flex-col items-center justify-center gap-10 rounded-md text-white z-30 m-2 text-center hover:scale-110 transition-all ease-in-out duration-300"
    >
      {children}
      <p className="text-[50px]">{title}</p>
    </Link>
  );
};
