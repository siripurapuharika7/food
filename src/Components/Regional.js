import { useState, useEffect } from "react";
import Regionalcard from "./Regionalcard.js";
import { Link } from "react-router-dom";

const Regional = () => {
  const [data, setdata] = useState([]);
  const filterdata = data.slice(0, 12);
  console.log(data);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
    );
    const json = await data.json();
    console.log(json);
    setdata(json.meals);
  };

  return (
    <div className="flex flex-col gap-5 px-20 mt-20">
      {filterdata.map((resitems) => (
        <Link key={resitems.strArea} to={"/regionalitems/" + resitems.strArea}>
          <Regionalcard items={resitems} />
        </Link>
      ))}
    </div>
  );
};

export default Regional;
