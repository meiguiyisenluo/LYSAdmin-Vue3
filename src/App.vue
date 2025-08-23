<script setup lang="ts">
import { useI18nStore } from '@/stores/i18n'
const i18nStore = useI18nStore()
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
// 设置默认语言
locale.value = i18nStore.language.value
</script>

<template>
  <el-config-provider :locale="i18nStore.elLocale">
    <RouterView />
  </el-config-provider>
</template>

<style scoped></style>
