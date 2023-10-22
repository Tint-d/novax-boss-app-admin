import StatCard from "./StatCard";
import { useGetDataQuery } from "../redux/api/adminApi";

const BossStatCard = () => {
  const { data } = useGetDataQuery("admin/stats/boss-address");
  const boss = data?.bossAddress;

  return <StatCard name="Boss" quantity={boss} />;
};

export default BossStatCard;
