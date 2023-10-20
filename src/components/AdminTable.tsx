/* eslint-disable @typescript-eslint/no-explicit-any */
import SearchTable from "./SearchTable";
import ActionDelete from "./ActionDelete";
import ActionEdit from "./ActionEdit";
import AdminPassword from "./AdminPassword";
import useTable from "../hooks/useTable";
import { AdminInfoType } from "../typings/type";

const AdminTable = () => {
  const {
    setPage,
    value,
    setValue,
    data,
    total,
    totalPage,
    setData,
    isLoading,
  } = useTable("admin/list", "admins");

  const theads = ["No", "Name", "Email", "Password", "Action"];

  const rows = data.map((element: AdminInfoType, index: number) => (
    <tr
      key={element.id}
      className={` ${index % 2 === 1 ? "bg-hightlightColor" : "bg-rowColor"}`}
    >
      <td className=" px-[20px]">
        <p className="text-textColor text-[20px] font-[400]">{element.id}</p>
      </td>
      <td className="text-white text-[18px] font-[400] px-[20px]">
        {element.name}
      </td>
      <td className="text-white text-[18px] font-[400] px-[20px]">
        {element.email}
      </td>
      <td className="text-white text-[18px] font-[400] px-[20px] w-[320px]">
        <AdminPassword element={element} setData={setData} />
      </td>
      <td>
        <div className="flex gap-5">
          <ActionEdit
            initialValues={{
              adminKey: "",
              name: element.name,
              email: element.email,
              password: element.password,
            }}
            url={`admin/list/${element.id}/update/password`}
          />

          <ActionDelete url={`admin/list/${element.id}/delete`} withAdminKey />
        </div>
      </td>
    </tr>
  ));

  return (
    <SearchTable
      isLoading={isLoading}
      rows={rows}
      theads={theads}
      tableTitle={"Admin Table"}
      setPage={setPage}
      value={value}
      setValue={setValue}
      total={total}
      totalPages={totalPage}
    />
  );
};

export default AdminTable;
