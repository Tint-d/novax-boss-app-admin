import { useForm } from "@mantine/form";

import FormCard from "./FormCard";
import { AddAdminFormValues } from "../typings/type";
import TextInputComponent from "./TextInputComponent";
import SaveButton from "./SaveButton";

const AddAdmin = () => {
  const form = useForm<AddAdminFormValues>({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  return (
    <FormCard title="Add New City">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <div className="w-[80%] mx-auto flex gap-8 ">
          <div className="flex flex-col gap-6 w-1/2">
            <TextInputComponent
              form={form}
              label="Name"
              placeholder="text name"
              value="name"
            />
            <TextInputComponent
              form={form}
              label="Email"
              placeholder="text email"
              value="email"
            />
          </div>

          <div className="flex flex-col gap-6 w-1/2 justify-between">
            <TextInputComponent
              form={form}
              label="Password"
              placeholder="text password"
              value="password"
            />

            <SaveButton />
          </div>
        </div>
      </form>
    </FormCard>
  );
};

export default AddAdmin;
