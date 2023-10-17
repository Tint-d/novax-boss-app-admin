import DailyTable from "./DailyTable";
// import "./dailyTable.css";

const DailyBossTable = () => {
  const elements = [
    { id: "#1", name: "Ei Thwe", code: 2345 },
    { id: "#2", name: "Ei Thwe", code: 2345 },
    { id: "#3", name: "Ei Thwe", code: 2345 },
  ];
  const theads = ["No", "Name", "Code"];

  const rows = elements.map((element, index) => (
    <tr
      key={index}
      className={` ${
        index % 2 === 1 ? "bg-hightlightColor" : "bg-rowColor"
      }`}
    >
      <td className=" px-[20px]">
        <p className="text-textColor text-[20px] font-[400]">{element.id}</p>
      </td>
      <td className="text-white text-[18px] font-[400] px-[20px]">
        <div className="flex flex-col">
          <p className="text-[10px] text-textColor">Boss</p>
          <p className=""> {element.name}</p>
        </div>
      </td>
      <td className="text-white text-[18px] font-[400] px-[20px]">
        {element.code}
      </td>
    </tr>
  ));
  return (
    <div className="w-[55%]">
      <DailyTable
        rows={rows}
        theads={theads}
        tableTitle={"Daily new Boss"}
        btnName={"Review"}
        route={""}
      />
    </div>
  );
};

export default DailyBossTable;
