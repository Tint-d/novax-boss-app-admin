import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();

  return () => {
    Cookies.remove("token");
    Cookies.remove("user");

    navigate("/login");
  };
};