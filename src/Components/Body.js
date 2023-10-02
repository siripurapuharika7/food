
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
// import Container from "./Container";

const Body = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  );
};
export default Body;
