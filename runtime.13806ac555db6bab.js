(()=>{"use strict";var e,v={},m={};function r(e){var i=m[e];if(void 0!==i)return i.exports;var a=m[e]={id:e,loaded:!1,exports:{}};return v[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=v,r.amdD=function(){throw new Error("define cannot be used indirect")},r.amdO={},e=[],r.O=(i,a,o,f)=>{if(!a){var t=1/0;for(n=0;n<e.length;n++){for(var[a,o,f]=e[n],c=!0,d=0;d<a.length;d++)(!1&f||t>=f)&&Object.keys(r.O).every(p=>r.O[p](a[d]))?a.splice(d--,1):(c=!1,f<t&&(t=f));if(c){e.splice(n--,1);var l=o();void 0!==l&&(i=l)}}return i}f=f||0;for(var n=e.length;n>0&&e[n-1][2]>f;n--)e[n]=e[n-1];e[n]=[a,o,f]},r.n=e=>{var i=e&&e.__esModule?()=>e.default:()=>e;return r.d(i,{a:i}),i},r.d=(e,i)=>{for(var a in i)r.o(i,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:i[a]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((i,a)=>(r.f[a](e,i),i),[])),r.u=e=>e+"."+{11:"ef04c7a44e7516c7",290:"230b4bd50ad519ff",410:"aa14ee76432769d6",661:"754d0753bc3b31b4",805:"843c065165def75a",842:"74cb2b0d0cab4079",894:"e9b1a95181655a8f",907:"07167d8a02b6b893",970:"f69a0b9fa3113b9d"}[e]+".js",r.miniCssF=e=>{},r.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),(()=>{var e={},i="mbs-api-host-ng:";r.l=(a,o,f,n)=>{if(e[a])e[a].push(o);else{var t,c;if(void 0!==f)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var s=d[l];if(s.getAttribute("src")==a||s.getAttribute("data-webpack")==i+f){t=s;break}}t||(c=!0,(t=document.createElement("script")).type="module",t.charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",i+f),t.src=r.tu(a),0!==t.src.indexOf(window.location.origin+"/")&&(t.crossOrigin="anonymous"),t.integrity=r.sriHashes[n],t.crossOrigin="anonymous"),e[a]=[o];var u=(h,p)=>{t.onerror=t.onload=null,clearTimeout(b);var H=e[a];if(delete e[a],t.parentNode&&t.parentNode.removeChild(t),H&&H.forEach(g=>g(p)),h)return h(p)},b=setTimeout(u.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=u.bind(null,t.onerror),t.onload=u.bind(null,t.onload),c&&document.head.appendChild(t)}}})(),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tu=i=>(void 0===e&&(e={createScriptURL:a=>a},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e.createScriptURL(i))})(),r.p="",r.sriHashes={11:"sha384-zNH+I7Vhgi/BrGLgQH36+E+r525UEoY3pXwpPUog2S4nJoxCppWzwKbz0BeH1S3Q",290:"sha384-d9FE85JpjwM25SiA+5NzZxqxzDMyh+dLSK5E3noSOQF1SuI26cAgrdeqR4P3hBMB",410:"sha384-vShubgJxsPLMwPdaQf1HsjKKmTR7UyVl8+uyQDjFwMyWkvA9JkaQtxnwd3MH+gKo",661:"sha384-aRAzSTFKTSFt48fXxcCRN0Dugilykp+n8qI0AHhnaFTfbaLY+jzM6HKLE3ueq9xd",805:"sha384-Za1BceonEUo8o6RlkdoxWnjxic4GfAHmN9m2U8r6BNrgpq8mQD8ecwcGfYD1jVHC",842:"sha384-Whh5twTeAARAButqr7DtSnut9IyLK7euEdX0t5w84gbIDSJYii76Y973neDkKxvM",894:"sha384-z2w8gs0CiZo6L3FxHXMC7E8gZezK2nl/glkKJmgCEC4uJ79sh4t46VzT3Dp8rLqW",907:"sha384-UFYETxY21Ils9Bwi6jELIdwpW95WIWb8XIVElYoEA0q2CoYZQlKXuYO5f8Gjnod8",970:"sha384-FCm3URC/WDd/k8+8KW9B4lhsJJz6QUlcTI3RuEeurubiz2snhRhOm8IOxj+S20R4"},(()=>{var e={666:0};r.f.j=(o,f)=>{var n=r.o(e,o)?e[o]:void 0;if(0!==n)if(n)f.push(n[2]);else if(666!=o){var t=new Promise((s,u)=>n=e[o]=[s,u]);f.push(n[2]=t);var c=r.p+r.u(o),d=new Error;r.l(c,s=>{if(r.o(e,o)&&(0!==(n=e[o])&&(e[o]=void 0),n)){var u=s&&("load"===s.type?"missing":s.type),b=s&&s.target&&s.target.src;d.message="Loading chunk "+o+" failed.\n("+u+": "+b+")",d.name="ChunkLoadError",d.type=u,d.request=b,n[1](d)}},"chunk-"+o,o)}else e[o]=0},r.O.j=o=>0===e[o];var i=(o,f)=>{var d,l,[n,t,c]=f,s=0;if(n.some(b=>0!==e[b])){for(d in t)r.o(t,d)&&(r.m[d]=t[d]);if(c)var u=c(r)}for(o&&o(f);s<n.length;s++)r.o(e,l=n[s])&&e[l]&&e[l][0](),e[n[s]]=0;return r.O(u)},a=self.webpackChunkmbs_api_host_ng=self.webpackChunkmbs_api_host_ng||[];a.forEach(i.bind(null,0)),a.push=i.bind(null,a.push.bind(a))})()})();