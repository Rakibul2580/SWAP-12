import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
  const product = useLoaderData();
  const { modalData } = product;

  return (
    <div>
      <h3 className="text-3xl">Payment for {modalData?.title}</h3>
      <p className="text-xl">
        Please pay <strong>${modalData?.resale_price}</strong>
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm product={product} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
