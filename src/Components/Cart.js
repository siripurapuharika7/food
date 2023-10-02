import { useSelector } from "react-redux";
import Itemcard from "./Itemcard";
const Cart=({items})=>{
    console.log("helllo",items);
    const Cartitems = useSelector((store) => store.cart.itemlist);
    return(
        <div>
            <Itemcard items={Cartitems}/>
        </div>
    )
}
export default Cart;