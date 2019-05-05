import Funscroll from '../../base/scroll/scroll.vue'
// import config from 'config'
export default {
  data () {
    return {
      navdata:[
        {
          id:0,
          name:'头条',
        },
        {
          id:1,
          name:'社会',
        },
        {
          id:2,
          name:'国内',
        },
        {
          id:3,
          name:'国际',
        },
        {
          id:4,
          name:'娱乐',
        },
        {
          id:5,
          name:'体育',
        },
        {
          id:6,
          name:'军事',
        },
        {
          id:7,
          name:'科技',
        },
        {
          id:8,
          name:'财经',
        },
        {
          id:9,
          name:'时尚',
        }
      ],
      select:0,
      listdata:[],
      senddata:[],
      type:'top'
    }
  },
  components: {
    Funscroll
  },
  mounted(){
    var typenow = this.type;
    this.getnavdata(typenow);
  },
  methods:{
    funsreturn:function(){
      this.$router.go(-1);
    },
    selectctn:function(e){
      var seleindex = e.target.dataset.id * 1;
      this.select = seleindex; //点击了哪个板块
      var typearr = ['top','shehui','guonei','guoji','yule','tiyu','junshi','keji','caijing','shishang'];
      var type = typearr[seleindex];
      this.type = type
      this.getnavdata(type)


      //调整导航条整体位置
      var listview = this.$refs.listview;
      var listgroup = this.$refs.navliref;
      var L = parseInt(this.$refs.funsnav.offsetWidth)
      var d = parseInt(e.clientX-e.offsetX)
      var l = $('.navli').width() * 1;
      console.log()
      if(seleindex > 0 && d < l/2){
        console.log('符合调价');
        var cutIndex = seleindex - 1
        listview.scrollToElement(listgroup[cutIndex],2);
      }else if(seleindex < 9 && L - d - l < l/2){
        console.log('符合另一个条件');
        var cutIndex = seleindex + 1
        listview.scrollToElement(listgroup[cutIndex],2);
      }else{
        console.log('不动');
      }
      console.log();
    },
    //获取板块内容
    getnavdata:function(type){
      var that = this
      this.$http.get('/api/toutiao/index?type='+type+'&key=7f280e3c637b10e888bce909ed5f3e2a')
      .then(function(data){
        var getdata = data.data.result.data
        that.listdata = getdata
        console.log(that.listdata)
        // that.senddata = getdata.splice(0,5)
        // console.log(that.senddata)
      })
      .catch(function(dsad){
        console.log(dsad);
      })
    },

    //下拉刷新内容
    refreshdata:function(){
      console.log()
      console.log('下拉刷新内容');
      var typenow = this.type;
      this.getnavdata(typenow);
    },

    //跳转到新闻详情页
    openitem:function(e){
      // var  href = e.currentTarget.getAttribute('data-url')
      // console.log(href);
      // window.location.href = href
    }
  }
}