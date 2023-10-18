/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "@mantine/form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import FormCard from "./FormCard";
import TextInputComponent from "./TextInputComponent";
import { AddBossFormValues } from "../typings/type";
import SaveButton from "./SaveButton";
import useMutation from "../hooks/useMutation";

const AddBoss = () => {
  const form = useForm<AddBossFormValues>({
    initialValues: {
      name: "",
      number: "",
      code: "",
    },
    validate: {
      name: (value) =>
        value && value?.length > 4 ? null : "Name must have at least 4 letters",
      number: (value) =>
        value && value.length > 4 ? null : "Name must have at least 4 letters",
      code: (value) => (!value ? "Code is required" : null),
    },
  });

  const { mutate: generateCode, isLoading: generateCodeLoading } = useMutation(
    form,
    false
  );
  const { mutate: submitCode, isLoading: submitLoading } = useMutation(form);

  const onGenerateCodeHandler = async () => {
    const data = await generateCode({
      url: "admin/user/action-code/generate/code",
      body: {},
      method: "GET",
    });

    form.setFieldValue("code", data?.code);
  };

  const onGenerateCodeSubmitHandler = (values: AddBossFormValues) => {
    submitCode({
      url: "admin/user/action-code/generate",
      body: {
        boss_name: values.name,
        boss_number: values.number,
        code: values.code,
      },
      method: "POST",
    });
  };

  return (
    <FormCard title="Add New Boss">
      <form
        onSubmit={form.onSubmit((values) =>
          onGenerateCodeSubmitHandler(values)
        )}
        className="w-full grid grid-cols-5 gap-8"
      >
        <div className="col-span-2 flex flex-col gap-6">
          <TextInputComponent
            label="Boss Name"
            placeholder="type name..."
            form={form}
            value="name"
          />
          <TextInputComponent
            label="Boss Number"
            placeholder="type number..."
            form={form}
            value="number"
          />
        </div>
        <div className="col-span-3 flex flex-col justify-between">
          <TextInputComponent
            label="Boss Address Code"
            placeholder="click to generate address code ..."
            form={form}
            value="code"
            rightSectionBtn={
              <button
                type="button"
                onClick={onGenerateCodeHandler}
                className="px-5 py-[6px] -mr-[10px] bg-warining text-hightlightColor font-[500] text-[20px] rounded-full"
              >
                {generateCodeLoading ? (
                  <AiOutlineLoading3Quarters className="text-[24px] mx-auto animate-spin" />
                ) : (
                  "Generate Code"
                )}
              </button>
            }
          />
          <SaveButton type="submit" isLoading={submitLoading} />
        </div>
      </form>
    </FormCard>
  );
};

export default AddBoss;
