<template>
  <div class='com_wrap'>
    <div class='com_head'>
      <p class='com_return' @click='comreturn'></p>
      <span>通用</span>
    </div>
    <div class='com_ctn'>
      <BScrollcom :click='false'>
        <div>
          <p :style='{color:(textcolor == 2 ? "red" : "green")}'>test</p>
        </div>  
      </BScrollcom>
    </div>
  </div>
</template>
<script src='./common.js'></script>
<style lang='scss' scoped src='./common.scss'></style>




 










