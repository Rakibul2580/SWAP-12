import { useQuery } from "@tanstack/react-query";
import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeCard from "../HomeCard/HomeCard";
import Advertisement from "../Advertisement/Advertisement/Advertisement";
import Extra from "../Extra/Extra";
import { Vortex } from "react-loader-spinner";

const Home = () => {
  const {
    data: items,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`https://shop-server-rakibul2580.vercel.app`)
        .then((res) => res.json())
        .catch((error) => console.log(error)),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Vortex
          visible={true}
          height="200px"
          width="200px"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      </div>
    );
  }

  return (
    <div>
      <HomeBanner />
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20 w-11/12 mx-auto">
          {items?.map((item) => (
            <HomeCard key={item._id} item={item}></HomeCard>
          ))}
        </div>
      </div>
      <Advertisement />
      <div className="my-20">
        <Extra />
      </div>
    </div>
  );
};

export default Home;
