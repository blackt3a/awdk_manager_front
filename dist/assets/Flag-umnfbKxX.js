import{_ as T,f as L,c as h,a as l,w as n,g as v,h as f,e as I,r as o,o as r,b as m,t as p,F as y,j as D}from"./index-w83zdtlJ.js";const R={name:"Flag",data:()=>({page:1,per:15,total:0,flagList:null,teamList:[],challengeList:[],exportFlagDialogVisible:!1,exportChallengeID:null,totalRound:0,round:0,team:null,challenge:null}),mounted(){this.getTotalRound(),this.getTeams(),this.getFlags(),this.getChallenges()},methods:{getTeams(){this.utils.GET("/manager/teams").then(e=>{this.teamList=e}).catch(e=>this.$message.error(e))},getChallenges(){this.utils.GET("/manager/challenges").then(e=>{this.challengeList=e}).catch(e=>this.$message.error(e))},getTotalRound(){this.utils.GET("/time").then(e=>{this.totalRound=e.TotalRound}).catch(e=>this.$message({message:e,type:"error"}))},getFlags(){let e=this.team||0,a=this.challenge||0;this.utils.GET(`/manager/flags?per=${this.per}&page=${this.page}&round=${this.round}&team=${e}&challenge=${a}`).then(s=>{this.flagList=s.array,this.total=s.total}).catch(s=>this.$message({message:s,type:"error"}))},cleanFilter(){this.round=0,this.team=null,this.challenge=null,this.page=1,this.getFlags()},generateFlag(){this.$confirm(this.$i18n.t("flag.generate_flag_confirm"),this.$i18n.t("flag.confirm"),{confirmButtonText:this.$i18n.t("general.apply"),cancelButtonText:this.$i18n.t("general.cancel"),type:"warning"}).then(()=>{this.utils.POST("/manager/flag/generate").then(e=>{this.getFlags(),this.$message({message:e,type:"success"})}).catch(e=>this.$message({message:e,type:"error"}))})},exportFlag(){this.utils.GET("/manager/flag/export?id="+this.exportChallengeID).then(e=>{let a=new Blob([JSON.stringify(e)],{type:"text/plain"}),s=document.createElement("a"),b=window.URL.createObjectURL(a);s.href=b,s.download=name,s.click(),window.URL.revokeObjectURL(b)}).catch(e=>this.$message({message:e,type:"error"}))}}},U=I("br",null,null,-1);function B(e,a,s,b,E,u){const d=o("el-button"),i=o("el-form-item"),F=o("el-input-number"),c=o("el-option"),$=o("el-select"),V=o("el-form"),g=o("el-table-column"),_=o("el-table"),C=o("el-pagination"),w=o("el-dialog"),k=L("loading");return r(),h("div",null,[l(V,{inline:!0},{default:n(()=>[l(i,null,{default:n(()=>[l(d,{type:"primary",onClick:u.generateFlag},{default:n(()=>[m(p(e.$t("flag.generate_flag")),1)]),_:1},8,["onClick"])]),_:1}),l(i,null,{default:n(()=>[l(d,{type:"primary",onClick:a[0]||(a[0]=t=>e.exportFlagDialogVisible=!0)},{default:n(()=>[m(p(e.$t("flag.export_flag")),1)]),_:1})]),_:1}),l(i),l(i,{label:e.$t("flag.round")},{default:n(()=>[l(F,{modelValue:e.round,"onUpdate:modelValue":a[1]||(a[1]=t=>e.round=t),"controls-position":"right",min:0},null,8,["modelValue"])]),_:1},8,["label"]),l(i,{label:e.$t("flag.team")},{default:n(()=>[l($,{modelValue:e.team,"onUpdate:modelValue":a[2]||(a[2]=t=>e.team=t),placeholder:e.$t("flag.select_team")},{default:n(()=>[(r(!0),h(y,null,D(e.teamList,t=>(r(),f(c,{key:t.ID,label:t.Name,value:t.ID},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),l(i,{label:e.$t("flag.challenge")},{default:n(()=>[l($,{modelValue:e.challenge,"onUpdate:modelValue":a[3]||(a[3]=t=>e.challenge=t),placeholder:e.$t("flag.select_challenge")},{default:n(()=>[(r(!0),h(y,null,D(e.challengeList,t=>(r(),f(c,{key:t.ID,label:t.Title,value:t.ID},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),l(i,null,{default:n(()=>[l(d,{icon:"el-icon-search",type:"primary",round:"",onClick:a[4]||(a[4]=()=>{e.page=1,u.getFlags()})},{default:n(()=>[m(p(e.$t("flag.filter")),1)]),_:1}),l(d,{round:"",onClick:u.cleanFilter},{default:n(()=>[m(p(e.$t("flag.clean_filter")),1)]),_:1},8,["onClick"])]),_:1})]),_:1}),v((r(),f(_,{data:e.flagList,style:{width:"100%"},stripe:""},{default:n(()=>[l(g,{width:"80",prop:"ID",label:"ID"}),l(g,{width:"80",prop:"TeamID",label:e.$t("flag.team")},null,8,["label"]),l(g,{width:"80",prop:"ChallengeID",label:e.$t("flag.challenge")},null,8,["label"]),l(g,{width:"80",prop:"GameBoxID",label:e.$t("flag.gamebox")},null,8,["label"]),l(g,{width:"80",prop:"Round",label:e.$t("flag.round")},null,8,["label"]),l(g,{prop:"Flag",label:e.$t("flag.flag")},null,8,["label"])]),_:1},8,["data"])),[[k,e.flagList===null]]),U,l(C,{style:{"text-align":"center"},background:"",layout:"prev, pager, next",total:e.total,"page-size":e.per,onCurrentChange:a[5]||(a[5]=t=>{e.page=t,u.getFlags()})},null,8,["total","page-size"]),l(w,{title:e.$t("flag.export_flag"),modelValue:e.exportFlagDialogVisible,"onUpdate:modelValue":a[7]||(a[7]=t=>e.exportFlagDialogVisible=t)},{default:n(()=>[l(V,{"label-width":"120px"},{default:n(()=>[l(i,{label:e.$t("challenge.title")},{default:n(()=>[l($,{modelValue:e.exportChallengeID,"onUpdate:modelValue":a[6]||(a[6]=t=>e.exportChallengeID=t)},{default:n(()=>[(r(!0),h(y,null,D(e.challengeList,t=>(r(),f(c,{key:t.ID,label:t.Title,value:t.ID},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1}),l(d,{type:"primary",onClick:u.exportFlag},{default:n(()=>[m(p(e.$t("general.export")),1)]),_:1},8,["onClick"])]),_:1},8,["title","modelValue"])])}const N=T(R,[["render",B]]);export{N as default};