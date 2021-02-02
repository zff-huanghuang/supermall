<template>
  <nav-bar class="home-nav">
    <div slot="left" @click="back">
      <img src="~assets/img/common/back.svg">
    </div>
    <div slot="center" class="center">
        <div v-for="(v,index) in titles" @click="itemClick(index)" :class="{'active':currentIndex==index}">{{v}}</div>
    </div>
    <div slot="right">
      <img src="~assets/img/common/arrow-left.svg">
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data(){
    return{
      titles:['商品','参数','评论'],
      currentIndex:0
    }
  },
  methods:{
    back() {
      this.$router.back();
    },
    itemClick(index){
      this.currentIndex = index;
      this.$emit('changeTab',index);
    }
  }
}
</script>

<style scoped lang="scss">
.center{
  font-size: 14px;
  display: flex;
  >div{
    flex: 1;
    .active{
      color: var(--color-tint);
    }
  }
}
</style>
