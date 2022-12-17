<template>
  <div>
    <ul>
      <li v-for="todo in todos">
        <span>{{ todo.name }}</span>
        <div>
          <el-button @click="toggle(todo.id)">{{
            todo.done ? "再做一次" : "完成"
          }}</el-button>
          <el-button type="danger" @click="deleteTodo(todo.id)">删除</el-button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
  import { reactive, ref } from "vue";
  import ajax from "../ajax";
  const todos = ref();
  ajax({ method: "get", url: "/api/v1/getTodos" }).then((res) => {
    const {
      data: { data },
    } = res;
    todos.value = data;
  });

  const toggle = (id: number) => {
    console.log(id);
    ajax({ method: "post", url: "/api/v1/toggleTodo", data: { id } }).then(
      (res) => {
        console.log(res.data);
      }
    );
  };
  const deleteTodo = (id: number) => {
    console.log(id);
    ajax({ method: "post", url: "/api/v1/deleteTodo", data: { id } }).then(
      (res) => {
        console.log(res);
      }
    );
  };
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
