(this.webpackJsonporange=this.webpackJsonporange||[]).push([[0],{48:function(e,t,n){e.exports=n(86)},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),i=n.n(c),o=n(4),s=n(10),u=n.n(s),l=(n(73),n(21)),m=n(23),p=n(5),d=n(6),h=n(8),b=n(7),f="SIGNUP_SUCCESS",E="SIGNUP_FAILURE",g="SIGNUP_FAILURE_USERNAME",v="LOGIN_SUCCESS",y="LOGIN_FAILURE",O="LOGOUT_SUCCESS",S="LOGOUT_FAILURE",j="GET_ME_SUCCESS",k="GET_ME_FAILURE",w="CREATE_SUCCESS",C="CREATE_FAILURE",N="CREATE_FAILURE_NAME",L="REMOVE_SUCCESS",U="REMOVE_FAILURE",_="GET_SUCCESS",x="GET_FAILURE",A=function(e,t,n){return function(a){return u.a.post("/api/v1/user/",{email:e,username:t,password:n}).then((function(e){return a((t=e.data,{type:f,target:t}));var t})).catch((function(e){return a(function(e){var t=null;switch(e.response.status){case 409:t=g;break;default:t=E}return{type:t,target:e}}(e))}))}},F=function(e,t){return function(n){return u.a.put("/api/v1/user/login/",{username:e,password:t}).then((function(e){return n((t=e.data,{type:v,target:t}));var t})).catch((function(e){return n(((t=e).response.status,{type:y,target:t}));var t}))}},M=function(){return function(e){return u.a.get("/api/v1/user/logout/").then((function(){return e({type:O,target:null})})).catch((function(t){return e({type:S,target:t})}))}},R=function(){return function(e){return u.a.get("/api/v1/user/me/").then((function(t){return e((n=t.data,{type:j,target:n}));var n})).catch((function(t){return e({type:k,target:t})}))}},T=function(e,t,n,a){return function(r){return u.a.post("/api/v1/necessity/",{name:e,option:t,description:n,price:a}).then((function(e){return r((t=e.data,{type:w,target:t}));var t})).catch((function(e){return r(function(e){var t=null;switch(e.response.status){case 409:t=N;break;default:t=C}return{type:t,target:e}}(e))}))}},I=function(){return function(e){return u.a.get("/api/v1/necessity/").then((function(t){return e((n=t.data,{type:_,target:n}));var n})).catch((function(t){return e(((n=t).response.status,{type:x,target:n}));var n}))}},G=function(e){return function(t){return u.a.delete("/api/v1/necessity/".concat(e,"/")).then((function(e){return t((n=e.data,window.alert("\uc0ad\uc81c \uc644\ub8cc!"),{type:L,target:n}));var n})).catch((function(e){return t(((n=e).response.status,window.alert("\uc2e4\ud328!"),{type:U,target:n}));var n}))}},V="NONE",D="SUCCESS",q="FAILURE",J="FAILURE_USERNAME",P="NONE",H="SUCCESS",K="FAILURE",z="FAILURE_NAME",B="NONE",W="SUCCESS",X=(n(74),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetMe()}},{key:"render",value:function(){var e=this,t="/info",n="\uc624\ub80c\uc9c0\ub18d\uc7a5 \uc18c\uac1c",a=null;this.props.getMeStatus===q?"/info"===this.props.pathname?(t="/intro",n="\ub85c\uadf8\uc778"):this.props.history.push("/intro"):(a=r.a.createElement("li",{className:"main-header-li"},r.a.createElement("button",{className:"logout-button",type:"button",onClick:function(){return e.props.onLogout().then((function(){e.props.logoutStatus===D&&(e.props.history.push("/intro"),window.location.reload())}))}},"\ub85c\uadf8\uc544\uc6c3")),"/intro"===this.props.pathname?this.props.history.push("/"):"/"!==this.props.pathname&&(t="/",n="\uba54\uc778 \ud398\uc774\uc9c0"));var c=null;return"/intro"!==this.props.pathname&&"/info"!==this.props.pathname&&(c=r.a.createElement("li",{className:"main-header-li main-header-li-hello"},this.props.me.username,"\ub2d8 \uc548\ub155\ud558\uc138\uc694!\xa0\xa0")),r.a.createElement("ul",{className:"main-header"},c,r.a.createElement("li",{className:"main-header-li"},r.a.createElement("button",{className:"header-page-button",type:"button",onClick:function(){return e.props.history.push(t)}},n)),a)}}]),n}(a.Component)),Y=Object(o.c)((function(e){return{pathname:e.router.location.pathname,getMeStatus:e.user.getMeStatus,loginStatus:e.user.loginStatus,logoutStatus:e.user.logoutStatus,me:e.user.me}}),(function(e){return{onGetMe:function(){return e(R())},onLogout:function(){return e(M())}}}))(X),$=(n(75),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={username:"",password:""},a}return Object(d.a)(n,[{key:"clickLoginHandler",value:function(){var e=this;this.props.onLogin(this.state.username,this.state.password).then((function(){e.props.loginStatus===D?(e.props.history.push("/"),window.location.reload()):alert("\ub85c\uadf8\uc778\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4. \n\uc774\ub984\uacfc \ube44\ubc00\ubc88\ud638\ub97c \ud655\uc778\ud574 \uc8fc\uc138\uc694!")}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Login"),r.a.createElement("div",{className:"LoginField"},r.a.createElement("input",{id:"username",type:"text",placeholder:"username",onChange:function(t){return e.setState({username:t.target.value})}}),r.a.createElement("input",{id:"password",type:"password",placeholder:"password",onChange:function(t){return e.setState({password:t.target.value})}})),r.a.createElement("button",{type:"button",className:"LoginButton",disabled:!this.state.username||!this.state.password,onClick:function(){return e.clickLoginHandler()}},"go"))}}]),n}(a.Component)),Q=Object(o.c)((function(e){return{loginStatus:e.user.loginStatus,user:e.user.login}}),(function(e){return{onLogin:function(t,n){return e(F(t,n))}}}))($),Z=(n(76),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).create=function(){a.props.create(a.state.name,a.state.option,a.state.description,a.state.price).then((function(){console.log(a.props.createStatus),a.props.createStatus===H?(window.alert("\uc785\ub825 \uc644\ub8cc!"),a.props.restoreModal()):a.props.createStatus===z?window.alert("\uc774\ubbf8 \uc874\uc7ac\ud558\ub294 \uc0dd\ud544\ud488\uc785\ub2c8\ub2e4."):window.alert("\uc2e4\ud328!")}))},a.state={appearing:!0,name:"",option:"",description:"",price:0},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"necessity-create-modal",style:this.state.appearing?{display:"block"}:{display:"none"}},r.a.createElement("form",null,r.a.createElement("button",{className:"necessity-create-close",onClick:function(){return e.props.restoreModal},type:"submit",title:"Close Modal",style:{background:"none",border:"none"}},"\xd7")),r.a.createElement("form",{className:"necessity-create-modal-content"},r.a.createElement("div",{className:"necessity-create-container"},r.a.createElement("p",null,"\uc0dd\ud544\ud488 \uc815\ubcf4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),r.a.createElement("hr",null),r.a.createElement("label",{htmlFor:"name"},r.a.createElement("b",null,"\uc0dd\ud544\ud488 (Necessity)")),r.a.createElement("input",{type:"text",placeholder:"\uc624\ub80c\uc9c0",required:!0,onChange:function(t){return e.setState({name:t.target.value})}}),r.a.createElement("label",{htmlFor:"option"},r.a.createElement("b",null,"\uc635\uc158 (Option)")),r.a.createElement("input",{type:"text",placeholder:"\ubc1c\ub80c\uc2dc\uc544 \ud488\uc885",required:!0,onChange:function(t){return e.setState({option:t.target.value})}}),r.a.createElement("label",{htmlFor:"description"},r.a.createElement("b",null,"\uc124\uba85 (Description)")),r.a.createElement("input",{type:"text",placeholder:"\uc2dd\ud6c4 \ube44\ud0c0\ubbfc C \uc12d\ucde8\uc6a9",required:!0,onChange:function(t){return e.setState({description:t.target.value})}}),r.a.createElement("label",{htmlFor:"price"},r.a.createElement("b",null,"\uac00\uaca9 (Price)")),r.a.createElement("input",{type:"number",placeholder:"2900",required:!0,onChange:function(t){return e.setState({price:parseInt(t.target.value,10)})}}),r.a.createElement("div",{className:"necessity-create-clearfix"},r.a.createElement("button",{type:"button",className:"necessity-create-createbtn",disabled:""===this.state.name,onClick:this.create},"\uc0dd\ud544\ud488 \ub4f1\ub85d")))))}}]),n}(a.Component)),ee=Object(o.c)((function(e){return{createStatus:e.necessity.createStatus,me:e.user.me}}),(function(e){return{create:function(t,n,a,r){return e(T(t,n,a,r))}}}))(Z);n(77);var te=function(){var e=new Date,t=e.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}),n=e.toLocaleDateString("ko-KR",{weekday:"long"});return r.a.createElement("div",{className:"NecessityHeadBlock"},r.a.createElement("h1",null,t),r.a.createElement("div",{className:"day"},n))},ne=n(19),ae=n(20),re=n(25);function ce(){var e=Object(ne.a)(["\n    flex: 1;\n    font-size: 21px;\n    color: #495057;\n    .option {\n      color: #868e96;\n      font-size: 12px;\n    }\n}\n"]);return ce=function(){return e},e}function ie(){var e=Object(ne.a)(["\n    display: flex;\n    align-items: center;\n    padding-top: 12px;\n    padding-bottom: 12px;\n    &:hover {\n        ","{\n            display: initial;\n        }\n    }\n"]);return ie=function(){return e},e}function oe(){var e=Object(ne.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #F1948A;\n    font-size: 20px;\n    cursor: pointer;\n    &:hover {\n        color: #B03A2E;\n    }\n    display: none;\n"]);return oe=function(){return e},e}var se=ae.b.div(oe()),ue=ae.b.div(ie(),se),le=ae.b.div(ce());var me=Object(o.c)(null,(function(e){return{remove:function(t){return e(G(t))}}}))((function(e){return r.a.createElement(ue,{id:"necessity-item-".concat(e.id)},r.a.createElement(le,null,"".concat(e.name),r.a.createElement("span",{className:"option"}," ".concat(e.option," / ").concat(e.price,"\uc6d0 "))),r.a.createElement(se,{onClick:function(){return e.remove(e.necessityUserId)}},r.a.createElement(re.b,null)))}));n(78);var pe=Object(o.c)((function(e){return{necessities:e.necessity.necessities}}))((function(e){var t=e.necessities;return r.a.createElement("div",{className:"necessity-list-block"},Array.from(t).map((function(e){return r.a.createElement(me,{key:e.id,id:e.id,name:e.name,option:e.option,price:e.price,necessityUserId:e.necessity_user.id})})))}));n(79);var de=function(e){var t=e.children;return r.a.createElement("div",{className:"necessity-template-block"},t)},he=(n(80),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).signUp=function(){a.props.signUp(a.state.email,a.state.username,a.state.password).then((function(){a.props.signupStatus===D?(window.alert("\uc131\uacf5!"),a.setState({appearing:!1}),a.props.history.push("/")):a.props.signupStatus===J?window.alert("\uc911\ubcf5\ub41c \uc0ac\uc6a9\uc790 \uc774\ub984!"):window.alert("\uc2e4\ud328!")}))},a.state={appearing:!0,email:"",username:"",password:""},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"modal",style:this.state.appearing?{display:"block"}:{display:"none"}},r.a.createElement("form",null,r.a.createElement("button",{type:"submit",className:"close",title:"Close Modal",style:{background:"none",border:"none"}},"\xd7")),r.a.createElement("form",{className:"modal-content"},r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"\uc624\ub80c\uc9c0 \ub18d\uc7a5\uc744 \uc774\uc6a9\ud558\uae30 \uc804\uc5d0 \ud68c\uc6d0\uac00\uc785\uc744 \ud574\uc8fc\uc138\uc694"),r.a.createElement("hr",null),r.a.createElement("label",{htmlFor:"email"},r.a.createElement("b",null,"\uc774\uba54\uc77c (Email)")),r.a.createElement("input",{type:"text",placeholder:"haksaeng@snu.ac.kr",required:!0,onChange:function(t){return e.setState({email:t.target.value})}}),r.a.createElement("label",{htmlFor:"email"},r.a.createElement("b",null,"\uc774\ub984 (Name)")),r.a.createElement("input",{type:"text",placeholder:"Jinsup",required:!0,onChange:function(t){return e.setState({username:t.target.value})}}),r.a.createElement("label",{htmlFor:"psw"},r.a.createElement("b",null,"\ube44\ubc00\ubc88\ud638 (Password)")),r.a.createElement("input",{type:"password",placeholder:"Enter Password",required:!0,onChange:function(t){return e.setState({password:t.target.value})}}),r.a.createElement("div",{className:"clearfix"},r.a.createElement("button",{type:"button",className:"signupbtn",disabled:""===this.state.email||""===this.state.password||""===this.state.username,onClick:this.signUp},"\ud68c\uc6d0\uac00\uc785")))))}}]),n}(a.Component)),be=Object(o.c)((function(e){return{signupStatus:e.user.signupStatus,me:e.user.me}}),(function(e){return{signUp:function(t,n,a){return e(A(t,n,a))}}}))(he);n(81);var fe=function(){return r.a.createElement("div",{className:"study-info"},r.a.createElement("section",null,r.a.createElement("h2",{className:"deep-orange"},"\uc2a4\ud130\ub514 \uba64\ubc84"),r.a.createElement("ul",null,r.a.createElement("strong",null,"\uc6f9 \uac1c\ubc1c \ucc38\uc5ec"),r.a.createElement("li",null,r.a.createElement("a",{className:"VisitLink",onClick:function(){return window.open("https://github.com/davin111")}}," ","\ub2e4\ube48")),r.a.createElement("li",null,r.a.createElement("a",{className:"VisitLink",onClick:function(){return window.open("https://github.com/YeonghyeonKO")}}," ","\uc601\ud604")),r.a.createElement("li",null,r.a.createElement("a",{className:"VisitLink",onClick:function(){return window.open("https://github.com/JSKeum")}}," ","\uc9c4\uc12d")),r.a.createElement("br",null),r.a.createElement("strong",null,"\uc138\ubbf8\ub098 \ucc38\uc5ec"),r.a.createElement("li",null,r.a.createElement("a",{className:"VisitLink",onClick:function(){return window.open("https://github.com/anneKwon")}}," ","\ubbfc\uc7ac")),r.a.createElement("li",null,r.a.createElement("a",{className:"VisitLink",onClick:function(){return window.open("https://github.com/palpitate2015")}}," ","\uc0c1\ud604")),r.a.createElement("li",null,r.a.createElement("a",{className:"VisitLink",onClick:function(){return window.open("https://github.com/Eunsung-k")}}," ","\uc740\uc131")),r.a.createElement("li",null,r.a.createElement("a",{className:"VisitLink",onClick:function(){return window.open("https://github.com/jadeyyun")}}," ","\uc7ac\uc5f0")))),r.a.createElement("section",null,r.a.createElement("h2",{className:"deep-orange"},"GitHub"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{className:"VisitLink",onClick:function(){return window.open("https://github.com/gongmyeong-study")}},"GitHub \ubc29\ubb38\ud558\uae30")))),r.a.createElement("section",null,r.a.createElement("h2",{className:"deep-orange"},"Slack"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{className:"VisitLink",onClick:function(){return window.open("https://gongmyeongstudy.slack.com")}},"Slack \ubc29\ubb38\ud558\uae30")))))};var Ee=function(e){var t=e.logs.user.username,n=e.logs.necessity.name,a=new Date(e.logs.created_at).toLocaleString();return r.a.createElement("div",{className:"logList"},r.a.createElement("p",null,t," ","\uc774(\uac00)"," ","'",n,"'",function(){switch(e.logs.activity_category){case"CREATE":return"\ub97c(\uc744) \uc0dd\ud544\ud488 \ubaa9\ub85d\uc5d0 \ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4.";case"UPDATE":return"\ub97c(\uc744) \uc218\uc815\ud588\uc2b5\ub2c8\ub2e4.";case"DELETE":return"\ub97c(\uc744) \uc0dd\ud544\ud488 \ubaa9\ub85d\uc5d0\uc11c \uc0ad\uc81c\ud588\uc2b5\ub2c8\ub2e4.";default:return"\ub97c(\uc744) \uc218\uc815\ud588\uc2b5\ub2c8\ub2e4."}}()," ","(",a,")"))},ge=n(24);function ve(){var e=Object(ne.a)(["\n    body {\n        background: #e9ecef;\n    }\n"]);return ve=function(){return e},e}function ye(){var e=Object(ne.a)(["\n    background: #38d9a9;\n    &:hover {\n        background: #63e6be;\n    }\n    &:active {\n        opacity: 0.2;\n        background: #20c997;\n    }\n    \n    z-index: 0;\n    cursor: pointer;\n    width: 80px;\n    height: 80px;\n    display: block;\n    align-items: center;\n    justify-content: center;\n    font-size: 60px;\n    position: absolute;\n    left: 50%;\n    bottom: 0px;\n    transform: translate(-50%, 50%);\n    color: white;\n    border-radius: 50%;\n    border: none;\n    outline: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return ye=function(){return e},e}var Oe=ae.b.button(ye()),Se=Object(ae.a)(ve());var je=Object(o.c)(null,(function(e){return{get:function(){return e(I())}}}))((function(e){var t=Object(a.useState)(!1),n=Object(ge.a)(t,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){e.get()})),r.a.createElement(r.a.Fragment,null,r.a.createElement(Se,null),r.a.createElement(de,null,r.a.createElement(te,null),r.a.createElement(pe,null),r.a.createElement(Oe,{onClick:function(){return i(!0)}},r.a.createElement(re.a,null)),c?r.a.createElement(ee,{history:e.history,restoreModal:function(){i(!1)}}):null))})),ke=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"statistics-page"},"\ud1b5\uacc4 \ud398\uc774\uc9c0")}}]),n}(a.Component),we=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={logs:[],getLogStatus:B},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;u.a.get("/api/v1/necessity/log/").then((function(t){200===t.status&&e.setState({logs:t.data,getLogStatus:W})}))}},{key:"render",value:function(){var e=this.state,t=e.logs,n=e.getLogStatus,a=t.map((function(e){return r.a.createElement(Ee,{key:e.id,logs:e})}));return r.a.createElement("div",{className:"timeline-page"},"\ud0c0\uc784\ub77c\uc778 \ud398\uc774\uc9c0",n===W?a:null)}}]),n}(a.Component),Ce=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"work-page"},"\uac00\uc0ac\ub178\ub3d9 \uad00\ub9ac \ud398\uc774\uc9c0")}}]),n}(a.Component),Ne=(n(82),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={activeTab:0},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=null;switch(this.state.activeTab){case 1:t=r.a.createElement(Ce,null);break;case 2:t=r.a.createElement(we,{history:this.props.history});break;case 3:t=r.a.createElement(ke,null);break;default:t=r.a.createElement(je,{history:this.props.history})}return r.a.createElement("div",{className:"main-page"},r.a.createElement("div",{className:"main-tabs"},r.a.createElement("div",{className:"main-tab",id:"necessity-tab",onClick:function(){return e.setState({activeTab:0})},style:0===this.state.activeTab?{backgroundColor:"orange"}:{}},"\uc0dd\ud544\ud488 \uad00\ub9ac"),r.a.createElement("div",{className:"main-tab",id:"work-tab",onClick:function(){return e.setState({activeTab:1})},style:1===this.state.activeTab?{backgroundColor:"orange"}:{}},"\uac00\uc0ac\ub178\ub3d9 \uad00\ub9ac"),r.a.createElement("div",{className:"main-tab",id:"timeline-tab",onClick:function(){return e.setState({activeTab:2})},style:2===this.state.activeTab?{backgroundColor:"orange"}:{}},"\ud0c0\uc784\ub77c\uc778"),r.a.createElement("div",{className:"main-tab",id:"statistics-tab",onClick:function(){return e.setState({activeTab:3})},style:3===this.state.activeTab?{backgroundColor:"orange"}:{}},"\ud1b5\uacc4")),t)}}]),n}(a.Component));var Le=function(e){var t=Object(a.useState)(!1),n=Object(ge.a)(t,2),c=n[0],i=n[1];return r.a.createElement("div",null,r.a.createElement(Q,{history:e.history}),r.a.createElement("button",{onClick:function(){return i(!0)},type:"button"},"\ud68c\uc6d0\uac00\uc785"," "),c?r.a.createElement(be,{history:e.history}):null)},Ue=(n(83),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"info-ui"},r.a.createElement("main",null,r.a.createElement(fe,null)))}}]),n}(a.Component));n(84);var _e=function(e){return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,{history:e.history},r.a.createElement(Y,{history:e.history}),r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",component:Ne,history:e.history}),r.a.createElement(m.b,{exact:!0,path:"/intro",component:Le,history:e.history}),r.a.createElement(m.b,{exact:!0,path:"/info",component:Ue}),r.a.createElement(m.a,{exact:!0,to:"/intro"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var xe=n(18),Ae=n(47),Fe=n(42),Me=n(15),Re=n(1),Te={me:{},signupStatus:V,loginStatus:V,logoutStatus:V,getMeStatus:V},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0,n=t.target;switch(t.type){case f:return Object(Re.a)(Object(Re.a)({},e),{},{signupStatus:D,me:{id:n.id,username:n.username,email:n.email,lastLogin:n.last_login,dateJoined:n.date_joined}});case g:return Object(Re.a)(Object(Re.a)({},e),{},{signupStatus:J});case E:return Object(Re.a)(Object(Re.a)({},e),{},{signupStatus:q});case v:return Object(Re.a)(Object(Re.a)({},e),{},{loginStatus:D,me:{id:n.id,username:n.username,email:n.email,lastLogin:n.last_login,dateJoined:n.date_joined}});case y:return Object(Re.a)(Object(Re.a)({},e),{},{loginStatus:q});case O:return Object(Re.a)(Object(Re.a)({},e),{},{logoutStatus:D});case S:return Object(Re.a)(Object(Re.a)({},e),{},{logoutStatus:q});case j:return Object(Re.a)(Object(Re.a)({},e),{},{me:{id:n.id,username:n.username,email:n.email,lastLogin:n.last_login,dateJoined:n.date_joined},getMeStatus:D});case k:return Object(Re.a)(Object(Re.a)({},e),{},{getMeStatus:q});default:return Object(Re.a)({},e)}},Ge={createStatus:P,getStatus:P,removeStatus:P,necessities:[]};var Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0,n=t.target;switch(t.type){case _:return Object(Re.a)(Object(Re.a)({},e),{},{getStatus:H,necessities:n});case x:return Object(Re.a)(Object(Re.a)({},e),{},{getStatus:K});case w:return Object(Re.a)(Object(Re.a)({},e),{},{createStatus:H,necessities:n});case C:return Object(Re.a)(Object(Re.a)({},e),{},{createStatus:K});case N:return Object(Re.a)(Object(Re.a)({},e),{},{createStatus:z});case L:return Object(Re.a)(Object(Re.a)({},e),{},{removeStatus:H,necessities:n});case U:return Object(Re.a)(Object(Re.a)({},e),{},{removeStatus:K});default:return Object(Re.a)({},e)}},De=function(e){return Object(xe.c)({user:Ie,necessity:Ve,router:Object(l.b)(e)})},qe=Object(Me.a)(),Je=[function(e){return function(t){return function(n){window.console.log("[Middleware] Dispatching",n);var a=t(n);return window.console.log("[Middleware] Next State",e.getState()),a}}},Ae.a,Object(Fe.a)(qe)],Pe=Object(xe.d)(De(qe),xe.a.apply(void 0,Je));i.a.render(r.a.createElement(o.a,{store:Pe},r.a.createElement(_e,{history:qe})),document.getElementById("root")),u.a.defaults.xsrfHeaderName="X-CSRFTOKEN",u.a.defaults.xsrfCookieName="csrftoken","serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.92b6061e.chunk.js.map