<template>
  <uni-toast ref="toastRef" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { UniToast } from '@dcloudio/uni-ui/lib/uni-toast/uni-toast';

const toastRef = ref<UniToast>();

// 显示提示
const show = (title: string, type: 'success' | 'error' | 'warn' | 'info' = 'info', duration = 2000) => {
  toastRef.value?.show({
    title,
    type,
    duration,
  });
};

// 暴露方法
defineExpose({
  show,
});
</script>
