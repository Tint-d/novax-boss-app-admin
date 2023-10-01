import { IoPersonCircleOutline } from "react-icons/io5";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false);

  console.log(opened);

  return (
    <div className="w-full h-[80px] flex justify-between items-center px-5">
      <p className="text-[25px] text-warining font-[600]">Boss Networks</p>

      <button onClick={open} className=" text-white w-auto">
        <IoPersonCircleOutline size={38} />
      </button>

      <Modal
        opened={opened}
        onClose={close}
        centered
        size={482}
        styles={{
          header: {
            background: "#171717",
          },
          body: {
            background: "#171717",
          },
          close: {
            color: "white",
            background: "transparent",
          },
        }}
      >
        <div className="w-full flex items-center gap-[20px] py-[30px] justify-center flex-col text-white ">
          <IoPersonCircleOutline size={100} />
          <p className="text-[25px] font-[600]">Ko Han Thu</p>
          <p className="text-[25px] font-[600]">kohanthu@gmail.com</p>
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
