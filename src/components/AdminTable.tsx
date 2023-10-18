/* eslint-disable @typescript-eslint/no-explicit-any */

import { AiOutlineEye } from "react-icons/ai";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

import SearchTable from "./SearchTable";
// import { parsePasswordType } from "../libs/function";
import useTable from "../hooks/useTable";
import { AdminUpdateType, GetPasswordType } from "../typings/type";
import ModalBox from "./ModalBox";
import SaveButton from "./SaveButton";
import TextInputComponent from "./TextInputComponent";
import useMutation from "../hooks/useMutation";
import useTableEdit from "../hooks/useTableEdit";
import EditAdmin from "./EditAdmin";
import DeleteAdmin from "./DeleteAdmin";

const AdminTable = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [deleteOpened, { open: deleteOpen, close: deleteClose }] =
    useDisclosure(false);

  const {
    form: updateForm,
    close: updateClose,
    open: updateOpen,
    opened: updateOpened,
  } = useTableEdit({
    id: "",
    adminKey: "",
    name: "",
    email: "",
    password: "",
  });

  const deleteForm = useForm<AdminUpdateType>({
    initialValues: {
      adminKey: "",
      id: "",
    },
  });
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

  const { mutate: getPassword, isLoading: getPasswordLoading } =
    useMutation(form);

  const onGetPasswordHandler = async (values: GetPasswordType) => {
    const response = await getPassword({
      url: "admin/getPassword",
      method: "POST",
      body: values,
    });

    if (response) {
      const { admin } = response;

      setData((prevData: any) => {
        return prevData.map((data: any) => {
          const newData = data;
          if (data.id == admin?.id) {
            return { ...newData, password: admin.password };
          }
          return data;
        });
      });
    }
  };

  const onEditHandler = (element: any) => {
    updateForm.setValues({
      id: element.id,
      adminKey: "",
      name: element.name,
      email: element.email,
      password: "",
    });

    updateOpen();
  };

  const onDeleteHandler = (id: string) => {
    deleteForm.setFieldValue("id", id);

    deleteOpen();
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
          <button
            onClick={() => onEditHandler(element)}
            className="w-10 h-10 rounded-xl bg-warining flex justify-center items-center"
          >
            <FiEdit className="text-[25px] text-hightlightColor" />
          </button>

          <button
            onClick={() => onDeleteHandler(element.id)}
            className="w-10 h-10 rounded-xl bg-red-800 flex justify-center items-center"
          >
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

        <SaveButton
          type="submit"
          name="Get Password"
          isLoading={getPasswordLoading}
        />
      </ModalBox>

      <EditAdmin
        setData={setData}
        form={updateForm}
        close={updateClose}
        opened={updateOpened}
      />

      <DeleteAdmin
        form={deleteForm}
        close={deleteClose}
        opened={deleteOpened}
      />
    </>
  );
};

export default AdminTable;
