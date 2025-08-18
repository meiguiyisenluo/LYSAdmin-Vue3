<template>
  <div>{{ user.nickname || user.username }}</div>
  <ElButton type="primary" @click="logout">logout</ElButton>
  <LYSUploader @success="onUploadSuccess" />
  <ElButton type="primary" @click="update">update</ElButton>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/stores/user'
const { user } = useUserStore()
import useLogin from '@/hooks/useLogin'
const { logout } = useLogin()
import LYSUploader from '@/components/LYSUploader.vue'

import { getUserList, updateUser } from '@/api/user'
import { ref } from 'vue'

getUserList().then(({ data }) => {
  console.log(data)
})

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
