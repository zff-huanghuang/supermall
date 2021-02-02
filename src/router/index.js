import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);


const Index = ()=>import('views/index');
const Cate = ()=>import('views/cate');
const Me = ()=>import('views/me');
const Cart = ()=>import('views/cart');
const Detail = ()=>import('views/detail');

const routes = [
  {
    path:"",
    redirect:"/index"
  },
  {
    path: '/index',
    name: 'index',
    component: Index
  },
  {
    path: '/cate',
    name: 'cate',
    component: Cate
  },
  {
    path: '/me',
    name: 'me',
    component: Me,
    children: [ {
      path: '',
      redirect: 'info'
    },{
      path: 'info',
      component: Me,
    }]
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
