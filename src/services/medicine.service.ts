import {
  SERVER_URL
} from "../helpers/constants.helper"

import axios from "axios";

interface PostData {
  name?: string;
  type?: string;
  description?: string;
}

class MedicineService {
  async getAll(token: string, setAlert: any) {
    return await axios({
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: `${SERVER_URL}/medicine`,
    })
      .then((e) => {
        return e.data.response;
      })
      .catch((err) => {
        setAlert({
          isOpen: true,
          message: err.response.data.response,
          type: "error",
        });
        return null;
      });
  }

  async post(token: string, data: PostData, setAlert: any) {
    return await axios({
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
      url: `${SERVER_URL}/medicine`,
    })
      .then((e) => {
        setAlert({
          isOpen: true,
          message: e.data.reponse,
          type: "success",
        });
      })
      .catch((err) => {
        setAlert({
          isOpen: true,
          message: err.response.data.response,
          type: "error",
        });
      });
  }
}

export default new MedicineService();
