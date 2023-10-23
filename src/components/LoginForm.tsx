import { PasswordInput, TextInput } from "@mantine/core";
import { MdOutlineMail } from "react-icons/md";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import Logo from "../assets/logo.png";
import { UseFormReturnType } from "@mantine/form";
import { LoginType } from "../typings/type";

interface PropsType {
  form: UseFormReturnType<LoginType>;
  onSubmit: (value: LoginType) => void;
  isLoading: boolean;
}

const LoginForm = ({ form, onSubmit, isLoading }: PropsType) => {
  return (
    <div className="w-full h-screen py-[80px] bg-black flex flex-col items-center">
      <div className="w-[230px] h-[230px]">
        <img src={Logo} alt="logo" className="w-full h-full object-cover" />
      </div>

      <form
        onSubmit={form.onSubmit((value) => onSubmit(value))}
        className="w-[400px] flex flex-col mt-14 gap-10 items-center"
      >
        <TextInput
          placeholder="Email"
          icon={<MdOutlineMail size="1.6rem" />}
          className=" border-b-[1px] pb-2 border-white w-full "
          classNames={{
            input:
              " bg-transparent outline-none border-none text-white ml-4 text-[18px] placeholder:text-gray-400 placeholder:text-[18px]",
          }}
          {...form.getInputProps("email")}
        />
        <PasswordInput
          placeholder="Password"
          icon={<BiLockAlt size="1.6rem" />}
          className=" border-b-[1px] pb-2 border-white w-full"
          classNames={{
            input:
              " bg-transparent outline-none border-none placeholder:text-gray-500",
            innerInput: "text-white ml-4 text-[17px]",
          }}
          {...form.getInputProps("password")}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-[175px] h-[55px] rounded-[10px] border-[1px] border-white flex justify-center items-center
       text-white text-[19px]"
        >
          {isLoading ? (
            <AiOutlineLoading3Quarters className="text-[24px] mx-auto animate-spin" />
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
