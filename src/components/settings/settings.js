import {mapActions} from 'vuex'

export default {
  data () {
    return {

    }
  },
  components: {

  },
  methods:{
    ...mapActions([
      'islogin'
    ]),
    setreturn:function(){
      this.$router.go(-1);
    },
    toadminPage:function(){
      this.$router.push({
        path:'/admin'
      })
    },
    exitlogin:function(){
      this.islogin();
      this.$router.go(-2);
    },
    commonset:function(){
      console.log('去往通用页面');
      this.$router.push({
        path:'/common'
      })
    }
  }
}