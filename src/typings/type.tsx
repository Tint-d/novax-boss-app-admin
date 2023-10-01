import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface ChildrenType {
  children: ReactNode;
}

export interface SideBarTabData {
  Icon: IconType;
  label: string;
  link: string;
}
