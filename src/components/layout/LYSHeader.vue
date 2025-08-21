<script setup lang="ts">
import { setLanguage } from '@/utils/I18n'
</script>

<template>
  <button @click="setLanguage('zh-cn')">setLanguage('zh-cn')</button>
  <button @click="setLanguage('en')">setLanguage('en')</button>
</template>
