<template>
  <van-tabs v-model:active="active">
    <van-tab :title="item.text" v-for="item in list" :key="item.id"></van-tab>
  </van-tabs>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
// interface 可以用来约束一个函数，对象，以及类的结构和类型
//  <INavItem[]> 表示 list 数据为数组，数组的每一项需要符合 INavItem 接口的格式
interface INavItem {
  id: string;
  text: string;
}

const active = ref(0);
const list = ref<INavItem[]>([]);

axios({
  url: "/navList",
  method: "get",
}).then((res) => {
  console.log("频道数据", res.data);
  list.value = res.data.result;
});
</script>
