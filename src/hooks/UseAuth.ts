import { useContext } from "react";
import { AuthContext } from "../contexts/authProvider";
import tokenService from "../services/token.service";

export default function useAuth() {
  const token: string | null = localStorage.getItem("token");
  const { user, setUser } = useContext(AuthContext);

  async function verifyToken() {
    if (token) {
      await tokenService.get(token, setUser);
    }
  }

  //check if exist a token in localStorage but has no user in context
  if (!user && token) {
    verifyToken();
  }

  return { user, setUser };
}
