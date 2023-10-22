/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import FormCard from "./FormCard";
import { Textarea } from "@mantine/core";
import SaveButton from "./SaveButton";
import { useForm } from "@mantine/form";
import useMutation from "../hooks/useMutation";

const AddMessage = () => {
  const form = useForm({
    initialValues: {
      support_question: "",
      support_answer: "",
    },
  });

  const { mutate: postMessage, data, isLoading } = useMutation();
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
                  " bg-hightlightColor border-none w-full px-5 text-textColor text-[20px]",
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
                  " bg-hightlightColor border-none w-full px-5 text-textColor text-[20px]",
                label: "text-[20px] font-[400] text-textColor mb-2",
              }}
              {...form.getInputProps("support_answer")}
            />
          </div>
        </div>
        <SaveButton
          name="Save"
          type="submit"
          isLoading={isLoading}
          justifyEnd="ml-auto"
        />
      </form>
    </FormCard>
  );
};

export default AddMessage;
