<template>
  <div id="apps">
    <List />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"; 
import List from './list.vue'

@Component({
  components: {
      List
  }
})
export default class Failures extends Vue {}
</script>

<style scoped >
#apps {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
