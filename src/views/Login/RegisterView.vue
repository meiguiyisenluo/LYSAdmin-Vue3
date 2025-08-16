<template>
  <el-form ref="formRef" :model="formData" :rules="rules" label-width="auto">
    <el-form-item label="Username" prop="username">
      <el-input v-model="formData.username" />
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input type="password" v-model="formData.password" />
    </el-form-item>
    <el-form-item label="Nickname" prop="nickname">
      <el-input v-model="formData.nickname" />
    </el-form-item>
    <el-form-item label="Email" prop="email">
      <el-input v-model="formData.email" />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="onSubmit"
        :loading="registerLoading"
        :disabled="registerLoading"
        >Register</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { register } from '@/api/login'
import { reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const emit = defineEmits(['registerSuccess'])
const registerLoading = ref(false)
const formRef = ref<FormInstance>()
interface RegisterForm {
  username: string
  password: string
  nickname: string
  email: string
}
const formData = reactive<RegisterForm>({
  username: '',
  password: '',
  nickname: '',
  email: '',
})
const rules = reactive<FormRules<RegisterForm>>({
  username: [
    { required: true, message: 'Please input Username', trigger: 'blur' },
    { min: 11, max: 11, message: 'Length should be 11', trigger: 'blur' },
  ],
  password: [
    { required: true, message: 'Please input Password', trigger: 'blur' },
    { min: 8, max: 20, message: 'Length should be 8 to 20', trigger: 'blur' },
  ],
  email: [
    { required: true, message: 'Please input Email', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          callback()
        } else {
          callback(new Error('Please input validate Email'))
        }
      },
      trigger: 'blur',
    },
  ],
})
const onSubmit = async () => {
  if (!formRef.value) return
  await formRef.value.validate((valid) => {
    if (!valid) return
    registerLoading.value = true
    register(formData)
      .then((res: any) => {
        if (res?.status !== '200') {
          return ElNotification({
            title: 'Error',
            message: res?.message,
          })
        }
        ElNotification({
          title: 'Success',
          message: 'Register Success, Please Login',
        })
        formRef.value?.resetFields()
        emit('registerSuccess')
      })
      .finally(() => {
        registerLoading.value = false
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
