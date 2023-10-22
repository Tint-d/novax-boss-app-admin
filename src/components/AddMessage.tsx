/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "@mantine/form";
import { Textarea } from "@mantine/core";

import FormCard from "./FormCard";
import SaveButton from "./SaveButton";
import useMutation from "../hooks/useMutation";
import { MessageType } from "../typings/type";

const AddMessage = () => {
  const form = useForm<MessageType>({
    initialValues: {
      support_question: "",
      support_answer: "",
    },
  });

  const { mutate: postMessage, isLoading } = useMutation(form);

  return (
    <FormCard title={"Add New Message"}>
      <form
        onSubmit={form.onSubmit((values) =>
          postMessage({
            url: "admin/support-message/create",
            body: values,
            method: "POST",
          })
        )}
      >
        <div className="flex gap-6 mb-5">
          <div className="w-[40%]">
            <Textarea
              label="Question"
              placeholder="text question"
              minRows={9}
              classNames={{
                input:
                  " bg-hightlightColor border-none w-full px-5 text-textColor text-[20px] rounded-[10px]",
                label: "text-[20px] font-[400] text-textColor mb-2",
              }}
              {...form.getInputProps("support_question")}
            />
          </div>
          <div className="w-[60%]">
            <Textarea
              label="Answer"
              placeholder="text answer"
              minRows={9}
              classNames={{
                input:
                  " bg-hightlightColor border-none w-full px-5 text-textColor text-[20px] rounded-[10px]",
                label: "text-[20px] font-[400] text-textColor mb-2",
              }}
              {...form.getInputProps("support_answer")}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <SaveButton name="Save" type="submit" isLoading={isLoading} />
        </div>
      </form>
    </FormCard>
  );
};

export default AddMessage;
