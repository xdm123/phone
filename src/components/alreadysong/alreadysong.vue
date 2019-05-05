<template>
  <div class='already-wrap' ref="al_wrap">
    <div class='al_head' ref='al_head'>
      <p class='al_return' @click='returnal'></p>
      <span>{{title}}</span>
    </div>
    <div class="al_content">
      <BScroll>
        <div class='al_ctn_inner'>
          <ul>
            <li v-for="(item,index) in total" :key="index">
              <div class='headimg'>
                <img :src="item.head_url" alt="">
                <img class='playpng' src="../../assets/img/play.png" alt="">
              </div>
              <p class='songname'>{{item.songname}}<br /><span>{{item.singer}}</span></p>
              <p class='playbtn'>演唱</p>
            </li>
          </ul>
        </div>
      </BScroll> 
    </div>
    <div>
    </div>
  </div>
</template>
<script src='./alreadysong.js'></script>
<style lang='scss' src='./alreadysong.scss' scoped></style>


