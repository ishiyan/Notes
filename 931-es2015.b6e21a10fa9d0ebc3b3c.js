(self.webpackChunkmbs_api_host_ng=self.webpackChunkmbs_api_host_ng||[]).push([[931],{36139:function(e,t,n){"use strict";n.r(t),n.d(t,{AssetManagementModule:function(){return u}});var i=n(38583),o=n(3679),r=n(19134),a=n(50694),s=n(2312),c=n(54655),d=n(37716);const l=[{path:"fm",loadChildren:()=>Promise.all([n.e(700),n.e(526),n.e(897)]).then(n.bind(n,37862)).then(e=>e.FixedMixModule)},{path:"hi",loadChildren:()=>Promise.all([n.e(700),n.e(556),n.e(818)]).then(n.bind(n,10818)).then(e=>e.HierarchiesModule)},{path:"**",redirectTo:"fm"}];let m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[c.Bz.forChild(l)],c.Bz]}),e})(),u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[i.ez,o.u5,r.o9,a.q,s.J,m]]}),e})()},36931:function(e,t,n){"use strict";n.r(t),n.d(t,{NotesModule:function(){return b}});var i=n(38583),o=n(3679),r=n(19134),a=n(36685),s=n(50694),c=n(27402),d=n(66648),l=n(2312),m=n(54655),u=n(52796),h=n(1933);const f=[{name:"Asset Management simulations",children:[{name:"Hierarchies",children:[{name:"Demo",header:"Visualising hierarchical data",route:"am/hi/d1"},{name:"Industry classifications",header:"Industry classifications",route:"am/hi/d2"}]},{name:"Fixed mix",children:[{name:"Single",header:"AM fixed mix single",route:"am/fm/s1"},{name:"Single interactive",header:"AM fixed mix single interactive",route:"am/fm/s2"},{name:"Buckets",header:"AM fixed mix buckets",route:"am/fm/b1"},{name:"Buckets interactive",header:"AM fixed mix buckets interactive",route:"am/fm/b2"}]}]}];var p=n(37716),g=n(12522),M=n(51095),Z=n(76627),x=n(23017);function A(e,t){if(1&e){const e=p.EpF();p.TgZ(0,"mat-tree-node",8),p.TgZ(1,"li",9),p.TgZ(2,"button",10),p.NdJ("click",function(){const t=p.CHM(e).$implicit,n=p.oxw(),i=p.MAs(8);return n.sample=t,i.close()}),p._uU(3),p.qZA(),p.qZA(),p.qZA()}if(2&e){const e=t.$implicit,n=p.oxw();p.xp6(2),p.ekj("sidenav-item-selected",n.sample===e)("sidenav-item-unselected",n.sample!==e),p.Q6J("routerLink","/notes/"+e.route),p.xp6(1),p.Oqu(e.name)}}function C(e,t){if(1&e&&(p.TgZ(0,"mat-nested-tree-node",11),p.TgZ(1,"li"),p.TgZ(2,"span",12),p.TgZ(3,"button",13),p.TgZ(4,"mat-icon",14),p._uU(5),p.qZA(),p._uU(6),p.qZA(),p.qZA(),p.TgZ(7,"ul"),p.GkF(8,15),p.qZA(),p.qZA(),p.qZA()),2&e){const e=t.$implicit,n=p.oxw();p.xp6(5),p.hij(" ",n.treeControl.isExpanded(e)?"expand_more":"chevron_right"," "),p.xp6(1),p.hij(" ",e.name," "),p.xp6(1),p.ekj("tree-invisible",!n.treeControl.isExpanded(e))}}const T=[{path:"",component:(()=>{class e{constructor(t){this.sample=f[0],this.treeControl=new u.VY(e=>e.children),this.dataSource=new h.WX,this.hasChild=(e,t)=>!!t.children&&t.children.length>0;const n=t.routerState.snapshot.url;for(const i of f){const t=e.findEqual(i,n);if(t){this.sample=t;break}}if(!this.sample)for(const i of f){const t=e.findFirst(i);if(t){this.sample=t;break}}this.dataSource.data=f}static findEqual(t,n){if(t.route&&n==="/notes/"+t.route)return t;if(t.children)for(const i of t.children){const t=e.findEqual(i,n);if(t)return t}}static findFirst(t){if(t.route)return t;if(t.children)for(const n of t.children){const t=e.findFirst(n);if(t)return t}}}return e.\u0275fac=function(t){return new(t||e)(p.Y36(m.F0))},e.\u0275cmp=p.Xpm({type:e,selectors:[["mb-notes-collection"]],decls:14,vars:5,consts:[["color","primary",1,"header"],["mat-button","",1,"sidenav-toggle",3,"click"],[1,"sidenav-container"],["mode","push","fixedInViewport","false","opened","false",1,"mat-elevation-z16"],["notesSidenav",""],[1,"tree",3,"dataSource","treeControl"],["matTreeNodeToggle","","class","tree-node",4,"matTreeNodeDef"],["matTreeNodePadding","",4,"matTreeNodeDef","matTreeNodeDefWhen"],["matTreeNodeToggle","",1,"tree-node"],[1,"tree-node"],["mat-button","","onclick","this.blur()","routerLinkActive","sidenav-item-selected",1,"tree-item",3,"routerLink","click"],["matTreeNodePadding",""],[1,"mat-tree-node","tree-node"],["mat-button","","matTreeNodeToggle","","onclick","this.blur()"],[1,"mat-icon-rtl-mirror"],["matTreeNodeOutlet",""]],template:function(e,t){if(1&e){const e=p.EpF();p.TgZ(0,"mat-toolbar",0),p.TgZ(1,"button",1),p.NdJ("click",function(){return p.CHM(e),p.MAs(8).toggle()}),p.TgZ(2,"mat-icon"),p._uU(3),p.qZA(),p.qZA(),p.TgZ(4,"span"),p._uU(5),p.qZA(),p.qZA(),p.TgZ(6,"mat-sidenav-container",2),p.TgZ(7,"mat-sidenav",3,4),p.TgZ(9,"mat-tree",5),p.YNc(10,A,4,6,"mat-tree-node",6),p.YNc(11,C,9,4,"mat-nested-tree-node",7),p.qZA(),p.qZA(),p.TgZ(12,"mat-sidenav-content"),p._UZ(13,"router-outlet"),p.qZA(),p.qZA()}if(2&e){const e=p.MAs(8);p.xp6(3),p.Oqu(e.opened?"menu_open":"menu"),p.xp6(2),p.Oqu(t.sample.header?t.sample.header:"???"),p.xp6(4),p.Q6J("dataSource",t.dataSource)("treeControl",t.treeControl),p.xp6(2),p.Q6J("matTreeNodeDefWhen",t.hasChild)}},directives:[g.Ye,M.lW,Z.Hw,x.TM,x.JX,h.gi,h.fQ,x.Rh,m.lC,h.uo,h.eu,m.Od,m.rH,h.GZ,h.ah,h.Ar],styles:[".sidenav-container[_ngcontent-%COMP%]{flex:1}.header[_ngcontent-%COMP%]{height:48px;display:flex}.header[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:0}.sidenav-toggle[_ngcontent-%COMP%]{padding:0 0 0 8px;margin:0;display:flex;align-items:center;justify-content:center}.sidenav-item-unselected[_ngcontent-%COMP%]{font-weight:400}.sidenav-item-selected[_ngcontent-%COMP%]{font-weight:600}.tree-invisible[_ngcontent-%COMP%]{display:none}.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0;list-style-type:none}.tree-item[_ngcontent-%COMP%], .tree-node[_ngcontent-%COMP%]{font-size:16px;white-space:pre-wrap!important}.tree-item[_ngcontent-%COMP%]{text-align:left}"]}),e})(),children:[{path:"am",loadChildren:()=>Promise.resolve().then(n.bind(n,36139)).then(e=>e.AssetManagementModule)},{path:"**",redirectTo:"am"}]},{path:"**",redirectTo:""}];let _=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[m.Bz.forChild(T)],m.Bz]}),e})();var v=n(36139);let b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({providers:[],imports:[[i.ez,o.u5,r.o9,s.q,c.Y,l.J,a._,d.h,_,v.AssetManagementModule]]}),e})()}}]);