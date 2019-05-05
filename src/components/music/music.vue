<template>
  <div class='music_wrap'>
    <div class='music_head'>
      <p class='min_music' @click.stop.prevent='closeMusic'></p>
      {{type}}
    </div>
    <div class='lyricwrap' ref="lyricwrap" :class='[openlyric]' @click='openlyricfn'>
      <div class='music_ctn' 
      ref="music_ctn" >
        <p class='song_name'>{{gettotalData.songname}}</p>
        <p class='singer_name'>{{gettotalData.singer}}</p>
        <img 
        ref="fontimg" 
        class='fontimg' 
        :class='[fontimg]' 
        :src="gettotalData.fontimg"
        :style='{"animation-play-state":stopanimation}'
         alt="">
      </div>
      <div class='Lyric' 
      ref="Lyric">
        这里是歌词
      </div>
    </div>
    <div class='music_pross'>
      <div class='pross_line' ref='prossline'></div>
      <div class='pross_line_copy' ref='prosslinecopy'></div>
      <p class='grag_btn' 
      ref="gragbtn"
      @touchstart='gragstart'
      @touchmove='gragmove'
      @touchend='gragend'></p>
    </div>
    <p class='music_time'>{{playtime}}</p>
    <div class='contral_box'>
      <p class='music_start' @click='startbtn' :class='[playorend]'></p>
      <p class='music_pre' @click='playpre'></p>
      <p class='music_next' @click='playnext'></p>
      <p class='music_order' @click='setorder' :class='["ordertype" + ordertype]'></p>
      <p class='music_all' @click.stop.prevent='openlist'></p>
    </div>
    <div id="audiowrap">
      <audio src='' 
      @timeupdate="updateTime" 
      ref="newaudio" 
      @canplaythrough="loadmusic"
      @ended="playEnd"
      ></audio>
    </div>
    <div class='playlist' v-if="listopen" @click.stop.prevent='closelist'>
      <ul class='list_ul'>
        <li 
        v-for="(item,index) in listdata"
        :key='index' 
        :data-id='item.id' 
        v-show="index != 0" 
        @click.stop.prevent='choosemusic'
        :class='index == playindex ? "curele" : ""'
        >
          <span style="margin-right:10px;">{{item.id + 1}}</span>
          <span>{{item.songname}}</span>
          --
          <span>{{item.singer}}</span>  
        </li>
      </ul>
    </div>
    <transition name="transitionSearch">
      <keep-alive>
        <Lyric v-if="openlyric" :timeplay='lrctime'></Lyric>
      </keep-alive>
    </transition>
  </div>
</template>
<script src='./music.js'></script>
<style src='./music.css'></style>
