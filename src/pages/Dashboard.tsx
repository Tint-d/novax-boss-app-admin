import BossStatCard from "../components/BossStatCard";

import DailyBossTable from "../components/DailyBossTable";
import DailyNewUserTable from "../components/DailyNewUserTable";
import TotalAdminStatCard from "../components/TotalAdminStatCard";
import TotalCategoryStatCard from "../components/TotalCategoryStatCard";

import UserStatCard from "../components/UserStatCard";
import withAuth from "../hocs/withAuth";

const Dashboard = () => {
  return (
    <div>
      <div className="flex gap-8 mb-8 items-start">
        <BossStatCard />
        <UserStatCard />
        <TotalAdminStatCard />
        <TotalCategoryStatCard />
      </div>
      <div className="w-full flex gap-8 pr-8">
        <DailyBossTable />
        <DailyNewUserTable />
      </div>
    </div>
  );
};

export default withAuth(Dashboard);
