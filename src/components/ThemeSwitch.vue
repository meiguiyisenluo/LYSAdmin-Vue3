<template>
  <el-switch
    class="theme-switch"
    v-model="isDark"
    :active-action-icon="Moon"
    :inactive-action-icon="Sunny"
  />
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core'
const isDark = useDark()

import { Sunny, Moon } from '@element-plus/icons-vue'
</script>

<style scoped>
.theme-switch {
  --el-switch-on-color: #272a2f;
  --el-switch-off-color: #eff0f3;
  --el-switch-border-color: #c2c2c4;
}
</style>
