(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d2bf988"],{"495d":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("我的订单")]),n("el-row",[n("el-col",{attrs:{span:3}},[n("strong",[t._v("下单时间")])]),n("el-col",{attrs:{span:3}},[n("strong",[t._v("商品图片")])]),n("el-col",{attrs:{span:3}},[n("strong",[t._v("商品名称")])]),n("el-col",{attrs:{span:2}},[n("strong",[t._v("单价")])]),n("el-col",{attrs:{span:2}},[n("strong",[t._v("购买数量")])]),n("el-col",{attrs:{span:3}},[n("strong",[t._v("商品总价")])]),n("el-col",{attrs:{span:3}},[n("strong",[t._v("订单总价")])]),n("el-col",{attrs:{span:3}},[n("strong",[t._v("商家")])]),n("el-col",{attrs:{span:2}},[n("strong",[t._v("操作")])])],1),t._l(t.tableData,(function(e,r){return n("el-row",{key:r},[n("el-col",{attrs:{span:3}},[t._v(t._s(e[0].time))]),n("el-col",{attrs:{span:3}},t._l(e,(function(t){return n("div",{key:t._id},[n("img",{attrs:{src:"http://localhost:3000/images/"+t.good.image,alt:"",width:"80px",height:"80px"}})])})),0),n("el-col",{attrs:{span:3}},t._l(e,(function(e){return n("div",{key:e._id},[n("p",[t._v(t._s(e.good.name))])])})),0),n("el-col",{attrs:{span:2}},t._l(e,(function(e){return n("div",{key:e._id},[n("p",[t._v(t._s(e.good.price))])])})),0),n("el-col",{attrs:{span:2}},t._l(e,(function(e){return n("div",{key:e._id},[n("p",[t._v(t._s(e.num))])])})),0),n("el-col",{attrs:{span:3}},t._l(e,(function(e){return n("div",{key:e._id},[n("p",[t._v(t._s(e.good.price*e.num))])])})),0),n("el-col",{attrs:{span:3}},[n("div",[n("p",{staticClass:"total"},[t._v("￥"+t._s(t.total[r]))])])]),n("el-col",{attrs:{span:3}},t._l(e,(function(e){return n("div",{key:e._id},[n("p",[t._v(t._s(e.good.shopId.name))])])})),0),n("el-col",{attrs:{span:2}},[n("el-button",{attrs:{type:"warning"}},[t._v("删除")])],1)],1)}))],2)},a=[],s=(n("4160"),n("159b"),n("5530")),o=(n("96cf"),n("1da1")),c=n("2f62"),l=Object(c["a"])("cart"),i=l.mapActions,u={data:function(){return{tableData:[]}},computed:{total:function(){var t=[];return this.tableData.forEach((function(e){var n=0;e.forEach((function(t){n+=t.good.price*t.num})),t.push(n)})),t}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getOrdersAsync(localStorage.userId);case 2:n=e.sent,n.success&&(r=t.mergeArr(n.row),t.tableData=r,console.log(t.tableData));case 4:case"end":return e.stop()}}),e)})))()},methods:Object(s["a"])(Object(s["a"])({},i(["getOrdersAsync"])),{},{mergeArr:function(t){var e={},n=[];return t.forEach((function(t,r){if(e[t.time])n.forEach((function(e,n){e[0].time==t.time&&e.push(t)}));else{var a=[];a.push(t),n.push(a),e[t.time]=t}})),n}})},p=u,_=(n("7602"),n("2877")),d=Object(_["a"])(p,r,a,!1,null,"37e9cb96",null);e["default"]=d.exports},7602:function(t,e,n){"use strict";var r=n("9d9b"),a=n.n(r);a.a},"9d9b":function(t,e,n){}}]);
//# sourceMappingURL=chunk-3d2bf988.59796468.js.map