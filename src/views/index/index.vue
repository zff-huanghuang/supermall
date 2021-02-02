<template>
  <div class="index wrapper" id="home">
    <nav-bar class="home-nav">
      <div slot="left">
        <img src="~assets/img/common/back.svg">
      </div>
      <div slot="center" style="color: #fff">
          首页
      </div>
      <div slot="right">
        <img src="~assets/img/common/arrow-left.svg">
      </div>
    </nav-bar>
    <tab-control
      :tabs="['流行','新款','精选']"
      class="tab-control"
      @changeTab="changeTab"
      ref="tabControl1"
      v-show="isTabFixed"
    />
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="scroll" @loadmore="loadmore" :pull-up-load="true">

      <swiper>
        <swiper-item v-for="v in swiperImgs">
          <img :src="v.img" alt="图片不显示" class="img">
        </swiper-item>
      </swiper>


      <div class="featureDiv border">
        <img src="~assets/img/home/recommend_bg.jpg">
      </div>
      <div class="featureDiv">
        <img src="~assets/img/home/recommend_bg.jpg" @load="swiperImgLoad">
      </div>
      <tab-control
        :tabs="['流行','新款','精选']"
        @changeTab="changeTab"
        ref="tabControl2"
      />
      <good-list :goods="showGoods"></good-list>
    </scroll>

    <back-top @click.native="backTop" v-if="showBackTop"/>

  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Swiper from 'components/common/swiper/Swiper';
import SwiperItem from 'components/common/swiper/SwiperItem';
import TabControl from 'components/content/tabControl/TabControl';
import GoodList from "components/content/goods/GoodList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/common/backTop/BackTop";
import {debounce} from 'common/utils';

export default {
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    TabControl,
    GoodList,
    Scroll,
    BackTop
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  data() {
    return {
      currentType: "pop",
      goods: {
        pop: {
          page: 0,
          list: [{
            id: 1,
            img: require('@/assets/img/home/pop.jpg'),
            title: "测试1"
          },
            {
              id: 2,
              img: require('@/assets/img/home/pop.jpg'),
              title: "测试2"
            },
            {
              id: 3,
              img: require('@/assets/img/home/pop.jpg'),
              title: "测试3"
            },
            {
              id: 4,
              img: require('@/assets/img/home/pop.jpg'),
              title: "测试4"
            },
            {
              id: 5,
              img: require('@/assets/img/home/pop.jpg'),
              title: "测试1"
            },
            {
              id: 6,
              img: require('@/assets/img/home/pop.jpg'),
              title: "测试2"
            },
            {
              id: 7,
              img: require('@/assets/img/home/pop.jpg'),
              title: "测试3"
            },
            {
              id: 8,
              img: require('@/assets/img/home/pop.jpg'),
              title: "测试4"
            }]
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      showBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      scrollY:0,
      swiperImgs:[{
        img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607406207249&di=5dd84b10f67bebb31ba635fc1da60fe0&imgtype=0&src=http%3A%2F%2Fimg.5mcc.com.cn%2F5mcc_com_cn%2Fallimg%2F190131%2F141UH3Q-3.jpg"
      },{
        img:"https://img1.hzwf.com/images/day_191213/201912131314458587.png"
      }],
      isLoad:false
    }
  },
  mounted() {
    let refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on('itemImageLoad', () => {
      refresh();
    })
  },
  //页面显示时 滚动到滚动位置
  activated() {
    this.$refs.scroll.scrollTo(0,this.scrollY,0);
    this.$refs.scroll.refresh();
  },
  //页面离开时 记录滚动位置
  deactivated() {
    this.scrollY = this.$refs.scroll.getScrollY();
  },
  methods: {
    changeTab(index) {
      this.currentType = index == 0 ? 'pop' : index == 1 ? 'new' : 'sell';
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    // 滚动 事件
    scroll({x, y}) {
      //判断backTop是否显示
      this.showBackTop = (-y) > 200;

      // 决定tabControl是否吸顶
      this.isTabFixed = (-y) > this.tabOffsetTop;
    },
    loadmore() {
      this.getData(this.currentType);
    },
    getData(type) {
      this.goods[type].page += 1;

      //请求接口  获取下一页数据  push进对应的list
      this.goods[type].list.push(...[]);
    },
    // 组件里面元素的offsetTop
    swiperImgLoad() {
      if(!this.isLoad){
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
        console.log(this.tabOffsetTop)
        this.isLoad = true;
      }

    }
  },
}
</script>

<style scoped lang="scss">
#home {
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  z-index:9;
}

.featureDiv {
  img {
    width: 100%;
  }
}

.border {
  border-bottom: 8px solid #eee;
}

.tab-control {
  position: relative;
  z-index: 9;
}

.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 50px;
}
</style>
