/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AiOutlineEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

import SearchTable from "./SearchTable";

import useTable from "../hooks/useTable";
// import useMutation from "../hooks/useMutation";
import useTableDelete from "../hooks/useTableDelete";
import { useDisclosure } from "@mantine/hooks";
import ViewModal from "./ViewModal";
import { useState } from "react";

interface SelectedItemType {
  id: number;
  category_name: string;
  category_mm_name: string;
}
const BusinessTypeTable = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedItem, setSelectedItem] = useState<SelectedItemType>();

  const { setPage, page, value, setValue, data, total, totalPage, isLoading } =
    useTable("admin/address-category/list", "categories");

  const onDeleteHandler = useTableDelete();

  const onViewHandler = (e: any, id: number) => {
    e.preventDefault();
    const selectedItem = data.find((item: { id: number }) => item.id === id);
    setSelectedItem(selectedItem);
    open(); // Assuming open() is a function to open the view modal
    console.log(selectedItem);
  };

  // const { onDeleteHandler } = useMutation();

  const theads = ["No", "English Type", "Myanmar Type", "Action"];
  const rows = data.map((element: any, index: number) => (
    <tr
      key={element.id}
      className={` ${index % 2 === 1 ? "bg-hightlightColor" : "bg-rowColor"}`}
    >
      <td className=" px-[20px]">
        <p className="text-textColor text-[20px] font-[400]">
          {(page - 1) * 20 + index + 1}
        </p>
      </td>
      <td className="text-white text-[18px] font-[400] px-[20px]">
        {element.category_name}
      </td>
      <td className="text-white text-[18px] font-[400] px-[20px]">
        {element.category_mm_name}
      </td>
      <td>
        <div className="flex gap-5">
          <button
            onClick={(e) => onViewHandler(e, element?.id)}
            className="w-10 h-10 rounded-xl bg-green-800 flex justify-center items-center"
          >
            <AiOutlineEye className="text-[25px] text-white opacity-50" />
          </button>

          <button className="w-10 h-10 rounded-xl bg-warining flex justify-center items-center">
            <FiEdit className="text-[25px] text-hightlightColor" />
          </button>

          <button
            onClick={() =>
              onDeleteHandler(`admin/address-category/delete/${element?.id}`)
            }
            className="w-10 h-10 rounded-xl bg-red-800 flex justify-center items-center"
          >
            <BsTrash className="text-[25px] text-white opacity-50" />
          </button>
        </div>
      </td>
    </tr>
  ));

  return (
    <>
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
      {opened && selectedItem && (
        <ViewModal opened={opened} close={close} title="Business Type">
          <div className="grid grid-cols-2 gap-2 ">
            <p className="">English Name </p>: &nbsp;
            {selectedItem.category_name}
            <p>Myanmar Name </p>: &nbsp;
            {selectedItem.category_mm_name}
          </div>
        </ViewModal>
      )}
    </>
  );
};

export default BusinessTypeTable;
