
import { useSelector } from "react-redux";
import Itemcard from "./Itemcard";


const Cart = () => {
const cartitems = useSelector((store) => store.cart.items);
console.log(cartitems);

return (
<div>
<div className="text-center m-4 p-4">

<h1 className="font-bold text-2xl">Cart</h1>

{
cartitems.length === 0 && (
<h1 className="font-style: italic">
"Cart is empty. Add your delicious meal here!"
</h1>
)
}
<div>
<Itemcard items={cartitems} />
</div>
</div>
</div>
);
};
export default Cart;
