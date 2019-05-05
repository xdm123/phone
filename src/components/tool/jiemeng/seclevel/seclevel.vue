<template>
  <div class='secwrap'>
    <div class='sechead'>
      <span>选择分类</span>
      <p class='secreturn' @click='secreturn'></p>
    </div>
    <ul class='seclist'>
      <li v-for='(item,index) in data' 
      @click='chooseitem'
      :key='index' 
      :data-id='item.id'>
        {{item.title}}
      </li>
    </ul>
    <div class='secloading' v-if="secsearchload">
      <img src="../../../../assets/img/load.png" alt="">
    </div>
    <transition name="transitionRouter">
      <Thr :data='thrdata' v-if='thropen' @thrback='thrback'></Thr> 
    </transition>
  </div>
</template>
<script src='./seclevel.js'>
</script>
<style lang='scss' scoped src='./seclevel.scss'></style>
