export default {

    Get(page,model='main'){
        let data = this.Origin(this.Filter)
        if(page){
            data.page = page
        }
        return this[`_GET_${model.toUpperCase()}`]({params:data}).then(res=>{
            return res
        })
    },
    Post(params,model='main',callback){
    	if(!callback){
    		callback = (res) =>{
                if(res){
                    this.view = false
                    this.$message({message:'操作成功',type:'success'});
                    this.$emit('finish',1)
                }
                return res
    		}
    	}
        return this[`_POST_${model.toUpperCase()}`]({data:params}).then(callback)
    },
    Put(params,model='main',callback){
    	model = model.toUpperCase() 
    	if(!callback){
    		callback = (res) =>{
                if(res){
                    this.view = false
                    this.$message({message:'操作成功',type:'success'});
                    this.$emit('finish',1)
                }
                return res
    		}
    	}
        return this[`_PUT_${model.toUpperCase()}`]({id:params.id,data:params}).then(callback)
    },
    Del(params,model='main',callback,confirm=true){
        model = model.toUpperCase() 
        if(!callback){
            callback = (res) =>{
                if(res){
                    this.$message({message:'操作成功',type:'success'});
                    this.Get(this.Page)
                }
                return res
            }
        }
        return confirm ? this.DelConfirm(()=>{
            return this[`_DELETE_${model}`]({id:params.id}).then(callback)
        }) : this[`_DELETE_${model}`]({id:params.id}).then(callback)
    },

    Edit(data){
        this.Editer.view  = true
        this.Editer.title = data ? '修改数据' : '新增数据'
        // this.Editer.title = title
        this.Editer.form  = data ? this.Origin(data) : null            
    },
    Detail(data, title){
        this.Editer.view  = true
        this.Editer.title = title
        this.Editer.form  = data ? this.Origin(data) : null            
    },
    Submit(model="main"){
        let params = this.Origin(this.Params)
        return params.id ?
            this.Put(params,model) :
            this.Post(params,model)
    },
    
    MakeFilter(query=[]){
        this.Filter = []
        if(this.FilterKeys){
            for(let item in this.FilterKeys){
                this.filter[item] = this.origin(this.filterKeys[item])
            }
        }
        this.Page = 1
        this.Get(1)
    },
    ResetFilterInit(){
        this.Filter = this.Origin(this.$options.data().Filter)
    },
    ModulFinsh(res){
        if(res){
            this.view = false
            this.$message({message:'操作成功',type:'success'});
            this.$emit('finish',1)
        }
    },
    Refresh() {
        this.$message({
             message: '成功刷新数据！',
             type: 'success'
        });
    },
}