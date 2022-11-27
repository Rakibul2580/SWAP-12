import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const MyAddProducts = () => {
  const { user } = useContext(AuthContext);

  const {
    data: products = [user?.email],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(
        `https://shop-server-rakibul2580.vercel.app/addProducts/${user?.email}`
      )
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
  if (products.length <= 0) {
    console.log("object");
    refetch();
  }
  const handelAdd = (id) => {
    const status = { add: true };
    fetch(`https://shop-server-rakibul2580.vercel.app/AllCollection/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 row-gap-5 md:grid-cols-2">
        {products?.map((product) => (
          <div
            key={product._id}
            className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-md hover:scale-105 group hover:shadow-xl"
          >
            <div className="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
              <div className="mb-6 mr-6 lg:mb-0">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 lg:w-32 lg:h-32">
                  <img src={product.img} alt="" />
                </div>
              </div>
              <div className="flex flex-col justify-between text-left flex-grow">
                <div>
                  <h6 className="mb-2 font-semibold leading-5">
                    {product.title}
                  </h6>
                  <p className="mb-2 text-sm text-gray-900">{}</p>
                </div>
                <button
                  onClick={() => handelAdd(product._id)}
                  className="btn btn-outline w-20"
                >
                  update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAddProducts;
