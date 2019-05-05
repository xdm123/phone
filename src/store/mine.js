export default {
  state:{
    test:'测试数据',
    searchFocus:false,
    playmusic:false, //播放器
    openlyric:false, // 歌词
    login:false,
    nick:'未设置'
  },
  getters:{
    gettest(state){
      return state.test
    },
    getSearch(state){
      return state.searchFocus
    },
    playmusic(state){
      return state.playmusic
    },
    openlyric(state){
      return state.openlyric
    },
    islogin(state){
      return state.login
    },
    setnick:state => state.nick
  },
  mutations:{
    changetest(state,data){
      state.test = data
    },
    changesearch(state){
      state.searchFocus = !state.searchFocus
    },
    playmusic(state){
      state.playmusic = !state.playmusic
    },
    openlyricM(state){
      state.openlyric = !state.openlyric
    },
    islogin(state){
      state.login = !state.login
    },
    setnickm(state,data){
      state.nick = data
    }
  },
  actions:{
    changetest(context,data){
      context.commit('changetest',data)
    },
    changesearch(context){
      context.commit('changesearch')
    },
    playmusic(context){
      context.commit('playmusic')
    },
    openlyricS(context){
      context.commit('openlyricM');
    },
    islogin(context){
      context.commit('islogin');
    },
    setnicka(context,data){
      context.commit('setnickm',data);
    }
  }
}