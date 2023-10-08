import AddAdmin from "../components/AddAdmin";
import AdminTable from "../components/AdminTable";
import AuthLayout from "../components/AuthLayout";

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

export default AdminManagement;
