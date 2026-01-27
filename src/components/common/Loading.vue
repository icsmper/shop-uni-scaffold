<template>
  <view class="loading-container flex flex-col flex-center" v-if="show">
    <uni-load-more :status="status" color="#007aff"></uni-load-more>
    <view class="loading-text mt-10" v-if="text">{{ text }}</view>
  </view>
</template>

<script setup lang="ts">
interface Props {
  show?: boolean;
  status?: 'more' | 'loading' | 'noMore';
  text?: string;
}
const props = withDefaults(defineProps<Props>(), {
  show: true,
  status: 'loading',
  text: '',
});
</script>

<style scoped lang="scss">
.loading-container {
  padding: 20rpx 0;

  .loading-text {
    font-size: $font-size-sm;
    color: $color-text-placeholder;
  }
}
</style>
