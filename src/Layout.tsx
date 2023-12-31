import { ChildrenType } from "./typings/type";

const Layout = ({ children }: ChildrenType) => {
  return (
    <div className="flex w-[100vw]">
      <div className="w-2/12"></div>
      <div className="w-10/12 h-[100vh] scrollbar-thumb-amber-500 scrollbar-thin overflow-y-scroll scrollbar-track-gray-300 bg-gray-100">
        {children}
      </div>
    </div>
  );
};

export default Layout;
