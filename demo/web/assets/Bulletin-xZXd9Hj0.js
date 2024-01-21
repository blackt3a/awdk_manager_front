import{_ as w,f as c,c as V,a as l,w as i,g as y,h as C,r as o,o as f,b as u,t as r,e as T}from"./index-LaidQ9b-.js";const D={name:"Bulletin",data:()=>({newBulletinDialogVisible:!1,editBulletinDialogVisible:!1,bulletinList:null,editBulletinForm:{Title:"",Content:""},newBulletinForm:{Title:"",Content:""}}),mounted(){this.getBulletin()},methods:{getBulletin(){this.utils.GET("/manager/bulletins").then(e=>{this.bulletinList=e}).catch(e=>this.$message({message:e,type:"error"}))},onNewBulletin(){this.utils.POST("/manager/bulletin",this.newBulletinForm).then(e=>{this.newBulletinDialogVisible=!1,this.newBulletinForm={Title:"",Content:""},this.$message({message:e,type:"success"}),this.getBulletin()}).catch(e=>this.$message({message:e,type:"error"}))},handleEdit(){this.utils.PUT("/manager/bulletin",this.editBulletinForm).then(e=>{this.editBulletinDialogVisible=!1,this.$message({message:e,type:"success"}),this.getBulletin()}).catch(e=>this.$message({message:e,type:"error"}))},handleDelete(e){this.utils.DELETE("/manager/bulletin?id="+e).then(t=>{this.$message({message:t,type:"success"}),this.getBulletin()}).catch(t=>this.$message({message:t,type:"error"}))}}},F={"slot-scope":"scope"};function v(e,t,k,E,N,p){const a=o("el-button"),s=o("el-table-column"),B=o("el-popconfirm"),h=o("el-table"),d=o("el-input"),m=o("el-form-item"),b=o("el-form"),g=o("el-dialog"),$=c("loading");return f(),V("div",null,[l(a,{type:"primary",onClick:t[0]||(t[0]=n=>e.newBulletinDialogVisible=!0)},{default:i(()=>[u(r(e.$t("bulletin.publish")),1)]),_:1}),y((f(),C(h,{data:e.bulletinList,style:{width:"100%"},stripe:""},{default:i(()=>[l(s,{width:"80",prop:"ID",label:"ID"}),l(s,{prop:"Title",label:e.$t("bulletin.title")},null,8,["label"]),l(s,{prop:"Content",label:e.$t("bulletin.content")},null,8,["label"]),l(s,{label:e.$t("general.create_at"),width:"200",formatter:n=>e.utils.FormatGoTime(n.CreatedAt)},null,8,["label","formatter"]),l(s,{label:e.$t("general.operate"),width:"300"},{default:i(()=>[T("template",F,[l(a,{size:"mini",onClick:t[1]||(t[1]=()=>{e.editBulletinForm=JSON.parse(JSON.stringify(e.scope.row)),e.editBulletinDialogVisible=!0})},{default:i(()=>[u(r(e.$t("general.edit")),1)]),_:1}),l(B,{confirmButtonText:e.$t("general.confirm_cancel"),cancelButtonText:e.$t("general.cancel"),icon:"el-icon-info",iconColor:"red",title:e.$t("bulletin.delete_title"),onOnConfirm:t[2]||(t[2]=n=>p.handleDelete(e.scope.row.ID))},{default:i(()=>[l(a,{size:"mini",type:"danger",slot:"reference"},{default:i(()=>[u(r(e.$t("general.delete")),1)]),_:1})]),_:1},8,["confirmButtonText","cancelButtonText","title"])])]),_:1},8,["label"])]),_:1},8,["data"])),[[$,e.bulletinList===null]]),l(g,{title:e.$t("bulletin.publish"),visible:e.newBulletinDialogVisible},{default:i(()=>[l(b,{model:e.newBulletinForm,"label-width":"80px"},{default:i(()=>[l(m,{label:e.$t("bulletin.title")},{default:i(()=>[l(d,{modelValue:e.newBulletinForm.Title,"onUpdate:modelValue":t[3]||(t[3]=n=>e.newBulletinForm.Title=n)},null,8,["modelValue"])]),_:1},8,["label"]),l(m,{label:e.$t("bulletin.content")},{default:i(()=>[l(d,{type:"textarea",rows:3,placeholder:e.$t("bulletin.content_placeholder"),modelValue:e.newBulletinForm.Content,"onUpdate:modelValue":t[4]||(t[4]=n=>e.newBulletinForm.Content=n)},null,8,["placeholder","modelValue"])]),_:1},8,["label"])]),_:1},8,["model"]),l(a,{type:"primary",onClick:p.onNewBulletin},{default:i(()=>[u(r(e.$t("bulletin.publish")),1)]),_:1},8,["onClick"])]),_:1},8,["title","visible"]),l(g,{title:e.$t("bulletin.edit"),visible:e.editBulletinDialogVisible},{default:i(()=>[l(b,{model:e.editBulletinForm,"label-width":"80px"},{default:i(()=>[l(m,{label:e.$t("bulletin.title")},{default:i(()=>[l(d,{modelValue:e.editBulletinForm.Title,"onUpdate:modelValue":t[5]||(t[5]=n=>e.editBulletinForm.Title=n)},null,8,["modelValue"])]),_:1},8,["label"]),l(m,{label:e.$t("bulletin.content")},{default:i(()=>[l(d,{type:"textarea",rows:3,placeholder:e.$t("bulletin.content_placeholder"),modelValue:e.editBulletinForm.Content,"onUpdate:modelValue":t[6]||(t[6]=n=>e.editBulletinForm.Content=n)},null,8,["placeholder","modelValue"])]),_:1},8,["label"])]),_:1},8,["model"]),l(a,{type:"primary",onClick:p.handleEdit},{default:i(()=>[u(r(e.$t("bulletin.edit")),1)]),_:1},8,["onClick"])]),_:1},8,["title","visible"])])}const L=w(D,[["render",v]]);export{L as default};
