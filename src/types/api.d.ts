// 接口返回通用类型
export interface ApiResponse<T = any> {
  code: number;
  msg: string;
  data: T;
}

// 用户相关类型
export interface UserInfo {
  id: number;
  name: string;
  avatar: string;
  roles: string[];
}

export interface LoginParams {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}
