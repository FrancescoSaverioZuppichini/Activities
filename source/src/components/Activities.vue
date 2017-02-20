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
  min-height: 20rem;
  max-height: 30rem;
  overflow-y: scroll;
}
</style>
