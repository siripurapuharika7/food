import { useDispatch } from "react-redux";
import { additem } from "./utils.js/cartslice";

const Itemcard = ({items}) => {

  const dispatch = useDispatch();
  const handlemenu = (citem) => {
    dispatch(additem(citem));
  };

  return (
    <div>
      {
        items.map((citem)=>(
          <div key={citem.idMeal} className="ml-14  mt-20 ">
      <div className="w-60 h-74 shadow-lg p-4 ">
        <img className="w-52 h-50" alt="item" src={citem.strMealThumb} />
        <h1 className="font-bold justify-center flex mt-2">{citem.strMeal}</h1>
        <button
          className=" px-4 py-1 rounded-md bg-orange-500 text-white font-semibold mt-4 hover:bg-zinc-300 hover:text-orange-500 hover:font-semibold"
          onClick={() => handlemenu(citem)}
        >
          Add
        </button>
      </div>
      
      </div>

        ))
}
</div>

      

    
  );
};
export default Itemcard;
