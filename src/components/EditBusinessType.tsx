import { UseFormReturnType } from "@mantine/form";
import { AddBusinessTypeFormValues, ModalFormValues } from "../typings/type";
import ModalBox from "./ModalBox";
import TextInputComponent from "./TextInputComponent";
import SaveButton from "./SaveButton";
import useMutation from "../hooks/useMutation";

interface PropsType {
  opened: boolean;
  close: () => void;
  form: UseFormReturnType<ModalFormValues>;
}

const EditBusinessType = ({ opened, close, form }: PropsType) => {
  const { mutate: editBusinessType, isLoading } = useMutation(form);

  const onSubmitHandler = (values: AddBusinessTypeFormValues) => {
    editBusinessType({
      url: `admin/address-category/update/${values.id}`,
      body: {
        category_name: values.english,
        category_mm_name: values.myanmar,
      },
      method: "PUT",
    });
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
        label="English"
        placeholder="name"
        value="english"
      />

      <TextInputComponent
        form={form}
        label="Myanmar"
        placeholder="name"
        value="myanmar"
      />

      <SaveButton type="submit" name="Edit" isLoading={isLoading} />
    </ModalBox>
  );
};

export default EditBusinessType;
