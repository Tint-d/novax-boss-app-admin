import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface PropsType {
  type?: "submit" | "reset" | "button";
  name?: string;
  isLoading: boolean;
}

const SaveButton = ({ type, name, isLoading }: PropsType) => {
  return (
    <button
      disabled={isLoading}
      type={type ?? "button"}
      className={`w-[230px] h-[55px] text-white opacity-50 font-[400] rounded-[10px] text-[20px]
      ${name == "Delete" ? "bg-red-800" : "bg-green-800"}`}
    >
      {isLoading ? (
        <AiOutlineLoading3Quarters className="text-[24px] mx-auto animate-spin" />
      ) : (
        name ?? "Save"
      )}
    </button>
  );
};

export default SaveButton;
