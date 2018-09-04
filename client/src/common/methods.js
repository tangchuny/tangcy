export default {

    Img(url,suffix=""){
        if(url){
            return url.indexOf("://")>=0 ? url + suffix : this.Config.base_img + url + suffix
        }else{
            return ""
        }
    },

    Token(token){
        if( token === undefined ){
            return this.Cache('token')
        }else if( token === null ){
            return this.Cache('token',null)
        }else if(token){
            return this.Cache('token',token)
        }
    },

    Cache(key,val){
        if(window.localStorage && key){
            if(val === undefined){
                try{
                    return JSON.parse(window.localStorage[key]);  
                }catch(err){
                    return window.localStorage[key];  
                }
            }else if(val === null){
                window.localStorage.removeItem(key)
                return undefined
            }else{
                window.localStorage[key] = JSON.stringify(val)
                return val
            }
        }else{
            return null
        }
    },
    CacheClean(){
        if(window.localStorage){
            window.localStorage.clean();
            return undefined;
        }
    },

    Time(time,format="yyyy-MM-dd hh:mm"){
        return this.Untimestamp(Date.parse(new Date(time)) / 1000,format)
    },
    Timestamp(date){
        let time = date ? new Date(date) : new Date()
        return Date.parse(time) / 1000
    },
    Untimestamp(time,format="yyyy-MM-dd hh:mm:ss"){
        if(!time){
            return '-'
        }      
        let d = new Date(time*1000)
        let date = {
               "M+" : d.getMonth() + 1,
               "d+" : d.getDate(),
               "h+" : d.getHours(),
               "m+" : d.getMinutes(),
               "s+" : d.getSeconds(),
               "q+" : Math.floor((d.getMonth() + 3) / 3),
               "S+" : d.getMilliseconds()
        }
        if (/(y+)/i.test(format)) {
               format = format.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length))
        }
        for (let k in date) {
           if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ?
                    date[k] :
                    ("00" + date[k]).substr(("" + date[k]).length))
           }
        }
        return format
    },

    Go(name,params={}){
        this.$router.push({name,params})
    },
    Rd(name,params={}){
        this.$router.replace({name,params})
    },
    Msg(message,type='success'){        
        return this.Toast(message,type)
    },
    Toast(message,type='error',duration=2000){
        return this.$message({message, type, duration});
    },
    Suc(...opt){
        return this.Msg(...opt)
    },
    Err(...opt){
        return this.Toast(...opt)
    },
    Notify(title,message,type="error"){
        return this.$notify({ title, message, type});
    },

    Extend(old,...obj){
        return Object.assign(old,...obj)
    },
    DataReset(key){
        return Object.assign(this.$data[key],this.$options.data()[key])
    },
    Origin(obj){
        return JSON.parse(JSON.stringify(obj));
    },
    ParamsReset(){
        Object.assign(this.$data.params,this.$options.data().params)
    },
    Confirm(callback=new Function,msg='您确定要操作选定的数据么？',title='操作数据',){
        return this.$confirm(msg,title,{
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            confirmButtonClass : 'pj-alert-confirm',
            cancelButtonClass : 'pj-alert-cancel',
            type: 'warning',
            center: true
        }).then(() => {
            callback()
        }).catch(()=>{})
    },
    DelConfirm(callback=new Function,msg='您确定要删除当前选定的数据么？',title='删除数据',){
        return this.$confirm(msg,title,{
            confirmButtonText: '删除',
            cancelButtonText: '取消',
            confirmButtonClass : 'pj-alert-del',
            cancelButtonClass : 'pj-alert-cancel',
            type: 'error',
            center: true
        }).then(() => {
            callback()
        }).catch(()=>{})
    },

    Is(type="object",data){
        switch(type){
            case 'int':
                return (data | 0) === data;
                break;
            case 'object':
                return (data && typeof data === 'object' && !isArray(data));
                break;
            case 'array':
                return Array.isArray(obj);
                break;
            case 'empty':
                if (data == null) return true;
                if (data.length > 0)    return false;
                if (data.length === 0)  return true;
                for (var key in data) {
                    if (Object.prototype.hasOwnProperty.call(data, key)) return false;
                }
                return true;
            case 'login':
                if(this.Token()){
                    return this.$store.state.base.login.info
                }
                return false
            default:
                return false;
        }
    },

    
}