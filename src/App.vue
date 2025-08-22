<script setup lang="ts">
import { useI18nStore } from '@/stores/I18n'
const i18nStore = useI18nStore()
</script>

<template>
  <el-config-provider :locale="i18nStore.elLocale">
    <RouterView />
  </el-config-provider>
</template>

<style scoped></style>
