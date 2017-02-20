<template>
<div style="width: 20rem;">
  <div class="card-block">
    <div class="input-group">
      <input type="text" class="form-control" placeholder="What's to do?" v-model="activity.name" aria-describedby="basic-addon2">
      <button class="btn input-group-addon" @click="addActivity"> Add </button>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="form-group row col">
          <div class="flex--center flex-list">
            <i class="fa fa-clock-o fa-lg" aria-hidden="true"></i>
            <label for="example-color-input" class="col-2 col-form-label">Time</label>
          </div>

          <input type="number" class="form-control input-number" placeholder="1" v-model="activity.time">
        </div>

        <div class="form-group row  col">
          <div class="flex--center flex-list">
            <i class="fa fa-briefcase fa-lg" aria-hidden="true"></i>
            <label for="example-color-input" class="col-2 col-form-label">XP</label>
          </div>

          <input type="number" class="form-control input-number" placeholder="1" v-model="activity.xp">
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import ActivityStore from '../store/ActivityStore.js'

export default {
  name: "",
  data: function data() {
    return {
      activity: {
        name: "",
        time: 1,
        xp: 1,
        match: false,
        display: false
      }
    }
  },
  methods: {
    addActivity() {
      const newActivity = Object.assign({}, this.activity)
      console.log(newActivity)
      ActivityStore.addActivity(newActivity)
    }
  }
}
</script>
<style>
.input-number {}
</style>
