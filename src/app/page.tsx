import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/ui/Marquee";
import { StarDishes } from "@/components/sections/StarDishes";
import { MenuButtons } from "@/components/sections/MenuButtons";
import { FeaturedMenu } from "@/components/sections/FeaturedMenu";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { LocationHours } from "@/components/sections/LocationHours";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <StarDishes />
      <MenuButtons />
      <FeaturedMenu />
      <GoogleReviews />
      <LocationHours />
    </>
  );
}
