/**
 * 设备工具
 * 获取设备信息、系统信息、权限等
 */

// 获取系统信息
export const getSystemInfo = (): UniApp.GetSystemInfoResult => {
  const systemInfo = uni.getSystemInfoSync();
  return systemInfo;
};

// 判断是否为小程序环境
export const isMiniProgram = (): boolean => {
  const systemInfo = getSystemInfo();
  return !!systemInfo.miniProgram;
};

// 判断是否为H5环境
export const isH5 = (): boolean => {
  const systemInfo = getSystemInfo();
  return systemInfo.platform === 'h5';
};

// 判断是否为APP环境
export const isApp = (): boolean => {
  const systemInfo = getSystemInfo();
  return systemInfo.platform === 'app-plus';
};

// 判断是否为iOS系统
export const isIOS = (): boolean => {
  const systemInfo = getSystemInfo();
  return systemInfo.system.indexOf('iOS') > -1;
};

// 判断是否为Android系统
export const isAndroid = (): boolean => {
  const systemInfo = getSystemInfo();
  return systemInfo.system.indexOf('Android') > -1;
};

// 获取设备型号
export const getDeviceModel = (): string => {
  const systemInfo = getSystemInfo();
  return systemInfo.model;
};

// 检查权限（仅APP端）
export const checkPermission = (permission: string): Promise<{ granted: boolean }> => {
  return new Promise((resolve) => {
    if (!isApp()) {
      resolve({ granted: true });
      return;
    }
    // @ts-ignore
    plus.android.requestPermissions(
      [permission],
      (res: any) => {
        resolve({ granted: res[0].granted === 'true' });
      },
      (err: any) => {
        resolve({ granted: false });
      }
    );
  });
};
