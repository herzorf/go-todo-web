<template>
  <el-form
    ref="formRef"
    :model="numberValidateForm"
    label-width="100px"
    :style="{ border: '1px solid red', display: 'flex' }"
  >
    <el-form-item label="todoName" prop="todoName">
      <el-input v-model.number="numberValidateForm.todoName" type="text" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm()">Submit</el-button>
    </el-form-item>
  </el-form>
</template>
<script setup lang="ts">
  import { reactive, ref } from "vue";
  import ajax from "../ajax";

  const formRef = ref();

  const numberValidateForm = reactive({
    todoName: "",
  });

  const submitForm = () => {
    console.log(numberValidateForm.todoName);
    ajax({ method: "post", url: "/api/v1/getTodo", data: numberValidateForm });
  };
</script>
<style scoped>
  .read-the-docs {
    color: #888;
  }
</style>
