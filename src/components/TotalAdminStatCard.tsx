import { useGetDataQuery } from "../redux/api/adminApi";
import StatCard from "./StatCard";

const TotalAdminStatCard = () => {
  const { data } = useGetDataQuery("admin/list");
  const admins = data?.admins.total;
  return <StatCard name="Admins" quantity={admins} />;
};

export default TotalAdminStatCard;
