import{Z as e,u as a,a1 as t,r as s,o as l,a6 as r,Y as o,b as n,L as c,J as i,F as p,e as u,h as d,w as g,i as m,k as b,g as _}from"./vendor.236d97b5.js";/* empty css               *//* empty css              *//* empty css             */import{_ as f}from"./index.44c5ba66.js";/* empty css                *//* empty css                  */const y=_("h3",{class:"card-title"},[b("卡密购买地址： "),_("small",null,[_("a",{href:"https://www.beanstore.top/",target:"_blank"},"点我购买卡密")])],-1),v=_("div",{class:"categrey_kami_title"},[_("label",null,"请输入卡密")],-1);var j=f({__name:"Category",setup(_){e(null);const f=a(),j=t(),h=s({loading:!1,tableData:[],multipleSelection:[],total:0,currentPage:1,pageSize:10,type:"add",level:1,parent_id:0});l((()=>{k()})),r((()=>{console.log(h.pageSize)}));const w=f.afterEach((e=>{["category","level2","level3"].includes(e.name)&&k()}));o((()=>{w()}));const k=()=>{const{level:e=1,parent_id:a=0}=j.query;h.loading=!0,n.get("/categories",{params:{pageNumber:h.currentPage,pageSize:h.pageSize,categoryLevel:e,parentId:a}}).then((t=>{h.tableData=t.list,h.total=t.totalCount,h.currentPage=t.currPage,h.loading=!1,h.level=e,h.parentId=a}))};return(e,a)=>{const t=c,s=i,l=p;return u(),d(t,{class:"category-container"},{default:g((()=>[m(t,{class:"categrey_title"},{default:g((()=>[y])),_:1}),m(t,null,{default:g((()=>[v,m(s,{type:"password",name:"key",class:"form-control",placeholder:"卡密号码"})])),_:1}),m(l,{type:"button",class:"categrey_submit",onclick:"submit_send(this.form)"},{default:g((()=>[b("提交")])),_:1})])),_:1})}}},[["__file","/Users/jsapw/WebstormProjects/vue3-admin/src/views/Category.vue"]]);export{j as default};
