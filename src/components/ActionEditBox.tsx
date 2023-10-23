/* eslint-disable @typescript-eslint/no-unused-vars */
import { UseFormReturnType } from "@mantine/form";

import ModalBox from "./ModalBox";
import SaveButton from "./SaveButton";
import TextInputComponent from "./TextInputComponent";
import generateLabel from "../utils/generateLabel";
import { ActionEditType } from "../typings/type";

interface PropsType {
  opened: boolean;
  close: () => void;
  form: UseFormReturnType<ActionEditType>;
  isLoading: boolean;
  onSubmitHandler: (values: ActionEditType) => void;
}

const ActionEditBox = ({
  opened,
  close,
  form,
  onSubmitHandler,
  isLoading,
}: PropsType) => {
  return (
    <ModalBox
      opened={opened}
      close={close}
      form={form}
      onSubmitHandler={onSubmitHandler}
    >
      {Object.entries(form.values).map(([key, value], index) => (
        <TextInputComponent
          key={index}
          form={form}
          label={generateLabel(key)}
          placeholder={key}
          value={key}
        />
      ))}

      <SaveButton type="submit" name="Edit" isLoading={isLoading} />
    </ModalBox>
  );
};

export default ActionEditBox;
