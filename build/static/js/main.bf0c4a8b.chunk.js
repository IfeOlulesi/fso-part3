(this.webpackJsonppractice=this.webpackJsonppractice||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var c=n(12),r=n.n(c),o=n(10),i=n(4),a=n(3),u=n(2),s=function(t){var e=t.note,n=t.toggleImportance,c=e.important?"make not important":"make important";return Object(u.jsxs)("li",{className:"note",children:[e.content,Object(u.jsx)("button",{onClick:n,children:c})]},e.id)},l=n(25),j="api/notes",f=function(){return l.a.get(j).then((function(t){return t.data}))},b=function(t){return l.a.post(j,t).then((function(t){return t.data}))},d=function(t,e){return l.a.put("".concat(j,"/").concat(t),e).then((function(t){return t.data}))},h=function(){return Object(u.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(u.jsx)("br",{}),Object(u.jsxs)("em",{children:["Note app, Built with \ud83d\udc9c by ",Object(u.jsx)("a",{href:"https://github.com/IfeOlulesi",children:"Ife Olulesi"})," 2021"]})]})},O=function(t){var e=t.message;return null===e?null:Object(u.jsx)("div",{className:"error",children:e})},p=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),l=Object(i.a)(r,2),j=l[0],p=l[1],m=Object(a.useState)(!0),x=Object(i.a)(m,2),v=x[0],g=x[1],S=Object(a.useState)(null),y=Object(i.a)(S,2),k=y[0],w=y[1];Object(a.useEffect)((function(){f().then((function(t){c(t)}))}),[]);var I=v?n:n.filter((function(t){return t.important}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsx)(O,{message:k}),Object(u.jsx)("ul",{children:I.map((function(t,e){return Object(u.jsx)(s,{note:t,toggleImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),r=Object(o.a)(Object(o.a)({},e),{},{important:!e.important});d(t,r).then((function(e){c(n.map((function(n){return n.id!==t?n:e})))})).catch((function(r){w("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){w(null)}),5e3),c(n.filter((function(e){return e.id!==t})))}))}(t.id)}},e)}))}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={id:n.length+1,content:j,date:(new Date).toISOString(),important:Math.random()>.5};b(e).then((function(t){c(n.concat(t)),p("")}))},children:[Object(u.jsx)("input",{value:j,onChange:function(t){p(t.target.value)},placeholder:"type here..."}),Object(u.jsx)("button",{type:"submit",children:"Save Note"}),Object(u.jsxs)("button",{onClick:function(t){t.preventDefault(),g(!v)},children:["Show ",v?"important":"all"]})]}),Object(u.jsx)(h,{})]})};n(22);r.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.bf0c4a8b.chunk.js.map