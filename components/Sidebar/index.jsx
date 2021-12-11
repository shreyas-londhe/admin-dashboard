import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@material-ui/icons";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex-1 h-[calc(100vh-50px)] rounded-2xl bg-indigo-100 m-5 sticky top-[50px] shadow-lg">
      <div className="p-5 text-gray-700">
        <div className="mb-3">
          <h3 className="text-sm font-bold text-gray-400">Dashboard</h3>
          <ul className="p-2">
            <Link href="/">
              <li className="flex items-center p-1 rounded-lg cursor-pointer active:bg-indigo-50 hover:bg-indigo-50">
                <LineStyle className="mr-1 scale-75" />
                Home
              </li>
            </Link>
            <li className="flex items-center p-1 rounded-lg cursor-pointer hover:bg-indigo-50">
              <Timeline className="mr-1 scale-75" />
              Analytics
            </li>
            <li className="flex items-center p-1 rounded-lg cursor-pointer hover:bg-indigo-50">
              <TrendingUp className="mr-1 scale-75" />
              Sales
            </li>
          </ul>
        </div>

        <div className="mb-3">
          <h3 className="text-sm font-bold text-gray-400">Quick Menu</h3>
          <ul className="p-2">
            <Link href="/userList">
              <li className="flex items-center p-1 rounded-lg cursor-pointer active:bg-indigo-50 hover:bg-indigo-50">
                <PermIdentity className="mr-1 scale-75" />
                Users
              </li>
            </Link>
            <li className="flex items-center p-1 rounded-lg cursor-pointer hover:bg-indigo-50">
              <Storefront className="mr-1 scale-75" />
              Products
            </li>
            <li className="flex items-center p-1 rounded-lg cursor-pointer hover:bg-indigo-50">
              <AttachMoney className="mr-1 scale-75" />
              Transactions
            </li>
            <li className="flex items-center p-1 rounded-lg cursor-pointer hover:bg-indigo-50">
              <BarChart className="mr-1 scale-75" />
              Reports
            </li>
          </ul>
        </div>

        <div className="mb-3">
          <h3 className="text-sm font-bold text-gray-400">Notifications</h3>
          <ul className="p-2">
            <li className="flex items-center p-1 rounded-lg cursor-pointer active:bg-indigo-50 hover:bg-indigo-50">
              <MailOutline className="mr-1 scale-75" />
              Mail
            </li>
            <li className="flex items-center p-1 rounded-lg cursor-pointer hover:bg-indigo-50">
              <DynamicFeed className="mr-1 scale-75" />
              Feedback
            </li>
            <li className="flex items-center p-1 rounded-lg cursor-pointer hover:bg-indigo-50">
              <ChatBubbleOutline className="mr-1 scale-75" />
              Messages
            </li>
          </ul>
        </div>

        <div className="mb-3">
          <h3 className="text-sm font-bold text-gray-400">Staff</h3>
          <ul className="p-2">
            <li className="flex items-center p-1 rounded-lg cursor-pointer active:bg-indigo-50 hover:bg-indigo-50">
              <WorkOutline className="mr-1 scale-75" />
              Manage
            </li>
            <li className="flex items-center p-1 rounded-lg cursor-pointer hover:bg-indigo-50">
              <Timeline className="mr-1 scale-75" />
              Analytics
            </li>
            <li className="flex items-center p-1 rounded-lg cursor-pointer hover:bg-indigo-50">
              <Report className="mr-1 scale-75" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
