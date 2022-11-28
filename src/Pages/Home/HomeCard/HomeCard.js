import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ item }) => {
  const { name, img, category_id } = item;
  return (
    <div>
      <div className="card card-compact w-full bg-slate-200 shadow-xl">
        <figure className="p-2 transition">
          <img
            src={img}
            alt="Shoes"
            className="w-full h-96 z-20 bg-slate-400 rounded-lg hover:translate-y-6 transition"
          />
        </figure>
        <div className="p-5 justify-between items-center rounded-md bg-slate-200 blog sm:flex">
          <h2 className="sm:card-title">{name}</h2>
          <div className="card-actions justify-end">
            <Link
              to={`/Products/${category_id}`}
              href="/"
              className="btn btn-primary w-full"
            >
              get start
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
