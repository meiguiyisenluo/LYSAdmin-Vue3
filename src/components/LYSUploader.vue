<template>
  <el-upload
    class="avatar-uploader"
    action="/api/upload/cloudflare-r2"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :headers="{
      'Lys-Token': token,
    }"
    method="put"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
  </el-upload>
</template>

<script lang="ts" setup>
const emit = defineEmits(['success'])
import { ref } from 'vue'

import type { UploadProps } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'

const imageUrl = ref('')

const handleAvatarSuccess: UploadProps['onSuccess'] = (response, uploadFile) => {
  emit('success', response)
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

import { useTokenStore } from '@/stores/token'
const { token } = useTokenStore()
</script>

<style scoped>
.avatar-uploader {
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  &:deep() .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
    &:hover {
      border-color: var(--el-color-primary);
    }
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
  }
}
</style>
