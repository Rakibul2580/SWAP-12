import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { Vortex } from "react-loader-spinner";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const MyAddProducts = () => {
  const { user } = useContext(AuthContext);
  const [render, setRender] = useState("");

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
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      </div>
    );
  }
  if (products.length <= 0) {
    refetch();
  }

  const handelAdd = (id) => {
    setRender(id);
    const status = { add: true };
    fetch(`https://shop-server-rakibul2580.vercel.app/AllCollection/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      .then((data) => setRender(""))
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
                {render === product._id ? (
                  <button
                    onClick={() => handelAdd(product._id)}
                    className="btn btn-outline w-20"
                  >
                    <div className="w-3 h-3 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
                  </button>
                ) : (
                  <button
                    onClick={() => handelAdd(product._id)}
                    className="btn btn-primary w-28"
                  >
                    advertised
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAddProducts;
