(this["webpackJsonpamatsumoto1.gihub.io"]=this["webpackJsonpamatsumoto1.gihub.io"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),c=n(11),a=n.n(c),o=(n(20),n(21),n(1)),s=function(e){return Object(o.jsx)("nav",{className:"header-nav",children:Object(o.jsx)("ul",{children:e.children})})},h=n(7),l=function(e){var t=e.link,n=e.text;return Object(o.jsx)("li",{className:"header-nav__item",children:Object(o.jsx)(h.b,{to:t,children:n})})},u=(n(23),function(){return Object(o.jsx)("header",{className:"page-header",children:Object(o.jsxs)(s,{children:[Object(o.jsx)(l,{link:"/",text:"Home"}),Object(o.jsx)(l,{link:"/about",text:"About"}),Object(o.jsx)(l,{link:"/",text:"Projects"}),Object(o.jsx)(l,{link:"/",text:"Contact"})]})})}),f=n(4),d=n(15),j=function(e,t){var n=Object(i.useRef)(null),r=Object(i.useRef)(null),c=t.onResize,a=t.onClick,o=t.onMouseMove;return Object(i.useEffect)((function(){if(n.current){r.current=n.current.getContext("2d");var t,i=r.current,c=0;return function n(){i&&(c++,e(i,c)),t=window.requestAnimationFrame(n)}(),function(){window.cancelAnimationFrame(t)}}}),[e]),Object(i.useEffect)((function(){if(r.current){var e={},t=r.current;for(var n in c&&(e.resize=function(){c(t)}),a&&(e.click=function(e){a(t,e)}),o&&(e.mousemove=function(e){o(t,e)}),e)window.addEventListener(n,e[n]);return function(){for(var t in e)window.removeEventListener(t,e[t])}}})),n},v=["draw"],g=function(e){var t=e.draw,n=Object(d.a)(e,v),i=j(t,n);return Object(o.jsx)("canvas",{ref:i})},b=function(e,t){return Math.random()*(t-e)+e},x=function(){return Math.random()>.5?-1:1},m=function(){var e=[],t=function(e,t){var n=t.centerX,i=t.centerY,r=t.iter,c=t.multiplier,a=(t.colorAngle+c*b(.5,2))%360;t.colorAngle=a,e.moveTo(n,i),e.lineWidth=10,e.strokeStyle="hsl(".concat(a,", 30%, 15%)"),e.shadowBlur=10,e.shadowColor="hsl(".concat((a+b(-2,2))%360,", 30%, 15%)"),e.beginPath();for(var o=0,s=0,h=0;h<r;h++){o+=.05,s+=c*(2*Math.PI)/400;var l=n+o*Math.cos(s),u=i+o*Math.sin(s);e.lineTo(l,u)}e.stroke()},n=function(e,t){return{centerX:b(10,e-10),centerY:b(10,t-10),colorAngle:b(0,360),iter:1,maxIter:b(1e3,4e3),increasing:!0,multiplier:x()}},i=function(e,t){var n=e*t;return Math.ceil(n/2e5+1)};return Object(o.jsx)(g,{draw:function(r,c){var a=r.canvas;a.width=a.offsetWidth,a.height=a.offsetHeight,r.clearRect(0,0,a.width,a.height),r.fillStyle="#000000",r.fillRect(0,0,a.width,a.height),function(t,r){for(var c=e.length,a=i(t,r),o=c;o<a;o++)e.push(n(t,r))}(a.width,a.height),function(){var t,n=[],i=Object(f.a)(e);try{for(i.s();!(t=i.n()).done;){var r=t.value;r.iter&&n.push(r),r.increasing=r.increasing&&r.iter<r.maxIter,r.increasing?r.iter++:r.iter--}}catch(c){i.e(c)}finally{i.f()}e=n}();var o,s=Object(f.a)(e);try{for(s.s();!(o=s.n()).done;){var h=o.value;t(r,h)}}catch(l){s.e(l)}finally{s.f()}},onClick:function(t,n){var i=t.canvas.getBoundingClientRect(),r=n.clientX-i.left,c=n.clientY-i.top;e.push({centerX:r,centerY:c,colorAngle:b(0,360),iter:1,maxIter:b(1e3,4e3),increasing:!0,multiplier:x()})}})},p=["#8E5E52","#8E7F52","#868E52","#5D8959","#598984","#686E8C","#927D8F"],O=function(){var e=[],t=function(e,t){return{color:c(),x:b(0,e),y:b(0,t),vx:x()*r(),vy:x()*r()}},n=function(e,t,n){e.x+=e.vx,e.y+=e.vy,(e.x>=t||e.x<=0)&&(e.vx=-Math.sign(e.vx)*r()),(e.y>=n||e.y<=0)&&(e.vy=-Math.sign(e.vy)*r())},i=function(e,t){var n=t.color,i=t.x,r=t.y;e.beginPath(),e.shadowBlur=10,e.shadowColor=n,e.arc(i,r,5,0,2*Math.PI),e.fillStyle=n,e.fill(),e.strokeStyle=n,e.stroke()},r=function(){return b(.5,1.5)},c=function(){return p[Math.floor(Math.random()*p.length)]},a=function(e,t){var n=e*t;return Math.ceil(n/2e3)};return Object(o.jsx)(g,{draw:function(r,c){var o=r.canvas;o.width=o.offsetWidth,o.height=o.offsetHeight,r.clearRect(0,0,o.width,o.height),r.fillStyle="#000000",r.globalCompositeOperation="screen",r.fillRect(0,0,o.width,o.height),e.length||function(n,i){for(var r=a(n,i),c=0;c<r;c++)e.push(t(n,i))}(o.width,o.height);var s,h=Object(f.a)(e);try{for(h.s();!(s=h.n()).done;){var l=s.value;n(l,o.width,o.height),i(r,l)}}catch(u){h.e(u)}finally{h.f()}},onResize:function(n){var i=n.canvas,r=i.width,c=i.height,o=a(r,c),s=e.length;if(s>o)for(var h=s;h>o;h--)e.pop();else for(var l=s;l<o;l++)e.push(t(r,c))}})},w=n(14),y=n(12),M=n(13),k=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(y.a)(this,e),this.x=void 0,this.y=void 0,this.x=t,this.y=n}return Object(M.a)(e,[{key:"add",value:function(e){var t=e.x,n=e.y;this.x+=t,this.y+=n}},{key:"getDisplacement",value:function(t){var n=t.x,i=t.y;return new e(n-this.x,i-this.y)}},{key:"normalize",value:function(){var e=Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));e&&(this.x/=e,this.y/=e)}}]),e}(),C=function(){var e=[],t=Date.now(),n=function(e,t,n){var r=e.width,c=e.height,a=c/100,o={segments:[],thickness:5,opacity:1};return t=t||b(2,r-2),i(o,new k(t,n=n||0),2,r-2,b(-2,2),a,c),o},i=function e(t,n,i,r,c,a,o){for(var s={points:[n]},h=n.x,l=n.y;l<o&&!(s.points.length&&Math.random()<.01);){var u=l+a,f=Math.min(Math.max(h+b(-10+c,10+c),i),r);s.points.push(new k(f,u)),h=f,l=u}if(t.segments.push(s),l<o){var d=new k(h,l);e(t,d,i,h+2,-2,Math.max(a-1,3),o),e(t,d,h-2,r,2,Math.max(a-1,3),o)}},r=function(e){e.opacity-=.01,e.thickness-=.05,e.thickness<=2&&e.segments.forEach((function(e){return e.points[e.points.length-1].y-=.05}))},c=function(e,t){var n=t.segments,i=t.thickness,r=t.opacity;n.forEach((function(t){return function(e,t,n,i){var r=t.points,c=Object(w.a)(r),a=c[0],o=c.slice(1);e.beginPath(),e.moveTo(a.x,a.y),e.lineWidth=n,e.strokeStyle="rgba(255, 255, 255, ".concat(i,")"),e.shadowBlur=30,e.shadowColor="#bd9df2";var s,h=Object(f.a)(o);try{for(h.s();!(s=h.n()).done;){var l=s.value,u=l.x,d=l.y;e.lineTo(u,d)}}catch(j){h.e(j)}finally{h.f()}e.stroke(),e.closePath()}(e,t,i,r)}))};return Object(o.jsx)(g,{draw:function(t,i){var a=t.canvas;a.width=a.offsetWidth,a.height=a.offsetHeight,t.clearRect(0,0,a.width,a.height),t.fillStyle="#000000",t.fillRect(0,0,a.width,a.height),i%200===0&&e.push(n(a)),e.forEach(r),(e=e.filter((function(e){return e.opacity>0&&e.thickness>0}))).forEach((function(e){return c(t,e)}))},onClick:function(i,r){var c=i.canvas.getBoundingClientRect(),a=r.clientX-c.left,o=r.clientY-c.top;t=Date.now(),e.push(n(i.canvas,a,o))},onMouseMove:function(i,r){var c=Date.now();if(c-t>500){var a=i.canvas.getBoundingClientRect(),o=r.clientX-a.left,s=r.clientY-a.top;t=c,e.push(n(i.canvas,o,s))}}})},_=(n(24),function(){var e=[Object(o.jsx)(m,{}),Object(o.jsx)(O,{}),Object(o.jsx)(C,{})],t=function(){var t=Math.floor(Math.random()*e.length);return e[t]}();return Object(o.jsx)("div",{className:"background",children:t})}),E=(n(25),function(){return Object(o.jsx)("footer",{className:"page-footer"})}),S=(n(26),function(e){return Object(o.jsx)("div",{className:"page-content",children:e.children})}),N=(n(27),function(){return Object(o.jsx)("div",{className:"home-page",children:Object(o.jsx)(S,{children:Object(o.jsxs)("div",{className:"home-page__wrapper",children:[Object(o.jsx)("h1",{className:"home-page__header",children:Object(o.jsx)("span",{className:"home-page__header__text",children:"Andrew Matsumoto"})}),Object(o.jsx)("h2",{className:"home-page__subheader",children:Object(o.jsx)("span",{className:"home-page__subheader__text",children:"Passionate About Developing Smart, Customer-Oriented Solutions."})})]})})})}),R=(n(28),function(){return Object(o.jsx)("div",{className:"about-page",children:Object(o.jsxs)(S,{children:[Object(o.jsx)("h1",{className:"about-page__header",children:"About Me"}),Object(o.jsxs)("p",{children:["I am a Full-Stack Software Engineer at ",Object(o.jsx)("a",{href:"https://www.rlicorp.com/",children:"RLI Insurance"}),", building websites for our customers and underwriters. I graduated  in 2018 from Cornell University with a Masters of Engineering in Computer Science. I also graduated from Cornell University in 2017 with a Bachelors of Science in Computer Science. I enjoy learning new things and being constantly challenged."]})]})})}),I=n(2),A=function(){return Object(o.jsxs)(h.a,{basename:"/",children:[Object(o.jsx)(_,{}),Object(o.jsx)(u,{}),Object(o.jsxs)(I.c,{children:[Object(o.jsx)(I.a,{path:"/",element:Object(o.jsx)(N,{})}),Object(o.jsx)(I.a,{path:"/about",element:Object(o.jsx)(R,{})})]}),Object(o.jsx)(E,{})]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),r(e),c(e),a(e)}))};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(A,{})}),document.getElementById("root")),P()}},[[29,1,2]]]);
//# sourceMappingURL=main.cdedb765.chunk.js.map