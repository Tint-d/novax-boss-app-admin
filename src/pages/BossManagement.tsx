import AddBoss from "../components/AddBoss";
import AuthLayout from "../components/AuthLayout";
import BossTable from "../components/BossTable";


const BossManagement = () => {
  return (
    <AuthLayout>
      <div className="p-8">
        <AddBoss/>
        <BossTable />
      </div>
    </AuthLayout>
  );
};

export default BossManagement;
