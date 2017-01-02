import * as types from './mutation-types'

export default {
  addTotalTime ({ commit }, time) {
    commit('ADD_TOTAL_TIME', time)
  },
  decTotalTime ({ commit }, time) {
    commit('DEC_TOTAL_TIME', time)
  },
  savePlan ({ commit }, plan) {
    commit('SAVE_PLAN', plan)
  },
  deletePlan ({ commit }, index) {
    commit('DELETE_PLAN', index)
  }
}
