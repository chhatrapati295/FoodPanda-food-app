import { IMG_CDN } from "../Config";
import offerImg from "../../assets/offer2.png";
import { useContext } from "react";
import UserContext from "../Utils/UserContext";
const RestaurentCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  slaString,
  costForTwoString,
  aggregatedDiscountInfo,
  // user
}) => {
  const myInfo= useContext(UserContext)
  return (
    <div className="md:w-64 md:h-80 shadow-md md:shadow-none py-4 px-4 md:py-2  hover:shadow-lg rounded flex flex-col gap-1 text-[0.7rem] text-[#535665] ">
      <img
        src={
          IMG_CDN +
          (cloudinaryImageId === ""
            ? "s6fhwzl0tss0vgrqvcid"
            : cloudinaryImageId)
        }
        alt=""
        className=" rounded object-cover"
      />
      <span className="font-medium text-base text-black">{name}</span>
      <span className="">{cuisines.join(", ")}</span>
      <div className="flex justify-between items-center my-2 font-medium">
        <div className="flex items-center gap-1 px-1 text-white bg-green-500  font-semibold">
          <i className="fa-solid fa-star text-[0.6rem]"></i>
          <span className="text-[0.6rem]">
            {avgRating === "--" ? "4.2" : avgRating}
          </span>
        </div>
        <div className="w-[3px] h-[3px] rounded-full bg-black"></div>
        <span className="">{slaString}</span>
        <div className="w-[3px] h-[3px] rounded-full bg-black"></div>
        <span className="">{costForTwoString}</span>
      </div>
      <div className="flex border-t pt-4 gap-2 font-semibold">
        <img src={offerImg} alt="" className="h-4" />
        <span className="text-[#a0522d]">
          {!aggregatedDiscountInfo?.shortDescriptionList[0]?.meta
            ? "40% off | Use TRYNEW"
            : aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}
        </span>
      </div>
      {/* <span>{myInfo.name}</span> */}
    </div>
  );
};
export default RestaurentCard;
