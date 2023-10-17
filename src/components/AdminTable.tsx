/* eslint-disable @typescript-eslint/no-explicit-any */

import { AiOutlineEye } from "react-icons/ai";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

import SearchTable from "./SearchTable";
// import { parsePasswordType } from "../libs/function";
import useTable from "../hooks/useTable";
import { GetPasswordType } from "../typings/type";
import ModalBox from "./ModalBox";
import SaveButton from "./SaveButton";
import TextInputComponent from "./TextInputComponent";
import useMutation from "../hooks/useMutation";

const AdminTable = () => {
  // const [page, setPage] = useState<number>(1);
  // const [value, setValue] = useState<string>("");
  // console.log(page);
  // console.log(value);

  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm<GetPasswordType>({
    initialValues: {
      adminKey: "",
      id: "",
    },
  });

  const {
    setPage,
    value,
    setValue,
    data,
    total,
    totalPage,
    setData,
    isLoading,
  } = useTable("admin/list", "admins");

  const { mutate: getPassword } = useMutation();

  const onGetPasswordHandler = async (values: GetPasswordType) => {
    const response = await getPassword({
      url: "admin/getPassword",
      method: "POST",
      body: values,
    });

    if (response) {
      const { admin } = response.data;

      setData((prevData: any) => {
        return prevData.map((data: any) => {
          if (data.id == admin?.id) data["password"] = admin?.password;
          return data;
        });
      });
    }
  };

  const theads = ["No", "Name", "Email", "Password", "Action"];
  const rows = data.map((element: any, index: number) => (
    <tr
      key={element.id}
      className={` ${index % 2 === 1 ? "bg-hightlightColor" : "bg-rowColor"}`}
    >
      <td className=" px-[20px]">
        <p className="text-textColor text-[20px] font-[400]">{element.id}</p>
      </td>
      <td className="text-white text-[18px] font-[400] px-[20px]">
        {element.name}
      </td>
      <td className="text-white text-[18px] font-[400] px-[20px]">
        {element.email}
      </td>
      <td className="text-white text-[18px] font-[400] px-[20px] w-[320px]">
        <div className="flex gap-3 items-center">
          {element.password ? element.password : "••••••••"}
          <button
            onClick={() => {
              form.setFieldValue("id", element.id);
              open();
            }}
            className=" flex justify-center items-center text-white opacity-50 hover:text-success active:text-opacity-80"
          >
            <AiOutlineEye className="text-[20px] " />
          </button>
        </div>
      </td>
      <td>
        <div className="flex gap-5">
          <button className="w-10 h-10 rounded-xl bg-warining flex justify-center items-center">
            <FiEdit className="text-[25px] text-hightlightColor" />
          </button>

          <button className="w-10 h-10 rounded-xl bg-red-800 flex justify-center items-center">
            <BsTrash className="text-[25px] text-white opacity-50" />
          </button>
        </div>
      </td>
    </tr>
  ));

  return (
    <>
      <SearchTable
        isLoading={isLoading}
        rows={rows}
        theads={theads}
        tableTitle={"Admin Table"}
        setPage={setPage}
        value={value}
        setValue={setValue}
        total={total}
        totalPages={totalPage}
      />

      <ModalBox
        onSubmitHandler={onGetPasswordHandler}
        opened={opened}
        close={close}
        form={form}
      >
        <TextInputComponent
          form={form}
          label="Admin Key"
          placeholder="key"
          value="adminKey"
        />

        <SaveButton type="submit" name="Get Password" />
      </ModalBox>
    </>
  );
};

export default AdminTable;
