import {mapActions} from 'vuex'
export default {
  data () {
    return {
      login:false, //提示框开关
      showlogintemp:false //手机号登录组件开关
    }
  },
  components: {
    Phonelogin:function(res){
      require(['./phonelogin/phonelogin.vue'],res)
    }
  },
  methods:{
    ...mapActions([
      'islogin'
    ]),
    wxLogin:function(){
      this.login = true
      var that = this
      this.islogin()
      setTimeout(function(){
        console.log('跳转页面');
        // that.$router.go(-1)
      },2000)
    },
    otherLogin:function(){
      this.login = true;
      var that = this;
      setTimeout(function(){
        that.login = false;
      },1500)
    },
    phoneLogin:function(){
      this.showlogintemp = true
    },
    closelogintemp:function(){
      this.showlogintemp = false
    }
  }
}