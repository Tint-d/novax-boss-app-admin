import Lottie from "lottie-react";

import dataNotFound from "../assets/dataNotFound.json";
import loading from "../assets/loading.json";

interface PropsType {
  rows: JSX.Element[];
  theads: string[];
  isLoading: boolean;
}

const TableRowsContainer = ({ rows, theads, isLoading }: PropsType) => {
  return (
    <>
      {rows && rows.length > 0 ? (
        rows
      ) : (
        <tr>
          <td colSpan={theads.length}>
            <div className="w-full flex justify-center items-center ">
              <Lottie
                animationData={isLoading ? loading : dataNotFound}
                loop={true}
                className="h-[300px]"
              />
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default TableRowsContainer;
