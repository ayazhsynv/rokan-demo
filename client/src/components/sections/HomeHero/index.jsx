import HomeHeroCards from "@/components/shared/HomeHeroCards";
import React from "react";

const HomeHero = () => {
  return (
    <div className="grid grid-cols-3 gap-1.5 ">
      <HomeHeroCards />
      <HomeHeroCards />
      <HomeHeroCards />
    </div>
  );
};

export default HomeHero;
