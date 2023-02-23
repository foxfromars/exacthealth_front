import useAuth from "../hooks/UseAuth";
import { Outlet, Navigate } from "react-router-dom";

export default function ProtectRoutes() {
  const { user } = useAuth();

  return (
    user 
      ? <Outlet />
      : <Navigate to="/login"/>
      )
}
