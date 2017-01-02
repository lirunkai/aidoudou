import * as types from './mutation-types'

export default {
  [types.ADD_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime + time
  },
  [types.DEC_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime - time
  },
  [types.SAVE_PLAN] (state, plan) {
    const avatar = 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1483261729&di=b21a3d0db8104a895ac61fec3f2a0ee7&src=http://img3.duitang.com/uploads/item/201507/28/20150728095308_WXtca.jpeg';
    state.list.push(
      Object.assign({name: 'li', avatar: avatar}, plan)
    )
  },
  [types.DELETE_PLAN] (state, index) {
    state.list.splice(index, 1)
  }
}
