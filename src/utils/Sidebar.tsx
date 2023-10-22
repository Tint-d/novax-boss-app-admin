import SidebarTab from "../components/SidebarTab";
import { BiLogOut } from "react-icons/bi";

import { SidebarTabs } from "../config/constant";

const Sidebar = () => {
  const onLogoutHandler = () => {
    alert("Logout");
  };

  return (
    <div className="min-w-[350px] h-full overflow-y-auto">
      <div className="w-full  flex flex-col px-5 py-10 gap-[20px] ">
        {SidebarTabs.map((data, index) => (
          <SidebarTab key={index} data={data} />
        ))}
      </div>
      <div className="h-[1px] w-[60%] bg-white bg-opacity-50 " />
      <div className="w-full  flex flex-col px-5 py-10 gap-[20px] ">
        <SidebarTab
          data={{
            label: "Logout",
            Icon: BiLogOut,
            link: "",
          }}
          onClick={onLogoutHandler}
        />
      </div>
    </div>
  );
};

export default Sidebar;
