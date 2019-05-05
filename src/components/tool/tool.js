export default {
  data () {
    return {
      
    }
  },
  components: {

  },
  mounted(){

  },
  methods:{
    toolreturn:function(){
      this.$router.go(-1);
    },
    tojiemengpage:function(){
      this.$router.push({
        path:'/jm'
      })
    }
  }
}