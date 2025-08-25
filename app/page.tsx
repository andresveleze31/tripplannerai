import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import { PopularCityList } from "./_components/PopularCityList";
import Icons from "./_components/Icons";
import ActivitiesHome from "./_components/ActivitiesHome";
import Review from "./_components/Review";

export default function Home() {
  return (
    <div>
      <Hero />
      <Icons />
      <PopularCityList />
      <ActivitiesHome />
      <Review />
    </div>
  );
}
