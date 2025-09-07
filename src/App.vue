<script setup lang="ts">
import { useI18nStore } from '@/stores/i18n'
const i18nStore = useI18nStore()
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
// 设置默认语言
locale.value = i18nStore.language.value

import LYSHeader from '@/components/layout/LYSHeader.vue'
</script>

<template>
  <el-config-provider :locale="i18nStore.elLocale">
    <el-container>
      <el-header>
        <LYSHeader />
      </el-header>
      <router-view v-slot="{ Component }">
        <template v-if="Component">
          <transition name="el-fade-in-linear" mode="out-in">
            <keep-alive>
              <Suspense timeout="0">
                <component :is="Component" />
                <template #fallback>
                  <div v-loading="true" style="width: 100%; height: 100%"></div>
                </template>
              </Suspense>
            </keep-alive>
          </transition>
        </template>
      </router-view>
    </el-container>
  </el-config-provider>
</template>

<style scoped>
.el-container {
  height: 100%;
  .el-header {
    background-color: var(--el-header-bg-color);
  }
}
</style>
