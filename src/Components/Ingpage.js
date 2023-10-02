import { useState, useEffect } from "react";
import List from "./List";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const Ingpage = () => {
  const [data, setdata] = useState(null);
  const { strIngredient } = useParams();
  console.log(strIngredient);
  console.log(data);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + strIngredient
    );
    const json = await data.json();
    console.log(json);
    setdata(json.meals);
  };
  if (data === null) {
    return <Shimmer />;
  }
  return (
    <div className="flex flex-wrap ">
      {data.map((info) => (
        <List key={info.idMeal} items={info} />
      ))}
    </div>
  );
};

export default Ingpage;
