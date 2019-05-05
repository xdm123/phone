import {mapGetters} from 'vuex'

export default {
  data () {
    return {
      userid:'',
      name:'',
      sign:''
    }
  },
  computed:{
    ...mapGetters([
      'setnick'
    ])
  },
  watch:{
    $route(to,from){
      console.log(from.path);
      if(from.path == '/nick' || from.path == '/sign'){
        this.getUseInfo()
      }
    }
  },
  components: {

  },
  mounted(){
    this.getUseInfo()
  },
  methods:{
    mReturn:function(){
      this.$router.go(-1);
    },
    toSetPage:function(){
      this.$router.push({
        path:'/set'
      })
    },
    setnickname:function(){
      this.$router.push({
        path:'/nick',
        query:{
          id:this.userid,
          name:this.name
        }
      })
    },
    setsign:function(){
      this.$router.push({
        path:'/sign',
        query:{
          id:this.userid,
          sign:this.sign
        }
      })
    },
    getUseInfo:function(){
      var that = this;
      console.log('获取用户信息');
      var id = localStorage.getItem('id')
      this.$http.get('http://www.num12138.top:3000/userInfo?id=' + id)
      .then(function(data){
        console.log(data.data.list[0]);
        that.userid = data.data.list[0].id;
        that.name = data.data.list[0].name == '' ? '未设置' : data.data.list[0].name;
        that.sign = data.data.list[0].sign == '' ? '未设置' : data.data.list[0].sign; 
      })
      .catch(function(error){
        console.log(error)
      })
    }
  }
}