
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";

const Body = () => {

  return (
    <div>
      <Header/>
      <Navbar/>
      <Outlet/>
     
    </div>
  );
};
export default Body;
