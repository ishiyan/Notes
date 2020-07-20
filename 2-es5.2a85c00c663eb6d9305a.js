function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _createForOfIteratorHelper(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){u=!0,a=t},f:function(){try{o||null==n.return||n.return()}finally{if(u)throw a}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"2wmS":function(t,e,n){"use strict";function r(t){if(t.length>0){if(void 0!==t[0].close)return function(t){return t.close};if(void 0!==t[0].price)return function(t){return t.price};if(void 0!==t[0].bidPrice)return function(t){return t.bidPrice}}return function(t){return t.value}}n.d(e,"a",(function(){return r}))},"3GQF":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("fXoL"),i=n("kmnG"),a=n("d3UM"),o=n("gjKW"),u=n("ofXK"),c=n("FKr1");function l(t,e){if(1&t&&(r.Tb(0,"mat-option",4),r.Ob(1,"mb-swatches",2),r.Sb()),2&t){var n=e.$implicit,i=r.fc();r.lc("value",n),r.Bb(1),r.lc("width",96)("height",i.optionHeightPixels)("colors",n)}}var s=function(){var t=function(){function t(){_classCallCheck(this,t),this.label="Select colors",this.selectionChange=new r.o,this.optionHeightPixels=32,this.triggerHeightPixels=24,this.optionWidthPixels=96,this.triggerWidthPixels=72,this.selectWidthPixels=20+this.triggerWidthPixels,this.palettes=[],this.selectedPalette=[]}return _createClass(t,[{key:"selectionChanged",value:function(t){this.selectionChange.emit(t.value)}},{key:"computeWidthStyle",value:function(){return{width:this.selectWidthPixels+"px"}}},{key:"colors",set:function(t){if(t&&t.length>0){this.palettes=t,this.selectedPalette=this.palettes[0];var e=0;for(var n in this.palettes)e<n.length&&(e=n.length);this.optionWidthPixels=e*this.optionHeightPixels,this.triggerWidthPixels=e*this.triggerHeightPixels,this.selectWidthPixels=20+this.triggerWidthPixels}}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Hb({type:t,selectors:[["mb-swatches-select"]],inputs:{colors:"colors",label:"label"},outputs:{selectionChange:"selectionChange"},decls:7,vars:6,consts:[[2,"width","92px"],[3,"value","valueChange","selectionChange"],[3,"width","height","colors"],["style","padding: 18px 0px 0px 30px",3,"value",4,"ngFor","ngForOf"],[2,"padding","18px 0px 0px 30px",3,"value"]],template:function(t,e){1&t&&(r.Tb(0,"mat-form-field",0),r.Tb(1,"mat-label"),r.Cc(2),r.Sb(),r.Tb(3,"mat-select",1),r.bc("valueChange",(function(t){return e.selectedPalette=t}))("selectionChange",(function(t){return e.selectionChanged(t)})),r.Tb(4,"mat-select-trigger"),r.Ob(5,"mb-swatches",2),r.Sb(),r.Bc(6,l,2,4,"mat-option",3),r.Sb(),r.Sb()),2&t&&(r.Bb(2),r.Dc(e.label),r.Bb(1),r.lc("value",e.selectedPalette),r.Bb(2),r.lc("width",72)("height",e.triggerHeightPixels)("colors",e.selectedPalette),r.Bb(1),r.lc("ngForOf",e.palettes))},directives:[i.b,i.f,a.a,a.c,o.a,u.l,c.n],styles:[""],encapsulation:2}),t}()},"7IeN":function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var r=n("VphZ"),i=n("rGib"),a=n("RpBn"),o=n("t9gN"),u=n("kfDn"),c=n("Ik4K"),l=n("Xf12"),s=n("uaKh"),f=n("OWNR"),h=n("mLdi"),d=n("u+s4"),p=n("UvBD"),v=n("fXoL"),m=["*"],g=function(){var t=function(){function t(e){_classCallCheck(this,t),this.elementRef=e,this.sumFunc=a.b,this.sort="asc",this.zoom=!0,this.transitionMsec=750,this.labelFunc=u.b,this.labelMinRadius=1,this.labelFill="white",this.labelShadow="0px 0px 8px #000000",this.labelFontSizeFunc=p.g,this.tooltipFunc=c.b,this.tapFunc=l.a,this.fillFunc=s.g,this.fillOpacityFunc=d.b,this.strokeFunc=f.a,this.strokeWidthFunc=h.a,this.padding=3,this.diameter=300,this.flat=!1,this.rootCircle=!1}return _createClass(t,[{key:"ngOnChanges",value:function(t){this.render()}},{key:"render",value:function(){var t,e=this,n=r.select(this.elementRef.nativeElement);n.select("svg").remove();var a=this.data;if(a&&a.children&&!(a.children.length<1)){var u=Object(i.a)(this.elementRef,this.diameter,this.diameter,300,300),c=Math.max(u[0],u[1]),l=c/2,s=n.append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("width",c).attr("height",c).attr("viewBox","-".concat(l," -").concat(l," ").concat(c," ").concat(c)).on("click",(function(){return M(d)})),f="asc"===this.sort?o.a:"desc"===this.sort?o.b:o.c,h=function(t){var n=r.hierarchy(t).sum(e.sumFunc);return f!==o.c&&(n=n.sort((function(t,e){return f(t,e)}))),r.pack().size([c,c]).padding(e.padding)(n)},d=h(a);if(this.flat){var p,v={children:[]},m=_createForOfIteratorHelper(d.leaves());try{for(m.s();!(p=m.n()).done;){var g=p.value;null===(t=v.children)||void 0===t||t.push(g.data)}}catch(O){m.e(O)}finally{m.f()}d=h(v)}var b=d,y=s.append("g").selectAll("circle").data(this.rootCircle?d.descendants():d.descendants().slice(1)).join("circle").attr("fill",this.fillFunc).attr("fill-opacity",(function(t){return e.fillOpacityFunc(t,d.height)})).attr("stroke",(function(t){return e.strokeFunc(t)})).attr("stroke-width",(function(t){return e.strokeWidthFunc(t)})).on("click",(function(t){r.event.stopPropagation(),w(t)})),x=function(t){return t.parent===b&&t.r>=e.labelMinRadius?1:0},k=s.append("g").style("fill",this.labelFill).style("text-shadow",this.labelShadow).style("user-select","none").attr("pointer-events","none").attr("text-anchor","middle").selectAll("text").data(d.descendants()).enter().append("text").style("fill-opacity",x).style("font-size",(function(t){return e.labelFontSizeFunc(t)}));k.selectAll("tspan").data((function(t){return e.labelFunc(t).split(/\s+/g)})).join("tspan").attr("x",0).attr("y",(function(t,e,n){return e-n.length/2+.8+"em"})).text((function(t){return t}));var C,w=function(t){e.tapFunc(t),e.zoom&&!e.flat&&t.children&&b!==t&&M(t)},F=function(t){C=t;var n=c/t[2];k.attr("transform",(function(r){return"translate(".concat((r.x-t[0])*n,",").concat((r.y-t[1])*n+e.labelFontSizeFunc(r)/4,")")})),y.attr("transform",(function(e){return"translate(".concat((e.x-t[0])*n,",").concat((e.y-t[1])*n,")")})),y.attr("r",(function(t){return t.r*n}))},M=function(t){b=t;var n=s.transition().duration(e.transitionMsec).tween("zoom",(function(){var t=r.interpolateZoom(C,[b.x,b.y,2*b.r]);return function(e){return F(t(e))}}));k.transition(n).style("fill-opacity",x)};y.append("title").text((function(t){return e.tooltipFunc(t)})),F([d.x,d.y,2*d.r])}}}]),t}();return t.\u0275fac=function(e){return new(e||t)(v.Nb(v.l))},t.\u0275cmp=v.Hb({type:t,selectors:[["mb-circlepack"]],hostBindings:function(t,e){1&t&&v.bc("resize",(function(){return e.render()}),!1,v.uc)},inputs:{sumFunc:"sumFunc",sort:"sort",zoom:"zoom",transitionMsec:"transitionMsec",labelFunc:"labelFunc",labelMinRadius:"labelMinRadius",labelFill:"labelFill",labelShadow:"labelShadow",labelFontSizeFunc:"labelFontSizeFunc",tooltipFunc:"tooltipFunc",tapFunc:"tapFunc",fillFunc:"fillFunc",fillOpacityFunc:"fillOpacityFunc",strokeFunc:"strokeFunc",strokeWidthFunc:"strokeWidthFunc",padding:"padding",diameter:"diameter",data:"data",flat:"flat",rootCircle:"rootCircle"},features:[v.zb],ngContentSelectors:m,decls:1,vars:0,template:function(t,e){1&t&&(v.kc(),v.jc(0))},styles:[""],encapsulation:2,changeDetection:0}),t}()},FKCY:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n("VphZ"),i=n("rGib"),a=n("bc9u"),o=n("2wmS"),u=n("fXoL"),c=["*"],l={fillColor:void 0,strokeColor:"steelblue",strokeWidth:1,interpolation:"natural"},s=new Date(-864e13),f=new Date(864e13),h=function(){var t=function(){function t(e){_classCallCheck(this,t),this.elementRef=e,this.currentConfiguration=[],this.currentData=[],this.currentDataEmpty=!0,this.width=300,this.height=100,this.timeAxis=[],this.valueAxis=[]}return _createClass(t,[{key:"ngAfterViewInit",value:function(){var t=this;setTimeout((function(){return t.render()}),0)}},{key:"ngOnChanges",value:function(t){this.render()}},{key:"render",value:function(){var t=r.select(this.elementRef.nativeElement);t.select("svg").remove();var e=this.currentData;if(!(this.currentDataEmpty||!e||e.length<1)){var n=this.currentConfiguration,u=this.timeAxis.includes("top"),c=this.timeAxis.includes("bottom"),s=this.valueAxis.includes("left"),f=this.valueAxis.includes("right"),h=this.valueAxis.includes("grid"),d=s||h?50:u||c?50/3:0,p=f?50:u||c?50/3:0,v=u?18:s||f||h?6:0,m=c?18:s||f||h?6:0,g=Object(i.a)(this.elementRef,this.width,this.height,300,100),b=g[0],y=g[1],x=t.append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("width",b).attr("height",y).attr("viewBox","0 0 ".concat(b," ").concat(y)),k=void 0===this.forcedTimeMin?this.dataTimeMin:this.forcedTimeMin,C=void 0===this.forcedTimeMax?this.dataTimeMax:this.forcedTimeMax,w=r.scaleUtc().range([d,b-p]).domain([k,C]);if(u){w.nice();x.append("g").call((function(t){return t.attr("font-family","sans-serif").attr("font-size",10).attr("fill","none").attr("transform","translate(0,".concat(v,")")).call(r.axisTop(w).ticks(b/60).tickSizeOuter(0))}))}if(c){w.nice();x.append("g").call((function(t){return t.attr("font-family","sans-serif").attr("font-size",10).attr("fill","none").attr("transform","translate(0,".concat(y-m,")")).call(r.axisBottom(w).ticks(b/60).tickSizeOuter(0))}))}var F=void 0===this.forcedValueMin?this.dataValueMin:this.forcedValueMin,M=void 0===this.forcedValueMax?this.dataValueMax:this.forcedValueMax,O=r.scaleLinear().domain([F,M]).range([y-m,v]);if(s&&!h){O.nice();x.append("g").call((function(t){return t.attr("transform","translate(".concat(d,",0)")).call(r.axisLeft(O).ticks(y/30).tickSizeOuter(0))}))}if(f){O.nice();x.append("g").call((function(t){return t.attr("transform","translate(".concat(b-p,",0)")).call(r.axisRight(O).ticks(y/30).tickSizeOuter(0))}))}if(h){O.nice();x.append("g").call((function(t){return t.attr("transform","translate(".concat(d,",0)")).call(r.axisLeft(O).ticks(y/30).tickSizeOuter(0)).call((function(t){s||t.select(".domain").remove()})).call((function(t){return t.selectAll(c?".tick:not(:first-of-type) line":".tick line").clone().attr("x2",b-d-p).attr("stroke","currentColor").attr("stroke-width",.3)}))}))}for(var A=n.length,S=function(t){var i=e[t],u=Object(o.a)(i),c=t<A?n[t]:l,s=c.interpolation?c.interpolation:"natural";if(c.fillColor&&"none"!==c.fillColor){var f=r.area().curve(Object(a.a)(s)).defined((function(t){return!isNaN(u(t))&&t.time>=k&&t.time<=C})).x((function(t){return w(t.time)})).y0((function(){return O(F)})).y1((function(t){return O(u(t))}));x.append("path").datum(i).attr("fill",c.fillColor).attr("d",f)}if(c.strokeColor&&c.strokeWidth&&c.strokeWidth>0&&"none"!==c.strokeColor){var h=r.line().curve(Object(a.a)(s)).defined((function(t){return!isNaN(u(t))&&t.time>=k&&t.time<=C})).x((function(t){return w(t.time)})).y((function(t){return O(u(t))}));x.append("path").datum(i).attr("stroke-width",c.strokeWidth).attr("stroke",c.strokeColor).attr("stroke-linejoin","round").attr("stroke-linecap","round").style("fill","none").attr("d",h)}},W=0;W<e.length;++W)S(W)}}},{key:"configuration",set:function(t){if(t&&null!=t&&t.length>0){var e=t.length,n=this.currentConfiguration.length;if(n>0){var r=Math.min(e,n);Math.max(e,n);for(var i=0;i<r;++i)this.currentConfiguration[i]=Object.assign(Object.assign({},this.currentConfiguration[i]),t[i]);if(e>r)for(var a=r;a<e;++a)this.currentConfiguration[a]=Object.assign({},t[a])}else this.currentConfiguration=_toConsumableArray(t)}},get:function(){return this.currentConfiguration}},{key:"min",set:function(t){this.forcedValueMin=t}},{key:"max",set:function(t){this.forcedValueMax=t}},{key:"from",set:function(t){this.forcedTimeMin=t}},{key:"till",set:function(t){this.forcedTimeMax=t}},{key:"data",set:function(t){var e,n=f,r=s,i=1/0,a=-1/0,u=!0,c=_createForOfIteratorHelper(t);try{for(c.s();!(e=c.n()).done;){var l=e.value,h=l.length;if(!(h<1)){u=!1,n>l[0].time&&(n=l[0].time),r<l[h-1].time&&(r=l[h-1].time);var d,p=Object(o.a)(l),v=_createForOfIteratorHelper(l);try{for(v.s();!(d=v.n()).done;){var m=p(d.value);isNaN(m)||(i>m&&(i=m),a<m&&(a=m))}}catch(g){v.e(g)}finally{v.f()}}}}catch(g){c.e(g)}finally{c.f()}this.currentDataEmpty=u,this.dataTimeMin=n,this.dataTimeMax=r,this.dataValueMin=i,this.dataValueMax=a,this.currentData=t},get:function(){return this.currentData}}]),t}();return t.\u0275fac=function(e){return new(e||t)(u.Nb(u.l))},t.\u0275cmp=u.Hb({type:t,selectors:[["mb-multiline"]],hostBindings:function(t,e){1&t&&u.bc("resize",(function(){return e.render()}),!1,u.uc)},inputs:{width:"width",height:"height",configuration:"configuration",timeAxis:"timeAxis",valueAxis:"valueAxis",min:"min",max:"max",from:"from",till:"till",data:"data"},features:[u.zb],ngContentSelectors:c,decls:1,vars:0,template:function(t,e){1&t&&(u.kc(),u.jc(0))},styles:[""],encapsulation:2,changeDetection:0}),t}()},Ik4K:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n("VphZ").format(",d");var r=function(t){for(var e=t.data.name?t.data.name:"???";t.parent&&null!=t.parent;)(t=t.parent).data.name&&(e=t.data.name+"/"+e);return e},i=function(t){return""+t.ancestors().map((function(t){return t.data.name})).reverse().join("\n")}},OWNR:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a})),n.d(e,"d",(function(){return o}));var r=function(t){return""},i=function(t){return"transparent"},a=function(t){return"black"},o=function(t){return"white"}},OviS:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n("VphZ"),i=n("rGib"),a=n("bc9u"),o=n("2wmS"),u=n("fXoL"),c=["*"],l={fillColor:void 0,strokeColor:"steelblue",strokeWidth:1,interpolation:"natural"},s=new Date(-864e13),f=new Date(864e13),h=function(){var t=function(){function t(e){_classCallCheck(this,t),this.elementRef=e,this.currentConfiguration=[],this.currentDataStacked=[],this.currentDataEmpty=!0,this.width=300,this.height=100,this.timeAxis=[],this.valueAxis=[]}return _createClass(t,[{key:"ngAfterViewInit",value:function(){var t=this;setTimeout((function(){return t.render()}),0)}},{key:"ngOnChanges",value:function(t){this.render()}},{key:"render",value:function(){var t=r.select(this.elementRef.nativeElement);t.select("svg").remove();var e=this.currentDataStacked;if(!(this.currentDataEmpty||!e||e.length<1)){var n=this.currentConfiguration,o=this.timeAxis.includes("top"),u=this.timeAxis.includes("bottom"),c=this.valueAxis.includes("left"),s=this.valueAxis.includes("right"),f=this.valueAxis.includes("grid"),h=c||f?50:o||u?50/3:0,d=s?50:o||u?50/3:0,p=o?18:c||s||f?6:0,v=u?18:c||s||f?6:0,m=Object(i.a)(this.elementRef,this.width,this.height,300,100),g=m[0],b=m[1],y=t.append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("width",g).attr("height",b).attr("viewBox","0 0 ".concat(g," ").concat(b)),x=void 0===this.forcedTimeMin?this.dataTimeMin:this.forcedTimeMin,k=void 0===this.forcedTimeMax?this.dataTimeMax:this.forcedTimeMax,C=r.scaleUtc().range([h,g-d]).domain([x,k]);if(o){C.nice();y.append("g").call((function(t){return t.attr("font-family","sans-serif").attr("font-size",10).attr("fill","none").attr("transform","translate(0,".concat(p,")")).call(r.axisTop(C).ticks(g/60).tickSizeOuter(0))}))}if(u){C.nice();y.append("g").call((function(t){return t.attr("font-family","sans-serif").attr("font-size",10).attr("fill","none").attr("transform","translate(0,".concat(b-v,")")).call(r.axisBottom(C).ticks(g/60).tickSizeOuter(0))}))}var w=void 0===this.forcedValueMin?0:this.forcedValueMin,F=void 0===this.forcedValueMax?this.dataValueMax:this.forcedValueMax,M=r.scaleLinear().domain([w,F]).range([b-v,p]);if(c&&!f){M.nice();y.append("g").call((function(t){return t.attr("transform","translate(".concat(h,",0)")).call(r.axisLeft(M).ticks(b/30).tickSizeOuter(0))}))}if(s){M.nice();y.append("g").call((function(t){return t.attr("transform","translate(".concat(g-d,",0)")).call(r.axisRight(M).ticks(b/30).tickSizeOuter(0))}))}if(f){M.nice();y.append("g").call((function(t){return t.attr("transform","translate(".concat(h,",0)")).call(r.axisLeft(M).ticks(b/30).tickSizeOuter(0)).call((function(t){c||t.select(".domain").remove()})).call((function(t){return t.selectAll(u?".tick:not(:first-of-type) line":".tick line").clone().attr("x2",g-h-d).attr("stroke","currentColor").attr("stroke-width",.3)}))}))}for(var O=n.length,A=0;A<e.length;++A){var S=e[A],W=A<O?n[A]:l,z=W.interpolation?W.interpolation:"natural";if(W.fillColor&&"none"!==W.fillColor){var T=r.area().curve(Object(a.a)(z)).defined((function(t){return t.time>=x&&t.time<=k})).x((function(t){return C(t.time)})).y0((function(t){return M(t.lower)})).y1((function(t){return M(t.upper)}));y.append("path").datum(S).attr("fill",W.fillColor).attr("d",T)}if(W.strokeColor&&W.strokeWidth&&W.strokeWidth>0&&"none"!==W.strokeColor){var j=r.line().curve(Object(a.a)(z)).defined((function(t){return t.time>=x&&t.time<=k})).x((function(t){return C(t.time)})).y((function(t){return M(t.upper)}));y.append("path").datum(S).attr("stroke-width",W.strokeWidth).attr("stroke",W.strokeColor).attr("stroke-linejoin","round").attr("stroke-linecap","round").style("fill","none").attr("d",j)}}}}},{key:"configuration",set:function(t){if(t&&null!=t&&t.length>0){var e=t.length,n=this.currentConfiguration.length;if(n>0){var r=Math.min(e,n);Math.max(e,n);for(var i=0;i<r;++i)this.currentConfiguration[i]=Object.assign(Object.assign({},this.currentConfiguration[i]),t[i]);if(e>r)for(var a=r;a<e;++a)this.currentConfiguration[a]=Object.assign({},t[a])}else this.currentConfiguration=_toConsumableArray(t)}},get:function(){return this.currentConfiguration}},{key:"min",set:function(t){this.forcedValueMin=t}},{key:"max",set:function(t){this.forcedValueMax=t}},{key:"from",set:function(t){this.forcedTimeMin=t}},{key:"till",set:function(t){this.forcedTimeMax=t}},{key:"data",set:function(t){var e,n=f,r=s,i=-1/0,a=!0,u=[],c=0,l=_createForOfIteratorHelper(t);try{for(l.s();!(e=l.n()).done;){var h=e.value;u.push([]);var d=h.length;d<1||(a=!1,c<d&&(c=d),n>h[0].time&&(n=h[0].time),r<h[d-1].time&&(r=h[d-1].time))}}catch(k){l.e(k)}finally{l.f()}for(var p=t.length,v=0;v<c;++v)for(var m=0,g=0;g<p;++g){var b=u[g],y=t[g];if(y.length>v){var x=Object(o.a)(y)(y[v]);isNaN(x)||(x+=m,b.push({time:y[v].time,lower:m,upper:x}),m=x,i<x&&(i=x))}}this.currentDataEmpty=a,this.dataTimeMin=n,this.dataTimeMax=r,this.dataValueMax=i,this.currentDataStacked=u}}]),t}();return t.\u0275fac=function(e){return new(e||t)(u.Nb(u.l))},t.\u0275cmp=u.Hb({type:t,selectors:[["mb-stackiline"]],hostBindings:function(t,e){1&t&&u.bc("resize",(function(){return e.render()}),!1,u.uc)},inputs:{width:"width",height:"height",configuration:"configuration",timeAxis:"timeAxis",valueAxis:"valueAxis",min:"min",max:"max",from:"from",till:"till",data:"data"},features:[u.zb],ngContentSelectors:c,decls:1,vars:0,template:function(t,e){1&t&&(u.kc(),u.jc(0))},styles:[""],encapsulation:2,changeDetection:0}),t}()},RpBn:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var r=function(t){return t.children?0:1},i=function(t){return 1},a=function(t){return t.value?t.value:0}},S1aJ:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r,i,a=n("fXoL"),o=n("BfXK"),u=((i=function(){function t(e,n){_classCallCheck(this,t),this.element=e,this.katexService=n,this.hasError=new a.o}return _createClass(t,[{key:"ngOnChanges",value:function(){try{this.katexService.render(this.mbKatex,this.element,this.options)}catch(t){this.hasError.emit(t)}}}]),t}()).\u0275fac=function(t){return new(t||i)(a.Nb(a.l),a.Nb(o.a))},i.\u0275dir=a.Ib({type:i,selectors:[["","mbKatex",""]],inputs:{mbKatex:"mbKatex",options:"options"},outputs:{hasError:"hasError"},features:[a.zb]}),i),c=((r=function(){function t(){_classCallCheck(this,t),this.hasError=new a.o}return _createClass(t,[{key:"outputError",value:function(t){this.hasError.emit(t)}}]),t}()).\u0275fac=function(t){return new(t||r)},r.\u0275cmp=a.Hb({type:r,selectors:[["mb-katex"]],inputs:{expression:"expression",options:"options"},outputs:{hasError:"hasError"},decls:1,vars:2,consts:[[3,"mbKatex","options","hasError"]],template:function(t,e){1&t&&(a.Tb(0,"span",0),a.bc("hasError",(function(t){return e.outputError(t)})),a.Sb()),2&t&&a.lc("mbKatex",e.expression)("options",e.options)},directives:[u],styles:[""]}),r)},UvBD:function(t,e,n){"use strict";n.d(e,"f",(function(){return r})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return c})),n.d(e,"g",(function(){return l}));var r=function(t){return 8},i=function(t){return 10},a=function(t){return 12},o=function(t){return 14},u=function(t){return 16},c=function(t){return 18},l=function(t){return t.depth<2?18:t.depth<3?16:t.depth<4?12:10}},Xf12:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){}},bc9u:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("VphZ");function i(t){switch(t.toLowerCase()){case"step":return r.curveStep;case"stepbefore":return r.curveStepBefore;case"stepafter":return r.curveStepAfter;case"natural":return r.curveNatural;case"basis":return r.curveBasis;case"catmullrom":return r.curveCatmullRom;case"cardinal":return r.curveCardinal;case"monotonex":return r.curveMonotoneX;case"monotoney":return r.curveMonotoneY;default:return r.curveLinear}}},gjKW:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("VphZ"),i=n("rGib"),a=n("fXoL"),o=["*"],u=function(){var t=function(){function t(e){_classCallCheck(this,t),this.elementRef=e,this.currentColors=[],this.width=64,this.height=24}return _createClass(t,[{key:"ngAfterViewInit",value:function(){var t=this;setTimeout((function(){return t.render()}),0)}},{key:"ngOnChanges",value:function(t){this.render()}},{key:"render",value:function(){var t=r.select(this.elementRef.nativeElement);t.select("svg").remove();var e=this.currentColors,n=e.length;if(!(n<1))for(var a=Object(i.a)(this.elementRef,this.width,this.height,64,24),o=a[0],u=a[1],c=o/n,l=t.append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("width",o).attr("height",u).attr("viewBox","0 0 ".concat(o," ").concat(u)),s=0;s<n;++s)l.append("rect").attr("x",c*s).attr("y","0").attr("width",c).attr("height",u).attr("fill",e[s])}},{key:"colors",set:function(t){t&&null!=t&&t.length>0&&(this.currentColors=t)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Nb(a.l))},t.\u0275cmp=a.Hb({type:t,selectors:[["mb-swatches"]],hostBindings:function(t,e){1&t&&a.bc("resize",(function(){return e.render()}),!1,a.uc)},inputs:{width:"width",height:"height",colors:"colors"},features:[a.zb],ngContentSelectors:o,decls:1,vars:0,template:function(t,e){1&t&&(a.kc(),a.jc(0))},styles:[""],encapsulation:2,changeDetection:0}),t}()},kfDn:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var r=function(t){return t.data.name?t.data.name:""},i=function(t){return t.data.value?t.data.value.toString():t.value?t.value.toString():""},a=function(t){return""}},mLdi:function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return u}));var r=function(t){return 0},i=function(t){return t.depth<2?1:t.depth<3?.6:t.depth<4?.3:.1},a=function(t){return t.depth<2?2:t.depth<3?1:t.depth<4?.5:.1},o=function(t){return t.depth<2?3:t.depth<3?1.5:t.depth<4?.7:.5},u=function(t){return t.depth<2?4:t.depth<3?2:t.depth<4?1:.5}},oK6x:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var r=n("VphZ"),i=n("rGib"),a=n("RpBn"),o=n("t9gN"),u=n("kfDn"),c=n("Ik4K"),l=n("Xf12"),s=n("uaKh"),f=n("u+s4"),h=n("UvBD"),d=n("fXoL"),p=["*"],v=2*Math.PI,m=180/Math.PI,g=function(){var t=function(){function t(e){_classCallCheck(this,t),this.elementRef=e,this.sumFunc=a.b,this.sort="asc",this.zoom=!1,this.transitionMsec=750,this.levels=0,this.labelFunc=u.a,this.labelFill="white",this.labelFontSizeFunc=h.g,this.tooltipFunc=c.b,this.tapFunc=l.a,this.fillFunc=s.g,this.fillOpacityFunc=f.b,this.diameter=300}return _createClass(t,[{key:"ngOnChanges",value:function(t){this.render()}},{key:"render",value:function(){var t=this,e=r.select(this.elementRef.nativeElement);e.select("svg").remove();var n=this.data;if(n&&n.children&&!(n.children.length<1)){var a,u,c=Object(i.a)(this.elementRef,this.diameter,this.diameter,300,300),l=Math.max(c[0],c[1]),s=l/2,f=e.append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("width",l).attr("height",l).attr("viewBox","0 0 ".concat(l," ").concat(l)).append("g").attr("transform","translate(".concat(s,",").concat(s,")")),h="asc"===this.sort?o.a:"desc"===this.sort?o.b:o.c,d=(a=n,u=r.hierarchy(a).sum(t.sumFunc),h!==o.c&&(u=u.sort((function(t,e){return h(t,e)}))),r.partition().size([v,u.height+1])(u));d.each((function(t){return t.current=t}));var p=(this.levels<1?d.height:this.levels)+1,g=l/(2*p),b=r.arc().startAngle((function(t){return t.x0})).endAngle((function(t){return t.x1})).padAngle((function(t){return Math.min((t.x1-t.x0)/2,.005)})).padRadius(1.5*g).innerRadius((function(t){return t.y0*g})).outerRadius((function(t){return Math.max(t.y0*g,t.y1*g-1)})),y=function(t){return t.y1<=p&&t.y0>=1&&t.x1>t.x0},x=function(t){return t.y1<=p&&t.y0>=1&&(t.y1-t.y0)*(t.x1-t.x0)>.05},k=function(t){var e=(t.x0+t.x1)/2*m;return"rotate(".concat(e-90,") translate(").concat((t.y0+t.y1)/2*g,",0) rotate(").concat(e<180?0:180,")")},C=function(e){if(t.tapFunc(e),t.zoom&&e.children){M.datum(e.parent||d),d.each((function(t){return t.target={x0:Math.max(0,Math.min(1,(t.x0-e.x0)/(e.x1-e.x0)))*v,x1:Math.max(0,Math.min(1,(t.x1-e.x0)/(e.x1-e.x0)))*v,y0:Math.max(0,t.y0-e.depth),y1:Math.max(0,t.y1-e.depth)}}));var n=f.transition().duration(t.transitionMsec);w.transition(n).tween("data",(function(t){var e=r.interpolate(t.current,t.target);return function(n){return t.current=e(n)}})).filter((function(t){return y(t.current)||y(t.target)})).attr("fill-opacity",(function(e){return y(e.target)?t.fillOpacityFunc(e,d.height):0})).attrTween("d",(function(t){return function(){return b(t.current)}})),F.filter((function(t){return y(t.current)||x(t.target)})).transition(n).attr("fill-opacity",(function(t){return+x(t.target)})).attrTween("transform",(function(t){return function(){return k(t.current)}}))}},w=f.append("g").selectAll("path").data(d.descendants().slice(1)).join("path").attr("fill",this.fillFunc).attr("fill-opacity",(function(e){return y(e.current)?t.fillOpacityFunc(e,d.height):0})).attr("d",(function(t){return b(t.current)})).on("click",C);w.append("title").text((function(e){return t.tooltipFunc(e)}));var F=f.append("g").attr("pointer-events","none").attr("text-anchor","middle").style("user-select","none").style("fill",this.labelFill).selectAll("text").data(d.descendants().slice(1)).join("text").attr("font-size",(function(e){return t.labelFontSizeFunc(e)})).attr("dy","0.35em").attr("fill-opacity",(function(t){return+x(t.current)})).attr("transform",(function(t){return k(t.current)})).text((function(e){return t.labelFunc(e)})),M=f.append("circle").datum(d).attr("r",g).attr("fill","none").attr("pointer-events","all").on("click",C)}}}]),t}();return t.\u0275fac=function(e){return new(e||t)(d.Nb(d.l))},t.\u0275cmp=d.Hb({type:t,selectors:[["mb-sunburst"]],hostBindings:function(t,e){1&t&&d.bc("resize",(function(){return e.render()}),!1,d.uc)},inputs:{sumFunc:"sumFunc",sort:"sort",zoom:"zoom",transitionMsec:"transitionMsec",levels:"levels",labelFunc:"labelFunc",labelFill:"labelFill",labelFontSizeFunc:"labelFontSizeFunc",tooltipFunc:"tooltipFunc",tapFunc:"tapFunc",fillFunc:"fillFunc",fillOpacityFunc:"fillOpacityFunc",diameter:"diameter",data:"data"},features:[d.zb],ngContentSelectors:p,decls:1,vars:0,template:function(t,e){1&t&&(d.kc(),d.jc(0))},styles:[""],encapsulation:2,changeDetection:0}),t}()},oaKP:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("VphZ"),i=n("rGib"),a=n("bc9u"),o=n("fXoL"),u=["*"],c=function(){var t=function(){function t(e){_classCallCheck(this,t),this.elementRef=e,this.currentConfiguration={fillColor:"steelblue",strokeColor:void 0,strokeWidth:1,interpolation:"linear"},this.width=160,this.height=24}return _createClass(t,[{key:"ngAfterViewInit",value:function(){var t=this;setTimeout((function(){return t.render()}),0)}},{key:"ngOnChanges",value:function(t){this.render()}},{key:"render",value:function(){var t=r.select(this.elementRef.nativeElement);t.select("svg").remove();var e=this.currentData;if(e&&!(e.length<1)){var n,o,u=this.currentConfiguration,c=Object(i.a)(this.elementRef,this.width,this.height,160,24),l=c[0],s=c[1],f=t.append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("width",l).attr("height",s).attr("viewBox","0 0 ".concat(l," ").concat(s)),h=r.scaleTime().range([0,l]).domain([e[0].time,e[e.length-1].time]);void 0!==e[0].close?(n=r.extent(e,(function(t){return t.close})),o=function(t){return t.close}):void 0!==e[0].price?(n=r.extent(e,(function(t){return t.price})),o=function(t){return t.price}):void 0!==e[0].bidPrice?(n=r.extent(e,(function(t){return t.bidPrice})),o=function(t){return t.bidPrice}):(n=r.extent(e,(function(t){return t.value})),o=function(t){return t.value});var d=u.interpolation?u.interpolation:"linear;",p=r.scaleLinear().domain(n).range([s,0]);if(f.datum(e),u.fillColor&&"none"!==u.fillColor){var v=n[0],m=r.area().curve(Object(a.a)(d)).defined((function(t){return!isNaN(o(t))})).x((function(t,e){return h(t.time)})).y0((function(t){return p(v)})).y1((function(t){return p(o(t))}));f.append("path").attr("fill",u.fillColor).attr("d",m)}if(u.strokeColor&&u.strokeWidth&&u.strokeWidth>0&&"none"!==u.strokeColor){var g=r.line().curve(Object(a.a)(d)).defined((function(t){return!isNaN(o(t))})).x((function(t,e){return h(t.time)})).y((function(t){return p(o(t))}));f.append("path").attr("stroke-width",u.strokeWidth).attr("stroke",u.strokeColor).attr("stroke-linejoin","round").attr("stroke-linecap","round").style("fill","none").attr("d",g)}}}},{key:"configuration",set:function(t){t&&null!=t&&(this.currentConfiguration=Object.assign(Object.assign({},this.currentConfiguration),t))},get:function(){return this.currentConfiguration}},{key:"data",set:function(t){this.currentData=t},get:function(){return this.currentData}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o.Nb(o.l))},t.\u0275cmp=o.Hb({type:t,selectors:[["mb-sparkline"]],hostBindings:function(t,e){1&t&&o.bc("resize",(function(){return e.render()}),!1,o.uc)},inputs:{width:"width",height:"height",configuration:"configuration",data:"data"},features:[o.zb],ngContentSelectors:u,decls:1,vars:0,template:function(t,e){1&t&&(o.kc(),o.jc(0))},styles:[""],encapsulation:2,changeDetection:0}),t}()},rGib:function(t,e,n){"use strict";function r(t,e,n,r,u){var c=r,l=u,s=t.nativeElement,f=getComputedStyle(s),h=i(f.width),d=h[0];if(d&&d>0)if(!0===h[1]){var p=a(d,h[2],s);p&&(c=p)}else c=d;else if((d=(h=i(e))[0])&&d>0)if(!0===h[1]){var v=a(d,h[2],s);v&&(c=v)}else c=d;if((d=(h=i(f.minWidth))[0])&&d>0)if(!0===h[1]){var m=a(d,h[2],s);m&&c<m&&(c=m)}else c<d&&(c=d);if((d=(h=i(f.maxWidth))[0])&&d>0)if(!0===h[1]){var g=a(d,h[2],s);g&&c>g&&(c=g)}else c>d&&(c=d);if((d=(h=i(f.height))[0])&&d>0)if(!0===h[1]){var b=o(d,h[2],s,c);b&&(l=b)}else l=d;else if((d=(h=i(n))[0])&&d>0)if(!0===h[1]){var y=o(d,h[2],s,c);y&&(l=y)}else l=d;if((d=(h=i(f.minHeight))[0])&&d>0)if(!0===h[1]){var x=o(d,h[2],s,c);x&&l<x&&(l=x)}else l<d&&(l=d);if((d=(h=i(f.maxHeight))[0])&&d>0)if(!0===h[1]){var k=o(d,h[2],s,c);k&&l>k&&(l=k)}else l>d&&(l=d);return[c,l]}function i(t){if(null==t)return[void 0,!1,""];if("number"!=typeof t){var e=t.match(/^(\d+(?:\.\d+)?)(px|%)(.*)$/);return null===e?[void 0,!1,""]:[parseFloat(e[1]),"%"===e[2],e[3]]}return[+t,!1,""]}function a(t,e,n){if(null!=e&&e.length>0){if("offsetParent"===e){var r=n.offsetParent;return r&&null!=r&&r.clientWidth>0?+r.clientWidth*t/100:void 0}if("parent"===e){var i=n.parentElement;return null!==i&&i.clientWidth&&i.clientWidth>0?i.clientWidth*t/100:void 0}var a=n.closest(e);return null!==a&&a.clientWidth&&a.clientWidth>0?a.clientWidth*t/100:void 0}var o=n.parentElement;if(null!==o&&o.clientWidth&&o.clientWidth>0)return o.clientWidth*t/100}function o(t,e,n,r){if(null!=e&&e.length>0){if("width"===e)return r*t/100;if("offsetParent"===e){var i=n.offsetParent;return i&&null!=i&&i.clientHeight>0?+i.clientHeight*t/100:void 0}if("parent"===e){var a=n.parentElement;return null!==a&&a.clientHeight&&a.clientHeight>0?a.clientHeight*t/100:void 0}var o=n.closest(e);return null!==o&&o.clientHeight&&o.clientHeight>0?o.clientHeight*t/100:void 0}var u=n.parentElement;if(null!==u&&u.clientHeight&&u.clientHeight>0)return u.clientHeight*t/100}n.d(e,"a",(function(){return r}))},t9gN:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}));var r=function(t,e){return 0},i=function(t,e){return(e&&e.value?e.value:0)-(t&&t.value?t.value:0)},a=function(t,e){return(t&&t.value?t.value:0)-(e&&e.value?e.value:0)}},"u+s4":function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a}));var r=function(t,e){return 0},i=function(t,e){return 1},a=function(t,e){return 1-(t.depth-1)/(1.9*e)}},uaKh:function(t,e,n){"use strict";n.d(e,"n",(function(){return i})),n.d(e,"k",(function(){return o})),n.d(e,"l",(function(){return u})),n.d(e,"M",(function(){return c})),n.d(e,"N",(function(){return l})),n.d(e,"G",(function(){return s})),n.d(e,"H",(function(){return f})),n.d(e,"e",(function(){return h})),n.d(e,"f",(function(){return d})),n.d(e,"A",(function(){return p})),n.d(e,"B",(function(){return v})),n.d(e,"q",(function(){return m})),n.d(e,"r",(function(){return g})),n.d(e,"u",(function(){return b})),n.d(e,"v",(function(){return y})),n.d(e,"m",(function(){return x})),n.d(e,"g",(function(){return C})),n.d(e,"j",(function(){return w})),n.d(e,"I",(function(){return F})),n.d(e,"L",(function(){return M})),n.d(e,"C",(function(){return O})),n.d(e,"F",(function(){return A})),n.d(e,"a",(function(){return S})),n.d(e,"d",(function(){return W})),n.d(e,"w",(function(){return z})),n.d(e,"z",(function(){return T})),n.d(e,"h",(function(){return j})),n.d(e,"i",(function(){return R})),n.d(e,"J",(function(){return _})),n.d(e,"K",(function(){return H})),n.d(e,"D",(function(){return P})),n.d(e,"E",(function(){return V})),n.d(e,"b",(function(){return B})),n.d(e,"c",(function(){return D})),n.d(e,"x",(function(){return E})),n.d(e,"y",(function(){return N})),n.d(e,"o",(function(){return I})),n.d(e,"p",(function(){return L})),n.d(e,"s",(function(){return K})),n.d(e,"t",(function(){return G}));var r=n("VphZ");Math;var i=function(t,e,n,i,o){var u=arguments.length>5&&void 0!==arguments[5]&&arguments[5],c=arguments.length>6&&void 0!==arguments[6]&&arguments[6],l=arguments.length>7&&void 0!==arguments[7]&&arguments[7];return a(t,e,n,(function(t){return r.interpolateHslLong(i,o)(t)}),u,c,l)},a=function(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],u=arguments.length>6&&void 0!==arguments[6]&&arguments[6],c=((t.value?t.value:t.data.value?t.data.value:0)-e)/(n===e?1:n-e),l=r.hsl(i(a?1-c:c));return o?l=l.brighter():u==u&&(l=l.darker()),l.hex()},o=function(t,e,n){return a(t,e,n,r.interpolateCool,!1,!1,!1)},u=function(t,e,n){return a(t,e,n,r.interpolateCool,!0,!1,!1)},c=function(t,e,n){return a(t,e,n,r.interpolateWarm,!1,!1,!1)},l=function(t,e,n){return a(t,e,n,r.interpolateWarm,!0,!1,!0)},s=function(t,e,n){return a(t,e,n,r.interpolateViridis,!1,!1,!1)},f=function(t,e,n){return a(t,e,n,r.interpolateViridis,!0,!1,!0)},h=function(t,e,n){return a(t,e,n,r.interpolateBlues,!1,!1,!0)},d=function(t,e,n){return a(t,e,n,r.interpolateBlues,!0,!1,!0)},p=function(t,e,n){return a(t,e,n,r.interpolateRainbow,!1,!1,!0)},v=function(t,e,n){return a(t,e,n,r.interpolateRainbow,!0,!1,!0)},m=function(t,e,n){return a(t,e,n,r.interpolateGreens,!1,!1,!0)},g=function(t,e,n){return a(t,e,n,r.interpolateGreens,!0,!1,!0)},b=function(t,e,n){return a(t,e,n,r.interpolateGreys,!1,!1,!0)},y=function(t,e,n){return a(t,e,n,r.interpolateGreys,!0,!1,!0)},x=function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],u=!(arguments.length>6&&void 0!==arguments[6])||arguments[6];return k(t,(function(t){return r.interpolateHslLong(e,n)(t)}),i,a,o,u)},k=function(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],u=t;u.depth>1&&null!=u.parent;)u=u.parent;for(var c=u;null!=c.parent;)c=c.parent;var l=c.children?c.children:[],s=l.indexOf(u),f=s?s/l.length:0,h=r.hsl(e(n?1-f:f));if(i?h=h.brighter():a==a&&(h=h.darker()),o){var d=t.depth;h.l+=1===d?0:.1*d}return h.hex()},C=function(t){return k(t,r.interpolateCool)},w=function(t){return k(t,r.interpolateCool,!0)},F=function(t){return k(t,r.interpolateWarm)},M=function(t){return k(t,r.interpolateWarm,!0,!1,!0)},O=function(t){return k(t,r.interpolateViridis)},A=function(t){return k(t,r.interpolateViridis,!0,!1,!0)},S=function(t){return k(t,r.interpolateBlues,!1,!1,!0)},W=function(t){return k(t,r.interpolateBlues,!0,!1,!0)},z=function(t){return k(t,r.interpolateRainbow)},T=function(t){return k(t,r.interpolateRainbow,!0)},j=function(t){return k(t,r.interpolateCool,!1,!1,!1,!1)},R=function(t){return k(t,r.interpolateCool,!0,!1,!1,!1)},_=function(t){return k(t,r.interpolateWarm,!1,!1,!1,!1)},H=function(t){return k(t,r.interpolateWarm,!0,!1,!0,!1)},P=function(t){return k(t,r.interpolateViridis,!1,!1,!1,!1)},V=function(t){return k(t,r.interpolateViridis,!0,!1,!0,!1)},B=function(t){return k(t,r.interpolateBlues,!1,!1,!0,!1)},D=function(t){return k(t,r.interpolateBlues,!0,!1,!0,!1)},E=function(t){return k(t,r.interpolateRainbow,!1,!1,!0,!1)},N=function(t){return k(t,r.interpolateRainbow,!0,!1,!0,!1)},I=function(t){return k(t,r.interpolateGreens,!1,!1,!0,!1)},L=function(t){return k(t,r.interpolateGreens,!0,!1,!0,!1)},K=function(t){return k(t,r.interpolateGreys,!1,!1,!0,!1)},G=function(t){return k(t,r.interpolateGreys,!0,!1,!0,!1)}}}]);