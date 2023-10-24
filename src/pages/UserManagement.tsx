import AuthLayout from "../components/AuthLayout";
import LoginUserTable from "../components/LoginUserTable";
import withAuth from "../hocs/withAuth";

const UserManagement = () => {
  return (
    <div>
      <div className="flex flex-col gap-8">
        <LoginUserTable tableTitle="Facebook Login User" type="facebook" />
        <LoginUserTable tableTitle="Mail Login User" type="normal" />
      </div>
    </div>
  );
};

export default withAuth(UserManagement);
