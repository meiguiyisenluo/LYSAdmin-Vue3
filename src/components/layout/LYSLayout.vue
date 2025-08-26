<script setup lang="ts">
import LYSHeader from '@/components/layout/LYSHeader.vue'
import LYSFooter from '@/components/layout/LYSFooter.vue'
</script>
<template>
  <el-container>
    <el-aside></el-aside>
    <el-container>
      <el-header>
        <LYSHeader />
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
      <el-footer>
        <LYSFooter />
      </el-footer>
    </el-container>
  </el-container>
</template>

<style scoped>
.el-container {
  height: 100%;
  .el-aside {
    background-color: var(--el-aside-bg-color);
    border-right: 1px solid var(--el-border-color);
  }
  .el-header {
    background-color: var(--el-header-bg-color);
  }
  .el-main {
    background-color: var(--el-main-bg-color);
  }
  .el-footer {
    background-color: var(--el-footer-bg-color);
  }
}
</style>
