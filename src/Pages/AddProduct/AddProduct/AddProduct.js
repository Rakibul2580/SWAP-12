import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);

  const handelSeller = (event) => {
    event.preventDefault();
    const form = event.target;
    let category_id = "";
    const selection = form.category.value;
    if (selection === "Nikai") {
      category_id = "1";
    } else if (selection === "Samsung") {
      category_id = "2";
    } else if (selection === "Sony") {
      category_id = "3";
    }
    const email = form.email.value;
    const seller_name = form.name.value;
    const title = form.productName.value;
    const location = form.location.value;
    const resale_price = form.resale_price.value;
    const original_price = form.original_price.value;
    const use_time = form.use_time.value;
    const img = form.photo.value;
    const product = {
      category_id,
      email,
      seller_name,
      title,
      location,
      resale_price,
      original_price,
      use_time,
      img,
      add: false,
    };

    fetch("https://shop-server-rakibul2580.vercel.app/AllCollection", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => form.reset())
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-center xl:flex-row">
              <div className="w-full text-left max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white  rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Sign up for updates
                  </h3>
                  <form onSubmit={handelSeller}>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium"
                      >
                        E-mail
                      </label>
                      <input
                        defaultValue={user.email}
                        disabled
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="name"
                        className="inline-block mb-1 font-medium"
                      >
                        Your Name
                      </label>
                      <input
                        placeholder="Your Name"
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="name"
                        name="name"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="name"
                        className="inline-block mb-1 font-medium"
                      >
                        Product Name
                      </label>
                      <input
                        type="text"
                        placeholder="Product Name"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="productName"
                        name="productName"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="location"
                        className="inline-block mb-1 font-medium"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        placeholder="Location"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="location"
                        name="location"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="resale_price"
                        className="inline-block mb-1 font-medium"
                      >
                        Resale Price
                      </label>
                      <input
                        type="text"
                        placeholder="Resale Price"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="resale_price"
                        name="resale_price"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="original_price"
                        className="inline-block mb-1 font-medium"
                      >
                        Original Price
                      </label>
                      <input
                        type="text"
                        placeholder="Original Price"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="original_price"
                        name="original_price"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="use_time"
                        className="inline-block mb-1 font-medium"
                      >
                        Use Time
                      </label>
                      <input
                        type="text"
                        placeholder="Use Time"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="use_time"
                        name="use_time"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="photo"
                        className="inline-block mb-1 font-medium"
                      >
                        Product Photo
                      </label>
                      <input
                        type="text"
                        placeholder="Product Photo"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="photo"
                        name="photo"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="name"
                        className="inline-block mb-1 font-medium"
                      >
                        Chose the TV Catagories?
                      </label>
                      <select
                        name="category"
                        required
                        className="select select-primary w-full"
                      >
                        <option defaultValue>Samsung</option>
                        <option>Sony</option>
                        <option>Nikai</option>
                      </select>
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button type="submit" className="btn w-full shadow-md">
                        Subscribe
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 sm:text-sm">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
