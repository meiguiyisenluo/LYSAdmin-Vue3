<template>
  <div id="login_container"></div>
</template>

<script setup lang="ts">
import { loadJs, UUIDv4 } from '@/utils/utils'

// @see:https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Wechat_Login.html
loadJs('http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js').then(() => {
  new window.WxLogin({
    self_redirect: false,
    id: 'login_container',
    appid: '',
    scope: 'snsapi_login',
    redirect_uri: window.location.href,
    state: UUIDv4(),
    stylelite: 1,
    onReady: function (isReady: boolean) {
      isReady
    },
  })
})
</script>
