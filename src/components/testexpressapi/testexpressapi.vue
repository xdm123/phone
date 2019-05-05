<template>
  <div class='apitestwrap'>
    <div class='apihead'>
      <p class='apireturn' @click='apireturn'></p>
      <span>api测试</span>
    </div>
    <div class='apiscroll'>
      <Apiscroll
      :data='userinfo'>
        <ul>
          <li v-for="(item,index) in userinfo" 
          :key='index'>
            <span>{{item.name}}</span>
            <span>{{item.sex}}</span>
            <span>{{item.age}}</span>
            <span class='editbtn'>编辑</span>
            <span class='removebtn'>删除</span>
          </li>
          <li class='additem'>添加</li>
        </ul>
      </Apiscroll>
    </div>
  </div>
</template>

<script src='./testexpressapi.js'></script>
<style lang='scss' scoped src='./testexpressapi.scss'></style>
