<template>
  <el-page-header @back="$router.back()">
    <template #breadcrumb v-if="false">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: './page-header.html' }"> homepage </el-breadcrumb-item>
        <el-breadcrumb-item><a href="./page-header.html">route 1</a></el-breadcrumb-item>
        <el-breadcrumb-item>route 2</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <template #content>
      <span> {{ title }} </span>
    </template>
    <div style="padding: 1rem">
      <slot></slot>
    </div>
  </el-page-header>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'LYSPage',
})
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
