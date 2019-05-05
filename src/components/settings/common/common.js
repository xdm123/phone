
import BScrollcom from '../../../base/scroll/scroll.vue'
export default {
  data () {
    return {
      textcolor:'red'
    }
  },
  components: {
    BScrollcom
  },
  methods:{
    comreturn:function(){
      this.$router.go(-1);
    },
    getdata:function(){
      
    }
  }
}


// function html2Escape(sHtml) { 
//   return  sHtml.replace(/[<>&"']/g, function(c){
//     return {'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c];
// }); 
// }