import React from "react";
import StatCard from "./StatCard";
import { useGetDataQuery } from "../redux/api/adminApi";

const UserStatCard = () => {
    const { data } = useGetDataQuery("admin/stats/users");
    const users = data?.users;
  return <StatCard name="Users" quantity={users} />;
};

export default UserStatCard;
