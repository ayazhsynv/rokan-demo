import { getAPIData } from "@/api/api";
import HomeHeroCards from "@/components/shared/HomeHeroCards";
import { QueryKeys } from "@/constants/QueryKeys";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const HomeHero = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QueryKeys.herocards],
    queryFn: () => getAPIData("/herocards?populate=*"),
  });

  return (
    <div className="grid grid-cols-3 gap-1.5 mb-22.5">
      {data?.data &&
        data?.data.map(
          (el, index) => (
            console.log(el),
            (
              <HomeHeroCards
                key={index}
                title={el?.title}
                image={el?.image.url}
              />
            )
          )
        )}
    </div>
  );
};

export default HomeHero;
