/* eslint-disable react-refresh/only-export-components */
import Swal, { SweetAlertResult } from "sweetalert2";
import useMutation from "./useMutation";

export default () => {
  const { mutate,isLoading } = useMutation();

  const onDeleteHandler = (
    url: string,
    body: object | null = null,
    method: string = "Delete"
  ) => {
    Swal.fire({
      title: "Are you sure?",
      background:"#212121",
      text: "You won't be able to revert this!",
      icon: "warning",
      iconColor:"#DCA715",
      showCancelButton: true,
      confirmButtonColor: "#166534",
      cancelButtonColor: "#991B1B",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result: SweetAlertResult) => {
      if (result.isConfirmed) {
        const response = await mutate({
          url,
          body: body ?? {},
          method: method,
        });
      }
    });
  };

  return {useDelete: onDeleteHandler,isLoading: isLoading};
};
