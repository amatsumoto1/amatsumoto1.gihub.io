(this["webpackJsonpamatsumoto1.gihub.io"]=this["webpackJsonpamatsumoto1.gihub.io"]||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},23:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i),c=n(11),a=n.n(c),o=(n(20),n(21),n(1)),s=function(t){return Object(o.jsx)("nav",{className:"header-nav",children:Object(o.jsx)("ul",{children:t.children})})},h=n(7),u=function(t){var e=t.link,n=t.text;return Object(o.jsx)("li",{className:"header-nav__item",children:Object(o.jsx)(h.b,{to:e,children:n})})},l=(n(23),function(){return Object(o.jsx)("header",{className:"page-header",children:Object(o.jsxs)(s,{children:[Object(o.jsx)(u,{link:"/",text:"Home"}),Object(o.jsx)(u,{link:"/about",text:"About"}),Object(o.jsx)(u,{link:"/",text:"Projects"}),Object(o.jsx)(u,{link:"/",text:"Contact"})]})})}),f=n(4),d=n(15),v=function(t,e){var n=Object(i.useRef)(null),r=Object(i.useRef)(null),c=e.onResize,a=e.onClick,o=e.onMouseMove;return Object(i.useEffect)((function(){if(n.current){r.current=n.current.getContext("2d");var e,i=r.current,c=0;return function n(){i&&(c++,t(i,c)),e=window.requestAnimationFrame(n)}(),function(){window.cancelAnimationFrame(e)}}}),[t]),Object(i.useEffect)((function(){if(r.current){var t={},e=r.current;for(var n in c&&(t.resize=function(){c(e)}),a&&(t.click=function(t){a(e,t)}),o&&(t.mousemove=function(t){o(e,t)}),t)window.addEventListener(n,t[n]);return function(){for(var e in t)window.removeEventListener(e,t[e])}}})),n},j=["draw"],g=function(t){var e=t.draw,n=Object(d.a)(t,j),i=v(e,n);return Object(o.jsx)("canvas",{ref:i})},b=function(t,e){return Math.random()*(e-t)+t},x=function(){return Math.random()>.5?-1:1},m=function(){var t=[],e=function(t,e){var n=e.centerX,i=e.centerY,r=e.iter,c=e.multiplier,a=(e.colorAngle+c*b(.5,2))%360;e.colorAngle=a,t.moveTo(n,i),t.lineWidth=10,t.strokeStyle="hsl(".concat(a,", 30%, 15%)"),t.shadowBlur=10,t.shadowColor="hsl(".concat((a+b(-2,2))%360,", 30%, 15%)"),t.beginPath();for(var o=0,s=0,h=0;h<r;h++){o+=.05,s+=c*(2*Math.PI)/400;var u=n+o*Math.cos(s),l=i+o*Math.sin(s);t.lineTo(u,l)}t.stroke()},n=function(t,e){return{centerX:b(10,t-10),centerY:b(10,e-10),colorAngle:b(0,360),iter:1,maxIter:b(1e3,4e3),increasing:!0,multiplier:x()}},i=function(t,e){var n=t*e;return Math.ceil(n/2e5+1)};return Object(o.jsx)(g,{draw:function(r,c){var a=r.canvas;a.width=a.offsetWidth,a.height=a.offsetHeight,r.clearRect(0,0,a.width,a.height),r.fillStyle="#000000",r.fillRect(0,0,a.width,a.height),function(e,r){for(var c=t.length,a=i(e,r),o=c;o<a;o++)t.push(n(e,r))}(a.width,a.height),function(){var e,n=[],i=Object(f.a)(t);try{for(i.s();!(e=i.n()).done;){var r=e.value;r.iter&&n.push(r),r.increasing=r.increasing&&r.iter<r.maxIter,r.increasing?r.iter++:r.iter--}}catch(c){i.e(c)}finally{i.f()}t=n}();var o,s=Object(f.a)(t);try{for(s.s();!(o=s.n()).done;){var h=o.value;e(r,h)}}catch(u){s.e(u)}finally{s.f()}},onClick:function(e,n){var i=e.canvas.getBoundingClientRect(),r=n.clientX-i.left,c=n.clientY-i.top;t.push({centerX:r,centerY:c,colorAngle:b(0,360),iter:1,maxIter:b(1e3,4e3),increasing:!0,multiplier:x()})}})},w=["#8E5E52","#8E7F52","#868E52","#5D8959","#598984","#686E8C","#927D8F"],p=function(){var t=[],e=function(t,e){return{color:c(),x:b(0,t),y:b(0,e),vx:x()*r(),vy:x()*r()}},n=function(t,e,n){t.x+=t.vx,t.y+=t.vy,(t.x>=e||t.x<=0)&&(t.vx=-Math.sign(t.vx)*r()),(t.y>=n||t.y<=0)&&(t.vy=-Math.sign(t.vy)*r())},i=function(t,e){var n=e.color,i=e.x,r=e.y;t.beginPath(),t.shadowBlur=10,t.shadowColor=n,t.arc(i,r,5,0,2*Math.PI),t.fillStyle=n,t.fill(),t.strokeStyle=n,t.stroke()},r=function(){return b(.5,1.5)},c=function(){return w[Math.floor(Math.random()*w.length)]},a=function(t,e){var n=t*e;return Math.ceil(n/2e3)};return Object(o.jsx)(g,{draw:function(r,c){var o=r.canvas;o.width=o.offsetWidth,o.height=o.offsetHeight,r.clearRect(0,0,o.width,o.height),r.fillStyle="#000000",r.globalCompositeOperation="screen",r.fillRect(0,0,o.width,o.height),t.length||function(n,i){for(var r=a(n,i),c=0;c<r;c++)t.push(e(n,i))}(o.width,o.height);var s,h=Object(f.a)(t);try{for(h.s();!(s=h.n()).done;){var u=s.value;n(u,o.width,o.height),i(r,u)}}catch(l){h.e(l)}finally{h.f()}},onResize:function(n){var i=n.canvas,r=i.width,c=i.height,o=a(r,c),s=t.length;if(s>o)for(var h=s;h>o;h--)t.pop();else for(var u=s;u<o;u++)t.push(e(r,c))}})},y=n(14),O=n(12),M=n(13),k=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(O.a)(this,t),this.x=void 0,this.y=void 0,this.x=e,this.y=n}return Object(M.a)(t,[{key:"add",value:function(t){var e=t.x,n=t.y;this.x+=e,this.y+=n}},{key:"getDisplacement",value:function(e){var n=e.x,i=e.y;return new t(n-this.x,i-this.y)}},{key:"normalize",value:function(){var t=Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));t&&(this.x/=t,this.y/=t)}}]),t}(),C=function(){var t=[],e=Date.now(),n=function(t,e,n){var r=t.width,c=t.height,a=c/100,o={segments:[],thickness:5,opacity:1};return e=e||b(2,r-2),i(o,new k(e,n=n||0),2,r-2,b(-2,2),a,c),o},i=function t(e,n,i,r,c,a,o){for(var s={points:[n]},h=n.x,u=n.y;u<o&&!(s.points.length&&Math.random()<.01);){var l=u+a,f=Math.min(Math.max(h+b(-10+c,10+c),i),r);s.points.push(new k(f,l)),h=f,u=l}if(e.segments.push(s),u<o){var d=new k(h,u);t(e,d,i,h+2,-2,Math.max(a-1,3),o),t(e,d,h-2,r,2,Math.max(a-1,3),o)}},r=function(t){t.opacity-=.01,t.thickness-=.05,t.thickness<=2&&t.segments.forEach((function(t){return t.points[t.points.length-1].y-=.05}))},c=function(t,e){var n=e.segments,i=e.thickness,r=e.opacity;n.forEach((function(e){return function(t,e,n,i){var r=e.points,c=Object(y.a)(r),a=c[0],o=c.slice(1);t.beginPath(),t.moveTo(a.x,a.y),t.lineWidth=n,t.strokeStyle="rgba(255, 255, 255, ".concat(i,")"),t.shadowBlur=30,t.shadowColor="#bd9df2";var s,h=Object(f.a)(o);try{for(h.s();!(s=h.n()).done;){var u=s.value,l=u.x,d=u.y;t.lineTo(l,d)}}catch(v){h.e(v)}finally{h.f()}t.stroke(),t.closePath()}(t,e,i,r)}))};return Object(o.jsx)(g,{draw:function(e,i){var a=e.canvas;a.width=a.offsetWidth,a.height=a.offsetHeight,e.clearRect(0,0,a.width,a.height),e.fillStyle="#000000",e.fillRect(0,0,a.width,a.height),i%200===0&&t.push(n(a)),t.forEach(r),(t=t.filter((function(t){return t.opacity>0&&t.thickness>0}))).forEach((function(t){return c(e,t)}))},onClick:function(i,r){var c=i.canvas.getBoundingClientRect(),a=r.clientX-c.left,o=r.clientY-c.top;e=Date.now(),t.push(n(i.canvas,a,o))},onMouseMove:function(i,r){var c=Date.now();if(c-e>500){var a=i.canvas.getBoundingClientRect(),o=r.clientX-a.left,s=r.clientY-a.top;e=c,t.push(n(i.canvas,o,s))}}})},E=(n(24),function(){var t=[Object(o.jsx)(m,{}),Object(o.jsx)(p,{}),Object(o.jsx)(C,{})],e=function(){var e=Math.floor(Math.random()*t.length);return t[e]}();return Object(o.jsx)("div",{className:"background",children:e})}),R=(n(25),function(){return Object(o.jsx)("div",{className:"home-page"})}),S=(n(26),function(t){return Object(o.jsx)("div",{className:"page-content",children:t.children})}),I=(n(27),function(){return Object(o.jsx)("div",{className:"about-page",children:Object(o.jsxs)(S,{children:[Object(o.jsx)("h1",{className:"about-page__header",children:"About Me"}),Object(o.jsxs)("p",{children:["I am a Full-Stack Software Engineer at ",Object(o.jsx)("a",{href:"https://www.rlicorp.com/",children:"RLI Insurance"}),", building websites for our customers and underwriters. I graduated  in 2018 from Cornell University with a Masters of Engineering in Computer Science. I also graduated from Cornell University in 2017 with a Bachelors of Science in Computer Science. I enjoy learning new things and being constantly challenged."]})]})})}),B=n(2),F=function(){return Object(o.jsxs)(h.a,{basename:"/",children:[Object(o.jsx)(E,{}),Object(o.jsx)(l,{}),Object(o.jsxs)(B.c,{children:[Object(o.jsx)(B.a,{path:"/",element:Object(o.jsx)(R,{})}),Object(o.jsx)(B.a,{path:"/about",element:Object(o.jsx)(I,{})})]})]})},P=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,i=e.getFID,r=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),i(t),r(t),c(t),a(t)}))};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(F,{})}),document.getElementById("root")),P()}},[[28,1,2]]]);
//# sourceMappingURL=main.a73bfa32.chunk.js.map