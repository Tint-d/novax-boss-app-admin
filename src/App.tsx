import Routes from "./routes/Routes";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div className="font-engFont">
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: "#166534",
              color: "whitesmoke",
            },
          },
          error: {
            style: {
              background: "#991B1B",
              color: "whitesmoke",
            },
          },
        }}
      />
      <Routes />
    </div>
  );
};

export default App;
