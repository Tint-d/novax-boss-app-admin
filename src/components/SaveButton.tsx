interface PropsType {
  type?: "submit" | "reset" | "button";
  name?: string;
}

const SaveButton = ({ type, name }: PropsType) => {
  return (
    <button
      type={type ?? "button"}
      className="w-[230px] h-[55px] text-white opacity-50 font-[400] bg-green-800 mx-auto rounded-[10px] text-[20px]"
    >
      {name ?? "Save"}
    </button>
  );
};

export default SaveButton;
