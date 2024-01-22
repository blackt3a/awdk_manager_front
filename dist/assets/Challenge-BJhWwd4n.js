import{_ as v,f as A,c as B,a as l,w as a,g as $,h as b,r as s,o as c,b as i,t as r,e as h,i as y}from"./index-LaidQ9b-.js";const S={name:"Challenge",data(){return{isLoading:!0,challengeList:null,newChallengeDialogVisible:!1,editChallengeDialogVisible:!1,newChallengeForm:{Title:"",BaseScore:1e3,AutoRefreshFlag:!1,Command:"echo {{FLAG}} > /flag"},editChallengeForm:{Title:"",BaseScore:1e3,AutoRefreshFlag:!1,Command:""}}},mounted(){this.getChallenges()},methods:{getChallenges(){this.utils.GET("/manager/challenges").then(e=>{this.challengeList=e,this.isLoading=!1}).catch(e=>this.$message.error(e))},onNewChallenge(){this.utils.POST("/manager/challenge",this.newChallengeForm).then(e=>{this.newChallengeDialogVisible=!1,this.newChallengeForm={Title:"",BaseScore:1e3,AutoRefreshFlag:!1,Command:"echo {{FLAG}} > /flag"},this.getChallenges(),this.$message({message:e,type:"success"})}).catch(e=>this.$message({message:e,type:"error"}))},onEditChallenge(){this.utils.PUT("/manager/challenge",this.editChallengeForm).then(e=>{this.editChallengeDialogVisible=!1,this.getChallenges(),this.$message({message:e,type:"success"})}).catch(e=>this.$message({message:e,type:"error"}))},handleDelete(e){this.utils.DELETE("/manager/challenge?id="+e.ID).then(n=>{this.$message({message:n,type:"success"}),this.getChallenges()}).catch(n=>this.$message({message:n,type:"error"}))},handleVisible(e,n){this.utils.POST("/manager/challenge/visible",{ID:e,Visible:n}).then(d=>{this.$message({message:d,type:"success"}),this.getChallenges()}).catch(d=>this.$message({message:d,type:"error"}))}}},k={"slot-scope":"scope"},L={"slot-scope":"scope"},R={"slot-scope":"scope"},U=h("code",null,"{{FLAG}}",-1),N=h("code",null,"{{FLAG}}",-1);function E(e,n,d,G,t,p){const u=s("el-button"),m=s("el-table-column"),C=s("el-popconfirm"),D=s("el-table"),f=s("el-input"),g=s("el-form-item"),V=s("el-input-number"),F=s("el-switch"),w=s("el-form"),_=s("el-dialog"),T=A("loading");return c(),B("div",null,[l(u,{type:"primary",onClick:n[0]||(n[0]=o=>t.newChallengeDialogVisible=!0)},{default:a(()=>[i(r(e.$t("challenge.new")),1)]),_:1}),$((c(),b(D,{data:t.challengeList,style:{width:"100%"},stripe:""},{default:a(()=>[l(m,{width:"80",prop:"ID",label:"ID"}),l(m,{prop:"Title",label:e.$t("challenge.title")},null,8,["label"]),l(m,{prop:"BaseScore",label:e.$t("challenge.base_score")},null,8,["label"]),l(m,{prop:"Visible",label:e.$t("challenge.visible")},{default:a(()=>[h("template",k,[i(r(e.scope.row.Visible),1)])]),_:1},8,["label"]),l(m,{prop:"AutoRefreshFlag",label:e.$t("challenge.auto_refresh_flag")},{default:a(()=>[h("template",L,[i(r(e.scope.row.AutoRefreshFlag),1)])]),_:1},8,["label"]),l(m,{prop:"Command",label:e.$t("challenge.command")},null,8,["label"]),l(m,{label:e.$t("general.create_at"),width:"200",formatter:o=>e.utils.FormatGoTime(o.CreatedAt)},null,8,["label","formatter"]),l(m,{label:e.$t("general.operate"),width:"300"},{default:a(()=>[h("template",R,[l(C,{title:e.scope.row.Visible?e.$t("challenge.invisible_title"):e.$t("challenge.visible_title"),onOnConfirm:n[1]||(n[1]=o=>p.handleVisible(e.scope.row.ID,!e.scope.row.Visible))},{default:a(()=>[l(u,{plain:"",size:"mini",slot:"reference"},{default:a(()=>[i(r(e.$t("challenge.set_visible")),1)]),_:1})]),_:1},8,["title"]),l(u,{size:"mini",onClick:n[2]||(n[2]=()=>{t.editChallengeForm=JSON.parse(JSON.stringify(e.scope.row)),t.editChallengeDialogVisible=!0})},{default:a(()=>[i(r(e.$t("general.edit")),1)]),_:1}),l(C,{confirmButtonText:e.$t("general.confirm_cancel"),cancelButtonText:e.$t("general.cancel"),icon:"el-icon-info",iconColor:"red",title:e.$t("challenge.delete_title"),onOnConfirm:n[3]||(n[3]=o=>p.handleDelete(e.scope.row))},{default:a(()=>[l(u,{size:"mini",type:"danger",slot:"reference"},{default:a(()=>[i(r(e.$t("general.delete")),1)]),_:1})]),_:1},8,["confirmButtonText","cancelButtonText","title"])])]),_:1},8,["label"])]),_:1},8,["data"])),[[T,t.isLoading]]),l(_,{title:e.$t("challenge.publish"),visible:t.newChallengeDialogVisible},{default:a(()=>[l(w,{model:t.newChallengeForm,"label-width":"120px"},{default:a(()=>[l(g,{label:e.$t("challenge.title")},{default:a(()=>[l(f,{modelValue:t.newChallengeForm.Title,"onUpdate:modelValue":n[4]||(n[4]=o=>t.newChallengeForm.Title=o)},null,8,["modelValue"])]),_:1},8,["label"]),l(g,{label:e.$t("challenge.base_score")},{default:a(()=>[l(V,{modelValue:t.newChallengeForm.BaseScore,"onUpdate:modelValue":n[5]||(n[5]=o=>t.newChallengeForm.BaseScore=o),min:1},null,8,["modelValue"])]),_:1},8,["label"]),l(g,{label:e.$t("challenge.auto_refresh_flag")},{default:a(()=>[l(F,{modelValue:t.newChallengeForm.AutoRefreshFlag,"onUpdate:modelValue":n[6]||(n[6]=o=>t.newChallengeForm.AutoRefreshFlag=o)},null,8,["modelValue"])]),_:1},8,["label"]),t.newChallengeForm.AutoRefreshFlag?(c(),b(g,{key:0,label:e.$t("challenge.command")},{default:a(()=>[l(f,{modelValue:t.newChallengeForm.Command,"onUpdate:modelValue":n[7]||(n[7]=o=>t.newChallengeForm.Command=o)},null,8,["modelValue"]),h("span",null,[i(r(e.$t("challenge.flag_placeholder")),1),U])]),_:1},8,["label"])):y("",!0)]),_:1},8,["model"]),l(u,{type:"primary",onClick:p.onNewChallenge},{default:a(()=>[i(r(e.$t("challenge.publish")),1)]),_:1},8,["onClick"])]),_:1},8,["title","visible"]),l(_,{title:e.$t("challenge.edit"),visible:t.editChallengeDialogVisible},{default:a(()=>[l(w,{model:t.editChallengeForm,"label-width":"120px"},{default:a(()=>[l(g,{label:e.$t("challenge.title")},{default:a(()=>[l(f,{modelValue:t.editChallengeForm.Title,"onUpdate:modelValue":n[8]||(n[8]=o=>t.editChallengeForm.Title=o)},null,8,["modelValue"])]),_:1},8,["label"]),l(g,{label:e.$t("challenge.base_score")},{default:a(()=>[l(V,{modelValue:t.editChallengeForm.BaseScore,"onUpdate:modelValue":n[9]||(n[9]=o=>t.editChallengeForm.BaseScore=o),min:1},null,8,["modelValue"])]),_:1},8,["label"]),l(g,{label:e.$t("challenge.auto_refresh_flag")},{default:a(()=>[l(F,{modelValue:t.editChallengeForm.AutoRefreshFlag,"onUpdate:modelValue":n[10]||(n[10]=o=>t.editChallengeForm.AutoRefreshFlag=o)},null,8,["modelValue"])]),_:1},8,["label"]),t.editChallengeForm.AutoRefreshFlag?(c(),b(g,{key:0,label:e.$t("challenge.command")},{default:a(()=>[l(f,{modelValue:t.editChallengeForm.Command,"onUpdate:modelValue":n[11]||(n[11]=o=>t.editChallengeForm.Command=o)},null,8,["modelValue"]),h("span",null,[i(r(e.$t("challenge.flag_placeholder")),1),N])]),_:1},8,["label"])):y("",!0)]),_:1},8,["model"]),l(u,{type:"primary",onClick:p.onEditChallenge},{default:a(()=>[i(r(e.$t("challenge.edit")),1)]),_:1},8,["onClick"])]),_:1},8,["title","visible"])])}const I=v(S,[["render",E]]);export{I as default};
