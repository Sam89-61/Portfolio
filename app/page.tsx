import Image from "next/image";
import Header from "./component/Header";
import Presentation from "./component/Presentation";
import SpacingY from "./component/SpacingY";
import GridComponent from "./component/GridCompetences";
import GridOutils from "./component/GridOutil";
import CarouselProjet from "./component/CarrouselProjet";
import { Separator } from "@radix-ui/react-separator";
import { Car } from "lucide-react";
export default function Home() {
  return (
    <main className=" p-5 md: px-[10%] ">
      <Header />
      <SpacingY size="md" />
      <Presentation />
      <SpacingY size="md" />
      <h2 className="text-4xl font-bold mb-1.5 text-center font-poppins">Compétences</h2>
      <SpacingY size="2xs" />
      <GridComponent className="md:w-xl mx-auto" />
      <SpacingY size="2xs" />
      <GridOutils className="md:w-xl mx-auto" />
      <SpacingY size="xs" />
      <h2 className="text-4xl font-bold mb-1.5 text-center font-poppins">Projets</h2>
      <SpacingY size="2xs" />
      <CarouselProjet />
    </main>
  );
}
