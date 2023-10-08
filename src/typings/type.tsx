import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface ChildrenType {
  children: ReactNode;
}

export interface AddBossFormValues {
  name?: string;
  number?: string;
  code?: string;
}

export interface SideBarTabData {
  Icon: IconType;
  label: string;
  link: string;
}

export interface AddBusinessTypeFormValues {
  english?: string;
  myanmar?: string;
}

export interface AddAdminFormValues {
  name?: string;
  email?: string;
  password?: string;
}

export interface FormValues
  extends AddBossFormValues,
    AddBusinessTypeFormValues,
    AddAdminFormValues {}
