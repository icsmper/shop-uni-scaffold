import { showToast } from '@/utils/index';

// 基础请求配置
const baseURL = import.meta.env.VITE_API_URL;
const timeout = 10000;

// 请求拦截器
const requestInterceptor = (config: UniApp.RequestOptions) => {
  // 添加令牌
  const token = uni.getStorageSync('token');
  if (token) {
    config.header = {
      ...config.header,
      Authorization: `Bearer ${token}`,
    };
  }
  // 添加请求加载中提示（可选）
  uni.showLoading({ title: '加载中...', mask: true });
  return config;
};

// 响应拦截器
const responseInterceptor = (response: UniApp.RequestSuccessCallbackResult) => {
  uni.hideLoading();
  const { data } = response;
  // 统一错误处理
  if (data.code !== 200) {
    showToast(data.msg || '请求失败', 'error');
    // 令牌过期处理
    if (data.code === 401) {
      uni.removeStorageSync('token');
      uni.redirectTo({ url: '/pages/login/index' });
    }
    return Promise.reject(data);
  }
  return data.data;
};

// 错误处理
const errorHandler = (err: any) => {
  uni.hideLoading();
  const errMsg = err.errMsg || '网络异常';
  showToast(errMsg, 'error');
  return Promise.reject(err);
};

// 核心请求函数
export const request = <T = any>(
  options: {
    url: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    data?: any;
    header?: any;
  }
): Promise<T> => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: baseURL + options.url,
      method: options.method,
      data: options.data || {},
      header: options.header || {},
      // 请求拦截
      ...requestInterceptor({
        url: baseURL + options.url,
        method: options.method,
        data: options.data || {},
        header: options.header || {},
      }),
      // 成功回调
      success: (res) => {
        responseInterceptor(res)
          .then((data) => resolve(data))
          .catch((err) => reject(err));
      },
      // 失败回调
      fail: (err) => reject(errorHandler(err)),
    });
  });
};

// 快捷请求方法
export const get = <T = any>(url: string, data?: any, header?: any) => {
  return request<T>({ url, method: 'GET', data, header });
};

export const post = <T = any>(url: string, data?: any, header?: any) => {
  return request<T>({ url, method: 'POST', data, header });
};
