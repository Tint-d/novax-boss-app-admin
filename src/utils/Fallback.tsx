import Lottie from "lottie-react";

import Loading from "../assets/loading.json";

interface PropsType {
  fullHeight?: boolean;
}

const Fallback = ({ fullHeight }: PropsType) => {
  return (
    <div
      className={`w-full flex justify-center items-center bg-black ${
        fullHeight ? "h-screen" : "h-full"
      }`}
    >
      <Lottie className="w-[200px]" animationData={Loading} />
    </div>
  );
};

export default Fallback;
