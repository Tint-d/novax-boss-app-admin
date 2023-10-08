import { useForm } from "@mantine/form";

import FormCard from "./FormCard";
import { AddBusinessTypeFormValues } from "../typings/type";
import TextInputComponent from "./TextInputComponent";
import SaveButton from "./SaveButton";

const AddBusinessType = () => {
  const form = useForm<AddBusinessTypeFormValues>({
    initialValues: {
      english: "",
      myanmar: "",
    },
  });

  return (
    <FormCard title="Add New Business Type">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <div className="flex flex-col gap-6">
          <TextInputComponent
            form={form}
            label="English"
            placeholder="text type"
            value="english"
          />
          <TextInputComponent
            form={form}
            label="Myanmar"
            placeholder="text type"
            value="myanmar"
          />
          <SaveButton />
        </div>
      </form>
    </FormCard>
  );
};

export default AddBusinessType;
