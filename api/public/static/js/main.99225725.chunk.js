(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{53:function(e,t,n){},54:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(3),i=n(0),o=n.n(i),r=n(16),a=n.n(r),j=(n(53),n(19)),s=n(20),A=n(24),l=n(23),u=(n(54),n(46)),O=n(7),d=n(35),b=n(27),h=n.n(b),x=function(e){var t=e.listening;return Object(c.jsx)("div",{children:Object(c.jsx)("button",{onClick:function(){return h.a.startListening({language:"fr-FR"})},disabled:t,children:"Start"})})},f=function(){var e=Object(b.useSpeechRecognition)(),t=e.transcript,n=e.listening,o=Object(i.useRef)(!1),r=Object(i.useState)(""),a=Object(d.a)(r,2),j=a[0],s=a[1],A=Object(i.useState)(""),l=Object(d.a)(A,2),u=l[0],O=l[1],f=Object(i.useState)(""),v=Object(d.a)(f,2),g=v[0],p=v[1];if(Object(i.useEffect)((function(){if(console.log(n,t,o),t)return n?o.current=!1:void(o.current||(o.current=!0,s(j+"\n"+t)))}),[j,t,n]),!h.a.browserSupportsSpeechRecognition())return null;return Object(c.jsxs)("div",{children:[Object(c.jsx)(x,{listening:n}),Object(c.jsxs)("form",{onSubmit:function(){try{fetch("http://localhost:9000/api/cro",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({pat:u,med:g,cro:j})})}catch(e){console.error(e)}},children:[Object(c.jsx)("input",{value:u,name:"pat_id",onChange:function(e){return O(e.target.value)}}),Object(c.jsx)("input",{value:g,name:"med_id",onChange:function(e){return p(e.target.value)}}),Object(c.jsx)("textarea",{value:j,onChange:function(e){return s(e.target.value)},disabled:n}),Object(c.jsx)("input",{type:"submit",value:"Envoyer"})]})]})},v=n(76),g=n(77),p=n(75),q=function(e){Object(A.a)(n,e);var t=Object(l.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(c.jsxs)(v.a,{bg:"light",expand:"lg",children:[Object(c.jsx)(v.a.Brand,{href:"Accueil",children:Object(c.jsx)("img",{src:"data:image/png;base64,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",alt:"Logo"})}),Object(c.jsx)(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(c.jsx)(v.a.Collapse,{id:"basic-navbar-nav",children:Object(c.jsxs)(g.a,{className:"mr-auto",children:[Object(c.jsx)(g.a.Link,{href:"Accueil",children:"Accueil"}),Object(c.jsx)(g.a.Link,{href:"Speech",children:"Speech To Text"}),Object(c.jsxs)(p.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(c.jsx)(p.a.Item,{href:"#action/3.1",children:"Action"}),Object(c.jsx)(p.a.Item,{href:"#action/3.2",children:"Another action"}),Object(c.jsx)(p.a.Item,{href:"#action/3.3",children:"Something"}),Object(c.jsx)(p.a.Divider,{}),Object(c.jsx)(p.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})}}]),n}(o.a.Component),C=function(e){Object(A.a)(n,e);var t=Object(l.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Hello Accueil"})})}}]),n}(o.a.Component),y=function(e){Object(A.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(j.a)(this,n),(c=t.call(this,e)).state={apiResponse:""},c}return Object(s.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(q,{}),Object(c.jsx)(u.a,{children:Object(c.jsxs)("div",{className:"Container",children:[Object(c.jsx)(O.a,{path:"/Accueil",component:C}),Object(c.jsx)(O.a,{path:"/Speech",component:f}),Object(c.jsx)(O.a,{path:"/",exact:!0,component:C})]})})]})}}]),n}(i.Component),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),o(e),r(e)}))};a.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),I()}},[[69,1,2]]]);
//# sourceMappingURL=main.99225725.chunk.js.map