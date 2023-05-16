import { useParams } from "react-router-dom";
import { ShimmerMenu } from "./Shimmer";
import { IMG_CDN } from "../Config";
import useRestaurant from "../Utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/CartSlice";

const RestaurentMenu = () => {
  const resId = useParams();
  const { id } = resId;
  const resMenu = useRestaurant(id);
  const dispatch = useDispatch();
  function addItemFunc(item) {
    dispatch(addItem(item));
  }
  return !resMenu ? (
    <ShimmerMenu />
  ) : (
    <div className="flex flex-col w-[80%] md:w-2/3 p-4 border m-auto">
      <div className="flex flex-col justify-between pb-4 border-b md:flex-row gap-3">
        <div className="flex flex-col text-xs text-[#535665] font-medium gap-1">
          <span className="text-xl font-bold text-black">
            {resMenu?.cards[0]?.card?.card?.info?.name}
          </span>
          <span className="">
            {resMenu?.cards[0]?.card?.card?.info?.cuisines.join(", ")}
          </span>
          <span className="">
            {resMenu?.cards[0]?.card?.card?.info?.areaName},{" "}
            {resMenu?.cards[0]?.card?.card?.info?.city}{" "}
            <i className="text-blue-600 fa-solid fa-location-dot"></i>
          </span>
          <span className="">
            {resMenu?.cards[0]?.card?.card?.info?.avgRating}{" "}
            <i className="text-green-600 fa-solid fa-star"></i> |{" "}
            {resMenu?.cards[0]?.card?.card?.info?.totalRatingsString}
          </span>
          <span className="">
            {resMenu?.cards[0]?.card?.card?.info?.feeDetails?.message}
          </span>
        </div>
        <img
          className="w-56 h-36 rounded"
          src={IMG_CDN + resMenu?.cards[0]?.card?.card?.info?.cloudinaryImageId}
          alt=""
        />
      </div>
      <div className="flex gap-8 items-center border-b py-3 text-sm md:text-base">
        <div className="flex items-center gap-2 font-semibold">
          <svg
            className="RestaurantTimeCost_icon__8UdT4"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <circle
              r="8.35"
              transform="matrix(-1 0 0 1 9 9)"
              stroke="#3E4152"
              strokeWidth="1.3"
            ></circle>
            <path
              d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
              fill="#3E4152"
            ></path>
          </svg>
          <span className="">
            {resMenu?.cards[0]?.card?.card?.info?.sla?.slaString}
          </span>
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <svg
            className="RestaurantTimeCost_icon__8UdT4"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <circle
              cx="9"
              cy="9"
              r="8.25"
              stroke="#3E4152"
              strokeWidth="1.5"
            ></circle>
            <path
              d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
              fill="#3E4152"
            ></path>
          </svg>
          <span className="">
            {resMenu?.cards[0]?.card?.card?.info?.costForTwoMessage}
          </span>
        </div>
      </div>
      <h1 className="font-bold mt-4 mb-10">
        Recommended (
        {
          resMenu?.cards[resMenu?.cards.length -1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
            ?.card?.itemCards?.length
        }
        )
      </h1>
      <div className="">
        {(resMenu?.cards[resMenu?.cards.length -1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards).map(
          (item) => {
            return (
              <div
                className="flex flex-col justify-between border-b pb-6 mb-4 gap-6 md:flex-row"
                key={item?.card?.info?.id}
              >
                <div className="flex flex-col gap-2 w-full md:w-3/4">
                  <span className="font-semibold">
                    {item?.card?.info?.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">
                      &#8377;
                      {item?.card?.info?.price
                        ? item?.card?.info?.price / 100
                        : 150}
                    </span>
                    {item?.card?.info?.offerTags && (
                      <span className="text-[10px] font-medium px-[6px] bg-red-100 text-orange-500">
                        {item?.card?.info?.offerTags[0]?.title} |{" "}
                        {item?.card?.info?.offerTags[0]?.subTitle}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#535665] ">
                    {item?.card?.info?.description}
                  </p>
                </div>
                <div className=" flex flex-col gap-1 relative md:w-1/4 w-auto">
                  <img
                    src={
                      item?.card?.info?.imageId
                        ? IMG_CDN + item?.card?.info?.imageId
                        : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/39cd5e4824e5c011ffaf56ddc39891e8"
                    }
                    alt=""
                    className="w-32 h-20 rounded self-center object-cover"
                  />
                  <button
                    className="absolute bottom-[-8px] bg-white shadow-md border self-center text-[10px] py-1 px-4 font-medium rounded  active:scale-90 hover:bg-green-300 transition-all duration-300 ease-in-out"
                    onClick={() => addItemFunc(item)}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
export default RestaurentMenu;
