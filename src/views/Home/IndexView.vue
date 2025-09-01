<template>
  <div class="router_wrap">
    <ElButton @click="clearFunc">clearFunc</ElButton>
    <TestElInput aaa="12" placeholder="qingshuru" v-model="value" @blur="blur" ref="TestElInputRef">
      <template #prefix>prefix</template>
      <template #suffix>suffix</template>
      <template #append>append</template>
      <template #prepend>prepend</template>
    </TestElInput>
    <div>{{ t('testText') }}</div>
    <LYSUploader @success="onUploadSuccess" />
    <ElButton type="primary" @click="update">update</ElButton>
    <el-table mb-1 :data="[]" />
    <el-pagination :total="100" />
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'HomeView',
})
import { useI18n } from 'vue-i18n'
const { t } = useI18n({
  messages: {
    en: {
      testText: 'hello',
    },
    'zh-cn': {
      testText: '你好',
    },
  },
})

import { useUserStore } from '@/stores/user'
const { user } = useUserStore()
import LYSUploader from '@/components/LYSUploader.vue'

import { updateUser } from '@/api/user'
import { ref, useTemplateRef, type ComponentInstance } from 'vue'

const avatarUrl = ref('')
const onUploadSuccess = (res: { url: string }) => {
  avatarUrl.value = res.url
}
const update = () => {
  if (!avatarUrl.value) return
  updateUser(user.id, { avatar: avatarUrl.value })
}

import TestElInput from '@/components/TestElInput.vue'
const value = ref('')
const blur = console.log
const TestElInputRef = useTemplateRef<ComponentInstance<typeof TestElInput>>('TestElInputRef')
const clearFunc = () => TestElInputRef.value?.clear()
</script>

<style scoped></style>
