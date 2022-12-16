<template>
  <div>{{ todos }}</div>
</template>
<script setup lang="ts">
  import { reactive, ref } from "vue";
  import ajax from "../ajax";
  const todos = ref();
  const res = ajax({ method: "get", url: "/api/v1/getTodos" }).then((res) => {
    const {
      data: { data },
    } = res;
    todos.value = data;
  });
  console.log(res);

  // const {

  // } = res;
  // console.log(todos);
</script>
<style lang="css" setup></style>
