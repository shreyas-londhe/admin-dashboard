import Chart from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfo";
import WidgetLarge from "../components/WidgetLarge";
import WidgetSmall from "../components/WidgetSmall";
import { userData } from "../dummyData";

export default function Home() {
  return (
    <div>
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        dataKey="Active User"
        grid={true}
      />
      <div className="flex m-5">
        <WidgetLarge />
        <WidgetSmall />
      </div>
    </div>
  );
}
