import { Box } from "@mui/material";
import { Email as EmailIcon } from "@mui/icons-material";
import { Outlet } from "react-router-dom";

import Navbar from "../../Navbar";
import NavbarItem from "../../BarItem";
import Alert from "../../Alert/";
import useAlert from "../../../hooks/UseAlert";

export default function ContainerPage() {
  const [alert, setAlert] = useAlert();

  return (
    <Box sx={{ display: "flex", bgcolor: "blue", minHeight: "100vh", minWith: "100%" }} >
      <Navbar>
        <NavbarItem text="Teste" icon={<EmailIcon/>}/>
        <NavbarItem text="Teste" />
      </Navbar>
      <Outlet />
      <Alert data={alert} setData={setAlert}/>
    </Box>
  );
}
