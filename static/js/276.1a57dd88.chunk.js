"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[276],{276:function(e,r,t){t.r(r);var n=t(433),a=t(861),u=t(439),c=t(757),s=t.n(c),i=t(689),o=t(791),p=t(106),f=t(184);r.default=function(){var e=(0,o.useState)([]),r=(0,u.Z)(e,2),t=r[0],c=r[1],v=(0,o.useState)(!1),d=(0,u.Z)(v,2),l=d[0],h=d[1],m=(0,o.useState)(null),x=(0,u.Z)(m,2),g=x[0],k=x[1],w=(0,i.UO)().movieId;(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),e.next=4,(0,p.ep)(w);case 4:r=e.sent,c((0,n.Z)(r)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),k(e.t0.message);case 11:return e.prev=11,h(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[w,c,h,k]);var y=t.map((function(e){var r=e.cast_id,t=e.original_name,n=e.character,a=e.profile_path;return(0,f.jsxs)("li",{children:[(0,f.jsx)("span",{children:t}),(0,f.jsx)("span",{children:n}),a&&(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(a),alt:t})]},r)}));return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{children:[y.length>0?(0,f.jsxs)("div",{children:[" ",y]}):(0,f.jsx)("div",{children:"We dont have any cast information"}),l&&(0,f.jsx)("p",{children:"...loading films"}),g&&(0,f.jsx)("p",{children:"...films load faild"})]})})}},106:function(e,r,t){t.d(r,{TT:function(){return v},XM:function(){return i},Z0:function(){return f},ep:function(){return p},ts:function(){return o}});var n=t(861),a=t(757),u=t.n(a),c=t(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{language:"en-US"}}),s="7c4c8eade83a7a9829861e0d1ff26425",i=function(){var e=(0,n.Z)(u().mark((function e(){var r,t,n=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>0&&void 0!==n[0]?n[0]:1,e.next=3,c.get("trending/movie/day",{params:{api_key:s,page:r}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(r),{params:{api_key:s}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(r,"/credits"),{params:{api_key:s}});case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(r,"/reviews"),{params:{api_key:s}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,c.get("search/movie",{params:{api_key:s,query:r,page:t}});case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=276.1a57dd88.chunk.js.map