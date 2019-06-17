(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{225:function(e,t,a){e.exports=a(382)},361:function(e,t,a){},382:function(e,t,a){"use strict";a.r(t);var n=a(111),r=a(0),l=a.n(r),o=a(38),u=a.n(o),c=a(25),i=a(392),s=a(26),m=a(27);function d(){var e=Object(s.a)(["\n    mutation updateAuthorBirthYear($id: String!, $setBornTo: Int!, $bookCount: Int!) {\n      updateAuthorBirthYear(\n        id: $id,\n        setBornTo: $setBornTo,\n        bookCount: $bookCount\n      ){\n        name\n        born\n        id\n        bookCount\n      }\n    }\n  "]);return d=function(){return e},e}var f=Object(m.a)(d());function b(){var e=Object(s.a)(["\nquery allAuthors {\n  allAuthors {\n    name\n    born\n    bookCount\n    id\n  }\n}\n"]);return b=function(){return e},e}var E=Object(m.a)(b()),p=a(29),h=a.n(p),g=a(41),v=a(210),k=a(391),O=a(399),j=a(394),y=a(34),w=a(397),B=function(e){var t=Object(r.useState)(""),a=Object(c.a)(t,2),n=a[0],o=a[1],u=Object(r.useState)(null),i=Object(c.a)(u,2),s=i[0],m=i[1];if(e.result.loading)return l.a.createElement(k.a,{active:!0,inline:"centered"});console.log("FORM props: ",e.result.data);var d=e.result.data.allAuthors,f=d.map(function(e){return{value:e.id.toString(),label:e.name}}),b=function(){var t=Object(g.a)(h.a.mark(function t(a){var r,l;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),console.log("updating author"),r=parseInt(n),console.log("new year: ",r,"selected: ",s),l=d.find(function(e){return e.id===s.value}),console.log("aut.bookCount: ",l.bookCount),t.prev=6,t.next=9,e.updateBirthYear({variables:{id:s.value,setBornTo:r,bookCount:l.bookCount}});case 9:m(null),o(""),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(6),console.log(t.t0),e.handleError(t.t0);case 17:case"end":return t.stop()}},t,this,[[6,13]])}));return function(e){return t.apply(this,arguments)}}();return e.result.loading?l.a.createElement(k.a,{active:!0,inline:"centered"}):l.a.createElement("div",null,l.a.createElement(O.a,{size:"medium",color:"teal"},"Set birth year"),l.a.createElement(j.a,{onSubmit:b},l.a.createElement(y.a,{fluid:"true"},l.a.createElement("label",null,"Author"),l.a.createElement(v.a,{value:s,onChange:function(e){return m(e)},options:f})),l.a.createElement(y.a,{fluid:"true"},l.a.createElement("label",null,"Born"),l.a.createElement("input",{type:"number",value:n,placeholder:"Author birth year",onChange:function(e){var t=e.target;return o(t.value)}})),l.a.createElement(w.a,{fluid:!0,color:"teal",type:"submit"},"Submit")))},C=a(393),S=a(400),x=a(395),$=function(e){if(console.log("Authors props: ",e),!e.show)return null;if(e.result.loading)return l.a.createElement(k.a,{active:!0,inline:"centered"});var t=Object(i.a)(f,{refetchQueries:[{query:E}]}),a=e.result.data.allAuthors;return l.a.createElement(C.a,{text:!0},l.a.createElement(S.a.Group,null,l.a.createElement(S.a,{padded:!0},l.a.createElement(O.a,{size:"large",color:"teal"},"Authors")),l.a.createElement(S.a.Group,null,e.token?l.a.createElement(S.a,{padded:!0,stacked:!0},l.a.createElement(B,{result:e.result,updateBirthYear:t,handleError:e.handleError})):l.a.createElement("div",null),l.a.createElement(S.a,{padded:!0},l.a.createElement(x.a,{color:"teal",compact:!0},l.a.createElement(x.a.Header,null,l.a.createElement(x.a.Row,null,l.a.createElement(x.a.HeaderCell,null,"Name"),l.a.createElement(x.a.HeaderCell,null,"Born"),l.a.createElement(x.a.HeaderCell,null,"Nr. of books"))),l.a.createElement(x.a.Body,null,a.map(function(e){return l.a.createElement(x.a.Row,{key:e.name},l.a.createElement(x.a.Cell,null,e.name),l.a.createElement(x.a.Cell,null,e.born),l.a.createElement(x.a.Cell,null,e.bookCount))})))))))},q=a(107),G=a(110),A=a(108),I=a.n(A);a(361);function R(){var e=Object(s.a)(["\n    query allGenres {\n      allGenres\n    }\n  "]);return R=function(){return e},e}function z(){var e=Object(s.a)(["\n    query allBooks($author: String, $genre: String) {\n      allBooks(author: $author, genre: $genre) {\n        title\n        author {\n          name\n          born\n          id\n        }\n        genres\n        published\n        id\n      }\n    }\n  "]);return z=function(){return e},e}var H=Object(m.a)(z()),P=Object(m.a)(R()),T=function(e){var t=Object(r.useState)(""),a=Object(c.a)(t,2),n=a[0],o=a[1],u=Object(r.useState)([]),i=Object(c.a)(u,2),s=i[0],m=i[1],d=Object(r.useState)([]),f=Object(c.a)(d,2),b=f[0],E=f[1],p=Object(q.b)();if(console.log("Books props: ",e),Object(r.useEffect)(function(){console.log("Booklist useEffect 1 called"),function(){var e=Object(g.a)(h.a.mark(function e(){var t,a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Booklist useEffect 1: fetching available genres"),e.next=3,p.query({query:P,fetchPolicy:"network-only"});case 3:t=e.sent,a=t.data,console.log("Booklist useEffect 1: setGenres"),m(a.allGenres);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()()},[b]),Object(r.useEffect)(function(){console.log("Booklist useEffect 2 called "),function(){var e=Object(g.a)(h.a.mark(function e(){var t,a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Booklist useEffect 2: books by selected genre ",n),e.next=3,p.query({query:H,variables:{genre:n},fetchPolicy:"network-only"});case 3:t=e.sent,a=t.data,console.log("Booklist useEffect 2: setBooks"),E(a.allBooks);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()()},[n,e.show]),!e.show)return null;var v=function(e){var t="";return n===e&&(t="teal"),l.a.createElement(G.a,{key:e,as:"a",color:t,compact:"true",size:"small",onClick:function(){return o(e)}},""===e?"Show all":I.a.capitalize(e))};return l.a.createElement(C.a,{text:!0},l.a.createElement(S.a.Group,null,l.a.createElement(S.a,{padded:!0},l.a.createElement(O.a,{size:"large",color:"teal"},"Books")),l.a.createElement(S.a.Group,null,l.a.createElement(S.a,{padded:!0,className:"books list section break"},l.a.createElement("div",null,l.a.createElement(O.a,{size:"medium",color:"teal"},l.a.createElement("div",null,""===n?"Filter by genre":l.a.createElement("div",null,"Books in genre ",l.a.createElement("i",null,n)))),s!==[]?l.a.createElement("div",{className:"genre filters"},l.a.createElement(G.a.Group,null,v("")),l.a.createElement(G.a.Group,null,s.map(function(e){return v(e)}))):l.a.createElement("div",null))),l.a.createElement(S.a,{padded:!0},l.a.createElement(x.a,{color:"teal",compact:!0},l.a.createElement(x.a.Header,null,l.a.createElement(x.a.Row,null,l.a.createElement(x.a.HeaderCell,null,"Title"),l.a.createElement(x.a.HeaderCell,null,"Author"),l.a.createElement(x.a.HeaderCell,null,"Published"))),l.a.createElement(x.a.Body,null,b.map(function(e){return l.a.createElement(x.a.Row,{key:e.id},l.a.createElement(x.a.Cell,null,e.title),l.a.createElement(x.a.Cell,null,e.author.name),l.a.createElement(x.a.Cell,null,e.published))})))))))},D=a(209),Q=a(76),N=function(e){var t=Object(r.useState)(""),a=Object(c.a)(t,2),n=a[0],o=a[1],u=Object(r.useState)(""),i=Object(c.a)(u,2),s=i[0],m=i[1],d=Object(r.useState)(""),f=Object(c.a)(d,2),b=f[0],E=f[1],p=Object(r.useState)(""),v=Object(c.a)(p,2),k=v[0],B=v[1],x=Object(r.useState)([]),$=Object(c.a)(x,2),q=$[0],A=$[1];if(!e.show)return null;var R=function(){var t=Object(g.a)(h.a.mark(function t(a){var r;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),console.log("add book..."),console.log(n,b,s,q),n){t.next=6;break}return e.handleError({message:"Book must have a title"}),t.abrupt("return");case 6:if(s){t.next=9;break}return e.handleError({message:"Book must have an author"}),t.abrupt("return");case 9:if(b){t.next=12;break}return e.handleError({message:"Book must have a publishing year"}),t.abrupt("return");case 12:return r=parseInt(b),console.log("pubInt",r),t.prev=14,t.next=17,e.addBook({variables:{title:n,published:r,author:s,genres:q}});case 17:t.next=23;break;case 19:t.prev=19,t.t0=t.catch(14),console.log(t.t0),e.handleError(t.t0);case 23:o(""),E(""),m(""),A([]),B(""),console.log("setting page"),e.setPage();case 30:case"end":return t.stop()}},t,this,[[14,19]])}));return function(e){return t.apply(this,arguments)}}();return l.a.createElement(C.a,{text:!0},l.a.createElement(S.a.Group,null,l.a.createElement(S.a,{padded:!0},l.a.createElement(O.a,{size:"large",color:"teal"},"Give book details")),l.a.createElement(S.a.Group,null,l.a.createElement(S.a,{padded:!0,stacked:!0},l.a.createElement(j.a,{onSubmit:R},l.a.createElement(y.a,{fluid:"true"},l.a.createElement("label",null,"Title"),l.a.createElement("input",{type:"text",value:n,placeholder:"Title of book",onChange:function(e){var t=e.target;return o(t.value)}})),l.a.createElement(y.a,{fluid:"true"},l.a.createElement("label",null,"Author"),l.a.createElement("input",{type:"text",value:s,placeholder:"Author of book",onChange:function(e){var t=e.target;return m(t.value)}})),l.a.createElement(y.a,{fluid:"true"},l.a.createElement("label",null,"Published"),l.a.createElement("input",{type:"number",value:b,placeholder:"Publishing year of book",onChange:function(e){var t=e.target;return E(t.value)}})),l.a.createElement(y.a,{fluid:"true"},l.a.createElement("label",null,"Genre"),l.a.createElement(j.a.Group,{inline:!0},l.a.createElement(y.a,{fluid:"true"},l.a.createElement("input",{type:"text",value:k,placeholder:"Genre of book",onChange:function(e){var t=e.target;return B(t.value)}})),l.a.createElement(w.a,{onClick:function(){var e=q.concat(k);console.log("newGenres: ",e),A(Object(D.a)(e)),B("")},size:"small",type:"button"},"add genre")),l.a.createElement(G.a.Group,{color:"teal"},l.a.createElement("div",{className:"genres to add"},q.map(function(e){return l.a.createElement(G.a,{key:e,as:"a",onClick:function(){return function(e){console.log("removing genre ",e);var t=q.filter(function(t){return t!==e});A(t),B(""),console.log("genres after removal ",t)}(e)},size:"large"},I.a.capitalize(e),l.a.createElement(Q.a,{name:"close"}))})))),l.a.createElement(w.a,{fluid:!0,color:"teal",type:"submit"},"Submit"))))))},Y=function(e){var t=Object(r.useState)(""),a=Object(c.a)(t,2),n=a[0],o=a[1],u=Object(r.useState)(""),i=Object(c.a)(u,2),s=i[0],m=i[1];if(!e.show)return null;var d=function(){var t=Object(g.a)(h.a.mark(function t(a){var r,l;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,e.login({variables:{username:n,password:s}});case 4:r=t.sent,l=r.data.login.value,e.setToken(l),localStorage.setItem("library-user-token",l),e.setPage(),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),e.handleError(t.t0);case 14:case"end":return t.stop()}},t,this,[[1,11]])}));return function(e){return t.apply(this,arguments)}}();return l.a.createElement(C.a,{text:!0},l.a.createElement(S.a.Group,null,l.a.createElement(S.a,{padded:!0},l.a.createElement(O.a,{size:"large",color:"teal"},"Login here")),l.a.createElement(S.a.Group,null,l.a.createElement(S.a,{padded:!0,stacked:!0},l.a.createElement(j.a,{onSubmit:d},l.a.createElement(y.a,{fluid:"true"},l.a.createElement("label",null,"Username"),l.a.createElement("input",{type:"text",value:n,placeholder:"Your username",onChange:function(e){var t=e.target;return o(t.value)}})),l.a.createElement(y.a,{fluid:"true"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{type:"password",value:s,placeholder:"Your password",onChange:function(e){var t=e.target;return m(t.value)}})),l.a.createElement(w.a,{fluid:!0,color:"teal",type:"submit"},"Login"))))))};function M(){var e=Object(s.a)(["\n  query me {\n    me {\n      username\n      favoriteGenre\n    }\n  }\n"]);return M=function(){return e},e}function F(){var e=Object(s.a)(["\n    query allBooks($author: String, $genre: String) {\n      allBooks(author: $author, genre: $genre) {\n        title\n        author {\n          name\n          born\n          id\n        }\n        genres\n        published\n        id\n      }\n    }\n  "]);return F=function(){return e},e}var J=Object(m.a)(F()),L=Object(m.a)(M()),U=function(e){var t=Object(r.useState)([]),a=Object(c.a)(t,2),n=a[0],o=a[1],u=Object(q.b)(),i=Object(r.useState)(null),s=Object(c.a)(i,2),m=s[0],d=s[1];return Object(r.useEffect)(function(){function e(){return(e=Object(g.a)(h.a.mark(function e(){var t,a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Recommendations useEffect 1: fetching user"),e.next=3,u.query({query:L});case 3:t=e.sent,a=t.data,console.log("Recommendations useEffect 1: setUser"),d(a.me);case 7:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}console.log("Recommendations useEffect 1 called"),function(){e.apply(this,arguments)}()},[]),Object(r.useEffect)(function(){function e(){return(e=Object(g.a)(h.a.mark(function e(){var t,a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Recommendations useEffect 2: fetching books by genre"),e.next=3,u.query({query:J,variables:{genre:m.favoriteGenre},fetchPolicy:"network-only"});case 3:t=e.sent,a=t.data,console.log("Recommendations useEffect 2: setBooks"),o(a.allBooks);case 7:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}console.log("Recommendations useEffect 2 called"),m&&(console.log("Recommendations useEffect 2: user exists -> fetch books"),function(){e.apply(this,arguments)}())},[m,e.show]),e.show?l.a.createElement(C.a,{text:!0},l.a.createElement(S.a.Group,null,l.a.createElement(S.a,{padded:!0},l.a.createElement(O.a,{size:"large",color:"teal"},"Recommended for you")),l.a.createElement(S.a.Group,null,l.a.createElement(S.a,{padded:!0},l.a.createElement(O.a,{size:"medium",color:"teal"},"Books in your favorite genre ",l.a.createElement("i",null,m.favoriteGenre)),l.a.createElement(x.a,{color:"teal",compact:!0},l.a.createElement(x.a.Header,null,l.a.createElement(x.a.Row,null,l.a.createElement(x.a.HeaderCell,null,"Title"),l.a.createElement(x.a.HeaderCell,null,"Author"),l.a.createElement(x.a.HeaderCell,null,"Published"))),l.a.createElement(x.a.Body,null,n.map(function(e){return l.a.createElement(x.a.Row,{key:e.id},l.a.createElement(x.a.Cell,null,e.title),l.a.createElement(x.a.Cell,null,e.author.name),l.a.createElement(x.a.Cell,null,e.published))}))))))):null},K=a(396),V=a(109);function W(){var e=Object(s.a)(["\n  fragment BookDetails on Book {\n    id\n    title\n    author {\n      name\n      born\n      id\n    }\n    published\n    genres\n  }\n"]);return W=function(){return e},e}var X=Object(m.a)(W());function Z(){var e=Object(s.a)(["\n  subscription {\n    bookAdded {\n      ...BookDetails\n    }\n  }\n  ","\n"]);return Z=function(){return e},e}var _=Object(m.a)(Z(),X);function ee(){var e=Object(s.a)(["\n    mutation createBook($title: String!, $published: Int!, $author: String!, $genres: [String!]!) {\n      addBook(\n        title: $title,\n        published: $published,\n        author: $author,\n        genres: $genres\n      ){\n        title\n        published\n        genres\n        id\n        author {\n          name\n          born\n          id\n        }\n      }\n    }\n  "]);return ee=function(){return e},e}var te=Object(m.a)(ee());function ae(){var e=Object(s.a)(["\n    mutation login($username: String!, $password: String!) {\n      login(\n        username: $username,\n        password: $password\n      ){\n        value\n      }\n    }\n  "]);return ae=function(){return e},e}var ne=Object(m.a)(ae());function re(){var e=Object(s.a)(["\n query allBooks($author: String, $genre: String) {\n  allBooks(author: $author, genre: $genre) {\n     title\n     author {\n       name\n       born\n       id\n     }\n     genres\n     published\n     id\n   }\n }\n"]);return re=function(){return e},e}var le=Object(m.a)(re()),oe=a(398),ue=function(e){return e.message?l.a.createElement("div",{style:{color:"red"}},e.message):null},ce=function(){var e=Object(r.useState)("authors"),t=Object(c.a)(e,2),a=t[0],o=t[1],u=Object(r.useState)(null),s=Object(c.a)(u,2),m=s[0],d=s[1],f=Object(r.useState)(null),b=Object(c.a)(f,2),p=b[0],h=b[1],g=Object(q.b)();Object(r.useEffect)(function(){var e=window.localStorage.getItem("library-user-token");console.log("logged user",e),e&&d(e)},[]);var v=function(e){console.log("handling error",e.message),h(e.message),e.message.includes("not authenticated")&&k(),setTimeout(function(){h(null)},5e3)},k=function(){d(null),localStorage.clear(),g.resetStore(),o("authors")},O=function(e,t){console.log("included in?: ",e,t),console.log("set length: ",e.length);var a=e.map(function(e){return console.log("mapissa: ",e.id),e.id});console.log("set ids: ",a);var n=a.includes(t.id);return console.log("boolean: ",n),n},j=Object(i.a)(te,{update:function(e,t){console.log("addBok update response: ",t);var a=e.readQuery({query:le}),n=t.data.addBook;console.log("addedBook: ",n),O(a.allBooks,n)||(a.allBooks.push(n),g.writeQuery({query:le,data:a}))}}),y=Object(i.a)(ne),w=Object(K.a)(E),B=Object(K.a)(le);return l.a.createElement(C.a,null,l.a.createElement(V.b,{subscription:_,onSubscriptionData:function(e){var t=e.subscriptionData.data.bookAdded;window.alert("New book ".concat(t.title," added"));var a=g.readQuery({query:le});if(!O(a.allBooks,t)){var r=a.allBooks.concat(t);a.allBooks=r,g.writeQuery({query:le,data:a})}var l=t.author,o=g.readQuery({query:E});if(O(o.allAuthors,l)){var u=o.allAuthors.map(function(e){if(e.id===l.id){var t=Object(n.a)({},e);return t.bookCount=e.bookCount+1,t}return e});o.allAuthors=u,g.writeQuery({query:E,data:o})}else{l.bookCount=1;var c=o.allAuthors.concat(l);o.allAuthors=c,g.writeQuery({query:E,data:o})}}},function(){return null}),m?l.a.createElement(oe.a,{secondary:!0},l.a.createElement(oe.a.Item,{name:"authors",active:"authors"===a,onClick:function(){return o("authors")}}),l.a.createElement(oe.a.Item,{name:"books",active:"books"===a,onClick:function(){return o("books")}}),l.a.createElement(oe.a.Item,{name:"add book",active:"add"===a,onClick:function(){return o("add")}}),l.a.createElement(oe.a.Item,{name:"recommendations",active:"recommendations"===a,onClick:function(){return o("recommendations")}}),l.a.createElement(oe.a.Menu,{position:"right"},l.a.createElement(oe.a.Item,{name:"logout",active:!1,onClick:function(){return k()}}))):l.a.createElement(oe.a,{secondary:!0},l.a.createElement(oe.a.Item,{name:"authors",active:"authors"===a,onClick:function(){return o("authors")}}),l.a.createElement(oe.a.Item,{name:"books",active:"books"===a,onClick:function(){return o("books")}}),l.a.createElement(oe.a.Menu,{position:"right"},l.a.createElement(oe.a.Item,{name:"login",onClick:function(){return o("login")}}))),l.a.createElement(ue,{message:p}),l.a.createElement($,{result:w,token:m,handleError:v,show:"authors"===a}),l.a.createElement(T,{result:B,show:"books"===a}),m?l.a.createElement("div",null,l.a.createElement(N,{addBook:j,handleError:v,show:"add"===a,setPage:function(){return o("books")}}),l.a.createElement(U,{show:"recommendations"===a})):l.a.createElement(Y,{show:"login"===a,login:y,setToken:function(e){return d(e)},handleError:v,setPage:function(){return o("authors")}}))},ie=a(40),se=a(71),me=a(57),de=a(206),fe=a(23),be=a(205),Ee=a(69),pe=new be.a({uri:"ws://localhost:4000/graphql",options:{reconnect:!0}}),he=Object(se.b)({uri:"http://localhost:4000/graphql"}),ge=Object(de.a)(function(e,t){var a=t.headers,r=localStorage.getItem("library-user-token");return{headers:Object(n.a)({},a,{authorization:r?"bearer ".concat(r):null})}}),ve=Object(fe.d)(function(e){var t=e.query,a=Object(Ee.a)(t),n=a.kind,r=a.operation;return"OperationDefinition"===n&&"subscription"===r},pe,ge.concat(he)),ke=new ie.a({link:ve,cache:new me.a});u.a.render(l.a.createElement(V.a,{client:ke},l.a.createElement(q.a,{client:ke},l.a.createElement(ce,null))),document.getElementById("root"))}},[[225,1,2]]]);
//# sourceMappingURL=main.900d1476.chunk.js.map