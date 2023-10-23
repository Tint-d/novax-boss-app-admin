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
  id?: string;
  english?: string;
  myanmar?: string;
}

export interface AddAdminFormValues {
  name?: string;
  email?: string;
  password?: string;
  adminKey?: string;
}

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
  body: any;
  method: string;
}

export interface GetPasswordType {
  adminKey?: string;
  id?: string;
}

export interface AdminUpdateType {
  id?: string;
  adminKey?: string;
  name?: string;
  email?: string;
  password?: string;
}

export interface GenerateCodeResponseType {
  code: string;
}

export interface BaseApiResponseType extends GenerateCodeResponseType {
  success: boolean;
  message: string;
  data: object;
  token?: string;
  error: FetchBaseQueryError | SerializedError;
}

export interface GetAdminKeyType {
  adminKey?: string;
}

export interface EditBusinessType {
  category_name?: string;
  category_mm_name?: string;
}

export interface EditCityType {
  city_name?: string;
  city_mm_name?: string;
}

export interface EditAdminType {
  adminKey?: string;
  name?: string;
  email?: string;
  password?: string;
}

export interface MessageType {
  // id?: number;
  support_question?: string;
  support_answer?: string;
}

export interface BossCodeType {
  id?: string;
  boss_name?: string;
  boss_number?: string;
  code?: string;
}

export interface LoginType {
  email?: string;
  password?: string;
}

export interface ActionEditType
  extends EditBusinessType,
    EditCityType,
    EditAdminType,
    MessageType,
    BossCodeType {}

export interface ModalFormValues
  extends GetPasswordType,
    AddBusinessTypeFormValues,
    AdminUpdateType,
    GetAdminKeyType,
    ActionEditType {}

export interface FormValues
  extends AddBossFormValues,
    AddBusinessTypeFormValues,
    MessageType,
    AddAdminFormValues,
    GetPasswordType,
    ActionEditType {}

export interface AdminInfoType {
  id: string;
  name: string;
  email: string;
  password: string;
}
