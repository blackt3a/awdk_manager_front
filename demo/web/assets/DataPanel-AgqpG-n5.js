import{_ as L,f as z,c as o,a as n,w as a,r as i,o as l,g as F,h as u,e as s,t,i as c,b as d,F as b,j as w,n as T,p as G,d as B}from"./index-LaidQ9b-.js";const D={name:"DataPanel",data:()=>({timer:null,tickTimer:null,loadingLog:!1,time:null,minute:0,second:0,logs:[],rank:[],rankHeader:[],panel:{}}),mounted(){this.loop(),this.timer=setInterval(this.loop,5e3),this.tickTimer=setInterval(()=>{this.time!==null&&(this.time.RoundRemainTime--<=0&&(this.time.RoundRemainTime=this.time.Duration*60,this.time.NowRound++),this.minute=Math.floor(this.time.RoundRemainTime/60),this.second=this.time.RoundRemainTime-this.minute*60)},1e3)},beforeDestroy(){clearInterval(this.timer),clearInterval(this.tickTimer)},methods:{loop(){this.getTime(),this.getLogs(),this.getRank(),this.getPanel()},getTime(){this.utils.GET("/time").then(e=>{this.time=e}).catch(e=>this.$message({message:e,type:"error"}))},getLogs(){this.loadingLog=!0,this.utils.GET("/manager/logs").then(e=>{this.logs=e,this.loadingLog=!1}).catch(e=>this.$message({message:e,type:"error"}))},getRank(){this.utils.GET("/manager/rank").then(e=>{this.rank=e.Rank,this.rankHeader=e.Title}).catch(e=>this.$message({message:e,type:"error"}))},getPanel(){this.utils.GET("/manager/panel").then(e=>{this.panel=e}).catch(e=>this.$message({message:e,type:"error"}))},statusClass(e,g){return e&&g?"status-double":e?"status-attacked":g?"status-down":"status-normal"}},computed:{progressPercent(){let e=Number(((new Date().getTime()/1e3-this.time.BeginTime)/(this.time.EndTime-this.time.BeginTime)*100).toFixed(2));return e>100?100:e}}},v=e=>(G("data-v-c85bc5b4"),e=e(),B(),e),C={slot:"header",class:"clearfix"},P={key:0},A={key:0},E=["innerHTML"],M={key:2},H={key:3},V={class:"system-log"},O={class:"system-log-body"},j={class:"system-log-time"},W={class:"system-log-message"},q={scope:"scope"},J=["score"],K=v(()=>s("br",null,null,-1)),Q=v(()=>s("br",null,null,-1)),U={class:"panel-data"},X={class:"panel-text"},Y={class:"panel-data"},Z={class:"panel-text"},x={class:"panel-data"},ee={class:"panel-text"},te={class:"panel-data"},se={class:"panel-text"};function ae(e,g,ne,le,oe,k){const h=i("el-tag"),$=i("el-button"),S=i("el-popover"),R=i("el-progress"),f=i("el-card"),m=i("el-col"),_=i("el-table-column"),N=i("el-table"),y=i("el-row"),I=z("loading");return l(),o("div",null,[n(y,{gutter:12},{default:a(()=>[n(m,{span:14},{default:a(()=>[F((l(),u(f,{shadow:"always"},{default:a(()=>[s("div",C,[e.time!==null?(l(),o("span",P,[e.time.Status==="wait"?(l(),o("span",A,[s("b",null,t(e.$t("panel.not_begin")),1)])):c("",!0),e.time.Status==="on"?(l(),o("span",{key:1,innerHTML:e.$t("panel.til_round_end",{round:e.time.NowRound,minute:e.minute,second:e.second})},null,8,E)):c("",!0),e.time.Status==="pause"?(l(),o("span",M,[s("b",null,t(e.$t("panel.pause")),1)])):c("",!0),e.time.Status==="end"?(l(),o("span",H,[s("b",null,t(e.$t("panel.end")),1)])):c("",!0)])):c("",!0),n(S,{style:{float:"right"},placement:"bottom",title:"",width:"300",trigger:"click"},{default:a(()=>[s("p",null,[d(t(e.$t("panel.previous_round_zero_title"))+t(e.panel.PreviousRoundScore)+" ",1),e.panel.PreviousRoundScore<=0?(l(),u(h,{key:0,size:"mini",type:"success"},{default:a(()=>[d(t(e.$t("panel.ok")),1)]),_:1})):(l(),u(h,{key:1,size:"mini",type:"danger"},{default:a(()=>[d(t(e.$t("panel.zero_alert")),1)]),_:1}))]),s("p",null,[d(t(e.$t("panel.total_zero_title"))+t(e.panel.TotalScore)+" ",1),e.panel.TotalScore<=0?(l(),u(h,{key:0,size:"mini",type:"success"},{default:a(()=>[d(t(e.$t("panel.ok")),1)]),_:1})):(l(),u(h,{key:1,size:"mini",type:"danger"},{default:a(()=>[d(t(e.$t("panel.zero_alert")),1)]),_:1}))]),n($,{slot:"reference",size:"mini"},{default:a(()=>[d(t(e.$t("panel.debug_info")),1)]),_:1})]),_:1}),e.time!==null?(l(),u(R,{key:1,"text-inside":!0,"stroke-width":17,percentage:k.progressPercent},null,8,["percentage"])):c("",!0)]),s("div",V,[(l(!0),o(b,null,w(e.logs,(r,p)=>(l(),o("div",{key:p},[s("div",O,[s("span",j,"["+t(e.utils.FormatGoTime(r.CreatedAt))+"]",1),s("span",{class:T("system-log-"+["normal","warning","important"][r.Level])}," ["+t(["NORMAL","WARNING","IMPORTANT"][r.Level])+"] ",3),s("span",W,t(r.Content),1)])]))),128))])]),_:1})),[[I,e.loadingLog]])]),_:1}),n(m,{span:10},{default:a(()=>[n(f,{shadow:"always"},{default:a(()=>[n(N,{data:e.rank,stripe:"",style:{width:"100%"},height:"530","max-height":"530",size:"small"},{default:a(()=>[n(_,{type:"index",label:"#",width:"50"}),n(_,{prop:"TeamName",label:e.$t("panel.team")},null,8,["label"]),n(_,{prop:"Score",label:e.$t("panel.score"),formatter:r=>e.utils.FormatFloat(r.Score)},null,8,["label","formatter"]),(l(!0),o(b,null,w(e.rankHeader,(r,p)=>(l(),u(_,{key:p,label:r},{default:a(()=>[s("template",q,[s("span",{score:e.utils.FormatFloat(e.scope.row.GameBoxStatus[p].Score),class:T(k.statusClass(e.scope.row.GameBoxStatus[p].IsAttacked,e.scope.row.GameBoxStatus[p].IsDown))},t(e.utils.FormatFloat(e.scope.row.GameBoxStatus[p].Score)),11,J)])]),_:2},1032,["label"]))),128))]),_:1},8,["data"]),K]),_:1}),Q,n(f,null,{default:a(()=>[n(y,{gutter:20},{default:a(()=>[n(m,{span:6,class:"panel"},{default:a(()=>[s("p",U,t(e.panel.SubmitFlag),1),s("span",X,t(e.$t("panel.submit_flag_count")),1)]),_:1}),n(m,{span:6,class:"panel"},{default:a(()=>[s("p",Y,t(e.panel.CheckDown),1),s("span",Z,t(e.$t("panel.checkdown_count")),1)]),_:1}),n(m,{span:6,class:"panel"},{default:a(()=>[s("p",x,t(e.panel.MemAllocated),1),s("span",ee,t(e.$t("panel.memory_allocated")),1)]),_:1}),n(m,{span:6,class:"panel",style:{"border-right-width":"0"}},{default:a(()=>[s("p",te,t(e.panel.NumGoroutine),1),s("span",se,t(e.$t("panel.goroutine_count")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}const re=L(D,[["render",ae],["__scopeId","data-v-c85bc5b4"]]);export{re as default};
