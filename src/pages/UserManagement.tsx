import AuthLayout from "../components/AuthLayout";
import LoginUserTable from "../components/LoginUserTable";
import withAuth from "../hocs/withAuth";

const UserManagement = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col gap-8">
        <LoginUserTable tableTitle="Facebook Login User" type="facebook" />
        <LoginUserTable tableTitle="Mail Login User" type="normal" />
      </div>
    </AuthLayout>
  );
};

export default withAuth(UserManagement);
