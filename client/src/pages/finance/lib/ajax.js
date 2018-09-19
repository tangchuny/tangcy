import methods from './methods'
import axios   from 'axios'
import config  from './config'

var CancelToken = axios.CancelToken

const ajax = axios.create({
    baseURL : config.base,
    timeout : 12000,
})

// 添加请求拦截器
ajax.interceptors.request.use( config=> {    
    config.headers['AccessKey'] = methods.Token()
    return config
}, error=> {    
    console.warn('请求拦截器：请求错误',error)
    return Promise.reject(error);
})


// 添加响应拦截器
ajax.interceptors.response.use( res=> {
    if(res && res.status == 200){
        switch(res.data.err){
            case 0:
                return res
            case 401:
                methods.Token(null)
                if(!res.config.silence){
                    window.App.Toast('请重新登陆')
                }
                window.App.$router.push({name:'login'})
                break;
            default:
                if(!res.config.silence){
                    window.App.Notify('请求失败',res.data.msg,'error')
                }
        }        
    }
    console.warn(res,'响应拦截器：服务端错误')
    return Promise.reject(res)
}, error=> {

    console.warn('响应拦截器：本地网络错误，或服务器无响应',error)
    return Promise.reject({
        data : {
            err  : 500,
            data : null,
            msg  : `${error.name ? error.name + ':' : ''}${error.message}`
        }
    })
})

var count = 0
export default function(config){

    // 计数器
    count ++
    // 取消令牌
    let cancel
    let cancelToken = new CancelToken( fun=> {
        cancel = fun
        if(config.getCancel){
            config.getCancel(count,cancel)
        }
    })
    // 返回封装后的 ajax 对象
    return ajax({
        validateStatus : status=> {
            return status >= 200 && status < 600
        },
        id:count,
        cancelToken,
        cancel,
        ...config,
        // transformResponse: [
        //     res=>{
        //         try{
        //             res = JSON.parse(res)
        //         }catch(err){}
        //         res.config = config
        //         console.log(typeof res,res)
        //         return res
        //     }
        // ],
    })
}