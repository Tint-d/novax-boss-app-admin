import Cookies from "js-cookie";

export default () => {
  const token = Cookies.get("token");

  return token;
};
