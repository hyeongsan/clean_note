(this.webpackJsonpprac=this.webpackJsonpprac||[]).push([[0],{29:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),o=c(11),s=c.n(o),i=(c(29),c(9)),l=c(4),r=c(3),u=c(24),j=c(1),b=function(e){var t=e.type,c=e.value,n=e.placeholder,a=e.onChange,o=e.errorMessage;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{className:"movieTitle",type:t,value:c,placeholder:n,onChange:a}),Object(j.jsx)("span",{className:"nullText",children:o})]})},O=function(e){var t=e.type,c=e.value,n=e.placeholder,a=e.onChange,o=e.errorMessage;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("textarea",{wrap:"hard",className:"movieText",type:t,value:c,placeholder:n,onChange:a}),Object(j.jsx)("span",{className:"nullText",children:o})]})},d=function(e){var t=Object(n.useState)(""),c=Object(r.a)(t,2),a=c[0],o=c[1],s=Object(n.useState)(""),i=Object(r.a)(s,2),l=i[0],d=i[1],p=Object(n.useState)(""),h=Object(r.a)(p,2),m=h[0],f=h[1],v=Object(n.useState)(""),x=Object(r.a)(v,2),g=x[0],S=x[1],N=Object(n.useState)(!1),k=Object(r.a)(N,2),y=(k[0],k[1],Object(n.useState)(!0)),C=Object(r.a)(y,2),I=(C[0],C[1],!0);Object(n.useEffect)((function(){w()}),[e.pick]);var E=function(){var t={id:Date.now(),title:a,year:l};console.log("\uc2e4\ud589");var c=JSON.parse(localStorage.getItem("allEntries"));null==c&&localStorage.setItem("allEntries",[]),c.push(t),e.addMovie(c),o(""),d("")},P=function(){var t={id:Date.now(),title:null,year:l};console.log("\uc2e4\ud589");var c=JSON.parse(localStorage.getItem("allEntries"));null==c&&localStorage.setItem("allEntries",[]),c.push(t),e.addMovie(c),o(""),d("")},M=function(){var e=!0;return a||(I=!1),l||(e=!1),e&&(o(""),d("")),e},w=function(){f(""),S("")},J=e.formDisplayNone?{display:"none"}:{display:"unset"};return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("inputValue")),t=JSON.parse(localStorage.getItem("txtValue"));null===e?localStorage.setItem("inputValue",[]):o(e),null===t?localStorage.setItem("txtValue",[]):d(t)}),[]),Object(n.useEffect)((function(){a?localStorage.setItem("inputValue",JSON.stringify(a)):localStorage.removeItem("inputValue")}),[a]),Object(n.useEffect)((function(){l?localStorage.setItem("txtValue",JSON.stringify(l)):localStorage.removeItem("txtValue")}),[l]),Object(j.jsx)("div",{className:"App",children:e.toggle?Object(j.jsx)("div",{children:Object(j.jsxs)("form",{className:"movieForm",onSubmit:function(t){t.preventDefault(),w(),!0===e.toggle&&M()&&(I&&E(),I||(I=!0,P()))},children:[Object(j.jsxs)("div",{className:"field",style:J,children:[Object(j.jsx)(b,{type:"text",value:a,placeholder:"",onChange:function(e){o(e.target.value)},errorMessage:m}),Object(j.jsx)(O,{type:"text",value:l,placeholder:"",onChange:function(e){d(e.target.value)},errorMessage:g})]}),Object(j.jsxs)("div",{className:"buttonIcon",children:[Object(j.jsx)("button",{type:"button",onClick:function(){w(),e.setFormDisplayNone(!e.formDisplayNone)},className:e.formDisplayNone?null:"press",children:Object(j.jsx)("span",{className:e.formDisplayNone?"original":"rotate",children:Object(j.jsx)("i",{class:"fas fa-chevron-down"})})}),Object(j.jsx)("button",{type:"submit",className:e.buttonNone?"addbtn":"btnNone",style:J,children:Object(j.jsx)("span",{className:"plusIcon",children:Object(j.jsx)("span",{children:Object(j.jsx)("i",{class:"fas fa-plus"})})})}),Object(j.jsx)("button",{type:"button",onClick:e.removeChecked,children:Object(j.jsx)("span",{children:Object(j.jsx)("i",{class:"fas fa-trash"})})})]})]})}):Object(j.jsxs)("form",{className:"movieForm",onSubmit:function(t){if(console.log("\uc218\uc815"),t.preventDefault(),w(),e.setPickNone(!1),e.setPickState(null),!1===e.toggle){e.setToggle(!0),console.log("test");var c=Object(u.a)(e.movies);c.map((function(t){t.id===e.pick.id&&(t.title=e.picktitle,t.year=e.pickYear)}))}localStorage.setItem("allEntries",JSON.stringify(c)),o(""),d("")},children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)(b,{type:"text",value:e.picktitle,placeholder:"",onChange:function(t){return e.setPicktitle(t.target.value)},errorMessage:m}),Object(j.jsx)(O,{type:"text",value:e.pickYear,placeholder:"",onChange:function(t){return e.setPickYear(t.target.value)},errorMessage:g})]}),Object(j.jsx)("div",{className:"buttonIcon",style:{width:"358px",textAlign:"center",display:"block"},children:Object(j.jsx)("button",{type:"submit",className:"addbtn pink",style:{color:"#fff",backgroundColor:"#f2bdbd",boxShadow:"none"},children:Object(j.jsx)("span",{className:"plusIcon",children:Object(j.jsx)("i",{class:"fas fa-plus"})})})})]})})},p=function(e){var t=e.movie,c=(e.movies,e.setMovies),a=(e.removeMovie,e.pickMovie),o=e.pickNone,s=e.pickState,l=(e.titleState,e.trash),u=e.setButtonNone,b=e.setPickNone,O=e.put,d=(e.setPut,e.buttonNone,e.trashShow,e.putShow,e.addMovie,e.destination,Object(n.useState)(!1)),p=Object(r.a)(d,2),h=p[0],m=p[1],f=Object(n.useRef)(),v=function(e){m(!h)};Object(n.useEffect)((function(){}),[]),Object(n.useEffect)((function(){"none"===t.title&&console.log(s)}),[s]),Object(n.useEffect)((function(){u(!0),b(!1)}),[l]),Object(n.useEffect)((function(){var e=document.querySelector("input[type='checkbox']:nth-of-type(1)");e.parentNode.classList.contains("on")?e.parentNode.classList.add("on"):e.parentNode.classList.remove("on"),u(!0),b(!1)}),[O]),Object(n.useEffect)((function(){}),[]);return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:t.checked?"movieAndButton on":"movieAndButton",draggable:"true",children:Object(j.jsx)("div",{className:s===t.id?"movie on":"movie",children:Object(j.jsxs)("div",{className:h?"movie_cont press":"movie_cont",children:[Object(j.jsx)("input",{ref:f,className:"checkbox",onChange:function(e){return function(e,t){c((function(c){var n=c.map((function(c){return c===t?Object(i.a)(Object(i.a)({},t),{},{checked:e.target.checked}):c}));return localStorage.setItem("allEntries",JSON.stringify(n)),n}))}(e,t)},checked:!!t.checked,type:"checkbox",id:"cb1"}),Object(j.jsx)("label",{for:"cb1"}),Object(j.jsx)("div",{className:h?"movie-title break":"movie-title",onClick:function(e){return v()},children:t.title}),Object(j.jsx)("span",{onClick:function(e){return v()},className:"areaHelper"}),Object(j.jsx)("div",{className:h?"movie-year on":"movie-year",onClick:function(e){return v()},children:t.year}),Object(j.jsx)("div",{className:"movie_btn",children:Object(j.jsx)("button",{onClick:function(){return a(t)},style:o?{pointerEvents:"none",display:"none"}:{pointerEvents:"auto"},children:Object(j.jsx)("i",{class:"fas fa-pencil-alt"})})})]})})}),Object(j.jsx)("div",{className:"checkButton",children:Object(j.jsx)("button",{children:Object(j.jsx)("i",{class:"far fa-circle"})})})]})},h=function(e){var t=e.movie,c=(e.removeMovie,e.pickMovie),a=e.pickNone,o=e.pickState,s=(e.titleState,e.trash),l=e.setButtonNone,u=e.setPickNone,b=e.put,O=(e.buttonNone,e.trashShow,e.putShow,e.setMovies),d=Object(n.useState)(!1),p=Object(r.a)(d,2),h=p[0],m=p[1],f=function(){m(!h)},v={pointerEvents:"auto"};Object(n.useEffect)((function(){"none"===t.title&&console.log(o)}),[o]),Object(n.useEffect)((function(){if(document.querySelector("input[type='checkbox']:checked"));l(!0),u(!1)}),[s]);Object(n.useEffect)((function(){var e=document.querySelector("input[type='checkbox']:nth-of-type(1)");e.parentNode.classList.contains("on")?e.parentNode.classList.add("on"):e.parentNode.classList.remove("on"),l(!0),u(!1)}),[b]);return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:t.checked?"movieAndButton on":"movieAndButton",draggable:"true",children:Object(j.jsx)("div",{className:o===t.id?"movie on":"movie",style:v,children:Object(j.jsxs)("div",{className:"movie_cont",children:[Object(j.jsx)("input",{className:"checkbox",onChange:function(e){return function(e,t){O((function(c){var n=c.map((function(c){return c===t?Object(i.a)(Object(i.a)({},t),{},{checked:e.target.checked}):c}));return localStorage.setItem("allEntries",JSON.stringify(n)),n}))}(e,t)},checked:!!t.checked,type:"checkbox",id:"cb1"}),Object(j.jsx)("label",{for:"cb1"}),Object(j.jsx)("span",{onClick:function(){return f()},className:"areaHelper"}),Object(j.jsx)("div",{className:h?"only-year break":"only-year",onClick:function(){return f()},children:t.year}),Object(j.jsx)("div",{className:"movie_btn",children:Object(j.jsx)("button",{onClick:function(){return c(t)},style:a?{pointerEvents:"none",display:"none"}:v,children:Object(j.jsx)("i",{class:"fas fa-pencil-alt"})})})]})})}),Object(j.jsx)("div",{className:"checkButton",children:Object(j.jsx)("button",{children:Object(j.jsx)("i",{class:"far fa-circle"})})})]})};var m=function(e){var t=e.movie,c=e.movies,n=e.setMovies,a=e.removeMovie,o=e.pickMovie,s=e.pickNone,i=e.pickState,l=e.titleState,r=e.trash,u=e.setButtonNone,b=e.setPickNone,O=e.put,d=e.setPut,m=e.buttonNone,f=e.putShow,v=e.trashShow,x=e.addMovie,g=e.removeChecked,S=e.destination;return Object(j.jsx)(j.Fragment,{children:null!==t.title?Object(j.jsx)(p,{movie:t,movies:c,setMovies:n,removeMovie:a,pickMovie:o,pickNone:s,pickState:i,titleState:l,put:O,setPut:d,trash:r,setButtonNone:u,setPickNone:b,buttonNone:m,putShow:f,trashShow:v,addMovie:x,removeChecked:g,destination:S}):Object(j.jsx)(h,{movie:t,setMovies:n,removeMovie:a,pickMovie:o,pickNone:s,pickState:i,titleState:l,put:O,trash:r,setButtonNone:u,setPickNone:b,buttonNone:m,putShow:f,trashShow:v})})},f=c(17),v=[{path:"/",component:function(){var e,t=Object(n.useState)([]),c=Object(r.a)(t,2),a=c[0],o=c[1],s=Object(n.useState)(!0),u=Object(r.a)(s,2),b=u[0],O=u[1],p=Object(n.useState)(!1),h=Object(r.a)(p,2),v=h[0],x=h[1],g=Object(n.useState)(),S=Object(r.a)(g,2),N=S[0],k=S[1],y=Object(n.useState)(),C=Object(r.a)(y,2),I=C[0],E=C[1],P=Object(n.useState)(),M=Object(r.a)(P,2),w=M[0],J=M[1],B=Object(n.useState)(!1),D=Object(r.a)(B,2),T=D[0],F=D[1],V=Object(n.useState)(!1),A=Object(r.a)(V,2),L=(A[0],A[1]),Y=Object(n.useState)(!1),_=Object(r.a)(Y,2),R=_[0],q=_[1],H=Object(n.useState)(),z=Object(r.a)(H,2),G=z[0],K=z[1],Q=Object(n.useState)(!1),U=Object(r.a)(Q,2),W=U[0],X=U[1],Z=Object(n.useState)(!1),$=Object(r.a)(Z,2),ee=$[0],te=$[1],ce=Object(n.useState)(),ne=Object(r.a)(ce,2),ae=ne[0],oe=ne[1],se=Object(n.useState)(!0),ie=Object(r.a)(se,2),le=ie[0],re=ie[1],ue=Object(n.useState)(!0),je=Object(r.a)(ue,2),be=je[0],Oe=je[1],de=Object(n.useState)(!0),pe=Object(r.a)(de,2),he=pe[0],me=pe[1],fe=Object(n.useState)(!0),ve=Object(r.a)(fe,2),xe=ve[0],ge=ve[1],Se=Object(n.useState)(!1),Ne=Object(r.a)(Se,2),ke=Ne[0],ye=Ne[1],Ce=Object(n.useState)(!1),Ie=Object(r.a)(Ce,2),Ee=Ie[0],Pe=Ie[1],Me=Object(n.useState)(!1),we=Object(r.a)(Me,2),Je=we[0],Be=we[1],De=Object(n.useState)(!1),Te=Object(r.a)(De,2),Fe=Te[0];Te[1];if(Object(n.useEffect)((function(){null==JSON.parse(localStorage.getItem("allEntries"))&&localStorage.setItem("allEntries","[]");var e=JSON.parse(localStorage.getItem("allEntries"));o(e),console.log(a)}),[]),Object(n.useEffect)((function(){})),a)document.querySelectorAll(".movie");var Ve=function(e){localStorage.setItem("allEntries",JSON.stringify(e));var t=JSON.parse(localStorage.getItem("allEntries"));t&&o(t)},Ae=function(e){if(!0===R){!function(e){o(a.filter((function(t){return t.id!==e})))}(e),O(!0);var t=a.filter((function(t){return t.id!==e}));localStorage.setItem("allEntries",JSON.stringify(t))}else q(!0),K(e),te(!0)},Le=function(e){k(e),E(e.title),J(e.year),O(!1),oe(e.id),b||e.id!==ae||(O(!0),oe(null));a.filter((function(t){return t.id===e.id}));var t=JSON.parse(localStorage.getItem("inputValue")),c=JSON.parse(localStorage.getItem("txtValue"));(t||c)&&(console.log("popup"),F(!0),O(!0),K(e))},Ye=function(){o((function(e){var t=e.filter((function(e){return!e.checked}));return localStorage.setItem("allEntries",JSON.stringify(t)),t}))},_e=a.length?Object(j.jsx)(f.a,{onDragEnd:function(e){if(e.destination){var t=Array.from(a),c=t.splice(e.source.index,1),n=Object(r.a)(c,1)[0];t.splice(e.destination.index,0,n),o(t),localStorage.setItem("allEntries",JSON.stringify(t))}},children:Object(j.jsx)(f.c,{droppableId:"12345678",children:function(e){return Object(j.jsxs)("ul",Object(i.a)(Object(i.a)({className:"characters"},e.droppableProps),{},{ref:e.innerRef,children:[a.map((function(e,t){return Object(j.jsx)(f.b,{draggableId:e.id.toString(),index:t,children:function(t){var c;return Object(j.jsx)("li",Object(i.a)(Object(i.a)(Object(i.a)({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{children:Object(j.jsx)(m,(c={movie:e,movies:a,setMovies:o,removeMovie:Ae,pickMovie:Le,togglePointer:W,setTogglePointer:X,removePopup:R,pickNone:ee,listToggle:v,setListToggle:x},Object(l.a)(c,"movies",a),Object(l.a)(c,"pickState",ae),Object(l.a)(c,"setPickState",oe),Object(l.a)(c,"titleState",le),Object(l.a)(c,"trash",ke),Object(l.a)(c,"setButtonNone",Oe),Object(l.a)(c,"setPickNone",te),Object(l.a)(c,"put",Ee),Object(l.a)(c,"setPut",Pe),Object(l.a)(c,"buttonNone",be),Object(l.a)(c,"putShow",xe),Object(l.a)(c,"trashShow",he),Object(l.a)(c,"addMovie",Ve),Object(l.a)(c,"removeChecked",Ye),Object(l.a)(c,"destination",Fe),c),e.id)}))}},e.id.toString())})),e.placeholder]}))}})}):null;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"AppBorder",style:{display:"flex",flexDirection:"column",alignItems:"center",background:"#ebecf0",borderRadius:"10px",position:"relative",width:"460px",height:"960px"},children:[Object(j.jsx)("h1",{className:"title"}),b?Object(j.jsx)(d,(e={addMovie:Ve,btnText:"+",toggle:b,movies:a,setPickState:oe,setSettingsPopup:L,setTitleState:re,titleState:le,buttonNone:be,setButtonNone:Oe,setTrash:ye,trash:ke,setPut:Pe,put:Ee},Object(l.a)(e,"setButtonNone",Oe),Object(l.a)(e,"setTrashShow",me),Object(l.a)(e,"trashShow",he),Object(l.a)(e,"setPutShow",ge),Object(l.a)(e,"putShow",xe),Object(l.a)(e,"removeChecked",Ye),Object(l.a)(e,"formDisplayNone",Je),Object(l.a)(e,"setFormDisplayNone",Be),e)):Object(j.jsx)(d,{btnText:"+",toggle:b,setToggle:O,movies:a,pick:N,picktitle:I,pickYear:w,setPicktitle:E,setPickYear:J,setRemovePopup:q,setPickNone:te,setPickState:oe,removeChecked:Ye,formDisplayNone:Je,setFormDisplayNone:Be}),Object(j.jsx)("div",{className:Je?"movieBox on":"movieBox",children:_e}),R?Object(j.jsxs)("div",{className:"showPopup",children:[Object(j.jsx)("div",{className:"transArea"}),Object(j.jsxs)("div",{className:"popupCenter",children:[Object(j.jsx)("span",{children:"show!!!"}),Object(j.jsx)("button",{onClick:function(){q(!1),Ae(G),te(!1),oe(null)},children:"Yes"}),Object(j.jsx)("button",{onClick:function(){q(!1),te(!1)},children:"NO"})]})]}):null,T?Object(j.jsxs)("div",{className:"showPopup",children:[Object(j.jsx)("div",{className:"transArea"}),Object(j.jsx)("div",{className:"popupCenter",children:Object(j.jsxs)("div",{className:"popupCenter",children:[Object(j.jsx)("span",{children:"\uc791\uc131\uc911\uc778 \ub0b4\uc6a9\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc791\uc131\uc744 \ucde8\uc18c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"}),Object(j.jsx)("button",{onClick:function(){F(!T),localStorage.removeItem("inputValue"),localStorage.removeItem("txtValue"),Le(G)},children:"Yes"}),Object(j.jsx)("button",{onClick:function(){F(!T),oe(null)},children:"NO"})]})})]}):null]})})}}],x=c(22),g=c(5);var S=function(){return Object(j.jsx)(x.a,{basename:"https://hyeongsan.github.io/clean_note",children:Object(j.jsx)("div",{className:"note",children:Object(j.jsx)(g.c,{children:v.map((function(e){return Object(j.jsx)(g.a,{exact:!0,path:e.path,component:e.component},e.path)}))})})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),o(e),s(e)}))};c(39);s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),N()}},[[43,1,2]]]);
//# sourceMappingURL=main.a4b14ead.chunk.js.map