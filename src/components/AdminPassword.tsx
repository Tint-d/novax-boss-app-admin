import { AiOutlineEye } from "react-icons/ai";
import { AdminInfoType, GetPasswordType } from "../typings/type";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import useMutation from "../hooks/useMutation";
import GetPasswordBox from "./GetPasswordBox";

interface PropsType {
  element: AdminInfoType;
  setData: React.Dispatch<any>;
}

const AdminPassword = ({ element, setData }: PropsType) => {
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm<GetPasswordType>({
    initialValues: {
      adminKey: "",
      id: "",
    },
  });

  const { mutate: getPassword, isLoading } = useMutation(form);

  const onGetPasswordHandler = async (values: GetPasswordType) => {
    const response = await getPassword({
      url: "admin/getPassword",
      method: "POST",
      body: values,
    });

    if (response) {
      const { admin } = response;

      setData((prevData: AdminInfoType[]) => {
        return prevData.map((data: AdminInfoType) => {
          const newData = data;
          if (data.id == admin?.id) {
            return { ...newData, password: admin.password };
          }
          return data;
        });
      });

      close();
    }
  };

  return (
    <>
      <div className="flex gap-3 items-center">
        {element.password ? (
          element.password
        ) : (
          <>
            ••••••••
            <button
              onClick={() => {
                form.setFieldValue("id", element.id);
                open();
              }}
              className=" flex justify-center items-center text-white opacity-50 hover:text-success active:text-opacity-80"
            >
              <AiOutlineEye className="text-[20px] " />
            </button>
          </>
        )}
      </div>

      <GetPasswordBox
        close={close}
        form={form}
        isLoading={isLoading}
        onGetPasswordHandler={onGetPasswordHandler}
        opened={opened}
      />
    </>
  );
};

export default AdminPassword;
