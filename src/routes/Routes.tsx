import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import Fallback from "../utils/Fallback";
import { paths } from "./path";

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
        <Suspense fallback={<Fallback />}>
          <Dashboard />
        </Suspense>
      ),
    },
    {
      path: paths.boss,
      element: (
        <Suspense fallback={<Fallback />}>
          <BossManagement />
        </Suspense>
      ),
    },
    {
      path: paths.user,
      element: (
        <Suspense fallback={<Fallback />}>
          <UserManagement />
        </Suspense>
      ),
    },
    {
      path: paths.category,
      element: (
        <Suspense fallback={<Fallback />}>
          <CategoryManagement />
        </Suspense>
      ),
    },
    {
      path: paths.admin,
      element: (
        <Suspense fallback={<Fallback />}>
          <AdminManagement />
        </Suspense>
      ),
    },
    {
      path: paths.message,
      element: (
        <Suspense fallback={<Fallback />}>
          <MessageManagement />
        </Suspense>
      ),
    },
    {
      path: paths.login,
      element: (
        <Suspense fallback={<Fallback />}>
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
