import AuthLayout from "../components/AuthLayout";
import BossStatCard from "../components/BossStatCard";

import DailyBossTable from "../components/DailyBossTable";
import DailyNewUserTable from "../components/DailyNewUserTable";

import UserStatCard from "../components/UserStatCard";

const Dashboard = () => {
  return (
    <AuthLayout>
      <div className="flex gap-8 mb-8">
        <div className="flex gap-8 items-start">
          <BossStatCard />
          <UserStatCard />
        </div>
        <div className="w-full h-[300px] bg-tableBgColor" />
      </div>
      <div className="w-full flex gap-8 pr-8">
        <DailyBossTable />
        <DailyNewUserTable />
      </div>
    </AuthLayout>
  );
};

export default Dashboard;
