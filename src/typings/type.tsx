/* eslint-disable @typescript-eslint/no-explicit-any */
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
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
    AddAdminFormValues,
    GetPasswordType {}

export interface UseTableReturnProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setData: React.Dispatch<React.SetStateAction<any>>;
  data: any;
  total: number;
  totalPage: number;
  error: FetchBaseQueryError | SerializedError | undefined;
  isLoading: boolean;
}

export interface MutationQueryProps {
  url: string;
  body: object;
  method: string;
}

export interface GetPasswordType {
  adminKey?: string;
  id?: string;
}

export interface ModalFormValues extends GetPasswordType {}
