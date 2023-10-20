import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";

import FormCard from "./FormCard";
import TextInputComponent from "./TextInputComponent";
import SaveButton from "./SaveButton";
import GetAdminKey from "./GetAdminKey";
import useMutation from "../hooks/useMutation";
import { AddAdminFormValues } from "../typings/type";

const AddAdmin = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm<AddAdminFormValues>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      adminKey: "",
    },
  });

  const { mutate: adminCreate, isLoading } = useMutation(form);

  const createAdminHandler = (values: AddAdminFormValues) => {
    if (values.adminKey == "") return open();

    adminCreate({
      url: "admin/list/create",
      body: values,
      method: "POST",
    });
  };

  const onAdminKeySubmitHandler = (values: AddAdminFormValues) => {
    form.setFieldValue("adminKey", values.adminKey);

    close();
  };

  return (
    <FormCard title="Add New Admin">
      <form onSubmit={form.onSubmit((values) => createAdminHandler(values))}>
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

            <SaveButton isLoading={isLoading} type="submit" />
          </div>
        </div>
      </form>

      <GetAdminKey
        opened={opened}
        close={close}
        form={form}
        isLoading={isLoading}
        onSubmitHandler={onAdminKeySubmitHandler}
        btnName="Done"
      />
    </FormCard>
  );
};

export default AddAdmin;
