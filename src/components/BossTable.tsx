/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import SearchTable from "./SearchTable";
import ActionDelete from "./ActionDelete";
import ActionEdit from "./ActionEdit";
import useTable from "../hooks/useTable";
import { BossCodeType } from "../typings/type";

const BossTable = () => {
  const { setPage, page, value, setValue, data, total, totalPage, isLoading } =
    useTable("admin/user/action-code/list", "data");

  const theads = ["No", "Name", "Code", "Address Code", "Action"];

  const rows = data?.map((element: BossCodeType, index: number) => (
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
        <div className="flex flex-col">
          <p className="text-[10px] text-textColor">Boss</p>
          <p className=""> {element.boss_name}</p>
        </div>
      </td>
      <td className="text-white text-[18px] font-[400] px-[20px]">
        {element.boss_number}
      </td>
      <td className="text-white text-[18px] font-[400] px-[20px]">
        {element.code}
      </td>
      <td>
        <div className="flex gap-5">
          <ActionEdit
            initialValues={{
              boss_name: element.boss_name,
              boss_number: element.boss_number,
              code: element.code,
            }}
            url={`admin/user/action-code/edit/${element.id}`}
          />

          <ActionDelete url={`admin/user/action-code/delete/${element.id}`} />
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
        tableTitle="Boss Table"
        setPage={setPage}
        value={value}
        setValue={setValue}
        total={total}
        totalPages={totalPage}
      />
    </>
  );
};

export default BossTable;
