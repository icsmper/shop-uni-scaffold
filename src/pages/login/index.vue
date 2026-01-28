<template>
  <PageLayout :navTitle="'登录'" :showBack="true">
    <view class="login-container flex flex-col flex-center">
      <Input
        label="用户名"
        v-model="username"
        placeholder="请输入用户名"
        :error="usernameError"
      />
      <Input
        label="密码"
        type="password"
        v-model="password"
        placeholder="请输入密码"
        :error="passwordError"
      />
      <Button
        text="登录"
        type="primary"
        size="large"
        :loading="loading"
        @click="handleLogin"
        class="login-btn"
      />
    </view>
  </PageLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PageLayout from '@/components/layout/PageLayout.vue';
import Input from '@/components/form/Input.vue';
import Button from '@/components/form/Button.vue';
import { useUserStore } from '@/store/modules/user';
import { validateEmpty } from '@/utils/validate';
import { showToast } from '@/utils/index';
import { useAuth } from '@/hooks/useAuth';

const userStore = useUserStore();
const { redirectAfterLogin } = useAuth();

// 表单数据
const username = ref('');
const password = ref('');
const loading = ref(false);
const usernameError = ref('');
const passwordError = ref('');

// 登录处理
const handleLogin = async () => {
  // 表单校验
  let isValid = true;
  if (validateEmpty(username.value)) {
    usernameError.value = '请输入用户名';
    isValid = false;
  } else {
    usernameError.value = '';
  }

  if (validateEmpty(password.value)) {
    passwordError.value = '请输入密码';
    isValid = false;
  } else {
    passwordError.value = '';
  }

  if (!isValid) return;

  try {
    loading.value = true;
    // 调用登录接口
    await userStore.loginAction({
      username: username.value,
      password: password.value,
    });
    showToast('登录成功', 'success');
    // 登录后跳转回原页面
    redirectAfterLogin();
  } catch (err) {
    showToast('登录失败，请检查用户名或密码', 'error');
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped lang="scss">
.login-container {
  width: 100%;
  max-width: 400rpx;
  margin: 0 auto;
  gap: 20rpx;

  .login-btn {
    margin-top: 40rpx;
  }
}
</style>
