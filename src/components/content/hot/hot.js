
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      hotdata:[
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
          songname:'夜曲',
          playurl:require('../../../assets/music/yq.mp3'),
          singer:'周杰伦',
        },
        {
          id:2,
          head_url:'http://y.gtimg.cn/music/photo_new/T002R150x150M000001gqOnU3DTg2S.jpg?max_age=2592000',
          fontimg:'http://y.gtimg.cn/music/photo_new/T002R300x300M000001gqOnU3DTg2S.jpg?max_age=2592000',
          songname:'修炼爱情',
          singer:'林俊杰',
        },{
          id:3,
          head_url:'http://y.gtimg.cn/music/photo_new/T002R150x150M000001qYTzY2oyDyZ.jpg?max_age=2592000',
          fontimg:'http://y.gtimg.cn/music/photo_new/T002R300x300M000001qYTzY2oyDyZ.jpg?max_age=2592000',
          songname:'体面',
          singer:'于文文'
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
        },
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
          songname:'慢慢喜欢你',
          head_url:'http://y.gtimg.cn/music/photo_new/T002R150x150M000001XtPF21kfMXb.jpg?max_age=2592000',
          fontimg:'http://y.gtimg.cn/music/photo_new/T002R300x300M000001XtPF21kfMXb.jpg?max_age=2592000',
          singer:'莫文蔚',
        }
      ]
    }
  },
  components: {

  },
  methods:{
    ...mapActions([
      'playmusic', //是否打开音乐播放组件方法
      'getsongdata'
    ]),
    playMusciPage:function(e){
      var select = parseInt(e.target.dataset.id) + 1;
      console.log(select)
      this.getsongdata(select)
      this.playmusic()
    },
    totlepage:function(){
      this.$router.push({
        path:'/already',
        query:{
          title:'查看全部'
        }
      })
    }
  }
}