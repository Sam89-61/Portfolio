import Image from "next/image";
import Header from "./component/Header";
import Presentation from "./component/Presentation";
import SpacingY from "./component/SpacingY";
export default function Home() {
  return (
    <main className=" p-5 md: px-[15%] ">
      <Header />
      <SpacingY size="md" />
      <Presentation />
    </main>
  );
}
