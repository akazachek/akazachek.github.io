(this["webpackJsonpakazachek.github.io"]=this["webpackJsonpakazachek.github.io"]||[]).push([[0],{26:function(e,t,i){},27:function(e,t,i){},36:function(e,t,i){"use strict";i.r(t);var s=i(0),n=i(1),a=i.n(n),c=i(19),u=i.n(c),r=(i(26),i(27),i(14)),l=i(2),o=i(4),m=i(5),d=i(7),j=i(6),p=function(e){Object(d.a)(i,e);var t=Object(j.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(m.a)(i,[{key:"render",value:function(){return Object(s.jsx)("li",{id:this.props.item,class:"hvr-sweep-to-right",children:Object(s.jsx)(r.b,{to:this.props.tolink,children:this.props.item})})}}]),i}(n.Component),b=function(e){Object(d.a)(i,e);var t=Object(j.a)(i);function i(e){var s;return Object(o.a)(this,i),(s=t.call(this,e)).handleClick=function(e){s.state.NavActiveItem.length>0&&document.getElementById(s.state.NavActiveItem).classList.remove("navActive"),s.setState({NavActiveItem:e},(function(){document.getElementById(s.state.NavActiveItem).classList.add("navActive")}))},s.state={NavActiveItem:""},s}return Object(m.a)(i,[{key:"render",value:function(){return Object(s.jsx)("div",{class:"navContainer",children:Object(s.jsx)("nav",{children:Object(s.jsxs)("ul",{children:[Object(s.jsx)(p,{item:"Who Am I?",tolink:"/",click:this.handleClick}),Object(s.jsx)(p,{item:"Posts",tolink:"/Posts",click:this.handleClick}),Object(s.jsx)(p,{item:"Contact",tolink:"/Contact",click:this.handleClick})]})})})}}]),i}(n.Component),h=i.p+"static/media/me.0ea85df1.jpg",v=function(e){Object(d.a)(i,e);var t=Object(j.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(m.a)(i,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"coDiv about",children:[Object(s.jsx)("img",{src:h,className:"pfp"}),Object(s.jsx)("br",{}),Object(s.jsx)("h1",{children:" Alex Kazachek "}),Object(s.jsxs)("h3",{children:[" Hello! This website still isn't finished. Please go to ",Object(s.jsx)("a",{href:"akazachek.com",children:"akazachek.com"})," to view my current (working!) one."]}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{class:"fullP",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium diam id eros elementum, vel ornare ligula tristique. Donec auctor nibh et est tincidunt fermentum. Mauris turpis est, mollis eu placerat sed, imperdiet ac augue. Nulla congue vitae velit in tristique. Donec hendrerit vestibulum feugiat. Morbi vel volutpat orci. Quisque ligula mi, accumsan et est vitae, ornare convallis enim."}),Object(s.jsx)("p",{class:"fullP",children:"Pellentesque bibendum tempus lorem sed rutrum. Maecenas eleifend mattis blandit. Aenean justo lacus, congue et lacus nec, molestie venenatis justo. Aenean lorem tortor, scelerisque a sem eu, scelerisque porta mauris. Ut lacinia erat mauris, non lacinia augue pellentesque vitae. Etiam tristique mi in justo maximus, in blandit libero aliquam. Aenean vestibulum finibus felis, non varius nunc rutrum nec. Nam condimentum vitae enim ut luctus. Quisque egestas auctor est sed pulvinar. Nam aliquam congue molestie. Cras pellentesque viverra ornare."}),Object(s.jsx)("p",{class:"fullP",children:"Quisque quis lobortis enim. Integer vitae malesuada libero, in pharetra arcu. Maecenas vehicula euismod mauris, a porttitor lorem bibendum et. Integer in libero erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ac libero purus. Suspendisse pulvinar, nibh quis convallis pellentesque, arcu mi malesuada sapien, a ullamcorper mi sapien et nibh. Proin vitae turpis varius urna dapibus porta quis vel augue."}),Object(s.jsx)("p",{class:"fullP",children:"Nullam vulputate nunc vitae velit auctor, et laoreet ex maximus. Cras finibus venenatis massa et congue. Nullam semper eros dui, nec fermentum odio suscipit eget. In eu varius velit, eget consequat tortor. Proin nec mi et libero dignissim sagittis pretium ac dolor. Vestibulum in porttitor urna. Maecenas efficitur nunc ut elit vulputate, sed pretium libero consequat. Nullam eleifend ante urna, vel tincidunt velit commodo nec. Vestibulum vel justo non quam efficitur hendrerit at id justo."}),Object(s.jsx)("p",{class:"fullP",children:"Aenean scelerisque ultrices mi nec varius. Suspendisse convallis malesuada velit, a blandit eros pellentesque quis. Quisque fringilla dui quis enim dignissim, ac dapibus tellus dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet lectus a ultrices tempor. Curabitur et tristique dui. Sed pretium neque vel justo egestas, et dapibus eros fermentum. Nulla facilisi. Etiam eros enim, euismod vel augue et, ultrices condimentum lectus."})]})}}]),i}(n.Component),O=i(13),f=function(e){Object(d.a)(i,e);var t=Object(j.a)(i);function i(e){var s;return Object(o.a)(this,i),(s=t.call(this,e)).state={postOpen:!1},s.handlePostOpen=s.handlePostOpen.bind(Object(O.a)(s)),s}return Object(m.a)(i,[{key:"handlePostOpen",value:function(){this.setState({postOpen:!this.state.postOpen}),this.state.postOpen?document.getElementById(this.props.date).classList.remove("postOpen"):document.getElementById(this.props.date).classList.add("postOpen")}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("li",{className:"postPreview",id:this.props.date,onClick:this.handlePostOpen,children:[Object(s.jsx)("table",{className:"postHead",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"postTitle",children:Object(s.jsx)("h1",{children:this.props.name})}),Object(s.jsx)("td",{className:"postDate",children:Object(s.jsx)("h4",{children:this.props.date})})]})}),Object(s.jsx)("div",{children:Object(s.jsx)("p",{className:"postSummary",children:this.props.summary})})]}),this.state.postOpen?Object(s.jsx)("div",{className:"post",children:this.props.full}):Object(s.jsx)("div",{})]})}}]),i}(n.Component),x=function(e){Object(d.a)(i,e);var t=Object(j.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(m.a)(i,[{key:"render",value:function(){return Object(s.jsx)("p",{children:"Test Post Content"})}}]),i}(n.Component),g=function(e){Object(d.a)(i,e);var t=Object(j.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(m.a)(i,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"coDiv posts",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)(f,{date:"2020-01-11",name:"Test title.",summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pretium diam id eros elementum, vel ornare ligula tristique. Donec auctor nibh et est tincidunt fermentum. Mauris turpis est, mollis eu placerat sed, imperdiet ac augue. Nulla congue vitae velit in tristique. Donec hendrerit vestibulum feugiat. Morbi vel volutpat orci. Quisque ligula mi, accumsan et est vitae, ornare convallis enim.",full:Object(s.jsx)(x,{})}),Object(s.jsx)(f,{date:"2001-09-20",name:"Another test title.",summary:"Pellentesque bibendum tempus lorem sed rutrum. Maecenas eleifend mattis blandit. Aenean justo lacus, congue et lacus nec, molestie venenatis justo. Aenean lorem tortor, scelerisque a sem eu, scelerisque porta mauris. Ut lacinia erat mauris, non lacinia augue pellentesque vitae. Etiam tristique mi in justo maximus, in blandit libero aliquam. Aenean vestibulum finibus felis, non varius nunc rutrum nec. Nam condimentum vitae enim ut luctus. Quisque egestas auctor est sed pulvinar. Nam aliquam congue molestie. Cras pellentesque viverra ornare."})]})})}}]),i}(n.Component),q=function(e){Object(d.a)(i,e);var t=Object(j.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(m.a)(i,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"coDiv contact",children:Object(s.jsx)("p",{children:" alexdkazachek@gmail.com "})})}}]),i}(n.Component);var k=function(){return Object(s.jsx)(r.a,{children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(b,{}),Object(s.jsx)(l.a,{exact:!0,path:"/",children:Object(s.jsx)(v,{})}),Object(s.jsx)(l.a,{path:"/Posts",children:Object(s.jsx)(g,{})}),Object(s.jsx)(l.a,{path:"/Contact",children:Object(s.jsx)(q,{})})]})})},N=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,37)).then((function(t){var i=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;i(e),s(e),n(e),a(e),c(e)}))};u.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(k,{})}),document.getElementById("root")),N()}},[[36,1,2]]]);
//# sourceMappingURL=main.8015670a.chunk.js.map