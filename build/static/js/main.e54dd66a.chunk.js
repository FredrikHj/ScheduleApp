(this["webpackJsonpHBGWorks-Schedule"]=this["webpackJsonpHBGWorks-Schedule"]||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(38),r=a.n(c),o=(a(19),a(1)),s=a(3),u=a(9),i=a(110),m="",d=new i.a(m),b=new i.a(""),p=new i.a(""),E=new i.a([]),g=new i.a("");new i.a("");function O(){if(0!==window.localStorage.length)return{type:JSON.parse(window.localStorage.getItem("userData")).responsType,mess:JSON.parse(window.localStorage.getItem("userData")).logInMess}}function _(){m=JSON.parse(window.localStorage.getItem("userData")).incommingUserData.loginName,d.next(m)}function f(e){console.log(e.length),e&&E.next(e)}var h=function(e){localStorage.setItem("userData",JSON.stringify(e))};function j(e){return console.log(e),e&&g.next(e),e}a(46),a(13);var N=a(8),S=a(15),y=a.n(S),v=(a(20),[]),C="https://hbgworks-poc-event-schedule.herokuapp.com",I=function(e){var t="";"default"===e&&(t="/SQLData"),"userSpec"===e&&(t="/SQLData/".concat("fredde")),console.log(t),y.a.get(C+t).then((function(t){var a=[];200===t.status&&"default"===e&&(a=t.data[0]),200===t.status&&"userSpec"===e&&(a=t.data),f(a),201===t.status&&(v[0].push(a[0][0]),f[0](v))})).catch((function(e){}))},k=function(e,t,a){var n="",l={bodyData:a};"userValidate"===e&&(n="UserValidate"),"filter"===e&&(n="filter"),"add"===e&&(n="AddRecord"),"userReg"===e&&(n="UserReg"),y.a.post("".concat(C,"/SQLData/").concat(n),l).then((function(a){if(console.log(a),"userValidate"===e){var n={responsType:a.status,logInMess:a.statusText,incommingUserData:a.data};console.log(n),l=n,console.log(l),l&&p.next(l),h(l),200===a.status&&j(t)}var l})).catch((function(e){}))},L=(a(72),function(){var e="",t=window.location;return console.log(t),"localhost"===t.hostname&&(e="/"),"fredrikhj.github.io"===t.hostname&&(e="/ScheduleApp/"),e});console.log(p.value);var w=function(e){var t={},a=e.target,n=a.id;(console.log(a),"LogIn"===n)&&(t={userName:T.userNameStr,userPassWord:T.userPwdStr},console.log(t),k("userValidate",t),new Promise((function(e,t){console.log("promise running :)"),console.log(O.type),200===O.type&&e()})).then((function(){200===O().type&&(console.log("klj"),j(n)),O().type})));if("LogOut"===n)return l.a.createElement(u.a,{to:L()})},x=(a(33),function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"spinner spinner-dark"}))}),H=(a(75),function(){return l.a.createElement("section",{className:"searchBar__searchContainer"},"Komande s\xf6kfunktion!!!")}),D=(a(76),function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),s=Object(o.a)(r,2),u=s[0],i=s[1],m=Object(n.useState)(!0),d=Object(o.a)(m,2),b=(d[0],d[1],1),p=function(){console.log("run"),new Promise((function(e,t){1===b&&(e(),b++),2===b&&setTimeout((function(){i(!0)}),1e3)})).then((function(e){var t=window.location.pathname;"/"===t&&I("default"),"/Login"===t&&I("userSpec")})).catch((function(e){i(e)}))};Object(n.useEffect)((function(){p(),E.subscribe((function(e){e&&c(e),"OK"===e.statusText&&c(e.data[0])}))}),[]);return l.a.createElement("main",{className:"body__contents"},l.a.createElement(H,null),l.a.createElement("section",{id:"container__tableSchedule"},l.a.createElement("table",{id:"tableSchedule__body"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Datum"),l.a.createElement("th",{className:"tableCol4"},"Akitvitet"),l.a.createElement("th",null,"Status"),l.a.createElement("th",null,"Ber\xf6rda"),l.a.createElement("th",null,"Typ"),l.a.createElement("th",null,"Plats"),l.a.createElement("th",{className:"tableCol9"},"Inneh\xe5ll"))),l.a.createElement("tbody",{id:"tableSchedule__tBody"},0!==a.length?a.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.date),l.a.createElement("td",{className:"tableCol4"},e.activity),l.a.createElement("td",null,e.state),l.a.createElement("td",null,e.concerned),l.a.createElement("td",null,e.type),l.a.createElement("td",null,e.place),l.a.createElement("td",{className:"tableCol9"},e.content))})):l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",null,!0!==u?l.a.createElement(x,{str:"Data laddas"}):l.a.createElement("section",null,"Datan laddades inte ---\x3e Hj\xe4lp!"))))))))}),A=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],r=a[1],u=Object(n.useState)(""),i=Object(o.a)(u,2),m=i[0],p=i[1],E=Object(n.useState)(""),g=Object(o.a)(E,2),O=g[0],f=g[1];Object(n.useEffect)((function(){r(L()),b.subscribe((function(e){f(e)})),d.subscribe((function(e){p(e)})),setTimeout((function(){_()}),1e3)}),[]);var S=function(e){j("LogOut");e.target.id;h({responsType:null,logInMess:null,incommingUserData:{loginName:null}})};return l.a.createElement(l.a.Fragment,null,l.a.createElement(N.Helmet,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,"".concat(O," - Inloggad"))),l.a.createElement("p",{className:"logInOut__logedInUser"},""===m?l.a.createElement(l.a.Fragment,null,"Du loggas in ...",l.a.createElement("div",{className:"logInSpinnerMove"}," ",l.a.createElement(x,null))):"V\xe4lkommen in ".concat(m)),l.a.createElement("section",{className:"logInOut__btnInContainer"},l.a.createElement("div",{className:"btnContainer__btnLogOut"},l.a.createElement("input",{type:"submit",className:"btnLogOut__input",onClick:S,id:"LogOut",value:""}),l.a.createElement(s.b,{to:c,className:"btnContainer__inputHeadline",onClick:S,id:"LogOut"},l.a.createElement("p",{className:"btnHeadline__logout",id:"LogOut"},"Logga Ut"))),l.a.createElement("div",{className:"btnContainer__btnAdd"},l.a.createElement("input",{type:"submit",className:"btnLogOut__input",onClick:F.runLogInOut,id:"add",value:""}),l.a.createElement(s.b,{to:"".concat(c,"/Add"),className:"btnContainer__inputHeadline",onClick:F.runLogInOut,id:"add"},l.a.createElement("p",{className:"btnHeadline__add",id:"add"},"L\xe4gg Till")))))},T=(a(34),{}),F=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),u=Object(o.a)(r,2),i=u[0],m=u[1],d=Object(n.useState)(""),E=Object(o.a)(d,2),g=E[0],O=E[1],_=Object(n.useState)(0),f=Object(o.a)(_,2),h=f[0],j=f[1],S=Object(n.useState)(null),y=Object(o.a)(S,2),v=y[0],C=y[1],I=Object(n.useState)(null),x=Object(o.a)(I,2),H=x[0],D=x[1];Object(n.useEffect)((function(){c(L()),b.subscribe((function(e){m(e)})),p.subscribe((function(e){j(e.responsType),O(e.logInMess)}))}),[h]);var A=function(e){var t=e.target.id;k("userValidate",t,{userName:v,userPassWord:H})};return l.a.createElement(l.a.Fragment,null,l.a.createElement(N.Helmet,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,"".concat(i," - Utloggad"))),l.a.createElement("section",{className:"logInOut__usernameContainer"},l.a.createElement("p",{className:"logInOut__username logInOut__inputLabelFormat"},"Anv\xe4ndarnamn"),l.a.createElement("input",{type:"text",className:"username__input",onChange:function(e){var t=e.target.value;C(t)},value:v,placeholder:"..."})),l.a.createElement("section",{className:"logInOut__passwordContainer"},l.a.createElement("p",{className:"logInOut__password logInOut__inputLabelFormat"},"L\xf6senord"),l.a.createElement("input",{type:"text",className:"password__input",onChange:function(e){var t=e.target.value;D(t)},value:H,placeholder:"..."})),l.a.createElement("section",{className:"logInOut__btnOutContainer"},l.a.createElement("button",{className:"btnContainer__submitBtn",onClick:A,id:"Login"},l.a.createElement("p",{className:"btnHeadline",id:"Login",onClick:A},"Logga In"))),l.a.createElement("section",{className:"logInOut__userInfo"},l.a.createElement("p",{className:"logInOut__loginErrorMess"},203===h&&null===v&&null===H?g:null),l.a.createElement(s.b,{to:"".concat(a,"UserReg"),className:"logInOut__regLink",onClick:w,id:"logIn"},l.a.createElement("p",{className:"logInOut__regLink"},"Registrera ny anv\xe4ndare"))))},R=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)("\xc5rsklockan"),s=Object(o.a)(r,1)[0],i=Object(n.useState)(""),m=Object(o.a)(i,2),d=(m[0],m[1]),b=Object(n.useState)(0),E=Object(o.a)(b,2),O=(E[0],E[1]),_=Object(n.useState)(""),f=Object(o.a)(_,2),h=f[0],j=f[1];return Object(n.useEffect)((function(){console.log("Headbar inne"),c(L()),p.subscribe((function(e){O(e.responsType),d(e.logInMess)})),g.subscribe((function(e){j(e)}))}),[g.value]),console.log(g.value),l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("section",{className:"headbar__headContainer"},l.a.createElement("p",{className:"headContainer__headline"},s),l.a.createElement("section",{className:"headContainer__userLogInOut"},l.a.createElement(u.b,{exact:!0,path:"".concat(a),component:F}),l.a.createElement(u.b,{exact:!0,path:"".concat(a,"Login"),component:A}),"LogIn"===h?l.a.createElement(u.a,{to:"".concat(a,"LogIn")}):null),l.a.createElement("i",{class:"material-icons askMarkMove"},"contact_support"))))},B=(a(77),function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],r=a[1],u=Object(n.useState)(""),i=Object(o.a)(u,2),m=i[0],p=i[1],g=Object(n.useState)(""),O=Object(o.a)(g,2),f=O[0],h=O[1],j=Object(n.useState)(""),S=Object(o.a)(j,2),y=(S[0],S[1],Object(n.useState)([])),v=Object(o.a)(y,2),C=v[0],w=v[1],H=Object(n.useState)(!1),D=Object(o.a)(H,2),A=(D[0],D[1]),T=Object(n.useState)(0),F=Object(o.a)(T,2),R=(F[0],F[1],Object(n.useState)([])),B=Object(o.a)(R,2),P=(B[0],B[1],Object(n.useState)("")),U=Object(o.a)(P,2),M=U[0],q=U[1],V=Object(n.useState)(""),W=Object(o.a)(V,2),J=W[0],Q=W[1],G=Object(n.useState)(""),K=Object(o.a)(G,2),$=K[0],z=K[1],X=Object(n.useState)(""),Y=Object(o.a)(X,2),Z=Y[0],ee=Y[1],te=Object(n.useState)(""),ae=Object(o.a)(te,2),ne=ae[0],le=ae[1],ce=Object(n.useState)(""),re=Object(o.a)(ce,2),oe=re[0],se=re[1],ue=Object(n.useState)(""),ie=Object(o.a)(ue,2),me=ie[0],de=ie[1];Object(n.useEffect)((function(){r(L()),I("userSpec"),b.subscribe((function(e){p(e)})),d.subscribe((function(e){h(e)})),E.subscribe((function(e){200===e.status&&w(e.data[0])})),setTimeout((function(){_()}),1e3)}),[]);var be=function(e){var t=e.target,a=t.value,n=t.dataset;"date"===n.type&&q(a),"activity"===n.type&&Q(a),"state"===n.type&&z(a),"concerned"===n.type&&ee(a),"type"===n.type&&le(a),"place"===n.type&&se(a),"content"===n.type&&de(a)},pe=function(e){A(!0),k("add",[0,M,J,$,Z,ne,oe,me])};return l.a.createElement(l.a.Fragment,null,l.a.createElement(N.Helmet,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,"".concat(m," - L\xe4gg Till"))),l.a.createElement("header",null,l.a.createElement("section",{className:"headbar__headContainer"},l.a.createElement("p",{className:"headContainer__headline"},m),l.a.createElement("section",{className:"headContainer__logInOut"},l.a.createElement("p",{className:"logInOut__logedInUser"},"V\xe4lkommen in ".concat(""===f?"...":f)),l.a.createElement("section",{className:"logInOut__btnInContainer"},l.a.createElement("div",{className:"btnContainer__btnAddCanceled"},l.a.createElement("input",{type:"submit",className:"btnLogOut__input",onClick:"",id:"cancelAdd",value:""}),l.a.createElement(s.b,{to:"".concat(c,"/LogIn"),className:"btnContainer__inputHeadline",onClick:"",id:"cancelAdd"},l.a.createElement("p",{className:"btnHeadline__canceled",id:"cancelAdd"},"Avbryt"))))))),l.a.createElement("button",{className:"btnAddedSendContainer__sendBtn",onClick:pe,id:"sendIn"},l.a.createElement("p",{className:"btnHeadline__sendIn",id:"sendIn",onClick:pe},"Skicka In")),l.a.createElement("section",{className:"formAdd__addContainer"},l.a.createElement("table",{className:"addContainer__body"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Datum"),l.a.createElement("th",{className:"tableCol4"},"Akitvitet"),l.a.createElement("th",null,"Status"),l.a.createElement("th",null,"Ber\xf6rda"),l.a.createElement("th",null,"Typ"),l.a.createElement("th",null,"Plats"),l.a.createElement("th",{className:"tableCol9"},"Inneh\xe5ll"))),l.a.createElement("tbody",{className:"addContainer__Tbody"},l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("input",{type:"text",className:"addSqlInput","data-type":"date",onChange:be,placeholder:"  ..."})),l.a.createElement("td",{className:"tableCol4"},l.a.createElement("input",{type:"text",className:"addSqlInput","data-type":"activity",onChange:be,placeholder:"  ..."})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",className:"addSqlInput","data-type":"state",onChange:be,placeholder:"  ..."})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",className:"addSqlInput","data-type":"concerned",onChange:be,placeholder:"  ..."})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",className:"addSqlInput","data-type":"type",onChange:be,placeholder:"  ..."})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",className:"addSqlInput","data-type":"place",onChange:be,placeholder:"  ..."})),l.a.createElement("td",{className:"tableCol9"},l.a.createElement("input",{type:"text",className:"addSqlInput","data-type":"content",onChange:be,placeholder:"  ..."}))),l.a.createElement("tr",null,0!==C.length?C.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.date),l.a.createElement("td",{className:"tableCol4"},e.activity),l.a.createElement("td",null,e.state),l.a.createElement("td",null,e.concerned),l.a.createElement("td",null,e.type),l.a.createElement("td",null,e.place),l.a.createElement("td",{className:"tableCol9"},e.content))})):l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(x,{wait:"Datan laddas"}))))))))}),P=(a(78),function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],r=a[1],u=Object(n.useState)(""),i=Object(o.a)(u,2),m=i[0],d=i[1],p=Object(n.useState)(""),E=Object(o.a)(p,2),g=(E[0],E[1],Object(n.useState)("")),O=Object(o.a)(g,2),_=O[0],f=O[1],h=Object(n.useState)(""),j=Object(o.a)(h,2),S=j[0],y=j[1],v=Object(n.useState)(""),C=Object(o.a)(v,2),I=C[0],w=C[1];Object(n.useEffect)((function(){r(L()),b.subscribe((function(e){d(e)}))}),[]);var x=function(e){var t=e.target,a=t.value,n=t.dataset;"fullName"===n.type&&f(a),"userName"===n.type&&y(a),"userPwd"===n.type&&w(a)},H=function(e){e.target.id;k("userReg","targetBtnId",{fullName:_,userName:S,userPassWord:I})};return l.a.createElement(l.a.Fragment,null,l.a.createElement(N.Helmet,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,"".concat(m," - Registrera"))),l.a.createElement("section",{className:"logInOut__btnRegContainer"},l.a.createElement("div",{className:"btnContainer__cancelReg"},l.a.createElement("input",{type:"submit",className:"btnLogOut__cancelReg",value:""}),l.a.createElement(s.b,{to:c,className:"btnContainer__inputHeadline"},l.a.createElement("p",{className:"btnHeadline__cancelReg"},"Avbryt")))),l.a.createElement("section",{className:"regUser__regContainer"},l.a.createElement("form",null,l.a.createElement("div",null,l.a.createElement("label",{id:"userFullName"},"Ditt Namn"),l.a.createElement("input",{type:"text",id:"userFullName","data-type":"fullName",onChange:x,placeholder:"  ..."})),l.a.createElement("div",null,l.a.createElement("label",{id:"userName"},"Anv\xe4ndarnamn"),l.a.createElement("input",{type:"text",id:"userName","data-type":"userName",onChange:x,placeholder:"  ..."})),l.a.createElement("div",null,l.a.createElement("label",{id:"userPwd"},"L\xf6senord"),l.a.createElement("input",{type:"text",id:"userPwd","data-type":"userPwd",onChange:x,placeholder:"  ..."})),l.a.createElement("div",null,l.a.createElement("input",{type:"submit",className:"regContainer__submitBtn",value:"",onClick:H,id:"LogIn"}),l.a.createElement(s.b,{to:c,className:"btnContainer__inputHeadline"},l.a.createElement("p",{className:"regContainer__headline",onClick:H,id:"LogIn"},"Registrera"))))))});a(79);!function(e){e&&b.next(e)}("\xc5rsklockan");var U=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),i=Object(o.a)(r,2),m=i[0],d=i[1];return Object(n.useEffect)((function(){g.subscribe((function(e){d(e)})),c(L())}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,null,l.a.createElement(R,null),l.a.createElement(u.b,{exact:!0,path:a,component:D}),"Login"===m&&l.a.createElement(u.a,{to:"/Login"}),l.a.createElement(u.b,{exact:!0,path:"".concat(a,"Login"),component:D}),l.a.createElement(u.b,{exact:!0,path:"".concat(a,"Add"),component:B}),l.a.createElement(u.b,{path:"".concat(a,"UserReg"),component:P})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},19:function(e,t,a){},33:function(e,t,a){},41:function(e,t,a){e.exports=a(108)},46:function(e,t,a){},72:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){}},[[41,1,2]]]);
//# sourceMappingURL=main.e54dd66a.chunk.js.map