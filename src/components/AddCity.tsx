import { useForm } from "@mantine/form";

import FormCard from "./FormCard";
import { AddBusinessTypeFormValues } from "../typings/type";
import TextInputComponent from "./TextInputComponent";
import SaveButton from "./SaveButton";
import useMutation from "../hooks/useMutation";

const AddCity = () => {
  const form = useForm<AddBusinessTypeFormValues>({
    initialValues: {
      english: "",
      myanmar: "",
    },
  });

  const { mutate: addCity, isLoading } = useMutation(form);

  const onCreateCity = (values: AddBusinessTypeFormValues) => {
    addCity({
      url: "admin/cities/create",
      body: {
        city_name: values.english,
        city_mm_name: values.myanmar,
      },
      method: "POST",
    });
  };

  return (
    <FormCard title="Add New City">
      <form onSubmit={form.onSubmit((values) => onCreateCity(values))}>
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

export default AddCity;