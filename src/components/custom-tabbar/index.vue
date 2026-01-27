<template>
  <view class="custom-tabbar">
    <tabbar-item
      v-for="(item, index) in tabList"
      :key="index"
      :icon="item.icon"
      :selected-icon="item.selectedIcon"
      :text="item.text"
      :active="currentPath === item.pagePath"
      @click="handleTabClick(item.pagePath)"
    />
  </view>
</template>

<script setup lang="ts">
import { ref, onShow } from 'vue';
import tabbarItem from './tabbar-item.vue';
import { useRoute } from 'vue-router';

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

// 当前页面路径（匹配 Tabbar 激活态）
const route = useRoute();
const currentPath = ref(route.path);

// 监听页面显示，更新激活态（解决 Tabbar 切换后状态不一致）
onShow(() => {
  currentPath.value = route.path;
});

// Tabbar 点击跳转
const handleTabClick = (pagePath: string) => {
  uni.switchTab({
    url: pagePath,
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
