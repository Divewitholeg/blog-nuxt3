import{u as m}from"./index.f667ccd6.js";import{a as v,B as h,b as y,o as e,e as o,u as i,s as p,f as t,F as f,r as k,p as C,k as b,t as g,m as B}from"./entry.e2cd2524.js";/* empty css                     */const c=s=>(C("data-v-63eb7158"),s=s(),b(),s),S={key:0,class:"copied"},w=c(()=>t("div",{class:"scrim"},null,-1)),x=c(()=>t("div",{class:"content"}," Copied! ",-1)),I=[w,x],T=c(()=>t("div",{class:"header"},[t("div",{class:"controls"},[t("div"),t("div"),t("div")]),t("div",{class:"title"}," Bash ")],-1)),F={class:"window"},N=c(()=>t("span",{class:"sign"},"$",-1)),V={class:"content"},j={key:1,class:"prompt"},q=v({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(s){const a=s,{copy:l}=m(),n=h("init"),r=y(()=>typeof a.content=="string"?[a.content]:a.content),_=u=>{l(r.value.join(`
`)).then(()=>{n.value="copied",setTimeout(()=>{n.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(u,A)=>(e(),o("div",{class:"terminal",onClick:_},[i(n)==="copied"?(e(),o("div",S,I)):p("",!0),T,t("div",F,[(e(!0),o(f,null,k(i(r),d=>(e(),o("span",{key:d,class:"line"},[N,t("span",V,g(d),1)]))),128))]),i(n)!=="copied"?(e(),o("div",j," Click to copy ")):p("",!0)]))}}),$=B(q,[["__scopeId","data-v-63eb7158"]]);export{$ as default};