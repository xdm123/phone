// import Secl from './seclevel/seclevel.vue'

export default {
  data () {
    return {
      inputdata:'', //输入的关键字
      searchload:false, //显示加载框
      opensec:false, //显示二级结果页面
      secdata:[], //搜索到的结果
    }
  },
  components: {
    Secl:function(resolve){
      require(['./seclevel/seclevel.vue'],resolve);
    }
  },
  methods:{
    jmreturn:function(){
      this.$router.go(-1);
    },
    //关闭子组件
    secback:function(){
      this.opensec = false;
    },
    //手动输入关键字搜索
    searchres:function(){
      var that = this;
      that.searchload = true;
      var val = encodeURI(this.inputdata);
      //根据关键字搜索结果
      this.$http.get('/api/dream/query?q='+val+'&key=e072388186eba292606470206f1ac2fa')
      .then(function(data){
        console.log(data);
        that.secdata = data.data.result;
        that.searchload = false;
        that.opensec = true;
      })
      .catch(function(res){
        console.log(res)
        that.searchload = false;
      })
    }
  }
}