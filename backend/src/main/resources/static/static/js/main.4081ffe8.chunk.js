(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(47)},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(19),c=n.n(r),u=(n(26),n(5)),o=n(1);n(27),n(28);function i(e){var t=e.title;return l.a.createElement("header",{className:"header"},t)}function m(){return l.a.createElement("div",{className:"navBar"},l.a.createElement(u.b,{to:"/"},l.a.createElement("input",{type:"button",value:"Start"})),l.a.createElement(u.b,{to:"/login"},l.a.createElement("input",{type:"button",value:"Login"})),l.a.createElement(u.b,{to:"/list"},l.a.createElement("input",{type:"button",value:"Zettel"})))}var s=n(2),E=n(20),d=Object(a.createContext)({setJwt:function(){}});function b(e){var t=e.children,n=Object(a.useState)(),r=Object(s.a)(n,2),c=r[0],u=r[1],o=Object(a.useState)({}),i=Object(s.a)(o,2),m=i[0],b=i[1];return l.a.createElement(d.Provider,{value:{token:c,jwtDecoded:m,setJwt:function(e){u(e),b(Object(E.a)(e.toString()))}}},t)}function f(){var e=Object(a.useContext)(d).jwtDecoded;return l.a.createElement("div",null,l.a.createElement(m,null),l.a.createElement(i,{title:"Zettel"}),l.a.createElement("h2",null," Zettel von ",null===e||void 0===e?void 0:e.sub))}var v=n(9),h=n.n(v),p=function(e,t){return h.a.get("/api/list/".concat(e),t?{headers:{Authorization:"Bearer "+t}}:{}).then(function(e){return e.data})},g=function(e){return h.a.post("/auth/login",e).then(function(e){return e.data})};function j(){var e=Object(a.useState)(),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),u=Object(s.a)(c,2),E=u[0],b=u[1],f=Object(o.g)(),v=Object(a.useContext)(d).setJwt;return l.a.createElement("div",{className:"loginpage"},l.a.createElement(m,null),l.a.createElement(i,{title:"Anmelden"}),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),g({name:n,password:E}).then(function(e){v(e),f("/user")}).catch(function(){return console.error("Error")})}},l.a.createElement("input",{type:"text",placeholder:"Nutzername",onChange:function(e){r(e.target.value)},value:n}),l.a.createElement("input",{type:"password",placeholder:"Passwort",onChange:function(e){b(e.target.value)},value:E}),l.a.createElement("button",{type:"submit"},"Login")))}function O(e){var t=e.children;return Object(a.useContext)(d).token?t:l.a.createElement(o.a,{to:"/login"})}function w(e){var t=e.anzahl,n=e.setAnzahl,a=e.artikel,r=e.setArtikel;return l.a.createElement("form",null,l.a.createElement("div",{className:"addField_input"},l.a.createElement("input",{type:"text",onChange:function(e){r(e.target.value)},value:a})),l.a.createElement("div",{className:"addField_input"},l.a.createElement("input",{type:"text",onChange:function(e){n(parseInt(e.target.value))},value:t})),l.a.createElement("div",{className:"addField_button"},l.a.createElement("button",{type:"submit"},"Add")))}function C(){var e=Object(o.h)(),t=Object(a.useState)(),n=Object(s.a)(t,2),r=n[0],c=n[1],u=Object(a.useState)(""),E=Object(s.a)(u,2),b=E[0],f=E[1],v=Object(a.useState)(0),h=Object(s.a)(v,2),g=h[0],j=h[1],O=Object(a.useContext)(d).token;Object(a.useEffect)(function(){C().then(function(){return console.log(r)}).catch(function(e){return console.log(e.message)})});var C=function(){return p(e.whichList,O).then(c)};return r?l.a.createElement("div",null,l.a.createElement(m,null),l.a.createElement(i,{title:"Zettel"}),l.a.createElement(w,{artikel:b,setArtikel:f,anzahl:g,setAnzahl:j})):l.a.createElement("div",null,l.a.createElement(m,null),l.a.createElement(i,{title:"Zettel erstellen"}))}var S=function(){return l.a.createElement(u.a,null,l.a.createElement(b,null,l.a.createElement(o.d,null,l.a.createElement(o.b,{path:"/",element:l.a.createElement(f,null)}),l.a.createElement(o.b,{path:"/list",element:l.a.createElement(C,null)}),l.a.createElement(o.b,{path:"/lists/:whichList",element:l.a.createElement(O,null,l.a.createElement(C,null))}),l.a.createElement(o.b,{path:"/login",element:l.a.createElement(j,null)}))))},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then(function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),l(e),r(e),c(e)})};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),y()}},[[21,1,2]]]);
//# sourceMappingURL=main.4081ffe8.chunk.js.map