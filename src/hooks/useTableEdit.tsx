import { useDisclosure } from "@mantine/hooks";
import { AddBusinessTypeFormValues, ModalFormValues } from "../typings/type";
import { useForm } from "@mantine/form";

export default (initialValues: ModalFormValues) => {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm<ModalFormValues>({
    initialValues: initialValues,
  });

  return { opened, open, close, form };
};
