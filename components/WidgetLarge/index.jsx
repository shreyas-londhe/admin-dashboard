export default function WidgetLarge() {
  const Button = ({ type }) => {
    return <button className="p-2 bg-green-200 rounded-lg">{type}</button>;
  };

  return (
    <div className="p-5 mr-5 shadow-md flex-2 rounded-xl">
      <h3 className="mb-5 text-3xl font-semibold">Latest Transactions</h3>
      <table className="w-full">
        <tr className="border-[20px] border-white">
          <th className="text-left">Customer</th>
          <th className="text-left">Date</th>
          <th className="text-left">Amount</th>
          <th className="text-left">Status</th>
        </tr>
        <tr className="border-[20px] border-white">
          <td className="flex items-center font-semibold">
            <img
              className="object-cover w-10 h-10 mr-2 rounded-full"
              src="/profile-pic.jpg"
              alt=""
            />
            <span>John Doe</span>
          </td>
          <td className="font-light">5 Jan 2022</td>
          <td className="font-light">$1234</td>
          <td>
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="border-[20px] border-white">
          <td className="flex items-center font-semibold">
            <img
              className="object-cover w-10 h-10 mr-2 rounded-full"
              src="/profile-pic.jpg"
              alt=""
            />
            <span>John Doe</span>
          </td>
          <td className="font-light">5 Jan 2022</td>
          <td className="font-light">$1234</td>
          <td>
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="border-[20px] border-white">
          <td className="flex items-center font-semibold">
            <img
              className="object-cover w-10 h-10 mr-2 rounded-full"
              src="/profile-pic.jpg"
              alt=""
            />
            <span>John Doe</span>
          </td>
          <td className="font-light">5 Jan 2022</td>
          <td className="font-light">$1234</td>
          <td>
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="border-[20px] border-white">
          <td className="flex items-center font-semibold">
            <img
              className="object-cover w-10 h-10 mr-2 rounded-full"
              src="/profile-pic.jpg"
              alt=""
            />
            <span>John Doe</span>
          </td>
          <td className="font-light">5 Jan 2022</td>
          <td className="font-light">$1234</td>
          <td>
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="border-[20px] border-white">
          <td className="flex items-center font-semibold">
            <img
              className="object-cover w-10 h-10 mr-2 rounded-full"
              src="/profile-pic.jpg"
              alt=""
            />
            <span>John Doe</span>
          </td>
          <td className="font-light">5 Jan 2022</td>
          <td className="font-light">$1234</td>
          <td>
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
