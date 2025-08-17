<template>
  <div>{{ user.nickname || user.username }}</div>
  <ElButton type="primary" @click="logout">logout</ElButton>
  <LYSUploader @success="openImage" />
</template>

<script lang="ts" setup>
import { useUserStore } from '@/stores/user'
const { user } = useUserStore()
import useLogin from '@/hooks/useLogin'
const { logout } = useLogin()
import LYSUploader from '@/components/LYSUploader.vue'

import { getUserList } from '@/api/user'

getUserList().then(({ data }) => {
  console.log(data)
})

const openImage = (res: { url: string }) => window.open(res.url)
</script>

<style scoped></style>
