/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

import SearchTable from "./SearchTable";
import useTable from "../hooks/useTable";
import useMutation from "../hooks/useMutation";
import { AiOutlineEye } from "react-icons/ai";

const MessageTable = () => {
  const { setPage, page, value, setValue, data, total, totalPage, isLoading } =
    useTable("admin/support-message/list", "supportMessages");

  // const { mutate: deleteBoss } = useMutation();

  // const onDeleteHandler = async (id: number) => {
  //   const data = await deleteBoss({
  //     url: `admin/boss-address/delete/${id}`,
  //     body: {},
  //     method: "DELETE",
  //   });
  //   console.log(data);
  // };

  const theads = ["No", "Question", "Answer", "Action"];

  const rows = data?.map((element: any, index: number) => (
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
        <p className=""> {element.support_question}</p>
      </td>
      <td className="text-white text-[18px] font-[400] px-[20px] truncate-text">
        {element.support_answer}
      </td>

      <td>
        <div className="flex gap-5">
          <button className="w-10 h-10 rounded-xl bg-green-800 flex justify-center items-center">
            <AiOutlineEye className="text-[25px] text-white text-opacity-70" />
          </button>
          <button className="w-10 h-10 rounded-xl bg-warining flex justify-center items-center">
            <FiEdit className="text-[25px] text-hightlightColor" />
          </button>

          <button
            // onClick={() => onDeleteHandler(element.id)}
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
        tableTitle="Message Table"
        setPage={setPage}
        value={value}
        setValue={setValue}
        total={total}
        totalPages={totalPage}
      />
    </>
  );
};

export default MessageTable;
