<template>
  <router-view />
</template>

<script setup lang="ts">
import { onLaunch } from '@dcloudio/uni-app';

// 应用启动时执行
onLaunch(() => {
  console.log('App Launch');
});
</script>

<style lang="scss">
</style>
