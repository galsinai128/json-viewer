(this["webpackJsonpjson-viewer"]=this["webpackJsonpjson-viewer"]||[]).push([[0],{19:function(e,n,t){},20:function(e,n,t){},21:function(e,n,t){},22:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t(2),s=t.n(i),r=t(13),j=t.n(r),a=(t(19),t(3));t(20);var o=function(e){var n=e.sendRequest,t=Object(i.useState)(""),s=Object(a.a)(t,2),r=s[0],j=s[1];return Object(c.jsxs)("div",{className:"inputUrl",children:[Object(c.jsx)("div",{className:"title",children:"Please enter a url to retrive valid json and display in tree view:"}),Object(c.jsx)("input",{value:r,onChange:function(e){j(e.target.value)}}),Object(c.jsx)("button",{onClick:function(){return n(r)},children:"SEND"})]})};t(21);var u=function e(n){var t=n.currentNode,s=Object(i.useState)({}),r=Object(a.a)(s,2),j=r[0],o=r[1],u=t?Object.keys(t):[];return Object(i.useEffect)((function(){var e={};u.map((function(n){e[n]=!0})),o(Object.assign({},e))}),[]),null===t||void 0===t?Object(c.jsx)("div",{children:"null"}):u.length?Object(c.jsx)("div",{className:"Tree",children:u.map((function(n){var i=j[n]?"\u25b2":"\u25bc";return"object"===typeof t[n]?Object(c.jsxs)("div",{onClick:function(e){e.stopPropagation();var t=Object.assign({},j);t[n]=!t[n],o(Object.assign({},t))},children:[Object(c.jsx)("div",{children:i+" "+n+" : "}),j[n]?null:Object(c.jsx)(e,{currentNode:t[n]})]}):"function"===typeof t[n]?Object(c.jsxs)("div",{className:"nodeNoChild",children:[Object(c.jsx)("span",{children:n+": "}),Object(c.jsx)("span",{children:t[n].toString()})]}):Object(c.jsxs)("div",{className:"nodeNoChild",children:[Object(c.jsx)("span",{children:n+": "}),Object(c.jsx)("span",{children:t[n]})]})}))}):null},l=(t(22),t(23));var d=function(){var e=Object(i.useState)(null),n=Object(a.a)(e,2),t=n[0],s=n[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(o,{sendRequest:function(e){(function(e){return l.get(e)})(e).then((function(e){s(e)})).catch((function(e){s(null)}))}}),t?Object(c.jsx)(u,{currentNode:t}):Object(c.jsx)("div",{children:"nothing to display"})]})},b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,s=n.getLCP,r=n.getTTFB;t(e),c(e),i(e),s(e),r(e)}))};j.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root")),b()}},[[41,1,2]]]);
//# sourceMappingURL=main.9640fbd9.chunk.js.map