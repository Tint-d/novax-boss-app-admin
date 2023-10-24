import AddAdmin from "../components/AddAdmin";
import AdminTable from "../components/AdminTable";
import AuthLayout from "../components/AuthLayout";
import withAuth from "../hocs/withAuth";

const AdminManagement = () => {
  return (
    <div>
      <div className="flex flex-col gap-8">
        <AddAdmin />
        <AdminTable />
      </div>
    </div>
  );
};

export default withAuth(AdminManagement);
