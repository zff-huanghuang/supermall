<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped lang="scss">
.nav-bar {
  line-height: 44px;
  display: flex;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100,100,100,.1);
  .left, .right {
    width: 60px;
    display: flex;
    align-items: center;
    img{
      display: block;
      width: 25px;
      height: 25px;
    }
  }
  .left{
    padding-left: 10px;
  }
  .right {
    justify-content: flex-end;
    padding-right: 10px;
  }
  .center {
    flex: 1;
  }
}
</style>
