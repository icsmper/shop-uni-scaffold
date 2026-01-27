import { ref, onMounted, onUnmounted } from 'vue';
import { onPullDownRefresh, onReachBottom, stopPullDownRefresh } from '@dcloudio/uni-app';

/**
 * 页面Hook
 * 处理下拉刷新、上拉加载等页面交互
 */
export const usePage = () => {
  // 下拉刷新
  const usePullDownRefresh = (callback: () => void | Promise<void>) => {
    onMounted(() => {
      onPullDownRefresh(async () => {
        try {
          await callback();
        } finally {
          stopPullDownRefresh();
        }
      });
    });
  };

  // 上拉加载
  const useReachBottom = (callback: () => void | Promise<void>, delay = 500) => {
    let isLoading = false;
    onMounted(() => {
      onReachBottom(async () => {
        if (isLoading) return;
        isLoading = true;
        try {
          await callback();
        } finally {
          setTimeout(() => {
            isLoading = false;
          }, delay);
        }
      });
    });
  };

  // 页面跳转
  const navigateTo = (url: string) => {
    uni.navigateTo({ url });
  };

  const redirectTo = (url: string) => {
    uni.redirectTo({ url });
  };

  const switchTab = (url: string) => {
    uni.switchTab({ url });
  };

  const navigateBack = (delta = 1) => {
    uni.navigateBack({ delta });
  };

  return {
    usePullDownRefresh,
    useReachBottom,
    navigateTo,
    redirectTo,
    switchTab,
    navigateBack,
  };
};
