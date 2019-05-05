import Vue from 'vue'
import vuex from 'vuex'
import mine_store from './mine.js'
import music_store from './music.js'
Vue.use(vuex)

export default new vuex.Store({
  modules:{
    minestore:mine_store,
    musicstore:music_store
  }
})
