import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import RequireAuth from "./components/RequireAuth";
import Welcome from "./components/Welcome";
import Login from "./pages/Login"

const App2 = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      >
        <Route element={<RequireAuth />}>
          <Route path="welcome" element={<Welcome />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App2;
