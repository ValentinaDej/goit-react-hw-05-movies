"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[961,387],{387:function(e,r,t){t.r(r),t.d(r,{default:function(){return u}});var n="Loader_loader__9SHmr",a=t(691),s=t(184),u=function(){return(0,s.jsx)("div",{className:n,children:(0,s.jsx)(a.s5,{strokeColor:"blue",strokeWidth:"5",animationDuration:"1.5",width:"96",visible:!0})})}},961:function(e,r,t){t.r(r);var n=t(861),a=t(439),s=t(757),u=t.n(s),c=t(689),i=t(87),o=t(791),p=t(900),f=t(387),d=t(184);r.default=function(){var e,r=(0,o.useState)(),t=(0,a.Z)(r,2),s=t[0],l=t[1],v=(0,o.useState)(!1),h=(0,a.Z)(v,2),m=h[0],x=h[1],k=(0,o.useState)(null),w=(0,a.Z)(k,2),g=w[0],j=w[1],b=(0,c.UO)().movieId,_=(0,c.s0)();(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,(0,p.ts)(b);case 4:r=e.sent,l(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),j(e.t0.message);case 11:return e.prev=11,x(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[b,l,x,j]);var y=(null===(e=(0,c.TH)().state)||void 0===e?void 0:e.from)||"/";if(s){var Z=s.title,C=s.overview,S=s.vote_average,U=s.genres,T=s.poster_path,H=Math.round(10*S),L=U.map((function(e){var r=e.id,t=e.name;return(0,d.jsx)("li",{children:t},r)})),M=T?"https://image.tmdb.org/t/p/original/".concat(T):"";return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{onClick:function(){return _(y)},children:" Go back"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{src:M,alt:Z,width:"200px"}),(0,d.jsx)("p",{children:Z}),(0,d.jsxs)("p",{children:[H,"%"]}),(0,d.jsx)("p",{children:C}),(0,d.jsx)("ul",{children:L}),(0,d.jsx)(i.rU,{state:{from:y},to:"/movies/".concat(b,"/cast"),children:(0,d.jsx)("span",{children:"Cast"})}),(0,d.jsx)(i.rU,{state:{from:y},to:"/movies/".concat(b,"/reviews"),children:(0,d.jsx)("span",{children:"Reviews"})}),(0,d.jsx)(c.j3,{}),m&&(0,d.jsx)(f.default,{}),g&&(0,d.jsx)("p",{children:"...films load faild"})]})]})}}},900:function(e,r,t){t.d(r,{TT:function(){return d},XM:function(){return i},Z0:function(){return f},ep:function(){return p},ts:function(){return o}});var n=t(861),a=t(757),s=t.n(a),u=t(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{language:"en-US"}}),c="7c4c8eade83a7a9829861e0d1ff26425",i=function(){var e=(0,n.Z)(s().mark((function e(){var r,t,n=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>0&&void 0!==n[0]?n[0]:1,e.next=3,u.get("trending/movie/day",{params:{api_key:c,page:r}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("movie/".concat(r),{params:{api_key:c}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("movie/".concat(r,"/credits"),{params:{api_key:c}});case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("movie/".concat(r,"/reviews"),{params:{api_key:c}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,u.get("search/movie",{params:{api_key:c,query:r,page:t}});case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=961.e06f3c99.chunk.js.map