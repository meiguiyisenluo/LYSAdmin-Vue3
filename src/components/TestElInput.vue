<template>
  <div>
    <h2>ElInput1</h2>
    <component :is="h(ElInput, { ...$attrs, ref: changeRef }, $slots)"></component>
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'TestElInput',
})
import { h, getCurrentInstance, type ComponentInstance } from 'vue'
import { ElInput } from 'element-plus'
const vm = getCurrentInstance()
const changeRef = (exposed: any) => (vm!.exposed = exposed)
defineExpose({} as ComponentInstance<typeof ElInput>)
</script>
