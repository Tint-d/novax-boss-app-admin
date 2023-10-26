/* eslint-disable react-refresh/only-export-components */
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Swal, { SweetAlertResult } from "sweetalert2";

export default () => {
  const navigate = useNavigate();

  return () => {
    Swal.fire({
      title: "Are you sure?",
      background: "#212121",
      text: "You won't be able to revert this!",
      icon: "warning",
      iconColor: "#DCA715",
      showCancelButton: true,
      confirmButtonColor: "#166534",
      cancelButtonColor: "#991B1B",
      confirmButtonText: "Yes, log out!",
    }).then((result: SweetAlertResult) => {
      if (result.isConfirmed) {
        Cookies.remove("token");
        Cookies.remove("user");
        navigate("/login");
      }
    });
  };
};
