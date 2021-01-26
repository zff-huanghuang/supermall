<template>
  <tab-bar>
    <TabBarItem v-for="v in tabs" :key="v.text" :path="v.path" activeColor="#ff5777">
      <img alt="Vue logo" :src="v.img" slot="itemIcon">
      <img alt="Vue logo" :src="v.imgActive" slot="itemIconActive">
      <div slot="itemText">{{v.text}}</div>
    </TabBarItem>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar';
import TabBarItem from 'components/common/tabbar/TabBarItem';
export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  },
  data(){
    return{
      tabs:[{
        img:require("@/assets/img/tabBar/home.svg"),
        imgActive:require("@/assets/img/tabBar/home_active.svg"),
        text:"首页",
        path:"/index"
      },
        {
          img:require("@/assets/img/tabBar/category.svg"),
          imgActive:require("@/assets/img/tabBar/category_active.svg"),
          text:"分类",
          path:"/cate"
        },
        {
          img:require("@/assets/img/tabBar/shopcart.svg"),
          imgActive:require("@/assets/img/tabBar/shopcart_active.svg"),
          text:"购物车",
          path:"/cart"
        },
        {
          img:require("@/assets/img/tabBar/profile.svg"),
          imgActive:require("@/assets/img/tabBar/profile_active.svg"),
          text:"我的",
          path:"/me"
        }]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
