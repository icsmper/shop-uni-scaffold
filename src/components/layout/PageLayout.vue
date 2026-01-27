<template>
  <view class="page-layout">
    <!-- 顶部导航栏 -->
    <view class="layout-nav" :style="{ background: navBgColor }">
      <view class="nav-left" @click="handleBack">
        <uni-icons type="left" size="18" v-if="showBack"></uni-icons>
      </view>
      <view class="nav-title">{{ navTitle }}</view>
      <view class="nav-right">
        <slot name="right" />
      </view>
    </view>
    <!-- 页面内容区 -->
    <view class="layout-content">
      <slot />
    </view>
  </view>
</template>

<script setup lang="ts">
import { onBackPress } from '@dcloudio/uni-app';

// 组件 Props
interface Props {
  navTitle?: string;
  showBack?: boolean;
  navBgColor?: string;
}
const props = withDefaults(defineProps<Props>(), {
  navTitle: '页面标题',
  showBack: true,
  navBgColor: '#ffffff',
});

// 返回按钮逻辑
const handleBack = () => {
  uni.navigateBack({ delta: 1 });
};

// 监听系统返回键
onBackPress(() => {
  if (props.showBack) {
    handleBack();
    return true;
  }
  return false;
});
</script>

<style scoped lang="scss">
.page-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f5f5f5;

  .layout-nav {
    height: $nav-bar-height;
    line-height: $nav-bar-height;
    display: flex;
    align-items: center;
    padding: 0 16px;
    position: sticky;
    top: 0;
    z-index: 99;
    border-bottom: 1px solid $border-color;

    .nav-left, .nav-right {
      width: 40px;
      text-align: center;
    }

    .nav-title {
      flex: 1;
      text-align: center;
      font-size: $font-size-md;
      font-weight: 500;
    }
  }

  .layout-content {
    flex: 1;
    padding: 16px;
    overflow-y: auto;
  }
}
</style>
