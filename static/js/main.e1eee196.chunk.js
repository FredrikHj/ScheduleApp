(this["webpackJsonpHBGWorks-Schedule"]=this["webpackJsonpHBGWorks-Schedule"]||[]).push([[0],{112:function(e,t,n){},122:function(e,t,n){},129:function(e,t,n){e.exports=n(263)},134:function(e,t,n){},139:function(e,t){},141:function(e,t){},178:function(e,t){},179:function(e,t){},257:function(e,t,n){},260:function(e,t,n){},261:function(e,t,n){},262:function(e,t,n){},263:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(123),c=n.n(o),l=(n(134),n(1)),i="/",u="Registrera",s="Auth",m="Inloggad",p="Add",f=n(10),g=n(22),d=n(264),b=n(135);function h(e){return console.log("getLocalStorageData -> window.localStorage.length",window.localStorage),e=JSON.parse(window.localStorage.getItem("loginData")).token,console.log("getLocalStorageData -> getData",e),e}var E=new d.a(""),x=new d.a(""),O=new d.a(""),j=new d.a([]),v=new d.a([]),S=new d.a("");new d.a("");var w=function(e){localStorage.setItem("loginData",JSON.stringify(e))};function y(){y&&E.next(function(e,t){console.log("getTokenData -> token",e);var n=b.verify(e,"inlogSecretKey",(function(e,t){return t}));if("fullName"===t)return n.loginName}(h("token"),"fullName"))}function k(e){e&&j.next(e)}function C(e){return console.log("updateGotoPage -> gotoPage",e),e&&S.next(e),e}var F=function(){var e="",t=window.location.hostname,n=window.location.hash.split("")[1];return console.log("localPubAppUrls -> appUrlDomain",t),console.log("localPubAppUrl -> appUrlHostname",n),"localhost"!==t&&"fredrikhj.github.io"!==t||(e="/"),e},A=(n(112),function(e){return r.a.createElement(r.a.Fragment,null,e.str," ",r.a.createElement("span",{className:"spinner spinner-dark"}))}),N=n(35),U=n.n(N),_=(n(51),n(20),[]),T="https://hbgworks-poc-event-schedule.herokuapp.com",L=function(e,t){console.log("axiosGet -> getType",e);var n="";"default"===e&&(n="/SQLData"),"userSpec"===e&&(n="/SQLData/".concat("fredde")),U.a.get(T+n,{headers:{Authorization:"bearer ".concat(t)}}).then((function(t){console.log("axiosGet -> response",t),k([]);var n=[];200===t.status&&"default"===e&&(n=t.data[0]),200===t.status&&"userSpec"===e&&(n=t.data.SQLData[0],function(e){e&&v.next(e)}(t.data.structuringCols)),k(n),201===t.status&&(_[0].push(n[0][0]),k[0](_))})).catch((function(e){}))},P=function(e,t){console.log("axiosPost -> bodyData",t);var n="",a={bodyData:t};"Auth"===e&&(n="Auth"),"filter"===e&&(n="filter"),"add"===e&&(n="AddRecord"),"userReg"===e&&(n="UserReg"),U.a.post("".concat(T,"/SQLData/").concat(n),a).then((function(t){if(console.log("axiosPost -> response",t),"Auth"===e){var n={responsType:t.status,logInMess:t.statusText,token:t.data};w(a=n),a&&O.next(a),200===t.status&&C(e)}var a})).catch((function(e){}))},I=function(e){var t=Object(a.useState)("/"),n=Object(l.a)(t,2),o=(n[0],n[1]),c=Object(a.useState)(""),i=Object(l.a)(c,2),u=i[0],s=i[1],m=Object(a.useState)([]),p=Object(l.a)(m,2),f=p[0],g=p[1],d=Object(a.useState)(!1),b=Object(l.a)(d,2),E=(b[0],b[1]),x=1;Object(a.useEffect)((function(){o(F()),O(),j.subscribe((function(e){e&&g(e)})),s(function(){var e=window.location.hash.split("#")[1];return console.log("runAppUrls -> appUrl",e),e}())}),[u]);var O=function(){new Promise((function(e,t){1===x&&(e(),x++),2===x&&setTimeout((function(){E(!0)}),1e3)})).then((function(e){"/"===u&&L("default",""),"/Inloggad"!==u&&"/Add"!==u||L("userSpec",h("token"))})).catch((function(e){E(e)}))};return r.a.createElement(r.a.Fragment,null,0!==f.length?f.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.date),r.a.createElement("td",{className:"tableCol4"},e.activity),r.a.createElement("td",null,e.state),r.a.createElement("td",null,e.concerned),r.a.createElement("td",null,e.type),r.a.createElement("td",null,e.place),r.a.createElement("td",{className:"tableCol9"},e.content))})):r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(A,{str:"Tabellen laddas"})))))},R=n(5),B=n(4);function D(){var e=Object(R.a)(["\n    width: 221px;\n    height: 50px;\n    margin-left: 32px;\n    margin-top: 46px;\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 24px;\n    line-height: 80px;\n    color: #AE0B05;\n  "]);return D=function(){return e},e}function H(){var e=Object(R.a)(["\n    width: 1400px;\n    height: 103px;\n    margin-left: calc(50% - 700px);\n    background: #FFFFFF;\n  "]);return H=function(){return e},e}function M(){var e=Object(R.a)(["\n    width: 100%;\n    background-color: white;\n    margin: -39px 0px 0px -5px;\n    "]);return M=function(){return e},e}function z(){var e=Object(R.a)(["\n    float: right;\n    margin-top: -7px;\n  "]);return z=function(){return e},e}function G(){var e=Object(R.a)(["\n    width: 1024px;\n    margin-left: calc(50% - 512px);\n  "]);return G=function(){return e},e}var W={body__contents:B.a.section(G()),askMarkMove:B.a.section(z())},J={header:B.a.section(M()),headContainer:B.a.section(H()),headline:B.a.section(D())},Q=n(19),V={btn:{marginRight:"108px",marginTop:"20px",marginLeft:"0"},text:{width:"133px",height:"32px",left:"-6px",top:"-9px"}},K={btn:{marginLeft:"1269px",marginTop:"-25px"},text:{width:"133px",height:"32px",left:"0px",top:"-10px"}},$={btn:{marginLeft:"1060px",marginTop:"73px"},text:{marginLeft:"0",marginTop:"5px"}};function q(){var e=Object(R.a)(["\n        display: inline-block;\n        position: relative;\n        text-align: center;\n        text-decoration: none;\n        font-family: Roboto;\n        font-style: normal;\n        font-weight: normal;\n        font-size: 16px;\n        color: white;\n    "]);return q=function(){return e},e}function X(){var e=Object(R.a)(["\n        width: 141px;\n        height: 39px;\n        background: #AE0B05;\n        border-radius: 4px;\n    "]);return X=function(){return e},e}var Y={btn:B.a.button(X())},Z={btnHeadline:B.a.p(q())},ee=function(e){var t=e.style,n=e.name,a=e.onClick,o=e.id;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.btn,{id:o,onClick:a,style:t.btn},r.a.createElement(Z.btnHeadline,{id:o,onClick:a,style:t.text},n)))},te=(n(257),function(){return r.a.createElement("section",{className:"searchBar__searchContainer"},"Komande s\xf6kfunktion!!!")}),ne=(n(122),["Datum","Akitvitet","Status","Ber\xf6rda","Typ","Plats","Inneh\xe5ll"]),ae=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,ne.map((function(e,t){return r.a.createElement("th",{key:t},e," ")}))))},re=n(44);function oe(){var e=Object(R.a)(["\n    margin-left: 0;\n    margin-top: 0;\n  "]);return oe=function(){return e},e}function ce(){var e=Object(R.a)(["\n    margin-top: -10px;\n  "]);return ce=function(){return e},e}function le(){var e=Object(R.a)(["\n    border: 1px solid red;\n    width: 400px;\n    display: flex;\n    flex-direction: row;\n    margin-left: 51px;\n    "]);return le=function(){return e},e}function ie(){var e=Object(R.a)(["\n    width: 400px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    margin-left: 820px;\n    margin-top: -8px;\n  "]);return ie=function(){return e},e}var ue={statusContainer:B.a.section(ie()),logedInUser:B.a.section(le()),btnSubmitLogoutInTopUp:B.a.section(ce())},se={width:"100%"},me={container:B.a.section(oe())},pe=function(e){Object(a.useEffect)((function(){}),[]),console.log(e.options);var t=e.dataType,n=e.cellIndex,o=e.inputOnChange,c=e.sOOnClick,l=(e.cellStr,e.placeholder);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",style:se.UserInputForm,"data-type":t,"data-typenr":n,onChange:o,placeholder:l}),r.a.createElement(me.container,null,r.a.createElement("select",{key:n,onChange:c},r.a.createElement("option",null,"V\xe4lj"),!1!==e.options?e.options.map((function(e,t){return r.a.createElement("option",{key:t,id:t,value:e},e)})):null)))},fe=function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)([]),u=Object(l.a)(i,2),s=u[0],m=u[1],p=Object(a.useState)([]),f=Object(l.a)(p,2),g=f[0],d=f[1];Object(a.useEffect)((function(){v.subscribe((function(e){e&&0===o.length&&c(e)}))}),[s]);var b=function(e){var t=Object(re.a)(s),n=e.target,a=n.value;console.log("setStrsType -> inputStr",a);for(var r=n.dataset,o=0;o<ne.length;o++)r.type===ne[o]&&(t[r.typenr]=a);m(t)};console.log("setStrsType -> addedRecordData",s);var h=function(e){var t=e.target.value;console.log("chooseSelectOption -> getChoosedSelectOption",t)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,ne.map((function(e,t){return r.a.createElement("td",{key:t},r.a.createElement(pe,{dataType:e,cellIndex:t,inputOnChange:b,sOOnClick:h,cellStr:s[t],placeholder:"  ...",options:void 0!==o[t]&&o[t]}))}))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(ee,{style:"",name:"+",onClick:function(e){var t=Object(re.a)(g);e.target.id;console.log("setStrsType -> addedRecordData",s),t.push(s),d(t)},id:"moreRecords"}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Dina Aktiviteter")))},ge=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),o=n[0],c=n[1];e.tableHead,e.tableBody,e.addRecordsBtn;return Object(a.useEffect)((function(){S.subscribe((function(e){console.log("HeadTable -> gotoPage",e),c(e)}))}),[]),r.a.createElement(W.body__contents,null,o!==p&&r.a.createElement(te,null),r.a.createElement("section",{id:"container__tableSchedule"},r.a.createElement("table",{id:"tableSchedule__body"},r.a.createElement(ae,null),r.a.createElement("tbody",{id:"tableSchedule__tBody"},o===p&&r.a.createElement(g.a,{to:"/".concat(p)}),r.a.createElement(g.b,{path:"/Add",component:fe}),r.a.createElement(I,null)))))};function de(){var e=Object(R.a)(["\n    margin-left: 3px;\n  "]);return de=function(){return e},e}function be(){var e=Object(R.a)(["\n    width: 400px;\n    display: flex; nd;\n    margin-left: 820px;\n    margin-top: -8px;\n  "]);return be=function(){return e},e}var he={statusContainer:B.a.section(be()),logInSpinnerMove:B.a.section(de())},Ee=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],o=t[1];Object(a.useEffect)((function(){x.subscribe((function(e){o(e)}))}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"".concat(n," - Utloggad"))),r.a.createElement(xe,{appStatus:r.a.createElement(he.statusContainer,null,"Du loggas in ...",r.a.createElement(A,null),void setTimeout((function(){C("Inloggad")}),500))}),r.a.createElement(ge,null))},xe=(n(259),function(e){var t=e.appStatus,n=Object(a.useState)("/"),o=Object(l.a)(n,2),c=o[0],i=(o[1],Object(a.useState)("\xc5rsklockan")),u=Object(l.a)(i,1)[0],s=Object(a.useState)(""),m=Object(l.a)(s,2),p=(m[0],m[1]),f=Object(a.useState)(0),g=Object(l.a)(f,2),d=(g[0],g[1]),b=Object(a.useState)(""),h=Object(l.a)(b,2),E=h[0],x=h[1];return Object(a.useEffect)((function(){O.subscribe((function(e){d(e.responsType),p(e.logInMess)})),S.subscribe((function(e){x(e)}))}),[c,E]),r.a.createElement(r.a.Fragment,null,r.a.createElement(J.header,null,r.a.createElement(J.headContainer,null,r.a.createElement(J.headline,null,u),t)))}),Oe=function(e){var t=e.inlogedUser,n=e.functionLogOut,a=e.sumbitBtnGotTo;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue.statusContainer,null,""===t?r.a.createElement(r.a.Fragment,null,"V\xe4lkommen in ... ",r.a.createElement(A,null)):"V\xe4lkommen in ".concat(t)),r.a.createElement(ue.btnSubmitLogoutInTopUp,null,r.a.createElement(ee,{style:K,name:"Logga Ut",onClick:n,id:"/"})),a)};function je(){var e=Object(R.a)(["\n    margin-right: -50px;\n    margin-top: 10px;\n    width: 200px;\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 20px;\n    text-align: center;\n    color: black;\n    font-size: 12px;\n  "]);return je=function(){return e},e}function ve(){var e=Object(R.a)(["\n    margin-top: 14px;\n    margin-left: 18px;\n    width: 149px;\n    font-size: 13.5px;\n    color: #AE0B05;\n    font-weight: bold;\n  "]);return ve=function(){return e},e}function Se(){var e=Object(R.a)(["\n    width: 377px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  "]);return Se=function(){return e},e}function we(){var e=Object(R.a)(["\n    width: 181px;\n    height: 80%;\n    margin-left: 499px;\n    margin-top: -55px;\n  "]);return we=function(){return e},e}function ye(){var e=Object(R.a)(["\n    width: 228px;\n    height: 29px;\n    margin-left: 0px;\n    margin-top: 0px;\n    background: #F5F5F5;\n    border: 1px solid #E5E5E5;\n    box-sizing: border-box;\n    border-radius: 4px;\n  "]);return ye=function(){return e},e}function ke(){var e=Object(R.a)(["\n    width: 221px;\n    height: 50px;\n    margin-left: 10px;\n    margin-bottom: -25px;\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 19px;\n    color: #000000;\n    "]);return ke=function(){return e},e}function Ce(){var e=Object(R.a)(["\n    margin-left: 256px;\n    margin-top: -69px;\n    margin-bottom: -25px;\n    "]);return Ce=function(){return e},e}function Fe(){var e=Object(R.a)(["\n    margin-left: 10px;\n    margin-top: 30px;\n    margin-bottom: -25px;\n  "]);return Fe=function(){return e},e}function Ae(){var e=Object(R.a)(["\n    width: 706px;\n    height: 75px;\n    margin-left: 770px;\n    margin-top: -67px;\n"]);return Ae=function(){return e},e}function Ne(){var e=Object(R.a)(["\n    width: 706px;\n    height: 75px;\n    margin-left: 770px;\n    margin-top: -53px;\n  "]);return Ne=function(){return e},e}function Ue(){var e=Object(R.a)(["\n    width: 221px;\n    height: 50px;\n    margin-left: 32px;\n    margin-top: 46px;\n    font-family: Roboto;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 24px;\n    line-height: 80px;\n    color: #AE0B05;\n  "]);return Ue=function(){return e},e}function _e(){var e=Object(R.a)(["\n    width: 1400px;\n    height: 103px;\n    margin-left: calc(50% - 700px);\n    background: #FFFFFF;\n  "]);return _e=function(){return e},e}function Te(){var e=Object(R.a)(["\n    width: 100%;\n    background-color: white;\n    margin: -39px 0px 0px -5px;\n    "]);return Te=function(){return e},e}B.a.section(Te()),B.a.section(_e()),B.a.section(Ue()),B.a.section(Ne());var Le={statusContainer:B.a.section(Ae()),usernameContainer:B.a.section(Fe()),passwordContainer:B.a.section(Ce()),labelFormatUsernamePassword:B.a.p(ke()),inputFormatUsernamePassword:B.a.input(ye()),btnLoginContainer:B.a.section(we()),userInfoContainer:B.a.section(Se()),userErrorMess:B.a.p(ve()),regLink:B.a.section(je())},Pe=function(e){var t=e.appUrl,n=e.onChangeUserName,a=e.onChangeUserPwd,o=e.userNameStr,c=e.userPwdStr,l=e.runAuth,i=e.runReg,s=e.inlogStatus,m=e.inlogMess;return r.a.createElement(Le.statusContainer,null,r.a.createElement(Le.usernameContainer,null,r.a.createElement(Le.labelFormatUsernamePassword,null,"Anv\xe4ndarnamn"),r.a.createElement(Le.inputFormatUsernamePassword,{type:"text",onChange:n,value:o,placeholder:"..."})),r.a.createElement(Le.passwordContainer,null,r.a.createElement(Le.labelFormatUsernamePassword,null,"L\xf6senord"),r.a.createElement(Le.inputFormatUsernamePassword,{type:"text",onChange:a,value:c,placeholder:"..."})),r.a.createElement(Le.btnLoginContainer,null,r.a.createElement(ee,{style:V,name:"Logga In",onClick:l,id:"Auth"})),r.a.createElement(Le.userInfoContainer,null,r.a.createElement(Le.userErrorMess,null,203===s&&null===o&&null===c?m:null),r.a.createElement(Le.regLink,null,r.a.createElement(f.b,{to:t+u,onClick:i,id:"Registrera"},"Registrera ny anv\xe4ndare"))))};n(260);console.log(O.value);n(261);var Ie=function(e){var t=Object(a.useState)("/"),n=Object(l.a)(t,2),o=n[0],c=(n[1],Object(a.useState)("")),i=Object(l.a)(c,2),u=i[0],s=i[1],m=Object(a.useState)(""),p=Object(l.a)(m,2),g=(p[0],p[1],Object(a.useState)("")),d=Object(l.a)(g,2),b=(d[0],d[1]),h=Object(a.useState)(""),E=Object(l.a)(h,2),O=(E[0],E[1]),j=Object(a.useState)(""),v=Object(l.a)(j,2),S=(v[0],v[1]);Object(a.useEffect)((function(){x.subscribe((function(e){s(e)}))}),[]);var w=function(e){var t=e.target,n=t.value,a=t.dataset;"fullName"===a.type&&b(n),"userName"===a.type&&O(n),"userPwd"===a.type&&S(n)},y=function(e){e.target.id;P("userReg","targetBtnId")};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"".concat(u," - Registrera"))),r.a.createElement("section",{className:"logInOut__btnRegContainer"},r.a.createElement("div",{className:"btnContainer__cancelReg"},r.a.createElement("input",{type:"submit",className:"btnLogOut__cancelReg",value:""}),r.a.createElement(f.b,{to:o,className:"btnContainer__inputHeadline"},r.a.createElement("p",{className:"btnHeadline__cancelReg"},"Avbryt")))),r.a.createElement("section",{className:"regUser__regContainer"},r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement("label",{id:"userFullName"},"Ditt Namn"),r.a.createElement("input",{type:"text",id:"userFullName","data-type":"fullName",onChange:w,placeholder:"  ..."})),r.a.createElement("div",null,r.a.createElement("label",{id:"userName"},"Anv\xe4ndarnamn"),r.a.createElement("input",{type:"text",id:"userName","data-type":"userName",onChange:w,placeholder:"  ..."})),r.a.createElement("div",null,r.a.createElement("label",{id:"userPwd"},"L\xf6senord"),r.a.createElement("input",{type:"text",id:"userPwd","data-type":"userPwd",onChange:w,placeholder:"  ..."})),r.a.createElement("div",null,r.a.createElement("input",{type:"submit",className:"regContainer__submitBtn",value:"",onClick:y,id:"login"}),r.a.createElement(f.b,{to:o,className:"btnContainer__inputHeadline"},r.a.createElement("p",{className:"regContainer__headline",onClick:y,id:"Login"},"Registrera"))))))},Re=function(){var e=Object(a.useState)("/"),t=Object(l.a)(e,2),n=t[0],o=(t[1],Object(a.useState)("")),c=Object(l.a)(o,2),i=c[0],s=c[1],m=Object(a.useState)(""),p=Object(l.a)(m,2),f=p[0],d=p[1],b=Object(a.useState)(0),h=Object(l.a)(b,2),E=h[0],j=h[1],v=Object(a.useState)(""),S=Object(l.a)(v,2),w=S[0],y=S[1],k=Object(a.useState)(""),F=Object(l.a)(k,2),A=F[0],N=F[1],U=Object(a.useState)("Auth"),_=Object(l.a)(U,2),T=_[0];_[1];Object(a.useEffect)((function(){return x.subscribe((function(e){s(e)})),O.subscribe((function(e){j(e.responsType),d(e.logInMess)})),"/"===T?r.a.createElement(g.a,{to:"/"}):"RegUser"===T?r.a.createElement(g.a,{to:"/Auth"}):void 0}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"".concat(i," - Utloggad"))),r.a.createElement(xe,{appStatus:r.a.createElement(Pe,{appUrl:n,onChangeUserName:function(e){var t=e.target.value;y(t)},userNameStr:w,onChangeUserPwd:function(e){var t=e.target.value;N(t)},userPwdStr:A,runAuth:function(e){var t=e.target.id;console.log("runAuth -> targetBtnId",t),P(t,{userName:w,userPassWord:A}),C(t)},runReg:function(){},inlogStatus:E,inlogMess:f})}),r.a.createElement(g.b,{exact:!0,path:n,component:ge}),r.a.createElement(g.b,{exact:!0,path:n+u,component:Ie}))},Be=function(e){var t=e.target.id;console.log("runLogOut -> targetBtnId",t),C(t),w(window.localStorage.clear())},De=function(e){C(e.target.id)},He=function(e){C(e.target.id)},Me=function(){var e=Object(a.useState)("/"),t=Object(l.a)(e,2),n=(t[0],t[1],Object(a.useState)("")),o=Object(l.a)(n,2),c=o[0],i=o[1],u=Object(a.useState)(""),s=Object(l.a)(u,2),m=s[0],p=s[1],f=Object(a.useState)(""),g=Object(l.a)(f,2);g[0],g[1];return Object(a.useEffect)((function(){y(),x.subscribe((function(e){console.log(e),p(e)})),E.subscribe((function(e){i(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"".concat(m," - Inloggad"))),r.a.createElement(xe,{appStatus:r.a.createElement(Oe,{inlogedUser:c,functionLogOut:Be,sumbitBtnGotTo:r.a.createElement(ee,{style:$,name:"L\xe4gga Till",onClick:De,id:"Add"})})}),r.a.createElement(ge,null))},ze=(n(262),function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(""),u=Object(l.a)(i,2),s=u[0],m=u[1];return Object(a.useEffect)((function(){y(),x.subscribe((function(e){c(e)})),E.subscribe((function(e){m(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"".concat(o," - L\xe4gg Till"))),r.a.createElement(xe,{appStatus:r.a.createElement(Oe,{inlogedUser:s,functionLogOut:Be,sumbitBtnGotTo:r.a.createElement(ee,{style:$,name:"\xc5terg\xe5",onClick:He,id:"Inloggad"})})}),r.a.createElement(ge,null))});!function(e){e&&x.next(e)}("\xc5rsklockan");var Ge=function(){var e=Object(a.useState)("/"),t=Object(l.a)(e,2),n=t[0],o=(t[1],Object(a.useState)("")),c=Object(l.a)(o,2),u=c[0],d=c[1];return console.log("MainApp -> redirectToPage",u),Object(a.useEffect)((function(){S.subscribe((function(e){console.log("MainApp -> gotoPage",e),d(e)}))}),[u]),console.log("MainApp -> appUrl",n),console.log("MainApp -> redirectToPage",u),r.a.createElement(f.a,{basename:"/"},u===i&&r.a.createElement(g.a,{to:"/"}),u===s&&r.a.createElement(g.a,{to:"/".concat(s)}),u===m&&r.a.createElement(g.a,{to:"/".concat(m)}),r.a.createElement(g.b,{exact:!0,path:n,component:Re}),r.a.createElement(g.b,{exact:!0,path:n+s,component:Ee}),r.a.createElement(g.b,{exact:!0,path:n+m,component:Me}),u===p&&r.a.createElement(g.a,{to:"/Add"}),r.a.createElement(g.b,{path:"/Add",component:ze}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[129,1,2]]]);
//# sourceMappingURL=main.e1eee196.chunk.js.map