// import Thr from '../thrlenel/thrlevel.vue'
export default {
  props:{
    data:{
      default:null
    }
  },
  mounted(){
  },
  data () {
    return {
      secsearchload:false,
      thrdata:[],
      thropen:false
    }
  },

  //组件按需加载
  components: {
    Thr:function(resolve){
      require(['../thrlenel/thrlevel.vue'],resolve);
    }
  },
  methods:{
    secreturn:function(){
      //子到父组件通信，关闭子组件
      this.$emit('secback');
    },
    chooseitem:function(e){
      var itemid = e.target.dataset.id;
      console.log(itemid);
      this.secsearchload = true;
      var that = this
      this.$http.get('/api/dream/queryid?id='+itemid+'&key=e072388186eba292606470206f1ac2fa')
      .then(function(data){
        var thrdata = data.data.result.list;
        that.thrdata = thrdata;
        that.secsearchload = false;
        that.thropen = true;
        console.log(thrdata);
      })
      .catch(function(error){
        console.log(error);
        that.secsearchload = false;
      })
    },
    thrback:function(){
      this.thropen = false;
    }
  }
}