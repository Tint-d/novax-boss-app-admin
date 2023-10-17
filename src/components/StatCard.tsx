

interface PropsType {
  name: string;
  quantity: number;
}
const StatCard = ({ name, quantity }: PropsType) => {
  return (
    <div className="bg-tableBgColor w-[200px] h-[120px] rounded-[20px] mb-8 flex flex-col items-center justify-center">
      <p className="text-[25px] text-textColor">{name}</p>
      <p className="text-[30px] text-warining">{quantity}</p>
    </div>
  );
};

export default StatCard;
