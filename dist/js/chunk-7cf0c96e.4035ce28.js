(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cf0c96e"],{1148:function(t,e,a){"use strict";var i=a("a691"),r=a("1d80");t.exports=function(t){var e=String(r(this)),a="",n=i(t);if(n<0||n==1/0)throw RangeError("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(a+=e);return a}},"192b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"douga"},[a("List",{attrs:{listData:t.listData}})],1)},r=[],n=a("1da1"),s=(a("96cf"),a("5265")),o={components:{List:s["a"]},data:function(){return{listData:{}}},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("../douga.json");case 2:a=e.sent,i=a.data,t.listData=i;case 5:case"end":return e.stop()}}),e)})))()}},c=o,l=a("2877"),u=Object(l["a"])(c,i,r,!1,null,null,null);e["default"]=u.exports},"408a":function(t,e,a){var i=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},5265:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list"},[a("p",{staticClass:"listTitle"},[t._v(t._s(t.listData.note))]),a("ol",t._l(t.listData.list,(function(e,i){return a("li",{key:e.aid},[a("div",{staticClass:"num"},[t._v(t._s(i+1))]),a("div",{staticClass:"img"},[a("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.toUrl(e.bvid)}}},[a("img",{attrs:{src:"https://dummyimage.com/114x70/00a1d6/fff.png&text=%E5%8D%A0%E4%B8%AA%E4%BD%8D%E7%BD%AE"}})])]),a("div",{staticClass:"content"},[a("h4",[a("a",{attrs:{href:"#/video/"+e.bvid,target:"_blank"}},[t._v(t._s(e.title))])]),a("div",{staticClass:"info"},[a("p",{staticClass:"detail"},[a("span",{staticClass:"data-box"},[t._v("播放："+t._s(t.toThousand(e.stat.view))+"万")]),a("span",{staticClass:"data-box"},[t._v("弹幕："+t._s(e.stat.danmaku)+"万")]),a("span",{staticClass:"data-box up-name"},[t._v("作者："+t._s(e.owner.name))])]),a("div",{staticClass:"pts"},[a("p",[t._v(t._s(e.score))]),a("p",[t._v("综合得分")])])]),e.others?a("div",{staticClass:"other"},[a("a",{staticClass:"other-link",attrs:{target:"_blank",href:"//www.bilibili.com/video/BV1Zv411x7hY"}},[t._v(t._s(e.others?e.others[0].title:""))])]):t._e()])])})),0)])},r=[],n=(a("b680"),{props:{listData:{type:Object,required:!0}},methods:{toThousand:function(t){return parseFloat((t/1e4).toFixed(1))},toUrl:function(t){this.$router.push({name:"video",params:{id:t}})}}}),s=n,o=(a("f52c"),a("2877")),c=Object(o["a"])(s,i,r,!1,null,null,null);e["a"]=c.exports},b680:function(t,e,a){"use strict";var i=a("23e7"),r=a("a691"),n=a("408a"),s=a("1148"),o=a("d039"),c=1..toFixed,l=Math.floor,u=function(t,e,a){return 0===e?a:e%2===1?u(t,e-1,a*t):u(t*t,e/2,a)},f=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},d=function(t,e,a){var i=-1,r=a;while(++i<6)r+=e*t[i],t[i]=r%1e7,r=l(r/1e7)},v=function(t,e){var a=6,i=0;while(--a>=0)i+=t[a],t[a]=l(i/e),i=i%e*1e7},h=function(t){var e=6,a="";while(--e>=0)if(""!==a||0===e||0!==t[e]){var i=String(t[e]);a=""===a?i:a+s.call("0",7-i.length)+i}return a},p=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){c.call({})}));i({target:"Number",proto:!0,forced:p},{toFixed:function(t){var e,a,i,o,c=n(this),l=r(t),p=[0,0,0,0,0,0],b="",_="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(b="-",c=-c),c>1e-21)if(e=f(c*u(2,69,1))-69,a=e<0?c*u(2,-e,1):c/u(2,e,1),a*=4503599627370496,e=52-e,e>0){d(p,0,a),i=l;while(i>=7)d(p,1e7,0),i-=7;d(p,u(10,i,1),0),i=e-1;while(i>=23)v(p,1<<23),i-=23;v(p,1<<i),d(p,1,1),v(p,2),_=h(p)}else d(p,0,a),d(p,1<<-e,0),_=h(p)+s.call("0",l);return l>0?(o=_.length,_=b+(o<=l?"0."+s.call("0",l-o)+_:_.slice(0,o-l)+"."+_.slice(o-l))):_=b+_,_}})},c4fa:function(t,e,a){},f52c:function(t,e,a){"use strict";a("c4fa")}}]);
//# sourceMappingURL=chunk-7cf0c96e.4035ce28.js.map