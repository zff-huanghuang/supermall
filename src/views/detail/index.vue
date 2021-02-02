<template>
  <div class="detail">
    <detail-nav-bar ref="detailNavBar" @changeTab="changeTab"/>



    <scroll class="content" ref="scroll" >
      <div v-if="currentType=='shangping'">
        <swiper>
          <swiper-item v-for="v in swiperImgs">
            <img :src="v.img" alt="图片不显示" class="img">
          </swiper-item>
        </swiper>
        <div v-if="Object.keys(goods).length>0">
          <div class="info1Div flex-between-center">
            <div>
              <div class="ftwB  pMax1 color333">{{goods.goodsName}}</div>
              <div class="memoDiv">{{goods.title}}</div>
            </div>
            <div class="priceDiv ftwB colorF23D3D">&yen;{{goods.shopPrice}}</div>
          </div>
          <div class="imgDiv bgfff">
            <div v-html="goods.goodsDesc"></div>
          </div>
        </div>
      </div>
      <div v-if="currentType=='canshu'">
        参数
      </div>
      <div v-if="currentType=='pinglun'">
        评论
      </div>
    </scroll>





  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import {getDetail,Goods} from "network/detail";
import Swiper from 'components/common/swiper/Swiper';
import SwiperItem from 'components/common/swiper/SwiperItem';
import Scroll from "components/common/scroll/Scroll";
export default {
  components: {
    DetailNavBar,
    Swiper,
    SwiperItem,
    Scroll,
  },
  created() {
    console.log(this.$route.params.id);
  },
  data(){
    return{
      swiperImgs:[],
      goods:{},
      currentType:"shangping"
    }
  },
  mounted() {
    // 商品详情接口请求
    getDetail(this.$route.params.id).then(res=>{
      console.log(res);
      this.swiperImgs = res.gallerys;
      const regex1 = new RegExp('style=""', 'gi');
      const regex2 = new RegExp('style="float:none;"', 'gi');
      const regex5 = new RegExp('style="-webkit-text-size-adjust: 100%;"', 'gi');
      const regex3 = new RegExp('<img', 'gi');
      const regex4 = new RegExp('<p><img', 'gi');
      res.goodsDesc = res.goodsDesc.replace(regex1, ``);
      res.goodsDesc = res.goodsDesc.replace(regex2, ``);
      res.goodsDesc = res.goodsDesc.replace(regex5, ``);
      res.goodsDesc = res.goodsDesc.replace(regex3, `<img style="max-width: 100%;margin:0 auto;"`);
      res.goodsDesc = res.goodsDesc.replace(regex4, `<p style="font-size: 0;"><img`);
      res.goodsStock = Number(res.goodsStock);
      this.goods = new Goods(res.data,res.goodsDesc,res.shopPrice,res.title);
      setTimeout(this.$refs.scroll.refresh,200);
    })
  },
  methods:{
    changeTab(index){
      this.currentType = index == 0 ? 'shangping' : index == 1 ? 'canshu' : 'pinglun';
    }
  }
}
</script>

<style lang="scss" scoped>
.detail{
  position: relative;
  z-index:10;
  background-color: #fff;
  height: 100vh;
}
.home-nav {
  position: relative;
  z-index:9;
  background-color: white;
}
.content{
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 50px;
  //height: calc(100% - 44px);
}
.info1Div{
  background-color: #fff;
  padding: 20rpx;
  .memoDiv{
    color: #A3A3A3;
  }
}
.flex-between-center {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ftwB {
  font-weight: bolder;
}
.pMax1 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.color333{
  color: #333;
}
.colorF23D3D{
  color: #F23D3D;
}
</style>
