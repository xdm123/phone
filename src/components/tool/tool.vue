<template>
  <div class='toolwrap'>
    <div class='tool_head' ref='al_head'>
      <p class='tool_return' @click='toolreturn'></p>
      <span>tool</span>
    </div>
    <ul class='toolitem'>
      <li @click='tojiemengpage'>zgjm</li>
    </ul>
    <transition name="transitionRouter">
      <router-view></router-view>
    </transition>
  </div>
</template> 
<script src='./tool.js'></script>
<style lang='scss' src='./tool.scss' scoped></style>








