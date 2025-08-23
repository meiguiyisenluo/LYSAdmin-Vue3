<template>
  <el-form ref="formRef" :model="formData" :rules="rules" label-width="auto">
    <el-form-item :label="t('label.username')" prop="username">
      <el-input v-model="formData.username" />
    </el-form-item>
    <el-form-item :label="t('label.password')" prop="password">
      <el-input type="password" v-model="formData.password" />
    </el-form-item>
    <el-form-item :label="t('label.nickname')" prop="nickname">
      <el-input v-model="formData.nickname" />
    </el-form-item>
    <el-form-item :label="t('label.email')" prop="email">
      <el-input v-model="formData.email" />
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
        email: ['Please input Email', 'Please input validate Email'],
      },
      label: {
        username: 'Username',
        password: 'Password',
        nickname: 'Nickname',
        email: 'Email',
      },
      buttonText: 'Register',
      registerSuccessTitle: 'Register Success',
      registerFailedTitle: 'Register Failed',
    },
    'zh-cn': {
      rules: {
        username: ['请输入用户名', '长度应为11'],
        password: ['请输入密码', '长度应为8 - 20'],
        email: ['请输入邮箱', '请输入正确邮箱'],
      },
      label: {
        username: '用户名',
        password: '密码',
        nickname: '昵称',
        email: '邮箱',
      },
      buttonText: '注册',
      registerSuccessTitle: '注册成功',
      registerFailedTitle: '注册失败',
    },
  },
})

import { ref } from 'vue'

import { register } from '@/api/login'
import { reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElNotification } from 'element-plus'

const emit = defineEmits(['registerSuccess'])
const loading = ref(false)
const formRef = ref<FormInstance>()
interface Form {
  username: string
  password: string
  nickname: string
  email: string
}
const formData = reactive<Form>({
  username: '',
  password: '',
  nickname: '',
  email: '',
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
  email: [
    { required: true, message: t('rules.email.0'), trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          callback()
        } else {
          callback(new Error(t('rules.email.1')))
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
    loading.value = true
    register(formData)
      .then(({ headers }) => {
        ElNotification({
          title: t('registerSuccessTitle'),
          message: headers['lys-message'],
          type: 'success',
        })
        formRef.value?.resetFields()
        emit('registerSuccess')
      })
      .catch(({ headers }) => {
        ElNotification({
          title: t('registerFailedTitle'),
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
