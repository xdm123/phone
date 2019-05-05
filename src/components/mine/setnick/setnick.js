export default {
  data () {
    return {
      val:'',
      id:'',
      name:''
    }
  },
  computed:{
    
  },
  components: {

  },
  mounted(){
    this.id = this.$route.query.id
    this.name = this.$route.query.name
    console.log(this.id)
  },
  methods:{
    nickreturn:function(){
      this.$router.go(-1);
    },
    clearvalue:function(){
      this.val = '';
    },
    savenick:function(){
      var nickname = this.val;
      var id = this.id
      var that = this
      console.log(nickname);
      this.$http.get('http://139.199.111.86:3000/updateUserInfo?name='+nickname+'&id='+id)
      .then(function(data){
        console.log(data)
        if(data.data.status == 200){
          that.$emit('getuserinfo')
          that.$router.go(-1);
        }
      })
      .catch(function(error){
        console.log(error)
      })
      // this.$router.go(-1);
    }
  }
}