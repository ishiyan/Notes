(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"rT/1":function(e,t,n){"use strict";n.r(t),n.d(t,"AssetManagementModule",(function(){return u}));var o=n("ofXK"),i=n("3Pt+"),r=n("YUcS"),a=n("jAig"),c=n("8+a9"),s=n("tyNb"),d=n("fXoL");const l=[{path:"fm",loadChildren:()=>Promise.all([n.e(1),n.e(2),n.e(11)]).then(n.bind(null,"9+uw")).then(e=>e.FixedMixModule)},{path:"**",redirectTo:"fm"}];let m=(()=>{class e{}return e.\u0275mod=d.Nb({type:e}),e.\u0275inj=d.Mb({factory:function(t){return new(t||e)},imports:[[s.f.forChild(l)],s.f]}),e})(),u=(()=>{class e{}return e.\u0275mod=d.Nb({type:e}),e.\u0275inj=d.Mb({factory:function(t){return new(t||e)},imports:[[o.c,i.d,r.a,a.a,c.a,m]]}),e})()},reMG:function(e,t,n){"use strict";n.r(t),n.d(t,"NotesModule",(function(){return T}));var o=n("ofXK"),i=n("3Pt+"),r=n("YUcS"),a=n("cNqA"),c=n("jAig"),s=n("+pJM"),d=n("NodR"),l=n("8+a9"),m=n("tyNb"),u=n("FvrZ"),b=n("8yBR");const f=[{name:"Asset Management simulations",children:[{name:"Fixed mix",children:[{name:"Single",header:"AM fixed mix single",route:"am/fm/s1"},{name:"Single interactive",header:"AM fixed mix single interactive",route:"am/fm/s2"},{name:"Buckets",header:"AM fixed mix buckets",route:"am/fm/b1"},{name:"Buckets interactive",header:"AM fixed mix buckets interactive",route:"am/fm/b2"}]}]}];var h=n("fXoL"),p=n("/t3+"),g=n("bTqV"),C=n("NFeN"),M=n("XhcP");function v(e,t){if(1&e){const e=h.Wb();h.Vb(0,"mat-tree-node",8),h.Vb(1,"li",9),h.Vb(2,"button",10),h.dc("click",(function(){h.xc(e);const n=t.$implicit,o=h.hc(),i=h.uc(8);return o.sample=n,i.close()})),h.Ec(3),h.Ub(),h.Ub(),h.Ub()}if(2&e){const e=t.$implicit,n=h.hc();h.Cb(2),h.Fb("sidenav-item-selected",n.sample===e)("sidenav-item-unselected",n.sample!==e),h.nc("routerLink","/notes/"+e.route),h.Cb(1),h.Fc(e.name)}}function x(e,t){if(1&e&&(h.Vb(0,"mat-nested-tree-node",11),h.Vb(1,"li"),h.Vb(2,"span",12),h.Vb(3,"button",13),h.Vb(4,"mat-icon",14),h.Ec(5),h.Ub(),h.Ec(6),h.Ub(),h.Ub(),h.Vb(7,"ul"),h.Rb(8,15),h.Ub(),h.Ub(),h.Ub()),2&e){const e=t.$implicit,n=h.hc();h.Cb(5),h.Gc(" ",n.treeControl.isExpanded(e)?"expand_more":"chevron_right"," "),h.Cb(1),h.Gc(" ",e.name," "),h.Cb(1),h.Fb("tree-invisible",!n.treeControl.isExpanded(e))}}const P=[{path:"",component:(()=>{class e{constructor(t){this.sample=f[0],this.treeControl=new u.j(e=>e.children),this.dataSource=new b.d,this.hasChild=(e,t)=>!!t.children&&t.children.length>0;const n=t.routerState.snapshot.url;for(const o of f){const t=e.findEqual(o,n);if(t){this.sample=t;break}}if(!this.sample)for(const o of f){const t=e.findFirst(o);if(t){this.sample=t;break}}this.dataSource.data=f}static findEqual(t,n){if(t.route&&n==="/notes/"+t.route)return t;if(t.children)for(const o of t.children){const t=e.findEqual(o,n);if(t)return t}}static findFirst(t){if(t.route)return t;if(t.children)for(const n of t.children){const t=e.findFirst(n);if(t)return t}}}return e.\u0275fac=function(t){return new(t||e)(h.Pb(m.b))},e.\u0275cmp=h.Jb({type:e,selectors:[["mb-notes-collection"]],decls:14,vars:5,consts:[["color","primary",1,"header"],["mat-button","",1,"sidenav-toggle",3,"click"],[1,"sidenav-container"],["mode","push","fixedInViewport","false","opened","false",1,"mat-elevation-z16"],["notesSidenav",""],[1,"tree",3,"dataSource","treeControl"],["matTreeNodeToggle","","class","tree-node",4,"matTreeNodeDef"],["matTreeNodePadding","",4,"matTreeNodeDef","matTreeNodeDefWhen"],["matTreeNodeToggle","",1,"tree-node"],[1,"tree-node"],["mat-button","","onclick","this.blur()","routerLinkActive","sidenav-item-selected",1,"tree-item",3,"routerLink","click"],["matTreeNodePadding",""],[1,"mat-tree-node","tree-node"],["mat-button","","matTreeNodeToggle","","onclick","this.blur()"],[1,"mat-icon-rtl-mirror"],["matTreeNodeOutlet",""]],template:function(e,t){if(1&e){const e=h.Wb();h.Vb(0,"mat-toolbar",0),h.Vb(1,"button",1),h.dc("click",(function(){return h.xc(e),h.uc(8).toggle()})),h.Vb(2,"mat-icon"),h.Ec(3),h.Ub(),h.Ub(),h.Vb(4,"span"),h.Ec(5),h.Ub(),h.Ub(),h.Vb(6,"mat-sidenav-container",2),h.Vb(7,"mat-sidenav",3,4),h.Vb(9,"mat-tree",5),h.Dc(10,v,4,6,"mat-tree-node",6),h.Dc(11,x,9,4,"mat-nested-tree-node",7),h.Ub(),h.Ub(),h.Vb(12,"mat-sidenav-content"),h.Qb(13,"router-outlet"),h.Ub(),h.Ub()}if(2&e){const e=h.uc(8);h.Cb(3),h.Fc(e.opened?"menu_open":"menu"),h.Cb(2),h.Fc(t.sample.header?t.sample.header:"???"),h.Cb(4),h.nc("dataSource",t.dataSource)("treeControl",t.treeControl),h.Cb(2),h.nc("matTreeNodeDefWhen",t.hasChild)}},directives:[p.a,g.b,C.a,M.b,M.a,b.b,b.f,M.c,m.g,b.e,b.i,m.d,m.c,b.a,b.h,b.g],styles:[".sidenav-container[_ngcontent-%COMP%]{flex:1}.header[_ngcontent-%COMP%]{height:48px;display:flex}.header[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:0}.sidenav-toggle[_ngcontent-%COMP%]{padding:0 0 0 8px;margin:0;display:flex;align-items:center;justify-content:center}.sidenav-item-unselected[_ngcontent-%COMP%]{font-weight:400}.sidenav-item-selected[_ngcontent-%COMP%]{font-weight:600}.tree-invisible[_ngcontent-%COMP%]{display:none}.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0;list-style-type:none}.tree-item[_ngcontent-%COMP%], .tree-node[_ngcontent-%COMP%]{font-size:16px;white-space:pre-wrap!important}.tree-item[_ngcontent-%COMP%]{text-align:left}"]}),e})(),children:[{path:"am",loadChildren:()=>Promise.resolve().then(n.bind(null,"rT/1")).then(e=>e.AssetManagementModule)},{path:"**",redirectTo:"am"}]},{path:"**",redirectTo:""}];let N=(()=>{class e{}return e.\u0275mod=h.Nb({type:e}),e.\u0275inj=h.Mb({factory:function(t){return new(t||e)},imports:[[m.f.forChild(P)],m.f]}),e})();var y=n("rT/1");let T=(()=>{class e{}return e.\u0275mod=h.Nb({type:e}),e.\u0275inj=h.Mb({factory:function(t){return new(t||e)},providers:[],imports:[[o.c,i.d,r.a,c.a,s.a,l.a,a.a,d.a,N,y.AssetManagementModule]]}),e})()}}]);