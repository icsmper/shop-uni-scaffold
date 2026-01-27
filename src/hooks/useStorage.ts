/**
 * 本地存储Hook
 * 封装uni.setStorage/uni.getStorage/uni.removeStorage
 */
export const useStorage = () => {
  // 设置存储
  const setStorage = <T = any>(key: string, value: T): Promise<void> => {
    return new Promise((resolve, reject) => {
      uni.setStorage({
        key,
        data: value,
        success: () => resolve(),
        fail: (err) => reject(err),
      });
    });
  };

  // 获取存储
  const getStorage = <T = any>(key: string): Promise<T | null> => {
    return new Promise((resolve, reject) => {
      uni.getStorage({
        key,
        success: (res) => resolve(res.data as T),
        fail: () => resolve(null), // 无数据时返回null
      });
    });
  };

  // 移除存储
  const removeStorage = (key: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      uni.removeStorage({
        key,
        success: () => resolve(),
        fail: (err) => reject(err),
      });
    });
  };

  // 清空存储
  const clearStorage = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      uni.clearStorage({
        success: () => resolve(),
        fail: (err) => reject(err),
      });
    });
  };

  return {
    setStorage,
    getStorage,
    removeStorage,
    clearStorage,
  };
};
