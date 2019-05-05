<template>
  <div class='jmwrap'>
    <div class='jm_head' ref='al_head'>
      <p class='jm_return' @click='jmreturn'></p>
      <span>jm</span>
    </div>
    <div class='inputwrap'>
      <input
      class='text'
      type="text" 
      v-model="inputdata" 
      maxlength="10"
      placeholder="输入关键字解梦"
      >
      <p class='inputsearch' @click='searchres'></p>
    </div>
    <p class='solt'>分类别解密</p>
    <p style='text-align:center;line-height:1rem; color:red;'>当前仅支持输入关键字搜索</p>

    <transition name="transitionRouter">
      <Secl v-if='opensec' :data='secdata' @secback='secback'></Secl>
    </transition>
    <div class='loading' v-if="searchload">
      <img src="../../../assets/img/load.png" alt="">
    </div>
  </div>
</template>

<script src='./jiemeng.js'></script>
<style lang='scss' scoped src='./jiemeng.scss'></style>


