import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import Itemcard from "./Itemcard";

const Watchpage = () => {
  const [resmenu, setresmenu] = useState([]);
  const minresmenu=resmenu.slice(0,12);
  // console.log("h1",minresmenu);
  const [filterresmenu, setfilterresmenu] = useState([]);
  const minfilterresmenu=filterresmenu.slice(0,12);
  // console.log("hello",minfilterresmenu);
  const [searchquery, setsearchquery] = useState("");

  const { strCategory } = useParams();

  useEffect(() => {
    fetchdata();
  }, []);
  
  const fetchdata = async () => {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + strCategory
    );
    const json = await data.json();
    console.log(json);
    setresmenu(json.meals);
    setfilterresmenu(json.meals);
  };
  if (minresmenu === null) {
    return <Shimmer />;
  }

  return (
    <div>
      <div className="mt-10 flex justify-center gap-5">
        <input
          className="border-2 border-orange-400"
          type="text"
          value={searchquery} onChange={(e)=>{
                setsearchquery(e.target.value);
          }}
        />
        <button className="border border-black px-2" onClick={() => {
          const minfilterresmenu=minresmenu.filter((res)=>(
             res.strMeal.toLowerCase().includes(searchquery.toLowerCase())
          ))
          setfilterresmenu(minfilterresmenu);
          
        }}>
          search
        </button>
      </div>
      <div className="flex flex-wrap">
        {
          <Itemcard  items={minfilterresmenu} />
        }
      </div>
    </div>
  );
};
export default Watchpage;
