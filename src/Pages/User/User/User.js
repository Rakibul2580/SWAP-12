import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Vortex } from "react-loader-spinner";

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
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users?.map(
            (user, index) =>
              !user.userStatus && (
                <tr key={user?._id}>
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
              )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default User;
