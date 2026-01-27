import { ref, onUnmounted } from 'vue';
import { request, get, post } from '@/api/request';

// 请求Hook（防抖+加载+错误处理）
export const useRequest = <T = any>(
  apiFn: (...args: any[]) => Promise<T>,
  options?: {
    immediate?: boolean; // 是否立即执行
    debounce?: number; // 防抖时长（ms）
    onSuccess?: (data: T) => void;
    onError?: (err: any) => void;
  }
) => {
  const { immediate = true, debounce = 0, onSuccess, onError } = options || {};

  const data = ref<T | null>(null);
  const loading = ref(false);
  const error = ref<any>(null);

  // 防抖函数
  let timer: NodeJS.Timeout | null = null;
  const debounceFn = (fn: () => void) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(fn, debounce);
  };

  // 执行请求
  const run = async (...args: any[]) => {
    loading.value = true;
    error.value = null;
    try {
      const res = await apiFn(...args);
      data.value = res;
      onSuccess?.(res);
      return res;
    } catch (err) {
      error.value = err;
      onError?.(err);
      throw err;
    } finally {
      loading.value = false;
    }
  };

  // 防抖执行
  const runDebounce = (...args: any[]) => {
    if (debounce > 0) {
      debounceFn(() => run(...args));
    } else {
      run(...args);
    }
  };

  // 取消防抖
  const cancel = () => {
    if (timer) clearTimeout(timer);
  };

  // 立即执行
  if (immediate) {
    runDebounce();
  }

  // 组件卸载时取消防抖
  onUnmounted(() => cancel());

  return {
    data,
    loading,
    error,
    run,
    runDebounce,
    cancel,
  };
};
