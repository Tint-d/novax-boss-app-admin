/* eslint-disable @typescript-eslint/no-explicit-any */
import { AiOutlineEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

import SearchTable from "./SearchTable";

import useTable from "../hooks/useTable";
import EditBusinessType from "./EditBusinessType";
import useTableEdit from "../hooks/useTableEdit";
import useTableDelete from "../hooks/useTableDelete";

const BusinessTypeTable = () => {
  const { form, opened, open, close } = useTableEdit({
    id: "",
    english: "",
    myanmar: "",
  });
  const { useDelete } = useTableDelete();
  const { setPage, value, setValue, data, total, totalPage, isLoading } =
    useTable("admin/address-category/list", "categories");

  const onEditHandler = (element: any) => {
    form.setValues({
      id: element.id,
      english: element.category_name,
      myanmar: element.category_mm_name,
    });

    open();
  };

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

          <button
            onClick={() => onEditHandler(element)}
            className="w-10 h-10 rounded-xl bg-warining flex justify-center items-center"
          >
            <FiEdit className="text-[25px] text-hightlightColor" />
          </button>

          <button
            onClick={() =>
              useDelete(`admin/address-category/delete/${element?.id}`)
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
      <EditBusinessType opened={opened} close={close} form={form} />
    </>
  );
};

export default BusinessTypeTable;
