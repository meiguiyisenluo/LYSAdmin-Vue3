<script setup lang="ts">
import LYSHeader from '@/components/layout/LYSHeader.vue'
import LYSFooter from '@/components/layout/LYSFooter.vue'
</script>
<template>
  <el-container>
    <el-aside>Aside</el-aside>
    <el-container>
      <el-header>
        <LYSHeader />
      </el-header>
      <el-main>
        <router-view v-slot="{ Component }">
          <transition name="el-zoom-in-left" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
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
    width: 200px;
    background-color: var(--el-aside-bg-color);
    border-right: 1px solid var(--el-border-color);
  }
  .el-header {
    background-color: var(--el-header-bg-color);
  }
  .el-main {
    background-color: var(--el-main-bg-color);
    padding: 16px;
    .router_wrap {
      width: 100%;
      height: 100%;
      padding: 16px;
      box-sizing: border-box;
      border-radius: 10px;
      background-color: var(--el-main-wrap-bg-color);
      box-shadow: 0px 0px 5px 1px var(--el-main-wrap-shadow-color);
    }
  }
  .el-footer {
    background-color: var(--el-footer-bg-color);
  }
}
</style>
