import { Routes, Route, Outlet, Link } from "react-router-dom";
import Login from "../components/Pages/Login";
import NotFound from "../components/Pages/404";
import Signup from "../components/Pages/Signup";

export default function routes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
