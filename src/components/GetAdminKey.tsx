import { UseFormReturnType } from "@mantine/form";

import ModalBox from "./ModalBox";
import { GetAdminKeyType } from "../typings/type";
import TextInputComponent from "./TextInputComponent";
import SaveButton from "./SaveButton";

interface PropsType {
  form: UseFormReturnType<GetAdminKeyType>;
  opened: boolean;
  close: () => void;
  onSubmitHandler: (values: GetAdminKeyType) => void;
  isLoading: boolean;
  btnName: string;
}

const GetAdminKey = ({
  form,
  opened,
  close,
  onSubmitHandler,
  isLoading,
  btnName,
}: PropsType) => {
  return (
    <ModalBox
      form={form}
      opened={opened}
      close={close}
      onSubmitHandler={onSubmitHandler}
    >
      <TextInputComponent
        form={form}
        label="Admin Key"
        placeholder="key"
        value="adminKey"
      />

      <SaveButton type="submit" name={btnName} isLoading={isLoading} />
    </ModalBox>
  );
};

export default GetAdminKey;
