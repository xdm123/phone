<template>
  <div class='mine-wrap'>
    <div class='m_head'>
      <div class='m_headbg'>
        <div class='m_head_btn'>
          <p class='m_return' @click='mReturn'></p>
          <p class='m_setting' @click='toSetPage'></p>
        </div>
      </div>
    </div>
    <div class='m_personInfo'>
      <div class='m_person_nick'>
        <img class='m_person_img' src="../../assets/img/me.jpg" alt="">
        <span class='m_person_name'>{{name}}</span>
        <p class='m_changenick' @click='setnickname'>修改昵称<img src="../../assets/img/more.png" alt=""></p>
      </div>
      <div class='m_person_item'>
        <p>红音号</p>
        <span>{{userid}}</span>
      </div>
      <div @click='setsign' class='m_person_item m_person_item_more'>
        <p>签名</p>
        <span>{{sign}}</span>
      </div>
    </div>
    <div class='m_all_wrap'>
      <div class='m_all_inner'>
        <div class='m_all_top'>
          全部作品&nbsp;&nbsp;
          <span>(0)</span>
          <p>查看全部</p>
        </div>
        <div class='m_all_list'>
          <img src="../../assets/img/no.png" alt="">
          <p>优秀如你，怎能没有作品哦~</p>
          <p class='m_all_btn'>快去唱一首吧</p>
        </div>
      </div>
    </div>
    <transition name="transitionRouter">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script src='./mine.js'></script>
<style src='./mine.css'></style>
