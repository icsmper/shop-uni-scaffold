import { useUserStore } from '@/store/modules/user';

/**
 * 权限Hook
 * 处理登录态、权限校验等
 */
export const useAuth = () => {
  const userStore = useUserStore();

  // 检查是否登录
  const isLogin = (): boolean => {
    return !!userStore.token;
  };

  // 校验权限（示例：角色权限）
  const checkPermission = (roles: string[] = []): boolean => {
    if (!isLogin()) return false;
    if (roles.length === 0) return true; // 无权限要求时默认通过
    const userRoles = userStore.userInfo?.roles || [];
    return roles.some(role => userRoles.includes(role));
  };

  // 跳转到登录页
  const toLogin = (redirectUrl?: string) => {
    const url = redirectUrl ? `/pages/login/index?redirect=${encodeURIComponent(redirectUrl)}` : '/pages/login/index';
    uni.redirectTo({ url });
  };

  // 登录后跳转回原页面
  const redirectAfterLogin = () => {
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - 1];
    const redirect = currentPage.options.redirect as string;
    if (redirect) {
      uni.redirectTo({ url: decodeURIComponent(redirect) });
    } else {
      uni.switchTab({ url: '/pages/home/index' });
    }
  };

  return {
    isLogin,
    checkPermission,
    toLogin,
    redirectAfterLogin,
  };
};
