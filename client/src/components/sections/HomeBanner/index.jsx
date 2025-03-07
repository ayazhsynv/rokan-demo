import { getAPIData } from "@/api/api";
import HomeBannerCards from "@/components/shared/HomeBannerCards";
import { QueryKeys } from "@/constants/QueryKeys";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const HomeBanner = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QueryKeys.banners],
    queryFn: () => getAPIData("/banners?populate=*"),
  });
  return (
    <div className="grid grid-cols-4 gap-1.25 mb-21.25">
      {data?.data &&
        data?.data.map(
          (el, index) => (
            console.log(el),
            (
              <HomeBannerCards
                key={index}
                image={el?.image.url}
                title={el?.title}
              />
            )
          )
        )}
    </div>
  );
};

export default HomeBanner;
