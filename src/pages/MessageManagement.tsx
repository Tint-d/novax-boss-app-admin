
import AuthLayout from "../components/AuthLayout";
import AddMessage from "../components/AddMessage";
import MessageTable from "../components/MessageTable";

const MessageManagement = () => {
  return (
    <AuthLayout>
      <AddMessage />
      <MessageTable />
    </AuthLayout>
  );
};

export default MessageManagement;
