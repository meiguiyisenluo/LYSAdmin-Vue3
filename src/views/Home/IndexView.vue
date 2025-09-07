<template>
  <LYSPage :title="t('title')" class="router_wrap">
    <ElButton @click="clearFunc">clearFunc</ElButton>
    <TestElInput aaa="12" placeholder="qingshuru" v-model="value" ref="TestElInputRef">
      <template #prefix>prefix</template>
      <template #suffix>suffix</template>
      <template #append>append</template>
      <template #prepend>prepend</template>
    </TestElInput>
    <el-table mb-1 :data="[]" />
    <el-pagination :total="100" />
  </LYSPage>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'HomeView',
})
import { onUnmounted } from 'vue'
onUnmounted(() => {
  console.log('HomeView 被销毁了')
})
import { useI18n } from 'vue-i18n'
const { t } = useI18n({
  messages: {
    en: {
      title: 'Home',
    },
    'zh-cn': {
      title: '首页',
    },
  },
})

import { ref, useTemplateRef, type ComponentInstance } from 'vue'
import TestElInput from '@/components/TestElInput.vue'
const value = ref('')
const TestElInputRef = useTemplateRef<ComponentInstance<typeof TestElInput>>('TestElInputRef')
const clearFunc = () => TestElInputRef.value?.clear()
</script>

<style scoped></style>
