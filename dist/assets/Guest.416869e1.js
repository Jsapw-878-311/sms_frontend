import{r as e,o as a,b as t,e as l,f as s,i as o,w as r,a7 as n,X as i,a0 as c,M as u,R as p,Z as g,F as d,N as m,L as b,h as f,g as _,k as v,a8 as j,t as h,a9 as S,E as k,aa as w,ab as y}from"./vendor.236d97b5.js";/* empty css             *//* empty css                     *//* empty css                 *//* empty css               *//* empty css                   *//* empty css              *//* empty css               *//* empty css                  */import{_ as P}from"./index.44c5ba66.js";var C=P({__name:"Table",props:{action:String},setup(g,{expose:d}){const m=g,b=c(),{goTop:f}=b.appContext.config.globalProperties,_=e({loading:!1,tableData:[],total:0,currentPage:1,pageSize:10,multipleSelection:[]});a((()=>{v()}));const v=()=>{_.loading=!0,t.get(m.action,{params:{pageNumber:_.currentPage,pageSize:_.pageSize}}).then((e=>{_.tableData=e.list,_.total=e.totalCount,_.currentPage=e.currPage,_.loading=!1,f&&f()}))},j=e=>{_.multipleSelection=e},h=e=>{_.currentPage=e,v()};return d({state:_,getList:v}),(e,a)=>{const t=u,c=p;return l(),s(i,null,[o(t,{load:_.loading,data:_.tableData,"tooltip-effect":"dark",style:{width:"100%"},onSelectionChange:j},{default:r((()=>[n(e.$slots,"column")])),_:3},8,["load","data"]),o(c,{background:"",layout:"prev, pager, next",total:_.total,"page-size":_.pageSize,"current-page":_.currentPage,onCurrentChange:h},null,8,["total","page-size","current-page"])],64)}}},[["__file","/Users/jsapw/WebstormProjects/vue3-admin/src/components/Table.vue"]]);const x={class:"header"};var z=P({__name:"Guest",setup(e){let a=g(null);const s=()=>{a.value.state.multipleSelection.length?t.put("/users/0",{ids:a.value.state.multipleSelection.map((e=>e.userId))}).then((()=>{k.success("解除成功"),a.value.getList()})):k.error("请选择项")},n=()=>{a.value.state.multipleSelection.length?t.put("/users/1",{ids:a.value.state.multipleSelection.map((e=>e.userId))}).then((()=>{k.success("禁用成功"),a.value.getList()})):k.error("请选择项")};return(e,t)=>{const i=d,c=m,u=b;return l(),f(u,{class:"guest-container"},{header:r((()=>[_("div",x,[o(i,{type:"primary",icon:j(w),onClick:s},{default:r((()=>[v("解除禁用")])),_:1},8,["icon"]),o(i,{type:"danger",icon:j(y),onClick:n},{default:r((()=>[v("禁用账户")])),_:1},8,["icon"])])])),default:r((()=>[o(C,{action:"/users",ref_key:"table",ref:a},{column:r((()=>[o(c,{type:"selection",width:"55"}),o(c,{prop:"nickName",label:"昵称"}),o(c,{prop:"loginName",label:"登录名"}),o(c,{prop:"walletValue",label:"账户余额"}),o(c,{label:"身份状态"},{default:r((e=>[_("span",{style:S(0==e.row.lockedFlag?"color: green;":"color: red;")},h(0==e.row.lockedFlag?"正常":"禁用"),5)])),_:1}),o(c,{label:"是否注销"},{default:r((e=>[_("span",{style:S(0==e.row.lockedFlag?"color: green;":"color: red;")},h(0==e.row.isDeleted?"正常":"注销"),5)])),_:1}),o(c,{prop:"createTime",label:"注册时间"})])),_:1},512)])),_:1})}}},[["__file","/Users/jsapw/WebstormProjects/vue3-admin/src/views/Guest.vue"]]);export{z as default};
