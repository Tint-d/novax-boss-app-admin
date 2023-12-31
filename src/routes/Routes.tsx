import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Fallback from "../utils/Fallback";
import { paths } from "./path";
import BossManagement from "../pages/BossManagement";
import Dashboard from "../pages/Dashboard";
import UserManagement from "../pages/UserManagement";
import CategoryManagement from "../pages/CategoryManagement";
import AdminManagement from "../pages/AdminManagement";
const Register = lazy(() => import("../pages/Register"));
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
      path: paths.login,
      element: (
        <Suspense fallback={<Fallback />}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: paths.register,
      element: (
        <Suspense fallback={<Fallback />}>
          <Register />
        </Suspense>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
