(this.webpackJsonpmarcomasik2=this.webpackJsonpmarcomasik2||[]).push([[0],{31:function(e,t,a){e.exports=a(51)},36:function(e,t,a){},37:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(20),c=a.n(l),o=(a(36),a(37),a(12)),i=a(14),s=a(2),m=a(3),u=a(5),p=a(4),b=a(6),E=a(7),k=a(17),h=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.hamburgerIconClassActive},r.a.createElement("div",{className:"hamburger-box"},r.a.createElement("div",{className:"hamburger-inner"})))}}]),t}(n.Component),d=function(e){var t=e.visible;return r.a.createElement("div",{id:"navbar",className:t?"slideIn":"slideOut"},r.a.createElement("ul",{className:"menu--start"},r.a.createElement("li",null,r.a.createElement(E.b,{to:"/skills"},"SKILLS")),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/works"},"WORKS")),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/contact"},"CONTACT"))))},g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(k.a)(a)),a.state={visible:!1},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"handleClick",value:function(){this.setState((function(e){return{visible:!e.visible}}))}},{key:"render",value:function(){var e=a(25);return r.a.createElement("div",{className:"menu--mobile"},r.a.createElement("button",{type:"button",onClick:this.handleClick},this.state.visible?r.a.createElement(h,{hamburgerIconClassActive:"hamburger hamburger--squeeze is-active"}):r.a.createElement(h,{hamburgerIconClassActive:"hamburger hamburger--squeeze"})),r.a.createElement(e,{compressor:.71},r.a.createElement("h1",{className:"title--start--mobile"},r.a.createElement(E.b,{to:"/"},"MARCO MASIK"))),r.a.createElement("h2",{className:"tagline--start--mobile"},"WEB DEVELOPER"),r.a.createElement(d,{visible:this.state.visible}))}}]),t}(n.Component),v=i.b.div({enter:{scale:1},exit:{scale:.1}}),O=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=a(25);return r.a.createElement(v,{className:"container--start"},r.a.createElement("div",{className:"container--video"},r.a.createElement("video",{autoPlay:!0,playsInline:!0,muted:!0,loop:!0,id:"ocean-video"},r.a.createElement("source",{src:"/ocean_waves.mp4",type:"video/mp4"})),r.a.createElement(g,null),r.a.createElement("div",{className:"container--text"},r.a.createElement(e,{compressor:.75},r.a.createElement("h1",{className:"title--start--large"},"MARCO MASIK")),r.a.createElement(e,{compressor:1.9},r.a.createElement("h2",{className:"tagline--start--large"},"WEB DEVELOPER")),r.a.createElement(e,{compressor:3},r.a.createElement("ul",{className:"menu--start"},r.a.createElement("li",null,r.a.createElement(E.b,{to:"/skills"},"SKILLS")),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/works"},"WORKS")),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/contact"},"CONTACT")))))))}}]),t}(n.Component),f=a(28),j=a.n(f),w=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement(j.a,null,r.a.createElement("div",{className:"container--menu"},r.a.createElement("div",{className:"container--menu--half"},r.a.createElement("h2",null,r.a.createElement(E.b,{to:"/"},"MARCO MASIK"))),r.a.createElement("div",{className:"container--menu--half"},r.a.createElement("ul",{class:"menu nav"},r.a.createElement("li",{className:"menu__element--current"},r.a.createElement("h2",null,this.props.currentPage)),r.a.createElement("li",{className:"menu__element"},r.a.createElement("h2",null,this.props.otherPage1)),r.a.createElement("li",{className:"menu__element"},r.a.createElement("h2",null,this.props.otherPage2)))))))}}]),t}(n.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container--skills"},r.a.createElement("div",{className:"container--margin"},r.a.createElement("div",{className:this.props.skillType},this.props.skillContent)))}}]),t}(n.Component),N=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container--skilltext"},r.a.createElement("div",{className:"title--skilltext"},r.a.createElement("h2",null,this.props.titleSkillText)),r.a.createElement("div",{className:"text--skilltext"},r.a.createElement("p",null,this.props.textSkillText)))}}]),t}(n.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(y,{skillType:"container--skills--row",skillContent:r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{titleSkillText:"Customized wordpress and squarespace templates",textSkillText:"Developing wordpress themes and squarespace templates from scratch or modify existing ones to  meet your needs."}),r.a.createElement(N,{titleSkillText:"Web application design and development",textSkillText:"Engineering framework based web applications, that work efficiently on complex business tasks. "}),r.a.createElement(N,{titleSkillText:"E-commerce development, setup and deployment",textSkillText:"I have experience in setting up e-commerce systems and in creating unique looking  webshops using different platforms."}))})}}]),t}(n.Component),S=a(16),x=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(y,{skillType:"container--skills--column",skillContent:r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{titleSkillText:["Responsive Websites ",r.a.createElement(S.d,null)],textSkillText:"Mobile First! As most people are browsing the web on mobile devices,  responsivity has become a must have."}),r.a.createElement(N,{titleSkillText:["Languages & Frameworks ",r.a.createElement(S.a,null)],textSkillText:"HTML, CSS, SASS, LESS, Bootstrap, PHP, JavaScript, jQuery, React.js, SWIFT, Java, MySQL"}),r.a.createElement(N,{titleSkillText:["Tools ",r.a.createElement(S.e,null)],textSkillText:"GIT, NPM, Photoshop, Illustrator, Sketch, WordPress, WooCommerce, Squarespace"}))})}}]),t}(n.Component),W=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container--mobile-menu--pages container--mobile-menu--pages--skills"},r.a.createElement(w,{currentPage:"SKILLS",otherPage1:r.a.createElement(E.b,{to:"/works"},"WORKS"),otherPage2:r.a.createElement(E.b,{to:"/contact"},"CONTACT")})),r.a.createElement(C,null),r.a.createElement(x,null))}}]),t}(n.Component),I=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container--workitem"},r.a.createElement("div",{className:"container--workitem-text"},r.a.createElement("div",{className:"title--workitem"},this.props.titleWorkItem),r.a.createElement("div",{className:"description-workitem"},this.props.descriptionWorkItem)),r.a.createElement("img",{className:"image--workitem",src:this.props.workItemImage}),r.a.createElement("div",{className:"container--workitem-hover"}))}}]),t}(n.Component),P=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container--works"},r.a.createElement("div",{className:"container--mobile-menu--pages container--mobile-menu--pages--works"},r.a.createElement(w,{currentPage:"WORKS",otherPage1:r.a.createElement(E.b,{to:"/skills"},"SKILLS"),otherPage2:r.a.createElement(E.b,{to:"/contact"},"CONTACT")})),r.a.createElement("div",{className:"container--margin"},r.a.createElement("div",{className:"container--workitem-rows"},r.a.createElement(E.b,{to:"/works/november"},r.a.createElement(I,{workItemImage:"./images/november.png",titleWorkItem:"November",descriptionWorkItem:["Designer brand webshop",r.a.createElement("br",null),"WordPress"]})),r.a.createElement(E.b,{to:"/works/swarm"},r.a.createElement(I,{workItemImage:"./images/swarm.png",titleWorkItem:"Swarm",descriptionWorkItem:["Crypto platform homepage",r.a.createElement("br",null),"Bootstrap"]})),r.a.createElement(E.b,{to:"/works/borneo"},r.a.createElement(I,{workItemImage:"./images/borneo.png",titleWorkItem:"Borneo",descriptionWorkItem:["Folk art accesories webshop",r.a.createElement("br",null),"Squarespace"]})),r.a.createElement(E.b,{to:"/works/muskinn"},r.a.createElement(I,{workItemImage:"./images/muskinn.png",titleWorkItem:"M\xfcskinn",descriptionWorkItem:["Conceptual backpack webshop",r.a.createElement("br",null),"WooCommerce"]})),r.a.createElement(E.b,{to:"/works/languagestudio"},r.a.createElement(I,{workItemImage:"./images/languagestudio.png",titleWorkItem:["Lanugage Studio",r.a.createElement("br",null),"K\xf6penick"],descriptionWorkItem:["English language school homepage",r.a.createElement("br",null),"Squarespace"]})),r.a.createElement(E.b,{to:"/works/hungaroplant"},r.a.createElement(I,{workItemImage:"./images/hungaroplant.png",titleWorkItem:"Hungaroplant",descriptionWorkItem:["Tree nursery homepage",r.a.createElement("br",null),"Squarespace"]}))))))}}]),t}(n.Component),T=a(29),L=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container--backbutton"},r.a.createElement("div",{className:"link--svg"},r.a.createElement(E.b,{to:this.props.backButtonLinkTo},r.a.createElement(T.a,null),r.a.createElement("span",null,"Back"))))}}]),t}(n.Component),A=i.b.div({enter:{scale:1},exit:{scale:.3,transition:{scale:{ease:"easeInOut",default:{duration:100}}}}}),q=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container--workpage--outter"},r.a.createElement("div",{className:"container--mobile-menu--pages container--mobile-menu--pages--works"},r.a.createElement(w,{currentPage:"WORKS",otherPage1:r.a.createElement(E.b,{to:"/skills"},"SKILLS"),otherPage2:r.a.createElement(E.b,{to:"/contact"},"CONTACT")})),r.a.createElement("div",{className:"container--margin"},r.a.createElement(A,{className:"container--workpage--inner"},r.a.createElement("div",{className:"container--workpage--content"},r.a.createElement("div",{className:"container--workpage--video"},r.a.createElement("div",{className:"title--workpage small-view"},this.props.titleWorkPage),r.a.createElement("video",{autoPlay:!0,playsInline:!0,muted:!0,loop:!0},r.a.createElement("source",{src:this.props.videoWorkPage,type:"video/mp4"}))),r.a.createElement("div",{className:"container--workpage--text"},r.a.createElement("div",{className:"title--workpage large-view"},this.props.titleWorkPage),r.a.createElement("div",{className:"text--workpage"},this.props.textWorkPage))),r.a.createElement(L,{backButtonLinkTo:"/works"})))))}}]),t}(n.Component),K=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(q,{videoWorkPage:"/videos/november5.mp4",titleWorkPage:"November",textWorkPage:["A clean, minimalistic website with a lookbook and a webshop for November, a young art and fashion collective focusing on fresh designer clothing and accessories.",r.a.createElement("ul",null,r.a.createElement("li",null,"Website and webshop development"),r.a.createElement("li",null,"A unique WordPress theme based on the brand design"))]})}}]),t}(n.Component),M=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(q,{videoWorkPage:"/videos/swarm2.mp4",titleWorkPage:"Swarm",textWorkPage:["Created by one of the founders of the decentralized internet movement, Swarm is a blockchain-based distributed storage platform specializing on storing various web3 services.",r.a.createElement("ul",null,r.a.createElement("li",null,"Developing responsive UI"),r.a.createElement("li",null,"Clearing up the source code, contributed by several developers"))]})}}]),t}(n.Component),B=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(q,{videoWorkPage:"/videos/borneo2.mp4",titleWorkPage:"Borneo",textWorkPage:["Website and webshop, including SEO for an eco-luxury fashion brand focusing on accessories inspired by Indonesian folk art and handcraft culture.",r.a.createElement("ul",null,r.a.createElement("li",null,"Creating squarespace template for unique looking lookbooks"),r.a.createElement("li",null,"Migrating webshop from wordpress to squarespace"))]})}}]),t}(n.Component),R=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(q,{videoWorkPage:"/videos/muskinn2.mp4",titleWorkPage:"M\xfcskinn",textWorkPage:["Developing the website and webshop for a design studio focusing on conceptual backpacks and accessories.",r.a.createElement("ul",null,r.a.createElement("li",null,"Developing on a customized WooCommerce theme"),r.a.createElement("li",null,"Enhance interactions"),r.a.createElement("li",null,"Fix responsive appearance"))]})}}]),t}(n.Component),F=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(q,{videoWorkPage:"/videos/languagestudio.mp4",titleWorkPage:"Language Studio K\xf6penick",textWorkPage:["Creating a new website for an english  language school in Berlin.",r.a.createElement("ul",null,r.a.createElement("li",null,"Developing a unique squarespace template"))]})}}]),t}(n.Component),D=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(q,{videoWorkPage:"/videos/hungaroplant2.mp4",titleWorkPage:"Hungaroplant",textWorkPage:["Creating a new website, for a tree nursery in Budapest.",r.a.createElement("ul",null,r.a.createElement("li",null,"Customizing squarespace template"),r.a.createElement("li",null,"Migrating catalogues from Drupal to squarespace"),r.a.createElement("li",null,"SEO"))]})}}]),t}(n.Component),z=a(30),_=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container--mobile-menu--pages container--mobile-menu--pages--contact"},r.a.createElement(w,{currentPage:"CONTACT",otherPage1:r.a.createElement(E.b,{to:"/skills"},"SKILLS"),otherPage2:r.a.createElement(E.b,{to:"/works"},"WORKS")})),r.a.createElement("div",{className:"container--margin"},r.a.createElement("div",{className:"container--contact"},r.a.createElement("div",{className:"container--image--contact"},r.a.createElement("div",{className:"image--contact"})),r.a.createElement("div",{className:"container--text-contact"},r.a.createElement("p",null,"Let\xb4s get in touch and talk about your website!"),r.a.createElement("p",null,r.a.createElement("div",{className:"link--svg"},r.a.createElement("a",{href:"mailto:hello@marcomasik.com"},r.a.createElement(z.a,null),r.a.createElement("span",null,"Send me an email to")))),r.a.createElement("p",null,"hello@marcomasik.com"),r.a.createElement("p",null,r.a.createElement("div",{className:"link--svg"},r.a.createElement("a",{href:"https://github.com/marcomasik"},r.a.createElement(S.b,null),r.a.createElement("span",null,"Check my GitHub account")))),r.a.createElement("p",null,r.a.createElement("div",{className:"link--svg"},r.a.createElement("a",{href:"https://www.linkedin.com/in/marco-masik"},r.a.createElement(S.c,null),r.a.createElement("span",null,"Add me on LinkedIn"))))))))}}]),t}(n.Component),H=i.b.div({enter:{opacity:1},exit:{opacity:0}}),J=function(){return r.a.createElement(o.a,{render:function(e){var t=e.location;return r.a.createElement(i.a,null,r.a.createElement(H,{key:t.pathname},r.a.createElement(o.c,{location:t},r.a.createElement(o.a,{exact:!0,path:"/marcomasik2/",component:O,key:"start"}),r.a.createElement(o.a,{exact:!0,path:"/skills",component:W,key:"skills"}),r.a.createElement(o.a,{exact:!0,path:"/works",component:P,key:"works"}),r.a.createElement(o.a,{exact:!0,path:"/works/november",component:K,key:"november"}),r.a.createElement(o.a,{exact:!0,path:"/works/swarm",component:M,key:"swarm"}),r.a.createElement(o.a,{exact:!0,path:"/works/borneo",component:B,key:"borneo"}),r.a.createElement(o.a,{exact:!0,path:"/works/muskinn",component:R,key:"muskinn"}),r.a.createElement(o.a,{exact:!0,path:"/works/languagestudio",component:F,key:"languagestudio"}),r.a.createElement(o.a,{exact:!0,path:"/works/hungaroplant",component:D,key:"hungaroplant"}),r.a.createElement(o.a,{exact:!0,path:"/contact",component:_,key:"contact"}))))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E.a,{basename:"/marcomasik2"},r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.dd9fc834.chunk.js.map