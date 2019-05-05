
import Swiper from 'swiper'
import'../../../assets/css/swiper.min.css'
import BScroll from '../../../base/scroll/scroll.vue'
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      rankdata:[
        [
          {
            id:0,
            head_url:'http://y.gtimg.cn/music/photo_new/T002R150x150M000001mTkmb4GJlh4.jpg?max_age=2592000',
            fontimg:'http://y.gtimg.cn/music/photo_new/T002R300x300M000001mTkmb4GJlh4.jpg?max_age=2592000',
            playurl:require('../../../assets/music/gnzw.mp3'),
            songname:'光年之外',
            singer:'邓紫棋',
          },
          {
            id:1,
            head_url:'http://y.gtimg.cn/music/photo_new/T002R150x150M0000024bjiL2aocxT.jpg?max_age=2592000',
            fontimg:'http://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg?max_age=2592000',
            playurl:require('../../../assets/music/yq.mp3'),
            songname:'夜曲',
            singer:'周杰伦',
          },
          {
            id:2,
            head_url:'http://y.gtimg.cn/music/photo_new/T002R150x150M000001gqOnU3DTg2S.jpg?max_age=2592000',
            fontimg:'http://y.gtimg.cn/music/photo_new/T002R300x300M000001gqOnU3DTg2S.jpg?max_age=2592000',
            songname:'修炼爱情',
            singer:'林俊杰',
          }
        ],
        [
          {
            id:3,
            head_url:'http://y.gtimg.cn/music/photo_new/T002R150x150M000001qYTzY2oyDyZ.jpg?max_age=2592000',
            fontimg:'http://y.gtimg.cn/music/photo_new/T002R300x300M000001qYTzY2oyDyZ.jpg?max_age=2592000',
            songname:'体面',
            singer:'于文文',
          },
          {
            id:4,
            head_url:'http://y.gtimg.cn/music/photo_new/T002R150x150M000002xoonH2Bk7FR.jpg?max_age=2592000',
            fontimg:'http://y.gtimg.cn/music/photo_new/T002R300x300M000002xoonH2Bk7FR.jpg?max_age=2592000',
            songname:'消愁',
            singer:'毛不易',
          },
          {
            id:5,
            head_url:'http://y.gtimg.cn/music/photo_new/T002R150x150M0000016lk1t0LgKw6.jpg?max_age=2592000',
            fontimg:'http://y.gtimg.cn/music/photo_new/T002R300x300M0000016lk1t0LgKw6.jpg?max_age=2592000',
            songname:'说爱你',
            singer:'刘至佳',
          }
        ],
        [
          {
            id:6,
            head_url:'http://y.gtimg.cn/music/photo_new/T002R150x150M000001113yq0FzW3O.jpg?max_age=2592000',
            fontimg:'http://y.gtimg.cn/music/photo_new/T002R300x300M000001113yq0FzW3O.jpg?max_age=2592000',
            songname:'月光',
            singer:'胡彦斌',
          },
          {
            id:7,
            head_url:'http://y.gtimg.cn/music/photo_new/T002R150x150M000002VeS6r4L5fLZ.jpg?max_age=2592000',
            fontimg:'http://y.gtimg.cn/music/photo_new/T002R300x300M000002VeS6r4L5fLZ.jpg?max_age=2592000',
            songname:'斑马，斑马',
            singer:'宋冬野',
          },
          {
            id:8,
            head_url:'http://y.gtimg.cn/music/photo_new/T002R150x150M000001XtPF21kfMXb.jpg?max_age=2592000',
            fontimg:'http://y.gtimg.cn/music/photo_new/T002R300x300M000001XtPF21kfMXb.jpg?max_age=2592000',
            songname:'慢慢喜欢你',
            singer:'莫文蔚',
          }
        ]
      ]
    }
  },
  components: {
    BScroll
  },
  mounted(){
  },
  methods:{
    ...mapActions([
      'playmusic',
      'getsongdata'
    ]),
    openMuiscPage:function(){
    },
    start ($event) {
      this.startY = $event.touches[0].pageY
    },
    stop ($event) {
      const moving = Math.abs($event.changedTouches[0].pageY - this.startY)
      if (moving > 20) return;
      this.startY = 0
      var select = parseInt($event.target.dataset.id) + 1
      console.log(select)
      this.getsongdata(select)
      this.playmusic()
    },
    toalreadypage:function(e){
      this.$router.push({
        path:'/already',
        query:{
          title:'已点歌曲'
        }
      })
    },
    tofunspage:function(){
      this.$router.push({
        path:'/funs'
      })
    },
    toolpage:function(){
      this.$router.push({
        path:'/tool'
      })
    },
    testExpressApi:function(){
      this.$router.push({
        path:'/testapi'
      })
    }
  }
}