import { getAPIData } from "@/api/api";
import HomeProducts from "@/components/shared/HomeProducts";
import { QueryKeys } from "@/constants/QueryKeys";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React from "react";

const HomeBestseller = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QueryKeys.products],
    queryFn: () => getAPIData("/products?populate=*"),
  });

  return (
    <div className="flex flex-col items-center mb-22.5">
      <h2 className=" mb-1.25 text-4xl text-text-main">Bestseller Product</h2>
      <p className=" text-[15px] text-text-secondary mb-10">
        Our bestselling piece, timeless and elegantly modern.
      </p>

      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data?.data &&
          data?.data.map(
            (el, index) => (
              console.log(el),
              (
                <HomeProducts
                  key={index}
                  image={el?.image.url}
                  hoverimage={el?.hoverimage}
                  title={el?.title}
                  stars={el?.stars}
                  price={el?.price}
                />
              )
            )
          )}
      </Swiper>
    </div>
  );
};

export default HomeBestseller;
