/* eslint-disable @typescript-eslint/no-explicit-any */
import { AiOutlineEye } from "react-icons/ai";

import useTable from "../hooks/useTable";
import SearchTable from "./SearchTable";
import ActionDelete from "./ActionDelete";
import ActionEdit from "./ActionEdit";

const BusinessTypeTable = () => {
  const { setPage, value, setValue, data, total, totalPage, isLoading } =
    useTable("admin/address-category/list", "categories");

  const theads = ["No", "English Type", "Myanmar Type", "Action"];
  const rows = data.map((element: any, index: number) => (
    <tr
      key={element.id}
      className={` ${index % 2 === 1 ? "bg-hightlightColor" : "bg-rowColor"}`}
    >
      <td className=" px-[20px]">
        <p className="text-textColor text-[20px] font-[400]">{element.id}</p>
      </td>
      <td className="text-white text-[18px] font-[400] px-[20px]">
        {element.category_name}
      </td>
      <td className="text-white text-[18px] font-[400] px-[20px]">
        {element.category_mm_name}
      </td>
      <td>
        <div className="flex gap-5">
          <button className="w-10 h-10 rounded-xl bg-green-800 flex justify-center items-center">
            <AiOutlineEye className="text-[25px] text-white opacity-50" />
          </button>

          <ActionEdit
            initialValues={{
              category_name: element.category_name,
              category_mm_name: element.category_mm_name,
            }}
            url={`admin/address-category/update/${element.id}`}
          />

          <ActionDelete url={`admin/address-category/delete/${element?.id}`} />
        </div>
      </td>
    </tr>
  ));

  return (
    <SearchTable
      isLoading={isLoading}
      rows={rows}
      theads={theads}
      tableTitle={"Business Type"}
      setPage={setPage}
      value={value}
      setValue={setValue}
      total={total}
      totalPages={totalPage}
    />
  );
};

export default BusinessTypeTable;
