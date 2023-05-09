import { Link } from "react-router-dom";
import UseOnline from "../Utils/useOnline";
import { useContext } from "react";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";
import store from "../Utils/store";

const Header = ()=>{
    // const isOnline = UseOnline()
    const myInfo = useContext(UserContext)
    const cartItems = useSelector(store => store.cart.items)
    return(
        <div className="flex justify-between items-center px-6 md:px-8 py-2 shadow bg-black text-white ">
            <Link to="/">
                <img className="h-12" src="https://th.bing.com/th/id/R.f6bc2b2712b5a390fee444e60d312b69?rik=qTqjtW7Nn4UiJw&riu=http%3a%2f%2fwww.gadgetsmagazine.com.ph%2fwp-content%2fuploads%2f2017%2f09%2ffoodpanda-logo.png&ehk=Jy3z435XdWQADxTy4KoiuJvyN6HyGj9DOZIzHuitbEI%3d&risl=&pid=ImgRaw&r=0" alt="" />
            </Link>
            <ul className="flex gap-6 md:gap-12 text-sm font-medium">
                <li><Link to="/" className=" hover:text-orange-400 transition-all duration-300 ease-in-out">Home</Link></li>
                <li><Link to="/about" className=" hover:text-orange-400 transition-all duration-300 ease-in-out">About</Link></li>
                <li><Link to="/contact" className=" hover:text-orange-400 transition-all duration-300 ease-in-out">Contact</Link></li>
                <li><Link to="/cart" className="relative "><i className="fa-solid fa-cart-shopping"><span className="absolute top-[-8px] right-[-12px] bg-orange-500 w-4 p-1  h-4 rounded-full text-[10px] flex justify-center items-center">{cartItems.length}</span></i></Link></li>
                {/* <li><Link to="/instamart" className=" hover:text-orange-400 transition-all duration-300 ease-in-out">Instamart</Link></li> */}
            </ul>
            {/* <div className="">{isOnline ? '🟢' : '🔴'}</div> */}
            {/* <span>{myInfo.name}</span> */}
        </div>
    )
}
export default Header;