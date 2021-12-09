import { Visibility } from "@material-ui/icons";

export default function WidgetSmall() {
  return (
    <div className="flex-1 p-5 shadow-md rounded-xl">
      <span className="text-3xl font-semibold">New Joined Members</span>
      <ul className="p-0 m-0">
        <li className="flex items-center justify-between my-5 border-4 border-white">
          <img
            className="w-10 h-10 rounded-full "
            src="/profile-pic.jpg"
            alt=""
          />
          <div className="flex flex-col">
            <span className="font-semibold">John Doe</span>
            <span className="font-light">Software Engineer</span>
          </div>
          <button className="flex items-center p-2 text-gray-600 rounded-lg bg-indigo-50">
            <Visibility className="mr-1 scale-75" />
            Display
          </button>
        </li>

        <li className="flex items-center justify-between my-5 border-4 border-white">
          <img
            className="w-10 h-10 rounded-full "
            src="/profile-pic.jpg"
            alt=""
          />
          <div className="flex flex-col">
            <span className="font-semibold">John Doe</span>
            <span className="font-light">Software Engineer</span>
          </div>
          <button className="flex items-center p-2 text-gray-600 rounded-lg bg-indigo-50">
            <Visibility className="mr-1 scale-75" />
            Display
          </button>
        </li>

        <li className="flex items-center justify-between my-5 border-4 border-white">
          <img
            className="w-10 h-10 rounded-full "
            src="/profile-pic.jpg"
            alt=""
          />
          <div className="flex flex-col">
            <span className="font-semibold">John Doe</span>
            <span className="font-light">Software Engineer</span>
          </div>
          <button className="flex items-center p-2 text-gray-600 rounded-lg bg-indigo-50">
            <Visibility className="mr-1 scale-75" />
            Display
          </button>
        </li>

        <li className="flex items-center justify-between my-5 border-4 border-white">
          <img
            className="w-10 h-10 rounded-full "
            src="/profile-pic.jpg"
            alt=""
          />
          <div className="flex flex-col">
            <span className="font-semibold">John Doe</span>
            <span className="font-light">Software Engineer</span>
          </div>
          <button className="flex items-center p-2 text-gray-600 rounded-lg bg-indigo-50">
            <Visibility className="mr-1 scale-75" />
            Display
          </button>
        </li>

        <li className="flex items-center justify-between my-5 border-4 border-white">
          <img
            className="w-10 h-10 rounded-full "
            src="/profile-pic.jpg"
            alt=""
          />
          <div className="flex flex-col">
            <span className="font-semibold">John Doe</span>
            <span className="font-light">Software Engineer</span>
          </div>
          <button className="flex items-center p-2 text-gray-600 rounded-lg bg-indigo-50">
            <Visibility className="mr-1 scale-75" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
