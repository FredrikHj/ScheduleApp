(this["webpackJsonpHBGWorks-Schedule"]=this["webpackJsonpHBGWorks-Schedule"]||[]).push([[0],{113:function(e,t,n){},127:function(e,t,n){e.exports=n(262)},132:function(e,t,n){},137:function(e,t){},139:function(e,t){},176:function(e,t){},177:function(e,t){},238:function(e,t,n){},257:function(e,t,n){},258:function(e,t,n){},260:function(e,t,n){},261:function(e,t,n){},262:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(122),c=n.n(l),o=(n(132),n(1)),i={userReg:"UserReg",auth:"Auth",login:"Login"},u=n(9),s=n(22),m=n(264),d=n(133);function p(e){return console.log("getLocalStorageData -> window.localStorage.length",window.localStorage.length),0!==window.localStorage.length&&"token"===e&&(e=JSON.parse(window.localStorage.getItem("loginData")).token),console.log("getLocalStorageData -> getData",e),e}var b=new m.a(""),g=new m.a(""),f=new m.a(""),h=new m.a([]),E=new m.a("");new m.a("");var x=function(e){localStorage.setItem("loginData",JSON.stringify(e))};function O(){O&&b.next(function(e,t){var n=d.verify(e,"inlogSecretKey",(function(e,t){return t}));if("fullName"===t)return n.loginName}(p("token"),"fullName"))}function j(e){e&&h.next(e)}function v(e){return console.log("updateGotoPage -> gotoPage",e),e&&E.next(e),e}var S=n(19),y=(n(113),function(e){return r.a.createElement(r.a.Fragment,null,e.str," ",r.a.createElement("span",{className:"spinner spinner-dark"}))}),w=(n(238),n(35)),C=n.n(w),N=(n(50),n(20),[]),_="https://hbgworks-poc-event-schedule.herokuapp.com",k=function(e,t){console.log("axiosGet -> getType",e);var n="";"default"===e&&(n="/SQLData"),"userSpec"===e&&(n="/SQLData/".concat("fredde")),C.a.get(_+n,{headers:{Authorization:"bearer ".concat(t)}}).then((function(t){console.log("axiosGet -> response",t);var n=[];200===t.status&&"default"===e&&(n=t.data[0]),200===t.status&&"userSpec"===e&&(n=t.data[0]),j(n),201===t.status&&(N[0].push(n[0][0]),j[0](N))})).catch((function(e){}))},A=function(e,t){console.log("axiosPost -> postType",e);var n="",a={bodyData:t};"Auth"===e&&(n="Auth"),"filter"===e&&(n="filter"),"add"===e&&(n="AddRecord"),"userReg"===e&&(n="UserReg"),C.a.post("".concat(_,"/SQLData/").concat(n),a).then((function(t){if(console.log("axiosPost -> response",t),"Auth"===e){var n={responsType:t.status,logInMess:t.statusText,token:t.data};x(a=n),a&&f.next(a),200===t.status&&v(e)}var a})).catch((function(e){}))},I=function(){var e="",t=window.location.hostname;return"localhost"===t&&(e="/"),"fredrikhj.github.io"===t&&(e="/ScheduleApp/"),e},F=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),l=n[0],c=n[1],i=Object(a.useState)(""),s=Object(o.a)(i,2),m=s[0],d=s[1],p=Object(a.useState)(""),f=Object(o.a)(p,2),E=f[0],x=f[1],j=Object(a.useState)(""),v=Object(o.a)(j,2),w=(v[0],v[1],Object(a.useState)([])),C=Object(o.a)(w,2),N=C[0],_=C[1],F=Object(a.useState)(!1),L=Object(o.a)(F,2),U=(L[0],L[1]),P=Object(a.useState)(0),R=Object(o.a)(P,2),H=(R[0],R[1],Object(a.useState)([])),T=Object(o.a)(H,2),D=(T[0],T[1],Object(a.useState)("")),B=Object(o.a)(D,2),M=B[0],z=B[1],q=Object(a.useState)(""),G=Object(o.a)(q,2),Q=G[0],W=G[1],J=Object(a.useState)(""),K=Object(o.a)(J,2),V=K[0],$=K[1],X=Object(a.useState)(""),Y=Object(o.a)(X,2),Z=Y[0],ee=Y[1],te=Object(a.useState)(""),ne=Object(o.a)(te,2),ae=ne[0],re=ne[1],le=Object(a.useState)(""),ce=Object(o.a)(le,2),oe=ce[0],ie=ce[1],ue=Object(a.useState)(""),se=Object(o.a)(ue,2),me=se[0],de=se[1];Object(a.useEffect)((function(){c(I()),k("userSpec"),g.subscribe((function(e){d(e)})),b.subscribe((function(e){x(e)})),h.subscribe((function(e){200===e.status&&_(e.data[0])})),setTimeout((function(){O()}),1e3)}),[]);var pe=function(e){var t=e.target,n=t.value,a=t.dataset;"date"===a.type&&z(n),"activity"===a.type&&W(n),"state"===a.type&&$(n),"concerned"===a.type&&ee(n),"type"===a.type&&re(n),"place"===a.type&&ie(n),"content"===a.type&&de(n)},be=function(e){U(!0),A("add",[0,M,Q,V,Z,ae,oe,me])};return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"".concat(m," - L\xe4gg Till"))),r.a.createElement("header",null,r.a.createElement("section",{className:"headbar__headContainer"},r.a.createElement("p",{className:"headContainer__headline"},m),r.a.createElement("section",{className:"headContainer__logInOut"},r.a.createElement("p",{className:"logInOut__logedInUser"},"V\xe4lkommen in ".concat(""===E?"...":E)),r.a.createElement("section",{className:"logInOut__btnInContainer"},r.a.createElement("div",{className:"btnContainer__btnAddCanceled"},r.a.createElement("input",{type:"submit",className:"btnLogOut__input",onClick:"",id:"cancelAdd",value:""}),r.a.createElement(u.b,{to:"".concat(l,"/LogIn"),className:"btnContainer__inputHeadline",onClick:"",id:"cancelAdd"},r.a.createElement("p",{className:"btnHeadline__canceled",id:"cancelAdd"},"Avbryt"))))))),r.a.createElement("button",{className:"btnAddedSendContainer__sendBtn",onClick:be,id:"sendIn"},r.a.createElement("p",{className:"btnHeadline__sendIn",id:"sendIn",onClick:be},"Skicka In")),r.a.createElement("section",{className:"formAdd__addContainer"},r.a.createElement("table",{className:"addContainer__body"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Datum"),r.a.createElement("th",{className:"tableCol4"},"Akitvitet"),r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"Ber\xf6rda"),r.a.createElement("th",null,"Typ"),r.a.createElement("th",null,"Plats"),r.a.createElement("th",{className:"tableCol9"},"Inneh\xe5ll"))),r.a.createElement("tbody",{className:"addContainer__Tbody"},r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("input",{type:"text",className:"addSqlInput","data-type":"date",onChange:pe,placeholder:"  ..."})),r.a.createElement("td",{className:"tableCol4"},r.a.createElement("input",{type:"text",className:"addSqlInput","data-type":"activity",onChange:pe,placeholder:"  ..."})),r.a.createElement("td",null,r.a.createElement("input",{type:"text",className:"addSqlInput","data-type":"state",onChange:pe,placeholder:"  ..."})),r.a.createElement("td",null,r.a.createElement("input",{type:"text",className:"addSqlInput","data-type":"concerned",onChange:pe,placeholder:"  ..."})),r.a.createElement("td",null,r.a.createElement("input",{type:"text",className:"addSqlInput","data-type":"type",onChange:pe,placeholder:"  ..."})),r.a.createElement("td",null,r.a.createElement("input",{type:"text",className:"addSqlInput","data-type":"place",onChange:pe,placeholder:"  ..."})),r.a.createElement("td",{className:"tableCol9"},r.a.createElement("input",{type:"text",className:"addSqlInput","data-type":"content",onChange:pe,placeholder:"  ..."}))),r.a.createElement("tr",null,0!==N.length?N.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.date),r.a.createElement("td",{className:"tableCol4"},e.activity),r.a.createElement("td",null,e.state),r.a.createElement("td",null,e.concerned),r.a.createElement("td",null,e.type),r.a.createElement("td",null,e.place),r.a.createElement("td",{className:"tableCol9"},e.content))})):r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(y,{wait:"Datan laddas"}))))))))},L=n(4),U=n(5);function P(){var e=Object(L.a)(["\n    width: 221px;\n    height: 50px;\n    margin-left: 32px;\n    margin-top: 46px;\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 24px;\n    line-height: 80px;\n    color: #AE0B05;\n  "]);return P=function(){return e},e}function R(){var e=Object(L.a)(["\n    width: 1400px;\n    height: 103px;\n    margin-left: calc(50% - 700px);\n    background: #FFFFFF;\n  "]);return R=function(){return e},e}function H(){var e=Object(L.a)(["\n    width: 100%;\n    background-color: white;\n    margin: -39px 0px 0px -5px;\n    "]);return H=function(){return e},e}function T(){var e=Object(L.a)(["\n    float: right;\n    margin-top: -7px;\n  "]);return T=function(){return e},e}function D(){var e=Object(L.a)(["\n    width: 1024px;\n    margin-left: calc(50% - 512px);\n  "]);return D=function(){return e},e}var B,M={body__contents:U.a.section(D()),askMarkMove:U.a.section(T())},z={header:U.a.section(H()),headContainer:U.a.section(R()),headline:U.a.section(P())},q=(n(257),function(){return r.a.createElement("section",{className:"searchBar__searchContainer"},"Komande s\xf6kfunktion!!!")}),G=(n(258),function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(!1),i=Object(o.a)(c,2),u=(i[0],i[1]),s=Object(a.useState)(""),m=Object(o.a)(s,2),d=m[0],b=m[1],g=Object(a.useState)(!0),f=Object(o.a)(g,2),E=(f[0],f[1],1);Object(a.useEffect)((function(){b(function(){var e=window.location.pathname;return console.log("runAppUrls -> appUrl",e),e}()),x(),h.subscribe((function(e){e&&l(e),"OK"===e.statusText&&l(e.data[0])}))}),[d]);var x=function(){var e=new Promise((function(e,t){1===E&&(e(),E++),2===E&&setTimeout((function(){u(!0)}),1e3)}));console.log("getSQLData -> routes",d),e.then((function(e){"/"!==d&&"/ScheduleApp/"!==d||k("default",""),"/Login"!==d&&"/ScheduleApp/Login"!==d||k("userSpec",p("token"))})).catch((function(e){u(e)}))};return console.log("HeadContents -> incommingNewSQLData",n),r.a.createElement(M.body__contents,null,r.a.createElement(q,null),r.a.createElement("section",{id:"container__tableSchedule"},r.a.createElement("table",{id:"tableSchedule__body"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Datum"),r.a.createElement("th",{className:"tableCol4"},"Akitvitet"),r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"Ber\xf6rda"),r.a.createElement("th",null,"Typ"),r.a.createElement("th",null,"Plats"),r.a.createElement("th",{className:"tableCol9"},"Inneh\xe5ll"))),r.a.createElement("tbody",{id:"tableSchedule__tBody"},0!==n.length?n.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.date),r.a.createElement("td",{className:"tableCol4"},e.activity),r.a.createElement("td",null,e.state),r.a.createElement("td",null,e.concerned),r.a.createElement("td",null,e.type),r.a.createElement("td",null,e.place),r.a.createElement("td",{className:"tableCol9"},e.content))})):r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(y,{str:"Tabellen laddas"}))))))))}),Q=n(66);function W(){var e=Object(L.a)(["\n\n  "]);return W=function(){return e},e}function J(){var e=Object(L.a)(["\n\n  "]);return J=function(){return e},e}function K(){var e=Object(L.a)(["\n    display: inline-block;\n    position: relative;\n    width: 133px;\n    height: 32px;\n    left: 0px;\n    top: -10px;\n    text-align: center;\n    text-decoration: none;\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n    color: white;\n  "]);return K=function(){return e},e}function V(){var e=Object(L.a)(["\n    right: 108px;\n    margin-left: 1269px;\n    margin-top: -20px;\n    width: 141px;\n    height: 39px;\n    background: #AE0B05;\n    border-radius: 4px;\n  "]);return V=function(){return e},e}function $(){var e=Object(L.a)(["\n    border: 1px solid red;\n    width: 400px;\n    display: flex;\n    flex-direction: row;\n    margin-left: 51px;\n  "]);return $=function(){return e},e}function X(){var e=Object(L.a)(["\n    margin-top: -15px;\n  "]);return X=function(){return e},e}function Y(){var e=Object(L.a)(["\n    width: 400px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    margin-left: 820px;\n    margin-top: -8px;\n  "]);return Y=function(){return e},e}var Z=(B={statusContainer:U.a.section(Y()),btnLogoutContainer:U.a.section(X()),logedInUser:U.a.section($()),btnSubmitContainer:U.a.button(V()),btnHeadline:U.a.p(K())},Object(Q.a)(B,"logedInUser",U.a.section(J())),Object(Q.a)(B,"logedInUser",U.a.section(W())),B);function ee(){var e=Object(L.a)(["\n    margin-left: 3px;\n  "]);return ee=function(){return e},e}function te(){var e=Object(L.a)(["\n    width: 400px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    margin-left: 820px;\n    margin-top: -8px;\n  "]);return te=function(){return e},e}var ne={statusContainer:U.a.section(te()),logInSpinnerMove:U.a.section(ee())},ae=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],l=(t[1],Object(a.useState)("")),c=Object(o.a)(l,2),i=c[0];c[1];Object(a.useEffect)((function(){}),[]),console.log("Auth -> token",i),console.log(" "!==i);return console.log("Auth -> token",i),r.a.createElement(r.a.Fragment,null,r.a.createElement(S.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"".concat(n," - Utloggad"))),r.a.createElement(re,{appStatus:r.a.createElement(ne.statusContainer,null,"Du loggas in ...",r.a.createElement(y,null),void setTimeout((function(){v("Login")}),500))}),r.a.createElement(G,null))},re=(n(259),function(e){var t=e.appStatus,n=Object(a.useState)(""),l=Object(o.a)(n,2),c=l[0],i=l[1],u=Object(a.useState)("\xc5rsklockan"),s=Object(o.a)(u,1)[0],m=Object(a.useState)(""),d=Object(o.a)(m,2),p=(d[0],d[1]),b=Object(a.useState)(0),g=Object(o.a)(b,2),h=(g[0],g[1]),x=Object(a.useState)(""),O=Object(o.a)(x,2),j=O[0],v=O[1];return Object(a.useEffect)((function(){i(I()),f.subscribe((function(e){h(e.responsType),p(e.logInMess)})),E.subscribe((function(e){v(e)}))}),[c,j]),r.a.createElement(r.a.Fragment,null,r.a.createElement(z.header,null,r.a.createElement(z.headContainer,null,r.a.createElement(z.headline,null,s),t)))});function le(){var e=Object(L.a)(["\n    width: 706px;\n    height: 75px;\n    margin-left: 770px;\n    margin-top: -53px;\n  "]);return le=function(){return e},e}function ce(){var e=Object(L.a)(["\n    width: 221px;\n    height: 50px;\n    margin-left: 32px;\n    margin-top: 46px;\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 24px;\n    line-height: 80px;\n    color: #AE0B05;\n  "]);return ce=function(){return e},e}function oe(){var e=Object(L.a)(["\n    width: 1400px;\n    height: 103px;\n    margin-left: calc(50% - 700px);\n    background: #FFFFFF;\n  "]);return oe=function(){return e},e}function ie(){var e=Object(L.a)(["\n    width: 100%;\n    background-color: white;\n    margin: -39px 0px 0px -5px;\n    "]);return ie=function(){return e},e}function ue(){var e=Object(L.a)(["\n    margin-right: -50px;\n    margin-top: 10px;\n    width: 200px;\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 20px;\n    text-align: center;\n    color: black;\n    font-size: 12px;\n  "]);return ue=function(){return e},e}function se(){var e=Object(L.a)(["\n    margin-top: 14px;\n    margin-left: 18px;\n    width: 149px;\n    font-size: 13.5px;\n    color: #AE0B05;\n    font-weight: bold;\n  "]);return se=function(){return e},e}function me(){var e=Object(L.a)(["\n    width: 377px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  "]);return me=function(){return e},e}function de(){var e=Object(L.a)(["\n    display: inline-block;\n    position: relative;\n    width: 133px;\n    height: 32px;\n    left: -6px;\n    top: -9px;\n    text-align: center;\n    text-decoration: none;\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n    color: white;\n  "]);return de=function(){return e},e}function pe(){var e=Object(L.a)(["\n    margin-right: 108px;\n    margin-top: 20px;\n    margin-left: 0;\n    width: 141px;\n    height: 39px;\n    background: #AE0B05;\n    border-radius: 4px;\n  "]);return pe=function(){return e},e}function be(){var e=Object(L.a)(["\n    width: 181px;\n    height: 80%;\n    margin-left: 499px;\n    margin-top: -55px;\n  "]);return be=function(){return e},e}function ge(){var e=Object(L.a)(["\n    width: 228px;\n    height: 29px;\n    margin-left: 0px;\n    margin-top: 0px;\n    background: #F5F5F5;\n    border: 1px solid #E5E5E5;\n    box-sizing: border-box;\n    border-radius: 4px;\n  "]);return ge=function(){return e},e}function fe(){var e=Object(L.a)(["\n    width: 221px;\n    height: 50px;\n    margin-left: 10px;\n    margin-bottom: -25px;\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 19px;\n    color: #000000;\n    "]);return fe=function(){return e},e}function he(){var e=Object(L.a)(["\n    margin-left: 256px;\n    margin-top: -69px;\n    margin-bottom: -25px;\n    "]);return he=function(){return e},e}function Ee(){var e=Object(L.a)(["\n    margin-left: 10px;\n    margin-top: 30px;\n    margin-bottom: -25px;\n  "]);return Ee=function(){return e},e}function xe(){var e=Object(L.a)(["\n    width: 706px;\n    height: 75px;\n    margin-left: 770px;\n    margin-top: -67px;\n"]);return xe=function(){return e},e}var Oe={statusContainer:U.a.section(xe()),usernameContainer:U.a.section(Ee()),passwordContainer:U.a.section(he()),labelFormatUsernamePassword:U.a.p(fe()),inputFormatUsernamePassword:U.a.input(ge()),btnLoginContainer:U.a.section(be()),btnSubmitContainer:U.a.button(pe()),btnHeadline:U.a.p(de()),userInfoContainer:U.a.section(me()),userErrorMess:U.a.p(se()),regLink:U.a.section(ue())},je=(U.a.section(ie()),U.a.section(oe()),U.a.section(ce()),U.a.section(le()),function(e){var t=e.appUrl,n=e.onChangeUserName,a=e.onChangeUserPwd,l=e.userNameStr,c=e.userPwdStr,o=e.runAuth,s=e.runReg,m=e.inlogStatus,d=e.inlogMess;return r.a.createElement(Oe.statusContainer,null,r.a.createElement(Oe.usernameContainer,null,r.a.createElement(Oe.labelFormatUsernamePassword,null,"Anv\xe4ndarnamn"),r.a.createElement(Oe.inputFormatUsernamePassword,{type:"text",onChange:n,value:l,placeholder:"..."})),r.a.createElement(Oe.passwordContainer,null,r.a.createElement(Oe.labelFormatUsernamePassword,null,"L\xf6senord"),r.a.createElement(Oe.inputFormatUsernamePassword,{type:"text",onChange:a,value:c,placeholder:"..."})),r.a.createElement(Oe.btnLoginContainer,null,r.a.createElement(Oe.btnSubmitContainer,{id:"Auth",onClick:o},r.a.createElement(Oe.btnHeadline,{id:"Auth",onClick:o},"Logga In"))),r.a.createElement(Oe.userInfoContainer,null,r.a.createElement(Oe.userErrorMess,null,203===m&&null===l&&null===c?d:null),r.a.createElement(Oe.regLink,null,r.a.createElement(u.b,{to:t+i.userReg,onClick:s,id:"reg"},"Registrera ny anv\xe4ndare"))))});n(260);console.log(f.value);n(261);var ve=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),l=n[0],c=n[1],i=Object(a.useState)(""),s=Object(o.a)(i,2),m=s[0],d=s[1],p=Object(a.useState)(""),b=Object(o.a)(p,2),f=(b[0],b[1],Object(a.useState)("")),h=Object(o.a)(f,2),E=(h[0],h[1]),x=Object(a.useState)(""),O=Object(o.a)(x,2),j=(O[0],O[1]),v=Object(a.useState)(""),y=Object(o.a)(v,2),w=(y[0],y[1]);Object(a.useEffect)((function(){c(I()),g.subscribe((function(e){d(e)}))}),[]);var C=function(e){var t=e.target,n=t.value,a=t.dataset;"fullName"===a.type&&E(n),"userName"===a.type&&j(n),"userPwd"===a.type&&w(n)},N=function(e){e.target.id;A("userReg","targetBtnId")};return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"".concat(m," - Registrera"))),r.a.createElement("section",{className:"logInOut__btnRegContainer"},r.a.createElement("div",{className:"btnContainer__cancelReg"},r.a.createElement("input",{type:"submit",className:"btnLogOut__cancelReg",value:""}),r.a.createElement(u.b,{to:l,className:"btnContainer__inputHeadline"},r.a.createElement("p",{className:"btnHeadline__cancelReg"},"Avbryt")))),r.a.createElement("section",{className:"regUser__regContainer"},r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement("label",{id:"userFullName"},"Ditt Namn"),r.a.createElement("input",{type:"text",id:"userFullName","data-type":"fullName",onChange:C,placeholder:"  ..."})),r.a.createElement("div",null,r.a.createElement("label",{id:"userName"},"Anv\xe4ndarnamn"),r.a.createElement("input",{type:"text",id:"userName","data-type":"userName",onChange:C,placeholder:"  ..."})),r.a.createElement("div",null,r.a.createElement("label",{id:"userPwd"},"L\xf6senord"),r.a.createElement("input",{type:"text",id:"userPwd","data-type":"userPwd",onChange:C,placeholder:"  ..."})),r.a.createElement("div",null,r.a.createElement("input",{type:"submit",className:"regContainer__submitBtn",value:"",onClick:N,id:"login"}),r.a.createElement(u.b,{to:l,className:"btnContainer__inputHeadline"},r.a.createElement("p",{className:"regContainer__headline",onClick:N,id:"Login"},"Registrera"))))))},Se=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),u=Object(o.a)(c,2),m=u[0],d=u[1],p=Object(a.useState)(""),b=Object(o.a)(p,2),h=b[0],E=b[1],x=Object(a.useState)(0),O=Object(o.a)(x,2),j=O[0],y=O[1],w=Object(a.useState)(""),C=Object(o.a)(w,2),N=C[0],_=C[1],k=Object(a.useState)(""),F=Object(o.a)(k,2),L=F[0],U=F[1],P=Object(a.useState)("Auth"),R=Object(o.a)(P,2),H=R[0];R[1];Object(a.useEffect)((function(){return l(I()),g.subscribe((function(e){d(e)})),f.subscribe((function(e){y(e.responsType),E(e.logInMess)})),"/"===H?r.a.createElement(s.a,{to:"/"}):"RegUser"===H?r.a.createElement(s.a,{to:"/Auth"}):void 0}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"".concat(m," - Utloggad"))),r.a.createElement(re,{appStatus:r.a.createElement(je,{appUrl:n,onChangeUserName:function(e){var t=e.target.value;_(t)},userNameStr:N,onChangeUserPwd:function(e){var t=e.target.value;U(t)},userPwdStr:L,runAuth:function(e){var t=e.target.id;A(t,{userName:N,userPassWord:L}),v(t)},runReg:function(){},inlogStatus:j,inlogMess:h})}),r.a.createElement(s.b,{exact:!0,path:n,component:G}),r.a.createElement(s.b,{exact:!0,path:n+i.userReg,component:ve}))},ye=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),l=n[0],c=n[1],i=Object(a.useState)(""),s=Object(o.a)(i,2),m=s[0],d=s[1],p=Object(a.useState)(""),f=Object(o.a)(p,2),h=f[0],E=f[1];Object(a.useEffect)((function(){c(I()),g.subscribe((function(e){E(e)})),b.subscribe((function(e){d(e)})),setTimeout((function(){O()}),1e3)}),[]);var j=function(e){v(e.target.id),x(window.localStorage.clear("loginData"))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"".concat(h," - Inloggad"))),r.a.createElement(re,{appStatus:r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.statusContainer,null,""===m?r.a.createElement(r.a.Fragment,null,"V\xe4lkommen in ... ",r.a.createElement(y,null)):"V\xe4lkommen in ".concat(m)),r.a.createElement(Z.btnLogoutContainer,null,r.a.createElement(Z.btnSubmitContainer,{id:"Logout",onClick:j},r.a.createElement(Z.btnHeadline,{id:"Logout",onClick:j},"Logga Ut"))),r.a.createElement("div",{className:"btnContainer__btnAdd"},r.a.createElement("input",{type:"submit",className:"btnLogOut__input",onClick:Se.runLogInOut,id:"add",value:""}),r.a.createElement(u.b,{to:"".concat(l,"/Add"),className:"btnContainer__inputHeadline",onClick:Se.runLogInOut,id:"add"},r.a.createElement("p",{className:"btnHeadline__add",id:"add"},"L\xe4gg Till"))))}),r.a.createElement(G,null))};!function(e){e&&g.next(e)}("\xc5rsklockan");var we=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),m=Object(o.a)(c,2),d=m[0],p=m[1];return console.log("MainApp -> redirectToPage",d),Object(a.useEffect)((function(){E.subscribe((function(e){p(e)})),l(I())}),[d]),console.log("MainApp -> appUrl",n),console.log("MainApp -> redirectToPage",d),console.log("MainApp -> appUrl + routeName.login",n+i.login),r.a.createElement(u.a,null,d===i.auth&&r.a.createElement(s.a,{to:"/".concat(i.auth)}),d===i.login&&r.a.createElement(s.a,{to:"/".concat(i.login)}),r.a.createElement(s.b,{exact:!0,path:n,component:Se}),r.a.createElement(s.b,{exact:!0,path:n+i.auth,component:ae}),r.a.createElement(s.b,{exact:!0,path:n+i.login,component:ye}),r.a.createElement(s.b,{exact:!0,path:n+i.add,component:F}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(we,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[127,1,2]]]);
//# sourceMappingURL=main.352e7c93.chunk.js.map