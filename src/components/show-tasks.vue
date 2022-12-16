<template>
  <div>
    <ul>
      <li v-for="todo in todos">
        <span>{{ todo.name }}</span>
        <el-button :disabled="todo.done">完成</el-button>
      </li>
    </ul>
  </div>
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
<style lang="scss" setup>
  ul {
    list-style-type: none;
    li {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      border: 1px solid grey;
      border-radius: 4px;
      align-items: center;
      padding: 8px;
    }
  }
</style>
