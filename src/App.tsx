import Routes from "./routes/Routes";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div className="font-engFont">
      <Toaster position="top-right"/>
      <Routes />
    </div>
  );
};

export default App;
