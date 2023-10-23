import { useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import Cookies from "js-cookie";

import LoginForm from "../components/LoginForm";
import useMutation from "../hooks/useMutation";
import { LoginType } from "../typings/type";
import withAuth from "../hocs/withAuth";

const Login = () => {
  const navigate = useNavigate();

  const form = useForm<LoginType>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) =>
        value && /^\S+@\S+$/.test(value) ? null : "Invalid email",
      password: (value) =>
        value && value.length > 3
          ? null
          : "Password must be grater than 3 characters",
    },
  });

  const { mutate: login, isLoading } = useMutation();

  console.log(form.errors);

  const onSubmitHandler = async (value: LoginType) => {
    const res = await login({
      url: "admin/auth/login",
      body: value,
      method: "POST",
    });

    if (res) {
      Cookies.set("token", JSON.stringify(res.token));

      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  return (
    <LoginForm form={form} onSubmit={onSubmitHandler} isLoading={isLoading} />
  );
};

export default withAuth(Login, "private");
