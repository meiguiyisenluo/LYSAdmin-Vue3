<template>
  <LYSPage :title="t('title')" class="router_wrap"> UserManage </LYSPage>
</template>
<script setup lang="ts">
defineOptions({
  name: 'UserManage',
})

import { onUnmounted } from 'vue'
onUnmounted(() => {
  console.log('UserManage 被销毁了')
})

import { useI18n } from 'vue-i18n'
const { t } = useI18n({
  messages: {
    en: {
      title: 'UserInfo',
    },
    'zh-cn': {
      title: '个人信息',
    },
  },
})
</script>
