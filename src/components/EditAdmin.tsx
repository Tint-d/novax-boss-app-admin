import { UseFormReturnType } from "@mantine/form";
import {
  AddBusinessTypeFormValues,
  AdminUpdateType,
  ModalFormValues,
} from "../typings/type";
import ModalBox from "./ModalBox";
import TextInputComponent from "./TextInputComponent";
import SaveButton from "./SaveButton";
import useMutation from "../hooks/useMutation";

interface PropsType {
  opened: boolean;
  close: () => void;
  form: UseFormReturnType<ModalFormValues>;
  setData: React.Dispatch<any>;
}

const EditAdmin = ({ opened, close, form, setData }: PropsType) => {
  const { mutate: editAdmin, isLoading } = useMutation(form);

  const onSubmitHandler = async (values: AdminUpdateType) => {
    const response = await editAdmin({
      url: `admin/list/${values.id}/update/password`,
      body: {
        adminKey: values.adminKey,
        name: values.name,
        email: values.email,
        password: values.password,
      },
      method: "PUT",
    });

    if (response?.success) {
      setData((prevData: any) => {
        return prevData.map((data: any) => {
          const newData = data;
          if (data.id == values?.id) {
            return { ...newData, password: values?.password };
          }
          return data;
        });
      });
    }
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

      <TextInputComponent
        form={form}
        label="Name"
        placeholder="name"
        value="name"
      />

      <TextInputComponent
        form={form}
        label="Email"
        placeholder="email"
        value="email"
      />

      <TextInputComponent
        form={form}
        label="Password"
        placeholder="password"
        value="password"
      />

      <SaveButton type="submit" name="Edit" isLoading={isLoading} />
    </ModalBox>
  );
};

export default EditAdmin;
