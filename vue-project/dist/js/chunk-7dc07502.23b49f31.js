(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7dc07502"],{1777:function(t,e,a){},"17f7":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box",staticStyle:{"box-shadow":"0px 0px 10px gray",padding:"20px","border-radius":"0px",margin:"15px"}},[a("el-breadcrumb",{staticStyle:{"background-color":"#f2f2f2","border-radius":"10px",padding:"18px 10px","margin-bottom":"20px"},attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("我的店铺")]),a("el-breadcrumb-item",[t._v("店铺列表")])],1),a("users-view-charts",{attrs:{chartsData:t.datas}}),a("h1",[t._v("正在营业")]),a("div",{staticClass:"hr"}),a("article",[a("el-table",{staticStyle:{height:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{label:"店名",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-popover",[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{size:"medium"}},[t._v(t._s(e.row.name))])],1)])]}}])}),a("el-table-column",{attrs:{label:"信用评级",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.credit))])]}}])}),a("el-table-column",{attrs:{label:"申请日期",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.date))])]}}])}),a("el-table-column",{attrs:{label:"店铺描述",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.des))])]}}])}),a("el-table-column",{attrs:{label:"商品种类",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.type))])]}}])}),a("el-table-column",{attrs:{label:"封禁状态",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.isLift?a("span",{staticStyle:{"margin-left":"10px",color:"red"}},[t._v("封禁中")]):a("span",{staticStyle:{"margin-left":"10px",color:"green"}},[t._v("正常")])]}}])}),a("el-table-column",{attrs:{label:"进入店铺",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){return t.gogogo(e.row._id)}}},[t._v("进入店铺")])]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.give(e.row)}}},[t._v("修改信息")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.handleDelete(e.row._id)}}},[t._v("注销店铺")])]}}])})],1),a("div",{staticClass:"add",on:{click:t.toAdd}},[t._v("点击申请新店铺")])],1),a("h1",[t._v("等待审批")]),a("div",{staticClass:"hr"}),a("article",[a("el-table",{staticStyle:{height:"100%"},attrs:{data:t.waitData}},[a("el-table-column",{attrs:{label:"店名",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-popover",[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{size:"medium"}},[t._v(t._s(e.row.name))])],1)])]}}])}),a("el-table-column",{attrs:{label:"信用评级",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.credit))])]}}])}),a("el-table-column",{attrs:{label:"申请日期",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.date))])]}}])}),a("el-table-column",{attrs:{label:"店铺描述",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.des))])]}}])}),a("el-table-column",{attrs:{label:"商品种类",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.type))])]}}])}),a("el-table-column",{attrs:{label:"店铺编号",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row._id))])]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.give(e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.handleDelete(e.row._id)}}},[t._v("撤回申请")])]}}])})],1)],1),a("h1",[t._v("审批失败")]),a("div",{staticClass:"hr"}),a("article",[a("el-table",{staticStyle:{height:"100%"},attrs:{data:t.refuseData}},[a("el-table-column",{attrs:{label:"店名",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-popover",[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{size:"medium"}},[t._v(t._s(e.row.name))])],1)])]}}])}),a("el-table-column",{attrs:{label:"信用评级",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.credit))])]}}])}),a("el-table-column",{attrs:{label:"申请日期",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.date))])]}}])}),a("el-table-column",{attrs:{label:"店铺描述",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.des))])]}}])}),a("el-table-column",{attrs:{label:"商品种类",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.type))])]}}])}),a("el-table-column",{attrs:{label:"店铺编号",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row._id))])]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.to2(e.row)}}},[t._v("确定")])]}}])})],1)],1)],1)},s=[],r=(a("4de4"),a("4160"),a("159b"),a("5530")),i=(a("96cf"),a("1da1")),l=a("2f62"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"月度",name:"monthly"}},[a("monthly-view",{attrs:{chartsData:t.chartsData}})],1),a("el-tab-pane",{attrs:{label:"日度",name:"daily"}},[a("daily-view",{attrs:{chartsData:t.chartsData}})],1)],1)},c=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"daily-view"}})},d=[],f=(a("fb6a"),a("b0c0"),{props:{chartsData:Array},data:function(){return{xAxisData:[],legendData:[],seriesData:[]}},watch:{chartsData:function(){this.getLegendData(),this.getSeriesData(),this.renderCharts()}},created:function(){this.getDays()},mounted:function(){},methods:{renderCharts:function(){var t=document.getElementById("daily-view"),e=this.$echarts.init(t);e.setOption({title:{text:"店铺访问量"},tooltip:{trigger:"axis"},legend:{data:this.legendData},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:this.xAxisData},yAxis:{type:"value",splitLine:{show:!1}},series:this.seriesData})},getDays:function(){var t=new Date;t.setDate(t.getDate()-7);for(var e,a=[],n=1,s=0;s<7;s++)e=t.getMonth()+1+"月"+t.getDate()+"日",a.push(e),t.setDate(t.getDate()+n);this.xAxisData=a},getLegendData:function(){var t=[];this.chartsData.forEach((function(e){t.push(e.name)})),this.legendData=t},getSeriesData:function(){var t=[];this.chartsData.forEach((function(e){t.push({name:e.name,type:"line",smooth:!0,stack:"总量",data:e.chartsData.dailyViews.slice(e.chartsData.dailyViews.length-7)})})),this.seriesData=t}}}),h=f,p=(a("51bb"),a("2877")),m=Object(p["a"])(h,u,d,!1,null,null,null),g=m.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"monthly-view"}})},y=[],v={props:{chartsData:Array},data:function(){return{xAxisData:[],legendData:[],seriesData:[]}},watch:{chartsData:function(){this.getLegendData(),this.getSeriesData(),this.renderCharts()}},created:function(){this.getMonths()},methods:{renderCharts:function(){var t=document.getElementById("monthly-view"),e=this.$echarts.init(t);e.setOption({title:{text:"店铺访问量"},tooltip:{trigger:"axis"},legend:{data:this.legendData},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:this.xAxisData},yAxis:{type:"value",splitLine:{show:!1}},series:this.seriesData})},getLegendData:function(){var t=[];this.chartsData.forEach((function(e){t.push(e.name)})),this.legendData=t},getSeriesData:function(){var t=[];this.chartsData.forEach((function(e){t.push({name:e.name,type:"line",stack:"总量",smooth:!0,data:e.chartsData.monthlyViews.slice(e.chartsData.monthlyViews.length-6)})})),this.seriesData=t},getMonths:function(){for(var t=[],e=new Date,a=e.getFullYear(),n=e.getMonth(),s=0;s<6;s++){var r="";n-1!==0||(n=12,a-=1);var i=n;i=i<10?"0"+i:i,r=a+"/"+i,n--,t.push(r)}this.xAxisData=t.reverse()}}},_=v,w=(a("694a"),Object(p["a"])(_,b,y,!1,null,null,null)),S=w.exports,D={components:{DailyView:g,MonthlyView:S},props:{chartsData:Array},data:function(){return{activeName:"daily"}},methods:{handleClick:function(t,e){console.log(t,e)}}},x=D,k=Object(p["a"])(x,o,c,!1,null,"2ce27f73",null),A=k.exports,C=Object(l["a"])("shops"),O=(C.mapState,C.mapActions),E=C.mapMutations,$={components:{UsersViewCharts:A},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.changeShopsId(""),e.next=3,t.getOwnShopsSync(t.managerId);case 3:t.datas=e.sent.data,a=t.datas.filter((function(t){return 4==t.status})),a.length>0&&t.$notify({title:"审批",message:"您有申请被驳回，请到页面底部确认信息",type:"warning",duration:0}),n=t.datas.filter((function(t){return 5==t.status})),n.length>0&&t.$notify({title:"审批",message:"您有"+n.length+"个申请已通过审批，请注意查看您的新店铺",offset:100,duration:0,type:"success"}),n.forEach((function(e){e.status="1",t.updateShopsSync(e)}));case 9:case"end":return e.stop()}}),e)})))()},methods:Object(r["a"])(Object(r["a"])(Object(r["a"])({},O(["getOwnShopsSync","delShopsSync","updateShopsSync"])),E(["addOneShop","changeShopsId"])),{},{handleDelete:function(t){this.delShopsSync(t),this.datas=this.datas.filter((function(e){return e._id!=t}))},give:function(t){this.addOneShop(t),this.$router.push("/updateShops")},gogogo:function(t){this.changeShopsId(t),this.$router.push("/main/shopCharts")},toAdd:function(){this.$router.push("/addShops")},to2:function(t){t.status="2",this.updateShopsSync(t)}}),computed:{managerId:function(){return localStorage.managerId},tableData:function(){return this.datas.filter((function(t){return 1==t.status}))},waitData:function(){return this.datas.filter((function(t){return 3==t.status}))},refuseData:function(){return this.datas.filter((function(t){return 4==t.status}))}},data:function(){return{datas:[],agree:"",refuse:""}}},I=$,j=(a("43a6"),Object(p["a"])(I,n,s,!1,null,"42c36d3c",null));e["default"]=j.exports},"43a6":function(t,e,a){"use strict";var n=a("a6cd"),s=a.n(n);s.a},"51bb":function(t,e,a){"use strict";var n=a("e99b"),s=a.n(n);s.a},"694a":function(t,e,a){"use strict";var n=a("1777"),s=a.n(n);s.a},a6cd:function(t,e,a){},e99b:function(t,e,a){}}]);
//# sourceMappingURL=chunk-7dc07502.23b49f31.js.map