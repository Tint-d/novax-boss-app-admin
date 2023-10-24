/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDebouncedValue } from "@mantine/hooks";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { useGetDataQuery } from "../redux/api/adminApi";
import { UseTableReturnProps } from "../typings/type";
import useLogout from "./useLogout";

export default (endpoints: string, type: string): UseTableReturnProps => {
  const navigate = useNavigate();
  const logout = useLogout();

  const [page, setPage] = useState<number>(1);
  const [value, setValue] = useState<string>("");
  const [debounced] = useDebouncedValue(value, 500);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(0);
  const {
    data: _data,
    error,
    isLoading,
  } = useGetDataQuery(`${endpoints}?page=${page}&search=${debounced}`);

  if (error) {
    toast.error("Unknown error found. Please Login Again");
    navigate("/login");
    logout();
  }

  useEffect(() => {
    if (_data) {
      setData(_data[type]?.data);
      setTotal(_data[type]?.total);
      setTotalPage(_data[type]?.last_page);
    }
  }, [_data]);

  return {
    page,
    setPage,
    value,
    setValue,
    data,
    setData,
    total,
    totalPage,
    error,
    isLoading,
  };
};
