"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[852],{448:function(r,e,n){var t=n(689),a=n(87),u=n(184),c=function(r){var e=r.items,n=(0,t.TH)(),c=e.map((function(r){var e=r.id,t=r.title;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{state:{from:n},to:"/movies/".concat(e),children:t})},e)}));return(0,u.jsx)("ul",{children:c})};e.Z=c,c.defaultProps={items:[]}},852:function(r,e,n){n.r(e),n.d(e,{default:function(){return v}});var t=n(433),a=n(413),u=n(861),c=n(439),s=n(757),i=n.n(s),o=n(791),p=n(106),f=n(448),l=n(184),d=function(){var r=(0,o.useState)({items:[],loading:!1,error:null}),e=(0,c.Z)(r,2),n=e[0],s=e[1];(0,o.useEffect)((function(){var r=function(){var r=(0,u.Z)(i().mark((function r(){var e;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s((0,a.Z)((0,a.Z)({},n),{},{loading:!0,error:null})),r.prev=1,r.next=4,(0,p.XM)();case 4:e=r.sent,s((function(r){return(0,a.Z)((0,a.Z)({},r),{},{items:(0,t.Z)(e)})})),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),s((function(e){return(0,a.Z)((0,a.Z)({},e),{},{error:r.t0})}));case 11:return r.prev=11,s((function(r){return(0,a.Z)((0,a.Z)({},r),{},{loading:!1})})),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[1,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[n]);var d=n.items,v=n.loading,m=n.error;return(0,l.jsxs)("div",{children:[d.length>0&&(0,l.jsx)(f.Z,{items:d}),v&&(0,l.jsx)("p",{children:"...loading films"}),m&&(0,l.jsx)("p",{children:"...films load faild"})]})},v=function(){return(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Home page"}),(0,l.jsx)("p",{children:"Daily popular films"}),(0,l.jsx)(d,{})]})}},106:function(r,e,n){n.d(e,{TT:function(){return l},XM:function(){return i},Z0:function(){return f},ep:function(){return p},ts:function(){return o}});var t=n(861),a=n(757),u=n.n(a),c=n(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{language:"en-US"}}),s="7c4c8eade83a7a9829861e0d1ff26425",i=function(){var r=(0,t.Z)(u().mark((function r(){var e,n,t=arguments;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=t.length>0&&void 0!==t[0]?t[0]:1,r.next=3,c.get("trending/movie/day",{params:{api_key:s,page:e}});case 3:return n=r.sent,r.abrupt("return",n.data.results);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,t.Z)(u().mark((function r(e){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("movie/".concat(e),{params:{api_key:s}});case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,t.Z)(u().mark((function r(e){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("movie/".concat(e,"/credits"),{params:{api_key:s}});case 2:return n=r.sent,r.abrupt("return",n.data.cast);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,t.Z)(u().mark((function r(e){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("movie/".concat(e,"/reviews"),{params:{api_key:s}});case 2:return n=r.sent,console.log(n.data.results),r.abrupt("return",n.data.results);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,t.Z)(u().mark((function r(e){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.get("search/movie",{params:{api_key:s,query:e}});case 2:return n=r.sent,r.abrupt("return",n.data.results);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=852.eb62f813.chunk.js.map