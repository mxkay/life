(this["webpackJsonplife-new"]=this["webpackJsonplife-new"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),i=n(3),a=n.n(i),l=(n(10),n(11),function(){return Object(r.jsxs)("header",{children:[Object(r.jsx)("h1",{children:"Conway's Game of Life"}),Object(r.jsx)("div",{className:"nav-wrapper",children:Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)("button",{children:"play"})}),Object(r.jsx)("li",{children:Object(r.jsx)("button",{children:"pause"})}),Object(r.jsx)("li",{children:Object(r.jsx)("button",{children:"reset"})})]})})})]})}),u=n(4),o=(n(12),function(e){var t=e.row,n=e.column,c=e.isAlive;return Object(r.jsx)("div",{className:"cell",id:"cell-".concat(t,"-").concat(n),style:{backgroundColor:"undefined"===typeof c?"red":c?"lightgray":"lightslategray"}})}),s=(n(13),function(e){var t=e.cellMatrix,n=e.matrixSize;return Object(r.jsx)("div",{id:"gameboard",style:{gridTemplateColumns:"repeat(".concat(n,",1fr)"),gridTemplateRows:"repeat(".concat(n,",1fr)")},children:t?t.map((function(e,t){return e.map((function(e,n){return Object(r.jsx)(o,{column:n,row:t,isAlive:e})}))})):Object(r.jsx)(r.Fragment,{})})}),j=function(e){var t=e.matrixSize,n=Object(c.useState)(Array(t).fill().map((function(e){return Array(t).fill(!1)}))),i=Object(u.a)(n,2),a=i[0],l=i[1];Object(c.useEffect)((function(){for(var e=[],n=0;n<t;n++){e.push([]);for(var r=0;r<t;r++)e[n][r]=Math.random()<.1}l(e)}),[]),Object(c.useEffect)((function(){var e=setInterval((function(){for(var e=[],t=0;t<a.length;t++){e.push([]);for(var n=0;n<a[t].length;n++)e[t].push(f(t,n))}l(e)}),0);return function(){return clearInterval(e)}}));var o=function(e,t){return(e%t+t)%t},j=function(e,t){var n=o(e,a.length),r=o(t,a[n].length);return a[n][r]},f=function(e,t){var n=0;return j(e-1,t-1)&&n++,j(e-1,t)&&n++,j(e-1,t+1)&&n++,j(e,t-1)&&n++,j(e,t+1)&&n++,j(e+1,t-1)&&n++,j(e+1,t)&&n++,j(e+1,t+1)&&n++,a[e][t]?!(n<2)&&(2===n||3===n||!(n>3)&&void 0):3===n};return Object(r.jsx)(s,{cellMatrix:a,matrixSize:t})},f=(n(14),function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(l,{}),Object(r.jsx)(j,{matrixSize:128})]})}),d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))};a.a.render(Object(r.jsx)(f,{}),document.getElementById("root")),d()}],[[15,1,2]]]);
//# sourceMappingURL=main.03b8f96a.chunk.js.map