"use strict";(self.webpackChunktradio=self.webpackChunktradio||[]).push([[2090],{82335:(e,a,r)=>{r.d(a,{A:()=>i});r(9950);var n=r(93047),t=r(44414);const i=function(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"footer dashboard",children:(0,t.jsx)("div",{className:"container-fluid",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-sm-8 col-12",children:(0,t.jsx)("div",{className:"copyright",children:(0,t.jsxs)("p",{children:["\xa9 Copyright ",(new Date).getFullYear(),"  ",(0,t.jsx)(n.N_,{to:"",children:"Caladex"})," I All Rights Reserved"]})})}),(0,t.jsx)("div",{className:"col-sm-4 col-12",children:(0,t.jsx)("div",{className:"footer-social",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(n.N_,{to:"#",children:(0,t.jsx)("i",{className:"fa fa-facebook"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(n.N_,{to:"#",children:(0,t.jsx)("i",{className:"fa fa-twitter"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(n.N_,{to:"#",children:(0,t.jsx)("i",{className:"fa fa-linkedin"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(n.N_,{to:"#",children:(0,t.jsx)("i",{className:"fa fa-youtube"})})})]})})})]})})})})}},59313:(e,a,r)=>{r.d(a,{A:()=>v});var n=r(9950),t=r(32629),i=r(62253),o=r(16673),s=r(93047),l=r(81543),c=r(41397),d=r(24266),u=r(41377),m=r(76045),h=r(44414);const v=function(e){let{activePage:a}=e;const v=(0,o.useHistory)(),{setAuthToken:f,currentUser:x,isAuthenticated:b,setAuthenticated:g,setCurrentUser:j}=(0,n.useContext)(l.c);return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{className:"header dashboard",children:(0,h.jsx)("div",{className:"".concat("exchange"===a?"container-fluid px-md-5":"container"),children:(0,h.jsx)("div",{className:"row",children:(0,h.jsx)("div",{className:"col-xl-12",children:(0,h.jsx)("div",{className:"navigation ".concat("exchange"===a?"px-md-3":""," justify-content-between"),children:(0,h.jsxs)(t.A,{bg:"light",expand:"lg",children:[(0,h.jsx)(u.S7,{children:(0,h.jsx)(s.N_,{className:"navbar-brand",to:"/",children:(0,h.jsx)("img",{src:r(20678),alt:""})})}),(0,h.jsx)(u.Ix,{children:(0,h.jsx)(s.N_,{className:"navbar-brand",to:"/",children:(0,h.jsx)("img",{src:r(76233),width:"50px",alt:""})})}),(0,h.jsx)(t.A.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,h.jsxs)(t.A.Collapse,{children:[(0,h.jsxs)(i.A,{className:"ms-auto",children:[(0,h.jsx)(i.A.Item,{children:(0,h.jsx)(i.A.Link,{className:"nav-Nav.link",href:"/",children:"Home"})}),(0,h.jsx)(i.A.Item,{children:(0,h.jsx)(i.A.Link,{className:"nav-Nav.link ".concat("exchange"===a?"active":""),href:"/exchange/ethereum/cax_dai",children:"Exchange"})}),b&&(0,h.jsx)(i.A.Item,{children:(0,h.jsx)(i.A.Link,{className:"nav-Nav.link ".concat("onRamp"===a?"active":""),href:"/on-ramp",children:"Buy Crypto "})}),(0,h.jsx)(i.A.Item,{children:(0,h.jsx)(i.A.Link,{className:"nav-Nav.link ".concat("farm"===a?"active":""),href:"/farm",children:"Earn/Stake "})}),(0,h.jsx)(i.A.Item,{children:(0,h.jsx)(i.A.Link,{className:"nav-Nav.link ".concat("token-info"===a?"active":""),href:"/token-info",children:"Token Info Base"})}),b&&(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(i.A.Item,{children:(0,h.jsx)(i.A.Link,{className:"nav-Nav.link ".concat("account-overview"===a?"active":""),href:"/account-overview",children:"Account"})})}),"exchange"===a&&(0,h.jsx)(i.A.Item,{children:(0,h.jsx)(i.A.Link,{className:"nav-Nav.link ".concat("blogs"===a?"active":""),href:"/blogs",children:"Blog"})}),!b&&(0,c.isEmpty)(x)?(0,h.jsx)(i.A.Item,{children:(0,h.jsx)(i.A.Link,{className:"nav-Nav.link",href:"/signin",children:"Sign in"})}):(0,h.jsx)(i.A.Item,{children:(0,h.jsx)(i.A.Link,{className:"nav-Nav.link",href:"#",onClick:e=>(e.preventDefault(),f(""),(0,d.fE)(""),j({}),g(!1),v.push("/signin"),!1),children:"Sign out"})})]}),(0,h.jsx)("div",{className:"d-flex flex-column flex-md-row my-2 my-md-0 align-items-center float-md-right",children:(0,h.jsx)("div",{className:"signin-btn",children:(0,h.jsx)(m.Yy,{})})})]})]})})})})})})})}},32090:(e,a,r)=>{r.r(a),r.d(a,{default:()=>b});var n=r(9950),t=r(82335),i=r(59313),o=r(96011),s=r.n(o),l=r(16673),c=r(84894),d=r(41920),u=r(51083),m=r(81543),h=r(24266),v=r(35887),f=r(29714),x=r(44414);const b=function(){const{id:e,token:a}=(0,l.useParams)(),{setCurrentUser:r,setAuthProcessing:o,setAuthenticated:b,currentUser:g,setAuthToken:j}=(0,n.useContext)(m.c),p=(0,l.useHistory)(),[A,N]=n.useState(""),{isLoading:y}=(0,d.useQuery)(["email-verify",e,a],(async e=>{var a;let{queryKey:n}=e;const[t,i]=n.slice(1,2);if(void 0===i){null===g||void 0===g||!g.id||null===g||void 0===g||g.id;try{var l;const e=await s().post("".concat(c.Sb,"/auth/verified-email/").concat(t),{});if((null===e||void 0===e?void 0:e.status)!==c.I7)throw new Error(null===e||void 0===e?void 0:e.data.message);o(0);const{user:a,token:n,refreshToken:i}=null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.data;r({...a,id:a._id}),j(n),(0,h.fE)(i),b(!0),p.push("/exchange/ethereum/cax_dai")}catch(k){var d,u,m,v,f,x;if(null!==k&&void 0!==k&&null!==(d=k.response)&&void 0!==d&&null!==(u=d.data)&&void 0!==u&&u.message)console.log("verify-email-Page@verified-email-error:",null===k||void 0===k||null===(m=k.response)||void 0===m||null===(v=m.data)||void 0===v?void 0:v.message),N(null===k||void 0===k||null===(f=k.response)||void 0===f||null===(x=f.data)||void 0===x?void 0:x.message);else console.error("verify-email-Page@verified-email-error:",k.message),N(k.message)}return!1}const A=await s().get("".concat(c.Sb,"/auth/verify-email/").concat(t,"/").concat(i),{});if((null===A||void 0===A?void 0:A.status)===c.I7&&(null===A||void 0===A||null===(a=A.data)||void 0===a?void 0:a.status)===c.pn){var y;const{user:e,token:a,refreshToken:n}=null===A||void 0===A||null===(y=A.data)||void 0===y?void 0:y.data;if(r({...e,id:e._id}),j(a),(0,h.fE)(n),b(!0),(null===e||void 0===e?void 0:e.status)===c.HJ.APPROVED)return p.push("/exchange/ethereum/cax_dai"),!1}return!1}),{refetchOnWindowFocus:!1,refetchInterval:c.yN,retry:!0});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i.A,{}),y&&(0,x.jsx)(u.A,{color:"info"}),(0,x.jsx)("div",{className:"verification section-padding",children:(0,x.jsx)("div",{className:"container h-100",children:(0,x.jsx)("div",{className:"row justify-content-center h-100 align-items-center",children:(0,x.jsx)("div",{className:"col-xl-5 col-md-6",children:(0,x.jsx)("div",{className:"auth-form card",children:(0,x.jsxs)("div",{className:"card-body",children:[A&&(0,x.jsx)("p",{className:"text-danger my-3 text-center",children:A}),(0,x.jsxs)("form",{action:"verify-step-4.html",className:"identity-upload",children:[(0,x.jsxs)("div",{className:"identity-content",children:[(0,x.jsx)("span",{className:"icon",children:(0,x.jsx)("i",{className:"fa fa-shield"})}),(0,x.jsx)("h4",{children:"Please verify your Email!"}),(0,x.jsx)("p",{children:"We have sent message to your mailbox."})]}),(0,x.jsx)("div",{className:"upload-loading text-center mb-3",children:(0,x.jsx)("i",{className:"fa fa-spinner fa-spin fa-3x fa-fw"})}),(0,x.jsx)("div",{className:"text-center",children:(0,x.jsx)("button",{type:"button",className:"btn btn-primary",onClick:async()=>{if((null===g||void 0===g?void 0:g.status)===c.HJ.VERIFIED||(null===g||void 0===g?void 0:g.status)===c.HJ.VERIFYING)return v.oR.error("Please login or your account is verified already."),!1;const a=f.Ik().shape({id:f.Yj().min(10).max(255).required()});let r="";if(await a.validate({id:e}).catch((e=>(r=e.message,!1))),r)return console.log(r),v.oR.error("Invalid parameter detected."),!1;const n=v.oR.loading("Resending Email...");let t=await s().post("".concat(c.Sb,"/auth/resend-email/").concat(e),{});if((null===t||void 0===t?void 0:t.status)!==c.I7)throw v.oR.dismiss(n),v.oR.error("Unfortunately Email Not Sent!"),new Error("Resending email failed.");return v.oR.dismiss(n),v.oR.success("Email Successfully Sent!"),!1},children:"Resend Email"})})]})]})})})})})}),(0,x.jsx)(t.A,{})]})}},51083:(e,a,r)=>{r.d(a,{A:()=>T});var n=r(57528),t=r(98587),i=r(58168),o=r(9950),s=r(72004),l=r(74061),c=r(88283),d=r(99269),u=r(44414);const m=o.createContext();var h=r(61676),v=r(62700),f=r(67847),x=r(80863),b=r(52659);function g(e){return(0,b.Ay)("MuiLinearProgress",e)}(0,x.A)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var j,p,A,N,y,k;const w=["className","color","value","valueBuffer","variant"];let C,I,S,R,P,L;const E=(0,c.i7)(C||(C=j||(j=(0,n.A)(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])))),B=(0,c.i7)(I||(I=p||(p=(0,n.A)(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])))),_=(0,c.i7)(S||(S=A||(A=(0,n.A)(["\n  0% {\n    opacity: 1;\n    background-position: 0 -23px;\n  }\n\n  60% {\n    opacity: 0;\n    background-position: 0 -23px;\n  }\n\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n"])))),q=(e,a)=>"inherit"===a?"currentColor":e.vars?e.vars.palette.LinearProgress["".concat(a,"Bg")]:"light"===e.palette.mode?(0,d.a)(e.palette[a].main,.62):(0,d.e$)(e.palette[a].main,.5),H=(0,v.Ay)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:r}=e;return[a.root,a["color".concat((0,h.A)(r.color))],a[r.variant]]}})((e=>{let{ownerState:a,theme:r}=e;return(0,i.A)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:q(r,a.color)},"inherit"===a.color&&"buffer"!==a.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===a.variant&&{backgroundColor:"transparent"},"query"===a.variant&&{transform:"rotate(180deg)"})})),D=(0,v.Ay)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,a)=>{const{ownerState:r}=e;return[a.dashed,a["dashedColor".concat((0,h.A)(r.color))]]}})((e=>{let{ownerState:a,theme:r}=e;const n=q(r,a.color);return(0,i.A)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===a.color&&{opacity:.3},{backgroundImage:"radial-gradient(".concat(n," 0%, ").concat(n," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,c.AH)(R||(R=N||(N=(0,n.A)(["\n    animation: "," 3s infinite linear;\n  "]))),_)),F=(0,v.Ay)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,a)=>{const{ownerState:r}=e;return[a.bar,a["barColor".concat((0,h.A)(r.color))],("indeterminate"===r.variant||"query"===r.variant)&&a.bar1Indeterminate,"determinate"===r.variant&&a.bar1Determinate,"buffer"===r.variant&&a.bar1Buffer]}})((e=>{let{ownerState:a,theme:r}=e;return(0,i.A)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===a.color?"currentColor":(r.vars||r).palette[a.color].main},"determinate"===a.variant&&{transition:"transform .".concat(4,"s linear")},"buffer"===a.variant&&{zIndex:1,transition:"transform .".concat(4,"s linear")})}),(e=>{let{ownerState:a}=e;return("indeterminate"===a.variant||"query"===a.variant)&&(0,c.AH)(P||(P=y||(y=(0,n.A)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    "]))),E)})),M=(0,v.Ay)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,a)=>{const{ownerState:r}=e;return[a.bar,a["barColor".concat((0,h.A)(r.color))],("indeterminate"===r.variant||"query"===r.variant)&&a.bar2Indeterminate,"buffer"===r.variant&&a.bar2Buffer]}})((e=>{let{ownerState:a,theme:r}=e;return(0,i.A)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==a.variant&&{backgroundColor:"inherit"===a.color?"currentColor":(r.vars||r).palette[a.color].main},"inherit"===a.color&&{opacity:.3},"buffer"===a.variant&&{backgroundColor:q(r,a.color),transition:"transform .".concat(4,"s linear")})}),(e=>{let{ownerState:a}=e;return("indeterminate"===a.variant||"query"===a.variant)&&(0,c.AH)(L||(L=k||(k=(0,n.A)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n    "]))),B)})),T=o.forwardRef((function(e,a){const r=(0,f.A)({props:e,name:"MuiLinearProgress"}),{className:n,color:c="primary",value:d,valueBuffer:v,variant:x="indeterminate"}=r,b=(0,t.A)(r,w),j=(0,i.A)({},r,{color:c,variant:x}),p=(e=>{const{classes:a,variant:r,color:n}=e,t={root:["root","color".concat((0,h.A)(n)),r],dashed:["dashed","dashedColor".concat((0,h.A)(n))],bar1:["bar","barColor".concat((0,h.A)(n)),("indeterminate"===r||"query"===r)&&"bar1Indeterminate","determinate"===r&&"bar1Determinate","buffer"===r&&"bar1Buffer"],bar2:["bar","buffer"!==r&&"barColor".concat((0,h.A)(n)),"buffer"===r&&"color".concat((0,h.A)(n)),("indeterminate"===r||"query"===r)&&"bar2Indeterminate","buffer"===r&&"bar2Buffer"]};return(0,l.A)(t,g,a)})(j),A=(()=>{const e=o.useContext(m);return null!=e&&e})(),N={},y={bar1:{},bar2:{}};if("determinate"===x||"buffer"===x)if(void 0!==d){N["aria-valuenow"]=Math.round(d),N["aria-valuemin"]=0,N["aria-valuemax"]=100;let e=d-100;A&&(e=-e),y.bar1.transform="translateX(".concat(e,"%)")}else 0;if("buffer"===x)if(void 0!==v){let e=(v||0)-100;A&&(e=-e),y.bar2.transform="translateX(".concat(e,"%)")}else 0;return(0,u.jsxs)(H,(0,i.A)({className:(0,s.A)(p.root,n),ownerState:j,role:"progressbar"},N,{ref:a},b,{children:["buffer"===x?(0,u.jsx)(D,{className:p.dashed,ownerState:j}):null,(0,u.jsx)(F,{className:p.bar1,ownerState:j,style:y.bar1}),"determinate"===x?null:(0,u.jsx)(M,{className:p.bar2,ownerState:j,style:y.bar2})]}))}))},76233:(e,a,r)=>{e.exports=r.p+"static/media/logo-spin.ebe53700191a1def4f70.png"},20678:(e,a,r)=>{e.exports=r.p+"static/media/logo.3a5217131dbf810cca8a.png"}}]);