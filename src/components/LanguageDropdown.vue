<template>
  <el-dropdown @command="setLanguage">
    <span>
      {{ i18nStore.language.name }}
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item in languages" :key="item.value" :command="item">{{
          item.name
        }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { useI18nStore, languages } from '@/stores/i18n'
import type { Lang } from '@/stores/i18n'
const i18nStore = useI18nStore()
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const setLanguage = (command: Lang) => {
  locale.value = command.value
  i18nStore.setLanguage(command)
}
</script>
