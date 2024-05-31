import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getSCartItems } from "../../redux/cartSlice";

const Cart =()=> {
    const cartItems = useSelector (getSCartItems);
    return (
        <div><img className="cartIcon" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png" alt="icon"/>
             {cartItems.map (cartItem => <CartItem cartItem={cartItem}/>)}
        </div>
    )
}
export default Cart;