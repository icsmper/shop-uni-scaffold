<template>
  <PageLayout :navTitle="'商品详情'">
    <view class="detail-content flex flex-col gap-20">
      <!-- 商品图片 -->
      <image class="goods-img" src="/static/images/goods-demo.png" mode="widthFix"></image>
      <!-- 商品信息 -->
      <view class="goods-info">
        <text class="goods-name text-ellipsis-2">商品名称示例 - 脚手架演示商品</text>
        <text class="goods-price theme-primary">¥99.00</text>
        <text class="goods-desc">商品描述示例：此为脚手架演示商品，实际项目替换为业务内容</text>
      </view>
      <!-- 操作按钮 -->
      <view class="goods-actions flex gap-10">
        <Button text="加入购物车" type="warning" size="large" flex="1" />
        <Button text="立即购买" type="primary" size="large" flex="1" />
      </view>
    </view>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '@/components/layout/PageLayout.vue';
import Button from '@/components/form/Button.vue';
import { onLoad } from '@dcloudio/uni-app';

// 接收页面参数
onLoad((options) => {
  console.log('商品详情页参数：', options);
  // 实际项目中可通过options获取商品ID，请求商品详情数据
});
</script>

<style scoped lang="scss">
.detail-content {
  padding: 0;

  .goods-img {
    width: 100%;
    height: auto;
  }

  .goods-info {
    padding: 16rpx;
    gap: 10rpx;
    display: flex;
    flex-direction: column;

    .goods-name {
      font-size: $font-size-md;
      font-weight: 500;
      color: $color-text;
    }

    .goods-price {
      font-size: $font-size-lg;
      font-weight: bold;
    }

    .goods-desc {
      font-size: $font-size-sm;
      color: $color-text-secondary;
      line-height: 1.5;
    }
  }

  .goods-actions {
    position: sticky;
    bottom: 0;
    padding: 16rpx;
    background: #fff;
    border-top: 1px solid $border-color;
    z-index: 9;
  }
}
</style>
