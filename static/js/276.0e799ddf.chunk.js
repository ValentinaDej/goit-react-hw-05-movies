"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[276],{276:function(r,e,t){t.r(e);var n=t(433),a=t(413),u=t(861),c=t(439),s=t(757),i=t.n(s),o=t(689),p=t(791),f=t(106),l=t(184);e.default=function(){var r=(0,p.useState)({items:[],loading:!1,error:null}),e=(0,c.Z)(r,2),t=e[0],s=e[1],v=(0,o.UO)().movieId;(0,p.useEffect)((function(){var r=function(){var r=(0,u.Z)(i().mark((function r(){var e;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s((0,a.Z)((0,a.Z)({},t),{},{loading:!0,error:null})),r.prev=1,r.next=4,(0,f.ep)(v);case 4:e=r.sent,s((function(r){return(0,a.Z)((0,a.Z)({},r),{},{items:(0,n.Z)(e)})})),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),s((function(e){return(0,a.Z)((0,a.Z)({},e),{},{error:r.t0})}));case 11:return r.prev=11,s((function(r){return(0,a.Z)((0,a.Z)({},r),{},{loading:!1})})),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[1,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[v,t]);var d=t.items.map((function(r){var e=r.cast_id,t=r.original_name,n=r.character,a=r.profile_path;return(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{children:t}),(0,l.jsx)("span",{children:n}),a&&(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(a),alt:t})]},e)}));return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{children:(0,l.jsx)("section",{children:d})})})}},106:function(r,e,t){t.d(e,{TT:function(){return l},XM:function(){return i},Z0:function(){return f},ep:function(){return p},ts:function(){return o}});var n=t(861),a=t(757),u=t.n(a),c=t(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{language:"en-US"}}),s="7c4c8eade83a7a9829861e0d1ff26425",i=function(){var r=(0,n.Z)(u().mark((function r(){var e,t,n=arguments;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:1,r.next=3,c.get("trending/movie/day",{params:{api_key:s,page:e}});case 3:return t=r.sent,r.abrupt("return",t.data.results);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(u().mark((function r(e){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("movie/".concat(e),{params:{api_key:s}});case 2:return t=r.sent,r.abrupt("return",t.data);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(e){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("movie/".concat(e,"/credits"),{params:{api_key:s}});case 2:return t=r.sent,r.abrupt("return",t.data.cast);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(e){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("movie/".concat(e,"/reviews"),{params:{api_key:s}});case 2:return t=r.sent,console.log(t.data.results),r.abrupt("return",t.data.results);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(u().mark((function r(e){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("search/movie",{params:{api_key:s,query:e}});case 2:return t=r.sent,r.abrupt("return",t.data.results);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=276.0e799ddf.chunk.js.map