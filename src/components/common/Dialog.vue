<template>
  <uni-dialog
    ref="dialogRef"
    :title="title"
    :content="content"
    :show-cancel-button="showCancelButton"
    @confirm="handleConfirm"
    @cancel="handleCancel"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { UniDialog } from '@dcloudio/uni-ui/lib/uni-dialog/uni-dialog';

interface Props {
  title?: string;
  content?: string;
  showCancelButton?: boolean;
  confirmText?: string;
  cancelText?: string;
}
const props = withDefaults(defineProps<Props>(), {
  title: '提示',
  content: '',
  showCancelButton: true,
  confirmText: '确定',
  cancelText: '取消',
});

const dialogRef = ref<UniDialog>();
const emit = defineEmits<{
  (e: 'confirm'): void;
  (e: 'cancel'): void;
}>();

// 显示弹窗
const show = () => {
  dialogRef.value?.open();
};

// 关闭弹窗
const close = () => {
  dialogRef.value?.close();
};

// 确认回调
const handleConfirm = () => {
  emit('confirm');
};

// 取消回调
const handleCancel = () => {
  emit('cancel');
};

// 暴露方法
defineExpose({
  show,
  close,
});
</script>
