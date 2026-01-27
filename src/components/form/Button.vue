<template>
  <button
    class="custom-button"
    :class="[
      `button-${type}`,
      `button-size-${size}`,
      { 'button-disabled': disabled },
      { 'button-loading': loading },
    ]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <uni-load-more
      v-if="loading"
      status="loading"
      color="#fff"
      size="mini"
      class="loading-icon"
    ></uni-load-more>
    <text class="button-text" v-if="!loading">{{ text }}</text>
  </button>
</template>

<script setup lang="ts">
interface Props {
  text?: string;
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'default';
  size?: 'large' | 'medium' | 'small';
  disabled?: boolean;
  loading?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  text: '按钮',
  type: 'primary',
  size: 'medium',
  disabled: false,
  loading: false,
});

const emit = defineEmits<{
  (e: 'click'): void;
}>();

const handleClick = () => {
  emit('click');
};
</script>

<style scoped lang="scss">
.custom-button {
  border: none;
  border-radius: $border-radius-sm;
  font-size: $font-size-sm;
  transition: all 0.2s;

  &.button-primary {
    background-color: $color-primary;
    color: #fff;
  }

  &.button-success {
    background-color: $color-success;
    color: #fff;
  }

  &.button-warning {
    background-color: $color-warning;
    color: #fff;
  }

  &.button-danger {
    background-color: $color-danger;
    color: #fff;
  }

  &.button-default {
    background-color: #fff;
    color: $color-text;
    border: 1px solid $border-color;
  }

  &.button-size-large {
    padding: 12px 24px;
    font-size: $font-size-md;
  }

  &.button-size-medium {
    padding: 8px 16px;
    font-size: $font-size-sm;
  }

  &.button-size-small {
    padding: 4px 8px;
    font-size: $font-size-xs;
  }

  &.button-disabled {
    opacity: 0.6;
  }

  &.button-loading {
    opacity: 0.8;
  }

  .loading-icon {
    margin: 0 auto;
  }

  .button-text {
    display: block;
  }
}
</style>
