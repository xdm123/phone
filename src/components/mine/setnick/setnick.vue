<template>
  <div class='setnick_wrap'>
    <div class='nick_head'>
      <p class='nick_return' @click='nickreturn'></p>
      编辑昵称
      <p class=save_nick @click='savenick'>保存</p>
    </div>
    <div class='inputwrap'>
      <input v-model="val" :placeholder="name" maxlength="7" class='nick-input' type="text">
      <p @click='clearvalue'>×</p>
    </div>
  </div>
</template>

<script src='./setnick.js'></script>
<style src='./setnick.css' scoped></style>

