import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [render, setRender] = useState(true);
  useEffect(() => {
    fetch(
      `https://shop-server-rakibul2580.vercel.app/MyProducts?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, [user?.email, render]);

  const handelDelete = (id) => {
    fetch(`http://localhost:5000/MyProducts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setRender(!render))
      .catch((error) => console.log(error));
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Date</th>
            <th>Price</th>
            <th>Pay Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => (
            <tr key={product._id}>
              <th>{index + 1}</th>
              <td>{product.modalData.title}</td>
              <td>{product.date.slice(0, 10)}</td>
              <td>{product.modalData.resale_price}</td>
              <td>Pay</td>
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
