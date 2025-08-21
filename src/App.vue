<script setup lang="ts">
import LYSHeader from '@/components/layout/LYSHeader.vue'

import { locale } from '@/utils/I18n'
</script>

<template>
  <el-config-provider :locale="locale">
    <div class="common-layout">
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-header>
            <LYSHeader />
          </el-header>
          <el-main> <RouterView /></el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </div>
  </el-config-provider>
</template>

<style scoped></style>
