import { defineStore } from 'pinia';
import { login, getUserInfo } from '@/api/modules/user';
import { setToken, removeToken } from '@/utils/auth';

interface UserState {
  token: string | null;
  userInfo: {
    id?: number;
    name?: string;
    avatar?: string;
    roles?: string[];
  } | null;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: uni.getStorageSync('token') || null,
    userInfo: null,
  }),
  actions: {
    // 登录
    async loginAction(params: { username: string; password: string }) {
      const res = await login(params);
      this.token = res.token;
      setToken(res.token);
      // 登录后获取用户信息
      await this.getUserInfoAction();
    },
    // 获取用户信息
    async getUserInfoAction() {
      const res = await getUserInfo();
      this.userInfo = res;
    },
    // 退出登录
    logoutAction() {
      this.token = null;
      this.userInfo = null;
      removeToken();
      uni.redirectTo({ url: '/pages/login/index' });
    },
  },
});
