<template>
  <el-tabs v-model="activeName" class="login-tabs">
    <el-tab-pane label="Login" name="Login">Login</el-tab-pane>
    <el-tab-pane label="Register" name="Register">
      <RegisterView @registerSuccess="activeName = 'Login'" />
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import RegisterView from './RegisterView.vue'
const activeName = ref('Login')
</script>

<style scoped>
.login-tabs {
  width: 25rem;
  height: 25rem;
  position: fixed;
  inset: 0;
  margin: auto;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  border-radius: 0.625rem;
  &:deep() .el-tabs__content {
    padding: 1rem;
    overflow-y: auto;
  }

  &:deep() .el-tabs__nav-wrap {
    padding-left: 1rem;
  }
}
</style>
