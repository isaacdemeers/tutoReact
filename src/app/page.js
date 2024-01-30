import Image from "next/image";
import styles from "./globals.css";
import Board from "./ttt/square";

export default function Home() {
  return (
    <div>
      <Board>
      </Board>
    </div>
  );
}

