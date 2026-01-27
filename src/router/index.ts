/**
 * 路由封装
 * 统一处理路由跳转、参数传递、权限校验等
 */
import { useAuth } from '@/hooks/useAuth';

const { isLogin, toLogin } = useAuth();

// 路由跳转封装
export const navigateTo = (url: string, checkLogin = false) => {
  if (checkLogin && !isLogin()) {
    toLogin(url);
    return;
  }
  uni.navigateTo({ url });
};

// 重定向封装
export const redirectTo = (url: string, checkLogin = false) => {
  if (checkLogin && !isLogin()) {
    toLogin(url);
    return;
  }
  uni.redirectTo({ url });
};

// Tabbar切换封装
export const switchTab = (url: string, checkLogin = false) => {
  if (checkLogin && !isLogin()) {
    toLogin(url);
    return;
  }
  uni.switchTab({ url });
};

// 返回封装
export const navigateBack = (delta = 1) => {
  uni.navigateBack({ delta });
};

// 带参数跳转
export const navigateToWithParams = (url: string, params: Record<string, any>, checkLogin = false) => {
  const query = Object.entries(params)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');
  const fullUrl = `${url}?${query}`;
  navigateTo(fullUrl, checkLogin);
};
