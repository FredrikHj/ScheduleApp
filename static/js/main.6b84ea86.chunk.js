(this["webpackJsonpHBGWorks-Schedule"]=this["webpackJsonpHBGWorks-Schedule"]||[]).push([[0],{111:function(e,t,n){},121:function(e,t,n){},128:function(e,t,n){e.exports=n(262)},133:function(e,t,n){},138:function(e,t){},140:function(e,t){},177:function(e,t){},178:function(e,t){},256:function(e,t,n){},257:function(e,t,n){},260:function(e,t,n){},261:function(e,t,n){},262:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(122),l=n.n(c),o=(n(133),n(1)),i="/",u="UserReg",s="Auth",m="Login",p=n(9),d=n(22),b=n(263),g=n(134);function f(e){return console.log("getLocalStorageData -> window.localStorage.length",window.localStorage),e=JSON.parse(window.localStorage.getItem("loginData")).token,console.log("getLocalStorageData -> getData",e),e}var E=new b.a(""),h=new b.a(""),x=new b.a(""),O=new b.a([]),j=new b.a("");new b.a("");var v=function(e){localStorage.setItem("loginData",JSON.stringify(e))};function S(){S&&E.next(function(e,t){console.log("getTokenData -> token",e);var n=g.verify(e,"inlogSecretKey",(function(e,t){return t}));if("fullName"===t)return n.loginName}(f("token"),"fullName"))}function y(e){e&&O.next(e)}function w(e){return console.log("updateGotoPage -> gotoPage",e),e&&j.next(e),e}var C=function(){var e="",t=window.location.hostname,n=window.location.hash.split("")[1];return console.log("localPubAppUrls -> appUrlDomain",t),console.log("localPubAppUrl -> appUrlHostname",n),"localhost"!==t&&"fredrikhj.github.io"!==t||(e="/"),e},N=(n(111),function(e){return r.a.createElement(r.a.Fragment,null,e.str," ",r.a.createElement("span",{className:"spinner spinner-dark"}))}),_=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("tbody",{id:"tableSchedule__tBody"},0!==e.incommingNewSQLData.length?e.incommingNewSQLData.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.date),r.a.createElement("td",{className:"tableCol4"},e.activity),r.a.createElement("td",null,e.state),r.a.createElement("td",null,e.concerned),r.a.createElement("td",null,e.type),r.a.createElement("td",null,e.place),r.a.createElement("td",{className:"tableCol9"},e.content))})):r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(N,{str:"Tabellen laddas"}))))))},k=n(5),A=n(4);function I(){var e=Object(k.a)(["\n    width: 221px;\n    height: 50px;\n    margin-left: 32px;\n    margin-top: 46px;\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 24px;\n    line-height: 80px;\n    color: #AE0B05;\n  "]);return I=function(){return e},e}function F(){var e=Object(k.a)(["\n    width: 1400px;\n    height: 103px;\n    margin-left: calc(50% - 700px);\n    background: #FFFFFF;\n  "]);return F=function(){return e},e}function L(){var e=Object(k.a)(["\n    width: 100%;\n    background-color: white;\n    margin: -39px 0px 0px -5px;\n    "]);return L=function(){return e},e}function U(){var e=Object(k.a)(["\n    float: right;\n    margin-top: -7px;\n  "]);return U=function(){return e},e}function R(){var e=Object(k.a)(["\n    width: 1024px;\n    margin-left: calc(50% - 512px);\n  "]);return R=function(){return e},e}var P={body__contents:A.a.section(R()),askMarkMove:A.a.section(U())},T={header:A.a.section(L()),headContainer:A.a.section(F()),headline:A.a.section(I())};function D(){var e=Object(k.a)(["\n        display: inline-block;\n        position: relative;\n        text-align: center;\n        text-decoration: none;\n        font-family: Roboto;\n        font-style: normal;\n        font-weight: normal;\n        font-size: 16px;\n        color: white;\n    "]);return D=function(){return e},e}function B(){var e=Object(k.a)(["\n        width: 141px;\n        height: 39px;\n        background: #AE0B05;\n        border-radius: 4px;\n    "]);return B=function(){return e},e}var H={btn:A.a.button(B())},M={btnHeadline:A.a.p(D())};function z(){var e=Object(k.a)(["\n    margin-top: -10px;\n  "]);return z=function(){return e},e}function Q(){var e=Object(k.a)(["\n    border: 1px solid red;\n    width: 400px;\n    display: flex;\n    flex-direction: row;\n    margin-left: 51px;\n    "]);return Q=function(){return e},e}function q(){var e=Object(k.a)(["\n    width: 400px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    margin-left: 820px;\n    margin-top: -8px;\n  "]);return q=function(){return e},e}var G={statusContainer:A.a.section(q()),logedInUser:A.a.section(Q()),btnSubmitLogoutInTopUp:A.a.section(z())},W=n(19),J=function(e){var t=e.style,n=e.name,a=e.onClick,c=e.id;return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.btn,{id:c,onClick:a,style:t.btn},r.a.createElement(M.btnHeadline,{id:c,onClick:a,style:t.text},n)))},K=n(35),V=n.n(K),$=(n(50),n(20),[]),X="https://hbgworks-poc-event-schedule.herokuapp.com",Y=function(e,t){console.log("axiosGet -> getType",e);var n="";"default"===e&&(n="/SQLData"),"userSpec"===e&&(n="/SQLData/".concat("fredde")),V.a.get(X+n,{headers:{Authorization:"bearer ".concat(t)}}).then((function(t){console.log("axiosGet -> response",t);var n=[];200===t.status&&"default"===e&&(n=t.data[0]),200===t.status&&"userSpec"===e&&(n=t.data[0]),y(n),201===t.status&&($[0].push(n[0][0]),y[0]($))})).catch((function(e){}))},Z=function(e,t){console.log("axiosPost -> bodyData",t);var n="",a={bodyData:t};"Auth"===e&&(n="Auth"),"filter"===e&&(n="filter"),"add"===e&&(n="AddRecord"),"userReg"===e&&(n="UserReg"),V.a.post("".concat(X,"/SQLData/").concat(n),a).then((function(t){if(console.log("axiosPost -> response",t),"Auth"===e){var n={responsType:t.status,logInMess:t.statusText,token:t.data};v(a=n),a&&x.next(a),200===t.status&&w(e)}var a})).catch((function(e){}))},ee=(n(256),function(){return r.a.createElement("section",{className:"searchBar__searchContainer"},"Komande s\xf6kfunktion!!!")}),te=(n(121),function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Datum"),r.a.createElement("th",{className:"tableCol4"},"Akitvitet"),r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"Ber\xf6rda"),r.a.createElement("th",null,"Typ"),r.a.createElement("th",null,"Plats"),r.a.createElement("th",{className:"tableCol9"},"Inneh\xe5ll")))}),ne=(n(257),function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],l=n[1],i=Object(a.useState)(""),u=Object(o.a)(i,2),s=u[0],m=u[1],d=Object(a.useState)(""),b=Object(o.a)(d,2),g=b[0],f=b[1],x=Object(a.useState)(""),j=Object(o.a)(x,2),v=(j[0],j[1],Object(a.useState)([])),y=Object(o.a)(v,2),w=y[0],k=y[1],A=Object(a.useState)(!1),I=Object(o.a)(A,2),F=(I[0],I[1]),L=Object(a.useState)(0),U=Object(o.a)(L,2),R=(U[0],U[1],Object(a.useState)([])),P=Object(o.a)(R,2),T=(P[0],P[1],Object(a.useState)("")),D=Object(o.a)(T,2),B=D[0],H=D[1],M=Object(a.useState)(""),z=Object(o.a)(M,2),Q=z[0],q=z[1],G=Object(a.useState)(""),J=Object(o.a)(G,2),K=J[0],V=J[1],$=Object(a.useState)(""),X=Object(o.a)($,2),ee=X[0],te=X[1],ne=Object(a.useState)(""),ae=Object(o.a)(ne,2),re=ae[0],ce=ae[1],le=Object(a.useState)(""),oe=Object(o.a)(le,2),ie=oe[0],ue=oe[1],se=Object(a.useState)(""),me=Object(o.a)(se,2),pe=me[0],de=me[1];Object(a.useEffect)((function(){l(C()),Y("userSpec"),h.subscribe((function(e){m(e)})),E.subscribe((function(e){f(e)})),O.subscribe((function(e){200===e.status&&k(e.data[0])})),setTimeout((function(){S()}),1e3)}),[]);var be=function(e){var t=e.target,n=t.value,a=t.dataset;"date"===a.type&&H(n),"activity"===a.type&&q(n),"state"===a.type&&V(n),"concerned"===a.type&&te(n),"type"===a.type&&ce(n),"place"===a.type&&ue(n),"content"===a.type&&de(n)},ge=function(e){F(!0),Z("add",[0,B,Q,K,ee,re,ie,pe])};return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"".concat(s," - L\xe4gg Till"))),r.a.createElement("header",null,r.a.createElement("section",{className:"headbar__headContainer"},r.a.createElement("p",{className:"headContainer__headline"},s),r.a.createElement("section",{className:"headContainer__logInOut"},r.a.createElement("p",{className:"logInOut__logedInUser"},"V\xe4lkommen in ".concat(""===g?"...":g)),r.a.createElement("section",{className:"logInOut__btnInContainer"},r.a.createElement("div",{className:"btnContainer__btnAddCanceled"},r.a.createElement("input",{type:"submit",className:"btnLogOut__input",onClick:"",id:"cancelAdd",value:""}),r.a.createElement(p.b,{to:"".concat(c,"/LogIn"),className:"btnContainer__inputHeadline",onClick:"",id:"cancelAdd"},r.a.createElement("p",{className:"btnHeadline__canceled",id:"cancelAdd"},"Avbryt"))))))),r.a.createElement("button",{className:"btnAddedSendContainer__sendBtn",onClick:ge,id:"sendIn"},r.a.createElement("p",{className:"btnHeadline__sendIn",id:"sendIn",onClick:ge},"Skicka In")),r.a.createElement("section",{className:"formAdd__addContainer"},r.a.createElement("table",{className:"addContainer__body"},r.a.createElement(_,null),r.a.createElement("tbody",{className:"addContainer__Tbody"},r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("input",{type:"text",className:"addSqlInput","data-type":"date",onChange:be,placeholder:"  ..."})),r.a.createElement("td",{className:"tableCol4"},r.a.createElement("input",{type:"text",className:"addSqlInput","data-type":"activity",onChange:be,placeholder:"  ..."})),r.a.createElement("td",null,r.a.createElement("input",{type:"text",className:"addSqlInput","data-type":"state",onChange:be,placeholder:"  ..."})),r.a.createElement("td",null,r.a.createElement("input",{type:"text",className:"addSqlInput","data-type":"concerned",onChange:be,placeholder:"  ..."})),r.a.createElement("td",null,r.a.createElement("input",{type:"text",className:"addSqlInput","data-type":"type",onChange:be,placeholder:"  ..."})),r.a.createElement("td",null,r.a.createElement("input",{type:"text",className:"addSqlInput","data-type":"place",onChange:be,placeholder:"  ..."})),r.a.createElement("td",{className:"tableCol9"},r.a.createElement("input",{type:"text",className:"addSqlInput","data-type":"content",onChange:be,placeholder:"  ..."}))),r.a.createElement("tr",null,0!==w.length?w.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.date),r.a.createElement("td",{className:"tableCol4"},e.activity),r.a.createElement("td",null,e.state),r.a.createElement("td",null,e.concerned),r.a.createElement("td",null,e.type),r.a.createElement("td",null,e.place),r.a.createElement("td",{className:"tableCol9"},e.content))})):r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(N,{wait:"Datan laddas"}))))))))}),ae=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),c=n[0],l=n[1],i=Object(a.useState)(!1),u=Object(o.a)(i,2),s=(u[0],u[1]),m=Object(a.useState)(""),p=Object(o.a)(m,2),d=p[0],b=p[1],g=(e.tableHead,e.tableBody,Object(a.useState)(!0)),E=Object(o.a)(g,2),h=(E[0],E[1],1),x=e.addRecordsBtn;console.log(x),Object(a.useEffect)((function(){b(function(){var e=window.location.pathname;return console.log("runAppUrls -> appUrl",e),e}()),j(),O.subscribe((function(e){e&&l(e),"OK"===e.statusText&&l(e.data[0])}))}),[d]);var j=function(){var e=new Promise((function(e,t){1===h&&(e(),h++),2===h&&setTimeout((function(){s(!0)}),1e3)}));console.log("getSQLData -> routes",d),e.then((function(e){"/"!==d&&"/ScheduleApp/"!==d||Y("default",""),"/Login"!==d&&"/ScheduleApp/Login"!==d||Y("userSpec",f("token"))})).catch((function(e){s(e)}))};return console.log("HeadContents -> incommingNewSQLData",c),r.a.createElement(P.body__contents,null,r.a.createElement(ee,null),r.a.createElement("section",{id:"container__tableSchedule"},r.a.createElement("table",{id:"tableSchedule__body"},r.a.createElement(te,null),!0!==e.addRecords?r.a.createElement(_,{incommingNewSQLData:c}):r.a.createElement(ne,null))))};function re(){var e=Object(k.a)(["\n    margin-left: 3px;\n  "]);return re=function(){return e},e}function ce(){var e=Object(k.a)(["\n    width: 400px;\n    display: flex; nd;\n    margin-left: 820px;\n    margin-top: -8px;\n  "]);return ce=function(){return e},e}var le={statusContainer:A.a.section(ce()),logInSpinnerMove:A.a.section(re())},oe=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){h.subscribe((function(e){c(e)}))}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"".concat(n," - Utloggad"))),r.a.createElement(ie,{appStatus:r.a.createElement(le.statusContainer,null,"Du loggas in ...",r.a.createElement(N,null),void setTimeout((function(){w("Login")}),500))}),r.a.createElement(ae,null))},ie=(n(259),function(e){var t=e.appStatus,n=Object(a.useState)(""),c=Object(o.a)(n,2),l=c[0],i=c[1],u=Object(a.useState)("\xc5rsklockan"),s=Object(o.a)(u,1)[0],m=Object(a.useState)(""),p=Object(o.a)(m,2),d=(p[0],p[1]),b=Object(a.useState)(0),g=Object(o.a)(b,2),f=(g[0],g[1]),E=Object(a.useState)(""),h=Object(o.a)(E,2),O=h[0],v=h[1];return Object(a.useEffect)((function(){i(C()),x.subscribe((function(e){f(e.responsType),d(e.logInMess)})),j.subscribe((function(e){v(e)}))}),[l,O]),r.a.createElement(r.a.Fragment,null,r.a.createElement(T.header,null,r.a.createElement(T.headContainer,null,r.a.createElement(T.headline,null,s),t)))}),ue={btn:{marginRight:"108px",marginTop:"20px",marginLeft:"0"},text:{width:"133px",height:"32px",left:"-6px",top:"-9px"}},se={btn:{marginLeft:"1269px",marginTop:"-25px"},text:{width:"133px",height:"32px",left:"0px",top:"-10px"}},me={btn:{marginLeft:"1060px",marginTop:"73px"},text:{marginLeft:"0",marginTop:"5px"}};function pe(){var e=Object(k.a)(["\n    margin-right: -50px;\n    margin-top: 10px;\n    width: 200px;\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 20px;\n    text-align: center;\n    color: black;\n    font-size: 12px;\n  "]);return pe=function(){return e},e}function de(){var e=Object(k.a)(["\n    margin-top: 14px;\n    margin-left: 18px;\n    width: 149px;\n    font-size: 13.5px;\n    color: #AE0B05;\n    font-weight: bold;\n  "]);return de=function(){return e},e}function be(){var e=Object(k.a)(["\n    width: 377px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  "]);return be=function(){return e},e}function ge(){var e=Object(k.a)(["\n    width: 181px;\n    height: 80%;\n    margin-left: 499px;\n    margin-top: -55px;\n  "]);return ge=function(){return e},e}function fe(){var e=Object(k.a)(["\n    width: 228px;\n    height: 29px;\n    margin-left: 0px;\n    margin-top: 0px;\n    background: #F5F5F5;\n    border: 1px solid #E5E5E5;\n    box-sizing: border-box;\n    border-radius: 4px;\n  "]);return fe=function(){return e},e}function Ee(){var e=Object(k.a)(["\n    width: 221px;\n    height: 50px;\n    margin-left: 10px;\n    margin-bottom: -25px;\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 19px;\n    color: #000000;\n    "]);return Ee=function(){return e},e}function he(){var e=Object(k.a)(["\n    margin-left: 256px;\n    margin-top: -69px;\n    margin-bottom: -25px;\n    "]);return he=function(){return e},e}function xe(){var e=Object(k.a)(["\n    margin-left: 10px;\n    margin-top: 30px;\n    margin-bottom: -25px;\n  "]);return xe=function(){return e},e}function Oe(){var e=Object(k.a)(["\n    width: 706px;\n    height: 75px;\n    margin-left: 770px;\n    margin-top: -67px;\n"]);return Oe=function(){return e},e}function je(){var e=Object(k.a)(["\n    width: 706px;\n    height: 75px;\n    margin-left: 770px;\n    margin-top: -53px;\n  "]);return je=function(){return e},e}function ve(){var e=Object(k.a)(["\n    width: 221px;\n    height: 50px;\n    margin-left: 32px;\n    margin-top: 46px;\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 24px;\n    line-height: 80px;\n    color: #AE0B05;\n  "]);return ve=function(){return e},e}function Se(){var e=Object(k.a)(["\n    width: 1400px;\n    height: 103px;\n    margin-left: calc(50% - 700px);\n    background: #FFFFFF;\n  "]);return Se=function(){return e},e}function ye(){var e=Object(k.a)(["\n    width: 100%;\n    background-color: white;\n    margin: -39px 0px 0px -5px;\n    "]);return ye=function(){return e},e}A.a.section(ye()),A.a.section(Se()),A.a.section(ve()),A.a.section(je());var we={statusContainer:A.a.section(Oe()),usernameContainer:A.a.section(xe()),passwordContainer:A.a.section(he()),labelFormatUsernamePassword:A.a.p(Ee()),inputFormatUsernamePassword:A.a.input(fe()),btnLoginContainer:A.a.section(ge()),userInfoContainer:A.a.section(be()),userErrorMess:A.a.p(de()),regLink:A.a.section(pe())},Ce=function(e){var t=e.appUrl,n=e.onChangeUserName,a=e.onChangeUserPwd,c=e.userNameStr,l=e.userPwdStr,o=e.runAuth,i=e.runReg,s=e.inlogStatus,m=e.inlogMess;return r.a.createElement(we.statusContainer,null,r.a.createElement(we.usernameContainer,null,r.a.createElement(we.labelFormatUsernamePassword,null,"Anv\xe4ndarnamn"),r.a.createElement(we.inputFormatUsernamePassword,{type:"text",onChange:n,value:c,placeholder:"..."})),r.a.createElement(we.passwordContainer,null,r.a.createElement(we.labelFormatUsernamePassword,null,"L\xf6senord"),r.a.createElement(we.inputFormatUsernamePassword,{type:"text",onChange:a,value:l,placeholder:"..."})),r.a.createElement(we.btnLoginContainer,null,r.a.createElement(J,{style:ue,name:"Logga In",onClick:o,id:"Auth"})),r.a.createElement(we.userInfoContainer,null,r.a.createElement(we.userErrorMess,null,203===s&&null===c&&null===l?m:null),r.a.createElement(we.regLink,null,r.a.createElement(p.b,{to:t+u,onClick:i,id:"reg"},"Registrera ny anv\xe4ndare"))))};n(260);console.log(x.value);n(261);var Ne=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],l=n[1],i=Object(a.useState)(""),u=Object(o.a)(i,2),s=u[0],m=u[1],d=Object(a.useState)(""),b=Object(o.a)(d,2),g=(b[0],b[1],Object(a.useState)("")),f=Object(o.a)(g,2),E=(f[0],f[1]),x=Object(a.useState)(""),O=Object(o.a)(x,2),j=(O[0],O[1]),v=Object(a.useState)(""),S=Object(o.a)(v,2),y=(S[0],S[1]);Object(a.useEffect)((function(){l(C()),h.subscribe((function(e){m(e)}))}),[]);var w=function(e){var t=e.target,n=t.value,a=t.dataset;"fullName"===a.type&&E(n),"userName"===a.type&&j(n),"userPwd"===a.type&&y(n)},N=function(e){e.target.id;Z("userReg","targetBtnId")};return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"".concat(s," - Registrera"))),r.a.createElement("section",{className:"logInOut__btnRegContainer"},r.a.createElement("div",{className:"btnContainer__cancelReg"},r.a.createElement("input",{type:"submit",className:"btnLogOut__cancelReg",value:""}),r.a.createElement(p.b,{to:c,className:"btnContainer__inputHeadline"},r.a.createElement("p",{className:"btnHeadline__cancelReg"},"Avbryt")))),r.a.createElement("section",{className:"regUser__regContainer"},r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement("label",{id:"userFullName"},"Ditt Namn"),r.a.createElement("input",{type:"text",id:"userFullName","data-type":"fullName",onChange:w,placeholder:"  ..."})),r.a.createElement("div",null,r.a.createElement("label",{id:"userName"},"Anv\xe4ndarnamn"),r.a.createElement("input",{type:"text",id:"userName","data-type":"userName",onChange:w,placeholder:"  ..."})),r.a.createElement("div",null,r.a.createElement("label",{id:"userPwd"},"L\xf6senord"),r.a.createElement("input",{type:"text",id:"userPwd","data-type":"userPwd",onChange:w,placeholder:"  ..."})),r.a.createElement("div",null,r.a.createElement("input",{type:"submit",className:"regContainer__submitBtn",value:"",onClick:N,id:"login"}),r.a.createElement(p.b,{to:c,className:"btnContainer__inputHeadline"},r.a.createElement("p",{className:"regContainer__headline",onClick:N,id:"Login"},"Registrera"))))))},_e=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),i=Object(o.a)(l,2),s=i[0],m=i[1],p=Object(a.useState)(""),b=Object(o.a)(p,2),g=b[0],f=b[1],E=Object(a.useState)(0),O=Object(o.a)(E,2),j=O[0],v=O[1],S=Object(a.useState)(""),y=Object(o.a)(S,2),N=y[0],_=y[1],k=Object(a.useState)(""),A=Object(o.a)(k,2),I=A[0],F=A[1],L=Object(a.useState)("Auth"),U=Object(o.a)(L,2),R=U[0];U[1];Object(a.useEffect)((function(){return c(C()),h.subscribe((function(e){m(e)})),x.subscribe((function(e){v(e.responsType),f(e.logInMess)})),"/"===R?r.a.createElement(d.a,{to:"/"}):"RegUser"===R?r.a.createElement(d.a,{to:"/Auth"}):void 0}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"".concat(s," - Utloggad"))),r.a.createElement(ie,{appStatus:r.a.createElement(Ce,{appUrl:n,onChangeUserName:function(e){var t=e.target.value;_(t)},userNameStr:N,onChangeUserPwd:function(e){var t=e.target.value;F(t)},userPwdStr:I,runAuth:function(e){var t=e.target.id;console.log("runAuth -> targetBtnId",t),Z(t,{userName:N,userPassWord:I}),w(t)},runReg:function(){},inlogStatus:j,inlogMess:g})}),r.a.createElement(d.b,{exact:!0,path:n,component:ae}),r.a.createElement(d.b,{exact:!0,path:n+u,component:Ne}))},ke=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=(n[0],n[1]),l=Object(a.useState)(""),i=Object(o.a)(l,2),u=i[0],s=i[1],m=Object(a.useState)(""),p=Object(o.a)(m,2),d=p[0],b=p[1],g=Object(a.useState)(!1),f=Object(o.a)(g,2),x=f[0],O=f[1];Object(a.useEffect)((function(){setTimeout((function(){S()}),1e3),c(C()),h.subscribe((function(e){b(e)})),E.subscribe((function(e){s(e)}))}),[]);var j=function(e){e.target.id;O(!0)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"".concat(d," - Inloggad"))),r.a.createElement(ie,{appStatus:r.a.createElement(r.a.Fragment,null,r.a.createElement(G.statusContainer,null,""===u?r.a.createElement(r.a.Fragment,null,"V\xe4lkommen in ... ",r.a.createElement(N,null)):"V\xe4lkommen in ".concat(u)),r.a.createElement(G.btnSubmitLogoutInTopUp,null,r.a.createElement(J,{style:se,name:"Logga Ut",onClick:function(e){var t=e.target.id;console.log("runLogOut -> targetBtnId",t),w(t),v(window.localStorage.clear())},id:"/"})),!0!==x?r.a.createElement(J,{style:me,name:"L\xe4gga Till",onClick:j,id:"AddRecords"}):r.a.createElement(J,{style:me,name:"\xc5terg\xe5",onClick:j,id:"Return"}))}),r.a.createElement(ae,{addRecords:x}))};!function(e){e&&h.next(e)}("\xc5rsklockan");var Ae=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),u=Object(o.a)(l,2),b=u[0],g=u[1];return console.log("MainApp -> redirectToPage",b),Object(a.useEffect)((function(){j.subscribe((function(e){g(e)})),c(C())}),[b]),console.log("MainApp -> appUrl",n),console.log("MainApp -> redirectToPage",b),console.log("MainApp -> appUrl + routeName.login",n+m),r.a.createElement(p.a,{basename:"/"},b===i&&r.a.createElement(d.a,{to:"/"}),b===s&&r.a.createElement(d.a,{to:"/".concat(s)}),b===m&&r.a.createElement(d.a,{to:"/".concat(m)}),r.a.createElement(d.b,{exact:!0,path:n,component:_e}),r.a.createElement(d.b,{exact:!0,path:n+s,component:oe}),r.a.createElement(d.b,{exact:!0,path:n+m,component:ke}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[128,1,2]]]);
//# sourceMappingURL=main.6b84ea86.chunk.js.map