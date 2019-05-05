<template>
  <div class='login_wrap'>
    <img class='logo_img' src="../../assets/img/logo.png" alt="">
    <p class='login_name'>红音</p>
    <span class='login_item'>缘来唱歌很简单</span>
    <div @click='otherLogin' class='login_btn'><img src="../../assets/img/wx.png" alt="">微信登录</div>
    <div class='login_ather'>
      <p class='left_line'></p>
      其他方式
      <p class='right_line'></p>
    </div>
    <div class='other_btn'>
      <img @click='otherLogin' src="../../assets/img/qqlogin.png" alt="">
      <img @click='otherLogin' src="../../assets/img/gualogin.png" alt="">
      <img @click='phoneLogin' src="../../assets/img/phonelogin.png" alt="">
    </div>
    <p class='login_text'><img src="../../assets/img/select.png" alt="">我已阅读并同意遵守<span style="color:#F0717A;">服务许可协议隐私政策</span></p>
    <div class='loading' v-if='login'>
      <!-- <img src="../../assets/img/loading.png" alt=""> -->
      <p>目前只支持手机号登录</p>
    </div>
    <transition name="transitionRouter">
      <Phonelogin @closetemp='closelogintemp' v-if="showlogintemp"></Phonelogin>
    </transition>
  </div>
</template>

<script src='./login.js'></script>

<style src='./login.css'></style>
