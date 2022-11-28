import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const User = () => {
  const [render, setRender] = useState("");
  const {
    data: users = [],
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
    fetch(`https://shop-server-rakibul2580.vercel.app/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        setRender("");
      })
      .catch((error) => console.log(error));
  };
  console.log(users);
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={user?._id}>
              <th>{index + 1}</th>

              <td>{user?.name}</td>
              <td>{user?.email}</td>
              <td>
                {render === user._id ? (
                  <button
                    onClick={() => handelDelete(user?._id)}
                    className="btn btn-primary btn-sm"
                  >
                    <div className="w-3 h-3 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
                  </button>
                ) : (
                  <button
                    onClick={() => handelDelete(user?._id)}
                    className="btn btn-primary btn-sm"
                  >
                    X
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
