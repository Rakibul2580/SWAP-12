import React, { useEffect, useState } from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeCard from "../HomeCard/HomeCard";

const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://shop-server-rakibul2580.vercel.app/items")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <HomeBanner />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20 w-11/12 mx-auto">
        {items?.map((item) => (
          <HomeCard key={item._id} item={item}></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
