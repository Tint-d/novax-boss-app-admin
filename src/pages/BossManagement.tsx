import AddBoss from "../components/AddBoss";
import AuthLayout from "../components/AuthLayout";
import BossTable from "../components/BossTable";
import withAuth from "../hocs/withAuth";

const BossManagement = () => {
  return (
    <div>
      <AddBoss />
      <BossTable />
    </div>
  );
};

export default withAuth(BossManagement);
