import React from "react";

import DailyTable from "./DailyTable";
import { IoPersonCircleOutline } from "react-icons/io5";

const DailyNewUserTable = () => {
  const elements = [
    { id: "#1", name: "Ei Thwe" },
    { id: "#2", name: "Ei Thwe" },
  ];
  const theads = ["No", "Name"];

  const rows = elements.map((element, index) => (
    <tr
      key={element.id}
      className={`${index % 2 === 1 ? "bg-hightlightColor" : "bg-rowColor"}`}
    >
      <td className="text-[20px] font-[400] px-[20px]">
        <p className="text-textColor text-[20px]">{element.id}</p>
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
    <div className="w-[45%]">
      <DailyTable
        rows={rows}
        theads={theads}
        tableTitle={"Daily new User"}
        btnName={"Review"}
        route={""}
      />
    </div>
  );
};

export default DailyNewUserTable;
