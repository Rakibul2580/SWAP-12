import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Modal = ({ modalData, setModalData }) => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const name = user?.displayName;
  const { title, resale_price } = modalData;

  const handelModal = (event) => {
    event.preventDefault();
    const form = event.target;
    const number = form.number.value;
    const location = form.location.value;
    console.log(number, location);
    setModalData(null);
  };

  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:text-gray-900">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <form
              onSubmit={handelModal}
              className="space-y-6 ng-untouched ng-pristine ng-valid text-left"
            >
              <div>
                <label>Product Name</label>
                <input
                  defaultValue={title}
                  disabled
                  type="text"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-100 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div>
                <label>User Name</label>
                <input
                  defaultValue={user?.name}
                  disabled
                  type="text"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-100 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div>
                <label>User Email</label>
                <input
                  defaultValue={user?.email}
                  disabled
                  type="text"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-100 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div>
                <label>Product Price</label>
                <input
                  defaultValue={resale_price}
                  disabled
                  type="text"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-100 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div>
                <label>Phone Number</label>
                <input
                  placeholder="Phone Number"
                  name="number"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-100 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div>
                <label>Location</label>
                <input
                  placeholder="Location"
                  name="location"
                  className="w-full px-4 py-3 rounded-md dark:border-gray-100 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                />
              </div>
              <div className="modal-action">
                <button className="btn btn-primary w-full">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
