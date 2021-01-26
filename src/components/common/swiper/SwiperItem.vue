<template>
  <swiper-slide class="swiper-item">
    <div>
      <slot></slot>
    </div>
  </swiper-slide>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper';
export default {
name: "SwiperItem",
  components: {
    SwiperSlide
  },
}
</script>

<style scoped lang="scss">
.swiper-item{
  background-color: #666666;
  text-align: center;
  font-size: 30px;
}
</style>
