import BScroll from '../../base/scroll/scroll.vue'
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      title:'',
      total:[],
    }
  },
  computed:{
    ...mapGetters([
      'totaldata'
    ])
  },
  components: {
    BScroll
  },
  mounted(){
    var title = this.$route.query.title
    this.title = title;
    var arr = [];

    for(var i = 1;i<this.totaldata.length; i++){
      arr.push(this.totaldata[i])
    }
    this.total = arr
  },
  methods:{
    returnal:function(){
      this.$router.go(-1);
    }
  }
}