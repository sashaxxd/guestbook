!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(this,function(){return webpackJsonp([0],{104:function(t,e){function n(){return"serviceWorker"in navigator&&(window.fetch||"imageRendering"in document.documentElement.style)&&("https:"===window.location.protocol||"localhost"===window.location.hostname)}function r(t){if(t||(t={}),n()){navigator.serviceWorker.register("sw.js")}else if(window.applicationCache){var e="/",r="manifest",o=function(){var t=e+r+".html",n=document.createElement("iframe");n.src=t,n.style.display="none",c=n,document.body.appendChild(n)};return void("complete"===document.readyState?setTimeout(o):window.addEventListener("load",o))}}function o(t,e){}var c;e.install=r,e.applyUpdate=o},130:function(t,e){"use strict";function n(t){return function(e){var n=e.dispatch,r=e.getState;return function(e){return function(o){return"function"==typeof o?o(n,r,t):e(o)}}}}e.__esModule=!0;var r=n();r.withExtraArgument=n,e["default"]=r},138:function(t,e,n){function r(t){return n(o(t))}function o(t){var e=c[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var c={"./index.coffee":17,"./post.coffee":30};r.keys=function(){return Object.keys(c)},r.resolve=o,t.exports=r,r.id=138},139:function(t,e,n){t.exports=n(58)},17:function(t,e,n){var r,o,c,u,p,i,s,a,l,f=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};for(r=n(10).combineReducers,i={},l=["index","validate","posts"],a=n(138),s=a.keys(),c=0,u=s.length;c<u;c++)o=s[c],p=o.replace(/\.(coffee)$/,"").replace(/\.\//,""),f.call(l,p)>=0||(console.log("Reducer: "+p),i[p]=a("./"+p+".coffee"));t.exports=r(i)},28:function(t,e,n){var r,o,c,u,p,i=function(t,e){function n(){this.constructor=t}for(var r in e)s.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},s={}.hasOwnProperty;r=(u=n(0)).Component,o=n(7).Link,p=n(31).link,t.exports=c=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return i(e,t),e.prototype.render=function(){var t,e,n;return e=this.props,n=e.to,t=e.children,u.createElement("li",{className:p},u.createElement(o,{to:n},t))},e}(r)},29:function(t,e){var n;n={GET_POST_REQUEST:"GET_POST_REQUEST",GET_POST_SUCCESS:"GET_POST_SUCCESS",GET_POST_FAILURE:"GET_POST_FAILURE",getPost:function(t){return function(e,r){return e({type:"GET_POST_REQUEST"}),fetch("posts/"+t).then(function(t){if(t.ok)return t;throw Error(t.statusText)}).then(function(t){return t.json()}).then(function(t){return e({type:n.GET_POST_SUCCESS,post:t})}).then(null,function(t){return e({type:n.GET_POST_FAILURE,errors:t})})}}},t.exports=n},30:function(t,e,n){var r,o,c,u,p,i,s=[].slice;u=n(27),i=n(29),o=i.GET_POST_REQUEST,c=i.GET_POST_SUCCESS,r=i.GET_POST_FAILURE,p={posts:[],isFetching:!1,error:null},t.exports=function(t,e){switch(null==t&&(t=p),e.type){case o:return u(t,{isFetching:!0});case c:return u(t,{isFetching:!1,posts:s.call(t.posts).concat([e.post]),error:null});case r:return u(t,{isFetching:!1,errors:e.errors});default:return t}}},31:function(t,e){t.exports={wrap:"_1221GhCTl1YHCJJoTmRwXu",nav:"wE2vrp5zq9kxy_q6U6lxO",link:"OssHcXGzqx9Gr2KliU1hI"}},58:function(t,e,n){(function(t){var e,r,o,c,u,p,i,s;p=n(0).render,u=n(7),r=u.Router,c=u.hashHistory,e=n(16).Provider,s=n(67),i=n(66),o=t.createElement(e,{store:s},t.createElement(r,{routes:i,history:c})),p(o,document.querySelector("#root")),n(104).install()}).call(e,n(0))},60:function(t,e,n){(function(e){var r,o,c,u,p,i,s,a=function(t,e){function n(){this.constructor=t}for(var r in e)l.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},l={}.hasOwnProperty;c=e.PropTypes,r=e.Component,p=n(68),s=p.wrap,u=p.from,i=p.text,t.exports=o=function(t){function n(){return n.__super__.constructor.apply(this,arguments)}return a(n,t),n.prototype.render=function(){var t,n,r,o;return r=this.props.post,o=r.user,n=r.email,t=r.body,e.createElement("div",{className:s},e.createElement("span",{className:u},o," <",n,">"),e.createElement("p",{className:i},t))},n}(r)}).call(e,n(0))},61:function(t,e,n){var r,o,c,u,p,i,s,a,l,f=function(t,e){function n(){this.constructor=t}for(var r in e)_.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},_={}.hasOwnProperty;r=(p=n(0)).Component,c=n(7).Link,u=n(28),s=n(31),i=s.nav,l=s.wrap,a=" ",t.exports=o=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,t),e.prototype.render=function(){return p.createElement("div",null,p.createElement("header",null,p.createElement("nav",{className:l},p.createElement("ul",{className:i},p.createElement(u,{to:"/"},"Home"),p.createElement(u,{to:"/about"},"About"),p.createElement(u,{to:"/posts"},"Posts")))),this.props.children)},e}(r)},62:function(t,e,n){var r,o,c,u,p=function(t,e){function n(){this.constructor=t}for(var r in e)i.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;o=(c=n(0)).Component,u=n(69).message,t.exports=r=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return p(e,t),e.prototype.render=function(){return c.createElement("div",{className:u},c.createElement("h1",null,"React-router works!"))},e}(o)},63:function(t,e,n){var r,o,c,u,p=function(t,e){function n(){this.constructor=t}for(var r in e)i.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;r=(c=n(0)).Component,u=n(70),t.exports=o=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return p(e,t),e.prototype.render=function(){return c.createElement("div",null,c.createElement("h1",{className:u.heading},"Not found"),c.createElement("h2",null,"Sorry"))},e}(r)},64:function(t,e,n){var r,o,c,u=function(t,e){function n(){this.constructor=t}for(var r in e)p.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},p={}.hasOwnProperty;r=(c=n(0)).Component,t.exports=o=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return u(e,t),e.prototype.render=function(){return c.createElement("div",null,c.createElement("h1",null,"It works"))},e}(r)},65:function(t,e,n){var r,o,c,u,p,i,s,a,l=function(t,e){function n(){this.constructor=t}for(var r in e)f.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},f={}.hasOwnProperty;r=(i=n(0)).Component,o=n(7).Link,c=n(28).NavLink,u=n(60),s=n(16).connect,a=n(29).getPost,p=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return l(e,t),e.prototype.componentDidMount=function(){var t,e,n;for(n=[],e=t=1;t<=3;e=++t)n.push(this.props.dispatch(a(e)));return n},e.prototype.render=function(){var t,e,n,r,o,c;return c=this.props.post,o=c.posts,n=c.isFetching,e=c.errors,null!=o&&(t=i.createElement("div",null,function(){var t,e,n;for(n=[],t=0,e=o.length;t<e;t++)r=o[t],n.push(i.createElement(u,{post:r,key:r.id}));return n}())),n&&(t=i.createElement("h3",null,"Loading posts...")),"undefined"!=typeof error&&null!==error&&(t=i.createElement("h3",null,"Error: ",error)),i.createElement("div",null,i.createElement("a",{href:"#/posts"},i.createElement("h1",null,"Refresh")),t)},e}(r),t.exports=s(function(t){return t})(p)},66:function(t,e,n){(function(e){var r,o,c,u,p,i,s,a,l;l=n(7),a=l.Router,s=l.Route,p=l.IndexRoute,u=n(61),o=n(63),r=n(62),c=n(64),i=n(65),t.exports=e.createElement(a,null,e.createElement(s,{path:"/",component:u},e.createElement(p,{component:c}),e.createElement(s,{path:"about",component:r}),e.createElement(s,{path:"posts",component:i}),e.createElement(s,{path:"*",component:o})))}).call(e,n(0))},67:function(t,e,n){var r,o,c,u,p,i,s,a,l;a=n(10),u=a.createStore,o=a.combineReducers,r=a.applyMiddleware,c=a.compose,s=n(17),i=[n(130)["default"]].concat([]),p=void 0,l=u(s,p,r.apply(null,i)),t.exports=l},68:function(t,e){t.exports={wrap:"_2UjoqYsCy5G_C4Ft_roYgk",from:"_2sCFY_mG2wDohcaUpwCYXF",text:"_3Avf97-wOW5OPfdCjsdZdu"}},69:function(t,e){t.exports={message:"_1FS7S438zqs78RH6OYooA8"}},70:function(t,e){t.exports={heading:"_2ANIV0TjxlBFnikpLjDUhT"}}},[139])});
//# sourceMappingURL=bundle.ddce18317d6d9ed0f8a0.js.map