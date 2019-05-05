<template>
  <div style="">
    <ul style='overflow:hidden;'>
      <li class='top_room ktv_room' @click='tofunspage'>
        <p>咨询</p>
        <span>今日大条</span>
      </li>
      <li class='top_room sing_room' @click='toalreadypage'>
        <p>已点</p>
        <span>6首</span>
      </li>
      <li class='top_room ktv_room' @click='testExpressApi'>
        <p class='tool'>接口测试</p>
      </li>
      <li class='top_room sing_room' @click='toolpage'>
        <p class='tool'>tool</p>
      </li>
    </ul>
    <h2 class='rang_title'>演唱排行</h2>
    <div class='rang_scroll_wrap'>
      <BScroll :click='false' :scrollX='true' :data='rankdata'>
        <ul class='scrollui'>
          <li v-for="(item,index) in rankdata" :key='index'>
            <div v-for="(iteminner,indexinner) in rankdata[index]" :key='indexinner'>
              <p class='headimg' >
                <img class='headimgele' :src="iteminner.head_url"  alt="">
                <img class='playicon' src="../../../assets/img/play.png" alt="">
              </p>
              <div class='rightinfo'>
                <p class='songname'>{{iteminner.songname}}</p>
                <p class='singer'>{{iteminner.singer}}</p>
                <p class='tag'>猜你爱唱</p>
                <p class='startsing' 
                @touchstart.stop.prevent="start($event)"
                @touchend.stop.prevent="stop($event)"
                :data-id='iteminner.id'
                >演唱</p>
              </div>
            </div>
          </li>
        </ul>
      </BScroll>
    </div>
  </div>
</template>
<script src='./rank.js'></script>
<style src='./rank.css'></style>

