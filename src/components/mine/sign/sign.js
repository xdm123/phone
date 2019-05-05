export default {
  data () {
    return {
      textnum:0,
      textdata:'',
      id:'',
      sign:''
    }
  },
  components: {

  },
  mounted(){
    this.id = this.$route.query.id
    this.sign = this.$route.query.sign
  },
  methods:{
    signreturn:function(){
      this.$router.go(-1)
    },
    savesign:function(){
      var sign = this.textdata;
      var id = this.id
      var that = this
      this.$http.get('http://139.199.111.86:3000/updateUserInfo?sign='+sign+'&id='+id)
      .then(function(data){
        console.log(data)
        if(data.data.status == 200){
          that.$router.go(-1);
        }
      })
      .catch(function(error){
        console.log(error)
      })
    },
    inputfn:function(){
      console.log(this.textdata);
      
      this.textnum = this.textdata.length;
    }
  }
}