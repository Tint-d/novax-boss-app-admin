import Swal, { SweetAlertResult } from "sweetalert2";
import useMutation from "./useMutation";

export default () => {
  const { mutate, isLoading } = useMutation();

  const onDeleteHandler = (
    url: string,
    body: object | null = null,
    method: string = "Delete"
  ) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result: SweetAlertResult) => {
      if (result.isConfirmed) {
        await mutate({
          url,
          body: body ?? {},
          method: method,
        });
      }
    });
  };

  return { useDelete: onDeleteHandler, isLoading: isLoading };
};
