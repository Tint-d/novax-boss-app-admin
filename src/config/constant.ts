import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineUsers } from "react-icons/hi";
import { IoBusinessOutline } from "react-icons/io5";
import { MdOutlineCategory, MdOutlineAdminPanelSettings } from "react-icons/md";

export const SidebarTabs = [
  {
    Icon: LuLayoutDashboard,
    label: "Dashboard Management",
    link: "/",
  },
  {
    Icon: IoBusinessOutline,
    label: "Boss Management",
    link: "/boss",
  },
  {
    Icon: HiOutlineUsers,
    label: "User Management",
    link: "/user",
  },
  {
    Icon: MdOutlineCategory,
    label: "Category Management",
    link: "/category",
  },
  {
    Icon: MdOutlineAdminPanelSettings,
    label: "Admin Management",
    link: "/admin",
  },
];
