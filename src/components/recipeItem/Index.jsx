import React from "react";
import { Link } from "react-router-dom";

const RecipeItem = ({ item }) => {
  return (
    <>
      <div
        className="flex flex-wrap w-80 overflow-hidden p-5
       bg-white/75 shadow-xl gap-5 border-2 rounded-2xl
        border-white"
      >
        <div className="h-40 flex justify-center items-center rounded-xl overflow-hidden">
          <img
            src={item?.image_url}
            alt="recipe image"
            className="block w-full"
          />
        </div>
        <span className="text-cyan-700 font-medium text-sm ">
          {item?.publisher}
        </span>
        <h3 className="font-bold truncate text-2xl text-black">
          {item?.title}
        </h3>
        <Link
          to={`/recipe-item/${item?.id}`}
          className="text-sm px-8 rounded-lg bg-black text-white 
          uppercase tracking-wider inline-block
           shadow-md  p-3"
        >
          Recipe Details
        </Link>
      </div>
    </>
  );
};

export default RecipeItem;
