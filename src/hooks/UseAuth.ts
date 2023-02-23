import { useContext } from "react";
import { AuthContext } from "../contexts/authProvider";

export default function useAuth() {
  const { user, setUser } = useContext(AuthContext);
  return {user, setUser};
}
