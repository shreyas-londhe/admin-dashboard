import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="flex justify-between w-full">
      <div className="flex-1 p-8 mx-5 my-0 bg-green-100 shadow-md cursor-pointer rounded-xl">
        <span className="text-xl">Revenue</span>
        <div className="flex items-center mx-0 my-3">
          <span className="text-3xl font-semibold">$2,451</span>
          <span className="flex items-center ml-5">
            -11.4 <ArrowDownward className="ml-1 text-red-700 scale-75" />{" "}
          </span>
        </div>
        <span className="text-sm text-gray-500">Compared to last month</span>
      </div>

      <div className="flex-1 p-8 mx-5 my-0 bg-yellow-100 shadow-md cursor-pointer rounded-xl">
        <span className="text-xl">Sales</span>
        <div className="flex items-center mx-0 my-3">
          <span className="text-3xl font-semibold">$4,451</span>
          <span className="flex items-center ml-5">
            -1.9 <ArrowDownward className="ml-1 text-red-700 scale-75" />{" "}
          </span>
        </div>
        <span className="text-sm text-gray-500">Compared to last month</span>
      </div>

      <div className="flex-1 p-8 mx-5 my-0 bg-purple-100 shadow-md cursor-pointer rounded-xl">
        <span className="text-xl">Cost</span>
        <div className="flex items-center mx-0 my-3">
          <span className="text-3xl font-semibold">$5,451</span>
          <span className="flex items-center ml-5">
            +21.4 <ArrowUpward className="ml-1 text-green-700 scale-75" />{" "}
          </span>
        </div>
        <span className="text-sm text-gray-500">Compared to last month</span>
      </div>
    </div>
  );
}
