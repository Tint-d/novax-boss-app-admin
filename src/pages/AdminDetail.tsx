import { Group, Text } from "@mantine/core";
import { IconContext } from "react-icons";
import { FaUserCircle } from "react-icons/fa";

const AdminDetail = () => {
  return (
    <Group className="bg-gray-500 w-1/4 h-1/3 rounded-lg flex flex-col justify-center align-middle  m-2  py-4">
      <Group className="flex justify-center align-middle">
        <IconContext.Provider value={{ size: "60px" , color: '#ffffff' }}>
          <FaUserCircle />
        </IconContext.Provider>
      </Group>
      <Text className="text-white my-2 mx-auto  font-extrabold">
        Ko Han Thu Zaw
      </Text>
      <Text className="text-white my-2 mx-auto font-extrabold">
        kohanthuzaw@gmail.com
      </Text>
    </Group>
  );
};

export default AdminDetail;
