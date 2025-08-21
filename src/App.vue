<script setup lang="ts">
import { locale } from '@/utils/I18n'
</script>

<template>
  <el-config-provider :locale="locale">
    <RouterView />
  </el-config-provider>
</template>

<style scoped></style>
