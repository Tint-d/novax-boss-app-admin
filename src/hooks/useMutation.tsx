/* eslint-disable react-refresh/only-export-components */
import toast from "react-hot-toast";
import { usePostDataMutation } from "../redux/api/adminApi";
import { MutationQueryProps } from "../typings/type";

export default () => {
  const [mutate, { data, isLoading }] = usePostDataMutation();

  const onMutate = async (params: MutationQueryProps) => {
    const { error } = await mutate(params);

    if (data?.success) {
      toast.success(data?.message);
    } else if (error) {
      toast.error(error?.data?.message);
    }

    console.log(data, error, isLoading);
  };

  const onDeleteHandler = async (url: string) => {
    // console.log(id);
    const data = await onMutate({
      url: url,
      body: {},
      method: "DELETE",
    });
    console.log(data);
  };
  return { mutate: onMutate, onDeleteHandler, isLoading, data };
};
