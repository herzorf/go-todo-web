<template>
  <div>
    <ul>
      <li v-for="todo in todosStroe.todos">
        <span>{{ todo.name }}</span>
        <div>
          <el-button @click="todosStroe.toggleTodo(todo.id)">{{
            todo.done ? "再做一次" : "完成"
          }}</el-button>
          <el-button type="danger" @click="todosStroe.deleteTodo(todo.id)"
            >删除</el-button
          >
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
  import { useTodoStore } from "../store/todoStore";
  const todosStroe = useTodoStore();
  todosStroe.getTodos();
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
