import { Routes, Route, } from "react-router-dom";

import ProtectRoutes from "./protectRoutes";

import Login from "../components/Pages/Login";
import NotFound from "../components/Pages/404";
import Signup from "../components/Pages/Signup";
import ContainerPage from "../components/Pages/ContainerPage";
import Home from "../components/Pages/Home/index";
import Medicines from "../components/Pages/Medicines/index";

import Alert from "../components/Alert";
import useAlert from "../hooks/UseAlert";


export default function routes() {
  const [alert, setAlert] = useAlert();

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectRoutes />}>
          <Route element={<ContainerPage />}>
            <Route path="/" element={<Home />} />
            <Route path="/medicines" element={<Medicines />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Alert data={alert} setData={setAlert} />
    </>
  );
}
