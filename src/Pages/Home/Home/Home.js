import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Advertisement from "../Advertisement/Advertisement";
import HomeBanner from "../HomeBanner/HomeBanner";
import { ClipLoader } from "react-spinners";
import HomeCard from "../HomeCard/HomeCard";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const Home = () => {
  const {
    data: items = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`https://shop-server-rakibul2580.vercel.app/items`)
        .then((res) => res.json())
        .catch((error) => console.log(error)),
  });
  let [loader, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  if (isLoading) {
    return (
      <ClipLoader
        color={color}
        loading={loader}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }

  return (
    <div>
      <HomeBanner />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20 w-11/12 mx-auto">
        {items?.map((item) => (
          <HomeCard key={item._id} item={item}></HomeCard>
        ))}
      </div>
      <Advertisement />
    </div>
  );
};

export default Home;
