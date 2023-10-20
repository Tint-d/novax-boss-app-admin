import { useForm } from "@mantine/form";

import FormCard from "./FormCard";
import TextInputComponent from "./TextInputComponent";
import SaveButton from "./SaveButton";
import useMutation from "../hooks/useMutation";
import { AddBusinessTypeFormValues } from "../typings/type";

const AddBusinessType = () => {
  const form = useForm<AddBusinessTypeFormValues>({
    initialValues: {
      english: "",
      myanmar: "",
    },
  });

  const { mutate: addBusinessType, isLoading } = useMutation(form);

  const onCreateBusinessType = (values: AddBusinessTypeFormValues) => {
    addBusinessType({
      url: "admin/address-category/create",
      body: {
        category_name: values.english,
        category_mm_name: values.myanmar,
      },
      method: "POST",
    });
  };

  return (
    <FormCard title="Add New Business Type">
      <form onSubmit={form.onSubmit((values) => onCreateBusinessType(values))}>
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
          <SaveButton type="submit" isLoading={isLoading} />
        </div>
      </form>
    </FormCard>
  );
};

export default AddBusinessType;
