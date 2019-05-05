<template>
  <div class='head-wrap'>
    <p class='choose_song' @click='openbofang' :class='[isSearch]'>点歌</p>
    <div class='input_wrap' :class='[changeWidth]'>
      <img class='search_img' src="../../assets/img/search.png" alt="">
      <input 
      @focus="searchfn"
      @blur="endSearch"
      type="text" 
      placeholder="搜索歌曲，歌手" 
      class='search_input'
      >
      <img class='maik_img' src="../../assets/img/huatong.png" alt="">
    </div>
    <p class='user_img' @click.stop='toMinePage' v-if="!isfocus && islogin"></p>
    <p class='user_img_login' @click.stop='toMinePage' v-if="!isfocus && !islogin"></p>
    <p class='cancel' @click.stop='cancelsearch' v-if="isfocus">取消</p>
  </div>
</template>
<script src='./head.js'></script>
<style src='./head.css'></style>
