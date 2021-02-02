<template>
<div class="wrapper" ref="wrapper">
  <div class="content">
    <slot></slot>
  </div>

</div>
</template>

<script>
import BetterScroll from 'better-scroll';
export default {
  name: "Scroll",
  props:{
    probeType:{
      default:0,
      type:Number
    },
    pullUpLoad:{
      default:false,
      type:Boolean
    }
  },
  data(){
    return{
      bs:""
    }
  },
  methods:{
    init(){
      this.bs = new BetterScroll(this.$refs.wrapper, {
        movable: true,
        zoom: true,
        pullUpLoad: this.pullUpLoad,
        probeType:this.probeType,
        click:true,
      })

      // 监听滚动位置
      if(this.probeType==2||this.probeType==3){
        this.bs.on('scroll', (position) => {
          this.$emit('scroll',position);
        })
      }

      //监听滚动到底部
      if(this.pullUpLoad){
        this.bs.on('scrollEnd', (position) => {
          this.$emit('loadmore');
        })
      }
    },
    scrollTo(x,y,time=300){
      this.bs.scrollTo(x,y,time);
    },
    refresh(){
      this.bs.refresh();
    },
    getScrollY(){
      return this.bs?this.bs.y:0;
    }

  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.bs.destroy()
  },
}
</script>

<style scoped>
</style>
