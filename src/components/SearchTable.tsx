import { Table, TextInput } from "@mantine/core";

import PaginationComponent from "./PaginationComponent";
import TableRowsContainer from "./TableRowsContainer";

interface PropsType {
  isLoading: boolean;
  rows: JSX.Element[];
  theads: string[];
  tableTitle: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  totalPages: number;
}

const SearchTable = ({
  isLoading,
  rows,
  theads,
  tableTitle,
  setPage,
  value,
  setValue,
  total,
  totalPages,
}: PropsType) => {
  return (
    <div className="bg-tableBgColor rounded-[20px] w-full  p-[15px]">
      <div className="w-full flex items-center justify-between mb-8">
        <p className="text-textColor text-[20px] font-[400]"># {tableTitle}</p>
        <TextInput
          placeholder="Search..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          classNames={{
            input:
              "rounded-full bg-hightlightColor border-none h-14 w-[250px] px-5 text-textColor text-[20px]",
          }}
        />
      </div>
      <div className="w-full rounded-t-[10px] overflow-hidden">
        <Table className="w-full text-left">
          <thead className=" font-[700] bg-warining h-[58px] ">
            <tr className="h-[58px]">
              {theads.map((item, i) => (
                <th key={i} className="px-[20px] text-[20px] text-black">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <TableRowsContainer
              rows={rows}
              theads={theads}
              isLoading={isLoading}
            />
          </tbody>
        </Table>

        <div className="w-full flex justify-between items-center my-5">
          <p className="text-textColor text-[20px]">Total: {total}</p>
          <PaginationComponent setPage={setPage} totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
};

export default SearchTable;
