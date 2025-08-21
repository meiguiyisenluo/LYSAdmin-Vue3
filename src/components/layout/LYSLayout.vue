<script setup lang="ts">
import LYSHeader from '@/components/layout/LYSHeader.vue'
</script>
<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>
        <LYSHeader />
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>
