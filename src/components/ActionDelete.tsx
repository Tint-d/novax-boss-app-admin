/* eslint-disable react-hooks/rules-of-hooks */
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { BsTrash } from "react-icons/bs";

import useTableDelete from "../hooks/useTableDelete";
import GetAdminKey from "./GetAdminKey";
import { GetAdminKeyType } from "../typings/type";

interface PropsType {
  url: string;
  withAdminKey?: boolean;
}

const ActionDelete = ({ url, withAdminKey }: PropsType) => {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm<GetAdminKeyType>({
    initialValues: {
      adminKey: "",
    },
    validate: {
      adminKey: (value) =>
        value && value.length > 4 ? null : "Admin key is required!",
    },
  });

  const { useDelete, isLoading } = useTableDelete();

  const onDeleteHandler = () => {
    if (withAdminKey) return open();

    useDelete(url);
  };

  const onAdminDeleteHandler = (values: GetAdminKeyType) => {
    useDelete(url, { adminKey: values.adminKey }, "POST");
  };

  return (
    <>
      <button
        onClick={onDeleteHandler}
        className="w-10 h-10 rounded-xl bg-red-800 hover:bg-red-900 active:translate-y-[2px] flex justify-center items-center"
      >
        <BsTrash className="text-[25px] text-white opacity-50" />
      </button>

      <GetAdminKey
        close={close}
        form={form}
        isLoading={isLoading}
        opened={opened}
        onSubmitHandler={onAdminDeleteHandler}
        btnName="Delete"
      />
    </>
  );
};

export default ActionDelete;
