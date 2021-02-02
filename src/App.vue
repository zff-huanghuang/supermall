<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar';
export default {
  components: {
    MainTabBar
  }
}
</script>
<style lang="scss">
@import "assets/css/base.css";
#app{
  padding-bottom: 50px;
}
</style>
