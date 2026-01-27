<template>
  <BasicLayout navTitle="我的" showBack="false">
    <view class="mine-content flex flex-col flex-center">
      <view class="user-info" v-if="userInfo">
        <image class="avatar" :src="userInfo.avatar || '/static/images/avatar.png'" mode="aspectFill"></image>
        <text class="user-name">{{ userInfo.name }}</text>
      </view>
      <button class="login-btn" v-else @click="toLogin">请登录</button>
      <button class="logout-btn" v-if="userInfo" @click="logout">退出登录</button>
    </view>
    <template #tabbar>
      <custom-tabbar />
    </template>
  </BasicLayout>
</template>

<script setup lang="ts">
import BasicLayout from '@/components/layout/BasicLayout.vue';
import customTabbar from '@/components/custom-tabbar/index.vue';
import { useUserStore } from '@/store/modules/user';
import { useAuth } from '@/hooks/useAuth';

const userStore = useUserStore();
const { toLogin } = useAuth();

// 获取用户信息
const userInfo = userStore.userInfo;

// 退出登录
const logout = () => {
  uni.showModal({
    title: '提示',
    content: '确定要退出登录吗？',
    success: (res) => {
      if (res.confirm) {
        userStore.logoutAction();
      }
    },
  });
};
</script>

<style scoped lang="scss">
.mine-content {
  width: 100%;
  height: 100%;
  gap: 20rpx;

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10rpx;

    .avatar {
      width: 80rpx;
      height: 80rpx;
      border-radius: 50%;
    }

    .user-name {
      font-size: $font-size-md;
      color: $color-text;
    }
  }

  .login-btn, .logout-btn {
    padding: 10rpx 40rpx;
    border-radius: $border-radius-md;
  }

  .login-btn {
    background-color: $color-primary;
    color: #fff;
  }

  .logout-btn {
    background-color: $color-danger;
    color: #fff;
  }
}
</style>
