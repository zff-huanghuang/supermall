<template>
  <div class="index">
    <nav-bar class="home-nav">
      <div slot="left">返回</div>
      <div slot="center">xxxx</div>
      <div slot="right">前进</div>
    </nav-bar>
    <Swiper />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Swiper from 'components/common/swiper/Swiper';
export default {
  components: {
    NavBar,
    Swiper
  },

  methods: {
  },
}
</script>

<style scoped lang="scss">
.index{
  padding-top: 44px;
}
.home-nav{
  background-color: var(--color-tint);
}
</style>
