(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(53)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(21),c=n.n(l),u=(n(30),n(5)),i=n(1),o=n(2);n(31),n(32);function s(e){var t=e.title;return r.a.createElement("header",{className:"header"},t)}function m(){return r.a.createElement("div",{className:"navBar"},r.a.createElement(u.b,{to:"/"},r.a.createElement("input",{type:"button",value:"Start"})),r.a.createElement(u.b,{to:"/login"},r.a.createElement("input",{type:"button",value:"Login"})),r.a.createElement(u.b,{to:"/list"},r.a.createElement("input",{type:"button",value:"Neu"})),r.a.createElement(u.b,{to:"/user"},r.a.createElement("input",{type:"button",value:"Zettel"})))}var E=n(7),f=n.n(E),p=function(e){return f.a.get("/api/list/lists",e?{headers:{Authorization:"Bearer "+e}}:{}).then(function(e){return e.data})},d=function(e,t){return f.a.post("/api/list/addList",e,t?{headers:{Authorization:"Bearer "+t}}:{}).then(function(e){return e.data})},b=function(e,t){return f.a.get("/api/list/".concat(e),t?{headers:{Authorization:"Bearer "+t}}:{}).then(function(e){return e.data})},h=function(){return f.a.get("/api/zettel").then(function(e){return e.data})},v=function(e){return f.a.post("/auth/login",e).then(function(e){return e.data})},g=n(22),j=Object(a.createContext)({setJwt:function(){}});function O(e){var t=e.children,n=Object(a.useState)(),l=Object(o.a)(n,2),c=l[0],u=l[1],i=Object(a.useState)({}),s=Object(o.a)(i,2),m=s[0],E=s[1];return r.a.createElement(j.Provider,{value:{token:c,jwtDecoded:m,setJwt:function(e){u(e),E(Object(g.a)(e.toString()))}}},t)}var k=n(11),x=n.n(k),C=n(23);function w(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],l=t[1],c=Object(a.useContext)(j).token,u=function(){var e=Object(C.a)(x.a.mark(function e(t){var a;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={listName:n},e.t0=d(a,c),e.next=5,b(n,c);case 5:e.t1=e.sent,e.t0.then.call(e.t0,e.t1).catch(function(e){return console.log(e.message)}),l("");case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:u},r.a.createElement("div",{className:"addList_input"},r.a.createElement("input",{type:"text",placeholder:"Listenname",onChange:function(e){l(e.target.value)},value:n})),r.a.createElement("div",{className:"addList_button"},r.a.createElement("button",{type:"submit"},"Liste hinzuf\xfcgen")))}function y(){var e=Object(a.useState)(),t=Object(o.a)(e,2),n=t[0],l=t[1],c=Object(a.useContext)(j),i=c.token,E=c.jwtDecoded;Object(a.useEffect)(function(){f().catch(function(e){return console.log(e.message)})});var f=function(){return p(i).then(l)};return n?r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement(s,{title:"Zettel"}),r.a.createElement("h2",null," OrrA von ",null===E||void 0===E?void 0:E.sub),r.a.createElement(w,null)):r.a.createElement("div",{className:"mainpage"},r.a.createElement(m,null),r.a.createElement(s,{title:"Zettel App"}),"//ToDo Bild einf\xfcgen",r.a.createElement("p",{className:"credit"},"Photo by ",r.a.createElement("a",{href:"https://unsplash.com/@susan_wilkinson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Susan Wilkinson")," on ",r.a.createElement("a",{href:"https://unsplash.com/t/textures-patterns?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},"Unsplash")),r.a.createElement(u.b,{to:"/register"},"Registrieren"))}function S(){var e=Object(a.useState)(),t=Object(o.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(),u=Object(o.a)(c,2),E=u[0],f=u[1],p=Object(i.g)(),d=Object(a.useContext)(j).setJwt;return r.a.createElement("div",{className:"loginpage"},r.a.createElement(m,null),r.a.createElement(s,{title:"Anmelden"}),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v({name:n,password:E}).then(function(e){d(e),p("/list")}).catch(function(){return console.error("Error")})}},r.a.createElement("input",{type:"text",placeholder:"Nutzername",onChange:function(e){l(e.target.value)},value:n}),r.a.createElement("input",{type:"password",placeholder:"Passwort",onChange:function(e){f(e.target.value)},value:E}),r.a.createElement("button",{type:"submit"},"Login")))}function N(e){var t=e.children;return Object(a.useContext)(j).token?t:r.a.createElement(i.a,{to:"/login"})}function L(e){var t=e.anzahl,n=e.setAnzahl,a=e.artikel,l=e.setArtikel;return r.a.createElement("form",null,r.a.createElement("div",{className:"addField_input"},r.a.createElement("input",{type:"text",onChange:function(e){l(e.target.value)},value:a})),r.a.createElement("div",{className:"addField_input"},r.a.createElement("input",{type:"text",onChange:function(e){n(parseInt(e.target.value))},value:t})),r.a.createElement("div",{className:"addField_button"},r.a.createElement("button",{type:"submit"},"Add")))}function _(){var e=Object(i.h)(),t=Object(a.useState)(),n=Object(o.a)(t,2),l=n[0],c=n[1],u=Object(a.useState)(""),E=Object(o.a)(u,2),f=E[0],p=E[1],d=Object(a.useState)(0),h=Object(o.a)(d,2),v=h[0],g=h[1],O=Object(a.useContext)(j).token;Object(a.useEffect)(function(){k().then(function(){return console.log(l)}).catch(function(e){return console.log(e.message)})});var k=function(){return b(e.whichList,O).then(c)};return l?r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement(s,{title:"Zettel"}),r.a.createElement(L,{artikel:f,setArtikel:p,anzahl:v,setAnzahl:g})):r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement(s,{title:"Zettel erstellen"}),r.a.createElement(w,null))}var z=n(24);n(52);function A(e){var t=e.artikel,n=t.name,a=t.anzahl;return r.a.createElement("p",null,n,a,r.a.createElement("button",{onClick:function(){return e.buttonplus(e.index)}},"+"),r.a.createElement("button",{onClick:function(){return e.buttonminus(e.index)}},"-"),r.a.createElement("button",{onClick:function(){return e.button(e.index)}},"l\xf6schen"))}function B(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],l=t[1];Object(a.useEffect)(function(){h().then(function(e){return l(e)})},[]);var c=function(e){var t=Object(z.a)(n);t.splice(e,1),l(t)},u=function(){},i=function(){};return r.a.createElement("div",null,r.a.createElement("ul",null,n.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(A,{artikel:e,index:t,button:c,buttonminus:u,buttonplus:i}))})),r.a.createElement("button",{onClick:function(){l([])}},"Liste l\xf6schen"))}function F(){return r.a.createElement("div",{className:"userpage"},r.a.createElement(m,null),r.a.createElement(s,{title:"Zettel"}),r.a.createElement(B,null))}var D=function(){return r.a.createElement(u.a,null,r.a.createElement(O,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",element:r.a.createElement(y,null)}),r.a.createElement(i.b,{path:"/list",element:r.a.createElement(_,null)}),r.a.createElement(i.b,{path:"/lists/:whichList",element:r.a.createElement(N,null,r.a.createElement(_,null))}),r.a.createElement(i.b,{path:"/login",element:r.a.createElement(S,null)}),r.a.createElement(i.b,{path:"/user",element:r.a.createElement(F,null)}))))},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),l(e),c(e)})};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),Z()}},[[25,1,2]]]);
//# sourceMappingURL=main.058a8f3e.chunk.js.map