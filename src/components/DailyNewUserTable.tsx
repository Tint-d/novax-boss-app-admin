/* eslint-disable @typescript-eslint/no-explicit-any */

import DailyTable from "./DailyTable";
import { IoPersonCircleOutline } from "react-icons/io5";
import useTable from "../hooks/useTable";

const DailyNewUserTable = () => {
  const theads = ["No", "Name"];

  const { page, data, isLoading } = useTable(
    "admin/stats/recent-registered-users",
    "users"
  );
  const rows = data?.map((element: any, index: number) => (
    <tr
      key={element.id}
      className={`${
        index % 2 === 1 ? "bg-hightlightColor" : "bg-rowColor"
      } h-14`}
    >
      <td className="text-[20px] font-[400] px-[20px]">
        <p className="text-textColor text-[20px]">
          {(page - 1) * 20 + index + 1}
        </p>
      </td>
      <td className="text-white text-[18px] font-[400] px-[20px]">
        <div className="flex items-center gap-3">
          <IoPersonCircleOutline size={40} />
          <p>{element.name}</p>
        </div>
      </td>
    </tr>
  ));
  return (
    <div className="w-[45%] ">
      <DailyTable
        isLoading={isLoading}
        rows={rows}
        theads={theads}
        tableTitle={"Recent new User"}
        btnName={"Review"}
        route={"/user"}
      />
    </div>
  );
};

export default DailyNewUserTable;
