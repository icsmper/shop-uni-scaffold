<template>
  <BasicLayout navTitle="分类" showBack="false">
    <view class="category-content flex flex-center">
      <text>分类页面内容</text>
    </view>
    <template #tabbar>
      <custom-tabbar />
    </template>
  </BasicLayout>
</template>

<script setup lang="ts">
import BasicLayout from '@/components/layout/BasicLayout.vue';
import customTabbar from '@/components/custom-tabbar/index.vue';
</script>

<style scoped lang="scss">
.category-content {
  width: 100%;
  height: 100%;
}
</style>
