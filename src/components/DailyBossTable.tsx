/* eslint-disable @typescript-eslint/no-explicit-any */
import useTable from "../hooks/useTable";
import DailyTable from "./DailyTable";

const DailyBossTable = () => {
  const theads = ["No", "Name", "Boss Number"];

  const { page, data, isLoading } = useTable(
    "admin/stats/recent-registered-boss-address",
    "bossAddress"
  );

  const rows = data?.map((element: any, index: number) => (
    <tr
      key={index}
      className={` ${index % 2 === 1 ? "bg-hightlightColor" : "bg-rowColor"}`}
    >
      <td className=" px-[20px]">
        <p className="text-textColor text-[20px] font-[400]">
          {(page - 1) * 20 + index + 1}
        </p>
      </td>
      <td className="text-white text-[18px] font-[400] px-[20px]">
        <div className="flex flex-col">
          <p className="text-[10px] text-textColor">Boss</p>
          <p className="whitespace-nowrap"> {element.boss_name}</p>
        </div>
      </td>
      <td className="text-white text-[18px] font-[400] px-[20px]">
        {element.boss_number}
      </td>
    </tr>
  ));

  return (
    <div className="w-[55%]">
      <DailyTable
        isLoading={isLoading}
        rows={rows}
        theads={theads}
        tableTitle={"Recent new Boss"}
        btnName={"Review"}
        route={"/boss"}
      />
    </div>
  );
};

export default DailyBossTable;
