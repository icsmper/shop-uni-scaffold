<template>
  <BasicLayout navTitle="首页" showBack="false">
    <!-- 页面业务内容 -->
    <view class="home-content flex flex-center">
      <text>首页内容区域（可替换为业务代码）</text>
    </view>
    <!-- 底部 Tabbar 插槽 -->
    <template #tabbar>
      <custom-tabbar />
    </template>
  </BasicLayout>
</template>

<script setup lang="ts">
import BasicLayout from '@/components/layout/BasicLayout.vue';
import customTabbar from '@/components/custom-tabbar/index.vue';
import { usePage } from '@/hooks/usePage';

const { usePullDownRefresh } = usePage();

// 下拉刷新
usePullDownRefresh(async () => {
  // 模拟请求数据
  await new Promise(resolve => setTimeout(resolve, 1000));
  uni.showToast({ title: '刷新成功', icon: 'success' });
});
</script>

<style scoped lang="scss">
.home-content {
  width: 100%;
  height: 100%;
}
</style>
