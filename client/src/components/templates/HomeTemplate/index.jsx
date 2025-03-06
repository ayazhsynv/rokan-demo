import React from "react";
import HomeHero from "../../sections/HomeHero";
import HomeBestseller from "@/components/sections/HomeBestseller";
import HoemBanner from "@/components/sections/HomeBanner";

const HomeTemplate = () => {
  return (
    <div>
      <HomeHero />
      <HomeBestseller />
      <HoemBanner />
    </div>
  );
};

export default HomeTemplate;
