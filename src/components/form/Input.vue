<template>
  <view class="input-container">
    <label class="input-label" v-if="label">{{ label }}</label>
    <uni-easyinput
      :type="type"
      :placeholder="placeholder"
      :value="value"
      :disabled="disabled"
      :clearable="clearable"
      :password="password"
      @input="handleInput"
      @blur="handleBlur"
      @focus="handleFocus"
    />
    <view class="input-error" v-if="error">{{ error }}</view>
  </view>
</template>

<script setup lang="ts">
interface Props {
  label?: string;
  type?: 'text' | 'number' | 'password' | 'email' | 'tel';
  placeholder?: string;
  value?: string | number;
  disabled?: boolean;
  clearable?: boolean;
  password?: boolean;
  error?: string;
}
const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '请输入',
  disabled: false,
  clearable: true,
  password: false,
  error: '',
});

const emit = defineEmits<{
  (e: 'input', value: string | number): void;
  (e: 'blur'): void;
  (e: 'focus'): void;
}>();

const handleInput = (value: string | number) => {
  emit('input', value);
};

const handleBlur = () => {
  emit('blur');
};

const handleFocus = () => {
  emit('focus');
};
</script>

<style scoped lang="scss">
.input-container {
  margin-bottom: 16rpx;

  .input-label {
    display: block;
    margin-bottom: 8rpx;
    font-size: $font-size-sm;
    color: $color-text;
  }

  .input-error {
    margin-top: 8rpx;
    font-size: $font-size-xs;
    color: $color-danger;
  }
}
</style>
