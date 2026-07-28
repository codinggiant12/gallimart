export interface LoginRequest {
  email: string;
  password: string;
}

export interface User {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  refreshToken: string;
}

export interface LoginResponseData {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: LoginResponseData;
}
