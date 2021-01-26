<template>
  <swiper ref="mySwiper" :options="swiperOptions" class="swiper-container">
    <swiper-item v-for="v in data">{{v.name}}</swiper-item>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import {Swiper} from 'vue-awesome-swiper';
import SwiperItem from 'components/common/swiper/SwiperItem';
import 'swiper/css/swiper.css';

export default {
  name: 'carrousel',
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      data: [{
        name: 'slide1'
      }, {
        name: 'slide2'
      }, {
        name: 'slide3'
      }, {
        name: 'slide4'
      }, {
        name: 'slide5'
      }],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true,
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  }
}
</script>
<style lang="scss">
.swiper-container {
  width: 100%;
  height: 200px;
}
</style>
