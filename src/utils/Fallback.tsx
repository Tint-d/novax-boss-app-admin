import Lottie from "lottie-react";

import Loading from "../assets/loading.json";

const Fallback = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <Lottie className="w-[200px]" animationData={Loading} />
    </div>
  );
};

export default Fallback;
