import{Z as e,r as a,o as t,b as l,L as r,W as o,V as s,F as c,N as i,M as d,d as n,e as u,f as p,i as b,w as m,X as _,g as f,k as v,a3 as g,E as D,h as y,t as h}from"./vendor.236d97b5.js";/* empty css                     *//* empty css                 *//* empty css                  *//* empty css               *//* empty css              *//* empty css               *//* empty css             */import{_ as N,l as w,a as I,c as S}from"./index.aafdbd46.js";/* empty css                *//* empty css                  *//* empty css                 */const j=f("h3",null,"接码通道一_可选国家_都是实卡",-1),R={class:"swiper_intro"},k={class:"swiper_intro_item"},T=f("label",null,"选择项目",-1),P={class:"swiper_intro_item"},M=f("label",null,"选择国家",-1),V=f("h3",null,"活动订单",-1),C=f("br",null,null,-1),x=f("h3",null,"接码记录",-1);var z=N({__name:"Swiper",setup(N){e();const z=e(""),U=e("");let W;const E=a({selectloading:!1,servicelist:[],countrylist:[],isgetpriced:!1,selecttableData:[{countryName:"",serviceName:"",price:"",success_rate:""}],orderloading:!1,ordertableDataRes:[],ordertableData:[{countryName:"",serviceName:"",cc:"",phone:"",code:"",smsPrice:"",createTime:""}],orderInfo:{},logloading:!1,logtableData:[],logtableDataRes:[{countryName:"",serviceName:"",phone:"",code:"",smsPrice:"",createTime:""}]});t((()=>{F(),L()}));const F=()=>{l.get("/getSMS/servicelist").then((e=>{E.servicelist=e}))},L=()=>{l.post("/getSMS/countrylist",{serviceNo:1}).then((e=>{E.countrylist=e}))},X=async e=>{for(let a=0;a<E.servicelist.length;a++)if(z.value===E.servicelist[a].ID){E.selecttableData[0].serviceName=E.servicelist[a].name;break}l.post("/getSMS/countrylist",{serviceNo:z.value}).then((e=>{E.countrylist=e}))},Z=async e=>{for(let a=0;a<E.countrylist.length;a++)if(U.value===E.countrylist[a].country_id){E.selecttableData[0].countryName=E.countrylist[a].name;break}E.isgetpriced&&q()},q=()=>{E.isgetpriced=!0,l.post("/getSMS/price",{serviceNo:z.value,countryNo:U.value}).then((e=>{E.selecttableData[0].price=e.price,E.selecttableData[0].success_rate=e.success_rate}))},A=()=>{l.post("/getSMS/number",{serviceNo:z.value,countryNo:U.value}).then((e=>{E.ordertableData[0].countryName=e.countryName,E.ordertableData[0].serviceName=e.serviceName,E.ordertableData[0].cc="+"+e.cc,E.ordertableData[0].phone=e.phone,E.ordertableData[0].code="获取中。。。",E.ordertableData[0].smsPrice=e.smsPrice,E.ordertableData[0].createTime=e.creatTime,E.ordertableDataRes=E.ordertableData,w("orderId",e.orderId),E.logloading=!0,E.orderInfo=e,E.logtableDataRes[0].countryName=e.countryName,E.logtableDataRes[0].serviceName=e.serviceName,E.logtableDataRes[0].phone=e.phone,E.logtableDataRes[0].code="",E.logtableDataRes[0].smsPrice=e.smsPrice,E.logtableDataRes[0].createTime=e.creatTime,G()}))},B=()=>{I("orderId")&&l.post("/getSMS/cancel",{orderId:I("orderId")}).then((e=>{E.ordertableData[0].countryName="",E.ordertableData[0].serviceName="",E.ordertableData[0].cc="",E.ordertableData[0].phone="",E.ordertableData[0].code="",E.ordertableData[0].smsPrice="",E.ordertableData[0].createTime="",S("orderId"),window.clearInterval(W),E.logloading=!1}))},G=()=>{W=window.setInterval((()=>{setTimeout((()=>{l.post("/getSMS/code",{orderId:I("orderId")}).then((e=>{3===e.status&&(E.logtableDataRes[0].code=e.full_sms,E.ordertableDataRes[0].code=E.logtableDataRes[0].code,E.logtableData=E.logtableDataRes,window.clearInterval(W),E.logloading=!1)}))}),0)}),1e3)},H=()=>{D.error("无法再次请求电话号码，请稍后重试")};return(e,a)=>{const t=r,l=o,D=s,N=c,w=i,I=d,S=n("h7");return u(),p(_,null,[b(t,{class:"card_title"},{default:m((()=>[j])),_:1}),b(t,{class:"turthcard_container"},{default:m((()=>[f("div",R,[f("div",k,[T,b(D,{class:"swiper_select",modelValue:z.value,"onUpdate:modelValue":a[0]||(a[0]=e=>z.value=e),filterable:"",placeholder:"请选择服务",onChange:X},{default:m((()=>[b(l,{disabled:"",value:""},{default:m((()=>[v("请选择服务")])),_:1}),(u(!0),p(_,null,g(E.servicelist,(e=>(u(),y(l,{value:e.ID,label:e.name,key:e.ID},{default:m((()=>[v(h(e.name),1)])),_:2},1032,["value","label"])))),128))])),_:1},8,["modelValue"])]),f("div",P,[M,b(D,{class:"swiper_select",modelValue:U.value,"onUpdate:modelValue":a[1]||(a[1]=e=>U.value=e),filterable:"",placeholder:"请选择国家",onChange:Z},{default:m((()=>[b(l,{disabled:"",value:""},{default:m((()=>[v("请选择国家")])),_:1}),(u(!0),p(_,null,g(E.countrylist,(e=>(u(),y(l,{value:e.country_id,label:e.name,key:e.country_id},{default:m((()=>[v(h(e.name),1)])),_:2},1032,["value","label"])))),128))])),_:1},8,["modelValue"])])]),b(N,{type:"button",class:"swiper_submit",onClick:q},{default:m((()=>[v("获取参考价格")])),_:1}),b(I,{load:E.selectloading,data:E.selecttableData,"tooltip-effect":"dark",style:{width:"100%"}},{default:m((()=>[b(w,{prop:"countryName",label:"国家名称"}),b(w,{prop:"serviceName",label:"项目名称"}),b(w,{prop:"price",label:"参考价格￥"}),b(w,{prop:"success_rate",label:"来码率%"}),b(w,{prop:"createTime",label:"操作"},{default:m((()=>[b(N,{class:"swiper_got_number",type:"button",size:"mini",onClick:A},{default:m((()=>[v("获取号码")])),_:1})])),_:1})])),_:1},8,["load","data"]),b(t,null,{default:m((()=>[b(S,null,{default:m((()=>[v("请注意：获取的参考价格并不是实际价格，获取号码后会显示实际价格，如不满足您的需求可于2分钟后释放号码，将会自动退回冻结余额")])),_:1})])),_:1})])),_:1}),b(t,{class:"card_title"},{default:m((()=>[V])),_:1}),b(t,{class:"turthcard_container"},{default:m((()=>[b(I,{load:E.orderloading,data:E.ordertableDataRes,"tooltip-effect":"dark",style:{width:"100%"}},{default:m((()=>[b(w,{prop:"countryName",label:"国家"}),b(w,{prop:"serviceName",label:"项目名称"}),b(w,{prop:"cc",label:"国家区号"}),b(w,{prop:"phone",label:"手机号"}),b(w,{prop:"code",label:"验证码内容"}),b(w,{prop:"smsPrice",label:"消耗资金"}),b(w,{prop:"createTime",label:"时间"}),b(w,{label:"操作"},{default:m((()=>[b(N,{type:"button",class:"swiper_got_number",size:"mini",onClick:B},{default:m((()=>[v("释放")])),_:1})])),_:1})])),_:1},8,["load","data"]),b(t,null,{default:m((()=>[b(S,null,{default:m((()=>[v("该通道获取的号码会显示区号，例如获取的美国号码是：14076901042，前面的1则是+1的区号，代表美国号码。各个国家的区号都有所不同。请大家使用之前查阅相关资料"),C,v(" 注：2分钟后可手动释放号码，释放后冻结的相关余额会自动返回至您的账户.注：重用号码将会扣费！(费用跟首次一致)")])),_:1})])),_:1})])),_:1}),b(t,{class:"card_title"},{default:m((()=>[x])),_:1}),b(t,{class:"turthcard_container"},{default:m((()=>[b(I,{load:E.logloading,data:E.logtableData,"tooltip-effect":"dark",style:{width:"100%"}},{default:m((()=>[b(w,{prop:"countryName",label:"国家"}),b(w,{prop:"serviceName",label:"项目名称"}),b(w,{prop:"phone",label:"手机号"}),b(w,{prop:"code",label:"验证码内容"}),b(w,{prop:"smsPrice",label:"消耗资金"}),b(w,{prop:"createTime",label:"时间"}),b(w,{label:"操作"},{default:m((()=>[b(N,{type:"button",class:"swiper_got_number",size:"mini",onClick:H},{default:m((()=>[v("重用")])),_:1})])),_:1})])),_:1},8,["load","data"]),b(t,null,{default:m((()=>[b(S,null,{default:m((()=>[v("接码记录列表")])),_:1})])),_:1})])),_:1})],64)}}},[["__file","/Users/jsapw/WebstormProjects/sms_frontend/src/views/Swiper.vue"]]);export{z as default};
