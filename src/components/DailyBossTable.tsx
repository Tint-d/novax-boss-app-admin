/* eslint-disable @typescript-eslint/no-explicit-any */
import useTable from "../hooks/useTable";
import DailyTable from "./DailyTable";
// import SearchTable from "./SearchTable";
// import "./dailyTable.css";

const DailyBossTable = () => {
  // const elements = [
  //   { id: "#1", name: "Ei Thwe", code: 2345 },
  //   { id: "#2", name: "Ei Thwe", code: 2345 },
  //   { id: "#3", name: "Ei Thwe", code: 2345 },
  // ];
  const theads = ["No", "Name", "Boss Number"];

  const { page, setPage, data, total, totalPage } = useTable(
    "admin/stats/recent-registered-boss-address",
    "bossAddress"
  );
  const rows = data.map((element: any, index: number) => (
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
      {/* <SearchTable
        isLoading={isLoading}
        rows={rows}
        theads={theads}
        tableTitle={"Business Type"}
        setPage={setPage}
        value={value}
        setValue={setValue}
        total={total}
        totalPages={totalPage}
      /> */}
      <DailyTable
        rows={rows}
        theads={theads}
        tableTitle={"Recent new Boss"}
        btnName={"Review"}
        route={""}
        total={total}
        totalPages={totalPage}
        setPage={setPage}
      />
    </div>
  );
};

export default DailyBossTable;
