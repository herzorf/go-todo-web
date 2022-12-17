<template>
  <el-form
    :model="formData"
    ref="formRef"
    :style="{ display: 'flex' }"
    class="todo-form"
    @submit.prevent
  >
    <el-row :gutter="20" :style="{ width: '100%' }">
      <el-col :span="20">
        <el-form-item :rules="[{ required: true }]" prop="name">
          <el-input size="large" v-model="formData.name" type="text" />
        </el-form-item>
      </el-col>
      <el-col :span="2">
        <el-form-item>
          <el-button type="primary" size="large" @click="submitForm(formRef)"
            >Submit</el-button
          >
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>
<script setup lang="ts">
  import { FormInstance } from "element-plus/es/components/form";
  import { reactive, ref } from "vue";
  import { useTodoStore } from "../store/todoStore";
  const todosStroe = useTodoStore();
  const formRef = ref<FormInstance>();
  const formData = reactive({
    name: "",
  });

  const submitForm = (formRef: FormInstance | undefined) => {
    if (!formRef) return;
    formRef.validate((valid) => {
      valid &&
        todosStroe.addTodo(formData.name).then((res) => {
          todosStroe.getTodos();
          formRef.resetFields();
        });
    });
  };
</script>
<style scoped lang="scss">
  .todo-form {
    min-width: 500px;
  }
</style>
