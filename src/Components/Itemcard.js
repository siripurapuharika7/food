import { useDispatch } from "react-redux";
import { additem } from "./utils.js/Cartslice";
// import { useState,useEffect } from "react";

const Itemcard = ({items}) => {

  const dispatch = useDispatch();
  const handlemenu = (items) => {
    dispatch(additem(items));
  };

  return (
    <div className="ml-14  mt-20 ">
      <div className="w-60 h-74 shadow-lg p-4 ">
        <img className="w-52 h-50" alt="item" src={items.strMealThumb} />
        <h1 className="font-bold justify-center flex mt-2">{items.strMeal}</h1>
        <button
          className=" px-4 py-1 rounded-md bg-orange-500 text-white font-semibold mt-4 hover:bg-zinc-300 hover:text-orange-500 hover:font-semibold"
          onClick={() => handlemenu(items)}
        >
          Add
        </button>
      </div>

      

    </div>
  );
};
export default Itemcard;
