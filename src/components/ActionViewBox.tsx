/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { Modal } from "@mantine/core";

interface PropsType {
  opened: boolean;
  close: () => void;
  selectedItem: any;
}

const ActionViewBox = ({ opened, close, selectedItem }: PropsType) => {
  return (
    <Modal
      opened={opened}
      onClose={close}
      centered
      size={482}
      styles={{
        header: {
          background: "#171717",
        },
        body: {
          background: "#171717",
          padding: "30px",
        },
        close: {
          color: "white",
          background: "transparent",
          "&:hover": {
            background: "transparent",
          },
        },
      }}
    >
      <p className=" text-warining text-[18px] mb-5">Question</p>
      <p className="text-textColor mb-5">{selectedItem?.support_question}</p>
      <p className=" text-warining text-[18px] mb-5">Answer</p>
      <p className="text-textColor indent-5">{selectedItem?.support_answer}</p>
    </Modal>
  );
};

export default ActionViewBox;
