import { useForm } from "@mantine/form";
import FormCard from "./FormCard";

import TextInputComponent from "./TextInputComponent";
import { AddBossFormValues } from "../typings/type";
import SaveButton from "./SaveButton";

const AddBoss = () => {
  const form = useForm<AddBossFormValues>({
    initialValues: {
      name: "",
      number: "",
      code: "",
    },
  });
  return (
    <FormCard title="Add New Boss">
      <form
        onSubmit={form.onSubmit((values) => console.log(values))}
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
              <button className="px-5 py-[6px] -mr-[10px] bg-warining text-hightlightColor font-[500] text-[20px] rounded-full">
                Generate Code
              </button>
            }
          />
          <SaveButton />
        </div>
      </form>
    </FormCard>
  );
};

export default AddBoss;
