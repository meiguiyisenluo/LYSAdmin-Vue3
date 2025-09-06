<template>
  <LYSPage :title="t('title')" class="UserInfo">
    <el-form v-loading="loading" :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item :label="t('label.nickname')">
        <el-input v-model="form.nickname" />
      </el-form-item>
      <el-form-item :label="t('label.avatar')">
        <LYSUploader @success="onUploadSuccess" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="update">{{ t('updateButtonText') }}</el-button>
      </el-form-item>
    </el-form>
  </LYSPage>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'UserInfo',
})
import { useI18n } from 'vue-i18n'
const { t } = useI18n({
  messages: {
    en: {
      title: 'UserInfo',
      label: {
        nickname: 'nickname',
        avatar: 'avatar',
      },
      updateButtonText: 'update',
    },
    'zh-cn': {
      title: '个人信息',
      label: {
        nickname: '昵称',
        avatar: '头像',
      },
      updateButtonText: '更新',
    },
  },
})

import LYSUploader from '@/components/LYSUploader.vue'

import { ref, toRefs } from 'vue'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const { user } = toRefs(userStore)

import { reactive } from 'vue'

import { type User } from '@/stores/user'

const form = reactive<Pick<User, 'nickname' | 'avatar'>>({
  nickname: user.value.nickname,
  avatar: user.value.avatar,
})

const onUploadSuccess = (res: { url: string }) => {
  form.avatar = res.url
}

const loading = ref(false)
import { ElNotification } from 'element-plus'
import { updateUser } from '@/api/user'
const update = () => {
  loading.value = true
  updateUser(user.value.id, form)
    .then(({ headers, data: user }) => {
      userStore.setUser(user)
      ElNotification({
        title: '更新成功',
        message: headers['lys-message'],
        type: 'success',
      })
    })
    .catch(({ headers }) => {
      ElNotification({
        title: '更新失败',
        message: headers['lys-message'],
        type: 'error',
      })
    })
    .finally(() => {
      loading.value = false
    })
}
</script>

<style scoped>
.UserInfo {
  padding: 1rem;
}
</style>
