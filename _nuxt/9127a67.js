(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{255:function(e,t,n){var content=n(257);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(83).default)("1b7833da",content,!0,{sourceMap:!1})},256:function(e,t,n){"use strict";n(255)},257:function(e,t,n){var r=n(82)(!1);r.push([e.i,".age-text{font-weight:bolder;font-size:xx-large}body{color:#121212;background-color:#fff}@media (color-index:48){body{color:#fff;background-color:#121212}}@media (prefers-color-scheme:dark){body{color:#fff;background-color:#121212}}",""]),e.exports=r},258:function(e,t,n){"use strict";n.r(t);n(22);var r=n(3),o=n(1),c=(n(169),o.a.extend({data:function(){return{difference:null}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$nuxt.isOnline){t.next=7;break}return t.next=3,e.$axios.$get("https://worldtimeapi.org/api/ip");case 3:r=t.sent,n=e.$moment(1e3*r.unixtime),t.next=8;break;case 7:n=e.$moment();case 8:o=e.$moment(13950972e5),e.$data.difference=e.$moment.preciseDiff(n,o,!0);case 10:case"end":return t.stop()}}),t)})))()}})),f=(n(256),n(46)),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col justify-center items-center h-full"},[e.difference?n("p",{staticClass:"age-text"},[e._v("\n    "+e._s(e.$t("java_is_old",{specifier:e.$tc("time.years",e.difference.years)+", "+e.$tc("time.months",e.difference.months)+" "+e.$t("and")+" "+e.$tc("time.days",e.difference.days)}))+"\n  ")]):n("p",{staticClass:"age-text"},[e._v("\n    "+e._s(e.$t("java_is_old",{specifier:e.$t("loading")}))+"\n  ")])])}),[],!1,null,null,null);t.default=component.exports}}]);