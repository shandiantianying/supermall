import axios from 'axios'

export  function request(config){
    const instance = axios.create({
        baseURL:'http://v.juhe.cn',
        timeout:5000,
        headers:{'Content-Type':'application/json;charset=UTF-8'}
    })
    instance.interceptors.request.use(config=>{
        return config
    },err=>{

    })

    instance.interceptors.response.use(res=>{
        return res.data
    },err=>{

    })
    
    return instance(config)
}
