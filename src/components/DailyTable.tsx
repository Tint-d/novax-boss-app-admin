import { Table } from "@mantine/core";
import { Link } from "react-router-dom";
// import "./dailyTable.css";
interface PropsType {
  rows: JSX.Element[];
  theads: string[];
  tableTitle: string;
  btnName: string;
  route: string;
}
const DailyTable = ({
  rows,
  theads,
  tableTitle,
  btnName,
  route,
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
          <tbody>{rows}</tbody>
        </Table>
      </div>
    </div>
  );
};

export default DailyTable;
