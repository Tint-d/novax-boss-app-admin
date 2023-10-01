import AuthLayout from "../components/AuthLayout";
import DailyTable from "../components/DailyTable";

const Dashboard = () => {
  return (
    <AuthLayout>
      <div className="w-full h-[1000px] bg-tableBgColor">
        <h1>Dashboard</h1>
        <DailyTable/>
      </div>
    </AuthLayout>
  );
};

export default Dashboard;
