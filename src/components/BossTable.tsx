import { useState } from "react";
import SearchTable from "./SearchTable";
import { AiOutlineEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

const BossTable = () => {
  const [page, setPage] = useState<number>(1);
  const [value, setValue] = useState<string>("");
  console.log(page);
  console.log(value);
  const elements = [
    {
      id: "#1",
      name: "Ko Han Thu Zaw",
      code: "NBT-204",
      addressCode: "BAPM-ND323ADV",
    },
    {
      id: "#2",
      name: "Ko Kaung Sett",
      code: "NBT-202",
      addressCode: "ADC-IE2REWV9",
    },
    {
      id: "#3",
      name: "Ma Ei Myat Thwe",
      code: "NBT-203",
      addressCode: "ADC-WEY42BSY",
    },
    {
      id: "#4",
      name: "Daw Kye Mya",
      code: "NBT-205",
      addressCode: "ADC-ZBE23SNW",
    },
    {
      id: "#5",
      name: "U Khine Lin",
      code: "NBT-209",
      addressCode: "ADC-23N3G42S",
    },
  ];

  const theads = ["No", "Name", "Code", "Address Code", "Action"];

  const rows = elements.map((element, index) => (
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
        {element.code}
      </td>
      <td className="text-white text-[18px] font-[400] px-[20px]">
        {element.addressCode}
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
      tableTitle="Boss Table"
      setPage={setPage}
      value={value}
      setValue={setValue}
      total={1200}
      totalPages={120}
    />
  );
};

export default BossTable;
