import { Table } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

const DailyTable = () => {
  const elements = [
    { id: "#1", name: "Ei Thwe", code: 2345 },
    { id: "#1", name: "Ei Thwe", code: 2345 },
  ];
  const rows = elements.map((element) => (
    <Table.Tr key={element.id}>
      <Table.Td>
        <p className="text-textColor text-[20px]">{element.id}</p>
      </Table.Td>
      <Table.Td className="text-white">
        <div className="flex flex-col">
          <p className="text-[10px] text-textColor">Boss</p>
          {element.name}
        </div>
      </Table.Td>
      <Table.Td className="text-white">{element.code}</Table.Td>
    </Table.Tr>
  ));
  return (
    <div className="bg-hightlightColor rounded-[20px] w-full h-[500px] p-[15px]">
      <div className="w-full flex justify-between mb-8">
        <p className="text-textColor text-[20px] font-[400]">Daily new Boss</p>
        <Link
          to={""}
          className="px-[20px] py-[5px] bg-gray-300 text-textColor rounded-full text-[20px] font-[400]"
        >
          Review
        </Link>
      </div>
      <div className="w-full rounded-t-[10px] overflow-hidden">
        <Table
          striped="even"
          stripedColor="blue"
          classNames={{
            table: "w-full text-left",
            thead: "text-[20px] font-[700] bg-warining h-[58px]",
            th: "px-[20px]",
            td: "text-[15px] font-[400] px-[20px]",
            tr: "h-[58px]",
          }}
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>No</Table.Th>
              <Table.Th>Name</Table.Th>
              <Table.Th>Code</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </div>
    </div>
  );
};

export default DailyTable;
