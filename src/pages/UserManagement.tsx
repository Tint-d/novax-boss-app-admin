import AuthLayout from "../components/AuthLayout";
import LoginUserTable from "../components/LoginUserTable";

const UserManagement = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col gap-8">
        <LoginUserTable tableTitle="Facebook Login User" />
        <LoginUserTable tableTitle="Mail Login User" />
      </div>
    </AuthLayout>
  );
};

export default UserManagement;
