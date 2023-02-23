import { Routes, Route, Outlet, Link } from "react-router-dom";
import Login from "../components/Pages/Login";
import NotFound from "../components/Pages/404";
import Signup from "../components/Pages/Signup";
import ProtectRoutes from "./protectRoutes";
import Home from "../components/Pages/Home";

export default function routes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<ProtectRoutes />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
