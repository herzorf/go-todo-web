<template>
  <el-form :model="formData" label-width="100px" :style="{ display: 'flex' }">
    <el-form-item label="name" prop="name">
      <el-input v-model="formData.name" type="text" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm()">Submit</el-button>
    </el-form-item>
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
<style scoped></style>
