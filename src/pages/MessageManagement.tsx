import AuthLayout from "../components/AuthLayout";
import AddMessage from "../components/AddMessage";
import MessageTable from "../components/MessageTable";
import withAuth from "../hocs/withAuth";

const MessageManagement = () => {
  return (
    <div>
      <AddMessage />
      <MessageTable />
    </div>
  );
};

export default withAuth(MessageManagement);
