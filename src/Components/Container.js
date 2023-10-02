import Rescard from "./Rescard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Container = () => {
  const [menu, setmenu] = useState([]);
  const [filtermenu, setfiltermenu] = useState([]);
  const [searchtext, setsearchtext] = useState("");
  console.log(menu);

 

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const json = await data.json();
    console.log(json);
    setmenu(json.categories);
    setfiltermenu(json.categories);
  };

  if (menu.length === 0) {
    return <Shimmer />;
  }
 

  return (
    <div className="z-0">

      <div className=" m-10 flex justify-center gap-4 ">
        <input
          className=" border-2 border-orange-400"
          type="text"
          value={searchtext}
          onChange={(e) => {
            setsearchtext(e.target.value);
          }}
        />
        <button
          className="border border-black px-4 py-1 hover hover:translate-y-2 shadow-xl"
          onClick={() => {
            const filtermenu = menu.filter((res) =>
              res.strCategory.toLowerCase().includes(searchtext.toLowerCase())
            );
            setfiltermenu(filtermenu);
          }}
        >
          search
        </button>
      </div>

      <div className="flex flex-wrap">
        {filtermenu.map((info) => (
          <Link key={info.idCategory} to={"/menuitem/" + info.strCategory}>
            <Rescard item={info} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Container;
