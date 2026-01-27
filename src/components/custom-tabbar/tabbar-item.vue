<template>
  <view class="tabbar-item" @click="handleClick">
    <uni-icons
      :type="active ? selectedIcon : icon"
      :size="20"
      :color="active ? '#007aff' : '#666'"
    />
    <view class="tabbar-text" :style="{ color: active ? '#007aff' : '#666' }">
      {{ text }}
    </view>
  </view>
</template>

<script setup lang="ts">
interface Props {
  icon: string;
  selectedIcon: string;
  text: string;
  active: boolean;
}
const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'click'): void;
}>();

const handleClick = () => {
  emit('click');
};
</script>

<style scoped lang="scss">
.tabbar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;

  .tabbar-text {
    font-size: $font-size-xs;
    margin-top: 2px;
  }
}
</style>
