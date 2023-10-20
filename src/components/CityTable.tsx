/* eslint-disable @typescript-eslint/no-explicit-any */


import useTable from "../hooks/useTable";
import SearchTable from "./SearchTable";
import ActionDelete from "./ActionDelete";
import ActionEdit from "./ActionEdit";

const CityTable = () => {
  const { setPage, value, setValue, data, total, totalPage, isLoading } =
    useTable("admin/cities/list", "cities");

  const theads = ["No", "English Name", "Myanmar Name", "Action"];
  const rows = data.map((element: any, index: number) => (
    <tr
      key={element.id}
      className={` ${index % 2 === 1 ? "bg-hightlightColor" : "bg-rowColor"}`}
    >
      <td className=" px-[20px]">
        <p className="text-textColor text-[20px] font-[400]">{element.id}</p>
      </td>
      <td className="text-white text-[18px] font-[400] px-[20px]">
        {element.city_name}
      </td>
      <td className="text-white text-[18px] font-[400] px-[20px]">
        {element.city_mm_name}
      </td>
      <td>
        <div className="flex gap-5">
          <ActionEdit
            initialValues={{
              city_name: element.city_name,
              city_mm_name: element.city_mm_name,
            }}
            url={`admin/cities/update/${element.id}`}
          />

          <ActionDelete url={`admin/cities/delete/${element.id}`} />
        </div>
      </td>
    </tr>
  ));

  return (
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
  );
};

export default CityTable;
