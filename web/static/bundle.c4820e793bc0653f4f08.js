!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(this,function(){return webpackJsonp([0],{106:function(t,e){function n(){return"serviceWorker"in navigator&&(window.fetch||"imageRendering"in document.documentElement.style)&&("https:"===window.location.protocol||"localhost"===window.location.hostname)}function r(t){if(t||(t={}),n()){navigator.serviceWorker.register("sw.js")}else if(window.applicationCache){var e="/",r="manifest",o=function(){var t=e+r+".html",n=document.createElement("iframe");n.src=t,n.style.display="none",c=n,document.body.appendChild(n)};return void("complete"===document.readyState?setTimeout(o):window.addEventListener("load",o))}}function o(t,e){}var c;e.install=r,e.applyUpdate=o},132:function(t,e){"use strict";function n(t){return function(e){var n=e.dispatch,r=e.getState;return function(e){return function(o){return"function"==typeof o?o(n,r,t):e(o)}}}}e.__esModule=!0;var r=n();r.withExtraArgument=n,e["default"]=r},140:function(t,e,n){function r(t){return n(o(t))}function o(t){var e=c[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var c={"./index.coffee":17,"./post.coffee":30};r.keys=function(){return Object.keys(c)},r.resolve=o,t.exports=r,r.id=140},141:function(t,e,n){t.exports=n(58)},17:function(t,e,n){var r,o,c,u,p,i,s,a,l,f=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};for(r=n(11).combineReducers,i={},l=["index"],a=n(140),s=a.keys(),c=0,u=s.length;c<u;c++)o=s[c],p=o.replace(/\.(coffee)$/,"").replace(/\.\//,""),f.call(l,p)>=0||(console.log("Reducer: "+p),i[p]=a("./"+p+".coffee"));t.exports=r(i)},28:function(t,e,n){var r,o,c,u,p,i=function(t,e){function n(){this.constructor=t}for(var r in e)s.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},s={}.hasOwnProperty;r=(u=n(0)).Component,o=n(7).Link,p=n(31).link,t.exports=c=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return i(e,t),e.prototype.render=function(){var t,e,n;return e=this.props,n=e.to,t=e.children,u.createElement("li",{className:p},u.createElement(o,{to:n},t))},e}(r)},29:function(t,e){var n;n={GET_POST_REQUEST:"GET_POST_REQUEST",GET_POST_SUCCESS:"GET_POST_SUCCESS",GET_POST_FAILURE:"GET_POST_FAILURE",getPost:function(t){return function(e,r){var o,c;return e({type:n.GET_POST_REQUEST}),o="application/json",c=new Headers,c.append("Content-Type",o),c.append("Accept",o),fetch("posts/"+t,{headers:c}).then(function(t){if(t.ok)return t;throw Error(t.statusText)}).then(function(t){return t.json()}).then(function(t){return e({type:n.GET_POST_SUCCESS,post:t})}).then(null,function(t){return e({type:n.GET_POST_FAILURE,errors:t})})}}},t.exports=n},30:function(t,e,n){var r,o,c,u,p,i,s=[].slice;u=n(27),i=n(29),o=i.GET_POST_REQUEST,c=i.GET_POST_SUCCESS,r=i.GET_POST_FAILURE,p={posts:[],isFetching:!1,error:null},t.exports=function(t,e){switch(null==t&&(t=p),e.type){case o:return u(t,{isFetching:!0});case c:return u(t,{isFetching:!1,error:null,posts:s.call(t.posts).concat([e.post])});case r:return u(t,{isFetching:!1,errors:e.errors});default:return t}}},31:function(t,e){t.exports={wrap:"_1221GhCTl1YHCJJoTmRwXu",nav:"wE2vrp5zq9kxy_q6U6lxO",link:"OssHcXGzqx9Gr2KliU1hI"}},58:function(t,e,n){(function(t){var e,r,o,c,u,p,i,s;p=n(0).render,u=n(7),r=u.Router,c=u.hashHistory,e=n(10).Provider,s=n(69),i=n(67),o=t.createElement(e,{store:s},t.createElement(r,{routes:i,history:c})),p(o,document.querySelector("#root")),n(106).install()}).call(e,n(0))},60:function(t,e,n){var r,o,c,u,p,i,s,a,l=function(t,e){function n(){this.constructor=t}for(var r in e)f.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},f={}.hasOwnProperty;a=u=n(0),r=a.Component,c=a.PropTypes,i=n(10).connect,p=n(68),o=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return l(e,t),e.prototype.render=function(){var t,e,n,r,o,c,i;return r=p.incr,e=p.decr,c=p.reset,i=p.value,o=this.props,t=o.counter,n=o.dispatch,console.log(t),u.createElement("div",null,u.createElement("h1",null,"Counter: ",t),u.createElement("button",{onClick:n(r)},"Increment"),u.createElement("button",{onClick:n(e)},"Decrement"),u.createElement("button",{onClick:n(c)},"Reset"))},e}(r),s=function(t){return t},t.exports=i(s,p)(o)},61:function(t,e,n){(function(e){var r,o,c,u,p,i,s,a=function(t,e){function n(){this.constructor=t}for(var r in e)l.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},l={}.hasOwnProperty;c=e.PropTypes,r=e.Component,p=n(70),s=p.wrap,u=p.from,i=p.text,t.exports=o=function(t){function n(){return n.__super__.constructor.apply(this,arguments)}return a(n,t),n.prototype.render=function(){var t,n,r,o;return r=this.props.post,o=r.user,n=r.email,t=r.body,e.createElement("div",{className:s},e.createElement("span",{className:u},o," <",n,">"),e.createElement("p",{className:i},t))},n}(r)}).call(e,n(0))},62:function(t,e,n){var r,o,c,u,p,i,s,a,l,f=function(t,e){function n(){this.constructor=t}for(var r in e)_.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},_={}.hasOwnProperty;r=(p=n(0)).Component,c=n(7).Link,u=n(28),s=n(31),i=s.nav,l=s.wrap,a=" ",t.exports=o=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,t),e.prototype.render=function(){return p.createElement("div",null,p.createElement("header",null,p.createElement("nav",{className:l},p.createElement("ul",{className:i},p.createElement(u,{to:"/"},"Home"),p.createElement(u,{to:"/about"},"About"),p.createElement(u,{to:"/posts"},"Posts"),p.createElement(u,{to:"/counter"},"Counter")))),this.props.children)},e}(r)},63:function(t,e,n){var r,o,c,u,p=function(t,e){function n(){this.constructor=t}for(var r in e)i.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;o=(c=n(0)).Component,u=n(71).message,t.exports=r=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return p(e,t),e.prototype.render=function(){return c.createElement("div",{className:u},c.createElement("h1",null,"React-router works!"))},e}(o)},64:function(t,e,n){var r,o,c,u,p=function(t,e){function n(){this.constructor=t}for(var r in e)i.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;r=(c=n(0)).Component,u=n(72),t.exports=o=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return p(e,t),e.prototype.render=function(){return c.createElement("div",null,c.createElement("h1",{className:u.heading},"Not found"),c.createElement("h2",null,"Sorry"))},e}(r)},65:function(t,e,n){var r,o,c,u=function(t,e){function n(){this.constructor=t}for(var r in e)p.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},p={}.hasOwnProperty;r=(c=n(0)).Component,t.exports=o=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return u(e,t),e.prototype.render=function(){return c.createElement("div",null,c.createElement("h1",null,"It works"))},e}(r)},66:function(t,e,n){var r,o,c,u,p,i,s,a,l,f=function(t,e){function n(){this.constructor=t}for(var r in e)_.call(e,r)&&(t[r]=e[r]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},_={}.hasOwnProperty;r=(i=n(0)).Component,o=n(7).Link,c=n(28).NavLink,u=n(61),s=n(10).connect,a=n(29).getPost,p=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,t),e.prototype.componentDidMount=function(){var t,e,n,r,o;for(r=[1,2],o=[],t=0,n=r.length;t<n;t++)e=r[t],o.push(this.props.dispatch(a(e)));return o},e.prototype.render=function(){var t,e,n,r,o,c;return c=this.props.posts,o=c.posts,n=c.isFetching,e=c.errors,null!=o&&(t=i.createElement("div",null,function(){var t,e,n;for(n=[],t=0,e=o.length;t<e;t++)r=o[t],n.push(i.createElement(u,{post:r,key:r.id}));return n}())),n&&(t=i.createElement("h3",null,"Loading posts...")),"undefined"!=typeof error&&null!==error&&(t=i.createElement("h3",null,"Error: ",error)),i.createElement("div",null,i.createElement("a",{href:"#/posts"},i.createElement("h1",null,"Refresh")),t)},e}(r),l=function(t){return{posts:t.post}},t.exports=s(l)(p)},67:function(t,e,n){(function(e){var r,o,c,u,p,i,s,a,l,f;f=n(7),l=f.Router,a=f.Route,i=f.IndexRoute,p=n(62),c=n(64),r=n(63),u=n(65),s=n(66),o=n(60),t.exports=e.createElement(l,null,e.createElement(a,{path:"/",component:p},e.createElement(i,{component:u}),e.createElement(a,{path:"about",component:r}),e.createElement(a,{path:"posts",component:s}),e.createElement(a,{path:"*",component:c})))}).call(e,n(0))},68:function(t,e){var n;n={INCR:"INCR",DECR:"DECR",RESET:"RESET",incr:function(t,e){return t({type:n.INCR})},decr:function(t,e){return t({type:n.DECR})},rese:function(t,e){return t({type:n.RESET})}},t.exports=n},69:function(t,e,n){var r,o,c,u,p,i,s,a,l,f;l=n(11),p=l.createStore,c=l.combineReducers,o=l.applyMiddleware,u=l.compose,a=n(17),r=window.devToolsExtension()||function(t){return t},s=[n(132)["default"]].concat([]),i=void 0,f=p(a,i,o.apply(null,s)),f.subscribe(a),t.exports=f},70:function(t,e){t.exports={wrap:"_2UjoqYsCy5G_C4Ft_roYgk",from:"_2sCFY_mG2wDohcaUpwCYXF",text:"_3Avf97-wOW5OPfdCjsdZdu"}},71:function(t,e){t.exports={message:"_1FS7S438zqs78RH6OYooA8"}},72:function(t,e){t.exports={heading:"_2ANIV0TjxlBFnikpLjDUhT"}}},[141])});
//# sourceMappingURL=bundle.c4820e793bc0653f4f08.js.map