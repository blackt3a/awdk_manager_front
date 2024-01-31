import{_ as M,c as _,a as n,w as t,r as o,o as g,b as s,t as l,e as p,h,i as f}from"./index-dsBVlsEF.js";const T={name:"Manager",data:()=>({token:localStorage.getItem("managerToken"),newManagerDialogVisible:!1,managerList:null,newManagerForm:{Name:"",Password:"",IsCheck:!1}}),mounted(){this.getManager()},methods:{getManager(){this.utils.GET("/manager/managers").then(e=>{this.managerList=e}).catch(e=>this.$message.error(e))},onNewManager(){this.utils.POST("/manager/manager",this.newManagerForm).then(e=>{this.newManagerDialogVisible=!1,this.newManagerForm={Name:"",Password:"",IsCheck:!1},this.$message.success(e),this.getManager()}).catch(e=>this.$message.error(e))},editPassword(e){this.$confirm(this.$i18n.t("manager.change_password_confirm"),this.$i18n.t("manager.confirm"),{confirmButtonText:this.$i18n.t("general.apply"),cancelButtonText:this.$i18n.t("general.cancel"),type:"warning"}).then(()=>{this.utils.GET("/manager/manager/changePassword?id="+e).then(a=>{this.$alert(a,this.$i18n.t("manager.new_password"),{confirmButtonText:this.$i18n.t("manager.save_confirm")})}).catch(a=>this.$message.error(a))}).catch(()=>{})},deleteManager(e){this.$confirm(this.$i18n.t("manager.delete_account_confirm"),this.$i18n.t("manager.confirm"),{confirmButtonText:this.$i18n.t("general.apply"),cancelButtonText:this.$i18n.t("general.cancel"),type:"warning"}).then(()=>{this.utils.DELETE("/manager/manager?id="+e).then(a=>{this.getManager(),this.$message.success(a)}).catch(a=>this.$message.error(a))}).catch(()=>{})},refreshToken(e){this.$confirm(this.$i18n.t("manager.refresh_token_confirm"),this.$i18n.t("manager.confirm"),{confirmButtonText:this.$i18n.t("general.apply"),cancelButtonText:this.$i18n.t("general.cancel"),type:"warning"}).then(()=>{this.utils.GET("/manager/manager/token?id="+e).then(a=>{this.getManager(),this.$alert(a,this.$i18n.t("manager.new_token"),{confirmButtonText:this.$i18n.t("manager.save_confirm")})}).catch(a=>this.$message.error(a))}).catch(()=>{})}}},y={"slot-scope":"scope"},C={"slot-scope":"scope"};function V(e,a,I,B,D,d){const i=o("el-button"),m=o("el-table-column"),w=o("el-table"),$=o("el-checkbox"),c=o("el-form-item"),u=o("el-input"),k=o("el-form"),b=o("el-dialog");return g(),_("div",null,[n(i,{type:"primary",onClick:a[0]||(a[0]=r=>e.newManagerDialogVisible=!0)},{default:t(()=>[s(l(e.$t("manager.add")),1)]),_:1}),n(w,{data:e.managerList,style:{width:"100%"},stripe:""},{default:t(()=>[n(m,{width:"80",prop:"ID",label:"ID"}),n(m,{prop:"Name",label:e.$t("manager.account")},null,8,["label"]),n(m,{prop:"IsCheck",label:e.$t("manager.is_check")},{default:t(()=>[p("template",y,[s(l(e.scope.row.IsCheck),1)])]),_:1},8,["label"]),n(m,{prop:"Token",label:e.$t("manager.token")},null,8,["label"]),n(m,{label:e.$t("general.operate"),width:"300"},{default:t(()=>[p("template",C,[e.scope.row.Token!==e.token?(g(),h(i,{key:0,size:"mini",onClick:a[1]||(a[1]=r=>d.refreshToken(e.scope.row.ID))},{default:t(()=>[s(l(e.$t("manager.refresh_token")),1)]),_:1})):(g(),h(i,{key:1,size:"mini",disabled:""},{default:t(()=>[s(l(e.$t("manager.refresh_token")),1)]),_:1})),e.scope.row.IsCheck?f("",!0):(g(),h(i,{key:2,size:"mini",type:"warning",onClick:a[2]||(a[2]=r=>d.editPassword(e.scope.row.ID))},{default:t(()=>[s(l(e.$t("manager.change_password")),1)]),_:1})),n(i,{size:"mini",type:"danger",onClick:a[3]||(a[3]=r=>d.deleteManager(e.scope.row.ID))},{default:t(()=>[s(l(e.$t("manager.delete")),1)]),_:1})])]),_:1},8,["label"])]),_:1},8,["data"]),n(b,{title:e.$t("manager.add"),visible:e.newManagerDialogVisible},{default:t(()=>[n(k,{model:e.newManagerForm,"label-width":"120px"},{default:t(()=>[n(c,null,{default:t(()=>[n($,{modelValue:e.newManagerForm.IsCheck,"onUpdate:modelValue":a[4]||(a[4]=r=>e.newManagerForm.IsCheck=r)},{default:t(()=>[s(l(e.$t("manager.is_check")),1)]),_:1},8,["modelValue"])]),_:1}),n(c,{label:e.$t("manager.account")},{default:t(()=>[n(u,{modelValue:e.newManagerForm.Name,"onUpdate:modelValue":a[5]||(a[5]=r=>e.newManagerForm.Name=r)},null,8,["modelValue"])]),_:1},8,["label"]),e.newManagerForm.IsCheck?f("",!0):(g(),h(c,{key:0,label:e.$t("manager.password")},{default:t(()=>[n(u,{modelValue:e.newManagerForm.Password,"onUpdate:modelValue":a[6]||(a[6]=r=>e.newManagerForm.Password=r)},null,8,["modelValue"])]),_:1},8,["label"]))]),_:1},8,["model"]),n(i,{type:"primary",onClick:d.onNewManager},{default:t(()=>[s(l(e.$t("manager.add")),1)]),_:1},8,["onClick"])]),_:1},8,["title","visible"])])}const N=M(T,[["render",V]]);export{N as default};