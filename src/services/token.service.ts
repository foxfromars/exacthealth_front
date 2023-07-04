import axios from "axios";
import { SERVER_URL } from "../helpers/constants.helper";


class TokenService {
  async get(token: string, setUser: any) {
    return axios({
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: `${SERVER_URL}/token`,
    })
      .then((e) => {
        setUser(e.data.reponse);
        return true;
      })
      .catch(() => {
        return false;
      });
  }
}

export default new TokenService();
