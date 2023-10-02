import Ingredientitems from "./Ingredientitems";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Ingredients = () => {
  const [data, setdata] = useState([]);
  const mindata = data.slice(0, 15);
  console.log(mindata);

  useEffect(() => {
    fetchsdata();
  }, []);

  const fetchsdata = async () => {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
    );
    const json = await data.json();
    console.log(json);
    setdata(json.meals);
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="px-32 mt-16 font-bold text-2xl">List of Ingredients</h1>
      <h1 className="flex flex-col gap-5 px-20">
        {mindata.map((infos) => (
       
          <Link to={"/ingredient/"+infos.strIngredient}> <Ingredientitems  key={infos.idIngredient} items={infos} /></Link>
        
        ))}
      </h1>
    </div>
  );
};

export default Ingredients;
