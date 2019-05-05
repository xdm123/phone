<template>
  <div id="app">
    <Head></Head>
    <Ctn></Ctn>
    <transition name="transitionSearch">
      <Search v-if="getSearch"></Search>
    </transition>
   
    <transition name="transitionRouter">
      <router-view></router-view>
    </transition>
     <transition name="transitionSearch">
       <keep-alive>
        <Music v-show="playmusic" :url='gettotalData'></Music>
       </keep-alive>
    </transition>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Head from './components/head/head.vue'
import Ctn from './components/content/content.vue'
export default {
  data(){
    return{
      test:'',
      playurl:''//播放器播放音乐地址
    }
  },
  watch:{
    
  },
  computed:{
    ...mapGetters([
      'getSearch',
      'playmusic',
      'gettotalData',
      'islogin'
    ])
  },
  mounted(){
    
  },
  components:{
    Head,
    Ctn,
    Search:function(resolve){
      require(['./components/search/search.vue'],resolve);
    },
    Music:function(resolve){
      require(['./components/music/music.vue'],resolve);
    }
  },
  methods:{
    
  }
}
</script>

<style>
  #app{
    width:100%;
    height:100%;
    position: relative;
  }
  .transitionRouter-enter-active,
  .transitionRouter-leave-active {
    transition: all 0.3s;
  }

  .transitionRouter-enter{
    transform: translate3d(100%, 0%, 0);
  }
  .transitionRouter-leave-to{
    transform: translate3d(100%, 0%, 0);
  }

  .transitionSearch-enter-active,
  .transitionSearch-leave-active {
    transition: all 0.3s;
  }

  .transitionSearch-enter{
    transform: translate3d(0%, 100%, 0);
  }
  .transitionSearch-leave-to{
    transform: translate3d(0%, 100%, 0);
  }
</style>
