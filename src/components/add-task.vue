<template>
  <el-form :model="formData" :style="{ display: 'flex' }" class="todo-form">
    <el-row :gutter="20" :style="{ width: '100%' }">
      <el-col :span="20">
        <el-form-item label="" prop="name">
          <el-input size="large" v-model="formData.name" type="text" />
        </el-form-item>
      </el-col>
      <el-col :span="2">
        <el-form-item>
          <el-button type="primary" size="large" @click="submitForm()"
            >Submit</el-button
          >
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>
<script setup lang="ts">
  import { reactive, ref } from "vue";
  import ajax from "../ajax";

  const formData = reactive({
    name: "",
  });

  const submitForm = () => {
    ajax({
      method: "post",
      url: "/api/v1/addTodo",
      data: {
        done: false,
        name: formData.name,
      },
    }).then((res) => {
      console.log(res);
    });
  };
</script>
<style scoped lang="scss">
  .todo-form {
    min-width: 500px;
  }
</style>
