"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[844,387],{387:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var n="Loader_loader__9SHmr",a=r(691),u=r(184),s=function(){return(0,u.jsx)("div",{className:n,children:(0,u.jsx)(a.s5,{strokeColor:"blue",strokeWidth:"5",animationDuration:"1.5",width:"96",visible:!0})})}},844:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(433),a=r(861),u=r(439),s=r(757),c=r.n(s),i=r(791),o=r(900),f=r(583),p=r(387),l=r(184),d=function(){var e=(0,i.useState)([]),t=(0,u.Z)(e,2),r=t[0],s=t[1],d=(0,i.useState)(!1),v=(0,u.Z)(d,2),m=v[0],h=v[1],x=(0,i.useState)(null),k=(0,u.Z)(x,2),g=k[0],w=k[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),e.next=4,(0,o.XM)();case 4:t=e.sent,s((0,n.Z)(t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),w(e.t0.message);case 11:return e.prev=11,h(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[s,h,w]),(0,l.jsxs)("div",{children:[r.length>0&&(0,l.jsx)(f.Z,{items:r}),m&&(0,l.jsx)(p.default,{}),g&&(0,l.jsx)("p",{children:"...films load faild"})]})},v="HomePage_title__UFLA3",m=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{className:v,children:"Trending today"}),(0,l.jsx)(d,{})]})}},583:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(87),a=r(689),u="FilmList_filmsList__ipTM-",s=r(184),c=function(e){var t=e.items,r=(0,a.TH)(),c=t.map((function(e){var t=e.id,a=e.title;return(0,s.jsx)("li",{className:u,children:(0,s.jsx)(n.rU,{state:{from:r},to:"/movies/".concat(t),children:a})},t)}));return(0,s.jsx)("ul",{children:c})},i=c;c.defaultProps={items:[]}},900:function(e,t,r){r.d(t,{TT:function(){return l},XM:function(){return i},Z0:function(){return p},ep:function(){return f},ts:function(){return o}});var n=r(861),a=r(757),u=r.n(a),s=r(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{language:"en-US"}}),c="7c4c8eade83a7a9829861e0d1ff26425",i=function(){var e=(0,n.Z)(u().mark((function e(){var t,r,n=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:1,e.next=3,s.get("trending/movie/day",{params:{api_key:c,page:t}});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("movie/".concat(t),{params:{api_key:c}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("movie/".concat(t,"/credits"),{params:{api_key:c}});case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("movie/".concat(t,"/reviews"),{params:{api_key:c}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,s.get("search/movie",{params:{api_key:c,query:t,page:r}});case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=844.3d7141ad.chunk.js.map