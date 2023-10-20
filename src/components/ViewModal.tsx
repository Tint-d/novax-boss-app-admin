import { Modal } from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";

interface PropsType {
  opened: boolean;
  close: () => void;
  //   selectedItem: object;
  title: string;
  children: React.ReactNode;
}

const ViewModal = ({ opened, close, title, children }: PropsType) => {
  //   console.log(selectedItem);
  return (
    <Modal
      title={title}
      opened={opened}
      radius={"sm"}
      onClose={close}
      centered
      size={500}
      styles={{
        header: {
          background: "#171717",
          padding: "20px",
        
        },
        body: {
          color: "#676767",

          background: "#171717",
        },
        close: {
          color: "whitesmoke",
          background: "#171717",
        },
        title: {
          color: "#676767",
        },
      }}
      classNames={{
        title: "text-[20px]",
        body: "text-[20px] px-[20px] pt-3 pb-8 ",
      }}
    >
      {children}
    </Modal>
  );
};

export default ViewModal;
