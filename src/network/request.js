import axios from 'axios';

//定义
export function request(config){
    let instance = axios.create({
        baseURL:'',
        timeout:100
    });

    // 请求拦截
    instance.interceptors.request.use(config=>{
        //请求转圈图片 show
        //拦截掉未登录接口
        //config中一些信息不符合服务器的要求
        return config;
    },err=>{
        console.log(err);
    })

    //响应拦截
    instance.interceptors.response.use(res=>{

        return res.data;
    },err=>{
        console.log(err);
    })



    return instance(config);
}

/*// 用法
request({
    url:'/home'
}).then(res=>{

})*/
