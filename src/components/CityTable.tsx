/* eslint-disable @typescript-eslint/no-explicit-any */

import { AiOutlineEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

import SearchTable from "./SearchTable";

import useTable from "../hooks/useTable";
import useMutation from "../hooks/useMutation";
import useTableEdit from "../hooks/useTableEdit";
import EditCity from "./EditCity";
import useTableDelete from "../hooks/useTableDelete";

const CityTable = () => {
  const { form, close, opened } = useTableEdit({
    id: "",
    english: "",
    myanmar: "",
  });
  const { setPage, value, setValue, data, total, totalPage, isLoading } =
    useTable("admin/cities/list", "cities");
  const useDelete = useTableDelete();

  const { onDeleteHandler } = useMutation();

  // const onDeleteHandler = async (id: number) => {
  //   console.log(id);
  //   const data = await deleteBoss({
  //     url: `admin/cities/delete/${id}`,
  //     body: {},
  //     method: "DELETE",
  //   });
  //   console.log(data);
  // };

  const theads = ["No", "English Name", "Myanmar Name", "Action"];
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
        {element.city_name}
      </td>
      <td className="text-white text-[18px] font-[400] px-[20px]">
        {element.city_mm_name}
      </td>
      <td>
        <div className="flex gap-5">
          <button className="w-10 h-10 rounded-xl bg-green-800 flex justify-center items-center">
            <AiOutlineEye className="text-[25px] text-white opacity-50" />
          </button>

          <button
            // onClick={() => onEditHandler(element)}
            className="w-10 h-10 rounded-xl bg-warining flex justify-center items-center"
          >
            <FiEdit className="text-[25px] text-hightlightColor" />
          </button>

          <button
            onClick={() => onDeleteHandler(`admin/cities/delete/${element.id}`)}
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
        tableTitle={"Citites"}
        setPage={setPage}
        value={value}
        setValue={setValue}
        total={total}
        totalPages={totalPage}
      />

      <EditCity form={form} close={close} opened={opened} />
    </>
  );
};

export default CityTable;
