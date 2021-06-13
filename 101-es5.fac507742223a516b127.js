!function(){function t(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=n(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){c=!0,o=t},f:function(){try{s||null==i.return||i.return()}finally{if(c)throw o}}}}function e(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||n(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}(self.webpackChunkmbs_api_host_ng=self.webpackChunkmbs_api_host_ng||[]).push([[101],{13794:function(t,e,n){"use strict";n.d(e,{i:function(){return c}});var i=n(35366),a=n(11295),s=function(){var t=function(){function t(e,n){r(this,t),this.element=e,this.katexService=n,this.hasError=new i.vpe}return o(t,[{key:"ngOnChanges",value:function(){try{this.katexService.render(this.mbKatex,this.element,this.options)}catch(t){this.hasError.emit(t)}}}]),t}();return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.SBq),i.Y36(a.$))},t.\u0275dir=i.lG2({type:t,selectors:[["","mbKatex",""]],inputs:{mbKatex:"mbKatex",options:"options"},outputs:{hasError:"hasError"},features:[i.TTD]}),t}(),c=function(){var t=function(){function t(){r(this,t),this.hasError=new i.vpe}return o(t,[{key:"outputError",value:function(t){this.hasError.emit(t)}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["mb-katex"]],inputs:{expression:"expression",options:"options"},outputs:{hasError:"hasError"},decls:1,vars:2,consts:[[3,"mbKatex","options","hasError"]],template:function(t,e){1&t&&(i.TgZ(0,"span",0),i.NdJ("hasError",function(t){return e.outputError(t)}),i.qZA()),2&t&&i.Q6J("mbKatex",e.expression)("options",e.options)},directives:[s],styles:[""]}),t}()},62693:function(t,e,n){"use strict";n.d(e,{G:function(){return r}});var i=n(60553);function r(t){switch(t.toLowerCase()){case"step":return i.curveStep;case"stepbefore":return i.curveStepBefore;case"stepafter":return i.curveStepAfter;case"natural":return i.curveNatural;case"basis":return i.curveBasis;case"catmullrom":return i.curveCatmullRom;case"cardinal":return i.curveCardinal;case"monotonex":return i.curveMonotoneX;case"monotoney":return i.curveMonotoneY;default:return i.curveLinear}}},56505:function(t,e,n){"use strict";function i(t){if(t.length>0){if(void 0!==t[0].close)return function(t){return t.close};if(void 0!==t[0].price)return function(t){return t.price};if(void 0!==t[0].bidPrice)return function(t){return t.bidPrice}}return function(t){return t.value}}n.d(e,{j:function(){return i}})},18955:function(n,i,a){"use strict";a.d(i,{I:function(){return g}});var s=a(60553),c=a(47502),u=a(62693),l=a(56505),f=a(35366),h=["*"],d={fillColor:void 0,strokeColor:"steelblue",strokeWidth:1,interpolation:"natural"},m=new Date(-864e13),p=new Date(864e13),g=function(){var n=function(){function n(t){r(this,n),this.elementRef=t,this.currentConfiguration=[],this.currentData=[],this.currentDataEmpty=!0,this.width=300,this.height=100,this.timeAxis=[],this.valueAxis=[]}return o(n,[{key:"configuration",get:function(){return this.currentConfiguration},set:function(t){if(t&&null!=t&&t.length>0){var n=t.length,i=this.currentConfiguration.length;if(i>0){var r=Math.min(n,i);Math.max(n,i);for(var a=0;a<r;++a)this.currentConfiguration[a]=Object.assign(Object.assign({},this.currentConfiguration[a]),t[a]);if(n>r)for(var o=r;o<n;++o)this.currentConfiguration[o]=Object.assign({},t[o])}else this.currentConfiguration=e(t)}}},{key:"min",set:function(t){this.forcedValueMin=t}},{key:"max",set:function(t){this.forcedValueMax=t}},{key:"from",set:function(t){this.forcedTimeMin=t}},{key:"till",set:function(t){this.forcedTimeMax=t}},{key:"data",get:function(){return this.currentData},set:function(e){var n,i=p,r=m,a=1/0,o=-1/0,s=!0,c=t(e);try{for(c.s();!(n=c.n()).done;){var u=n.value,f=u.length;if(!(f<1)){s=!1,i>u[0].time&&(i=u[0].time),r<u[f-1].time&&(r=u[f-1].time);var h,d=(0,l.j)(u),g=t(u);try{for(g.s();!(h=g.n()).done;){var v=d(h.value);isNaN(v)||(a>v&&(a=v),o<v&&(o=v))}}catch(x){g.e(x)}finally{g.f()}}}}catch(x){c.e(x)}finally{c.f()}this.currentDataEmpty=s,this.dataTimeMin=i,this.dataTimeMax=r,this.dataValueMin=a,this.dataValueMax=o,this.currentData=e}},{key:"ngAfterViewInit",value:function(){var t=this;setTimeout(function(){return t.render()},0)}},{key:"ngOnChanges",value:function(t){this.render()}},{key:"render",value:function(){var t=s.select(this.elementRef.nativeElement);t.select("svg").remove();var e=this.currentData;if(!(this.currentDataEmpty||!e||e.length<1)){var n=this.currentConfiguration,i=this.timeAxis.includes("top"),r=this.timeAxis.includes("bottom"),a=this.valueAxis.includes("left"),o=this.valueAxis.includes("right"),f=this.valueAxis.includes("grid"),h=a||f?50:i||r?50/3:0,m=o?50:i||r?50/3:0,p=i?18:a||o||f?6:0,g=r?18:a||o||f?6:0,v=(0,c.C)(this.elementRef,this.width,this.height,300,100),x=v[0],y=v[1],k=t.append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("width",x).attr("height",y).attr("viewBox","0 0 ".concat(x," ").concat(y)),C=void 0===this.forcedTimeMin?this.dataTimeMin:this.forcedTimeMin,w=void 0===this.forcedTimeMax?this.dataTimeMax:this.forcedTimeMax,b=s.scaleUtc().range([h,x-m]).domain([C,w]);if(i){b.nice();k.append("g").call(function(t){return t.attr("font-family","sans-serif").attr("font-size",10).attr("fill","none").attr("transform","translate(0,".concat(p,")")).call(s.axisTop(b).ticks(x/60).tickSizeOuter(0))})}if(r){b.nice();k.append("g").call(function(t){return t.attr("font-family","sans-serif").attr("font-size",10).attr("fill","none").attr("transform","translate(0,".concat(y-g,")")).call(s.axisBottom(b).ticks(x/60).tickSizeOuter(0))})}var M=void 0===this.forcedValueMin?this.dataValueMin:this.forcedValueMin,A=void 0===this.forcedValueMax?this.dataValueMax:this.forcedValueMax,T=s.scaleLinear().domain([M,A]).range([y-g,p]);if(a&&!f){T.nice();k.append("g").call(function(t){return t.attr("transform","translate(".concat(h,",0)")).call(s.axisLeft(T).ticks(y/30).tickSizeOuter(0))})}if(o){T.nice();k.append("g").call(function(t){return t.attr("transform","translate(".concat(x-m,",0)")).call(s.axisRight(T).ticks(y/30).tickSizeOuter(0))})}if(f){T.nice();k.append("g").call(function(t){return t.attr("transform","translate(".concat(h,",0)")).call(s.axisLeft(T).ticks(y/30).tickSizeOuter(0)).call(function(t){a||t.select(".domain").remove()}).call(function(t){return t.selectAll(r?".tick:not(:first-of-type) line":".tick line").clone().attr("x2",x-h-m).attr("stroke","currentColor").attr("stroke-width",.3)})})}for(var S=n.length,D=function(t){var i=e[t],r=(0,l.j)(i),a=t<S?n[t]:d,o=a.interpolation?a.interpolation:"natural";if(a.fillColor&&"none"!==a.fillColor){var c=s.area().curve((0,u.G)(o)).defined(function(t){return!isNaN(r(t))&&t.time>=C&&t.time<=w}).x(function(t){return b(t.time)}).y0(function(){return T(M)}).y1(function(t){return T(r(t))});k.append("path").datum(i).attr("fill",a.fillColor).attr("d",c)}if(a.strokeColor&&a.strokeWidth&&a.strokeWidth>0&&"none"!==a.strokeColor){var f=s.line().curve((0,u.G)(o)).defined(function(t){return!isNaN(r(t))&&t.time>=C&&t.time<=w}).x(function(t){return b(t.time)}).y(function(t){return T(r(t))});k.append("path").datum(i).attr("stroke-width",a.strokeWidth).attr("stroke",a.strokeColor).attr("stroke-linejoin","round").attr("stroke-linecap","round").style("fill","none").attr("d",f)}},O=0;O<e.length;++O)D(O)}}}]),n}();return n.\u0275fac=function(t){return new(t||n)(f.Y36(f.SBq))},n.\u0275cmp=f.Xpm({type:n,selectors:[["mb-multiline"]],hostBindings:function(t,e){1&t&&f.NdJ("resize",function(){return e.render()},!1,f.Jf7)},inputs:{width:"width",height:"height",configuration:"configuration",timeAxis:"timeAxis",valueAxis:"valueAxis",min:"min",max:"max",from:"from",till:"till",data:"data"},features:[f.TTD],ngContentSelectors:h,decls:1,vars:0,template:function(t,e){1&t&&(f.F$t(),f.Hsn(0))},styles:[""],encapsulation:2,changeDetection:0}),n}()},70829:function(t,e,n){"use strict";n.d(e,{l:function(){return l}});var i=n(60553),a=n(47502),s=n(62693),c=n(35366),u=["*"],l=function(){var t=function(){function t(e){r(this,t),this.elementRef=e,this.currentConfiguration={fillColor:"steelblue",strokeColor:void 0,strokeWidth:1,interpolation:"linear"},this.width=160,this.height=24}return o(t,[{key:"configuration",get:function(){return this.currentConfiguration},set:function(t){t&&null!=t&&(this.currentConfiguration=Object.assign(Object.assign({},this.currentConfiguration),t))}},{key:"data",get:function(){return this.currentData},set:function(t){this.currentData=t}},{key:"ngAfterViewInit",value:function(){var t=this;setTimeout(function(){return t.render()},0)}},{key:"ngOnChanges",value:function(t){this.render()}},{key:"render",value:function(){var t=i.select(this.elementRef.nativeElement);t.select("svg").remove();var e=this.currentData;if(e&&!(e.length<1)){var n,r,o=this.currentConfiguration,c=(0,a.C)(this.elementRef,this.width,this.height,160,24),u=c[0],l=c[1],f=t.append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("width",u).attr("height",l).attr("viewBox","0 0 ".concat(u," ").concat(l)),h=i.scaleTime().range([0,u]).domain([e[0].time,e[e.length-1].time]);void 0!==e[0].close?(n=i.extent(e,function(t){return t.close}),r=function(t){return t.close}):void 0!==e[0].price?(n=i.extent(e,function(t){return t.price}),r=function(t){return t.price}):void 0!==e[0].bidPrice?(n=i.extent(e,function(t){return t.bidPrice}),r=function(t){return t.bidPrice}):(n=i.extent(e,function(t){return t.value}),r=function(t){return t.value});var d=o.interpolation?o.interpolation:"linear;",m=i.scaleLinear().domain(n).range([l,0]);if(f.datum(e),o.fillColor&&"none"!==o.fillColor){var p=n[0],g=i.area().curve((0,s.G)(d)).defined(function(t){return!isNaN(r(t))}).x(function(t,e){return h(t.time)}).y0(function(t){return m(p)}).y1(function(t){return m(r(t))});f.append("path").attr("fill",o.fillColor).attr("d",g)}if(o.strokeColor&&o.strokeWidth&&o.strokeWidth>0&&"none"!==o.strokeColor){var v=i.line().curve((0,s.G)(d)).defined(function(t){return!isNaN(r(t))}).x(function(t,e){return h(t.time)}).y(function(t){return m(r(t))});f.append("path").attr("stroke-width",o.strokeWidth).attr("stroke",o.strokeColor).attr("stroke-linejoin","round").attr("stroke-linecap","round").style("fill","none").attr("d",v)}}}}]),t}();return t.\u0275fac=function(e){return new(e||t)(c.Y36(c.SBq))},t.\u0275cmp=c.Xpm({type:t,selectors:[["mb-sparkline"]],hostBindings:function(t,e){1&t&&c.NdJ("resize",function(){return e.render()},!1,c.Jf7)},inputs:{width:"width",height:"height",configuration:"configuration",data:"data"},features:[c.TTD],ngContentSelectors:u,decls:1,vars:0,template:function(t,e){1&t&&(c.F$t(),c.Hsn(0))},styles:[""],encapsulation:2,changeDetection:0}),t}()},29933:function(n,i,a){"use strict";a.d(i,{j:function(){return g}});var s=a(60553),c=a(47502),u=a(62693),l=a(56505),f=a(35366),h=["*"],d={fillColor:void 0,strokeColor:"steelblue",strokeWidth:1,interpolation:"natural"},m=new Date(-864e13),p=new Date(864e13),g=function(){var n=function(){function n(t){r(this,n),this.elementRef=t,this.currentConfiguration=[],this.currentDataStacked=[],this.currentDataEmpty=!0,this.width=300,this.height=100,this.timeAxis=[],this.valueAxis=[]}return o(n,[{key:"configuration",get:function(){return this.currentConfiguration},set:function(t){if(t&&null!=t&&t.length>0){var n=t.length,i=this.currentConfiguration.length;if(i>0){var r=Math.min(n,i);Math.max(n,i);for(var a=0;a<r;++a)this.currentConfiguration[a]=Object.assign(Object.assign({},this.currentConfiguration[a]),t[a]);if(n>r)for(var o=r;o<n;++o)this.currentConfiguration[o]=Object.assign({},t[o])}else this.currentConfiguration=e(t)}}},{key:"min",set:function(t){this.forcedValueMin=t}},{key:"max",set:function(t){this.forcedValueMax=t}},{key:"from",set:function(t){this.forcedTimeMin=t}},{key:"till",set:function(t){this.forcedTimeMax=t}},{key:"data",set:function(e){var n,i=p,r=m,a=-1/0,o=!0,s=[],c=0,u=t(e);try{for(u.s();!(n=u.n()).done;){var f=n.value;s.push([]);var h=f.length;h<1||(o=!1,c<h&&(c=h),i>f[0].time&&(i=f[0].time),r<f[h-1].time&&(r=f[h-1].time))}}catch(w){u.e(w)}finally{u.f()}for(var d=e.length,g=0;g<c;++g)for(var v=0,x=0;x<d;++x){var y=s[x],k=e[x];if(k.length>g){var C=(0,l.j)(k)(k[g]);isNaN(C)||(C+=v,y.push({time:k[g].time,lower:v,upper:C}),v=C,a<C&&(a=C))}}this.currentDataEmpty=o,this.dataTimeMin=i,this.dataTimeMax=r,this.dataValueMax=a,this.currentDataStacked=s}},{key:"ngAfterViewInit",value:function(){var t=this;setTimeout(function(){return t.render()},0)}},{key:"ngOnChanges",value:function(t){this.render()}},{key:"render",value:function(){var t=s.select(this.elementRef.nativeElement);t.select("svg").remove();var e=this.currentDataStacked;if(!(this.currentDataEmpty||!e||e.length<1)){var n=this.currentConfiguration,i=this.timeAxis.includes("top"),r=this.timeAxis.includes("bottom"),a=this.valueAxis.includes("left"),o=this.valueAxis.includes("right"),l=this.valueAxis.includes("grid"),f=a||l?50:i||r?50/3:0,h=o?50:i||r?50/3:0,m=i?18:a||o||l?6:0,p=r?18:a||o||l?6:0,g=(0,c.C)(this.elementRef,this.width,this.height,300,100),v=g[0],x=g[1],y=t.append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("width",v).attr("height",x).attr("viewBox","0 0 ".concat(v," ").concat(x)),k=void 0===this.forcedTimeMin?this.dataTimeMin:this.forcedTimeMin,C=void 0===this.forcedTimeMax?this.dataTimeMax:this.forcedTimeMax,w=s.scaleUtc().range([f,v-h]).domain([k,C]);if(i){w.nice();y.append("g").call(function(t){return t.attr("font-family","sans-serif").attr("font-size",10).attr("fill","none").attr("transform","translate(0,".concat(m,")")).call(s.axisTop(w).ticks(v/60).tickSizeOuter(0))})}if(r){w.nice();y.append("g").call(function(t){return t.attr("font-family","sans-serif").attr("font-size",10).attr("fill","none").attr("transform","translate(0,".concat(x-p,")")).call(s.axisBottom(w).ticks(v/60).tickSizeOuter(0))})}var b=void 0===this.forcedValueMin?0:this.forcedValueMin,M=void 0===this.forcedValueMax?this.dataValueMax:this.forcedValueMax,A=s.scaleLinear().domain([b,M]).range([x-p,m]);if(a&&!l){A.nice();y.append("g").call(function(t){return t.attr("transform","translate(".concat(f,",0)")).call(s.axisLeft(A).ticks(x/30).tickSizeOuter(0))})}if(o){A.nice();y.append("g").call(function(t){return t.attr("transform","translate(".concat(v-h,",0)")).call(s.axisRight(A).ticks(x/30).tickSizeOuter(0))})}if(l){A.nice();y.append("g").call(function(t){return t.attr("transform","translate(".concat(f,",0)")).call(s.axisLeft(A).ticks(x/30).tickSizeOuter(0)).call(function(t){a||t.select(".domain").remove()}).call(function(t){return t.selectAll(r?".tick:not(:first-of-type) line":".tick line").clone().attr("x2",v-f-h).attr("stroke","currentColor").attr("stroke-width",.3)})})}for(var T=n.length,S=0;S<e.length;++S){var D=e[S],O=S<T?n[S]:d,E=O.interpolation?O.interpolation:"natural";if(O.fillColor&&"none"!==O.fillColor){var P=s.area().curve((0,u.G)(E)).defined(function(t){return t.time>=k&&t.time<=C}).x(function(t){return w(t.time)}).y0(function(t){return A(t.lower)}).y1(function(t){return A(t.upper)});y.append("path").datum(D).attr("fill",O.fillColor).attr("d",P)}if(O.strokeColor&&O.strokeWidth&&O.strokeWidth>0&&"none"!==O.strokeColor){var V=s.line().curve((0,u.G)(E)).defined(function(t){return t.time>=k&&t.time<=C}).x(function(t){return w(t.time)}).y(function(t){return A(t.upper)});y.append("path").datum(D).attr("stroke-width",O.strokeWidth).attr("stroke",O.strokeColor).attr("stroke-linejoin","round").attr("stroke-linecap","round").style("fill","none").attr("d",V)}}}}}]),n}();return n.\u0275fac=function(t){return new(t||n)(f.Y36(f.SBq))},n.\u0275cmp=f.Xpm({type:n,selectors:[["mb-stackiline"]],hostBindings:function(t,e){1&t&&f.NdJ("resize",function(){return e.render()},!1,f.Jf7)},inputs:{width:"width",height:"height",configuration:"configuration",timeAxis:"timeAxis",valueAxis:"valueAxis",min:"min",max:"max",from:"from",till:"till",data:"data"},features:[f.TTD],ngContentSelectors:h,decls:1,vars:0,template:function(t,e){1&t&&(f.F$t(),f.Hsn(0))},styles:[""],encapsulation:2,changeDetection:0}),n}()},66068:function(t,e,n){"use strict";n.d(e,{T:function(){return h}});var i=n(35366),a=n(13070),s=n(13841),c=n(92321),u=n(61116),l=n(87064);function f(t,e){if(1&t&&(i.TgZ(0,"mat-option",4),i._UZ(1,"mb-swatches",2),i.qZA()),2&t){var n=e.$implicit,r=i.oxw();i.Q6J("value",n),i.xp6(1),i.Q6J("width",96)("height",r.optionHeightPixels)("colors",n)}}var h=function(){var t=function(){function t(){r(this,t),this.label="Select colors",this.selectionChange=new i.vpe,this.optionHeightPixels=32,this.triggerHeightPixels=24,this.optionWidthPixels=96,this.triggerWidthPixels=72,this.selectWidthPixels=20+this.triggerWidthPixels,this.palettes=[],this.selectedPalette=[]}return o(t,[{key:"colors",set:function(t){if(t&&t.length>0){this.palettes=t,this.selectedPalette=this.palettes[0];var e=0;for(var n in this.palettes)e<n.length&&(e=n.length);this.optionWidthPixels=e*this.optionHeightPixels,this.triggerWidthPixels=e*this.triggerHeightPixels,this.selectWidthPixels=20+this.triggerWidthPixels}}},{key:"selectionChanged",value:function(t){this.selectionChange.emit(t.value)}},{key:"computeWidthStyle",value:function(){return{width:"".concat(this.selectWidthPixels,"px")}}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["mb-swatches-select"]],inputs:{colors:"colors",label:"label"},outputs:{selectionChange:"selectionChange"},decls:7,vars:6,consts:[[2,"width","92px"],[3,"value","valueChange","selectionChange"],[3,"width","height","colors"],["style","padding: 18px 0px 0px 30px",3,"value",4,"ngFor","ngForOf"],[2,"padding","18px 0px 0px 30px",3,"value"]],template:function(t,e){1&t&&(i.TgZ(0,"mat-form-field",0),i.TgZ(1,"mat-label"),i._uU(2),i.qZA(),i.TgZ(3,"mat-select",1),i.NdJ("valueChange",function(t){return e.selectedPalette=t})("selectionChange",function(t){return e.selectionChanged(t)}),i.TgZ(4,"mat-select-trigger"),i._UZ(5,"mb-swatches",2),i.qZA(),i.YNc(6,f,2,4,"mat-option",3),i.qZA(),i.qZA()),2&t&&(i.xp6(2),i.Oqu(e.label),i.xp6(1),i.Q6J("value",e.selectedPalette),i.xp6(2),i.Q6J("width",72)("height",e.triggerHeightPixels)("colors",e.selectedPalette),i.xp6(1),i.Q6J("ngForOf",e.palettes))},directives:[a.KE,a.hX,s.gD,s.$L,c.p,u.sg,l.ey],styles:[""],encapsulation:2}),t}()},92321:function(t,e,n){"use strict";n.d(e,{p:function(){return u}});var i=n(60553),a=n(47502),s=n(35366),c=["*"],u=function(){var t=function(){function t(e){r(this,t),this.elementRef=e,this.currentColors=[],this.width=64,this.height=24}return o(t,[{key:"colors",set:function(t){t&&null!=t&&t.length>0&&(this.currentColors=t)}},{key:"ngAfterViewInit",value:function(){var t=this;setTimeout(function(){return t.render()},0)}},{key:"ngOnChanges",value:function(t){this.render()}},{key:"render",value:function(){var t=i.select(this.elementRef.nativeElement);t.select("svg").remove();var e=this.currentColors,n=e.length;if(!(n<1))for(var r=(0,a.C)(this.elementRef,this.width,this.height,64,24),o=r[0],s=r[1],c=o/n,u=t.append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("width",o).attr("height",s).attr("viewBox","0 0 ".concat(o," ").concat(s)),l=0;l<n;++l)u.append("rect").attr("x",c*l).attr("y","0").attr("width",c).attr("height",s).attr("fill",e[l])}}]),t}();return t.\u0275fac=function(e){return new(e||t)(s.Y36(s.SBq))},t.\u0275cmp=s.Xpm({type:t,selectors:[["mb-swatches"]],hostBindings:function(t,e){1&t&&s.NdJ("resize",function(){return e.render()},!1,s.Jf7)},inputs:{width:"width",height:"height",colors:"colors"},features:[s.TTD],ngContentSelectors:c,decls:1,vars:0,template:function(t,e){1&t&&(s.F$t(),s.Hsn(0))},styles:[""],encapsulation:2,changeDetection:0}),t}()}}])}();