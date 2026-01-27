import { get, post } from '../request';

// 登录接口
export const login = (params: { username: string; password: string }) => {
  return post<{ token: string }>('/api/user/login', params);
};

// 获取用户信息
export const getUserInfo = () => {
  return get<{ id: number; name: string; avatar: string }>('/api/user/info');
};
