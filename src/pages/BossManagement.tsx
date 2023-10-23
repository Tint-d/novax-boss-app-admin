import AddBoss from "../components/AddBoss";
import AuthLayout from "../components/AuthLayout";
import BossTable from "../components/BossTable";
import withAuth from "../hocs/withAuth";

const BossManagement = () => {
  return (
    <AuthLayout>
      <AddBoss />
      <BossTable />
    </AuthLayout>
  );
};

export default withAuth(BossManagement);
