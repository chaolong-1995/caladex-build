"use strict";(self.webpackChunktradio=self.webpackChunktradio||[]).push([[2090,2335,9313],{82335:(e,n,a)=>{a.r(n),a.d(n,{default:()=>i});a(9950);var r=a(93047),t=a(44414);const i=function(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"footer dashboard",children:(0,t.jsx)("div",{className:"container-fluid",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-sm-8 col-12",children:(0,t.jsx)("div",{className:"copyright",children:(0,t.jsxs)("p",{children:["\xa9 Copyright ",(new Date).getFullYear(),"  ",(0,t.jsx)(r.N_,{to:"",children:"Caladex"})," I All Rights Reserved"]})})}),(0,t.jsx)("div",{className:"col-sm-4 col-12",children:(0,t.jsx)("div",{className:"footer-social",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(r.N_,{to:"#",children:(0,t.jsx)("i",{className:"fa fa-facebook"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(r.N_,{to:"#",children:(0,t.jsx)("i",{className:"fa fa-twitter"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(r.N_,{to:"#",children:(0,t.jsx)("i",{className:"fa fa-linkedin"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(r.N_,{to:"#",children:(0,t.jsx)("i",{className:"fa fa-youtube"})})})]})})})]})})})})}},59313:(e,n,a)=>{a.r(n),a.d(n,{default:()=>v});var r=a(9950),t=a(32629),i=a(62253),o=a(16673),s=a(93047),l=a(81543),c=a(41397),d=a(24266),u=a(41377),m=a(76045),f=a(44414);const v=function(e){let{activePage:n}=e;const v=(0,o.useHistory)(),{setAuthToken:h,currentUser:x,isAuthenticated:g,setAuthenticated:p,setCurrentUser:b}=(0,r.useContext)(l.c);return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{className:"header dashboard",children:(0,f.jsx)("div",{className:"".concat("exchange"===n?"container-fluid px-md-5":"container"),children:(0,f.jsx)("div",{className:"row",children:(0,f.jsx)("div",{className:"col-xl-12",children:(0,f.jsx)("div",{className:"navigation ".concat("exchange"===n?"px-md-3":""," justify-content-between"),children:(0,f.jsxs)(t.A,{bg:"light",expand:"lg",children:[(0,f.jsx)(u.S7,{children:(0,f.jsx)(s.N_,{className:"navbar-brand",to:"/",children:(0,f.jsx)("img",{src:a(20678),alt:""})})}),(0,f.jsx)(u.Ix,{children:(0,f.jsx)(s.N_,{className:"navbar-brand",to:"/",children:(0,f.jsx)("img",{src:a(76233),width:"50px",alt:""})})}),(0,f.jsx)(t.A.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,f.jsxs)(t.A.Collapse,{children:[(0,f.jsxs)(i.A,{className:"ms-auto",children:[(0,f.jsx)(i.A.Item,{children:(0,f.jsx)(i.A.Link,{className:"nav-Nav.link",href:"/",children:"Home"})}),(0,f.jsx)(i.A.Item,{children:(0,f.jsx)(i.A.Link,{className:"nav-Nav.link ".concat("exchange"===n?"active":""),href:"/exchange/ethereum/cax_dai",children:"Exchange"})}),g&&(0,f.jsx)(i.A.Item,{children:(0,f.jsx)(i.A.Link,{className:"nav-Nav.link ".concat("onRamp"===n?"active":""),href:"/on-ramp",children:"Buy Crypto "})}),(0,f.jsx)(i.A.Item,{children:(0,f.jsx)(i.A.Link,{className:"nav-Nav.link ".concat("farm"===n?"active":""),href:"/farm",children:"Earn/Stake "})}),(0,f.jsx)(i.A.Item,{children:(0,f.jsx)(i.A.Link,{className:"nav-Nav.link ".concat("token-info"===n?"active":""),href:"/token-info",children:"Token Info Base"})}),g&&(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(i.A.Item,{children:(0,f.jsx)(i.A.Link,{className:"nav-Nav.link ".concat("account-overview"===n?"active":""),href:"/account-overview",children:"Account"})})}),"exchange"===n&&(0,f.jsx)(i.A.Item,{children:(0,f.jsx)(i.A.Link,{className:"nav-Nav.link ".concat("blogs"===n?"active":""),href:"/blogs",children:"Blog"})}),!g&&(0,c.isEmpty)(x)?(0,f.jsx)(i.A.Item,{children:(0,f.jsx)(i.A.Link,{className:"nav-Nav.link",href:"/signin",children:"Sign in"})}):(0,f.jsx)(i.A.Item,{children:(0,f.jsx)(i.A.Link,{className:"nav-Nav.link",href:"#",onClick:e=>(e.preventDefault(),h(""),(0,d.fE)(""),b({}),p(!1),v.push("/signin"),!1),children:"Sign out"})})]}),(0,f.jsx)("div",{className:"d-flex flex-column flex-md-row my-2 my-md-0 align-items-center float-md-right",children:(0,f.jsx)("div",{className:"signin-btn",children:(0,f.jsx)(m.Yy,{})})})]})]})})})})})})})}},32090:(e,n,a)=>{a.r(n),a.d(n,{default:()=>g});var r=a(9950),t=a(82335),i=a(59313),o=a(96011),s=a.n(o),l=a(16673),c=a(84894),d=a(41920),u=a(51083),m=a(81543),f=a(24266),v=a(35887),h=a(29714),x=a(44414);const g=function(){const{id:e,token:n}=(0,l.useParams)(),{setCurrentUser:a,setAuthProcessing:o,setAuthenticated:g,currentUser:p,setAuthToken:b}=(0,r.useContext)(m.c),A=(0,l.useHistory)(),[N,j]=r.useState(""),{isLoading:y}=(0,d.useQuery)(["email-verify",e,n],(async e=>{var n;let{queryKey:r}=e;const[t,i]=r.slice(1,2);if(void 0===i){null===p||void 0===p||!p.id||null===p||void 0===p||p.id;try{var l;const e=await s().post("".concat(c.Sb,"/auth/verified-email/").concat(t),{});if((null===e||void 0===e?void 0:e.status)!==c.I7)throw new Error(null===e||void 0===e?void 0:e.data.message);o(0);const{user:n,token:r,refreshToken:i}=null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.data;a({...n,id:n._id}),b(r),(0,f.fE)(i),g(!0),A.push("/exchange/ethereum/cax_dai")}catch(k){var d,u,m,v,h,x;if(null!==k&&void 0!==k&&null!==(d=k.response)&&void 0!==d&&null!==(u=d.data)&&void 0!==u&&u.message)console.log("verify-email-Page@verified-email-error:",null===k||void 0===k||null===(m=k.response)||void 0===m||null===(v=m.data)||void 0===v?void 0:v.message),j(null===k||void 0===k||null===(h=k.response)||void 0===h||null===(x=h.data)||void 0===x?void 0:x.message);else console.error("verify-email-Page@verified-email-error:",k.message),j(k.message)}return!1}const N=await s().get("".concat(c.Sb,"/auth/verify-email/").concat(t,"/").concat(i),{});if((null===N||void 0===N?void 0:N.status)===c.I7&&(null===N||void 0===N||null===(n=N.data)||void 0===n?void 0:n.status)===c.pn){var y;const{user:e,token:n,refreshToken:r}=null===N||void 0===N||null===(y=N.data)||void 0===y?void 0:y.data;if(a({...e,id:e._id}),b(n),(0,f.fE)(r),g(!0),(null===e||void 0===e?void 0:e.status)===c.HJ.APPROVED)return A.push("/exchange/ethereum/cax_dai"),!1}return!1}),{refetchOnWindowFocus:!1,refetchInterval:c.yN,retry:!0});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i.default,{}),y&&(0,x.jsx)(u.A,{color:"info"}),(0,x.jsx)("div",{className:"verification section-padding",children:(0,x.jsx)("div",{className:"container h-100",children:(0,x.jsx)("div",{className:"row justify-content-center h-100 align-items-center",children:(0,x.jsx)("div",{className:"col-xl-5 col-md-6",children:(0,x.jsx)("div",{className:"auth-form card",children:(0,x.jsxs)("div",{className:"card-body",children:[N&&(0,x.jsx)("p",{className:"text-danger my-3 text-center",children:N}),(0,x.jsxs)("form",{action:"verify-step-4.html",className:"identity-upload",children:[(0,x.jsxs)("div",{className:"identity-content",children:[(0,x.jsx)("span",{className:"icon",children:(0,x.jsx)("i",{className:"fa fa-shield"})}),(0,x.jsx)("h4",{children:"Please verify your Email!"}),(0,x.jsx)("p",{children:"We have sent message to your mailbox."})]}),(0,x.jsx)("div",{className:"upload-loading text-center mb-3",children:(0,x.jsx)("i",{className:"fa fa-spinner fa-spin fa-3x fa-fw"})}),(0,x.jsx)("div",{className:"text-center",children:(0,x.jsx)("button",{type:"button",className:"btn btn-primary",onClick:async()=>{if((null===p||void 0===p?void 0:p.status)===c.HJ.VERIFIED||(null===p||void 0===p?void 0:p.status)===c.HJ.VERIFYING)return v.oR.error("Please login or your account is verified already."),!1;const n=h.Ik().shape({id:h.Yj().min(10).max(255).required()});let a="";if(await n.validate({id:e}).catch((e=>(a=e.message,!1))),a)return console.log(a),v.oR.error("Invalid parameter detected."),!1;const r=v.oR.loading("Resending Email...");let t=await s().post("".concat(c.Sb,"/auth/resend-email/").concat(e),{});if((null===t||void 0===t?void 0:t.status)!==c.I7)throw v.oR.dismiss(r),v.oR.error("Unfortunately Email Not Sent!"),new Error("Resending email failed.");return v.oR.dismiss(r),v.oR.success("Email Successfully Sent!"),!1},children:"Resend Email"})})]})]})})})})})}),(0,x.jsx)(t.default,{})]})}},51083:(e,n,a)=>{a.d(n,{A:()=>H});var r=a(57528),t=a(98587),i=a(58168),o=a(9950),s=a(72004),l=a(74061),c=a(88283),d=a(99269),u=a(44414);const m=o.createContext();var f=a(61676),v=a(62700),h=a(67847),x=a(80863),g=a(52659);function p(e){return(0,g.Ay)("MuiLinearProgress",e)}(0,x.A)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var b,A,N,j,y,k;const w=["className","color","value","valueBuffer","variant"];let C,E,P,S,I,R;const L=(0,c.i7)(C||(C=b||(b=(0,r.A)(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])))),B=(0,c.i7)(E||(E=A||(A=(0,r.A)(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])))),T=(0,c.i7)(P||(P=N||(N=(0,r.A)(["\n  0% {\n    opacity: 1;\n    background-position: 0 -23px;\n  }\n\n  60% {\n    opacity: 0;\n    background-position: 0 -23px;\n  }\n\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n"])))),M=(e,n)=>"inherit"===n?"currentColor":e.vars?e.vars.palette.LinearProgress["".concat(n,"Bg")]:"light"===e.palette.mode?(0,d.a)(e.palette[n].main,.62):(0,d.e$)(e.palette[n].main,.5),_=(0,v.Ay)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:a}=e;return[n.root,n["color".concat((0,f.A)(a.color))],n[a.variant]]}})((e=>{let{ownerState:n,theme:a}=e;return(0,i.A)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:M(a,n.color)},"inherit"===n.color&&"buffer"!==n.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===n.variant&&{backgroundColor:"transparent"},"query"===n.variant&&{transform:"rotate(180deg)"})})),D=(0,v.Ay)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,n)=>{const{ownerState:a}=e;return[n.dashed,n["dashedColor".concat((0,f.A)(a.color))]]}})((e=>{let{ownerState:n,theme:a}=e;const r=M(a,n.color);return(0,i.A)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===n.color&&{opacity:.3},{backgroundImage:"radial-gradient(".concat(r," 0%, ").concat(r," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,c.AH)(S||(S=j||(j=(0,r.A)(["\n    animation: "," 3s infinite linear;\n  "]))),T)),U=(0,v.Ay)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,n)=>{const{ownerState:a}=e;return[n.bar,n["barColor".concat((0,f.A)(a.color))],("indeterminate"===a.variant||"query"===a.variant)&&n.bar1Indeterminate,"determinate"===a.variant&&n.bar1Determinate,"buffer"===a.variant&&n.bar1Buffer]}})((e=>{let{ownerState:n,theme:a}=e;return(0,i.A)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===n.color?"currentColor":(a.vars||a).palette[n.color].main},"determinate"===n.variant&&{transition:"transform .".concat(4,"s linear")},"buffer"===n.variant&&{zIndex:1,transition:"transform .".concat(4,"s linear")})}),(e=>{let{ownerState:n}=e;return("indeterminate"===n.variant||"query"===n.variant)&&(0,c.AH)(I||(I=y||(y=(0,r.A)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    "]))),L)})),q=(0,v.Ay)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,n)=>{const{ownerState:a}=e;return[n.bar,n["barColor".concat((0,f.A)(a.color))],("indeterminate"===a.variant||"query"===a.variant)&&n.bar2Indeterminate,"buffer"===a.variant&&n.bar2Buffer]}})((e=>{let{ownerState:n,theme:a}=e;return(0,i.A)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==n.variant&&{backgroundColor:"inherit"===n.color?"currentColor":(a.vars||a).palette[n.color].main},"inherit"===n.color&&{opacity:.3},"buffer"===n.variant&&{backgroundColor:M(a,n.color),transition:"transform .".concat(4,"s linear")})}),(e=>{let{ownerState:n}=e;return("indeterminate"===n.variant||"query"===n.variant)&&(0,c.AH)(R||(R=k||(k=(0,r.A)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n    "]))),B)})),H=o.forwardRef((function(e,n){const a=(0,h.A)({props:e,name:"MuiLinearProgress"}),{className:r,color:c="primary",value:d,valueBuffer:v,variant:x="indeterminate"}=a,g=(0,t.A)(a,w),b=(0,i.A)({},a,{color:c,variant:x}),A=(e=>{const{classes:n,variant:a,color:r}=e,t={root:["root","color".concat((0,f.A)(r)),a],dashed:["dashed","dashedColor".concat((0,f.A)(r))],bar1:["bar","barColor".concat((0,f.A)(r)),("indeterminate"===a||"query"===a)&&"bar1Indeterminate","determinate"===a&&"bar1Determinate","buffer"===a&&"bar1Buffer"],bar2:["bar","buffer"!==a&&"barColor".concat((0,f.A)(r)),"buffer"===a&&"color".concat((0,f.A)(r)),("indeterminate"===a||"query"===a)&&"bar2Indeterminate","buffer"===a&&"bar2Buffer"]};return(0,l.A)(t,p,n)})(b),N=(()=>{const e=o.useContext(m);return null!=e&&e})(),j={},y={bar1:{},bar2:{}};if("determinate"===x||"buffer"===x)if(void 0!==d){j["aria-valuenow"]=Math.round(d),j["aria-valuemin"]=0,j["aria-valuemax"]=100;let e=d-100;N&&(e=-e),y.bar1.transform="translateX(".concat(e,"%)")}else 0;if("buffer"===x)if(void 0!==v){let e=(v||0)-100;N&&(e=-e),y.bar2.transform="translateX(".concat(e,"%)")}else 0;return(0,u.jsxs)(_,(0,i.A)({className:(0,s.A)(A.root,r),ownerState:b,role:"progressbar"},j,{ref:n},g,{children:["buffer"===x?(0,u.jsx)(D,{className:A.dashed,ownerState:b}):null,(0,u.jsx)(U,{className:A.bar1,ownerState:b,style:y.bar1}),"determinate"===x?null:(0,u.jsx)(q,{className:A.bar2,ownerState:b,style:y.bar2})]}))}))},37210:(e,n,a)=>{a.d(n,{A:()=>A});var r,t=a(58168),i=a(98587),o=a(48738),s=a.n(o),l=a(57420),c=a(9950),d=a(29310),u=a(20529),m=a(89733),f=a(27832),v=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],h={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function x(e,n){var a=n["offset"+e[0].toUpperCase()+e.slice(1)],r=h[e];return a+parseInt((0,l.A)(n,r[0]),10)+parseInt((0,l.A)(n,r[1]),10)}var g=((r={})[d.kp]="collapse",r[d.ze]="collapsing",r[d.ns]="collapsing",r[d._K]="collapse show",r),p={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:x},b=c.forwardRef((function(e,n){var a=e.onEnter,r=e.onEntering,o=e.onEntered,l=e.onExit,h=e.onExiting,p=e.className,b=e.children,A=e.dimension,N=void 0===A?"height":A,j=e.getDimensionValue,y=void 0===j?x:j,k=(0,i.A)(e,v),w="function"===typeof N?N():N,C=(0,c.useMemo)((function(){return(0,m.A)((function(e){e.style[w]="0"}),a)}),[w,a]),E=(0,c.useMemo)((function(){return(0,m.A)((function(e){var n="scroll"+w[0].toUpperCase()+w.slice(1);e.style[w]=e[n]+"px"}),r)}),[w,r]),P=(0,c.useMemo)((function(){return(0,m.A)((function(e){e.style[w]=null}),o)}),[w,o]),S=(0,c.useMemo)((function(){return(0,m.A)((function(e){e.style[w]=y(w,e)+"px",(0,f.A)(e)}),l)}),[l,y,w]),I=(0,c.useMemo)((function(){return(0,m.A)((function(e){e.style[w]=null}),h)}),[w,h]);return c.createElement(d.Ay,(0,t.A)({ref:n,addEndListener:u.A},k,{"aria-expanded":k.role?k.in:null,onEnter:C,onEntering:E,onEntered:P,onExit:S,onExiting:I}),(function(e,n){return c.cloneElement(b,(0,t.A)({},n,{className:s()(p,b.props.className,g[e],"width"===w&&"width")}))}))}));b.defaultProps=p;const A=b},32629:(e,n,a)=>{a.d(n,{A:()=>E});var r=a(58168),t=a(98587),i=a(48738),o=a.n(i),s=a(9950),l=a(27088),c=a(22397),d=a(44089),u=["bsPrefix","className","as"],m=s.forwardRef((function(e,n){var a=e.bsPrefix,i=e.className,l=e.as,c=(0,t.A)(e,u);a=(0,d.oU)(a,"navbar-brand");var m=l||(c.href?"a":"span");return s.createElement(m,(0,r.A)({},c,{ref:n,className:o()(i,a)}))}));m.displayName="NavbarBrand";const f=m;var v=a(37210),h=a(34296),x=["children","bsPrefix"],g=s.forwardRef((function(e,n){var a=e.children,i=e.bsPrefix,o=(0,t.A)(e,x);return i=(0,d.oU)(i,"navbar-collapse"),s.createElement(h.A.Consumer,null,(function(e){return s.createElement(v.A,(0,r.A)({in:!(!e||!e.expanded)},o),s.createElement("div",{ref:n,className:i},a))}))}));g.displayName="NavbarCollapse";const p=g;var b=a(37813),A=["bsPrefix","className","children","label","as","onClick"],N=s.forwardRef((function(e,n){var a=e.bsPrefix,i=e.className,l=e.children,c=e.label,u=e.as,m=void 0===u?"button":u,f=e.onClick,v=(0,t.A)(e,A);a=(0,d.oU)(a,"navbar-toggler");var x=(0,s.useContext)(h.A)||{},g=x.onToggle,p=x.expanded,N=(0,b.A)((function(e){f&&f(e),g&&g()}));return"button"===m&&(v.type="button"),s.createElement(m,(0,r.A)({},v,{ref:n,onClick:N,"aria-label":c,className:o()(i,a,!p&&"collapsed")}),l||s.createElement("span",{className:a+"-icon"}))}));N.displayName="NavbarToggle",N.defaultProps={label:"Toggle navigation"};const j=N;var y=a(74182),k=["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"],w=(0,c.A)("navbar-text",{Component:"span"}),C=s.forwardRef((function(e,n){var a=(0,l.Zw)(e,{expanded:"onToggle"}),i=a.bsPrefix,c=a.expand,u=a.variant,m=a.bg,f=a.fixed,v=a.sticky,x=a.className,g=a.children,p=a.as,b=void 0===p?"nav":p,A=a.expanded,N=a.onToggle,j=a.onSelect,w=a.collapseOnSelect,C=(0,t.A)(a,k),E=(0,d.oU)(i,"navbar"),P=(0,s.useCallback)((function(){j&&j.apply(void 0,arguments),w&&A&&N&&N(!1)}),[j,w,A,N]);void 0===C.role&&"nav"!==b&&(C.role="navigation");var S=E+"-expand";"string"===typeof c&&(S=S+"-"+c);var I=(0,s.useMemo)((function(){return{onToggle:function(){return N&&N(!A)},bsPrefix:E,expanded:!!A}}),[E,A,N]);return s.createElement(h.A.Provider,{value:I},s.createElement(y.A.Provider,{value:P},s.createElement(b,(0,r.A)({ref:n},C,{className:o()(x,E,c&&S,u&&E+"-"+u,m&&"bg-"+m,v&&"sticky-"+v,f&&"fixed-"+f)}),g)))}));C.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},C.displayName="Navbar",C.Brand=f,C.Toggle=j,C.Collapse=p,C.Text=w;const E=C},76233:(e,n,a)=>{e.exports=a.p+"static/media/logo-spin.ebe53700191a1def4f70.png"},20678:(e,n,a)=>{e.exports=a.p+"static/media/logo.3a5217131dbf810cca8a.png"}}]);