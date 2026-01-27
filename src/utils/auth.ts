/**
 * 权限工具
 * 处理令牌的存储、获取、删除
 */
const TOKEN_KEY = 'token';

// 设置令牌
export const setToken = (token: string): void => {
  uni.setStorageSync(TOKEN_KEY, token);
};

// 获取令牌
export const getToken = (): string | null => {
  return uni.getStorageSync(TOKEN_KEY) || null;
};

// 删除令牌
export const removeToken = (): void => {
  uni.removeStorageSync(TOKEN_KEY);
};

// 检查令牌是否过期（示例：可根据实际业务逻辑实现）
export const isTokenExpired = (): boolean => {
  const token = getToken();
  if (!token) return true;
  // 此处可解析JWT令牌，判断过期时间
  return false;
};
