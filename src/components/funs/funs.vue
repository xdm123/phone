<template>
  <div class='funs_wrap'>
    <div class='funs_head'>
      <p class='funs_return' @click='funsreturn'></p>
      <span>咨询</span>
    </div>
    <div class='funs_nav' ref="funsnav">
      <Funscroll :scrollX='true' ref="listview">
        <div class='nav_inner'>
          <ul>
            <li 
            class='navli'
            :class='{"addbg":index == select}'
            :data-id='index'
            @click='selectctn'
            ref="navliref"
            v-for="(item,index) in navdata" 
            :key='index'>
              {{item.name}}
            </li>
          </ul>
        </div>
      </Funscroll>
    </div>
    <p class='refreshp'>
      <img src="../../assets/img/refresh.png" alt="">
      松开刷新
    </p>
    <div class='datactn'>
      <Funscroll 
      :pulldown='true'
      @pulldown='refreshdata'
      :data='listdata'>
        <ul>
          <li 
          :data-url='item.url'
          @click='openitem'
          class='listli'
          v-for="(item,index) in listdata" 
          :key='index'>
            <p class='listtitle'>{{item.title}}</p>
            <div class='imgwrap'>
              <img class='leftimg' v-lazy="item.thumbnail_pic_s" alt="" :key="item.thumbnail_pic_s">
              <img class='middleimg' v-lazy="item.thumbnail_pic_s02" alt="" :key="item.thumbnail_pic_s02">
              <img class='rightimg' v-lazy="item.thumbnail_pic_s03" alt="" :key="item.thumbnail_pic_s03">
            </div>
            <div class='author'>
              <span>{{item.author_name}}</span>
              <span class='timedata'>{{item.date}}</span>
            </div>
          </li>
        </ul>
      </Funscroll>
    </div>
  </div>
</template>

<script src='./funs.js'></script>
<style lang='scss' scoped src='./funs.scss'></style>
