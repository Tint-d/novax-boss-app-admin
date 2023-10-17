import {
  Box,
  Button,
  Group,
  Image,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { BiLockAlt } from "react-icons/bi";
import { IconContext } from "react-icons";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiEye, PiEyeClosed } from "react-icons/pi";
import leftbg from "../assets/left-bg-image.png";
import logo from "../assets/logo.png";
import rightbg from "../assets/right-bg-image.png";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/api/authApi";

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [visible, { toggle }] = useDisclosure(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [login, { data, isError, error }] = useLoginMutation();
  const form = useForm<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (val: string) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val: string) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  useEffect(() => {
    if (data.token) {
      localStorage.setItem(
        "login",
        JSON.stringify({
          userLogin: true,
          token: data.token,
        })
      );
      navigate("/");
    }

    if (error) {
      setErrorMsg(error.data.message);
    }
  }, [data, isError]);

  const submitHandler = async (data: FormValues) => {
    const response = await login(data);
    console.log(response);
  };

  return (
    <Paper radius="md" p="xl" className="bg-black w-full h-screen">
      <Stack className="flex justify-between">
        <Stack>
          <Image src={leftbg} fit="contain" />
        </Stack>
        <Stack className="flex flex-col mt-20 space-y-10">
          <Stack>
            <Image src={logo} fit="contain" />
          </Stack>
          <Box maw={340} mx="auto">
            <form onSubmit={form.onSubmit((data) => submitHandler(data))}>
              <Group className="flex">
                <IconContext.Provider value={{ color: "white", size: "20" }}>
                  <MdOutlineMailOutline />
                </IconContext.Provider>

                <TextInput
                  required
                  variant="unstyled"
                  placeholder="Email"
                  {...form.getInputProps("email")}
                  error={form.errors.email && "Invalid email"}
                  className="appearance-none "
                />
              </Group>
              <p>{errorMsg}</p>
              <Group className="flex">
                <IconContext.Provider value={{ color: "white", size: "20" }}>
                  <BiLockAlt />
                </IconContext.Provider>

                <PasswordInput
                  required
                  variant="unstyled"
                  placeholder="Password"
                  {...form.getInputProps("password")}
                  error={
                    form.errors.password &&
                    "Password should include at least 6 characters"
                  }
                  visible={visible}
                  onVisibilityChange={toggle}
                  visibilityToggleIcon={({ reveal }) =>
                    reveal ? (
                      <PiEyeClosed
                        style={{
                          width: "var(--psi-icon-size)",
                          height: "var(--psi-icon-size)",
                        }}
                      />
                    ) : (
                      <PiEye
                        style={{
                          width: "var(--psi-icon-size)",
                          height: "var(--psi-icon-size)",
                        }}
                      />
                    )
                  }
                />
                <IconContext.Provider
                  value={{ color: "white", size: "20" }}
                ></IconContext.Provider>
              </Group>
              <Group className="flex justify-center align-middle">
                <Button
                  type="submit"
                  className="text-white border border-white rounded-md mx-auto px-10 py-2"
                >
                  Login
                </Button>
              </Group>
            </form>
          </Box>
        </Stack>
        <Stack className="h-screen flex flex-col justify-end ">
          <Image src={rightbg} />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Login;
