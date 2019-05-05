<template>
  <div class='sign_wrap'>
    <div class='sign_head'>
      <p class='nick_return' @click='signreturn'></p>
      个性签名
      <p class=save_nick @click='savesign'>保存</p>
    </div>
    <textarea 
    @input="inputfn"
    v-model="textdata"
    :placeholder='sign' 
    maxlength="15"
    class='text' 
    ></textarea>
    <p class='num'>{{textnum}}&nbsp;/&nbsp;15</p>
  </div>
</template>

<script src='./sign.js'></script>
<style lang='scss' src='./sign.scss' scoped></style>
