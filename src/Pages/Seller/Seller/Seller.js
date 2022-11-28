import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const Seller = () => {
  const [render, setRender] = useState("");
  const {
    data: seller = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://shop-server-rakibul2580.vercel.app/users")
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

  const handelDelete = (id) => {
    setRender(id);
    fetch(`https://shop-server-rakibul2580.vercel.app/MyProducts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        setRender("");
      })
      .catch((error) => console.log(error));
  };
  return <div></div>;
};

export default Seller;
