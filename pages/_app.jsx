import "tailwindcss/tailwind.css";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Topbar />
      <div className="flex mt-2">
        <Sidebar />
        <div className="flex-4">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
