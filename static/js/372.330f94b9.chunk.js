"use strict";(self.webpackChunktaakWebPush=self.webpackChunktaakWebPush||[]).push([[372],{7372:function(t,e,o){o.r(e),o.d(e,{iosTransitionAnimation:function(){return u},shadow:function(){return s}});var a=o(4942),n=o(7762),r=o(5883),l=o(6313),c=function(t){return document.querySelector("".concat(t,".ion-cloned-element"))},s=function(t){return t.shadowRoot||t},i=function(t){var e="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),o="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=e){var a=e.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=a?a.querySelector(o):null}return t.querySelector(o)},f=function(t,e){var o="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),a=[];if(null!=o){var r=o.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=r&&(a=r.querySelectorAll("ion-buttons"))}else a=t.querySelectorAll("ion-buttons");var l,c=(0,n.Z)(a);try{for(c.s();!(l=c.n()).done;){var s=l.value,i=s.closest("ion-header"),f=i&&!i.classList.contains("header-collapse-condense-inactive"),d=s.querySelector("ion-back-button"),m=s.classList.contains("buttons-collapse"),u="start"===s.slot||""===s.slot;if(null!==d&&u&&(m&&f&&e||!m))return d}}catch(p){c.e(p)}finally{c.f()}return null},d=function(t,e,o,a,n,l){var i=e?"calc(100% - ".concat(l.right+4,"px)"):"".concat(l.left-4,"px"),f=e?"7px":"-7px",d=e?"-4px":"4px",m=e?"-4px":"4px",u=e?"right":"left",p=e?"left":"right",y=[{offset:0,opacity:0,transform:"translate3d(".concat(f,", ").concat(n.top-40,"px, 0) scale(2.1)")},{offset:1,opacity:1,transform:"translate3d(".concat(d,", ").concat(l.top-46,"px, 0) scale(1)")}],b=[{offset:0,opacity:1,transform:"translate3d(".concat(d,", ").concat(l.top-46,"px, 0) scale(1)")},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d(".concat(f,", ").concat(n.top-40,"px, 0) scale(2.1)")}],v=o?b:y,S=[{offset:0,opacity:0,transform:"translate3d(".concat(m,", ").concat(l.top-41,"px, 0) scale(0.6)")},{offset:1,opacity:1,transform:"translate3d(".concat(m,", ").concat(l.top-46,"px, 0) scale(1)")}],g=[{offset:0,opacity:1,transform:"translate3d(".concat(m,", ").concat(l.top-46,"px, 0) scale(1)")},{offset:.2,opacity:0,transform:"translate3d(".concat(m,", ").concat(l.top-41,"px, 0) scale(0.6)")},{offset:1,opacity:0,transform:"translate3d(".concat(m,", ").concat(l.top-41,"px, 0) scale(0.6)")}],h=o?g:S,T=(0,r.c)(),x=(0,r.c)(),q=c("ion-back-button"),X=s(q).querySelector(".button-text"),A=s(q).querySelector("ion-icon");q.text=a.text,q.mode=a.mode,q.icon=a.icon,q.color=a.color,q.disabled=a.disabled,q.style.setProperty("display","block"),q.style.setProperty("position","fixed"),x.addElement(A),T.addElement(X),T.beforeStyles({"transform-origin":"".concat(u," center")}).beforeAddWrite((function(){a.style.setProperty("display","none"),q.style.setProperty(u,i)})).afterAddWrite((function(){a.style.setProperty("display",""),q.style.setProperty("display","none"),q.style.removeProperty(u)})).keyframes(v),x.beforeStyles({"transform-origin":"".concat(p," center")}).keyframes(h),t.addAnimation([T,x])},m=function(t,e,o,n,l,s){var i=e?"calc(100% - ".concat(l.right,"px)"):"".concat(l.left,"px"),f=e?"-18px":"18px",d=e?"right":"left",m=[{offset:0,opacity:0,transform:"translate3d(".concat(f,", ").concat(s.top-4,"px, 0) scale(0.49)")},{offset:.1,opacity:0},{offset:1,opacity:1,transform:"translate3d(0, ".concat(l.top-2,"px, 0) scale(1)")}],u=[{offset:0,opacity:.99,transform:"translate3d(0, ".concat(l.top-2,"px, 0) scale(1)")},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d(".concat(f,", ").concat(s.top-4,"px, 0) scale(0.5)")}],p=o?m:u,y=c("ion-title"),b=(0,r.c)();y.innerText=n.innerText,y.size=n.size,y.color=n.color,b.addElement(y),b.beforeStyles((0,a.Z)({"transform-origin":"".concat(d," center"),height:"46px",display:"",position:"relative"},d,i)).beforeAddWrite((function(){n.style.setProperty("display","none")})).afterAddWrite((function(){n.style.setProperty("display",""),y.style.setProperty("display","none")})).keyframes(p),t.addAnimation(b)},u=function(t,e){var o;try{var a="opacity",n="transform",c="0%",u="rtl"===t.ownerDocument.dir,p=u?"-99.5%":"99.5%",y=u?"33%":"-33%",b=e.enteringEl,v=e.leavingEl,S="back"===e.direction,g=b.querySelector(":scope > ion-content"),h=b.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),T=b.querySelectorAll(":scope > ion-header > ion-toolbar"),x=(0,r.c)(),q=(0,r.c)();if(x.addElement(b).duration((null!==(o=e.duration)&&void 0!==o?o:0)||540).easing(e.easing||"cubic-bezier(0.32,0.72,0,1)").fill("both").beforeRemoveClass("ion-page-invisible"),v&&null!==t&&void 0!==t){var X=(0,r.c)();X.addElement(t),x.addAnimation(X)}if(g||0!==T.length||0!==h.length?(q.addElement(g),q.addElement(h)):q.addElement(b.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),x.addAnimation(q),S?q.beforeClearStyles([a]).fromTo("transform","translateX(".concat(y,")"),"translateX(".concat(c,")")).fromTo(a,.8,1):q.beforeClearStyles([a]).fromTo("transform","translateX(".concat(p,")"),"translateX(".concat(c,")")),g){var A=s(g).querySelector(".transition-effect");if(A){var E=A.querySelector(".transition-cover"),k=A.querySelector(".transition-shadow"),C=(0,r.c)(),P=(0,r.c)(),w=(0,r.c)();C.addElement(A).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),P.addElement(E).beforeClearStyles([a]).fromTo(a,0,.1),w.addElement(k).beforeClearStyles([a]).fromTo(a,.03,.7),C.addAnimation([P,w]),q.addAnimation([C])}}var L=b.querySelector("ion-header.header-collapse-condense"),W=function(t,e,o,a,n){var r=f(a,o),l=i(n),c=i(a),s=f(n,o),u=null!==r&&null!==l&&!o,p=null!==c&&null!==s&&o;if(u){var y=l.getBoundingClientRect(),b=r.getBoundingClientRect();m(t,e,o,l,y,b),d(t,e,o,r,y,b)}else if(p){var v=c.getBoundingClientRect(),S=s.getBoundingClientRect();m(t,e,o,c,v,S),d(t,e,o,s,v,S)}return{forward:u,backward:p}}(x,u,S,b,v),B=W.forward,R=W.backward;if(T.forEach((function(t){var e=(0,r.c)();e.addElement(t),x.addAnimation(e);var o=(0,r.c)();o.addElement(t.querySelector("ion-title"));var n,l=(0,r.c)(),i=Array.from(t.querySelectorAll("ion-buttons,[menuToggle]")),f=t.closest("ion-header"),d=null===f||void 0===f?void 0:f.classList.contains("header-collapse-condense-inactive");n=S?i.filter((function(t){var e=t.classList.contains("buttons-collapse");return e&&!d||!e})):i.filter((function(t){return!t.classList.contains("buttons-collapse")})),l.addElement(n);var m=(0,r.c)();m.addElement(t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));var b=(0,r.c)();b.addElement(s(t).querySelector(".toolbar-background"));var v=(0,r.c)(),g=t.querySelector("ion-back-button");if(g&&v.addElement(g),e.addAnimation([o,l,m,b,v]),l.fromTo(a,.01,1),m.fromTo(a,.01,1),S)d||o.fromTo("transform","translateX(".concat(y,")"),"translateX(".concat(c,")")).fromTo(a,.01,1),m.fromTo("transform","translateX(".concat(y,")"),"translateX(".concat(c,")")),v.fromTo(a,.01,1);else if(L||o.fromTo("transform","translateX(".concat(p,")"),"translateX(".concat(c,")")).fromTo(a,.01,1),m.fromTo("transform","translateX(".concat(p,")"),"translateX(".concat(c,")")),b.beforeClearStyles([a,"transform"]),(null===f||void 0===f?void 0:f.translucent)?b.fromTo("transform",u?"translateX(-100%)":"translateX(100%)","translateX(0px)"):b.fromTo(a,.01,"var(--opacity)"),B||v.fromTo(a,.01,1),g&&!B){var h=(0,r.c)();h.addElement(s(g).querySelector(".button-text")).fromTo("transform",u?"translateX(-100px)":"translateX(100px)","translateX(0px)"),e.addAnimation(h)}})),v){var N=(0,r.c)(),z=v.querySelector(":scope > ion-content"),D=v.querySelectorAll(":scope > ion-header > ion-toolbar"),I=v.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(z||0!==D.length||0!==I.length?(N.addElement(z),N.addElement(I)):N.addElement(v.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),x.addAnimation(N),S){N.beforeClearStyles([a]).fromTo("transform","translateX(".concat(c,")"),u?"translateX(-100%)":"translateX(100%)");var O=(0,l.g)(v);x.afterAddWrite((function(){"normal"===x.getDirection()&&O.style.setProperty("display","none")}))}else N.fromTo("transform","translateX(".concat(c,")"),"translateX(".concat(y,")")).fromTo(a,1,.8);if(z){var Z=s(z).querySelector(".transition-effect");if(Z){var j=Z.querySelector(".transition-cover"),F=Z.querySelector(".transition-shadow"),G=(0,r.c)(),H=(0,r.c)(),J=(0,r.c)();G.addElement(Z).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),H.addElement(j).beforeClearStyles([a]).fromTo(a,.1,0),J.addElement(F).beforeClearStyles([a]).fromTo(a,.7,.03),G.addAnimation([H,J]),N.addAnimation([G])}}D.forEach((function(t){var e=(0,r.c)();e.addElement(t);var o=(0,r.c)();o.addElement(t.querySelector("ion-title"));var l=(0,r.c)(),i=t.querySelectorAll("ion-buttons,[menuToggle]"),f=t.closest("ion-header"),d=null===f||void 0===f?void 0:f.classList.contains("header-collapse-condense-inactive"),m=Array.from(i).filter((function(t){var e=t.classList.contains("buttons-collapse");return e&&!d||!e}));l.addElement(m);var p=(0,r.c)(),b=t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");b.length>0&&p.addElement(b);var v=(0,r.c)();v.addElement(s(t).querySelector(".toolbar-background"));var g=(0,r.c)(),h=t.querySelector("ion-back-button");if(h&&g.addElement(h),e.addAnimation([o,l,p,g,v]),x.addAnimation(e),g.fromTo(a,.99,0),l.fromTo(a,.99,0),p.fromTo(a,.99,0),S){if(d||o.fromTo("transform","translateX(".concat(c,")"),u?"translateX(-100%)":"translateX(100%)").fromTo(a,.99,0),p.fromTo("transform","translateX(".concat(c,")"),u?"translateX(-100%)":"translateX(100%)"),v.beforeClearStyles([a,"transform"]),(null===f||void 0===f?void 0:f.translucent)?v.fromTo("transform","translateX(0px)",u?"translateX(-100%)":"translateX(100%)"):v.fromTo(a,"var(--opacity)",0),h&&!R){var T=(0,r.c)();T.addElement(s(h).querySelector(".button-text")).fromTo("transform","translateX(".concat(c,")"),"translateX(".concat((u?-124:124)+"px",")")),e.addAnimation(T)}}else d||o.fromTo("transform","translateX(".concat(c,")"),"translateX(".concat(y,")")).fromTo(a,.99,0).afterClearStyles([n,a]),p.fromTo("transform","translateX(".concat(c,")"),"translateX(".concat(y,")")).afterClearStyles([n,a]),g.afterClearStyles([a]),o.afterClearStyles([a]),l.afterClearStyles([a])}))}return x}catch(K){throw K}}}}]);
//# sourceMappingURL=372.330f94b9.chunk.js.map