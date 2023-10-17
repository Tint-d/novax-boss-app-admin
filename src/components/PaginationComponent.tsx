import { Group, Pagination } from "@mantine/core";

import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

interface PropsType {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

const PaginationComponent = ({ setPage, totalPages }: PropsType) => {
  return (
    <Pagination.Root
      total={totalPages}
      onChange={(e) => {
        setPage(e);
      }}
      classNames={{
        control:
          "rounded-full border-transparent text-textColor bg-rowColor text-[20px] w-10 h-10",
        dots: "text-white",
      }}
      styles={
        {
          // control: {
          //   "&.mantine-Pagination-control[data-active]": {
          //     backgroundColor: "#212121 !important",
          //     color: "#DCA715 !important",
          //   },
          // },
        }
      }
    >
      <Group>
        <Pagination.Previous
          icon={MdKeyboardDoubleArrowLeft}
          className="border !border-warining text-warining"
          component="button"
        />

        <Pagination.Items />

        <Pagination.Next
          component="button"
          icon={MdKeyboardDoubleArrowRight}
          className="border !border-warining text-warining"
        />
      </Group>
    </Pagination.Root>
  );
};

export default PaginationComponent;
