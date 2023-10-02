import { useDispatch } from "react-redux";
import { togglemenu } from "./utils.js/appslice";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const togglemenuhandler = () => {
    dispatch(togglemenu());
  };

  const Cartitems = useSelector((store) => store.cart.itemlist);

  return (
    <div className="flex justify-between  w-full  bg-zinc-800 h-20 items-center text-orange-400 shadow-lg">
      <h1 className="font-bold text-3xl mx-10 ">The MealDB</h1>
      <div className="flex hidden lg:flex md:flex">
        <ul className="flex mx-10 text-xl px-10 gap-16 hidden md:flex lg:flex">
          <li>
            <a href="/">Home</a>
            </li>

          <li>
          <a href="/ingredients">Ingredients</a>
            </li>
            <li>
          <a href="/area">Regional</a>
            </li>
            <li>
          <a href="/cart">Cart({Cartitems.length})</a>
            </li>
         
        </ul>
      </div>
      <img
        onClick={() => togglemenuhandler()}
        alt="img2"
        className="w-10 h-10 mr-5 lg:hidden md:hidden"
        src="https://s3.amazonaws.com/www-inside-design/uploads/2019/03/hamburgerheader-810x810.jpg"
      />
    </div>
  );
};
export default Header;
