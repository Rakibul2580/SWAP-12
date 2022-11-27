import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import { ClipLoader } from "react-spinners";
import PrivateRoute from "../../../Routes/PrivateRoute/PrivateRoute";
import Modal from "../../Products/Modal/Modal";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const Advertisement = () => {
  const [modalData, setModalData] = useState(null);
  const {
    data: AdvertisementItems = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`https://shop-server-rakibul2580.vercel.app`)
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
  if (AdvertisementItems.length <= 0) {
    refetch();
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto my-20">
        {AdvertisementItems?.map(
          (item) =>
            item.add && (
              <div
                key={item._id}
                className="card card-compact w-full bg-slate-200 shadow-xl"
              >
                <figure className="p-2">
                  <img src={item.img} alt="Shoes" className="w-full h-80" />
                </figure>
                <div className="p-5  rounded-md">
                  <h2 className="text-left text-2xl font-bold">{item.title}</h2>
                  <div className="text-left flex py-2">
                    <FcBusinessman className="w-12 h-12" />
                    <div>
                      <h1 className="text-lg font-medium">
                        {item.seller_name}{" "}
                        {item.seller_verified && (
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        )}
                      </h1>
                      <p className="-mt-1">{item?.date?.slice(0, 10)}</p>
                    </div>
                  </div>
                  <div className="text-left space-y-1 mb-3 ">
                    <p className="flex items-center">
                      <FaMapMarkerAlt />
                      <span className="ml-1">{item.location}</span>
                    </p>
                    <p>
                      Price:{" "}
                      <span className="text-sm">
                        <del>${item.original_price} </del>
                      </span>
                      <span className="text-violet-500 text-lg font-medium">
                        ${item.resale_price}
                      </span>
                    </p>
                    <p>
                      Use Time:{" "}
                      <span className="text-violet-500  font-medium">
                        {item.use_time} Months
                      </span>
                    </p>
                  </div>
                  <div className="card-actions justify-end">
                    <label
                      htmlFor="my-modal"
                      onClick={() => setModalData(item)}
                      href="/"
                      className="btn btn-primary w-full"
                    >
                      book now
                    </label>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
      {modalData && (
        <PrivateRoute>
          {" "}
          <Modal setModalData={setModalData} modalData={modalData} />
        </PrivateRoute>
      )}
    </div>
  );
};

export default Advertisement;
