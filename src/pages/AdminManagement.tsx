import AddAdmin from "../components/AddAdmin";
import AdminTable from "../components/AdminTable";
import AuthLayout from "../components/AuthLayout";
import withAuth from "../hocs/withAuth";

const AdminManagement = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col gap-8">
        <AddAdmin />
        <AdminTable />
      </div>
    </AuthLayout>
  );
};

export default withAuth(AdminManagement);
