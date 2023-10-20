/* eslint-disable @typescript-eslint/no-explicit-any */

import SearchTable from "./SearchTable";
import useTable from "../hooks/useTable";
import ActionDelete from "./ActionDelete";

interface PropsType {
  tableTitle: string;
  type: string;
}

const LoginUserTable = ({ tableTitle, type }: PropsType) => {
  const { page, setPage, value, setValue, data, total, totalPage, isLoading } =
    useTable(`admin/user/list/${type}`, "users");

  const theads = ["No", "Name", "Email", "Action"];

  const rows = data.map((element: any, index: number) => (
    <tr
      key={element.id}
      className={` ${index % 2 === 1 ? "bg-hightlightColor" : "bg-rowColor"}`}
    >
      <td className=" px-[20px]">
        <p className="text-textColor text-[20px] font-[400]">
          {(page - 1) * 10 + index + 1}
        </p>
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

          <ActionDelete url={`/admin/users/delete/${element.id}`} />
        </div>
      </td>
    </tr>
  ));

  return (
    <SearchTable
      isLoading={isLoading}
      rows={rows}
      theads={theads}
      tableTitle={tableTitle}
      setPage={setPage}
      value={value}
      setValue={setValue}
      total={total}
      totalPages={totalPage}
    />
  );
};

export default LoginUserTable;
