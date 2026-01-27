<template>
  <view class="custom-tabbar">
    <tabbar-item
      v-for="(item, index) in tabList"
      :key="index"
      :icon="item.icon"
      :selected-icon="item.selectedIcon"
      :text="item.text"
      :active="currentPage === item.pagePath"
      @click="handleTabClick(item.pagePath)"
    />
  </view>
</template>

<script setup lang="ts">
import { ref, onShow } from 'vue';
import tabbarItem from './tabbar-item.vue';

// Tabbar 配置（通用模板，使用者可替换图标/路径）
const tabList = ref([
  {
    pagePath: '/pages/home/index',
    text: '首页',
    icon: 'home',
    selectedIcon: 'home-filled',
  },
  {
    pagePath: '/pages/category/index',
    text: '分类',
    icon: 'apps',
    selectedIcon: 'apps-filled',
  },
  {
    pagePath: '/pages/cart/index',
    text: '购物车',
    icon: 'cart',
    selectedIcon: 'cart-filled',
  },
  {
    pagePath: '/pages/mine/index',
    text: '我的',
    icon: 'person',
    selectedIcon: 'person-filled',
  },
]);

// 当前页面路径（UniApp 原生方式获取，替代 vue-router）
const currentPage = ref('');

// 监听页面显示，更新 Tabbar 激活态（UniApp 原生 API）
onShow(() => {
  // 获取当前页面栈，拿到当前页面路径
  const pages = getCurrentPages();
  if (pages.length > 0) {
    // 拼接完整路径（和 tabList 中的 pagePath 匹配）
    const currentPageRoute = pages[pages.length - 1].route;
    currentPage.value = `/pages/${currentPageRoute}`;
  }
});

// Tabbar 点击跳转（纯 UniApp 原生 API）
const handleTabClick = (pagePath: string) => {
  // 避免重复点击当前页面触发报错
  if (currentPage.value === pagePath) return;

  // UniApp 原生切换 Tabbar 页面（必须配合 pages.json 配置 tabBar）
  uni.switchTab({
    url: pagePath,
    // 容错：跳转失败时用 redirectTo 兜底（兼容 H5 端）
    fail: () => {
      uni.redirectTo({ url: pagePath });
    }
  });
};
</script>

<style scoped lang="scss">
.custom-tabbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  background: #fff;
}
</style>
