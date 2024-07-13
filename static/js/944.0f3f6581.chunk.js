"use strict";(self.webpackChunktradio=self.webpackChunktradio||[]).push([[944],{10944:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x,getXAxisTime:()=>h});var i=a(41397),n=a(59051),s=a.n(n),r=a(9950),o=a(93047),c=a(24266),d=a(97538),l=a(41377),m=a(44414);const h=e=>{var t,a;return[(0,i.isUndefined)(e)?(new Date).getTime()+6e4:new Date(null===(t=e[0])||void 0===t?void 0:t.x).getTime(),(0,i.isUndefined)(e)?(new Date).getTime()+6e4:new Date(null===(a=e[e.length-1])||void 0===a?void 0:a.x).getTime()]},x=e=>{let{data:t}=e;const[a,n]=(0,r.useState)({min:h(t)[0]+6e4,max:h(t)[1]+6e4}),[c,x]=(0,r.useState)(y(t,a.min,a.max)),[u,k]=(0,r.useState)("all");(0,r.useEffect)((()=>{x(y(t,a.min,a.max))}),[t]);const v=e=>{switch(k(e),e){case"one_day":n({min:s()().subtract(1,"days").valueOf(),max:(new Date).getTime()});break;case"one_month":n({min:s()().subtract(30,"days").valueOf(),max:(new Date).getTime()});break;case"six_months":n({min:s()().subtract(6,"months").valueOf(),max:(new Date).getTime()});break;case"one_year":n({min:s()().subtract(1,"year").valueOf(),max:(new Date).getTime()});break;case"ytd":n({min:s()().startOf("year").valueOf(),max:(new Date).getTime()});break;case"all":n({min:h(t)[0]+6e4,max:h(t)[1]+6e4})}};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"d-flex duration-option text-right my-3 px-4",children:[(0,m.jsx)(o.N_,{id:"one_day",to:"#",onClick:()=>v("one_day"),className:"one_day"===u?"active":"",children:"1D"}),"\xa0",(0,m.jsx)(o.N_,{id:"one_month",to:"#",onClick:()=>v("one_month"),className:"one_month"===u?"active":"",children:"1M"}),"\xa0",(0,m.jsx)(o.N_,{id:"six_months",to:"#",onClick:()=>v("six_months"),className:"six_months"===u?"active":"",children:"6M"}),"\xa0",(0,m.jsx)(o.N_,{id:"one_year",to:"#",onClick:()=>v("one_year"),className:"one_year"===u?"active":"",children:"1Y"}),"\xa0",(0,m.jsx)(o.N_,{id:"ytd",to:"#",onClick:()=>v("ytd"),className:"ytd"===u?"active":"",children:"YTD"}),"\xa0",(0,m.jsx)(o.N_,{id:"all",to:"#",onClick:()=>v("all"),className:"all"===u?"active":"",children:"ALL"})]}),(0,m.jsx)("div",{id:"chart-timeline",children:(0,i.isUndefined)(t)||(0,i.isEmpty)(t)?(0,m.jsx)("div",{style:{height:"350px"},className:"d-flex justify-content-center align-items-center",children:"Price data is unavailable."}):(0,m.jsxs)(d.bl,{width:l.Fr?400:800,height:l.Fr?250:500,data:c,margin:{top:5,right:30,left:20,bottom:5},children:[(0,m.jsx)(d.dC,{strokeDasharray:"3 3",vertical:!1}),(0,m.jsx)(d.WX,{dataKey:"t",minTickGap:30,tickMargin:8,tickSize:0,height:24,tickFormatter:e=>s()(e).format(t.length>30?"MM/DD/YYYY H:m:s":"M/dd h:m:s")}),(0,m.jsx)(d.h8,{}),(0,m.jsx)(d.m_,{}),(0,m.jsx)(d.s$,{}),(0,m.jsx)(d.N1,{type:"monotone",dataKey:"Price",stroke:"#28e2e2",activeDot:{r:4},strokeWidth:3,dot:!1}),(0,m.jsx)(d.N1,{type:"monotone",dataKey:"Sell Price",stroke:"red",strokeWidth:1.5,activeDot:{r:2},dot:!1}),(0,m.jsx)(d.N1,{type:"monotone",dataKey:"Buy Price",stroke:"green",strokeWidth:1.5,activeDot:{r:2},dot:!1})]})})]})},y=(e,t,a)=>{let i=[];return e.map((e=>{const n=new Date(e.x).getTime();return t<n&&a>n&&i.push({t:n,Price:(0,c.GS)(e.y[0],4),"Sell Price":(0,c.GS)(e.y[1],4),"Buy Price":(0,c.GS)(e.y[2],4)}),!1})),i}}}]);