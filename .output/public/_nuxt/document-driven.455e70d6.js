import h from"./DocumentDrivenEmpty.0bebf51d.js";import L from"./ContentRenderer.a57f0d99.js";import x from"./DocumentDrivenNotFound.1c505b26.js";import{J as H,a as m,a6 as C,at as R,b as k,u as o,au as d,av as N,aw as i,ax as g,T as j,R as w,af as B,a7 as D,o as c,e as E,h as l,j as p,c as _}from"./entry.6111eed9.js";import"./ContentRendererMarkdown.44342859.js";/* empty css                                   */const T=m({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(s,t){const a=await d[s.name]().then(e=>e.default||e);return()=>w(a,t.attrs,t.slots)}}),A=m({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(s,t){const a=g("_route"),e=a===C()?R():a,n=k(()=>o(s.name)??e.meta.layout??"default");return()=>{const u=n.value&&n.value in d,r=e.meta.layoutTransition??N;return i(j,u&&r,{default:()=>i(T,u&&{key:n.value,name:n.value,...t.attrs},t.slots).default()}).default()}}}),$={class:"document-driven-page"},O=m({__name:"document-driven",setup(s){const{page:t,layout:a}=B();return t.value,D(t),(e,n)=>{const u=h,r=L,f=x,v=A;return c(),E("div",$,[l(v,{name:o(a)||"default"},{default:p(()=>[o(t)?(c(),_(r,{key:o(t)._id,value:o(t)},{empty:p(({value:y})=>[l(u,{value:y},null,8,["value"])]),_:1},8,["value"])):(c(),_(f,{key:1}))]),_:1},8,["name"])])}}});export{O as default};
