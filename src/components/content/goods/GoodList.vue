<template>
<div class="goods">
  <goods-list-item v-for="v in goods" :key="v.id" :item="v" />
</div>
</template>

<script>
import GoodsListItem from "components/content/goods/GoodsListItem";
export default {
  name: "GoodList",
  components: {GoodsListItem},
  props:['goods']
}
</script>

<style scoped>

</style>
