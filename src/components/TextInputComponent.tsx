import { TextInput } from "@mantine/core";

import { UseFormReturnType } from "@mantine/form";
import { FormValues } from "../typings/type";
import { ReactNode } from "react";

interface PropsType {
  label: string;
  placeholder: string;
  form: UseFormReturnType<FormValues>;
  value: string;
  rightSectionBtn?: ReactNode;
}
const TextInputComponent = ({
  label,
  placeholder,
  form,
  value,
  rightSectionBtn,
}: PropsType) => {
  return (
    <TextInput
      placeholder={placeholder}
      label={label}
      classNames={{
        input:
          "rounded-full bg-hightlightColor border-none h-14 w-full px-5 text-textColor text-[20px]",
        label: "text-[20px] font-[400] text-textColor mb-2",
      }}
      rightSection={rightSectionBtn}
      rightSectionWidth={200}
     {...form.getInputProps(value)}
    />
  );
};

export default TextInputComponent;
