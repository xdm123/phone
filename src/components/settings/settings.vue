<template>
  <div class='set_wrap'>
    <div class='set_inner'>
      <div class='set_head'>
        <p class='set_return' @click='setreturn'></p>
        设置
      </div>
    </div>
    <div class='set_inner set_useradmin'>
      <div class='set_item' @click='toadminPage'>账号管理</div>
    </div>
    <div class='set_inner set_border'>
      <div class='set_item'>清空缓存</div>
    </div>
    <div class='set_inner set_border'>
      <div class='set_item'>隐私</div>
    </div>
    <div class='set_inner set_margin_bottom'>
      <div @click='commonset' class='set_item'>通用</div>
    </div>
    <div class='set_inner set_border'>
      <div class='set_item'>帮助与反馈</div>
    </div>
    <div class='set_inner set_margin_bottom'>
      <div class='set_item'>关于红音</div>
    </div>
    <div @click='exitlogin' class='set_inner set_edit'>
      退出登录
    </div>
    <transition name="transitionRouter">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script src='./settings.js'></script>
<style src='./settings.css'></style>
