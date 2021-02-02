import {request} from "./request";
export function getDetail(id){
  return request({
    url:'/source/detail.json',
    params:{
      id
    }
  })
}


// 面向对象  处理数据 方便传给字组件
export class Goods{
  constructor(data,goodsDesc,shopPrice,title) {
    this.goodsName = data.goodsName;
    this.goodsDesc = goodsDesc;
    this.shopPrice = shopPrice;
    this.title = title;
  }
}
