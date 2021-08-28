<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
@import "./assets/css/base.css";

#app {
  width: 100%;
  max-width: 720px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #fff;
}
</style>
