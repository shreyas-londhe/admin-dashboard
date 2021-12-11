import Image from "next/image";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="w-full my-2 h-[50px] bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between h-full px-5 py-0">
        <div>
          <span className="text-3xl font-bold text-indigo-900 cursor-pointer">
            Admin Dashboard
          </span>
        </div>
        <div className="flex items-center text-gray-700 cursor-pointer">
          <div className="relative mr-2">
            <NotificationsNone />
            <span className="absolute top-[-5px] right-0 bg-red-500 text-white rounded-full w-[15px] flex items-center justify-center h-[15px] text-xs">
              2
            </span>
          </div>
          <div className="relative mr-2">
            <Language />
            <span className="absolute top-[-5px] right-0 bg-red-500 text-white rounded-full w-[15px] flex items-center justify-center h-[15px] text-xs">
              2
            </span>
          </div>
          <div className="relative mr-2">
            <Settings />
          </div>
          <Image
            src="/profile-pic.jpg"
            className="rounded-full cursor-pointer"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
}
