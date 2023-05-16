import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-4 py-2 m-auto ">
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
    </div>
  );
};
const ShimmerCard = () => {
  return (
    <div className="flex flex-col gap-1 m-auto md:m-0">
      <Skeleton width={"250px"} height={"155px"} />
      <Skeleton width={"250px"} height={"25px"} />
      <Skeleton width={"250px"} height={"25px"} />
      <Skeleton width={"250px"} height={"25px"} />
    </div>
  );
};
export const ShimmerMenu = () => {
  return (
    <div className="w-2/3 my-2 m-auto">
      <div className="flex justify-between flex-col md:flex-row">
        <div className="">
          <Skeleton width={"250px"} height={"25px"} />
          <Skeleton width={"250px"} height={"25px"} />
          <Skeleton width={"250px"} height={"25px"} />
          <Skeleton width={"250px"} height={"25px"} />
        </div>
        <Skeleton width={"250px"} height={"125px"} />
      </div>
      <div className="my-4">
        <Skeleton width={"300px"} height={"35px"} />
      </div>
      <div className="flex justify-between mb-4 flex-col md:flex-row ">
        <div className="">
          <Skeleton width={"300px"} height={"25px"} />
          <Skeleton width={"150px"} height={"25px"} />
        </div>
        <Skeleton width={"120px"} height={"70px"} />
      </div>
      <div className="flex justify-between mb-4 flex-col md:flex-row">
        <div className="">
          <Skeleton width={"300px"} height={"25px"} />
          <Skeleton width={"150px"} height={"25px"} />
        </div>
        <Skeleton width={"120px"} height={"70px"} />
      </div>
    </div>
  );
};
export default Shimmer;
