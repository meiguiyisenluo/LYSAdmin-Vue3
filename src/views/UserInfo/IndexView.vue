<template>
  <div class="router_wrap">
    <LYSUploader @success="onUploadSuccess" />
    <ElButton type="primary" @click="update">update</ElButton>
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'userInfo',
})
import { useI18n } from 'vue-i18n'
const { t } = useI18n({
  messages: {
    en: {
      userInfo: 'userInfo',
    },
    'zh-cn': {
      userInfo: '个人信息',
    },
  },
})

import LYSUploader from '@/components/LYSUploader.vue'

import { useUserStore } from '@/stores/user'
const { user } = useUserStore()

import { updateUser } from '@/api/user'
import { ref } from 'vue'

const avatarUrl = ref('')
const onUploadSuccess = (res: { url: string }) => {
  avatarUrl.value = res.url
}
const update = () => {
  if (!avatarUrl.value) return
  updateUser(user.id, { avatar: avatarUrl.value })
}
</script>

<style scoped></style>
