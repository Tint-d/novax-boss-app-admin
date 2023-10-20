import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";

import { ModalFormValues } from "../typings/type";

export default (initialValues: ModalFormValues) => {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm<ModalFormValues>({
    initialValues: initialValues,
  });

  return { opened, open, close, form };
};
