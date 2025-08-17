<template>
  <div>{{ user.nickname || user.username }}</div>
  <ElButton type="primary" @click="logout">logout</ElButton>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/stores/user'
const { user } = useUserStore()
import useLogin from '@/hooks/useLogin'
const { logout } = useLogin()

// import { getUserList } from '@/api/user'

// getUserList().then(({ data }) => {
//   console.log(data)
// })
</script>

<style scoped></style>
