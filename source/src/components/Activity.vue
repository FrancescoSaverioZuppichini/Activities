<template>
<transition name="fade">
  <div class="card" style="width: 20rem;" v-if="activity.display" :class="{hidden: !activity.match}" @mouseleave="active = false" @mouseenter="active = true" @dblclick="editable=!editable">
    <div class="card-block" v-if="editable" @keyup.enter.prevent="editable=!editable">
      <input type="text" class="form-control" :value="activity.name" v-model="activity.name">
      <div class="flex-list">
        <div class="container-fluid">
          <div class="row">
            <div class="form-group row col">
              <div class="flex--center flex-list">
                <i class="fa fa-clock-o" aria-hidden="true"></i>

                <input type="number" class="form-control input-number" placeholder="1" v-model="activity.time">
              </div>
            </div>
            <div class="form-group row  col">
              <div class="flex--center flex-list">
                <i class="fa fa-briefcase" aria-hidden="true"></i>
                <input type="number" class="form-control input-number" placeholder="1" v-model="activity.xp">
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-block" v-else>
      <p class="card-text">{{activity.name}}</p>
      <div class="flex-list">
        <div>
          <i class="fa fa-clock-o " aria-hidden="true"></i> {{activity.time}}
        </div>
        <div>
          <i class="fa fa-briefcase " aria-hidden="true"></i> {{activity.xp}}
        </div>
      </div>
    </div>
  </div>
</transition>
</template>
<script>
import ActivityStore from '../store/ActivityStore.js'

export default {
  name: "",
  props: ["activity"],
  watch: {
    'activity.xp': () => {
      ActivityStore.findTodos()
    },
    'activity.time': () => {
      ActivityStore.findTodos()
    },
    deep: true
  },
  data: function data() {
    return {
      active: false,
      editable: false
    }
  },
  methods: {
    remove() {
      ActivityStore.removeActivity(this.activity)
    }
  }
}
</script>
<style scoped>
.hidden {
  opacity: 0.5;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */

{
  opacity: 0
}
</style>
