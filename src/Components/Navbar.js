import { useSelector } from "react-redux";


const Navbar=()=>{
    const Cartitems = useSelector((store) => store.cart.items);
    const ismenuopen=useSelector((store)=>store.app.ismenuopen);

   if (!ismenuopen) return null;

    return(
        <div className="flex  lg:hidden md:hidden transition ease-in-out absolute  w-full rounded-md z-10 text-center justify-center bg-zinc-800 text-orange-400">
       <ul className="flex flex-col gap-4">
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
    )
}
export default Navbar;