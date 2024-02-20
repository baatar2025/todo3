import Image from "next/image";
import { Inter } from "next/font/google";
import { Task } from "@/components/Task";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log("hha")
  console.log("eadgarge")

  return (
    <>
      <Task/>
    </>
  );
}
