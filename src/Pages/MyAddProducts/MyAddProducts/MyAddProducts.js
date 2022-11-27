import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const MyAddProducts = () => {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/addProducts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, [user?.email]);

  return <div>MyAddProducts</div>;
};

export default MyAddProducts;
