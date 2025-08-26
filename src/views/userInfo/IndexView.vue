<template>
  <div class="router_wrap">
    <div>{{ t('userInfo') }}</div>
  </div>
</template>

<script lang="ts" setup>
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
</script>

<style scoped></style>
