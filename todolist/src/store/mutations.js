import * as types from './mutation-types.js'
export default {
  // 添加总时间
  [types.ADD_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime + time
  },
  // 减少总时间
  [types.DEC_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime - time
  },
  // 新增计划
  [types.SAVE_PLAN] (state, plan) {
    // 设置默认值
    const avatar = 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1483261729&di=b21a3d0db8104a895ac61fec3f2a0ee7&src=http://img3.duitang.com/uploads/item/201507/28/20150728095308_WXtca.jpeg'
    state.list.push(
      Object.assign({name: 'li', avatar: avatar}, plan)
    )
  },
  // 删除某计划
  [types.DELETE_PLAN] (state, index) {
    state.list.splice(index, 1)
  }
}
