import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

import { facebookLoginUserData } from "../config/constant";
import SearchTable from "./SearchTable";

interface PropsType {
  tableTitle: string;
}

const LoginUserTable = ({ tableTitle }: PropsType) => {
  const [page, setPage] = useState<number>(1);
  const [value, setValue] = useState<string>("");
  console.log(page);
  console.log(value);

  const theads = ["No", "Name", "Email", "Action"];

  const rows = facebookLoginUserData.map((element, index) => (
    <tr
      key={element.id}
      className={` ${index % 2 === 1 ? "bg-hightlightColor" : "bg-rowColor"}`}
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
        {element.email}
      </td>
      <td>
        <div className="flex gap-5">
          <button className="w-10 h-10 rounded-xl bg-green-800 flex justify-center items-center">
            <AiOutlineEye className="text-[25px] text-white opacity-50" />
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
      tableTitle={tableTitle}
      setPage={setPage}
      value={value}
      setValue={setValue}
      total={1200}
      totalPages={120}
    />
  );
};

export default LoginUserTable;
