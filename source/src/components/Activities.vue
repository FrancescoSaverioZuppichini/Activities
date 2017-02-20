<template>
<div id="activities">
  <activity :activity="activity" v-for="activity in activities"/>
</div>
</template>
<script>
import Activity from './Activity.vue'
export default {
  name: "",
  props:["activities"],
  components: {
    Activity
  },
  data: function data() {
    return {

    }
  }
}
</script>
<style>
#activities{
  min-height: 30vh;
  max-height: 80vh;
  overflow-y: scroll;
}
</style>
