import AddBusinessType from "../components/AddBusinessType";
import AddCity from "../components/AddCity";
import AuthLayout from "../components/AuthLayout";
import BusinessTypeTable from "../components/BusinessTypeTable";
import CityTable from "../components/CityTable";

const CategoryManagement = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col gap-8">
        <div className="flex gap-8">
          <div className="w-1/2">
            <AddBusinessType />
          </div>
          <div className="w-1/2">
            <AddCity />
          </div>
        </div>
        <BusinessTypeTable />
        <CityTable />
      </div>
    </AuthLayout>
  );
};

export default CategoryManagement;
