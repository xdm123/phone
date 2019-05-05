import {mapActions} from 'vuex';

export default {
  data () {
    return {
      gnzwlrc:'',
      lrcobj:''
    }
  },
  props:[
    'timeplay',
    'name'
  ],
  watch:{
    timeplay(){
     this.showlrctxt()
    }
  },
  components: {

  },
  mounted(){
    this.getlrc();
    this.creatlrc();
  },
  methods:{
    ...mapActions([
      'openlyricS'
    ]),
    
    hidelyric:function(){
      this.openlyricS(); //关闭歌词面板
    },
    getlrc:function(){
      var lrctxt = this.$refs.gnzw.innerHTML;
      this.gnzw = lrctxt
      // console.log(this.gnzw)
    },
    creatlrc:function(){
      var that = this
      var oLRC = {
        ti: "", //歌曲名
        ar: "", //演唱者
        al: "", //专辑名
        by: "", //歌词制作人
        offset: 0, //时间补偿值，单位毫秒，用于调整歌词整体位置
        ms: [] //歌词数组{t:时间,c:歌词}
      };
      function createLrcObj(lrc) {
        if(lrc.length==0) return;
        var lrcs = lrc.split('\n');//用回车拆分成数组
        for(var i in lrcs) {//遍历歌词数组
          lrcs[i] = lrcs[i].replace(/(^\s*)|(\s*$)/g, ""); //去除前后空格
            var t = lrcs[i].substring(lrcs[i].indexOf("[") + 1, lrcs[i].indexOf("]"));//取[]间的内容
            var s = t.split(":");//分离:前后文字
            if(isNaN(parseInt(s[0]))) { //不是数值
              for (var i in oLRC) {
                  if (i != "ms" && i == s[0].toLowerCase()) {
                      oLRC[i] = s[1];
                  }
              }
            }else { //是数值
                var arr = lrcs[i].match(/\[(\d+:.+?)\]/g);//提取时间字段，可能有多个
                var start = 0;
                for(var k in arr){
                    start += arr[k].length; //计算歌词位置
                }
                var content = lrcs[i].substring(start);//获取歌词内容
                for (var k in arr){
                    var t = arr[k].substring(1, arr[k].length-1);//取[]间的内容
                    var s = t.split(":");//分离:前后文字
                    oLRC.ms.push({//对象{t:时间,c:歌词}加入ms数组
                        t: (parseFloat(s[0])*60+parseFloat(s[1])).toFixed(3),
                        c: content
                    });
                }
            }
        }
        oLRC.ms.sort(function (a, b) {//按时间顺序排序
            return a.t-b.t;
        });
        console.log(oLRC)
      }
      this.lrcobj = oLRC
      createLrcObj(this.gnzw);
    },
    showlrctxt:function(){
      var y = 0
      var that = this
      
      for(var i=0; i<that.lrcobj.ms.length; i++){
        var t = that.lrcobj.ms[i].t * 1
        if(that.timeplay>t){
          y++
        }
      }
      this.$refs.lrcul.style.marginTop = -y*35 + 'px';

      var lrcli = this.$refs.lrcli;
      for(var j=0; j<lrcli.length; j++){
        lrcli[j].style.color='#fff'
        lrcli[j].style.fontSize='16px'
      }
      lrcli[y-1].style.color='greenyellow'
      lrcli[y-1].style.fontSize='20px'
    }
  }
}

