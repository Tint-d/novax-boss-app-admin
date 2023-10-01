import { ReactNode } from "react";

import Navbar from "../utils/Navbar";
import Sidebar from "../utils/Sidebar";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-screen bg-red-300">
      <Navbar />

      <div className="w-full h-[calc(100vh-80px)] flex">
        <Sidebar />
        <div className="w-full h-full overflow-y-auto ">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
