import React from "react";

const HomeHeroCards = ({ title, image }) => {
  return (
    <div className=" max-h-[755.55px] relative">
      <img
        className=" w-full h-full object-cover overflow-hidden hover:scale-110 duration-300 ease-in-out"
        src="{image}"
        alt=""
      />
      <div className=" absolute bottom-4 left-4">
        <h3 className=" text-2xl font-light text-white">{title}</h3>
      </div>
    </div>
  );
};

export default HomeHeroCards;
