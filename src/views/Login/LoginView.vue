<template>
  <el-form ref="formRef" :model="formData" :rules="rules" label-width="auto">
    <el-form-item label="Username" prop="username">
      <el-input v-model="formData.username" />
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input type="password" v-model="formData.password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit" :loading="loading" :disabled="loading"
        >Login</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { login } from '@/api/login'
import { reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const emit = defineEmits(['loginSuccess'])
const loading = ref(false)
const formRef = ref<FormInstance>()
interface Form {
  username: string
  password: string
}
const formData = reactive<Form>({
  username: '',
  password: '',
})
const rules = reactive<FormRules<Form>>({
  username: [
    { required: true, message: 'Please input Username', trigger: 'blur' },
    { min: 11, max: 11, message: 'Length should be 11', trigger: 'blur' },
  ],
  password: [
    { required: true, message: 'Please input Password', trigger: 'blur' },
    { min: 8, max: 20, message: 'Length should be 8 to 20', trigger: 'blur' },
  ],
})
const onSubmit = async () => {
  if (!formRef.value) return
  await formRef.value.validate((valid) => {
    if (!valid) return
    loading.value = true
    login(formData)
      .then(({ headers, data }) => {
        ElNotification({
          title: 'Success',
          message: headers['lys-message'] ?? 'Login Success',
        })
        formRef.value?.resetFields()
        emit('loginSuccess', data, headers['lys-token'])
      })
      .catch(({ headers }) => {
        ElNotification({
          title: 'Error',
          message: headers['lys-message'] ?? 'Login Failed',
        })
      })
      .finally(() => {
        loading.value = false
      })
  })
}
</script>

<style scoped>
button {
  margin: auto;
  width: 100%;
  height: 2.5rem;
  margin-top: 1rem;
}
</style>
