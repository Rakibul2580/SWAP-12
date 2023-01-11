import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import { FcBusinessman } from "react-icons/fc";
import { FaMapMarkerAlt, FaLayerGroup } from "react-icons/fa";
import Modal from "../Modal/Modal";
import PrivateRoute from "../../../Routes/PrivateRoute/PrivateRoute";
import "./Products.css";
const Products = () => {
  const Products = useLoaderData();
  const [modalData, setModalData] = useState(null);

  if (!Products) {
    return <SpinnerCircular />;
  }
  return (
    <div className="bg-img">
      {/* <div className="sticky top-0">
        <img
          src="https://i.ibb.co/tZWGxq8/Blue-Liquid-Art-Design-Gallery-Intro-Video-3.gif"
          alt=""
          className="w-screen"
        />
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto py-20">
        {Products.map((product) => (
          <div
            key={product._id}
            className="card card-compact w-full bg-slate-200 shadow-xl"
          >
            <figure className="p-2">
              <img
                src={product.img}
                alt="Shoes"
                className="saturate-200 w-full h-80"
              />
            </figure>
            <div className="p-5  rounded-md">
              <h2 className="text-left text-2xl font-bold">{product.title}</h2>
              <div className="text-left flex py-2">
                <FcBusinessman className="w-12 h-12" />
                <div>
                  <h1 className="text-lg font-medium">
                    {product.seller_name}{" "}
                    {product.seller_verified && (
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                    )}
                  </h1>
                  <p className="-mt-1">{product?.date?.slice(0, 10)}</p>
                </div>
              </div>
              <div className="text-left space-y-1 mb-3 ">
                <p className="flex items-center">
                  <FaMapMarkerAlt />
                  <span className="ml-1">{product.location}</span>
                </p>
                <p>
                  Original Price:{" "}
                  <span className="text-violet-500 font-medium">
                    ${product.original_price}
                  </span>
                </p>
                <p>
                  Resale Price:{" "}
                  <span className="text-violet-500 font-medium">
                    ${product.resale_price}
                  </span>
                </p>
                <p>
                  Use Time:{" "}
                  <span className="text-violet-500 font-medium">
                    {product.use_time} Months
                  </span>
                </p>
              </div>
              <div className="card-actions justify-end">
                <label
                  htmlFor="my-modal"
                  onClick={() => setModalData(product)}
                  href="/"
                  className="btn btn-primary w-full"
                >
                  book now
                </label>
              </div>
            </div>
          </div>
        ))}
        {modalData && (
          <PrivateRoute>
            {" "}
            <Modal setModalData={setModalData} modalData={modalData} />
          </PrivateRoute>
        )}
      </div>
    </div>
  );
};

export default Products;
