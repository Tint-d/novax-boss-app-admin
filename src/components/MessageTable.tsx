/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

import SearchTable from "./SearchTable";
import useTable from "../hooks/useTable";
import ActionDelete from "./ActionDelete";
import ActionEdit from "./ActionEdit";

const MessageTable = () => {
  const { setPage, page, value, setValue, data, total, totalPage, isLoading } =
    useTable("admin/support-message/list", "supportMessages");

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
          <ActionEdit
            initialValues={{
              support_question: element.support_question,
              support_answer: element.support_answer,
            }}
            url={`admin/support-message/update/${element.id}`}
          />

          <ActionDelete url={`admin/support-message/delete/${element.id}`} />
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
