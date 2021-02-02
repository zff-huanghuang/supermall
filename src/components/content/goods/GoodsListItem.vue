<template>
  <div class="goods-list-item" @click="itemClick">
    <img :src="item.img" alt="" @load="loadImage">
    <div class="title">
      {{item.title}}
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: ['item'],
  methods:{
    loadImage(){
      this.$bus.$emit('itemImageLoad');
    },
    itemClick(){
      this.$router.push('/detail/'+this.item.id)
    }
  }
}
</script>

<style scoped lang="scss">
.goods-list-item {
  width: 50%;
  padding: 20px;
  display: inline-block;
  img {
    width: 100%;
    border-radius: 10px;
  }

  .title {
    font-weight: bold;
    text-align: center;
  }
}
</style>
