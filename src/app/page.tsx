import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/ui/Marquee";
import { FeaturedMenu } from "@/components/sections/FeaturedMenu";
import { GoogleReviews } from "@/components/sections/GoogleReviews";
import { LocationHours } from "@/components/sections/LocationHours";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedMenu />
      <GoogleReviews />
      <LocationHours />
    </>
  );
}
