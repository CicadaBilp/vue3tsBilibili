<template>
  <!-- <h1>bilibili 主页</h1>
  <router-link to="/video/1">点我去视频详情页</router-link> -->
  <!-- 头部 -->
  <AppHeader />
  <!-- 频道 -->
  <HomeChannel />
  <HomeSwiper />
</template>

<script setup lang="ts">
import AppHeader from "@/components/app-header.vue";
import HomeChannel from "./components/home-channel.vue";
import HomeSwiper from "./components/home-swipe.vue";
</script>
