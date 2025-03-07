import React from "react";
import HomeHero from "../../sections/HomeHero";
import HomeBestseller from "@/components/sections/HomeBestseller";
import HomeBanner from "@/components/sections/HomeBanner";

const HomeTemplate = () => {
  return (
    <div>
      <HomeHero />
      <HomeBestseller />
      <HomeBanner />
    </div>
  );
};

export default HomeTemplate;
