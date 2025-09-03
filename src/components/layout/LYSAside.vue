<template>
  <el-aside :class="{ isCollapse: menu_collapse }">
    <el-menu router :default-active="defaultActive" class="aside" :collapse="menu_collapse">
      <el-menu-item @click="set_menu_collapse(!menu_collapse)">
        <el-icon class="collapse_icon"><DArrowLeft /></el-icon>
        <template #title>collapse</template>
      </el-menu-item>

      <el-menu-item index="Home">
        <el-icon><icon-menu /></el-icon>
        <template #title>{{ t('memu.menuItem.Home') }}</template>
      </el-menu-item>
      <el-menu-item index="UserManage">
        <el-icon><document /></el-icon>
        <template #title>{{ t('memu.menuItem.UserManage') }}</template>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n({
  messages: {
    en: {
      memu: {
        menuItem: {
          Home: 'Home',
          UserManage: 'UserManage',
        },
      },
    },
    'zh-cn': {
      memu: {
        menuItem: {
          Home: '首页',
          UserManage: '用户管理',
        },
      },
    },
  },
})

import { Document, Menu as IconMenu, DArrowLeft } from '@element-plus/icons-vue'

import { toRefs } from 'vue'

import { useSettingStore } from '@/stores/setting'
const SettingStore = useSettingStore()
const { menu_collapse, set_menu_collapse } = toRefs(SettingStore)

import { useRouter } from 'vue-router'
const router = useRouter()
const defaultActive = router.currentRoute.value.name as string
</script>

<style scoped>
.el-aside {
  width: 200px;
  transition: width 0.3s ease;
  background-color: var(--el-aside-bg-color);
  &.isCollapse {
    width: 64px;
    .collapse_icon {
      transform: rotateZ(180deg);
    }
  }

  .collapse_icon {
    transform: rotateZ(0deg);
    transition: transform linear 0.2s;
  }
  .aside {
    height: 100%;
    border: none;
    background-color: transparent;
  }
}
</style>
