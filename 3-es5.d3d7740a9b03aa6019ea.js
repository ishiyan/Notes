function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _createForOfIteratorHelper(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){c=!0,a=t},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw a}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"2wmS":function(t,e,n){"use strict";function r(t){if(t.length>0){if(void 0!==t[0].close)return function(t){return t.close};if(void 0!==t[0].price)return function(t){return t.price};if(void 0!==t[0].bidPrice)return function(t){return t.bidPrice}}return function(t){return t.value}}n.d(e,"a",(function(){return r}))},"3GQF":function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("fXoL"),i=n("kmnG"),a=n("d3UM"),o=n("gjKW"),c=n("ofXK"),u=n("FKr1");function s(t,e){if(1&t&&(r.Tb(0,"mat-option",4),r.Ob(1,"mb-swatches",2),r.Sb()),2&t){var n=e.$implicit,i=r.fc();r.lc("value",n),r.Bb(1),r.lc("width",96)("height",i.optionHeightPixels)("colors",n)}}var l=function(){var t=function(){function t(){_classCallCheck(this,t),this.label="Select colors",this.selectionChange=new r.o,this.optionHeightPixels=32,this.triggerHeightPixels=24,this.optionWidthPixels=96,this.triggerWidthPixels=72,this.selectWidthPixels=20+this.triggerWidthPixels,this.palettes=[],this.selectedPalette=[]}return _createClass(t,[{key:"selectionChanged",value:function(t){this.selectionChange.emit(t.value)}},{key:"computeWidthStyle",value:function(){return{width:this.selectWidthPixels+"px"}}},{key:"colors",set:function(t){if(t&&t.length>0){this.palettes=t,this.selectedPalette=this.palettes[0];var e=0;for(var n in this.palettes)e<n.length&&(e=n.length);this.optionWidthPixels=e*this.optionHeightPixels,this.triggerWidthPixels=e*this.triggerHeightPixels,this.selectWidthPixels=20+this.triggerWidthPixels}}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Hb({type:t,selectors:[["mb-swatches-select"]],inputs:{colors:"colors",label:"label"},outputs:{selectionChange:"selectionChange"},decls:7,vars:6,consts:[[2,"width","92px"],[3,"value","valueChange","selectionChange"],[3,"width","height","colors"],["style","padding: 18px 0px 0px 30px",3,"value",4,"ngFor","ngForOf"],[2,"padding","18px 0px 0px 30px",3,"value"]],template:function(t,e){1&t&&(r.Tb(0,"mat-form-field",0),r.Tb(1,"mat-label"),r.Cc(2),r.Sb(),r.Tb(3,"mat-select",1),r.bc("valueChange",(function(t){return e.selectedPalette=t}))("selectionChange",(function(t){return e.selectionChanged(t)})),r.Tb(4,"mat-select-trigger"),r.Ob(5,"mb-swatches",2),r.Sb(),r.Bc(6,s,2,4,"mat-option",3),r.Sb(),r.Sb()),2&t&&(r.Bb(2),r.Dc(e.label),r.Bb(1),r.lc("value",e.selectedPalette),r.Bb(2),r.lc("width",72)("height",e.triggerHeightPixels)("colors",e.selectedPalette),r.Bb(1),r.lc("ngForOf",e.palettes))},directives:[i.b,i.f,a.a,a.c,o.a,c.l,u.n],styles:[""],encapsulation:2}),t}()},"7IeN":function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var r=n("VphZ"),i=n("rGib"),a=n("RpBn"),o=n("t9gN"),c=n("kfDn"),u=n("Ik4K"),s=n("Xf12"),l=n("uaKh"),f=n("OWNR"),h=n("mLdi"),d=n("u+s4"),p=n("UvBD"),v=n("fXoL"),m=["*"],g=function(){var t=function(){function t(e){_classCallCheck(this,t),this.elementRef=e,this.sumFunc=a.b,this.sort="asc",this.zoom=!0,this.transitionMsec=750,this.labelFunc=c.b,this.labelMinRadius=1,this.labelFill="white",this.labelShadow="0px 0px 8px #000000",this.labelFontSizeFunc=p.g,this.tooltipFunc=u.a,this.tapFunc=s.a,this.fillFunc=l.a,this.fillOpacityFunc=d.b,this.strokeFunc=f.a,this.strokeWidthFunc=h.a,this.padding=3,this.diameter=300,this.flat=!1,this.rootCircle=!1}return _createClass(t,[{key:"ngOnChanges",value:function(t){this.render()}},{key:"render",value:function(){var t,e=this,n=r.select(this.elementRef.nativeElement);n.select("svg").remove();var a=this.data;if(a&&a.children&&!(a.children.length<1)){var c=Object(i.a)(this.elementRef,this.diameter,this.diameter,300,300),u=Math.max(c[0],c[1]),s=u/2,l=n.append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("width",u).attr("height",u).attr("viewBox","-".concat(s," -").concat(s," ").concat(u," ").concat(u)).on("click",(function(){return O(d)})),f="asc"===this.sort?o.a:"desc"===this.sort?o.b:o.c,h=function(t){var n=r.hierarchy(t).sum(e.sumFunc);return f!==o.c&&(n=n.sort((function(t,e){return f(t,e)}))),r.pack().size([u,u]).padding(e.padding)(n)},d=h(a);if(this.flat){var p,v={children:[]},m=_createForOfIteratorHelper(d.leaves());try{for(m.s();!(p=m.n()).done;){var g=p.value;null===(t=v.children)||void 0===t||t.push(g.data)}}catch(A){m.e(A)}finally{m.f()}d=h(v)}var b=d,y=l.append("g").selectAll("circle").data(this.rootCircle?d.descendants():d.descendants().slice(1)).join("circle").attr("fill",(function(t){return e.fillFunc(t)})).attr("fill-opacity",(function(t){return e.fillOpacityFunc(t,d.height)})).attr("stroke",(function(t){return e.strokeFunc(t)})).attr("stroke-width",(function(t){return e.strokeWidthFunc(t)})).on("click",(function(t){r.event.stopPropagation(),w(t)})),k=function(t){return t.parent===b&&t.r>=e.labelMinRadius?1:0},x=l.append("g").style("fill",this.labelFill).style("text-shadow",this.labelShadow).style("user-select","none").attr("pointer-events","none").attr("text-anchor","middle").selectAll("text").data(d.descendants()).enter().append("text").style("fill-opacity",k).style("font-size",(function(t){return e.labelFontSizeFunc(t)}));x.selectAll("tspan").data((function(t){return e.labelFunc(t).split(/\s+/g)})).join("tspan").attr("x",0).attr("y",(function(t,e,n){return e-n.length/2+.8+"em"})).text((function(t){return t}));var C,w=function(t){e.tapFunc(t),e.zoom&&!e.flat&&t.children&&b!==t&&O(t)},M=function(t){C=t;var n=u/t[2];x.attr("transform",(function(r){return"translate(".concat((r.x-t[0])*n,",").concat((r.y-t[1])*n+e.labelFontSizeFunc(r)/4,")")})),y.attr("transform",(function(e){return"translate(".concat((e.x-t[0])*n,",").concat((e.y-t[1])*n,")")})),y.attr("r",(function(t){return t.r*n}))},O=function(t){b=t;var n=l.transition().duration(e.transitionMsec).tween("zoom",(function(){var t=r.interpolateZoom(C,[b.x,b.y,2*b.r]);return function(e){return M(t(e))}}));x.transition(n).style("fill-opacity",k)};y.append("title").text((function(t){return e.tooltipFunc(t)})),M([d.x,d.y,2*d.r])}}}]),t}();return t.\u0275fac=function(e){return new(e||t)(v.Nb(v.l))},t.\u0275cmp=v.Hb({type:t,selectors:[["mb-circlepack"]],hostBindings:function(t,e){1&t&&v.bc("resize",(function(){return e.render()}),!1,v.uc)},inputs:{sumFunc:"sumFunc",sort:"sort",zoom:"zoom",transitionMsec:"transitionMsec",labelFunc:"labelFunc",labelMinRadius:"labelMinRadius",labelFill:"labelFill",labelShadow:"labelShadow",labelFontSizeFunc:"labelFontSizeFunc",tooltipFunc:"tooltipFunc",tapFunc:"tapFunc",fillFunc:"fillFunc",fillOpacityFunc:"fillOpacityFunc",strokeFunc:"strokeFunc",strokeWidthFunc:"strokeWidthFunc",padding:"padding",diameter:"diameter",data:"data",flat:"flat",rootCircle:"rootCircle"},features:[v.zb],ngContentSelectors:m,decls:1,vars:0,template:function(t,e){1&t&&(v.kc(),v.jc(0))},styles:[""],encapsulation:2,changeDetection:0}),t}()},FKCY:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n("VphZ"),i=n("rGib"),a=n("bc9u"),o=n("2wmS"),c=n("fXoL"),u=["*"],s={fillColor:void 0,strokeColor:"steelblue",strokeWidth:1,interpolation:"natural"},l=new Date(-864e13),f=new Date(864e13),h=function(){var t=function(){function t(e){_classCallCheck(this,t),this.elementRef=e,this.currentConfiguration=[],this.currentData=[],this.currentDataEmpty=!0,this.width=300,this.height=100,this.timeAxis=[],this.valueAxis=[]}return _createClass(t,[{key:"ngAfterViewInit",value:function(){var t=this;setTimeout((function(){return t.render()}),0)}},{key:"ngOnChanges",value:function(t){this.render()}},{key:"render",value:function(){var t=r.select(this.elementRef.nativeElement);t.select("svg").remove();var e=this.currentData;if(!(this.currentDataEmpty||!e||e.length<1)){var n=this.currentConfiguration,c=this.timeAxis.includes("top"),u=this.timeAxis.includes("bottom"),l=this.valueAxis.includes("left"),f=this.valueAxis.includes("right"),h=this.valueAxis.includes("grid"),d=l||h?50:c||u?50/3:0,p=f?50:c||u?50/3:0,v=c?18:l||f||h?6:0,m=u?18:l||f||h?6:0,g=Object(i.a)(this.elementRef,this.width,this.height,300,100),b=g[0],y=g[1],k=t.append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("width",b).attr("height",y).attr("viewBox","0 0 ".concat(b," ").concat(y)),x=void 0===this.forcedTimeMin?this.dataTimeMin:this.forcedTimeMin,C=void 0===this.forcedTimeMax?this.dataTimeMax:this.forcedTimeMax,w=r.scaleUtc().range([d,b-p]).domain([x,C]);if(c){w.nice();k.append("g").call((function(t){return t.attr("font-family","sans-serif").attr("font-size",10).attr("fill","none").attr("transform","translate(0,".concat(v,")")).call(r.axisTop(w).ticks(b/60).tickSizeOuter(0))}))}if(u){w.nice();k.append("g").call((function(t){return t.attr("font-family","sans-serif").attr("font-size",10).attr("fill","none").attr("transform","translate(0,".concat(y-m,")")).call(r.axisBottom(w).ticks(b/60).tickSizeOuter(0))}))}var M=void 0===this.forcedValueMin?this.dataValueMin:this.forcedValueMin,O=void 0===this.forcedValueMax?this.dataValueMax:this.forcedValueMax,A=r.scaleLinear().domain([M,O]).range([y-m,v]);if(l&&!h){A.nice();k.append("g").call((function(t){return t.attr("transform","translate(".concat(d,",0)")).call(r.axisLeft(A).ticks(y/30).tickSizeOuter(0))}))}if(f){A.nice();k.append("g").call((function(t){return t.attr("transform","translate(".concat(b-p,",0)")).call(r.axisRight(A).ticks(y/30).tickSizeOuter(0))}))}if(h){A.nice();k.append("g").call((function(t){return t.attr("transform","translate(".concat(d,",0)")).call(r.axisLeft(A).ticks(y/30).tickSizeOuter(0)).call((function(t){l||t.select(".domain").remove()})).call((function(t){return t.selectAll(u?".tick:not(:first-of-type) line":".tick line").clone().attr("x2",b-d-p).attr("stroke","currentColor").attr("stroke-width",.3)}))}))}for(var F=n.length,S=function(t){var i=e[t],c=Object(o.a)(i),u=t<F?n[t]:s,l=u.interpolation?u.interpolation:"natural";if(u.fillColor&&"none"!==u.fillColor){var f=r.area().curve(Object(a.a)(l)).defined((function(t){return!isNaN(c(t))&&t.time>=x&&t.time<=C})).x((function(t){return w(t.time)})).y0((function(){return A(M)})).y1((function(t){return A(c(t))}));k.append("path").datum(i).attr("fill",u.fillColor).attr("d",f)}if(u.strokeColor&&u.strokeWidth&&u.strokeWidth>0&&"none"!==u.strokeColor){var h=r.line().curve(Object(a.a)(l)).defined((function(t){return!isNaN(c(t))&&t.time>=x&&t.time<=C})).x((function(t){return w(t.time)})).y((function(t){return A(c(t))}));k.append("path").datum(i).attr("stroke-width",u.strokeWidth).attr("stroke",u.strokeColor).attr("stroke-linejoin","round").attr("stroke-linecap","round").style("fill","none").attr("d",h)}},T=0;T<e.length;++T)S(T)}}},{key:"configuration",set:function(t){if(t&&null!=t&&t.length>0){var e=t.length,n=this.currentConfiguration.length;if(n>0){var r=Math.min(e,n);Math.max(e,n);for(var i=0;i<r;++i)this.currentConfiguration[i]=Object.assign(Object.assign({},this.currentConfiguration[i]),t[i]);if(e>r)for(var a=r;a<e;++a)this.currentConfiguration[a]=Object.assign({},t[a])}else this.currentConfiguration=_toConsumableArray(t)}},get:function(){return this.currentConfiguration}},{key:"min",set:function(t){this.forcedValueMin=t}},{key:"max",set:function(t){this.forcedValueMax=t}},{key:"from",set:function(t){this.forcedTimeMin=t}},{key:"till",set:function(t){this.forcedTimeMax=t}},{key:"data",set:function(t){var e,n=f,r=l,i=1/0,a=-1/0,c=!0,u=_createForOfIteratorHelper(t);try{for(u.s();!(e=u.n()).done;){var s=e.value,h=s.length;if(!(h<1)){c=!1,n>s[0].time&&(n=s[0].time),r<s[h-1].time&&(r=s[h-1].time);var d,p=Object(o.a)(s),v=_createForOfIteratorHelper(s);try{for(v.s();!(d=v.n()).done;){var m=p(d.value);isNaN(m)||(i>m&&(i=m),a<m&&(a=m))}}catch(g){v.e(g)}finally{v.f()}}}}catch(g){u.e(g)}finally{u.f()}this.currentDataEmpty=c,this.dataTimeMin=n,this.dataTimeMax=r,this.dataValueMin=i,this.dataValueMax=a,this.currentData=t},get:function(){return this.currentData}}]),t}();return t.\u0275fac=function(e){return new(e||t)(c.Nb(c.l))},t.\u0275cmp=c.Hb({type:t,selectors:[["mb-multiline"]],hostBindings:function(t,e){1&t&&c.bc("resize",(function(){return e.render()}),!1,c.uc)},inputs:{width:"width",height:"height",configuration:"configuration",timeAxis:"timeAxis",valueAxis:"valueAxis",min:"min",max:"max",from:"from",till:"till",data:"data"},features:[c.zb],ngContentSelectors:u,decls:1,vars:0,template:function(t,e){1&t&&(c.kc(),c.jc(0))},styles:[""],encapsulation:2,changeDetection:0}),t}()},Ik4K:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n("VphZ").format(",d");var r=function(t){return""+t.ancestors().map((function(t){return t.data.name})).reverse().join("\n")}},OWNR:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i}));var r=function(t){return""},i=function(t){return"black"}},OviS:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n("VphZ"),i=n("rGib"),a=n("bc9u"),o=n("2wmS"),c=n("fXoL"),u=["*"],s={fillColor:void 0,strokeColor:"steelblue",strokeWidth:1,interpolation:"natural"},l=new Date(-864e13),f=new Date(864e13),h=function(){var t=function(){function t(e){_classCallCheck(this,t),this.elementRef=e,this.currentConfiguration=[],this.currentDataStacked=[],this.currentDataEmpty=!0,this.width=300,this.height=100,this.timeAxis=[],this.valueAxis=[]}return _createClass(t,[{key:"ngAfterViewInit",value:function(){var t=this;setTimeout((function(){return t.render()}),0)}},{key:"ngOnChanges",value:function(t){this.render()}},{key:"render",value:function(){var t=r.select(this.elementRef.nativeElement);t.select("svg").remove();var e=this.currentDataStacked;if(!(this.currentDataEmpty||!e||e.length<1)){var n=this.currentConfiguration,o=this.timeAxis.includes("top"),c=this.timeAxis.includes("bottom"),u=this.valueAxis.includes("left"),l=this.valueAxis.includes("right"),f=this.valueAxis.includes("grid"),h=u||f?50:o||c?50/3:0,d=l?50:o||c?50/3:0,p=o?18:u||l||f?6:0,v=c?18:u||l||f?6:0,m=Object(i.a)(this.elementRef,this.width,this.height,300,100),g=m[0],b=m[1],y=t.append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("width",g).attr("height",b).attr("viewBox","0 0 ".concat(g," ").concat(b)),k=void 0===this.forcedTimeMin?this.dataTimeMin:this.forcedTimeMin,x=void 0===this.forcedTimeMax?this.dataTimeMax:this.forcedTimeMax,C=r.scaleUtc().range([h,g-d]).domain([k,x]);if(o){C.nice();y.append("g").call((function(t){return t.attr("font-family","sans-serif").attr("font-size",10).attr("fill","none").attr("transform","translate(0,".concat(p,")")).call(r.axisTop(C).ticks(g/60).tickSizeOuter(0))}))}if(c){C.nice();y.append("g").call((function(t){return t.attr("font-family","sans-serif").attr("font-size",10).attr("fill","none").attr("transform","translate(0,".concat(b-v,")")).call(r.axisBottom(C).ticks(g/60).tickSizeOuter(0))}))}var w=void 0===this.forcedValueMin?0:this.forcedValueMin,M=void 0===this.forcedValueMax?this.dataValueMax:this.forcedValueMax,O=r.scaleLinear().domain([w,M]).range([b-v,p]);if(u&&!f){O.nice();y.append("g").call((function(t){return t.attr("transform","translate(".concat(h,",0)")).call(r.axisLeft(O).ticks(b/30).tickSizeOuter(0))}))}if(l){O.nice();y.append("g").call((function(t){return t.attr("transform","translate(".concat(g-d,",0)")).call(r.axisRight(O).ticks(b/30).tickSizeOuter(0))}))}if(f){O.nice();y.append("g").call((function(t){return t.attr("transform","translate(".concat(h,",0)")).call(r.axisLeft(O).ticks(b/30).tickSizeOuter(0)).call((function(t){u||t.select(".domain").remove()})).call((function(t){return t.selectAll(c?".tick:not(:first-of-type) line":".tick line").clone().attr("x2",g-h-d).attr("stroke","currentColor").attr("stroke-width",.3)}))}))}for(var A=n.length,F=0;F<e.length;++F){var S=e[F],T=F<A?n[F]:s,W=T.interpolation?T.interpolation:"natural";if(T.fillColor&&"none"!==T.fillColor){var _=r.area().curve(Object(a.a)(W)).defined((function(t){return t.time>=k&&t.time<=x})).x((function(t){return C(t.time)})).y0((function(t){return O(t.lower)})).y1((function(t){return O(t.upper)}));y.append("path").datum(S).attr("fill",T.fillColor).attr("d",_)}if(T.strokeColor&&T.strokeWidth&&T.strokeWidth>0&&"none"!==T.strokeColor){var j=r.line().curve(Object(a.a)(W)).defined((function(t){return t.time>=k&&t.time<=x})).x((function(t){return C(t.time)})).y((function(t){return O(t.upper)}));y.append("path").datum(S).attr("stroke-width",T.strokeWidth).attr("stroke",T.strokeColor).attr("stroke-linejoin","round").attr("stroke-linecap","round").style("fill","none").attr("d",j)}}}}},{key:"configuration",set:function(t){if(t&&null!=t&&t.length>0){var e=t.length,n=this.currentConfiguration.length;if(n>0){var r=Math.min(e,n);Math.max(e,n);for(var i=0;i<r;++i)this.currentConfiguration[i]=Object.assign(Object.assign({},this.currentConfiguration[i]),t[i]);if(e>r)for(var a=r;a<e;++a)this.currentConfiguration[a]=Object.assign({},t[a])}else this.currentConfiguration=_toConsumableArray(t)}},get:function(){return this.currentConfiguration}},{key:"min",set:function(t){this.forcedValueMin=t}},{key:"max",set:function(t){this.forcedValueMax=t}},{key:"from",set:function(t){this.forcedTimeMin=t}},{key:"till",set:function(t){this.forcedTimeMax=t}},{key:"data",set:function(t){var e,n=f,r=l,i=-1/0,a=!0,c=[],u=0,s=_createForOfIteratorHelper(t);try{for(s.s();!(e=s.n()).done;){var h=e.value;c.push([]);var d=h.length;d<1||(a=!1,u<d&&(u=d),n>h[0].time&&(n=h[0].time),r<h[d-1].time&&(r=h[d-1].time))}}catch(x){s.e(x)}finally{s.f()}for(var p=t.length,v=0;v<u;++v)for(var m=0,g=0;g<p;++g){var b=c[g],y=t[g];if(y.length>v){var k=Object(o.a)(y)(y[v]);isNaN(k)||(k+=m,b.push({time:y[v].time,lower:m,upper:k}),m=k,i<k&&(i=k))}}this.currentDataEmpty=a,this.dataTimeMin=n,this.dataTimeMax=r,this.dataValueMax=i,this.currentDataStacked=c}}]),t}();return t.\u0275fac=function(e){return new(e||t)(c.Nb(c.l))},t.\u0275cmp=c.Hb({type:t,selectors:[["mb-stackiline"]],hostBindings:function(t,e){1&t&&c.bc("resize",(function(){return e.render()}),!1,c.uc)},inputs:{width:"width",height:"height",configuration:"configuration",timeAxis:"timeAxis",valueAxis:"valueAxis",min:"min",max:"max",from:"from",till:"till",data:"data"},features:[c.zb],ngContentSelectors:u,decls:1,vars:0,template:function(t,e){1&t&&(c.kc(),c.jc(0))},styles:[""],encapsulation:2,changeDetection:0}),t}()},RpBn:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var r=function(t){return t.children?0:1},i=function(t){return 1},a=function(t){return t.value?t.value:0}},S1aJ:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r,i,a=n("fXoL"),o=n("BfXK"),c=((i=function(){function t(e,n){_classCallCheck(this,t),this.element=e,this.katexService=n,this.hasError=new a.o}return _createClass(t,[{key:"ngOnChanges",value:function(){try{this.katexService.render(this.mbKatex,this.element,this.options)}catch(t){this.hasError.emit(t)}}}]),t}()).\u0275fac=function(t){return new(t||i)(a.Nb(a.l),a.Nb(o.a))},i.\u0275dir=a.Ib({type:i,selectors:[["","mbKatex",""]],inputs:{mbKatex:"mbKatex",options:"options"},outputs:{hasError:"hasError"},features:[a.zb]}),i),u=((r=function(){function t(){_classCallCheck(this,t),this.hasError=new a.o}return _createClass(t,[{key:"outputError",value:function(t){this.hasError.emit(t)}}]),t}()).\u0275fac=function(t){return new(t||r)},r.\u0275cmp=a.Hb({type:r,selectors:[["mb-katex"]],inputs:{expression:"expression",options:"options"},outputs:{hasError:"hasError"},decls:1,vars:2,consts:[[3,"mbKatex","options","hasError"]],template:function(t,e){1&t&&(a.Tb(0,"span",0),a.bc("hasError",(function(t){return e.outputError(t)})),a.Sb()),2&t&&a.lc("mbKatex",e.expression)("options",e.options)},directives:[c],styles:[""]}),r)},UvBD:function(t,e,n){"use strict";n.d(e,"f",(function(){return r})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return u})),n.d(e,"g",(function(){return s}));var r=function(t){return 8},i=function(t){return 10},a=function(t){return 12},o=function(t){return 14},c=function(t){return 16},u=function(t){return 18},s=function(t){return t.depth<2?18:t.depth<3?16:t.depth<4?12:10}},Xf12:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){}},bc9u:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("VphZ");function i(t){switch(t.toLowerCase()){case"step":return r.curveStep;case"stepbefore":return r.curveStepBefore;case"stepafter":return r.curveStepAfter;case"natural":return r.curveNatural;case"basis":return r.curveBasis;case"catmullrom":return r.curveCatmullRom;case"cardinal":return r.curveCardinal;case"monotonex":return r.curveMonotoneX;case"monotoney":return r.curveMonotoneY;default:return r.curveLinear}}},gjKW:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("VphZ"),i=n("rGib"),a=n("fXoL"),o=["*"],c=function(){var t=function(){function t(e){_classCallCheck(this,t),this.elementRef=e,this.currentColors=[],this.width=64,this.height=24}return _createClass(t,[{key:"ngAfterViewInit",value:function(){var t=this;setTimeout((function(){return t.render()}),0)}},{key:"ngOnChanges",value:function(t){this.render()}},{key:"render",value:function(){var t=r.select(this.elementRef.nativeElement);t.select("svg").remove();var e=this.currentColors,n=e.length;if(!(n<1))for(var a=Object(i.a)(this.elementRef,this.width,this.height,64,24),o=a[0],c=a[1],u=o/n,s=t.append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("width",o).attr("height",c).attr("viewBox","0 0 ".concat(o," ").concat(c)),l=0;l<n;++l)s.append("rect").attr("x",u*l).attr("y","0").attr("width",u).attr("height",c).attr("fill",e[l])}},{key:"colors",set:function(t){t&&null!=t&&t.length>0&&(this.currentColors=t)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Nb(a.l))},t.\u0275cmp=a.Hb({type:t,selectors:[["mb-swatches"]],hostBindings:function(t,e){1&t&&a.bc("resize",(function(){return e.render()}),!1,a.uc)},inputs:{width:"width",height:"height",colors:"colors"},features:[a.zb],ngContentSelectors:o,decls:1,vars:0,template:function(t,e){1&t&&(a.kc(),a.jc(0))},styles:[""],encapsulation:2,changeDetection:0}),t}()},kfDn:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var r=function(t){return t.data.name?t.data.name:""},i=function(t){return t.data.value?t.data.value.toString():""},a=function(t){return""}},mLdi:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i}));var r=function(t){return 0},i=function(t){return t.depth<2?1:t.depth<3?.5:t.depth<4?.1:0}},oaKP:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("VphZ"),i=n("rGib"),a=n("bc9u"),o=n("fXoL"),c=["*"],u=function(){var t=function(){function t(e){_classCallCheck(this,t),this.elementRef=e,this.currentConfiguration={fillColor:"steelblue",strokeColor:void 0,strokeWidth:1,interpolation:"linear"},this.width=160,this.height=24}return _createClass(t,[{key:"ngAfterViewInit",value:function(){var t=this;setTimeout((function(){return t.render()}),0)}},{key:"ngOnChanges",value:function(t){this.render()}},{key:"render",value:function(){var t=r.select(this.elementRef.nativeElement);t.select("svg").remove();var e=this.currentData;if(e&&!(e.length<1)){var n,o,c=this.currentConfiguration,u=Object(i.a)(this.elementRef,this.width,this.height,160,24),s=u[0],l=u[1],f=t.append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("width",s).attr("height",l).attr("viewBox","0 0 ".concat(s," ").concat(l)),h=r.scaleTime().range([0,s]).domain([e[0].time,e[e.length-1].time]);void 0!==e[0].close?(n=r.extent(e,(function(t){return t.close})),o=function(t){return t.close}):void 0!==e[0].price?(n=r.extent(e,(function(t){return t.price})),o=function(t){return t.price}):void 0!==e[0].bidPrice?(n=r.extent(e,(function(t){return t.bidPrice})),o=function(t){return t.bidPrice}):(n=r.extent(e,(function(t){return t.value})),o=function(t){return t.value});var d=c.interpolation?c.interpolation:"linear;",p=r.scaleLinear().domain(n).range([l,0]);if(f.datum(e),c.fillColor&&"none"!==c.fillColor){var v=n[0],m=r.area().curve(Object(a.a)(d)).defined((function(t){return!isNaN(o(t))})).x((function(t,e){return h(t.time)})).y0((function(t){return p(v)})).y1((function(t){return p(o(t))}));f.append("path").attr("fill",c.fillColor).attr("d",m)}if(c.strokeColor&&c.strokeWidth&&c.strokeWidth>0&&"none"!==c.strokeColor){var g=r.line().curve(Object(a.a)(d)).defined((function(t){return!isNaN(o(t))})).x((function(t,e){return h(t.time)})).y((function(t){return p(o(t))}));f.append("path").attr("stroke-width",c.strokeWidth).attr("stroke",c.strokeColor).attr("stroke-linejoin","round").attr("stroke-linecap","round").style("fill","none").attr("d",g)}}}},{key:"configuration",set:function(t){t&&null!=t&&(this.currentConfiguration=Object.assign(Object.assign({},this.currentConfiguration),t))},get:function(){return this.currentConfiguration}},{key:"data",set:function(t){this.currentData=t},get:function(){return this.currentData}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o.Nb(o.l))},t.\u0275cmp=o.Hb({type:t,selectors:[["mb-sparkline"]],hostBindings:function(t,e){1&t&&o.bc("resize",(function(){return e.render()}),!1,o.uc)},inputs:{width:"width",height:"height",configuration:"configuration",data:"data"},features:[o.zb],ngContentSelectors:c,decls:1,vars:0,template:function(t,e){1&t&&(o.kc(),o.jc(0))},styles:[""],encapsulation:2,changeDetection:0}),t}()},rGib:function(t,e,n){"use strict";function r(t,e,n,r,c){var u=r,s=c,l=t.nativeElement,f=getComputedStyle(l),h=i(f.width),d=h[0];if(d&&d>0)if(!0===h[1]){var p=a(d,h[2],l);p&&(u=p)}else u=d;else if((d=(h=i(e))[0])&&d>0)if(!0===h[1]){var v=a(d,h[2],l);v&&(u=v)}else u=d;if((d=(h=i(f.minWidth))[0])&&d>0)if(!0===h[1]){var m=a(d,h[2],l);m&&u<m&&(u=m)}else u<d&&(u=d);if((d=(h=i(f.maxWidth))[0])&&d>0)if(!0===h[1]){var g=a(d,h[2],l);g&&u>g&&(u=g)}else u>d&&(u=d);if((d=(h=i(f.height))[0])&&d>0)if(!0===h[1]){var b=o(d,h[2],l,u);b&&(s=b)}else s=d;else if((d=(h=i(n))[0])&&d>0)if(!0===h[1]){var y=o(d,h[2],l,u);y&&(s=y)}else s=d;if((d=(h=i(f.minHeight))[0])&&d>0)if(!0===h[1]){var k=o(d,h[2],l,u);k&&s<k&&(s=k)}else s<d&&(s=d);if((d=(h=i(f.maxHeight))[0])&&d>0)if(!0===h[1]){var x=o(d,h[2],l,u);x&&s>x&&(s=x)}else s>d&&(s=d);return[u,s]}function i(t){if(null==t)return[void 0,!1,""];if("number"!=typeof t){var e=t.match(/^(\d+(?:\.\d+)?)(px|%)(.*)$/);return null===e?[void 0,!1,""]:[parseFloat(e[1]),"%"===e[2],e[3]]}return[+t,!1,""]}function a(t,e,n){if(null!=e&&e.length>0){if("offsetParent"===e){var r=n.offsetParent;return r&&null!=r&&r.clientWidth>0?+r.clientWidth*t/100:void 0}if("parent"===e){var i=n.parentElement;return null!==i&&i.clientWidth&&i.clientWidth>0?i.clientWidth*t/100:void 0}var a=n.closest(e);return null!==a&&a.clientWidth&&a.clientWidth>0?a.clientWidth*t/100:void 0}var o=n.parentElement;if(null!==o&&o.clientWidth&&o.clientWidth>0)return o.clientWidth*t/100}function o(t,e,n,r){if(null!=e&&e.length>0){if("width"===e)return r*t/100;if("offsetParent"===e){var i=n.offsetParent;return i&&null!=i&&i.clientHeight>0?+i.clientHeight*t/100:void 0}if("parent"===e){var a=n.parentElement;return null!==a&&a.clientHeight&&a.clientHeight>0?a.clientHeight*t/100:void 0}var o=n.closest(e);return null!==o&&o.clientHeight&&o.clientHeight>0?o.clientHeight*t/100:void 0}var c=n.parentElement;if(null!==c&&c.clientHeight&&c.clientHeight>0)return c.clientHeight*t/100}n.d(e,"a",(function(){return r}))},t9gN:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}));var r=function(t,e){return 0},i=function(t,e){return(e&&e.value?e.value:0)-(t&&t.value?t.value:0)},a=function(t,e){return(t&&t.value?t.value:0)-(e&&e.value?e.value:0)}},"u+s4":function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a}));var r=function(t,e){return 0},i=function(t,e){return 1},a=function(t,e){return 1-(t.depth-1)/(1.9*e)}},uaKh:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return u}));var r=n("VphZ");Math;var i=function(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=t;a.depth>1&&null!=a.parent;)a=a.parent;for(var o=t;null!=o.parent;)o=o.parent;var c=o.children?o.children:[],u=c.indexOf(a),s=u?u/(c.length+1):0,l=r.hsl(e(n?1-s:s));1===i?l=l.brighter():2===i&&(l=l.darker());var f=t.depth;return l.l+=1===f?0:.1*f,l.hex()},a=function(t){return i(t,r.interpolateCool)},o=function(t){return function(t,e){for(var n=t;n.depth>1&&null!=n.parent;)n=n.parent;for(var i=t;null!=i.parent;)i=i.parent;var a=i.children?i.children:[],o=a.indexOf(n),c=r.hsl(e(1-(o?o/(a.length+1):0))),u=t.depth;return c.l+=1===u?0:.1*u,c.hex()}(t,r.interpolateCool)},c=function(t){return i(t,r.interpolateRainbow)},u=function(t){return i(t,r.interpolateRainbow,!0)}}}]);