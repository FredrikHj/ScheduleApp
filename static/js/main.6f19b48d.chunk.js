(window["webpackJsonpHBGWorks-Schedule"]=window["webpackJsonpHBGWorks-Schedule"]||[]).push([[0],{18:function(e,t,a){},22:function(e,t,a){},36:function(e,t,a){e.exports=a(74)},66:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(33),o=a.n(c),r=(a(18),a(1)),s=a(9),u=a(3),m=a(76),i="",d=new m.a(i),b=new m.a(""),E=new m.a(""),g=new m.a([]),p=new m.a("");new m.a("");function _(){var e={type:JSON.parse(window.localStorage.getItem("userData")).responsType,mess:JSON.parse(window.localStorage.getItem("userData")).logInMess};return console.log(e),e}function O(){i=JSON.parse(window.localStorage.getItem("userData")).incommingUserData.loginName,d.next(i)}function h(e){console.log(e),e&&g.next(e)}var N=function(e){localStorage.setItem("userData",JSON.stringify(e))};var f=a(8),j=(a(14),a(22),function(e){return l.a.createElement(l.a.Fragment,null,e.wait," ",l.a.createElement("div",{className:"spinner spinner-dark moveUp"}))}),C=a(12),y=a.n(C),S=(a(31),[]),v=function(e){var t="";"default"===e&&(t="/SQLData"),"userSpec"===e&&(t="/SQLData/".concat(1)),console.log(t),y.a.get("http://localhost:3001"+t).then((function(t){var a=t.data[0];console.log(t),200===t.status&&"default"===e&&h(a),200===t.status&&"userSpec"===e&&h(t),201===t.status&&(S[0].push(a[0][0]),h[0](S))})).catch((function(e){}))},I=function(e,t){console.log(e);var a="",n={bodyData:t};"userValidate"===e&&(a="UserValidate"),"filter"===e&&(a="filter"),"add"===e&&(a="AddRecord"),"userReg"===e&&(a="UserReg"),y.a.post("".concat("http://localhost:3001","/SQLData/").concat(a),n).then((function(t){if(console.log(t),"userValidate"===e){var a={responsType:t.status,logInMess:t.statusText,incommingUserData:t.data};!function(e){console.log(e),e&&E.next(e),N(e)}(a),console.log(a)}})).catch((function(e){}))},k=(a(66),function(e){var t,a={},n=e.target,c=n.id;if(console.log(n),"logIn"!==c||(a={userName:x.userNameStr,userPassWord:x.userPwdStr},console.log(_().type),I("userValidate",a),200===_().type&&(t="LogIn",console.log(t),t&&p.next(t)),203!==_().type))return"logOout"===c?(N({responsType:null,logInMess:null,incommingUserData:{loginName:null}}),l.a.createElement(s.a,{to:"/"})):void 0}),w=(a(69),function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),s=Object(r.a)(o,2),u=s[0],m=s[1],i=Object(n.useState)(!0),d=Object(r.a)(i,2);d[0],d[1];console.log(a);var b=1,E=function(){new Promise((function(e,t){1===b&&(e(),b++),2===b&&setTimeout((function(){m(!0)}),5e3),console.log(b)})).then((function(e){v("default")})).catch((function(e){m(e)}))};Object(n.useEffect)((function(){E(),g.subscribe((function(e){e&&c(e),"OK"===e.statusText&&c(e.data[0])}))}),[]);return l.a.createElement("section",{id:"container__tableSchedule"},l.a.createElement("table",{id:"tableSchedule__body"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Datum"),l.a.createElement("th",{className:"tableCol4"},"Akitvitet"),l.a.createElement("th",null,"Status"),l.a.createElement("th",null,"Ber\xf6rda"),l.a.createElement("th",null,"Typ"),l.a.createElement("th",null,"Plats"),l.a.createElement("th",{className:"tableCol9"},"Inneh\xe5ll"))),l.a.createElement("tbody",{id:"tableSchedule__tBody"},0!==a.length?a.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.date),l.a.createElement("td",{className:"tableCol4"},e.activity),l.a.createElement("td",null,e.state),l.a.createElement("td",null,e.concerned),l.a.createElement("td",null,e.type),l.a.createElement("td",null,e.place),l.a.createElement("td",{className:"tableCol9"},e.content))})):l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",null,!0!==u?l.a.createElement(j,{wait:"Data laddas"}):l.a.createElement("section",null,"Data laddades inte ---\x3e Hj\xe4lp!".concat(E()))))))))}),L=(a(70),function(){return l.a.createElement("section",{className:"searchBar__searchContainer"},"Komande s\xf6kfunktion!!!")}),x=(a(71),{}),D=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),s=Object(r.a)(o,2),m=s[0],i=s[1],d=Object(n.useState)(0),g=Object(r.a)(d,2),p=g[0],_=g[1],O=Object(n.useState)(null),h=Object(r.a)(O,2),N=h[0],j=h[1],C=Object(n.useState)(null),y=Object(r.a)(C,2),S=y[0],v=y[1];Object(n.useEffect)((function(){console.log("ecsfv"),b.subscribe((function(e){console.log(e),c(e)})),E.subscribe((function(e){console.log(e),_(e.responsType),i(e.logInMess)}))}),[m]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.Helmet,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,"".concat(a," - Utloggad"))),l.a.createElement("header",null,l.a.createElement("section",{className:"headbar__headContainer"},l.a.createElement("p",{className:"headContainer__headline"},a),l.a.createElement("section",{className:"headContainer__logInOut"},l.a.createElement("section",{className:"logInOut__usernameContainer"},l.a.createElement("p",{className:"logInOut__username logInOut__inputLabelFormat"},"Anv\xe4ndarnamn"),l.a.createElement("input",{type:"text",className:"username__input",onChange:function(e){var t=e.target.value;console.log(t),j(t),x.userNameStr=t},value:N,placeholder:"..."})),l.a.createElement("section",{className:"logInOut__passwordContainer"},l.a.createElement("p",{className:"logInOut__password logInOut__inputLabelFormat"},"L\xf6senord"),l.a.createElement("input",{type:"text",className:"password__input",onChange:function(e){var t=e.target.value;console.log(t),v(t),x.userPwdStr=t},value:S,placeholder:"..."})),l.a.createElement("section",{className:"logInOut__btnOutContainer"},l.a.createElement("button",{className:"btnContainer__submitBtn",onClick:k,id:"logIn"},l.a.createElement("p",{className:"btnHeadline",id:"logIn",onClick:k},"Logga In"))),l.a.createElement("section",{className:"logInOut__userInfo"},l.a.createElement("p",{className:"logInOut__loginErrorMess"},203===p&&null===N&&null===S?m:null),l.a.createElement(u.b,{to:"/UserReg",className:"logInOut__regLink",onClick:k,id:"logIn"},l.a.createElement("p",{className:"logInOut__regLink"},"Registrera ny anv\xe4ndare")))))),l.a.createElement("main",{className:"body__contents"},l.a.createElement(L,null),l.a.createElement(w,null)))},H=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),s=Object(r.a)(o,2),m=s[0],i=s[1],E=Object(n.useState)({}),g=Object(r.a)(E,2);g[0],g[1];return Object(n.useEffect)((function(){b.subscribe((function(e){console.log(e),i(e)})),d.subscribe((function(e){c(e)})),setTimeout((function(){O()}),1e3)}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(f.Helmet,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,"".concat(m," - Inloggad"))),l.a.createElement("header",null,l.a.createElement("section",{className:"headbar__headContainer"},l.a.createElement("p",{className:"headContainer__headline"},m),l.a.createElement("section",{className:"headContainer__logInOut"},l.a.createElement("p",{className:"logInOut__logedInUser"},"V\xe4lkommen in ".concat(""===a?"...":a)),l.a.createElement("section",{className:"logInOut__btnInContainer"},l.a.createElement("div",{className:"btnContainer__btnLogOut"},l.a.createElement("input",{type:"submit",className:"btnLogOut__input",onClick:k,id:"logOout",value:""}),l.a.createElement(u.b,{to:"/",className:"btnContainer__inputHeadline",onClick:k,id:"logIn"},l.a.createElement("p",{className:"btnHeadline__logout",id:"logOout"},"Logga Ut"))),l.a.createElement("div",{className:"btnContainer__btnAdd"},l.a.createElement("input",{type:"submit",className:"btnLogOut__input",onClick:k,id:"add",value:""}),l.a.createElement(u.b,{to:"/Add",className:"btnContainer__inputHeadline",onClick:k,id:"add"},l.a.createElement("p",{className:"btnHeadline__add",id:"add"},"L\xe4gg Till"))))))),l.a.createElement("main",{className:"body__contents"},l.a.createElement(L,null),l.a.createElement(w,null)))},A=(a(72),function(e){var t=Object(n.useState)(""),a=Object(r.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(""),m=Object(r.a)(s,2),i=m[0],E=m[1],p=Object(n.useState)(""),_=Object(r.a)(p,2),h=(_[0],_[1],Object(n.useState)([])),N=Object(r.a)(h,2),C=N[0],y=N[1],S=Object(n.useState)(!1),w=Object(r.a)(S,2),L=(w[0],w[1]),x=Object(n.useState)(0),D=Object(r.a)(x,2),H=(D[0],D[1],Object(n.useState)([])),A=Object(r.a)(H,2),R=A[0],T=(A[1],Object(n.useState)("")),U=Object(r.a)(T,2),B=U[0],F=U[1],P=Object(n.useState)(""),q=Object(r.a)(P,2),V=q[0],J=q[1],W=Object(n.useState)(""),M=Object(r.a)(W,2),Q=M[0],G=M[1],K=Object(n.useState)(""),$=Object(r.a)(K,2),z=$[0],X=$[1],Y=Object(n.useState)(""),Z=Object(r.a)(Y,2),ee=Z[0],te=Z[1],ae=Object(n.useState)(""),ne=Object(r.a)(ae,2),le=ne[0],ce=ne[1],oe=Object(n.useState)(""),re=Object(r.a)(oe,2),se=re[0],ue=re[1];Object(n.useEffect)((function(){v("userSpec"),b.subscribe((function(e){console.log(e),o(e)})),d.subscribe((function(e){console.log(e),E(e)})),g.subscribe((function(e){console.log(e),200===e.status&&y(e.data[0])})),setTimeout((function(){O()}),1e3)}),[]),console.log(C);var me=function(e){var t=e.target,a=t.value,n=t.dataset;"date"===n.type&&F(a),"activity"===n.type&&J(a),"state"===n.type&&G(a),"concerned"===n.type&&X(a),"type"===n.type&&te(a),"place"===n.type&&ce(a),"content"===n.type&&ue(a)};console.log(R);var ie=function(e){L(!0),console.log(B);var t=[0,B,V,Q,z,ee,le,se];console.log(t),I("add",t)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.Helmet,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,"".concat(c," - L\xe4gg Till"))),l.a.createElement("header",null,l.a.createElement("section",{className:"headbar__headContainer"},l.a.createElement("p",{className:"headContainer__headline"},c),l.a.createElement("section",{className:"headContainer__logInOut"},l.a.createElement("p",{className:"logInOut__logedInUser"},"V\xe4lkommen in ".concat(""===i?"...":i)),l.a.createElement("section",{className:"logInOut__btnInContainer"},l.a.createElement("div",{className:"btnContainer__btnLogOut"},"                            "),l.a.createElement("div",{className:"btnContainer__btnAddCanceled"},l.a.createElement("input",{type:"submit",className:"btnLogOut__input",onClick:k,id:"cancelAdd",value:""}),l.a.createElement(u.b,{to:"/LogIn",className:"btnContainer__inputHeadline",onClick:k,id:"cancelAdd"},l.a.createElement("p",{className:"btnHeadline__canceled",id:"cancelAdd"},"Avbryt"))))))),l.a.createElement("button",{className:"btnAddedSendContainer__sendBtn",onClick:ie,id:"sendIn"},l.a.createElement("p",{className:"btnHeadline__sendIn",id:"sendIn",onClick:ie},"Skicka In")),l.a.createElement("section",{className:"formAdd__addContainer"},l.a.createElement("table",{className:"addContainer__body"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Datum"),l.a.createElement("th",{className:"tableCol4"},"Akitvitet"),l.a.createElement("th",null,"Status"),l.a.createElement("th",null,"Ber\xf6rda"),l.a.createElement("th",null,"Typ"),l.a.createElement("th",null,"Plats"),l.a.createElement("th",{className:"tableCol9"},"Inneh\xe5ll"))),l.a.createElement("tbody",{className:"addContainer__Tbody"},l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{type:"text",className:"addSqlInput","data-type":"date",onChange:me,placeholder:"  ..."})),l.a.createElement("td",{className:"tableCol4"},l.a.createElement("input",{type:"text",className:"addSqlInput","data-type":"activity",onChange:me,placeholder:"  ..."})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",className:"addSqlInput","data-type":"state",onChange:me,placeholder:"  ..."})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",className:"addSqlInput","data-type":"concerned",onChange:me,placeholder:"  ..."})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",className:"addSqlInput","data-type":"type",onChange:me,placeholder:"  ..."})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",className:"addSqlInput","data-type":"place",onChange:me,placeholder:"  ..."})),l.a.createElement("td",{className:"tableCol9"},l.a.createElement("input",{type:"text",className:"addSqlInput","data-type":"content",onChange:me,placeholder:"  ..."}))),l.a.createElement("tr",null,0!==C.length?C.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.date),l.a.createElement("td",{className:"tableCol4"},e.activity),l.a.createElement("td",null,e.state),l.a.createElement("td",null,e.concerned),l.a.createElement("td",null,e.type),l.a.createElement("td",null,e.place),l.a.createElement("td",{className:"tableCol9"},e.content))})):l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(j,{wait:"Datan laddas"}))))))))}),R=(a(73),function(e){var t=Object(n.useState)(""),a=Object(r.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(""),m=Object(r.a)(s,2),i=m[0],d=(m[1],Object(n.useState)("")),E=Object(r.a)(d,2),g=E[0],p=E[1],_=Object(n.useState)(""),O=Object(r.a)(_,2),h=O[0],N=O[1],j=Object(n.useState)(""),C=Object(r.a)(j,2),y=C[0],S=C[1];Object(n.useEffect)((function(){b.subscribe((function(e){console.log(e),o(e)}))}),[]);var v=function(e){console.log("nyh");var t=e.target,a=t.value,n=t.dataset;console.log(a),"fullName"===n.type&&p(a),"userName"===n.type&&N(a),"userPwd"===n.type&&S(a)},w=function(e){var t={fullName:g,userName:h,userPassWord:y};console.log(t),I("userReg",t)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.Helmet,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,"".concat(c," - Registrera"))),l.a.createElement("header",null,l.a.createElement("section",{className:"headbar__headContainer"},l.a.createElement("p",{className:"headContainer__headline"},c),l.a.createElement("section",{className:"headContainer__logInOut"},l.a.createElement("p",{className:"logInOut__logedInUser"},"V\xe4lkommen in ".concat(""===i?"...":i)),l.a.createElement("section",{className:"logInOut__btnInContainer"},l.a.createElement("div",{className:"btnContainer__cancelReg"},l.a.createElement("input",{type:"submit",className:"btnLogOut__cancelReg",onClick:k,id:"cancelReg",value:""}),l.a.createElement(u.b,{to:"/LogIn",className:"btnContainer__inputHeadline",onClick:k,id:"cancelReg"},l.a.createElement("p",{className:"btnHeadline__cancelReg",id:"cancelReg"},"Avbryt"))))))),l.a.createElement("section",{className:"regUser__regContainer"},l.a.createElement("form",null,l.a.createElement("div",null,l.a.createElement("label",{id:"userFullName"},"Ditt Namn"),l.a.createElement("input",{type:"text",id:"userFullName","data-type":"fullName",onChange:v,placeholder:"  ..."})),l.a.createElement("div",null,l.a.createElement("label",{id:"userName"},"Anv\xe4ndarnamn"),l.a.createElement("input",{type:"text",id:"userName","data-type":"userName",onChange:v,placeholder:"  ..."})),l.a.createElement("div",null,l.a.createElement("label",{id:"userPwd"},"L\xf6senord"),l.a.createElement("input",{type:"text",id:"userPwd","data-type":"userPwd",onChange:v,placeholder:"  ..."})),l.a.createElement("div",null,l.a.createElement("input",{type:"submit",className:"regContainer__submitBtn",value:"",onClick:w}),l.a.createElement("p",{className:"regContainer__headline",id:"regBtn",onClick:w},"Registrera")))))}),T=function(){var e=Object(n.useState)("\xc5rsklockan"),t=Object(r.a)(e,2),a=t[0],c=(t[1],Object(n.useState)(!1)),o=Object(r.a)(c,2),m=(o[0],o[1],Object(n.useState)("")),i=Object(r.a)(m,2),d=(i[0],i[1]),g=Object(n.useState)(""),_=Object(r.a)(g,2),O=_[0],h=_[1],N=Object(n.useState)(!0),f=Object(r.a)(N,1)[0];return Object(n.useEffect)((function(){if(E.subscribe((function(e){console.log(e),d(e)})),p.subscribe((function(e){console.log(e),h(e)})),function(e){e&&b.next(e)}(a),!0===f)return l.a.createElement(s.a,{to:"/"})}),[p]),l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement(s.b,{exact:!0,path:"/",component:D}),l.a.createElement(s.b,{exact:!0,path:"/LogIn",component:H}),"LogIn"===O?l.a.createElement(s.a,{to:"/LogIn"}):null,l.a.createElement(s.b,{path:"/Add",component:A}),l.a.createElement(s.b,{path:"/UserReg",component:R})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.6f19b48d.chunk.js.map