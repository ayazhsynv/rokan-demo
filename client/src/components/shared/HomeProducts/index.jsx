import React from "react";

const HomeProducts = ({ title, image, hoverimage, stars, price }) => {
  return (
    <swiper-slide>
      <div className="flex flex-col ">
        <div className="object-contain overflow-hidden">
          <img
            className="w-100 h-100 hover:scale-110 duration-300 ease-in-out overflow-hidden "
            src={"http://localhost:1337" + image}
            alt={image}
          />
        </div>
        <div className="pt-3.75">
          <h3 className="mb-1.25 text-md text-text-main ">{title}</h3>
          <p>
            {Array.from({ length: stars }).map((_) => (
              <i className="ri-star-fill text-orange-300"></i>
            ))}
          </p>
          <p className="mb-1 text-md text-text-main font-semibold">${price}</p>
        </div>
      </div>
    </swiper-slide>
  );
};

export default HomeProducts;
