(this["webpackJsonpamatsumoto1.gihub.io"]=this["webpackJsonpamatsumoto1.gihub.io"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),c=n(9),a=n.n(c),o=(n(15),n(16),n(1)),s=function(e){return Object(o.jsx)("nav",{className:"header-nav",children:Object(o.jsx)("ul",{children:e.children})})},u=n(6),l=function(e){var t=e.link,n=e.text;return Object(o.jsx)("li",{className:"header-nav__item",children:Object(o.jsx)(u.b,{to:t,children:n})})},h=(n(18),function(){return Object(o.jsx)("header",{className:"page-header",children:Object(o.jsxs)(s,{children:[Object(o.jsx)(l,{link:"/",text:"Home"}),Object(o.jsx)(l,{link:"/about",text:"About"}),Object(o.jsx)(l,{link:"/",text:"Projects"}),Object(o.jsx)(l,{link:"/",text:"Contact"})]})})}),f=n(4),d=n(10),j=function(e,t){var n=Object(r.useRef)(null),i=Object(r.useRef)(null),c=t.onResize,a=t.onClick,o=t.onMouseMove;return Object(r.useEffect)((function(){if(n.current){i.current=n.current.getContext("2d");var t,r=i.current,c=0;return function n(){r&&(c++,e(r,c)),t=window.requestAnimationFrame(n)}(),function(){window.cancelAnimationFrame(t)}}}),[e]),Object(r.useEffect)((function(){if(i.current){var e={},t=i.current;for(var n in c&&(e.resize=function(){c(t)}),a&&(e.click=function(e){a(t,e)}),o&&(e.mousemove=function(e){o(t,e)}),e)window.addEventListener(n,e[n]);return function(){for(var t in e)window.removeEventListener(t,e[t])}}})),n},v=["draw"],b=function(e){var t=e.draw,n=Object(d.a)(e,v),r=j(t,n);return Object(o.jsx)("canvas",{ref:r})},g=function(e,t){return Math.random()*(t-e)+e},x=function(){return Math.random()>.5?-1:1},m=function(){var e=[],t=function(e,t){var n=t.centerX,r=t.centerY,i=t.iter,c=t.multiplier,a=(t.colorAngle+c*g(.5,2))%360;t.colorAngle=a,e.moveTo(n,r),e.lineWidth=10,e.strokeStyle="hsl(".concat(a,", 30%, 15%)"),e.shadowBlur=10,e.shadowColor="hsl(".concat((a+g(-2,2))%360,", 30%, 15%)"),e.beginPath();for(var o=0,s=0,u=0;u<i;u++){o+=.05,s+=c*(2*Math.PI)/400;var l=n+o*Math.cos(s),h=r+o*Math.sin(s);e.lineTo(l,h)}e.stroke()},n=function(e,t){return{centerX:g(10,e-10),centerY:g(10,t-10),colorAngle:g(0,360),iter:1,maxIter:g(1e3,4e3),increasing:!0,multiplier:x()}},r=function(e,t){var n=e*t;return Math.ceil(n/2e5+1)};return Object(o.jsx)(b,{draw:function(i,c){var a=i.canvas;a.width=a.offsetWidth,a.height=a.offsetHeight,i.clearRect(0,0,a.width,a.height),i.fillStyle="#000000",i.fillRect(0,0,a.width,a.height),function(t,i){for(var c=e.length,a=r(t,i),o=c;o<a;o++)e.push(n(t,i))}(a.width,a.height),function(){var t,n=[],r=Object(f.a)(e);try{for(r.s();!(t=r.n()).done;){var i=t.value;i.iter&&n.push(i),i.increasing=i.increasing&&i.iter<i.maxIter,i.increasing?i.iter++:i.iter--}}catch(c){r.e(c)}finally{r.f()}e=n}();var o,s=Object(f.a)(e);try{for(s.s();!(o=s.n()).done;){var u=o.value;t(i,u)}}catch(l){s.e(l)}finally{s.f()}},onClick:function(t,n){var r=t.canvas.getBoundingClientRect(),i=n.clientX-r.left,c=n.clientY-r.top;e.push({centerX:i,centerY:c,colorAngle:g(0,360),iter:1,maxIter:g(1e3,4e3),increasing:!0,multiplier:x()})}})},O=["#8E5E52","#8E7F52","#868E52","#5D8959","#598984","#686E8C","#927D8F"],w=function(){var e=[],t=function(e,t){return{color:c(),x:g(0,e),y:g(0,t),vx:x()*i(),vy:x()*i()}},n=function(e,t,n){e.x+=e.vx,e.y+=e.vy,(e.x>=t||e.x<=0)&&(e.vx=-Math.sign(e.vx)*i()),(e.y>=n||e.y<=0)&&(e.vy=-Math.sign(e.vy)*i())},r=function(e,t){var n=t.color,r=t.x,i=t.y;e.beginPath(),e.shadowBlur=10,e.shadowColor=n,e.arc(r,i,5,0,2*Math.PI),e.fillStyle=n,e.fill(),e.strokeStyle=n,e.stroke()},i=function(){return g(.5,1.5)},c=function(){return O[Math.floor(Math.random()*O.length)]},a=function(e,t){var n=e*t;return Math.ceil(n/2e3)};return Object(o.jsx)(b,{draw:function(i,c){var o=i.canvas;o.width=o.offsetWidth,o.height=o.offsetHeight,i.clearRect(0,0,o.width,o.height),i.fillStyle="#000000",i.globalCompositeOperation="screen",i.fillRect(0,0,o.width,o.height),e.length||function(n,r){for(var i=a(n,r),c=0;c<i;c++)e.push(t(n,r))}(o.width,o.height);var s,u=Object(f.a)(e);try{for(u.s();!(s=u.n()).done;){var l=s.value;n(l,o.width,o.height),r(i,l)}}catch(h){u.e(h)}finally{u.f()}},onResize:function(n){var r=n.canvas,i=r.width,c=r.height,o=a(i,c),s=e.length;if(s>o)for(var u=s;u>o;u--)e.pop();else for(var l=s;l<o;l++)e.push(t(i,c))}})},p=(n(19),function(){var e=[Object(o.jsx)(m,{}),Object(o.jsx)(w,{})],t=function(){var t=Math.floor(2*Math.random());return e[t]}();return Object(o.jsx)("div",{className:"background",children:t})}),y=(n(20),function(){return Object(o.jsx)("div",{className:"home-page"})}),M=(n(21),function(e){return Object(o.jsx)("div",{className:"page-content",children:e.children})}),k=(n(22),function(){return Object(o.jsx)("div",{className:"about-page",children:Object(o.jsxs)(M,{children:[Object(o.jsx)("h1",{className:"about-page__header",children:"About Me"}),Object(o.jsxs)("p",{children:["I am a Full-Stack Software Engineer at ",Object(o.jsx)("a",{href:"https://www.rlicorp.com/",children:"RLI Insurance"}),", building websites for our customers and underwriters. I graduated  in 2018 from Cornell University with a Masters of Engineering in Computer Science. I also graduated from Cornell University in 2017 with a Bachelors of Science in Computer Science. I enjoy learning new things and being constantly challenged."]})]})})}),C=n(2),I=function(){return Object(o.jsxs)(u.a,{basename:"/",children:[Object(o.jsx)(p,{}),Object(o.jsx)(h,{}),Object(o.jsxs)(C.c,{children:[Object(o.jsx)(C.a,{path:"/",element:Object(o.jsx)(y,{})}),Object(o.jsx)(C.a,{path:"/about",element:Object(o.jsx)(k,{})})]})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),c(e),a(e)}))};a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(I,{})}),document.getElementById("root")),E()}],[[23,1,2]]]);
//# sourceMappingURL=main.cdbb0008.chunk.js.map