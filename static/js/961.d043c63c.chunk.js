"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[961],{961:function(r,e,t){t.r(e);var n=t(413),a=t(861),u=t(439),s=t(757),c=t.n(s),i=t(689),o=t(87),p=t(791),f=t(106),l=t(184);e.default=function(){var r,e=(0,p.useState)({item:{},loading:!1,error:null}),t=(0,u.Z)(e,2),s=t[0],v=t[1],d=(0,i.UO)().movieId,h=(0,i.s0)();(0,p.useEffect)((function(){var r=function(){var r=(0,a.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return v((0,n.Z)((0,n.Z)({},s),{},{loading:!0,error:null})),r.prev=1,r.next=4,(0,f.ts)(d);case 4:e=r.sent,v((function(r){return(0,n.Z)((0,n.Z)({},r),{},{item:e})})),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),v((function(e){return(0,n.Z)((0,n.Z)({},e),{},{error:r.t0})}));case 11:return r.prev=11,v((function(r){return(0,n.Z)((0,n.Z)({},r),{},{loading:!1})})),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[1,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[d,s]);var m=(null===(r=(0,i.TH)().state)||void 0===r?void 0:r.from)||"/",x=s.item,g=x.title,w=x.overview,k=x.vote_average,Z=x.genres,j=x.poster_path,b=Math.round(10*k),y=null===Z||void 0===Z?void 0:Z.map((function(r){var e=r.id,t=r.name;return(0,l.jsx)("li",{children:t},e)})),_=j?"https://image.tmdb.org/t/p/original/".concat(j):"";return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{onClick:function(){return h(m)},children:" Go back"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:_,alt:g,width:"200px"}),(0,l.jsx)("p",{children:g}),(0,l.jsxs)("p",{children:[b,"%"]}),(0,l.jsx)("p",{children:w}),(0,l.jsx)("ul",{children:y}),(0,l.jsx)(o.rU,{state:{from:m},to:"/movies/".concat(d,"/cast"),children:(0,l.jsx)("span",{children:"Cast"})}),(0,l.jsx)(o.rU,{state:{from:m},to:"/movies/".concat(d,"/reviews"),children:(0,l.jsx)("span",{children:"Reviews"})}),(0,l.jsx)(i.j3,{})]})]})}},106:function(r,e,t){t.d(e,{TT:function(){return l},XM:function(){return i},Z0:function(){return f},ep:function(){return p},ts:function(){return o}});var n=t(861),a=t(757),u=t.n(a),s=t(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{language:"en-US"}}),c="7c4c8eade83a7a9829861e0d1ff26425",i=function(){var r=(0,n.Z)(u().mark((function r(){var e,t,n=arguments;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:1,r.next=3,s.get("trending/movie/day",{params:{api_key:c,page:e}});case 3:return t=r.sent,r.abrupt("return",t.data.results);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(u().mark((function r(e){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("movie/".concat(e),{params:{api_key:c}});case 2:return t=r.sent,r.abrupt("return",t.data);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(u().mark((function r(e){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("movie/".concat(e,"/credits"),{params:{api_key:c}});case 2:return t=r.sent,r.abrupt("return",t.data.cast);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(u().mark((function r(e){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("movie/".concat(e,"/reviews"),{params:{api_key:c}});case 2:return t=r.sent,console.log(t.data.results),r.abrupt("return",t.data.results);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(u().mark((function r(e){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("search/movie",{params:{api_key:c,query:e}});case 2:return t=r.sent,r.abrupt("return",t.data.results);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=961.d043c63c.chunk.js.map