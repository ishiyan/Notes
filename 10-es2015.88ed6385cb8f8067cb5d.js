(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"rT/1":function(e,t,n){"use strict";n.r(t),n.d(t,"AssetManagementModule",function(){return u});var i=n("ofXK"),r=n("3Pt+"),o=n("YUcS"),a=n("jAig"),c=n("8+a9"),s=n("tyNb"),d=n("fXoL");const l=[{path:"fm",loadChildren:()=>Promise.all([n.e(1),n.e(3),n.e(11)]).then(n.bind(null,"9+uw")).then(e=>e.FixedMixModule)},{path:"hi",loadChildren:()=>Promise.all([n.e(1),n.e(2),n.e(13)]).then(n.bind(null,"L8Bm")).then(e=>e.HierarchiesModule)},{path:"**",redirectTo:"fm"}];let m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.Lb({type:e}),e.\u0275inj=d.Kb({imports:[[s.f.forChild(l)],s.f]}),e})(),u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.Lb({type:e}),e.\u0275inj=d.Kb({imports:[[i.c,r.e,o.a,a.a,c.a,m]]}),e})()},reMG:function(e,t,n){"use strict";n.r(t),n.d(t,"NotesModule",function(){return w});var i=n("ofXK"),r=n("3Pt+"),o=n("YUcS"),a=n("cNqA"),c=n("jAig"),s=n("+pJM"),d=n("NodR"),l=n("8+a9"),m=n("tyNb"),u=n("FvrZ"),b=n("8yBR");const f=[{name:"Asset Management simulations",children:[{name:"Hierarchies",children:[{name:"Demo",header:"Visualising hierarchical data",route:"am/hi/d1"},{name:"Industry classifications",header:"Industry classifications",route:"am/hi/d2"}]},{name:"Fixed mix",children:[{name:"Single",header:"AM fixed mix single",route:"am/fm/s1"},{name:"Single interactive",header:"AM fixed mix single interactive",route:"am/fm/s2"},{name:"Buckets",header:"AM fixed mix buckets",route:"am/fm/b1"},{name:"Buckets interactive",header:"AM fixed mix buckets interactive",route:"am/fm/b2"}]}]}];var h=n("fXoL"),p=n("/t3+"),g=n("bTqV"),C=n("NFeN"),T=n("XhcP");function v(e,t){if(1&e){const e=h.Ub();h.Tb(0,"mat-tree-node",8),h.Tb(1,"li",9),h.Tb(2,"button",10),h.bc("click",function(){h.vc(e);const n=t.$implicit,i=h.fc(),r=h.sc(8);return i.sample=n,r.close()}),h.Cc(3),h.Sb(),h.Sb(),h.Sb()}if(2&e){const e=t.$implicit,n=h.fc();h.Cb(2),h.Fb("sidenav-item-selected",n.sample===e)("sidenav-item-unselected",n.sample!==e),h.lc("routerLink","/notes/"+e.route),h.Cb(1),h.Dc(e.name)}}function M(e,t){if(1&e&&(h.Tb(0,"mat-nested-tree-node",11),h.Tb(1,"li"),h.Tb(2,"span",12),h.Tb(3,"button",13),h.Tb(4,"mat-icon",14),h.Cc(5),h.Sb(),h.Cc(6),h.Sb(),h.Sb(),h.Tb(7,"ul"),h.Pb(8,15),h.Sb(),h.Sb(),h.Sb()),2&e){const e=t.$implicit,n=h.fc();h.Cb(5),h.Ec(" ",n.treeControl.isExpanded(e)?"expand_more":"chevron_right"," "),h.Cb(1),h.Ec(" ",e.name," "),h.Cb(1),h.Fb("tree-invisible",!n.treeControl.isExpanded(e))}}const S=[{path:"",component:(()=>{class e{constructor(t){this.sample=f[0],this.treeControl=new u.j(e=>e.children),this.dataSource=new b.d,this.hasChild=(e,t)=>!!t.children&&t.children.length>0;const n=t.routerState.snapshot.url;for(const i of f){const t=e.findEqual(i,n);if(t){this.sample=t;break}}if(!this.sample)for(const i of f){const t=e.findFirst(i);if(t){this.sample=t;break}}this.dataSource.data=f}static findEqual(t,n){if(t.route&&n==="/notes/"+t.route)return t;if(t.children)for(const i of t.children){const t=e.findEqual(i,n);if(t)return t}}static findFirst(t){if(t.route)return t;if(t.children)for(const n of t.children){const t=e.findFirst(n);if(t)return t}}}return e.\u0275fac=function(t){return new(t||e)(h.Nb(m.b))},e.\u0275cmp=h.Hb({type:e,selectors:[["mb-notes-collection"]],decls:14,vars:5,consts:[["color","primary",1,"header"],["mat-button","",1,"sidenav-toggle",3,"click"],[1,"sidenav-container"],["mode","push","fixedInViewport","false","opened","false",1,"mat-elevation-z16"],["notesSidenav",""],[1,"tree",3,"dataSource","treeControl"],["matTreeNodeToggle","","class","tree-node",4,"matTreeNodeDef"],["matTreeNodePadding","",4,"matTreeNodeDef","matTreeNodeDefWhen"],["matTreeNodeToggle","",1,"tree-node"],[1,"tree-node"],["mat-button","","onclick","this.blur()","routerLinkActive","sidenav-item-selected",1,"tree-item",3,"routerLink","click"],["matTreeNodePadding",""],[1,"mat-tree-node","tree-node"],["mat-button","","matTreeNodeToggle","","onclick","this.blur()"],[1,"mat-icon-rtl-mirror"],["matTreeNodeOutlet",""]],template:function(e,t){if(1&e){const e=h.Ub();h.Tb(0,"mat-toolbar",0),h.Tb(1,"button",1),h.bc("click",function(){return h.vc(e),h.sc(8).toggle()}),h.Tb(2,"mat-icon"),h.Cc(3),h.Sb(),h.Sb(),h.Tb(4,"span"),h.Cc(5),h.Sb(),h.Sb(),h.Tb(6,"mat-sidenav-container",2),h.Tb(7,"mat-sidenav",3,4),h.Tb(9,"mat-tree",5),h.Bc(10,v,4,6,"mat-tree-node",6),h.Bc(11,M,9,4,"mat-nested-tree-node",7),h.Sb(),h.Sb(),h.Tb(12,"mat-sidenav-content"),h.Ob(13,"router-outlet"),h.Sb(),h.Sb()}if(2&e){const e=h.sc(8);h.Cb(3),h.Dc(e.opened?"menu_open":"menu"),h.Cb(2),h.Dc(t.sample.header?t.sample.header:"???"),h.Cb(4),h.lc("dataSource",t.dataSource)("treeControl",t.treeControl),h.Cb(2),h.lc("matTreeNodeDefWhen",t.hasChild)}},directives:[p.a,g.b,C.a,T.b,T.a,b.b,b.f,T.c,m.g,b.e,b.i,m.d,m.c,b.a,b.h,b.g],styles:[".sidenav-container[_ngcontent-%COMP%]{flex:1}.header[_ngcontent-%COMP%]{height:48px;display:flex}.header[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:0}.sidenav-toggle[_ngcontent-%COMP%]{padding:0 0 0 8px;margin:0;display:flex;align-items:center;justify-content:center}.sidenav-item-unselected[_ngcontent-%COMP%]{font-weight:400}.sidenav-item-selected[_ngcontent-%COMP%]{font-weight:600}.tree-invisible[_ngcontent-%COMP%]{display:none}.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0;list-style-type:none}.tree-item[_ngcontent-%COMP%], .tree-node[_ngcontent-%COMP%]{font-size:16px;white-space:pre-wrap!important}.tree-item[_ngcontent-%COMP%]{text-align:left}"]}),e})(),children:[{path:"am",loadChildren:()=>Promise.resolve().then(n.bind(null,"rT/1")).then(e=>e.AssetManagementModule)},{path:"**",redirectTo:"am"}]},{path:"**",redirectTo:""}];let P=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h.Lb({type:e}),e.\u0275inj=h.Kb({imports:[[m.f.forChild(S)],m.f]}),e})();var x=n("rT/1");let w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=h.Lb({type:e}),e.\u0275inj=h.Kb({providers:[],imports:[[i.c,r.e,o.a,c.a,s.a,l.a,a.a,d.a,P,x.AssetManagementModule]]}),e})()}}]);