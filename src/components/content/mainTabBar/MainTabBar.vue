<template>
  <tab-bar>
    <TabBarItem v-for="v in tabs" :key="v.text" :path="v.path" activeColor="blue">
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
        img:require("@/assets/img/tabBar/index.png"),
        imgActive:require("@/assets/img/tabBar/index_light.png"),
        text:"首页",
        path:"/index"
      },
        {
          img:require("@/assets/img/tabBar/delivery.png"),
          imgActive:require("@/assets/img/tabBar/delivery_light.png"),
          text:"分类",
          path:"/cate"
        },
        {
          img:require("@/assets/img/tabBar/cart.png"),
          imgActive:require("@/assets/img/tabBar/cart_light.png"),
          text:"购物车",
          path:"/cart"
        },
        {
          img:require("@/assets/img/tabBar/me.png"),
          imgActive:require("@/assets/img/tabBar/me_light.png"),
          text:"我的",
          path:"/me"
        }]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
