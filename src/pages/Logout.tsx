import { Dialog, Group, Button, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconContext } from "react-icons";
import { TiWarningOutline } from "react-icons/ti";

interface LogoutProps {
  open: boolean;
  onLogout: () => void;
}

const Logout = ({ open, onLogout }: LogoutProps) => {
  const [opened, {  close }] = useDisclosure(open);
  return (
    <>
      
      <Dialog
        opened={opened}
        position={{ top: 20, left: 20 }}
        className="bg-black  w-1/4 h-1/3 rounded-lg flex justify-center align-middle  m-2 " 
      >
        <Group className="py-4">
          <Group className="flex justify-center align-middle">
            <IconContext.Provider value={{ size: "60px", color: "#ca8a04" }}>
              <TiWarningOutline />
            </IconContext.Provider>
          </Group>
          <Text className=" text-yellow-600 my-2" fz={30} fw={800}>
            Are you sure to logout ?
          </Text>
          <Button
            onClick={close}
            className="bg-red-950 text-white rounded-lg px-4 py-1 m-1"
          >
            Cancel
          </Button>
          <Button
            onClick={() => onLogout()}
            className="bg-green-950 text-white rounded-lg px-4 py-1 m-1"
          >
            Logout
          </Button>
        </Group>
      </Dialog>
    </>
  );
};

export default Logout;
