import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  // actions: { // 组件调用actions actions通过commit调用mutations
  //   changeCity (ctx, city) {
  //     // console.log(city)
  //     ctx.commit('changeHot', city)
  //   }
  // },
  mutations: mutations,
  getters: {
    doubbt () {
    }
  }
})
