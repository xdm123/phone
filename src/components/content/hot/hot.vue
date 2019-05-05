<template>
  <div id='hotwrap'>
    <p class='hot_title'>热门推荐 <span @click='totlepage'>查看全部</span></p>
    <ul class='hot_ul'>
      <li class='hot_li' v-for="(item,index) in hotdata" :key='index' :data-id='index'>
        <p class='headimg' >
          <img class='headimgele' :src="item.head_url" alt="">
          <img class='playicon' src="../../../assets/img/play.png" alt="">
        </p>
        <div class='rightinfo'>
          <p class='hot_songname'>{{item.songname}}</p>
          <p class='singer'>{{item.singer}}</p>
          <p 
          class='startsing' 
          @click='playMusciPage'
          :data-id='item.id'
          >演唱</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script src='./hot.js'>
  
</script>

<style src='./hot.css'>

</style>
