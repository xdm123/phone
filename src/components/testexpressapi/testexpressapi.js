import Apiscroll from '../../base/scroll/scroll.vue'
export default {
  data () {
    return {
      userinfo:[]
    }
  },
  components: {
    Apiscroll
  },
  mounted(){
    this.getUserInfo()
  },
  methods:{
    apireturn:function(){
      this.$router.go(-1);
    },
    getUserInfo:function(){
      var that = this;
      this.$http.get('http://139.199.111.86:3000/userInfo')
      .then(function(data){
        console.log(data);
        that.userinfo = data.data.list;
      })
      .catch(function(error){
        console.log(error);
      })
    }
  }
}