<template>
  <div class='thrwrap'>
    <div class='thrre'>
      <p class='thrback' @click='thrback'></p>
      <span>梦境解析</span>
    </div>
    <ul class='thrul'>
      <li v-for='(item,index) in data' :key='index'>
        {{index + 1}}：{{item}}
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      data:{
        default:null
      }
    },
    data () {
      return {

      }
    },
    components: {

    },
    methods:{
      thrback:function(){
        this.$emit('thrback')
      }
    }
  }
</script>

<style>
  .thrwrap{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 22222;
    background:#f8f8f8;
  }
 .thrre{
   width: 100%;
   height: 1.33rem;
   position: relative;
   background:#fff;
   text-align: center;
   line-height: 1.33rem;
   font-size: 16px;
   color:#282828;
 }
 .thrback{
   width: 1rem;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   background:url('../../../../assets/img/return_block.png') no-repeat center;
   background-size: 0.5rem;
 }
 .thrul{
   width: 90%;
    position: fixed;
    top: 1.33rem;
    bottom: 0;
    overflow-y:scroll;
    margin:0 auto;
    left:50%;
    margin-left:-45%;
    height:auto;
 }
 .thrul li{
   padding:10px 0;
   font-size: 14px;
 }
</style>
