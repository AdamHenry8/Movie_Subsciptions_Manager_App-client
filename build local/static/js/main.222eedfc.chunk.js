(this["webpackJsonpmy-movie-managment-site"]=this["webpackJsonpmy-movie-managment-site"]||[]).push([[0],{15:function(e,t,n){},41:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(20),a=n.n(c),s=(n(41),n(6)),i=n(2),u=n.n(i),o=n(5),b=n(3),j=n(9),l=n.n(j),m=n(16),d=n(0);var p=function(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(0),i=Object(b.a)(a,2),j=i[0],p=i[1],O=Object(r.useState)([]),f=Object(b.a)(O,2),h=f[0],v=f[1],x=Object(r.useState)({}),g=Object(b.a)(x,2),y=(g[0],g[1],Object(r.useState)(!1)),w=Object(b.a)(y,2),_=(w[0],w[1]),S=Object(r.useState)(""),C=Object(b.a)(S,2),k=C[0],M=C[1],D=Object(s.f)(),E=Object(m.b)();return Object(r.useEffect)((function(){function e(){return(e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("http://localhost:8000/api/users");case 2:t=e.sent,v(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Log in Page"}),"User Name: ",Object(d.jsx)("input",{type:"text",onChange:function(e){return c(e.target.value)}})," ",Object(d.jsx)("br",{}),"Password: ",Object(d.jsx)("input",{type:"text",onChange:function(e){return p(e.target.value)}})," ",Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"button",value:"Login",onClick:function(){var e=h.filter((function(e){return e.user_name===n&&e.password==j}));e[0]?(_(!0),D.push("/home"),E({type:"setLoggedInUser",payload:e[0]})):M("*user details incorrect, please try again")}})," ",Object(d.jsx)("br",{}),Object(d.jsxs)("p",{style:{color:"red",fontSize:"12px"},children:[" ",k]})]})},O="https://mern-final-movie-sub-app.herokuapp.com/api/",f={getSubs:function(){return l.a.get(O+"subscriptions")},getMembers:function(){return l.a.get(O+"members")},getMovie:function(e){return l.a.get(O+"movies/"+e)},getMovies:function(){return l.a.get(O+"movies")},addMovie:function(e){return l.a.post(O+"movies/",e)},updateMovie:function(e,t){return l.a.put(O+"movies/"+e,t)},deleteMovie:function(e){return l.a.delete(O+"movies/"+e)},deleteSubsByMovieId:function(e){return l.a.delete(O+"movie/"+e)},addMember:function(e){return l.a.post(O+"members/",e)},getMember:function(e){return l.a.get(O+"members/"+e)},updateMember:function(e,t){return l.a.put(O+"members/"+e,t)},deleteMember:function(e){return l.a.delete(O+"members/"+e)},deleteSubsByMemberId:function(e){return l.a.delete(O+"member/"+e)},getWatched:function(e){return l.a.get(O+"member/"+e)},postNewSub:function(e){return l.a.post(O+"subscriptions",e)}},h=(n(15),n(23)),v=n(8);var x=function(e){var t=Object(r.useState)([]),n=Object(b.a)(t,2),c=n[0],a=n[1],i=Object(s.f)();Object(r.useEffect)((function(){function t(){return(t=Object(o.a)(u.a.mark((function t(){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.getSubs();case 2:n=t.sent,r=n.data.filter((function(t){return t.movie_id._id===e.movieData._id})),a.apply(void 0,Object(h.a)(c).concat([r]));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var j=function(){var t=Object(o.a)(u.a.mark((function t(){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.deleteMovie(e.movieData._id);case 2:return n=t.sent,t.next=5,f.deleteSubsByMovieId(e.movieData._id);case 5:r=t.sent,alert(n.data+" "+r.data);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{style:{border:"5px solid black",width:"50%"},children:[Object(d.jsxs)("h3",{children:[e.movieData.name,", ",e.movieData.year_premiered]}),Object(d.jsxs)("p",{children:["Genres: ",e.movieData.generes.map((function(e,t){return Object(d.jsxs)("span",{children:[e," "]},t)}))]}),Object(d.jsxs)("div",{id:"img+subs wrapper",style:{overflow:"hidden"},children:[Object(d.jsx)("div",{id:"img-wrapper",style:{float:"left"},children:Object(d.jsx)("img",{style:{},src:e.movieData.image_url,alt:"moviePoster"})}),Object(d.jsxs)("div",{id:"sub-wrapper",style:{border:"5px solid black",float:"left",margin:"5px",padding:"10px"},children:[Object(d.jsx)("h2",{children:"Subscriptions Watched"}),Object(d.jsx)("ul",{children:c.map((function(e){return Object(d.jsxs)("li",{children:[Object(d.jsx)(v.b,{to:"/home/subscriptions/editmember/"+e.member_id._id,children:e.member_id.full_name}),",  ",e.date]},e._id)}))})]})]}),Object(d.jsx)("button",{type:"button",class:"main-buttons",onClick:function(){var t=e.movieData._id;i.push("/home/movies/editmovie/"+t)},children:"Edit"}),Object(d.jsx)("button",{type:"button",class:"main-buttons",onClick:j,children:"Delete"})]})};var g=function(e){var t=Object(r.useState)([]),n=Object(b.a)(t,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){e.filteredMovies.length>0?a(e.filteredMovies):function(){var e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getMovies("http://localhost:8000/api/movies");case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[c,e.filteredMovies]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"hi from all movies"}),Object(d.jsx)("div",{id:"sub-routing-outlet-wrapper",children:c.map((function(e){return Object(d.jsx)(x,{movieData:e},e._id)}))})]})};var y=function(e){var t=Object(r.useState)(""),n=Object(b.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)(""),j=Object(b.a)(i,2),l=j[0],m=j[1],p=Object(r.useState)(""),O=Object(b.a)(p,2),h=O[0],v=O[1],x=Object(r.useState)(""),g=Object(b.a)(x,2),y=g[0],w=g[1],_=Object(s.f)(),S=function(){var e=Object(o.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={name:c,year_premiered:l,generes:h.split(","),image_url:y},e.next=4,f.addMovie(n);case 4:r=e.sent,alert(r.data),_.push("/home/movies/allmovies");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:function(e){return S(e)},children:["Name: ",Object(d.jsx)("input",{type:"text",onChange:function(e){return a(e.target.value)}})," ",Object(d.jsx)("br",{}),"Year Premiered: ",Object(d.jsx)("input",{type:"text",onChange:function(e){return m(e.target.value)}})," ",Object(d.jsx)("br",{}),"Genres: ",Object(d.jsx)("input",{type:"text",onChange:function(e){return v(e.target.value)}})," ",Object(d.jsx)("br",{}),"Image URL: ",Object(d.jsx)("input",{type:"text",onChange:function(e){return w(e.target.value)}})," ",Object(d.jsx)("br",{}),Object(d.jsx)("button",{class:"main-buttons",type:"submit",children:"Add Movie"}),Object(d.jsx)("button",{class:"main-buttons",type:"button",onClick:function(){_.push("/home/movies/allmovies")},children:"Cancel"})]})})},w=n(7);var _=function(e){var t=Object(r.useState)({}),n=Object(b.a)(t,2),c=n[0],a=n[1],i=Object(s.f)();Object(r.useEffect)((function(){function t(){return(t=Object(o.a)(u.a.mark((function t(){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.match.params.id,t.next=3,f.getMovie(n);case 3:r=t.sent,a(r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.match.params.id]);var j=function(){var e=Object(o.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,f.updateMovie(c._id,c);case 3:n=e.sent,alert(n.data),i.push("/home/movies/allmovies");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{children:[Object(d.jsxs)("h3",{children:["Edit Movie: ",c.name]}),Object(d.jsxs)("form",{onSubmit:function(e){return j(e)},children:["Name: ",Object(d.jsx)("input",{type:"text",value:c.name,onChange:function(e){return a(Object(w.a)(Object(w.a)({},c),{},{name:e.target.value}))}})," ",Object(d.jsx)("br",{}),"Genres: ",Object(d.jsx)("input",{type:"text",value:c.generes,onChange:function(e){return function(e){var t=e.target.value.split(",");a(Object(w.a)(Object(w.a)({},c),{},{generes:t}))}(e)}})," ",Object(d.jsx)("br",{}),"Image URL: ",Object(d.jsx)("input",{type:"text",value:c.image_url,onChange:function(e){return a(Object(w.a)(Object(w.a)({},c),{},{image_url:e.target.value}))}})," ",Object(d.jsx)("br",{}),"Year Premiered: ",Object(d.jsx)("input",{type:"text",value:c.year_premiered,onChange:function(e){return a(Object(w.a)(Object(w.a)({},c),{},{year_premiered:e.target.value}))}})," ",Object(d.jsx)("br",{}),Object(d.jsx)("button",{type:"submit",class:"main-buttons",children:"Update"}),Object(d.jsx)("button",{type:"button",class:"main-buttons",onClick:function(){i.push("/home/movies/allmovies")},children:"Cancel"})]})]})};var S=function(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),i=Object(b.a)(a,2),j=i[0],l=i[1],p=Object(s.f)(),O=Object(m.c)((function(e){return e.loggedInUser}));Object(r.useEffect)((function(){document.getElementById("btn").click()}),[]);var h=function(){var e=Object(o.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getMovies();case 2:t=e.sent,r=t.data.filter((function(e){return e.name.includes(n)})),l(r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{style:{border:"5px solid black"},children:[Object(d.jsx)("h1",{children:"Movies"})," ",Object(d.jsx)("br",{}),O.full_name,Object(d.jsxs)("div",{id:"sub-menu-wrapper",children:[Object(d.jsx)("button",{type:"button",id:"btn",class:"main-buttons",autoFocus:!0,onClick:function(){p.push("/home/movies/allmovies")},children:"All Movies"}),Object(d.jsx)("button",{type:"button",class:"main-buttons",onClick:function(){p.push("/home/movies/addmovie")},children:"Add Movie"}),"Find Movies: ",Object(d.jsx)("input",{type:"text",name:"search-movies",onChange:function(e){return c(e.target.value)}}),Object(d.jsx)("button",{class:"main-buttons",onClick:h,children:"Find"})," ",Object(d.jsx)("br",{})]}),Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{path:"/home/movies/allmovies",children:Object(d.jsx)(g,{filteredMovies:j})}),Object(d.jsx)(s.a,{path:"/home/movies/addmovie",component:y}),Object(d.jsx)(s.a,{path:"/home/movies/editmovie/:id",component:_})]})]})};var C=function(e){var t=Object(r.useState)([]),n=Object(b.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)(0),j=Object(b.a)(i,2),l=j[0],m=j[1],p=Object(r.useState)(""),O=Object(b.a)(p,2),h=O[0],v=O[1];Object(s.f)(),Object(r.useEffect)((function(){function e(){return(e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getMovies();case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var x=function(){var t=Object(o.a)(u.a.mark((function t(n){var r,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),console.log(l,h),r={movie_id:l,member_id:e.member_id,date:h},t.next=5,f.postNewSub(r);case 5:c=t.sent,alert(c.data);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:function(e){return x(e)},children:["Add a new movie subscription :  ",Object(d.jsx)("br",{}),"movie :",Object(d.jsxs)("select",{name:"movie_name",onChange:function(e){return m(e.target.value)},children:[Object(d.jsx)("option",{value:""}),c.map((function(e){return Object(d.jsx)("option",{value:e._id,children:e.name},e._id)}))]}),"  ",Object(d.jsx)("br",{}),"date (dd/mm/yyyy): ",Object(d.jsx)("input",{type:"text",onChange:function(e){return v(e.target.value)}})," ",Object(d.jsx)("br",{}),Object(d.jsx)("button",{class:"main-buttons",type:"submit",children:"subscribe"})]})})};var k=function(e){var t=Object(r.useState)(!1),n=Object(b.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)([]),j=Object(b.a)(i,2),l=j[0],m=j[1],p=Object(s.f)();Object(r.useEffect)((function(){function t(){return(t=Object(o.a)(u.a.mark((function t(){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.getSubs();case 2:n=t.sent,r=n.data.filter((function(t){return t.member_id._id===e.memberData._id})),m.apply(void 0,Object(h.a)(l).concat([r]));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var O=function(){var t=Object(o.a)(u.a.mark((function t(){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.deleteMember(e.memberData._id);case 2:return n=t.sent,t.next=5,f.deleteSubsByMemberId(e.memberData._id);case 5:r=t.sent,alert(n.data+" "+r.data);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{style:{border:"5px solid black",width:"50%"},children:[Object(d.jsx)("h3",{children:e.memberData.full_name})," ",Object(d.jsx)("br",{}),"Email: ",Object(d.jsx)("span",{children:e.memberData.email})," ",Object(d.jsx)("br",{}),"City: ",Object(d.jsx)("span",{children:e.memberData.city})," ",Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:function(){var t=e.memberData._id;p.push("/home/subscriptions/editmember/"+t)},children:"Edit"}),Object(d.jsx)("button",{onClick:O,children:"Delete"})," ",Object(d.jsx)("br",{}),Object(d.jsxs)("div",{id:"member-subs-wrapper",style:{border:"5px solid black",margin:"5px",padding:"10px"},children:[Object(d.jsx)("h2",{children:"Movies Watched"}),Object(d.jsx)("button",{onClick:function(){a(!c)},children:"subscribe to new movie"})," ",Object(d.jsx)("br",{}),c?Object(d.jsx)(C,{member_id:e.memberData._id}):null,Object(d.jsx)("ul",{children:l.map((function(e){return Object(d.jsxs)("li",{children:[Object(d.jsx)(v.b,{to:"/home/movies/allmovies",children:e.movie_id.name}),",  ",e.date]},e._id)}))})]})]})};var M=function(e){var t=Object(r.useState)([]),n=Object(b.a)(t,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){function e(){return(e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getMembers();case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"hi from AllMembers"})," ",Object(d.jsx)("br",{}),c.map((function(e){return Object(d.jsx)(k,{memberData:e},e._id)}))]})};var D=function(e){var t=Object(r.useState)(""),n=Object(b.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)(""),j=Object(b.a)(i,2),l=j[0],p=j[1],O=Object(r.useState)(""),h=Object(b.a)(O,2),v=h[0],x=h[1],g=Object(r.useState)(!1),y=Object(b.a)(g,2),w=y[0],_=y[1],S=Object(s.f)(),C=Object(m.c)((function(e){return e.loggedInUser}));Object(r.useEffect)((function(){C.full_name.length>1&&_(!0)}),[]);var k=function(){var e=Object(o.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={full_name:c,email:l,city:v},e.next=4,f.addMember(n);case 4:r=e.sent,alert(r.data),S.push("/home/subscriptions/allmembers");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{style:{display:w?"block":"none"},children:[Object(d.jsx)("h3",{children:"Add a new Member"}),Object(d.jsxs)("form",{onSubmit:function(e){return k(e)},children:["Full Name: ",Object(d.jsx)("input",{type:"text",onChange:function(e){return a(e.target.value)}})," ",Object(d.jsx)("br",{}),"Email: ",Object(d.jsx)("input",{type:"text",onChange:function(e){return p(e.target.value)}})," ",Object(d.jsx)("br",{}),"City: ",Object(d.jsx)("input",{type:"text",onChange:function(e){return x(e.target.value)}})," ",Object(d.jsx)("br",{}),Object(d.jsx)("button",{class:"main-buttons",type:"submit",children:"Save"}),Object(d.jsx)("button",{class:"main-buttons",type:"button",onClick:function(){S.push("/home/subscriptions/allmembers")},children:"Cancel"})]})]})};var E=function(e){var t=Object(r.useState)({}),n=Object(b.a)(t,2),c=n[0],a=n[1],i=Object(s.f)();Object(r.useEffect)((function(){var t=e.match.params.id;function n(){return(n=Object(o.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getMember(t);case 2:n=e.sent,a(n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e.match.params.id]);var j=function(){var e=Object(o.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,f.updateMember(c._id,c);case 3:n=e.sent,alert(n.data),i.push("/home/subscriptions/allmembers");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{children:[Object(d.jsxs)("h3",{children:["Edit Member: ",c.full_name]}),Object(d.jsxs)("form",{onSubmit:function(e){return j(e)},children:["Full Name: ",Object(d.jsx)("input",{type:"text",value:c.full_name,onChange:function(e){return a(Object(w.a)(Object(w.a)({},c),{},{full_name:e.target.value}))}})," ",Object(d.jsx)("br",{}),"Email: ",Object(d.jsx)("input",{type:"text",value:c.email,onChange:function(e){return a(Object(w.a)(Object(w.a)({},c),{},{email:e.target.value}))}})," ",Object(d.jsx)("br",{}),"City: ",Object(d.jsx)("input",{type:"text",value:c.city,onChange:function(e){return a(Object(w.a)(Object(w.a)({},c),{},{city:e.target.value}))}})," ",Object(d.jsx)("br",{}),Object(d.jsx)("button",{type:"submit",class:"main-buttons",children:"Update"}),Object(d.jsx)("button",{type:"button",class:"main-buttons",onClick:function(){i.push("/home/subscriptions/allmembers")},children:"Cancel"})]})]})};var I=function(){var e=Object(s.f)(),t=Object(m.c)((function(e){return e.loggedInUser}));return Object(r.useEffect)((function(){document.getElementById("btn").click()}),[]),Object(d.jsxs)("div",{style:{border:"5px solid black"},children:[Object(d.jsx)("h1",{children:"Subscriptions"})," ",Object(d.jsx)("br",{}),t.full_name," ",Object(d.jsx)("br",{}),Object(d.jsx)("button",{type:"button",id:"btn",class:"main-buttons",autoFocus:!0,onClick:function(){e.location.pathname.includes("/home/subscriptions/editmember")||e.push("/home/subscriptions/allmembers")},children:"All Members"}),Object(d.jsx)("button",{type:"button",class:"main-buttons",onClick:function(){e.push("/home/subscriptions/addmember")},children:"Add Member"}),Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{path:"/home/subscriptions/allmembers",component:M}),Object(d.jsx)(s.a,{path:"/home/subscriptions/addmember",component:D}),Object(d.jsx)(s.a,{path:"/home/subscriptions/editmember/:id",component:E})]})]})};var U=function(e){var t=Object(m.c)((function(e){return e.loggedInUser})),n=Object(s.f)();return Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:["Hi ",t.full_name," !"]}),"  ",Object(d.jsx)("br",{}),Object(d.jsxs)("div",{id:"main-menu-wrapper",children:[Object(d.jsx)("button",{class:"main-buttons",onClick:function(){n.push("/home/movies")},children:"Movies"}),Object(d.jsx)("button",{class:"main-buttons",onClick:function(){n.push("/home/subscriptions")},children:"Subscriptions"}),Object(d.jsx)("button",{class:"main-buttons",children:"Users Management"}),Object(d.jsx)("button",{class:"main-buttons",children:"Log Out"})]}),Object(d.jsxs)("div",{id:"router-outlet-wrapper",children:[Object(d.jsx)(s.a,{path:"/home/movies",component:S}),Object(d.jsx)(s.a,{path:"/home/subscriptions",component:I}),Object(d.jsx)(s.a,{path:"/home/members/:id",component:k})]})]})};var A=function(){var e=Object(s.f)();return Object(r.useEffect)((function(){e.push("/login")}),[e]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Welcome To Adam's Movies-Subscriptions Website"}),Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{path:"/login",component:p}),Object(d.jsx)(s.a,{path:"/home",component:U})]})]})};var F=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(A,{})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loggedInUser:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setLoggedInUser":var n=t.payload;return Object(w.a)(Object(w.a)({},e),{},{loggedInUser:n});case"getLoggedInUser":return Object(w.a)(Object(w.a)({},e),{},{loggedInUser:{}});default:return e}},N=n(36),P=Object(N.a)(B);a.a.render(Object(d.jsx)(v.a,{children:Object(d.jsx)(m.a,{store:P,children:Object(d.jsx)(F,{})})}),document.getElementById("root")),L()}},[[67,1,2]]]);
//# sourceMappingURL=main.222eedfc.chunk.js.map