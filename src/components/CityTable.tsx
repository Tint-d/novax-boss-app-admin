import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

import SearchTable from "./SearchTable";
import { cityData } from "../config/constant";

const CityTable = () => {
  const [page, setPage] = useState<number>(1);
  const [value, setValue] = useState<string>("");
  console.log(page);
  console.log(value);

  const theads = ["No", "English Name", "Myanmar Name", "Action"];
  const rows = cityData.map((element, index) => (
    <tr
      key={element.id}
      className={` ${index % 2 === 1 ? "bg-hightlightColor" : "bg-rowColor"}`}
    >
      <td className=" px-[20px]">
        <p className="text-textColor text-[20px] font-[400]">{element.id}</p>
      </td>
      <td className="text-white text-[18px] font-[400] px-[20px]">
        {element.englishName}
      </td>
      <td className="text-white text-[18px] font-[400] px-[20px]">
        {element.myanmarName}
      </td>
      <td>
        <div className="flex gap-5">
          <button className="w-10 h-10 rounded-xl bg-green-800 flex justify-center items-center">
            <AiOutlineEye className="text-[25px] text-white opacity-50" />
          </button>

          <button className="w-10 h-10 rounded-xl bg-warining flex justify-center items-center">
            <FiEdit className="text-[25px] text-hightlightColor" />
          </button>

          <button className="w-10 h-10 rounded-xl bg-red-800 flex justify-center items-center">
            <BsTrash className="text-[25px] text-white opacity-50" />
          </button>
        </div>
      </td>
    </tr>
  ));

  return (
    <SearchTable
      rows={rows}
      theads={theads}
      tableTitle={"Business Type"}
      setPage={setPage}
      value={value}
      setValue={setValue}
      total={1200}
      totalPages={120}
    />
  );
};

export default CityTable;
