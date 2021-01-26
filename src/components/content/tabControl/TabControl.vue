<template>
  <div class="tab-control">
      <div v-for="(v,index) in tabs" class="tab-control-item" :class="{'active':index==currentIndex}" @click="select(index)">
        <span>{{v}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props:['tabs'],
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    select(index){
      this.currentIndex = index;
      this.$emit('changeTab',index);
    }
  }
}
</script>

<style scoped lang="scss">
.tab-control{
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  >div{
    flex: 1;
    &.active{
      color: var(--color-high-text);
      span{
        border-bottom: 2px solid var(--color-high-text);
        padding: 5px;
      }

    }
  }
}
</style>
