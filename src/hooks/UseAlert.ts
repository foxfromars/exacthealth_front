import {
  useContext,
} from "react";

import {
  AlertContext
} from "../contexts/alertProvider";

export default function UseAlert() {
  const { alert, setAlert } = useContext(AlertContext);
  return [alert, setAlert];
}
