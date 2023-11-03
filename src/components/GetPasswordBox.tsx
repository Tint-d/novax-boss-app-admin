import ModalBox from "./ModalBox";
import TextInputComponent from "./TextInputComponent";
import SaveButton from "./SaveButton";
import { UseFormReturnType } from "@mantine/form";
import { GetPasswordType } from "../typings/type";

interface PropsType {
  onGetPasswordHandler: (values: GetPasswordType) => Promise<void>;
  opened: boolean;
  close: () => void;
  form: UseFormReturnType<GetPasswordType>;
  isLoading: boolean;
}

const GetPasswordBox = ({
  onGetPasswordHandler,
  opened,
  close,
  form,
  isLoading,
}: PropsType) => {
  return (
    <ModalBox
      onSubmitHandler={onGetPasswordHandler}
      opened={opened}
      close={close}
      form={form}
    >
      <TextInputComponent
        form={form}
        label="Admin Key"
        placeholder="key"
        value="adminKey"
      />

      <div className="w-full flex justify-center">
        <SaveButton type="submit" name="Get Password" isLoading={isLoading} />
      </div>
    </ModalBox>
  );
};

export default GetPasswordBox;
