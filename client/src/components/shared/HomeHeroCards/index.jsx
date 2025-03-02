import React from "react";

const HomeHeroCards = ({ title, image }) => {
  return (
    <div className=" max-h-[755.55px] relative object-contain overflow-hidden">
      <img
        className=" w-full h-full hover:scale-110 duration-300 ease-in-out"
        src={"http://localhost:1337" + image}
        alt={image}
      />
      <div className=" absolute bottom-8 left-8 border-b border-white">
        <h3 className=" text-2xl font-light text-white">{title}</h3>
      </div>
    </div>
  );
};

export default HomeHeroCards;
