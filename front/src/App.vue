<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import Layout from "./components/layout";
export default {
  name: "App",
  components: {
    Layout,
  },
};
</script>

<style>
@import "./variable.css";

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: var(--dark);
}
</style>
