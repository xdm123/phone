<template>
  <div class='search_wrap'>
    <Scroll>
      <div>
        <div class='search_all'>
          <div class='search_all_inner'>
            <p class='search_title_1'>大家都在搜</p>
            <ul class='search_ul'>
              <li v-for="item in searchall" :key='item.rank'>
                <span 
                :class='["addbgcolor" + item.rank]'
                class='search_rank'
                >{{item.rank}}</span>
                <span>{{item.name}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class='search_all'>
          <div class='search_all_inner'>
            <p class='search_title_2'>搜索历史 <span>清空记录</span></p>
            <ul class='search_his'>
              <li v-for="item in searchall" :key='item.id'>{{item.name}}</li>
            </ul>
          </div>
        </div>
      </div>
    </Scroll> 
  </div>
</template>

<script src='./search.js'></script>

<style src='./search.css'></style>
