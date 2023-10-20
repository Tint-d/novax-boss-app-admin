import { Table } from "@mantine/core";
import { Link } from "react-router-dom";

import PaginationComponent from "./PaginationComponent";
import TableRowsContainer from "./TableRowsContainer";

interface PropsType {
  rows: JSX.Element[];
  theads: string[];
  tableTitle: string;
  btnName: string;
  route: string;
  total: number;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  isLoading: boolean;
}

const DailyTable = ({
  rows,
  theads,
  tableTitle,
  btnName,
  route,
  total,
  setPage,
  totalPages,
  isLoading,
}: PropsType) => {
  return (
    <div className="bg-tableBgColor rounded-[20px] w-full  p-[15px]">
      <div className="w-full flex justify-between mb-8">
        <p className="text-textColor text-[20px] font-[400]">{tableTitle}</p>
        <Link
          to={route}
          className="px-[20px] py-[5px] bg-hightlightColor text-textColor rounded-full text-[20px] font-[400]"
        >
          {btnName}
        </Link>
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
        <div className="w-full overflow-x-auto flex justify-between items-center my-5 gap-10">
          <p className="text-textColor text-[20px] whitespace-nowrap">
            Total: {total}
          </p>
          <PaginationComponent setPage={setPage} totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
};

export default DailyTable;
