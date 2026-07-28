import {api} from "../axios"
import { LoginResponse,LoginRequest } from "./loginWithPassword.interface"
import { API_ENDPOINTS } from "../../API.Constants";
export const loginWithPassword = {
  loginUser: async (
    payload: LoginRequest
  ): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>(
      API_ENDPOINTS.USER.LOGIN_USER,
      payload
    );

    return response.data;
  },
};
