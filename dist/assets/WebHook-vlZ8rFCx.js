import{_ as L,f as v,c as f,a as o,w as i,g as R,h as H,r as s,o as a,b as u,t as r,e as p,F as T,j as F}from"./index-CXsiBXBH.js";const c={name:"WebHook",data(){return{webHookList:[],isLoading:!0,newWebHookDialogVisible:!1,editWebHookDialogVisible:!1,newWebHookForm:{URL:"",Type:"",Token:"",Retry:0,Timeout:0},editWebHookForm:{},typeOptions:{any:this.$i18n.t("webhook.type_any"),new_round:this.$i18n.t("webhook.type_new_round"),submit_flag:this.$i18n.t("webhook.type_submit_flag"),game_begin:this.$i18n.t("webhook.type_game_begin"),game_pause:this.$i18n.t("webhook.type_game_pause"),game_end:this.$i18n.t("webhook.type_game_end")}}},mounted(){this.getWebHooks()},methods:{getWebHooks(){this.utils.GET("/manager/webhooks").then(e=>{this.webHookList=e,this.isLoading=!1}).catch(e=>this.$message.error(e))},onNewWebHook(){this.utils.POST("/manager/webhook",this.newWebHookForm).then(e=>{this.$message.success(e),this.newWebHookDialogVisible=!1,this.newWebHookForm={URL:"",Type:"",Token:"",Retry:0,Timeout:0},this.getWebHooks()}).catch(e=>{this.$message.error(e)})},onEditWebHook(){this.utils.PUT("/manager/webhook",this.editWebHookForm).then(e=>{this.$message.success(e),this.editWebHookDialogVisible=!1,this.getWebHooks()}).catch(e=>{this.$message.error(e)})},handleDelete(e){this.utils.DELETE("/manager/webhook?id="+e.ID).then(t=>{this.$message({message:t,type:"success"}),this.getWebHooks()}).catch(t=>this.$message({message:t,type:"error"}))}}},C={"slot-scope":"scope"},B={"slot-scope":"scope"};function O(e,t,E,N,l,g){const d=s("el-button"),m=s("el-table-column"),U=s("el-popconfirm"),D=s("el-table"),w=s("el-input"),b=s("el-form-item"),y=s("el-option"),W=s("el-select"),h=s("el-input-number"),V=s("el-form"),_=s("el-dialog"),$=v("loading");return a(),f("div",null,[o(d,{type:"primary",onClick:t[0]||(t[0]=n=>l.newWebHookDialogVisible=!0)},{default:i(()=>[u(r(e.$t("webhook.add")),1)]),_:1}),R((a(),H(D,{data:l.webHookList,style:{width:"100%"},stripe:""},{default:i(()=>[o(m,{width:"80",prop:"ID",label:"ID"}),o(m,{prop:"URL",label:e.$t("webhook.url")},null,8,["label"]),o(m,{prop:"Type",label:e.$t("webhook.type")},{default:i(()=>[p("template",C,[u(r(l.typeOptions[e.scope.row.Type]),1)])]),_:1},8,["label"]),o(m,{prop:"Token",label:e.$t("webhook.token")},null,8,["label"]),o(m,{width:"120",prop:"Retry",label:e.$t("webhook.retry")},null,8,["label"]),o(m,{width:"120",prop:"Timeout",label:e.$t("webhook.timeout")},null,8,["label"]),o(m,{label:e.$t("general.operate"),width:"300"},{default:i(()=>[p("template",B,[o(d,{size:"mini",onClick:t[1]||(t[1]=()=>{l.editWebHookForm=JSON.parse(JSON.stringify(e.scope.row)),l.editWebHookDialogVisible=!0})},{default:i(()=>[u(r(e.$t("general.edit")),1)]),_:1}),o(U,{confirmButtonText:e.$t("general.confirm_cancel"),cancelButtonText:e.$t("general.cancel"),icon:"el-icon-info",iconColor:"red",title:e.$t("webhook.delete_title"),onOnConfirm:t[2]||(t[2]=n=>g.handleDelete(e.scope.row))},{default:i(()=>[o(d,{size:"mini",type:"danger",slot:"reference"},{default:i(()=>[u(r(e.$t("general.delete")),1)]),_:1})]),_:1},8,["confirmButtonText","cancelButtonText","title"])])]),_:1},8,["label"])]),_:1},8,["data"])),[[$,l.isLoading]]),o(_,{title:e.$t("webhook.add"),visible:l.newWebHookDialogVisible},{default:i(()=>[o(V,{model:l.newWebHookForm,"label-width":"120px"},{default:i(()=>[o(b,{label:e.$t("webhook.url")},{default:i(()=>[o(w,{modelValue:l.newWebHookForm.URL,"onUpdate:modelValue":t[3]||(t[3]=n=>l.newWebHookForm.URL=n)},null,8,["modelValue"])]),_:1},8,["label"]),o(b,{label:e.$t("webhook.type")},{default:i(()=>[o(W,{modelValue:l.newWebHookForm.Type,"onUpdate:modelValue":t[4]||(t[4]=n=>l.newWebHookForm.Type=n),placeholder:e.$t("webhook.please_select")},{default:i(()=>[(a(!0),f(T,null,F(l.typeOptions,(n,k)=>(a(),H(y,{key:k,label:n,value:k},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),o(b,{label:e.$t("webhook.token")},{default:i(()=>[o(w,{modelValue:l.newWebHookForm.Token,"onUpdate:modelValue":t[5]||(t[5]=n=>l.newWebHookForm.Token=n)},null,8,["modelValue"]),p("p",null,r(e.$t("webhook.token_tips")),1)]),_:1},8,["label"]),o(b,{label:e.$t("webhook.retry")},{default:i(()=>[o(h,{modelValue:l.newWebHookForm.Retry,"onUpdate:modelValue":t[6]||(t[6]=n=>l.newWebHookForm.Retry=n),min:0},null,8,["modelValue"])]),_:1},8,["label"]),o(b,{label:e.$t("webhook.timeout")},{default:i(()=>[o(h,{modelValue:l.newWebHookForm.Timeout,"onUpdate:modelValue":t[7]||(t[7]=n=>l.newWebHookForm.Timeout=n),min:0},null,8,["modelValue"]),p("p",null,r(e.$t("webhook.timeout_tips")),1)]),_:1},8,["label"])]),_:1},8,["model"]),o(d,{type:"primary",onClick:g.onNewWebHook},{default:i(()=>[u(r(e.$t("webhook.publish")),1)]),_:1},8,["onClick"])]),_:1},8,["title","visible"]),o(_,{title:e.$t("webhook.edit"),visible:l.editWebHookDialogVisible},{default:i(()=>[o(V,{model:l.editWebHookForm,"label-width":"120px"},{default:i(()=>[o(b,{label:e.$t("webhook.url")},{default:i(()=>[o(w,{modelValue:l.editWebHookForm.URL,"onUpdate:modelValue":t[8]||(t[8]=n=>l.editWebHookForm.URL=n)},null,8,["modelValue"])]),_:1},8,["label"]),o(b,{label:e.$t("webhook.type")},{default:i(()=>[o(W,{modelValue:l.editWebHookForm.Type,"onUpdate:modelValue":t[9]||(t[9]=n=>l.editWebHookForm.Type=n),placeholder:e.$t("webhook.please_select")},{default:i(()=>[(a(!0),f(T,null,F(l.typeOptions,(n,k)=>(a(),H(y,{key:k,label:n,value:k},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),o(b,{label:e.$t("webhook.token")},{default:i(()=>[o(w,{modelValue:l.editWebHookForm.Token,"onUpdate:modelValue":t[10]||(t[10]=n=>l.editWebHookForm.Token=n)},null,8,["modelValue"]),p("p",null,r(e.$t("webhook.token_tips")),1)]),_:1},8,["label"]),o(b,{label:e.$t("webhook.retry")},{default:i(()=>[o(h,{modelValue:l.editWebHookForm.Retry,"onUpdate:modelValue":t[11]||(t[11]=n=>l.editWebHookForm.Retry=n),min:0},null,8,["modelValue"])]),_:1},8,["label"]),o(b,{label:e.$t("webhook.timeout")},{default:i(()=>[o(h,{modelValue:l.editWebHookForm.Timeout,"onUpdate:modelValue":t[12]||(t[12]=n=>l.editWebHookForm.Timeout=n),min:0},null,8,["modelValue"]),p("p",null,r(e.$t("webhook.timeout_tips")),1)]),_:1},8,["label"])]),_:1},8,["model"]),o(d,{type:"primary",onClick:g.onEditWebHook},{default:i(()=>[u(r(e.$t("webhook.edit")),1)]),_:1},8,["onClick"])]),_:1},8,["title","visible"])])}const I=L(c,[["render",O]]);export{I as default};