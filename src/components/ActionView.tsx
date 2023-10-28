/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import ActionViewBox from "./ActionViewBox";
import { useDisclosure } from "@mantine/hooks";
interface PropsType {
  id: number;
  data: any;
}
const ActionView = ({ data, id }: PropsType) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [opened, { open, close }] = useDisclosure(false);

  const onViewHandler = (e: any, id: number) => {
    e.preventDefault();
    const selectedItem = data.find((item: any) => item.id === id);
    setSelectedItem(selectedItem);
    open();
  };
  return (
    <>
      <button
        onClick={(e) => onViewHandler(e, id)}
        className="w-10 h-10 rounded-xl bg-green-800 hover:bg-green-900 active:translate-y-[2px] flex justify-center items-center"
      >
        <AiOutlineEye className="text-[25px] text-white opacity-50" />
      </button>
      <ActionViewBox
        opened={opened}
        close={close}
        selectedItem={selectedItem}
      />
    </>
  );
};

export default ActionView;
