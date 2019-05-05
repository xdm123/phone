import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      isSearch:'', //输入框左右元素变化class
      changeWidth:'', //输入框变化class
      isfocus:false //获取焦点隐藏用户头像
    }
  },
  computed:{
    ...mapGetters([
      'islogin'
    ])
  },
  components: {

  },
  methods:{

    ...mapActions([
      'changesearch',
      'playmusic'
    ]),
    toMinePage:function(){
      this.$router.push({
        path:'/mine'
      })
    },

    //搜索框获取焦点事件
    searchfn:function(){
      console.log('获得焦点');
      this.changeWidth = 'change_input_w'
      this.isfocus = true
      this.isSearch = 'change_left_w'
      this.changesearch();
    },

    //搜索框失去焦点事件
    endSearch:function(){
      
    },
    cancelsearch:function(){
      this.changeWidth = 'back_input_w';
      this.isSearch = 'back_left_w';
      this.isfocus = false;
      this.changesearch();
    },
    openbofang:function(){
      this.playmusic();
    }
  }
}