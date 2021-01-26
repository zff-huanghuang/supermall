<template>
  <div class="index">
    <nav-bar class="home-nav">
      <div slot="left">
        <img src="~assets/img/common/back.svg">
      </div>
      <div slot="center">
        首页
      </div>
      <div slot="right">
        <img src="~assets/img/common/arrow-left.svg">
      </div>
    </nav-bar>
    <Swiper />
    <div class="featureDiv border">
      <img src="~assets/img/home/recommend_bg.jpg">
    </div>
    <div class="featureDiv">
      <img src="~assets/img/home/recommend_bg.jpg">
    </div>
    <tab-control
      :tabs="['流行','新款','精选']"
      class="tab-control"
      @changeTab="changeTab"
    />
    <good-list :goods="showGoods"></good-list>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Swiper from 'components/common/swiper/Swiper';
import TabControl from 'components/content/tabControl/TabControl';
import GoodList from "components/content/goods/GoodList";
export default {
  components: {
    NavBar,
    Swiper,
    TabControl,
    GoodList
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list;
    }
  },
data(){
    return{
      currentType:"pop",
      goods:{
        pop:{
          page:0,
          list:[{
            id:1,
            img:require('@/assets/img/home/pop.jpg'),
            title:"测试1"
          },
            {
              id:2,
              img:require('@/assets/img/home/pop.jpg'),
              title:"测试2"
            },
            {
              id:3,
              img:require('@/assets/img/home/pop.jpg'),
              title:"测试3"
            },
            {
              id:4,
              img:require('@/assets/img/home/pop.jpg'),
              title:"测试4"
            }]
        },
        new:{
          page:0,
          list:[]
        },
        sell:{
          page:0,
          list:[]
        }
      }
    }
},
  methods: {
    changeTab(index){
      this.currentType = index==0?'pop':index==1?'new':'sell';
    }
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
.featureDiv{
  img{
    width: 100%;
  }
}
.border{
  border-bottom: 8px solid #eee;
}
.tab-control{
  position: sticky;
  top: 44px;
}
</style>
