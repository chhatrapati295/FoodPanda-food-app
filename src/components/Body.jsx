import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurentCard";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/Helper";
import Shimmer from "./Shimmer"
import useOnline from "../Utils/useOnline";
import NotFound from "../components/NotFound"

const Body = ({user}) => {
  const [allRestaurents, setAllRestaurents] = useState([]);
  const [filteredRestaurents, setFilteredRestaurents] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const url = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await url.json();
    console.log(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurents(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurents(json?.data?.cards[2]?.data?.data?.cards);
  }
  // function filterData (searchText,allRestaurents){
  //   return (allRestaurents.filter((restaurent)=>{
  //       return restaurent?.data?.name.toLowerCase()?.includes(searchText.toLowerCase())
  //   }))
  // }
  // const onlineStatus = ()
  const onlineStatus = useOnline()
  console.log(onlineStatus)
  if(!onlineStatus){
    return <NotFound/>
  }
  return (
    <div className="mx-8 ">
        <div className="flex flex-col justify-between items-center md:flex md:flex-row">
      <div className="text-sm flex gap-2 my-4">
        <input
          type="text"
          placeholder="Search for a restaurants"
          autoFocus
          className="w-64 text-xs border border-gray-300 focus:border-gray-500 transition-all duration-300 px-2 py-2 outline-none  rounded"
          value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value)
            const fData = filterData(searchText,allRestaurents)
           setFilteredRestaurents(fData)
        }}
        />
        <button className="text-xs font-medium shadow-md px-2 py-2 outline-none  rounded bg-orange-500 hover:bg-orange-600 transition-all duration-200 ease-in-out text-white"
        onClick={()=>{
           const fData = filterData(searchText,allRestaurents)
           console.log(fData)
           setFilteredRestaurents(fData)
        }}
        >
          Search
        </button>
      </div>
        <div className="flex gap-12 cursor-pointer text-xs">
            <div className="flex gap-4 items-center">
            <img className="h-6" alt="illustration" src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp" loading="lazy" />
                <span className="">Delivery</span>
            </div>
            <div className="flex gap-4 items-center">
            <img className="h-6" alt="illustration" src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp" loading="lazy" />
                <span className="whitespace-nowrap">Dining Out</span>
            </div>
            <div className="flex gap-4 items-center">
            <img className="h-6" alt="illustration" src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp" loading="lazy" />
                <span className="">Nightlife</span>
            </div>
        </div>
        </div>
      <div className="flex flex-col md:flex-row items-center md:flex-wrap gap-2 my-2 md:my-0   ">
        {
            filteredRestaurents?.length == 0 ? <Shimmer/> :
            filteredRestaurents?.map((item) => {
                return <Link to={'/restaurant/' + item.data.id} key={item?.data?.id} >
                <RestaurentCard {...item?.data} user={user} />
                </Link>
              })
        }
      </div>
    </div>
  );
};
export default Body;
