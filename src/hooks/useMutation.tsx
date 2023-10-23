/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import toast from "react-hot-toast";
import { UseFormReturnType } from "@mantine/form";

import { usePostDataMutation } from "../redux/api/adminApi";
import { FormValues, MutationQueryProps } from "../typings/type";

export default (
  form: UseFormReturnType<FormValues> | null = null,
  reset: boolean = true
) => {
  const [mutate, { data, isLoading }] = usePostDataMutation();

  const onMutate = async (params: MutationQueryProps) => {
    const { error, data: responseData } = (await mutate(params)) as any;

    if (responseData?.success) {
      toast.success(responseData?.message);
      if (reset && form) form.reset();
    } else if (error) {
      toast.error(error?.data?.message);
    } else if (!responseData?.success) {
      toast.success(responseData.message);
    }

    return responseData;
  };

  const onDeleteHandler = async (url: string) => {
    const data = await onMutate({
      url: url,
      body: {},
      method: "DELETE",
    });
    console.log(data);
  };
  return { mutate: onMutate, onDeleteHandler, isLoading, data };
};
