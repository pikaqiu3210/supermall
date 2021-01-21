<template>
  <div id="app">
    <router-view />

    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "./components/content/mainTabbar/MainTabBar";
export default {
  components: {
    MainTabBar,
  },
  name: "APP",
};
</script>
<style>
@import url("assets/css/base.css");
</style>
