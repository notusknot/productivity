function _(){}function m(t){return t()}function $(){return Object.create(null)}function h(t){t.forEach(m)}function y(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function x(t,...n){if(t==null)return _;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}let i;function f(t){i=t}function l(){if(!i)throw new Error("Function called outside component initialization");return i}function E(t){l().$$.on_destroy.push(t)}function j(t,n){return l().$$.context.set(t,n),n}function R(t){return l().$$.context.get(t)}Promise.resolve();const b=/[&"]/g,g=/[&<]/g;function w(t,n=!1){const e=String(t),o=n?b:g;o.lastIndex=0;let u="",r=0;for(;o.test(e);){const c=o.lastIndex-1,s=e[c];u+=e.substring(r,c)+(s==="&"?"&amp;":s==='"'?"&quot;":"&lt;"),r=c+1}return u+e.substring(r)}function S(t,n){let e="";for(let o=0;o<t.length;o+=1)e+=n(t[o],o);return e}const T={$$render:()=>""};function v(t,n){if(!t||!t.$$render)throw n==="svelte:component"&&(n+=" this={...}"),new Error(`<${n}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${n}>.`);return t}let a;function C(t){function n(e,o,u,r,c){const s=i,d={on_destroy:a,context:new Map(c||(s?s.$$.context:[])),on_mount:[],before_update:[],after_update:[],callbacks:$()};f({$$:d});const p=t(e,o,u,r);return f(s),p}return{render:(e={},{$$slots:o={},context:u=new Map}={})=>{a=[];const r={title:"",head:"",css:new Set},c=n(r,e,{},o,u);return h(a),{html:c,css:{code:Array.from(r.css).map(s=>s.code).join(`
`),map:null},head:r.title+r.head}},$$render:n}}function O(t,n,e){if(n==null||e&&!n)return"";const o=e&&n===!0?"":`="${w(n,!0)}"`;return` ${t}${o}`}export{y as a,x as b,C as c,O as d,w as e,S as f,R as g,T as m,_ as n,E as o,j as s,v};
