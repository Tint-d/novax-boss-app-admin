import { lazy, Suspense, ReactNode } from "react";
import Fallback from "../utils/Fallback";

const AuthLayout = lazy(() => import("./AuthLayout"));

interface PropsType {
  children: ReactNode;
}

const Wrapper = ({ children }: PropsType) => {
  return (
    <Suspense fallback={<Fallback fullHeight/>}>
      <AuthLayout>{children}</AuthLayout>
    </Suspense>
  );
};

export default Wrapper;
