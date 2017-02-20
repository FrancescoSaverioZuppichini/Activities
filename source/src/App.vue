<template>
<div id="app" class="f-h">
  <activityPage/>
</div>
</template>

<script>
import style from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import ActivityPage from './components/ActivityPage.vue'

import ActivityStore from './store/ActivityStore.js'
export default {
  name: 'app',
  data() {
    return {store: ActivityStore}
  },
  components: {
    ActivityPage
  }
}
</script>

<style>
.f-h {
  height: 100%;
}
</style>
