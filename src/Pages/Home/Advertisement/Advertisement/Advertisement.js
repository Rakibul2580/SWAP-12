import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import PrivateRoute from "../../../../Routes/PrivateRoute/PrivateRoute";
import Modal from "../../../Products/Modal/Modal";

const Advertisement = () => {
  const [modalData, setModalData] = useState(null);
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("https://shop-server-rakibul2580.vercel.app/Advertisement")
      .then((res) => res.json())
      .then((data) => setDatas(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto my-20">
      {datas.map(
        (data) =>
          data.add && (
            <div
              key={data._id}
              className="card card-compact w-full bg-slate-200 shadow-xl"
            >
              <figure className="p-2">
                <img src={data.img} alt="Shoes" className="w-full h-80" />
              </figure>
              <div className="p-5  rounded-md">
                <h2 className="text-left text-2xl font-bold">{data.title}</h2>
                <div className="text-left flex py-2">
                  <FcBusinessman className="w-12 h-12" />
                  <div>
                    <h1 className="text-lg font-medium">
                      {data.seller_name}{" "}
                      {data.seller_verified && (
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                      )}
                    </h1>
                    <p className="-mt-1">{data?.date?.slice(0, 10)}</p>
                  </div>
                </div>
                <div className="text-left space-y-1 mb-3 ">
                  <p className="flex items-center">
                    <FaMapMarkerAlt />
                    <span className="ml-1">{data.location}</span>
                  </p>
                  <p>
                    Resale Price:{" "}
                    <span className="text-slate-500">
                      <del>${data.original_price}</del>
                    </span>
                    <span className="text-violet-500 text-lg font-medium">
                      ${data.resale_price}
                    </span>
                  </p>
                  <p>
                    Use Time:{" "}
                    <span className="text-violet-500 font-medium">
                      {data.use_time} Months
                    </span>
                  </p>
                </div>
                <div className="card-actions justify-end">
                  <label
                    onClick={() => setModalData(data)}
                    htmlFor="my-modal"
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
