(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,a){e.exports=a(95)},46:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(18),r=a.n(i),l=(a(46),a(4)),o=a(5),s=a(7),m=a(6),u=a(8),h=a(25),p=a(11),d=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={opened:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"clickHandler",value:function(){var e=!this.state.opened;this.setState({opened:e})}},{key:"render",value:function(){var e=this;return c.a.createElement(h.a,null,c.a.createElement("div",null,c.a.createElement(p.HashLink,{className:"menu-toggle rounded"+(this.state.opened?" active":""),onClick:this.clickHandler.bind(this),to:"#"},c.a.createElement("i",{className:"fas "+(this.state.opened?"fa-times":"fa-bars")})),c.a.createElement("nav",{id:"sidebar-wrapper",className:this.state.opened?"active":"",onClick:this.clickHandler.bind(this)},c.a.createElement("ul",{className:"sidebar-nav"},[{to:"#top",title:"Top"},{to:"#about",title:"About"},{to:"#services",title:"Services"},{to:"#portfolio",title:"Portfolio"},{to:"#contact",title:"Contact"}].map(function(t,a){return c.a.createElement("li",{key:a,className:"sidebar-nav-item"},c.a.createElement(p.HashLink,{className:"js-scroll-trigger",to:t.to,onClick:e.clickHandler.bind(e)},t.title))})))))}}]),t}(n.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("header",{className:"masthead d-flex bg-dark"},c.a.createElement("div",{className:"container text-center my-auto"},c.a.createElement("h1",{className:"mb-1"},"amp_yamachan"),c.a.createElement("h3",{className:"mb-5"},c.a.createElement("em",null,"Auto Motive Photographer")),c.a.createElement("a",{className:"btn btn-primary btn-xl js-scroll-trigger",href:"#about"},"Find Out More")),c.a.createElement("div",{className:"overlay"}))}}]),t}(n.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"content-section bg-light",id:"about"},c.a.createElement("div",{className:"container text-center"},c.a.createElement("div",{className:"content-section-heading"},c.a.createElement("h3",{className:"text-secondary mb-0"},"About")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-10 mx-auto"},c.a.createElement("h2",null,"From the best photographer, the best photograph for you."),c.a.createElement("p",{className:"lead mb-5"},"You'll satisfy by my photography. Especially if you like a automotive, it will be the awesome."),c.a.createElement("a",{className:"btn btn-dark btn-xl js-scroll-trigger",href:"#services"},"What I Offer")))))}}]),t}(n.Component),g=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=function(e,t,a){return c.a.createElement("div",{className:"col-lg-4 col-md-4 mb-5 mb-lg-0"},c.a.createElement("span",{className:"service-icon rounded-circle mx-auto mb-3"},c.a.createElement("i",{className:e})),c.a.createElement("h4",null,c.a.createElement("strong",null,t)),c.a.createElement("p",{className:"text-faded mb-0"},a))};return c.a.createElement("section",{className:"content-section bg-primary text-white text-center",id:"services"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"content-section-heading"},c.a.createElement("h3",{className:"text-secondary mb-0"},"Services"),c.a.createElement("h2",{className:"mb-5"},"What I Offer")),c.a.createElement("div",{className:"row"},e("icon-camera","Photography","Certainly I take a pictures."),e("icon-like","Likes",'Increase will many "LIKE" on your SNS.'),e("icon-heart","Memories","And I will create awesome memories for you."))))}}]),t}(n.Component),f=[{caption:"Midnight",description:"",image:"img/portfolio_01.jpg"},{caption:"Magic Hour",description:"",image:"img/portfolio_02.jpg"},{caption:"Rolling Shot",description:"",image:"img/portfolio_03.jpg"}],v=a(40),N=a.n(v),y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={lightboxIsOpen:!1,currentImage:0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"gotoPrevious",value:function(){this.setState({currentImage:this.state.currentImage-1})}},{key:"gotoNext",value:function(){this.setState({currentImage:this.state.currentImage+1})}},{key:"closeLightbox",value:function(){this.setState({lightboxIsOpen:!1})}},{key:"openLightbox",value:function(e){this.setState({lightboxIsOpen:!0,currentImage:e})}},{key:"clickThumbnail",value:function(e){this.setState({currentImage:e})}},{key:"render",value:function(){var e=this,t=f.map(function(e,t){return{src:e.image,caption:e.caption,alt:e.caption}});return c.a.createElement(h.a,null,c.a.createElement("section",{className:"content-section",id:"portfolio"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"content-section-heading text-center"},c.a.createElement("h3",{className:"text-secondary mb-0"},"Portfolio"),c.a.createElement("h2",{className:"mb-5"},"Recent Works")),c.a.createElement("div",{className:"row no-gutters"},f.map(function(t,a){return c.a.createElement("div",{key:a,className:"col-lg-6"},c.a.createElement(p.HashLink,{className:"portfolio-item",to:"#",onClick:e.openLightbox.bind(e,a)},c.a.createElement("span",{className:"caption"},c.a.createElement("span",{className:"caption-content"},c.a.createElement("h2",null,t.caption),c.a.createElement("p",{className:"mb-0"},t.description))),c.a.createElement("img",{className:"img-fluid",src:t.image,alt:t.caption})))}),c.a.createElement(N.a,{backdropClosesModal:!0,showThumbnails:!0,images:t,currentImage:this.state.currentImage,isOpen:this.state.lightboxIsOpen,onClickPrev:this.gotoPrevious.bind(this),onClickNext:this.gotoNext.bind(this),onClose:this.closeLightbox.bind(this),onClickThumbnail:this.clickThumbnail.bind(this)})))))}}]),t}(n.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(h.a,null,c.a.createElement("section",{className:"content-section bg-primary text-white",id:"contact"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"content-section-heading text-center"},c.a.createElement("h3",{className:"text-secondary mb-0"},"Contact"),c.a.createElement("h2",{className:"mb-5"},"Let's be awesome now."),c.a.createElement("p",null,c.a.createElement("i",{className:"icon-paper-plane"}),"\xa0info@ampyamachan.com")))))}}]),t}(n.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("footer",{className:"footer text-center"},c.a.createElement("div",{className:"container"},c.a.createElement("ul",{className:"list-inline mb-5"},c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{className:"social-link rounded-circle text-white mr-3",href:"https://www.instagram.com/amp_yamachan/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"icon-social-instagram"}))),c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("a",{className:"social-link rounded-circle text-white mr-3",href:"https://twitter.com/ampyamachan/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"icon-social-twitter"})))),c.a.createElement("p",{className:"text-muted small mb-0"},"Copyright \xa9 ampyamachan.com 2019")))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={opacity:0,pointerEvents:"none"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("scroll",function(){-1*document.documentElement.getBoundingClientRect().top>document.documentElement.clientHeight?e.setState({opacity:1,pointerEvents:"auto"}):e.setState({opacity:0,pointerEvents:"none"})})}},{key:"clickHandler",value:function(){var e=document.documentElement.scrollTop>0?document.documentElement:document.body,t=e.scrollTop/25;!function a(){e.scrollTop<=0||(e.scrollTop-=t,requestAnimationFrame(a))}()}},{key:"render",value:function(){return c.a.createElement(h.a,null,c.a.createElement(p.HashLink,{className:"scroll-to-top rounded js-scroll-trigger",to:"#",onClick:this.clickHandler.bind(this),style:{opacity:this.state.opacity,pointerEvents:this.state.pointerEvents}},c.a.createElement("i",{className:"fas fa-angle-up"})))}}]),t}(n.Component),w=(a(94),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(d,null),c.a.createElement(b,null),c.a.createElement(E,null),c.a.createElement(g,null),c.a.createElement(y,null),c.a.createElement(k,null),c.a.createElement(O,null),c.a.createElement(j,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.a7412adf.chunk.js.map