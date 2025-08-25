<template>
  <div class="footer">
    {{ t('copyright') }}
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n({
  messages: {
    en: {
      copyright:
        'Copyright © 2025 Yisen. All rights reserved. No part of this content may be reproduced, distributed, or transmitted in any form or by any means without prior written permission. For licensing inquiries, please contact the author.',
    },
    'zh-cn': {
      copyright:
        '版权所有 © 2025 亦森。保留所有权利。未经许可，禁止以任何形式复制、转载、修改或传播本内容。如需授权，请联系作者。',
    },
  },
})
</script>

<style scoped>
.footer{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 12px;
    opacity: .5;
}
</style>
