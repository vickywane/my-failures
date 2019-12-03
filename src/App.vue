<template>
  <div id="apps">
    <Header />
    <Banner />
    <Form />
    <Failures />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Header, Banner, Form, Footer, Failures } from "./";

@Component({
  components: {
    Header,
    Banner,
    Form,
    Failures,
    Footer
  }
})
export default class App extends Vue {}
</script>

<style>
#apps {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
