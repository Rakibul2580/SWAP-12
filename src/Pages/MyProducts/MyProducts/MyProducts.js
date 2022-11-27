import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const {
    data: products = [user?.email],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(
        `https://shop-server-rakibul2580.vercel.app/MyProducts?email=${user?.email}`
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
    console.log("first");
    refetch();
  }

  const handelDelete = (id) => {
    fetch(`https://shop-server-rakibul2580.vercel.app/MyProducts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => refetch())
      .catch((error) => console.log(error));
  };
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Name</th>
            <th>Date</th>
            <th>Price</th>
            <th>Pay Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => (
            <tr key={product?._id}>
              <th>{index + 1}</th>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={product?.img}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>{product?.modalData?.title}</td>
              <td>{product?.date.slice(0, 10)}</td>
              <td>{product?.modalData?.resale_price}</td>
              <td>
                <Link to={`/payment/${product._id}`}>Pay</Link>
              </td>
              <td>
                <button
                  onClick={() => handelDelete(product?._id)}
                  className="btn btn-primary btn-sm"
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProducts;
