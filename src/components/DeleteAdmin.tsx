import { UseFormReturnType } from "@mantine/form";
import { AdminUpdateType, ModalFormValues } from "../typings/type";
import ModalBox from "./ModalBox";
import TextInputComponent from "./TextInputComponent";
import SaveButton from "./SaveButton";
import useTableDelete from "../hooks/useTableDelete";

interface PropsType {
  opened: boolean;
  close: () => void;
  form: UseFormReturnType<ModalFormValues>;
}

const DeleteAdmin = ({ opened, close, form }: PropsType) => {
  const useDelete = useTableDelete();

  const onSubmitHandler = async (values: AdminUpdateType) => {
    useDelete(
      `admin/list/${values.id}/delete`,
      { adminKey: values.adminKey },
      "POST"
    );
  };

  return (
    <ModalBox
      opened={opened}
      close={close}
      form={form}
      onSubmitHandler={onSubmitHandler}
    >
      <TextInputComponent
        form={form}
        label="Admin Key"
        placeholder="key"
        value="adminKey"
      />

      <SaveButton type="submit" name="Delete" isLoading={false} />
    </ModalBox>
  );
};

export default DeleteAdmin;
