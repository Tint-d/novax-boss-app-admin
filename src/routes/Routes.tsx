import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import Fallback from "../utils/Fallback";
import { paths } from "./path";
import Wrapper from "../components/Wrapper";

const BossManagement = lazy(() => import("../pages/BossManagement"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const UserManagement = lazy(() => import("../pages/UserManagement"));
const CategoryManagement = lazy(() => import("../pages/CategoryManagement"));
const AdminManagement = lazy(() => import("../pages/AdminManagement"));
const MessageManagement = lazy(() => import("../pages/MessageManagement"));
const Login = lazy(() => import("../pages/Login"));

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: paths.dashboard,
      element: (
        <Wrapper>
          <Suspense fallback={<Fallback />}>
            <Dashboard />
          </Suspense>
        </Wrapper>
      ),
    },
    {
      path: paths.boss,
      element: (
        <Wrapper>
          <Suspense fallback={<Fallback />}>
            <BossManagement />
          </Suspense>
        </Wrapper>
      ),
    },
    {
      path: paths.user,
      element: (
        <Wrapper>
          <Suspense fallback={<Fallback />}>
            <UserManagement />
          </Suspense>
        </Wrapper>
      ),
    },
    {
      path: paths.category,
      element: (
        <Wrapper>
          <Suspense fallback={<Fallback />}>
            <CategoryManagement />
          </Suspense>
        </Wrapper>
      ),
    },
    {
      path: paths.admin,
      element: (
        <Wrapper>
          <Suspense fallback={<Fallback />}>
            <AdminManagement />
          </Suspense>
        </Wrapper>
      ),
    },
    {
      path: paths.message,
      element: (
        <Wrapper>
          <Suspense fallback={<Fallback />}>
            <MessageManagement />
          </Suspense>
        </Wrapper>
      ),
    },
    {
      path: paths.login,
      element: (
        <Suspense fallback={<Fallback fullHeight />}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "*",
      element: <Navigate to={"/"} />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
