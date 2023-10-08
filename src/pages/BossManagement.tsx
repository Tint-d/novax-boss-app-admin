import AddBoss from "../components/AddBoss";
import AuthLayout from "../components/AuthLayout";
import BossTable from "../components/BossTable";

const BossManagement = () => {
  return (
    <AuthLayout>
      <AddBoss />
      <BossTable />
    </AuthLayout>
  );
};

export default BossManagement;
