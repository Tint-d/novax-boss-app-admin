/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import React from "react";
import { ModalFormValues } from "../typings/type";

interface PropsType {
  opened: boolean;
  close: () => void;
  children: React.ReactNode;
  form: UseFormReturnType<ModalFormValues>;
  onSubmitHandler: (values: any) => void;
}

const ModalBox = ({
  opened,
  close,
  children,
  form,
  onSubmitHandler,
}: PropsType) => {
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
      <form
        className="flex flex-col gap-8"
        onSubmit={form.onSubmit((values) => onSubmitHandler(values))}
      >
        {children}
      </form>
    </Modal>
  );
};

export default ModalBox;
