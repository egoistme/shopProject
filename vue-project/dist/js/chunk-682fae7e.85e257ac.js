(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-682fae7e"],{"0688":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("数据总览")]),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v("操作按钮")])],1),a("shop-data")],1),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("销售专项")])]),a("shop-sales")],1)],1)},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"shop-data"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("total-sales",{attrs:{dailySales:t.singleShop.chartsData.dailySales,monthlySales:t.singleShop.chartsData.monthlySales}})],1),a("el-col",{attrs:{span:6}},[a("total-orders",{attrs:{totalOrders:t.singleShop.chartsData.totalOrders}})],1),a("el-col",{attrs:{span:6}},[a("today-users",{attrs:{todayUsers:t.singleShop.chartsData.todayUsers}})],1),a("el-col",{attrs:{span:6}},[a("credit-points",{attrs:{creditPoints:t.singleShop.chartsData.creditPoints}})],1)],1),a("div")],1)},i=[],o=a("5530"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("shop-common-card",{attrs:{title:"今日销售额",value:t.charts[t.charts.length-1]},scopedSlots:t._u([{key:"footer",fn:function(){return[a("span",[t._v("昨日销售额")]),a("span",{staticClass:"emphasis"},[t._v("￥"+t._s(t.charts[t.charts.length-2]))])]},proxy:!0}])},[[a("div",[a("div",{staticClass:"compare"},[a("span",[t._v("日同比")]),a("span",[t._v(t._s(t.dayCompare)+"%")]),a("div",{class:{increase:t.dayCompare>=0,decrease:t.dayCompare<0}})]),a("div",{staticClass:"compare"},[a("span",[t._v("月同比")]),a("span",[t._v(t._s(t.monthCompare)+"%")]),a("div",{class:{increase:t.monthCompare>=0,decrease:t.monthCompare<0}})])])]],2)},l=[],u=(a("b680"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"common-card"},[a("el-card",{attrs:{shadow:"hover"}},[a("div",{staticClass:"title"},[t._v(t._s(t.title))]),a("div",{staticClass:"value"},[t._v(t._s(t.value))]),a("div",{staticClass:"chart"},[t._t("default")],2),a("div",{staticClass:"line"}),a("div",{staticClass:"total"},[t._t("footer")],2)])],1)}),d=[],h=(a("a9e3"),{props:{title:String,value:{type:[Number,String]}}}),p=h,f=(a("51d3"),a("2877")),m=Object(f["a"])(p,u,d,!1,null,"37290420",null),y=m.exports,v={props:{dailySales:Array,monthlySales:Array},data:function(){return{charts:this.dailySales,mcharts:this.monthlySales}},computed:{dayCompare:function(){var t=this.charts[this.charts.length-1],e=this.charts[this.charts.length-2],a=(t-e)/t*100;return a=a.toFixed(2),a},monthCompare:function(){var t=this.mcharts[this.mcharts.length-1],e=this.mcharts[this.mcharts.length-2],a=(t-e)/t*100;return a=a.toFixed(2),a}},created:function(){},components:{ShopCommonCard:y}},g=v,b=(a("ae42"),Object(f["a"])(g,c,l,!1,null,"79b87954",null)),x=b.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("shop-common-card",{attrs:{title:"累计订单量",value:t.total},scopedSlots:t._u([{key:"footer",fn:function(){return[a("span",[t._v("昨日成交量")]),a("span",{staticClass:"emphasis"},[t._v(t._s(t.yesterdayOrder))])]},proxy:!0}])},[[a("div",{style:{width:"100%",height:"100%"},attrs:{id:"total-orders-charts"}})]],2)},_=[],C=(a("13d5"),{props:{totalOrders:Array},data:function(){return{chartsData:this.totalOrders,yesterdayOrder:this.totalOrders[this.totalOrders.length-2]}},computed:{total:function(){return this.chartsData.reduce((function(t,e){return t+e}),0)}},components:{ShopCommonCard:y},mounted:function(){var t=document.getElementById("total-orders-charts"),e=this.$echarts.init(t);e.setOption({tooltip:{axisPointer:{type:"cross",crossStyle:{color:"#999"}}},xAxis:{type:"category",show:!1,boundaryGap:!1},yAxis:{show:!1},series:[{type:"line",data:this.chartsData,areaStyle:{color:"purple"},lineStyle:{width:0},itemStyle:{opacity:0},smooth:!0}],grid:{top:0,bottom:0,left:0,right:0}})}}),w=C,E=Object(f["a"])(w,S,_,!1,null,null,null),A=E.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("shop-common-card",{attrs:{title:"今日交易用户数",value:t.chartsData[t.chartsData.length-1]},scopedSlots:t._u([{key:"footer",fn:function(){return[a("span",[t._v("退货率 ")]),a("span",{staticClass:"emphasis"},[t._v("5.12%")])]},proxy:!0}])},[[a("div",{style:{width:"100%",height:"100%"},attrs:{id:"today-users-charts"}})]],2)},O=[],k={props:{todayUsers:Array},data:function(){return{chartsData:this.todayUsers}},components:{ShopCommonCard:y},mounted:function(){var t=document.getElementById("today-users-charts"),e=this.$echarts.init(t);e.setOption({tooltip:{},color:["#3398DB"],series:[{type:"bar",data:this.chartsData,barWidth:"60%"}],xAxis:{type:"category",data:["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00"],show:!1},yAxis:{show:!1},grid:{top:0,bottom:0,left:0,right:0}})}},N=k,I=Object(f["a"])(N,D,O,!1,null,null,null),$=I.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("shop-common-card",{attrs:{title:"信用分",value:t.creditPoints},scopedSlots:t._u([{key:"footer",fn:function(){return[a("span",[t._v("昨日好评率 ")]),a("span",{staticClass:"emphasis"},[t._v("95%")])]},proxy:!0}])},[[a("div",{style:{width:"100%",height:"100%"},attrs:{id:"credit-points-charts"}})]],2)},R=[],T={components:{ShopCommonCard:y},props:{creditPoints:{type:[String,Number]}},mounted:function(){var t=document.getElementById("credit-points-charts"),e=this.$echarts.init(t);e.setOption({xAxis:{type:"value",show:!1},yAxis:{type:"category",show:!1},series:[{type:"bar",data:[650],barWidth:10,itemStyle:{color:"#45c946"},stack:"总量"},{type:"bar",data:[800],itemStyle:{color:"#ccc"},stack:"总量"},{type:"custom",data:[650],stack:"总量",renderItem:function(t,e){var a=e.value(0),r=e.coord([a,0]);return{type:"group",position:r,children:[{type:"path",shape:{d:"M0 767.909l512.029-511.913L1024 767.909 0 767.909z",x:-5,y:5,width:10,height:10},style:{fill:"#45c946"}},{type:"path",shape:{d:"M1024 255.996 511.971 767.909 0 255.996 1024 255.996z",x:-5,y:-15,width:10,height:10},style:{fill:"#45c946"}}]}}}],grid:{top:0,left:0,bottom:0,right:0}})}},F=T,M=Object(f["a"])(F,j,R,!1,null,null,null),B=M.exports,L=a("2f62"),P=Object(L["a"])("shops"),U=P.mapGetters,G={data:function(){return{}},components:{TotalSales:x,TotalOrders:A,TodayUsers:$,CreditPoints:B},computed:Object(o["a"])({},U(["singleShop"]))},W=G,V=(a("2495"),Object(f["a"])(W,n,i,!1,null,"d833d076",null)),Y=V.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"月度",name:"monthly"}},[a("monthly-sales",{attrs:{monthlySales:t.singleShop.chartsData.monthlySales,monthlySalesRank:t.singleShop.chartsData.monthlySalesRank}})],1),a("el-tab-pane",{attrs:{label:"日度",name:"daily"}},[a("daily-sales",{attrs:{dailySales:t.singleShop.chartsData.dailySales,dailySalesRank:t.singleShop.chartsData.dailySalesRank}})],1)],1)],1)},J=[],X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"rank"},[a("span",{staticClass:"rankTitle"},[t._v("销售排行")]),a("el-card",{staticClass:"box-card",attrs:{shadow:"hidden"}},t._l(t.dailySalesRank,(function(e,r){return a("div",{key:r,staticClass:"text item"},[t._v(t._s(r+1+"."+e))])})),0)],1)])},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chart"},[a("div",{attrs:{id:"daily-sales-charts"}})])}],H={props:{dailySales:Array,dailySalesRank:Array},data:function(){return{xAxisData:[]}},created:function(){this.getDays()},mounted:function(){var t=document.getElementById("daily-sales-charts"),e=this.$echarts.init(t);e.setOption({tooltip:{},color:["#3398DB"],series:[{name:"销售额",type:"bar",data:this.dailySales,barWidth:"60%"}],xAxis:{type:"category",data:this.xAxisData},yAxis:{type:"value",splitLine:{show:!1}}})},methods:{getDays:function(){var t=new Date;t.setDate(t.getDate()-15);for(var e,a=[],r=1,s=0;s<15;s++)e=t.getMonth()+1+"月"+t.getDate()+"日",a.push(e),t.setDate(t.getDate()+r);this.xAxisData=a}}},K=H,Q=(a("5c00"),Object(f["a"])(K,X,q,!1,null,"96e3cf0a",null)),Z=Q.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"rank"},[a("span",{staticClass:"rankTitle"},[t._v("销售排行")]),a("el-card",{staticClass:"box-card",attrs:{shadow:"hidden"}},t._l(t.monthlySalesRank,(function(e,r){return a("div",{key:r,staticClass:"text item"},[t._v(t._s(r+1+"."+e))])})),0)],1)])},et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chart"},[a("div",{attrs:{id:"monthly-sales-charts"}})])}],at={props:{monthlySales:Array,monthlySalesRank:Array},data:function(){return{xAxisData:[]}},created:function(){this.getMonths()},mounted:function(){var t=document.getElementById("monthly-sales-charts"),e=this.$echarts.init(t);e.setOption({tooltip:{},color:["#3398DB"],series:[{name:"销售额",type:"bar",data:this.monthlySales,barWidth:"60%"}],xAxis:{type:"category",data:this.xAxisData},yAxis:{type:"value",splitLine:{show:!1}}})},methods:{getMonths:function(){for(var t=[],e=new Date,a=e.getFullYear(),r=e.getMonth(),s=0;s<12;s++){var n="";r-1!==0||(r=12,a-=1);var i=r;i=i<10?"0"+i:i,n=a+"/"+i,r--,t.push(n)}this.xAxisData=t.reverse()}}},rt=at,st=(a("8f61"),Object(f["a"])(rt,tt,et,!1,null,"b38da518",null)),nt=st.exports,it=Object(L["a"])("shops"),ot=it.mapGetters,ct={components:{DailySales:Z,MonthlySales:nt},data:function(){return{activeName:"monthly"}},computed:Object(o["a"])({},ot(["singleShop"])),methods:{handleClick:function(t,e){console.log(t,e)}}},lt=ct,ut=(a("ef8d"),Object(f["a"])(lt,z,J,!1,null,"49ced592",null)),dt=ut.exports,ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"type-sales-chart"}})},pt=[],ft={mounted:function(){var t=document.getElementById("type-sales-chart"),e=this.$echarts.init(t);e.setOption({backgroundColor:"#2c343c",title:{text:"分类销售",left:"center",top:20,textStyle:{color:"#ccc"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},visualMap:{show:!1,min:80,max:600,inRange:{colorLightness:[0,1]}},series:[{name:"类别销售额",type:"pie",radius:"55%",center:["50%","50%"],data:[{value:335,name:"大娃"},{value:310,name:"六娃"},{value:274,name:"三娃"},{value:235,name:"四娃"},{value:400,name:"小金刚"}].sort((function(t,e){return t.value-e.value})),roseType:"radius",label:{color:"rgba(255, 255, 255, 0.3)"},labelLine:{lineStyle:{color:"rgba(255, 255, 255, 0.3)"},smooth:.2,length:10,length2:20},itemStyle:{color:"#c23531",shadowBlur:200,shadowColor:"rgba(0, 0, 0, 0.5)"},animationType:"scale",animationEasing:"elasticOut",animationDelay:function(t){return 200*Math.random()}}]})}},mt=ft,yt=(a("1128"),Object(f["a"])(mt,ht,pt,!1,null,"d4a8b0da",null)),vt=yt.exports,gt=Object(L["a"])("shops"),bt=(gt.mapState,gt.mapActions,gt.mapMutations,{components:{ShopData:Y,ShopSales:dt,TypeSales:vt}}),xt=bt,St=(a("c19d"),Object(f["a"])(xt,r,s,!1,null,"1d688ccc",null));e["default"]=St.exports},"0d8a":function(t,e,a){},1128:function(t,e,a){"use strict";var r=a("0d8a"),s=a.n(r);s.a},1148:function(t,e,a){"use strict";var r=a("a691"),s=a("1d80");t.exports="".repeat||function(t){var e=String(s(this)),a="",n=r(t);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(a+=e);return a}},"13d5":function(t,e,a){"use strict";var r=a("23e7"),s=a("d58f").left,n=a("a640"),i=a("ae40"),o=n("reduce"),c=i("reduce",{1:0});r({target:"Array",proto:!0,forced:!o||!c},{reduce:function(t){return s(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"1bb6":function(t,e,a){},2495:function(t,e,a){"use strict";var r=a("7423"),s=a.n(r);s.a},"30ac":function(t,e,a){},"408a":function(t,e,a){var r=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},"517c":function(t,e,a){},"51d3":function(t,e,a){"use strict";var r=a("6944"),s=a.n(r);s.a},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var r=a("1d80"),s=a("5899"),n="["+s+"]",i=RegExp("^"+n+n+"*"),o=RegExp(n+n+"*$"),c=function(t){return function(e){var a=String(r(e));return 1&t&&(a=a.replace(i,"")),2&t&&(a=a.replace(o,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},"5c00":function(t,e,a){"use strict";var r=a("517c"),s=a.n(r);s.a},"5e37":function(t,e,a){},6944:function(t,e,a){},7156:function(t,e,a){var r=a("861d"),s=a("d2bb");t.exports=function(t,e,a){var n,i;return s&&"function"==typeof(n=e.constructor)&&n!==a&&r(i=n.prototype)&&i!==a.prototype&&s(t,i),t}},7423:function(t,e,a){},"8f61":function(t,e,a){"use strict";var r=a("9fd8"),s=a.n(r);s.a},"9fd8":function(t,e,a){},a9e3:function(t,e,a){"use strict";var r=a("83ab"),s=a("da84"),n=a("94ca"),i=a("6eeb"),o=a("5135"),c=a("c6b6"),l=a("7156"),u=a("c04e"),d=a("d039"),h=a("7c73"),p=a("241c").f,f=a("06cf").f,m=a("9bf2").f,y=a("58a8").trim,v="Number",g=s[v],b=g.prototype,x=c(h(b))==v,S=function(t){var e,a,r,s,n,i,o,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=y(l),e=l.charCodeAt(0),43===e||45===e){if(a=l.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+l}for(n=l.slice(2),i=n.length,o=0;o<i;o++)if(c=n.charCodeAt(o),c<48||c>s)return NaN;return parseInt(n,r)}return+l};if(n(v,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var _,C=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof C&&(x?d((function(){b.valueOf.call(a)})):c(a)!=v)?l(new g(S(e)),a,C):S(e)},w=r?p(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;w.length>E;E++)o(g,_=w[E])&&!o(C,_)&&m(C,_,f(g,_));C.prototype=b,b.constructor=C,i(s,v,C)}},ae42:function(t,e,a){"use strict";var r=a("1bb6"),s=a.n(r);s.a},b680:function(t,e,a){"use strict";var r=a("23e7"),s=a("a691"),n=a("408a"),i=a("1148"),o=a("d039"),c=1..toFixed,l=Math.floor,u=function(t,e,a){return 0===e?a:e%2===1?u(t,e-1,a*t):u(t*t,e/2,a)},d=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},h=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){c.call({})}));r({target:"Number",proto:!0,forced:h},{toFixed:function(t){var e,a,r,o,c=n(this),h=s(t),p=[0,0,0,0,0,0],f="",m="0",y=function(t,e){var a=-1,r=e;while(++a<6)r+=t*p[a],p[a]=r%1e7,r=l(r/1e7)},v=function(t){var e=6,a=0;while(--e>=0)a+=p[e],p[e]=l(a/t),a=a%t*1e7},g=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==p[t]){var a=String(p[t]);e=""===e?a:e+i.call("0",7-a.length)+a}return e};if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(f="-",c=-c),c>1e-21)if(e=d(c*u(2,69,1))-69,a=e<0?c*u(2,-e,1):c/u(2,e,1),a*=4503599627370496,e=52-e,e>0){y(0,a),r=h;while(r>=7)y(1e7,0),r-=7;y(u(10,r,1),0),r=e-1;while(r>=23)v(1<<23),r-=23;v(1<<r),y(1,1),v(2),m=g()}else y(0,a),y(1<<-e,0),m=g()+i.call("0",h);return h>0?(o=m.length,m=f+(o<=h?"0."+i.call("0",h-o)+m:m.slice(0,o-h)+"."+m.slice(o-h))):m=f+m,m}})},c19d:function(t,e,a){"use strict";var r=a("5e37"),s=a.n(r);s.a},d58f:function(t,e,a){var r=a("1c0b"),s=a("7b0b"),n=a("44ad"),i=a("50c4"),o=function(t){return function(e,a,o,c){r(a);var l=s(e),u=n(l),d=i(l.length),h=t?d-1:0,p=t?-1:1;if(o<2)while(1){if(h in u){c=u[h],h+=p;break}if(h+=p,t?h<0:d<=h)throw TypeError("Reduce of empty array with no initial value")}for(;t?h>=0:d>h;h+=p)h in u&&(c=a(c,u[h],h,l));return c}};t.exports={left:o(!1),right:o(!0)}},ef8d:function(t,e,a){"use strict";var r=a("30ac"),s=a.n(r);s.a}}]);
//# sourceMappingURL=chunk-682fae7e.85e257ac.js.map