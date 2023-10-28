import StatCard from "./StatCard";
import { useGetDataQuery } from "../redux/api/adminApi";

const TotalCategoryStatCard = () => {
  const { data } = useGetDataQuery("admin/address-category/list");
  const categories = data?.categories.total;
  return <StatCard name="Categories" quantity={categories} />;
};

export default TotalCategoryStatCard;
