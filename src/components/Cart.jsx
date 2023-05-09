import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN } from "../Config";
import { clearItem } from "../Utils/CartSlice";

const Cart = ()=>{
    const cartItems = useSelector((store)=> store.cart.items)
    console.log(cartItems)
    const dispatch = useDispatch()
    function clearItemFunc (){
        dispatch(clearItem())
    }
    return(
        <div className="w-3/5  m-auto py-4 min-h-screen ">
            <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">Cart ({cartItems.length})</h1>
            <button className="text-xs font-medium bg-red-300 py-1 px-2 hover:bg-red-400 transition-all duration-300 ease-in-out rounded" onClick={()=>clearItemFunc()}>Clear Cart</button>
            </div>
            <div className="flex flex-col ">
            {cartItems.map(item=>{
                return <CartItem key={item?.card?.info?.id} {...item?.card?.info}/>
            })}
            </div>
        </div>
    )
}
const CartItem = ({name,imageId,price,description})=>{
    return(
        <div className="my-2 border-b py-2 flex text-sm  gap-8">
            <img
                  src={
                   imageId ? (IMG_CDN + imageId) : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/39cd5e4824e5c011ffaf56ddc39891e8"
                  }
                  alt=""
                  className="w-32 h-20 rounded object-cover"
                />
            <div className="flex flex-col">
            <span className="font-semibold">{name}</span>
            <span className="font-semibold">&#8377;{!price ? '250' : price/100}</span>
            <span className="text-sm text-gray-500">{description}</span>
            </div>
        </div>
    )
}
export default Cart;