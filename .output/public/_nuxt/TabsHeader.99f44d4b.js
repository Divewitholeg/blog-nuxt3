import{a as _,B as l,N as b,o as s,e as a,F as v,r as g,f as u,s as x,E as k,v as y,t as I,p as T,k as S,Y as C,m as $}from"./entry.6111eed9.js";/* empty css                       */const B=t=>(T("data-v-9b59cc28"),t=t(),S(),t),N={class:"tabs-header"},w=["onClick"],U=B(()=>u("span",{class:"tab"},null,-1)),q=[U],E=_({__name:"TabsHeader",props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},emits:["update:activeTabIndex"],setup(t,{emit:p}){const h=t,n=l(),r=l(),i=e=>{e&&(r.value.style.insetInlineStart=`${e.offsetLeft}px`,r.value.style.width=`${e.clientWidth}px`)},f=(e,c)=>{p("update:activeTabIndex",c),C(()=>i(e.target))};return b(n,e=>{e&&setTimeout(()=>{i(n.value.children[h.activeTabIndex])},50)},{immediate:!0}),(e,c)=>(s(),a("div",N,[t.tabs?(s(),a("div",{key:0,ref_key:"tabsRef",ref:n,class:"tabs"},[(s(!0),a(v,null,g(t.tabs,({label:d},o)=>(s(),a("button",{key:`${o}${d}`,class:y([t.activeTabIndex===o?"active":"not-active"]),onClick:m=>f(m,o)},I(d),11,w))),128)),u("span",{ref_key:"highlightUnderline",ref:r,class:"highlight-underline"},q,512)],512)):x("",!0),k(e.$slots,"footer",{},void 0,!0)]))}}),L=$(E,[["__scopeId","data-v-9b59cc28"]]);export{L as default};
