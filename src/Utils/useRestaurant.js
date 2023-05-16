import { useState , useEffect } from "react"

const useRestaurant = (resId)=>{
    const[resMenu , setResMenu] = useState(null)
    useEffect(()=>{
        getMenu()
    },[])
    async function getMenu(){
        const URL = await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${resId}&submitAction=ENTER`)
        const json = await URL.json()
        console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2])
        setResMenu(json?.data)
    }
    return resMenu;
}
export default useRestaurant;