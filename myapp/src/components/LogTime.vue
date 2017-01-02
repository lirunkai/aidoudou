<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label>日期</label>
        <input type="date" class="form-control" v-model="date" placeholder="Date"/>
      </div>
      <div class="col-sm-6">
        <label>时间</label>
        <input type="number" class="form-control" v-model="totalTime" placeholder="Hours"/>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>备注</label>
        <input type="text" class="form-control" v-model="comment" placeholder="Comment">
      </div>
    </div>
    <button class="btn btn-primary" @click="save">保存</button>
    <router-link to="/time-entries" class="btn btn-danger">取消</router-link>
    <hr>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'LogTime',
    data () {
      return {
        data: '',
        totalTime: '',
        comment: ''
      }
    },
    methods: {
      save () {
        const plan = {
          name: 'li',
          totalTime: this.totalTime,
          date: this.date,
          comment: this.comment,
          avatar: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1483261729&di=b21a3d0db8104a895ac61fec3f2a0ee7&src=http://img3.duitang.com/uploads/item/201507/28/20150728095308_WXtca.jpeg'
        }
        this.$store.dispatch('savePlan', plan)
        this.$store.dispatch('addTotalTime', this.totalTime)
        this.$router.go(-1)
      }
    }
  }
</script>
