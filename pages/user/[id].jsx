import { Link } from "@material-ui/core";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";

export default function User() {
  return (
    <div className="m-5">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Edit User</h1>
        <Link href="/newUser">
          <button className="w-20 p-1 text-base text-white bg-green-700 rounded-md cursor-pointer">
            Create
          </button>
        </Link>
      </div>
      <div className="flex mt-5">
        <div className="flex-1 p-5 shadow-md rounded-xl">
          <div className="flex items-center">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src="https://awoiaf.westeros.org/images/thumb/a/a0/Cristi_Balanescu_Jon_SnowGhost.png/300px-Cristi_Balanescu_Jon_SnowGhost.png"
              alt=""
            />
            <div className="flex flex-col ml-5">
              <span className="text-xl font-semibold">Jon Snow</span>
              <span className="font-light">Knows Nothing</span>
            </div>
          </div>
          <div className="mt-5">
            <span className="text-sm font-semibold text-gray-500">
              Account Details
            </span>
            <div className="flex items-center my-5 text-[#444]">
              <PermIdentity className="scale-75" />
              <span className="ml-2">jonSnow123</span>
            </div>
            <div className="flex items-center my-5 text-[#444]">
              <CalendarToday className="scale-75" />
              <span className="ml-2">5-01-2001</span>
            </div>
            <span className="text-sm font-semibold text-gray-500">
              Contact Details
            </span>
            <div className="flex items-center my-5 text-[#444]">
              <PhoneAndroid className="scale-75" />
              <span className="ml-2">+17 234-567-890</span>
            </div>
            <div className="flex items-center my-5 text-[#444]">
              <MailOutline className="scale-75" />
              <span className="ml-2">jonSnow123@email.com</span>
            </div>
            <div className="flex items-center my-5 text-[#444]">
              <LocationSearching className="scale-75" />
              <span className="ml-2">4, Dragonstone</span>
            </div>
          </div>
        </div>
        <div className="p-5 ml-5 shadow-md flex-2 rounded-xl">
          <span className="text-2xl font-semibold">Edit</span>
          <form className="flex justify-between mt-5">
            <div>
              <div className="flex flex-col mt-3">
                <label className="mb-1 text-sm font-light">Username</label>
                <input
                  className="border-b-[1px] h-7 border-gray-700 focus:outline-none focus:border-b-2 w-60"
                  type="text"
                  placeholder="jonSnow123"
                />
              </div>
              <div className="flex flex-col mt-3">
                <label className="mb-1 text-sm font-light">Full Name</label>
                <input
                  className="border-b-[1px] h-7 border-gray-700 focus:outline-none focus:border-b-2 w-60"
                  type="text"
                  placeholder="Jon Snow"
                />
              </div>
              <div className="flex flex-col mt-3">
                <label className="mb-1 text-sm font-light">Email</label>
                <input
                  className="border-b-[1px] h-7 border-gray-700 focus:outline-none focus:border-b-2 w-60"
                  type="text"
                  placeholder="jonSnow123@email.com"
                />
              </div>
              <div className="flex flex-col mt-3">
                <label className="mb-1 text-sm font-light">Phone</label>
                <input
                  className="border-b-[1px] h-7 border-gray-700 focus:outline-none focus:border-b-2 w-60"
                  type="text"
                  placeholder="+17 234-567-890"
                />
              </div>
              <div className="flex flex-col mt-3">
                <label className="mb-1 text-sm font-light">Address</label>
                <input
                  className="border-b-[1px] h-7 border-gray-700 focus:outline-none focus:border-b-2 w-60"
                  type="text"
                  placeholder="4, Dragonstone"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex items-center">
                <img
                  className="object-cover w-24 h-24 mr-5 rounded-lg"
                  src="https://awoiaf.westeros.org/images/thumb/a/a0/Cristi_Balanescu_Jon_SnowGhost.png/300px-Cristi_Balanescu_Jon_SnowGhost.png"
                  alt=""
                />
                <label className="cursor-pointer" htmlFor="file">
                  <Publish />{" "}
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="p-1 font-semibold text-white bg-blue-800 rounded-md cursor-pointer">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
