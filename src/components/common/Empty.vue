<template>
  <view class="empty-container flex flex-col flex-center">
    <uni-icons type="empty" size="60" color="#999"></uni-icons>
    <view class="empty-text mt-10">{{ text }}</view>
    <button class="empty-btn mt-10" @click="handleClick" v-if="showBtn">
      {{ btnText }}
    </button>
  </view>
</template>

<script setup lang="ts">
interface Props {
  text?: string;
  showBtn?: boolean;
  btnText?: string;
}
const props = withDefaults(defineProps<Props>(), {
  text: '暂无数据',
  showBtn: false,
  btnText: '重新加载',
});

const emit = defineEmits<{
  (e: 'click'): void;
}>();

const handleClick = () => {
  emit('click');
};
</script>

<style scoped lang="scss">
.empty-container {
  padding: 40rpx 0;

  .empty-text {
    font-size: $font-size-sm;
    color: $color-text-placeholder;
  }

  .empty-btn {
    background-color: $color-primary;
    color: #fff;
    border: none;
    border-radius: $border-radius-sm;
    padding: 8px 16px;
    font-size: $font-size-sm;
  }
}
</style>
