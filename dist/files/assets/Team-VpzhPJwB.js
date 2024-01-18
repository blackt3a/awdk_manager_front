import{_ as C,f as B,c as b,a as t,w as a,g as U,h as P,r as s,o as f,b as m,t as i,e as c,F as E,j as S}from"./index-xbh-rgIo.js";const z={name:"Team",data:()=>({teamList:null,newTeamDialogVisible:!1,editTeamDialogVisible:!1,token:localStorage.getItem("managerToken"),newTeamForm:[{Name:"",Logo:""}],editTeamForm:{Name:"",Logo:""}}),mounted(){this.getTeams()},methods:{getTeams(){this.utils.GET("/manager/teams").then(e=>{this.teamList=e}).catch(e=>this.$message.error(e))},onNewTeams(){this.utils.POST("/manager/teams",this.newTeamForm).then(e=>{this.newTeamDialogVisible=!1,this.getTeams(),this.newTeamForm=[{Name:"",Logo:""}];const l=this.$createElement;var h=[l("p",null,this.$i18n.t("team.save_password"))];e.forEach(T=>{h.push(l("p",null,this.$i18n.t("team.account_detail",{Name:T.Name,Password:T.Password})))}),this.$alert(l("p",null,h),this.$i18n.t("team.team_password"),{confirmButtonText:this.$i18n.t("team.save_confirm")})}).catch(e=>this.$message({message:e,type:"error"}))},onEditTeam(){this.utils.PUT("/manager/team",this.editTeamForm).then(e=>{this.editTeamDialogVisible=!1,this.getTeams(),this.$message.success(e)}).catch(e=>this.$message({message:e,type:"error"}))},onResetPassword(e){this.utils.POST("/manager/team/resetPassword",{ID:e}).then(l=>{this.editTeamDialogVisible=!1,this.$alert(l,this.$i18n.t("team.new_password"),{confirmButtonText:this.$i18n.t("general.apply")})}).catch(l=>this.$message({message:l,type:"error"}))},handleDelete(e){this.utils.DELETE("/manager/team?id="+e.ID).then(l=>{this.$message({message:l,type:"success"}),this.getTeams()}).catch(l=>{this.$message({message:l,type:"error"})})}}},I={"slot-scope":"scope"},O={"slot-scope":"scope"},R={slot:"tip",class:"el-upload__tip"},A={slot:"tip",class:"el-upload__tip"};function G(e,l,h,T,J,p){const n=s("el-button"),r=s("el-table-column"),F=s("el-image"),w=s("el-popconfirm"),L=s("el-table"),D=s("el-divider"),g=s("el-input"),u=s("el-form-item"),_=s("el-col"),V=s("el-upload"),y=s("el-form"),k=s("el-row"),v=s("el-dialog"),N=B("loading");return f(),b("div",null,[t(n,{type:"primary",onClick:l[0]||(l[0]=o=>e.newTeamDialogVisible=!0)},{default:a(()=>[m(i(e.$t("team.add")),1)]),_:1}),U((f(),P(L,{data:e.teamList,style:{width:"100%"},stripe:""},{default:a(()=>[t(r,{width:"80",prop:"ID",label:"ID"}),t(r,{width:"80",prop:"Logo",label:e.$t("team.logo")},{default:a(()=>[c("template",I,[t(F,{style:{width:"50px",height:"50px"},src:e.utils.baseURL+"/uploads/"+e.scope.row.Logo,fit:"fill"},null,8,["src"])])]),_:1},8,["label"]),t(r,{prop:"Name",label:e.$t("team.team_name")},null,8,["label"]),t(r,{prop:"Score",label:e.$t("team.score"),formatter:o=>e.utils.FormatFloat(o.Score)},null,8,["label","formatter"]),t(r,{width:"300",prop:"SecretKey",label:"Token"}),t(r,{label:e.$t("general.create_at"),width:"200",formatter:o=>e.utils.FormatGoTime(o.CreatedAt)},null,8,["label","formatter"]),t(r,{label:e.$t("general.update_at"),width:"200",formatter:o=>e.utils.FormatGoTime(o.UpdatedAt)},null,8,["label","formatter"]),t(r,{label:e.$t("general.operate")},{default:a(()=>[c("template",O,[t(n,{size:"mini",onClick:l[1]||(l[1]=()=>{e.editTeamForm=JSON.parse(JSON.stringify(e.scope.row)),e.editTeamDialogVisible=!0})},{default:a(()=>[m(i(e.$t("general.edit")),1)]),_:1}),t(w,{confirmButtonText:e.$t("general.confirm_cancel"),cancelButtonText:e.$t("general.cancel"),icon:"el-icon-info",iconColor:"red",title:e.$t("team.delete_confirm"),onOnConfirm:l[2]||(l[2]=o=>p.handleDelete(e.scope.row))},{default:a(()=>[t(n,{size:"mini",type:"danger",slot:"reference"},{default:a(()=>[m(i(e.$t("general.delete")),1)]),_:1})]),_:1},8,["confirmButtonText","cancelButtonText","title"])])]),_:1},8,["label"])]),_:1},8,["data"])),[[N,e.teamList===null]]),t(v,{title:e.$t("team.add"),visible:e.newTeamDialogVisible},{default:a(()=>[t(n,{onClick:l[3]||(l[3]=o=>e.newTeamForm.push({Name:"",Logo:""}))},{default:a(()=>[m(i(e.$t("team.new")),1)]),_:1}),t(D),(f(!0),b(E,null,S(e.newTeamForm,(o,$)=>(f(),b("div",{key:$},[t(k,{gutter:20},{default:a(()=>[t(y,{model:o,"label-width":"80px"},{default:a(()=>[t(n,{type:"danger",icon:"el-icon-delete",circle:"",onClick:d=>e.newTeamForm.splice($,1)},null,8,["onClick"]),t(_,{span:10},{default:a(()=>[t(u,{label:e.$t("team.team_name")},{default:a(()=>[t(g,{modelValue:o.Name,"onUpdate:modelValue":d=>o.Name=d},null,8,["modelValue","onUpdate:modelValue"]),t(g,{modelValue:o.Logo,"onUpdate:modelValue":d=>o.Logo=d,size:"mini",placeholder:e.$t("team.picture_url")},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["label"])]),_:2},1024),t(_,{span:10},{default:a(()=>[t(u,{label:e.$t("team.team_logo")},{default:a(()=>[t(V,{name:"picture",action:e.utils.baseURL+"/manager/uploadPicture",headers:{Authorization:e.token},"on-success":d=>{e.newTeamForm[$].Logo=d.data}},{default:a(()=>[t(n,{size:"small",type:"primary"},{default:a(()=>[m(i(e.$t("team.upload")),1)]),_:1}),c("div",R,i(e.$t("team.file_limit")),1)]),_:2},1032,["action","headers","on-success"])]),_:2},1032,["label"])]),_:2},1024)]),_:2},1032,["model"])]),_:2},1024)]))),128)),t(n,{type:"primary",onClick:p.onNewTeams},{default:a(()=>[m(i(e.$t("team.add")),1)]),_:1},8,["onClick"])]),_:1},8,["title","visible"]),t(v,{title:e.$t("team.edit"),visible:e.editTeamDialogVisible},{default:a(()=>[t(y,{"label-width":"80px"},{default:a(()=>[t(u,{label:e.$t("team.team_name")},{default:a(()=>[t(g,{modelValue:e.editTeamForm.Name,"onUpdate:modelValue":l[4]||(l[4]=o=>e.editTeamForm.Name=o)},null,8,["modelValue"]),t(g,{modelValue:e.editTeamForm.Logo,"onUpdate:modelValue":l[5]||(l[5]=o=>e.editTeamForm.Logo=o),size:"mini",placeholder:e.$t("team.picture_url")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(u,{label:e.$t("team.team_logo")},{default:a(()=>[t(V,{name:"picture",action:e.utils.baseURL+"/manager/uploadPicture",headers:{Authorization:e.token},"on-success":o=>{e.editTeamForm.Logo=o.data}},{default:a(()=>[t(n,{size:"small",type:"primary"},{default:a(()=>[m(i(e.$t("team.upload")),1)]),_:1}),c("div",A,i(e.$t("team.file_limit")),1)]),_:1},8,["action","headers","on-success"])]),_:1},8,["label"]),t(u,null,{default:a(()=>[t(n,{type:"primary",onClick:p.onEditTeam},{default:a(()=>[m(i(e.$t("team.edit")),1)]),_:1},8,["onClick"]),t(w,{title:e.$t("team.reset_password_confirm"),confirmButtonText:e.$t("general.apply"),cancelButtonText:e.$t("general.cancel"),onOnConfirm:l[6]||(l[6]=o=>p.onResetPassword(e.editTeamForm.ID))},{default:a(()=>[t(n,{slot:"reference"},{default:a(()=>[m(i(e.$t("team.reset_password")),1)]),_:1})]),_:1},8,["title","confirmButtonText","cancelButtonText"])]),_:1})]),_:1})]),_:1},8,["title","visible"])])}const K=C(z,[["render",G]]);export{K as default};
