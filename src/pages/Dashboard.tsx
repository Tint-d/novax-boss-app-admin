import AuthLayout from "../components/AuthLayout";

import DailyBossTable from "../components/DailyBossTable";
import DailyNewUserTable from "../components/DailyNewUserTable";
import StatCard from "../components/StatCard";

const Dashboard = () => {
  return (
    <AuthLayout>
      <div className="flex gap-8 mb-8">
        <div className="flex gap-8 items-start">
          <StatCard name="Boss" quantity={1200} />
          <StatCard name="Boss" quantity={1200} />
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
