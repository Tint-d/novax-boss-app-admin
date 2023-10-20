import { useEffect } from "react";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { FiEdit } from "react-icons/fi";

import ActionEditBox from "./ActionEditBox";
import { ActionEditType } from "../typings/type";

import useMutation from "../hooks/useMutation";

interface PropsType {
  initialValues: ActionEditType;
  url: string;
}

const ActionEdit = ({ initialValues, url }: PropsType) => {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm<ActionEditType>({
    initialValues,
  });
  const { mutate, isLoading } = useMutation(form);

  const onSubmitHandler = async (values: ActionEditType) => {
    await mutate({
      url,
      body: values,
      method: "PUT",
    });

    close();
  };

  useEffect(() => {
    form.setValues(initialValues);
  }, [initialValues]);

  return (
    <>
      <button
        onClick={open}
        className="w-10 h-10 rounded-xl bg-warining flex justify-center items-center"
      >
        <FiEdit className="text-[25px] text-hightlightColor" />
      </button>

      <ActionEditBox
        opened={opened}
        close={close}
        form={form}
        isLoading={isLoading}
        onSubmitHandler={onSubmitHandler}
      />
    </>
  );
};

export default ActionEdit;
