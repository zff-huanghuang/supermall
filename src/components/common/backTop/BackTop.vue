<template>
<div class="back-top">
  <img src="~assets/img/common/top.png" alt="">
</div>
</template>

<script>
export default {
name: "BackTop"
}
</script>

<style scoped lang="scss">
.back-top{
  position: fixed;
  bottom: 70px;
  right: 10px;
  z-index:999;
  img{
    width: 40px;
    height: 40px;
  }
}
</style>
