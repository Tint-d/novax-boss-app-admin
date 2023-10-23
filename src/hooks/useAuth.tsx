import Cookies from "js-cookie";

export default () => {
  const token = Cookies.get("token");
  const user = Cookies.get("user")
    ? JSON.parse(Cookies.get("user") as string)
    : undefined;

  return { token, user };
};
