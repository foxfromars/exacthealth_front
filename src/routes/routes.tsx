import { Routes, Route, } from "react-router-dom";
import Login from "../components/Pages/Login";
import NotFound from "../components/Pages/404";
import Signup from "../components/Pages/Signup";
import ContainerPage from "../components/Pages/ContainerPage";
import Home from "../components/Pages/Home/index";
import Medicines from "../components/Pages/Medicines/index";

export default function routes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<ContainerPage />}>
        <Route path="/" element={<Home />} />
        <Route path="/medicines" element={<Medicines />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
