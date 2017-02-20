<template>
<div class="item--centered f-h">
  <div class="card">
    <div class=" card-block">
      <activity-creator/>
      <p class="text-center"> {{activityStoreState.activities.length}} activities </p>
      <p class="card-text">
        <activities :activities="activityStoreState.activities" />
      </p>
      <!-- <button type="button" class="btn btn-primary" @click="findTodos">find </button> -->
      <a href="#" class="card-link" @click="showAll">All </a>
      <a href="#" class="card-link" @click="showTodos">Todos </a>
<br>
<small> double click to modify </small>
    </div>
  </div>

</div>
</template>
<script>
import Activities from './Activities.vue'
import ActivityCreator from './ActivityCreator.vue'

import ActivityStore from '../store/ActivityStore.js'

export default {
  name: "",
  components: {
    Activities,
    ActivityCreator
  },
  data: function data() {
    return {
      activityStoreState: ActivityStore.state
    }
  },
  methods: {
    findTodos() {
      ActivityStore.findTodos()
    },
    showAll() {
      ActivityStore.showAll()
    },
    showTodos() {
      ActivityStore.showTodos()
    }
  }
}
</script>
<style>
html,
body {
  height: 100%;
  background-color: rgb(250, 250, 250);
}

.flex-list {
  display: flex;
}

.flex-list--column {
  flex-direction: column;
}

.flex--center{
  align-items: center;
}
.item--centered {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
