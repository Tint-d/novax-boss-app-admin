import { ComponentType } from "react";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default <Props extends {}>(
  Component: ComponentType<Props>,
  type: "public" | "private" = "public"
) => {
  return (props: Props) => {
    const { token } = useAuth();

    console.log(token);

    if (type == "private" && token) return <Navigate to="/" />;
    else if (type == "public" && !token) return <Navigate to="/login" />;

    return <Component {...props} />;
  };
};
