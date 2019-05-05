
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'
import Lyric from './lyric/lyric.vue'
export default {
  data () {
    return {
      playtime:'', //显示在页面上饿音乐播放时间
      currenttime:'', //记录当前播放总时间
      fontimg:'',
      stopanimation:'running',
      touchbtn:true,
      totaltime:0, //歌曲播放总时长
      type:'下载歌曲中',
      playorend:'',
      listdata:'', //保存歌曲列表数据
      listopen:false, 
      playindex:'', //当钱播放的哪首歌曲
      ordertype:0, //歌曲播放顺序 默认0 顺序播放 1 随机播放 2 单曲循环
      startx:0, //进度按钮拖拽用
      movex:0, //进度按钮拖拽用
      endx:0, //进度按钮拖拽用
      x:0, //进度按钮拖拽用
      gragleft:0, //进度按钮拖拽用
      lyric_h:0, //记录歌词面板的高度
      lrctime:'', //传给子组件的歌词播放时间
      musicname:'' //传给子组件播放歌曲名称
    }
  },
  watch:{
    url(){
      this.$nextTick(function () {
        this.playorend = ''
        var gragbtn = this.$refs.gragbtn;
        gragbtn.style.left = 0 + '%';
        this.fontimg = '';
        var newAudio = this.$refs.newaudio;
        newAudio.setAttribute("src", this.url.playurl);
        newAudio.play();
        console.log(newAudio);
        this.musicname = this.url.songname
        this.playindex = parseInt(this.url.id) + 1
      })
      //更换歌曲时恢复进度条位置 重新播放新歌曲 加载成功之前图片不转动
    }
  },
  props:{
    url:{
      default:''
    }
  },
  computed:{
    ...mapGetters([
      'gettotalData',
      'whichmusic',
      'datalength',
      'totaldata',
      'openlyric'
    ]),
    gragleftnum:function(){
      
    }
  },
  components: {
    Lyric
  },
  mounted(){
    console.log(this.url);
  },
  methods:{
    ...mapActions([
      'playmusic',
      'getsongdata',
      'openlyricS'
    ]),
    closeMusic:function(){
      this.playmusic()
    },

    //歌曲播放事件
    updateTime:function(e){
      //显示音乐播放时长
      this.currenttime = e.target.currentTime
      this.lrctime = e.target.currentTime.toFixed(3)*1
      var min = parseInt(e.target.currentTime/60);
      if(min < 10){
        min = '0' + min
      }
      var sec = parseInt(e.target.currentTime%60)
      if(sec < 10){
        sec = '0' + sec
      }
      this.playtime = min + ':' + sec

      //控制音乐播放进度条
      var totaltime = parseInt(e.target.duration)
      this.totaltime = totaltime
      var mowtime = parseInt(e.target.currentTime);
      //播放进度
      var line_w
      line_w = $('.pross_line').width();
      var pross = Math.round(mowtime/totaltime * line_w);
      var gragbtn = this.$refs.gragbtn;
      if(this.touchbtn){
        gragbtn.style.left = pross + 'px';
        this.$refs.prosslinecopy.style.width = pross + 'px';
      }
    },

    //歌曲加载完成可以播放
    loadmusic:function(){
      this.fontimg = 'font_img'
      this.type = '正在播放'
    },

    //歌曲播放完成
    playEnd:function(){
      console.log('播放完了');
      this.fontimg = '';
      if(this.ordertype == 0){
        var nextindex = parseInt(this.whichmusic) + 1
        if(nextindex >= 10){
          nextindex = 1
        }
        this.getsongdata(nextindex);
      }else if(this.ordertype == 1){
        var orderindex = parseInt(Math.random() * 9) + 1
        var nextindex = orderindex
        this.getsongdata(nextindex);
      }
      this.getsongdata(nextindex);
    },
    startbtn:function(){
      var newAudio = this.$refs.newaudio;
      if(!newAudio.paused){
        newAudio.pause();
        var rotatetime = Math.round(this.currenttime/15 * 24);
        this.playorend = 'stopmusic';
        this.stopanimation = 'paused'
        // this.fontimg = '';
      }else{
        newAudio.play()
        this.playorend = ''
        this.fontimg = 'font_img'
        this.stopanimation = 'running'
      }
    },
    //播放下一曲
    playnext:function(){
      console.log('播放下一曲');
      if(this.ordertype == 0){
        var nextindex = parseInt(this.whichmusic) + 1
        if(nextindex >= 10){
          nextindex = 1
        }
      }else if(this.ordertype == 1){
        var orderindex = parseInt(Math.random() * 9) + 1
        var nextindex = orderindex
      }else if(this.ordertype == 2){
        var nextindex = parseInt(this.whichmusic) + 1
        if(nextindex >= 10){
          nextindex = 1
        }
      }
      this.getsongdata(nextindex);
    },
    //播放上一曲
    playpre:function(){
      console.log('播放上一曲');
      if(this.ordertype == 0){
        var preindex = parseInt(this.whichmusic) - 1
        if(preindex == 0){
          preindex = 9
        }
      }else if(this.ordertype == 1){
        var preindex = orderindex
      }else if(this.ordertype == 2){
        var preindex = parseInt(this.whichmusic) - 1
        if(preindex == 0){
          preindex = 9
        }
      }
      console.log(preindex)
      this.getsongdata(preindex);
    },
    setorder:function(){
      console.log('设置播放顺序');
      var noworder = this.ordertype;
      noworder++;
      if(noworder == 3){
        noworder = 0
      }
      if(noworder == 2){
        this.$refs.newaudio.setAttribute('loop','loop');
      }else{
        this.$refs.newaudio.setAttribute('loop',false);
      }
      this.ordertype = noworder;
      console.log(this.ordertype);
    },
    openlist:function(){
      console.log('打开曲库');
      console.log(this.totaldata);
      var list = this.totaldata;
      this.listdata = list;
      this.listopen = !this.listopen;
    },
    closelist:function(){
      this.listopen = !this.listopen;
    },
    choosemusic:function(e){
      var index = parseInt(e.currentTarget.getAttribute('data-id')) + 1
      this.getsongdata(index);
    },
    //进度条小圆点拖拽事件
    gragstart:function(e){
      this.touchbtn = false;
      this.startx = e.touches[0].clientX;
      var movestr = this.$refs.gragbtn.style.left == '' ? 0 : this.$refs.gragbtn.style.left
      // this.gragleft = this.gragleft.Substring(0,this.gragleft.length-2);
      this.gragleft = movestr + ''
      this.gragleft = this.gragleft.substring(0,this.gragleft.length-2);
    },
    gragmove:function(e){
      this.movex = e.touches[0].clientX;
      var gragmove = parseInt(this.movex - this.startx);
      var gragposition = this.gragleft * 1 + gragmove
      var line_w
      line_w = $('.pross_line').width()
      if(gragposition < 0){
        gragposition = 0
      }
      if(gragposition > line_w){
        gragposition = line_w
      }
      this.$refs.gragbtn.style.left = gragposition + 'px'
      this.$refs.prosslinecopy.style.width = gragposition + 'px'
    },
    gragend:function(e){
      console.log('拖动结束');
      var line_w
      line_w = $('.pross_line').width();
      var nowleft = (this.$refs.gragbtn.style.left + '').substring(0,this.$refs.gragbtn.style.left.length-2) * 1;
      var pross = nowleft/line_w
      var nowtime = Math.round(this.totaltime * pross);
      this.$refs.newaudio.currentTime = nowtime;
      this.touchbtn = true;
    },
    //查看歌词面板
    openlyricfn:function(){
      this.openlyricS();
    }
  }
}