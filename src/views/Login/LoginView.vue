<template>
  <el-form ref="formRef" :model="formData" :rules="rules" label-width="auto">
    <el-form-item :label="t('label.username')" prop="username">
      <el-input v-model="formData.username" />
    </el-form-item>
    <el-form-item :label="t('label.password')" prop="password">
      <el-input type="password" v-model="formData.password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit" :loading="loading" :disabled="loading">{{
        t('buttonText')
      }}</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n({
  messages: {
    en: {
      rules: {
        username: ['Please input Username', 'Length should be 11'],
        password: ['Please input Password', 'Length should be 8 to 20'],
      },
      label: {
        username: 'Username',
        password: 'Password',
      },
      buttonText: 'Login',
      loginSuccessTitle: 'Login Success',
      loginFailedTitle: 'Login Failed',
    },
    'zh-cn': {
      rules: {
        username: ['请输入用户名', '长度应为11'],
        password: ['请输入密码', '长度应为8 - 20'],
      },
      label: {
        username: '用户名',
        password: '密码',
      },
      buttonText: '登录',
      loginSuccessTitle: '登录成功',
      loginFailedTitle: '登录失败',
    },
  },
})

import { ref } from 'vue'

import { login } from '@/api/login'
import { reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

import { ElNotification } from 'element-plus'

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
    { required: true, message: t('rules.username.0'), trigger: 'blur' },
    { min: 11, max: 11, message: t('rules.username.1'), trigger: 'blur' },
  ],
  password: [
    { required: true, message: t('rules.password.0'), trigger: 'blur' },
    { min: 8, max: 20, message: t('rules.password.1'), trigger: 'blur' },
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
          title: t('loginSuccessTitle'),
          message: headers['lys-message'],
          type: 'success',
        })
        formRef.value?.resetFields()
        emit('loginSuccess', data, headers['lys-token'])
      })
      .catch(({ headers }) => {
        ElNotification({
          title: t('loginFailedTitle'),
          message: headers['lys-message'],
          type: 'error',
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
