(function(e){var n,t,a,s,i,r={".js":[],".json":[],".css":[],".html":[]};s=function(e){var n=new Error("Could not find module '"+e+"'");n.code="MODULE_NOT_FOUND";return n};i=function(e,n,t){var a,s;if(typeof e[n+t]==="function")return n+t;for(a=0;s=r[t][a];++a){if(typeof e[n+s]==="function")return n+s}return null};n=function(e,a,r,o,c){var l,u,f,d,p,v,m,g;r=r.split("/");l=r.pop();if(l==="."||l===".."){r.push(l);l=""}while((u=r.shift())!=null){if(!u||u===".")continue;if(u===".."){e=a.pop()}else{a.push(e);e=e[u]}if(!e)throw s(o)}if(l&&typeof e[l]!=="function"){v=i(e,l,".js");if(!v)v=i(e,l,".json");if(!v)v=i(e,l,".css");if(!v)v=i(e,l,".html");if(v){l=v}else if(c!==2&&typeof e[l]==="object"){a.push(e);e=e[l];l=""}}if(!l){if(c!==1&&e[":mainpath:"]){return n(e,a,e[":mainpath:"],o,1)}return n(e,a,"index",o,2)}p=e[l];if(!p)throw s(o);if(p.hasOwnProperty("module"))return p.module.exports;f={};p.module=d={exports:f};p.call(f,f,d,t(e,a));return d.exports};a=function(t,a,i){var r,o=i,c=i.charAt(0),l=0;if(c==="/"){o=o.slice(1);t=e["/"];a=[]}else if(c!=="."){r=o.split("/",1)[0];t=e[r];if(!t)throw s(i);a=[];o=o.slice(r.length+1);if(!o){o=t[":mainpath:"];if(o){l=1}else{o="index";l=2}}}return n(t,a,o,i,l)};t=function(e,n){return function(t){return a(e,[].concat(n),t)}};return t(e,[])})({numbers:{src:{"bits.js":function(e,n,t){var a=t("./ieee754");var s=t("./dom");var i=s.$(".visualization-bits");var r=s.$("#number-input");function o(e){return function(n){return n.classList.contains(e)}}var c=s.$$(".bit",i);var l=c.filter(o("sign"));var u=c.filter(o("exponent"));var f=c.filter(o("hidden"));var d=c.filter(o("significand"));var p=s.$("#point-slider");var v=s.$("#point-slider-label");function m(){return Number(r.value.replace(/\u2212/g,"-"))}function g(e){e=Number(e);if(e===0&&1/e<0){e="-0"}else{e=Number.prototype.toString.call(e)}e=e.replace(/-/g,"−");if(e!==r.value){r.value=e}N()}function y(e,n,t){t=typeof t=="string"?t.slice(-1):"0";for(var a=0;a<n.length;a++){var s=e[a];s.classList.remove("one");s.classList.remove("zero");s.classList.remove("prev-one");s.classList.remove("prev-zero");s.classList.add(n[a]=="1"?"one":"zero");if(a===0){s.classList.add(t=="1"?"prev-one":"prev-zero")}}}function b(e){var n=i.classList.contains("expanded");y(l,e.bSign);y(u,e.bExponent,n?"0":e.bSign);y(f,e.bHidden);y(d,e.bSignificand,n?e.bHidden:e.bExponent);v.style.left=(e.exponentNormalized-1)*15+"px";if(e.exponent!==Number(p.value)){p.value=e.exponent}}function h(e,n){e+=n.classList.contains("zero")?"0":"1";return e}function L(e){var n="";var t,s;if(e){t=e.exponent;s=e.significand}if(typeof t=="number"){t=a.intToBinaryString(t,11)}else{t=u.reduce(h,"")}if(typeof s!="string"){s=d.reduce(h,"")}n+=l.reduce(h,"");n+=t;n+=s;var i=a.binaryStringToFloat64(n);g(i)}function x(e,n,t,a){if(typeof n!="number"){n=e.length-1}t=t||"exponent-bit-";var s="";var i="";var r="";var o="";var c=true;for(var l=0,u=e.length;l<u;l++){if(e[l]=="1"){c=false;var f=n-l;var d=e.length-1-l;if(s.length>0){s+="<span class='mo'> + </span>";i+="<span class='mo'> + </span>";r+="<span class='mo'> + </span>";o+="<span class='mo'> + </span>"}var p='<span class="msup '+(t+d)+'"><span class="mn">2</span><span class="mn">'+f+"</span></span>";if(a&&f==0){p='<span class="mn '+(t+d)+'">1</span>'}s+=p;i+='<span class="mn '+(t+d)+'">'+Math.pow(2,f)+"</span>";if(f>=0){r+=p;o+='<span class="mn '+(t+d)+'">'+Math.pow(2,f)+"</span>"}else{r+='<span class="mfrac '+(t+d)+'"><span class="mn">1</span><span class="msup"><span class="mn">2</span><span class="mn">'+-f+"</span></span></span>";o+='<span class="mfrac '+(t+d)+'"><span class="mn">1</span><span class="mn">'+Math.pow(2,-f)+"</span></span>"}}}if(c){s=i=r=o='<span class="mn">0</span>'}o=o.replace(/Infinity/g,"&infin;");return{powers:s,computed:i,fractions:r,fractionsComputed:o}}function w(e){var n=x(e.bExponent);e.exponentPowers=n.powers;e.exponentPowersComputed=n.computed;var t=e.bHidden+e.bSignificand;e.exponentZero=e.exponent;e.exponentNormalizedZero=e.exponentNormalized;if(e.exponentNormalizedZero==-1023){e.exponentZero=e.exponent+1;e.exponentNormalizedZero=e.exponentNormalized+1}var a=x(t,e.exponentNormalizedZero,"significand-bit-");var i=x(t,0,"significand-bit-");var r=x(t,0,"significand-bit-",true);e.significandPowersNormalized=i.powers;e.significandPowersNormalizedOne=r.powers;var o=s.$(".full-equation");if(isNaN(e.value)){e.significandPowers=e.significandPowersFractions=e.significandPowersFractionsComputed=e.significandPowersComputed='<span class="mn significand-bit-any">NaN</span>'}else{e.significandPowers=a.powers;e.significandPowersFractions=a.fractions;e.significandPowersFractionsComputed=a.fractionsComputed;e.significandPowersComputed=a.computed}if(e.sign<0)e.signHtml=String(e.sign).replace("-","&minus;");else e.signHtml="+"+e.sign;e.absValue=Math.abs(e.value);if(isNaN(e.absValue)){e.absValue="NaNNaNNaNNaN Batman!"}var c=s.$$(".math [data-ieee754-value]");c.forEach(function(n){n.innerHTML=e[n.dataset.ieee754Value]});if(isNaN(e.value)||!isFinite(e.value)){o.classList.add("collapsed")}else{o.classList.remove("collapsed")}}function N(){var e=m();var n=a.toIEEE754Parsed(e);b(n);w(n)}r.addEventListener("change",function(){g(m())},false);r.addEventListener("keydown",function(e){var n=0;if(e.keyCode===38||e.keyCode===40){if(e.keyCode===38)n=+1;else n=-1;if(e.shiftKey){n*=10;if(e.altKey){n*=10}}else if(e.altKey){n/=10}g(n+m());e.preventDefault()}},false);p.addEventListener("change",function(){var e=Number(p.value);L({exponent:e})},false);p.addEventListener("click",function(){p.focus()},false);document.body.addEventListener("click",function(e){var n=e.target;if(n.classList.contains("zero")||n.classList.contains("one")){n.classList.toggle("zero");n.classList.toggle("one");L();N();k(e);S(e);z(e)}},false);function E(e,n){return function(t){var a=t.target;if(s.matchesSelector(a,e)){var i=s.arrayify(a.parentNode.children).filter(o("bit"));var r=i.length-i.indexOf(a)-1;var c=s.$$(n+r+","+(n+"any"));c.forEach(function(e){e.classList[t.type=="mouseout"?"remove":"add"]("hover")})}}}var k=E(".bit.exponent",".exponent-bit-");document.body.addEventListener("mouseover",k,false);document.body.addEventListener("mouseout",k,false);var S=E(".bit.significand, .bit.hidden",".significand-bit-");document.body.addEventListener("mouseover",S,false);document.body.addEventListener("mouseout",S,false);var z=E(".bit.sign",".sign-bit-");document.body.addEventListener("mouseover",z,false);document.body.addEventListener("mouseout",z,false);document.body.addEventListener("click",function(e){var n=e.target;if(s.matchesSelector(n,".mrow > .mo")){n.parentNode.classList.toggle("nowrap")}},false);var $=t("./dynks");var M=s.$("#exponent-dynks");var P=s.$("#exponent-normalized-dynks");function T(){return+M.innerHTML}function F(e){var n=Number(e);L({exponent:n})}$(M,T,F);function C(){return+P.innerHTML}function j(e){var n=Number(e);L({exponent:n+1023})}$(P,C,j);s.$(".toggle-details-button").addEventListener("click",function(){i.classList.toggle("expanded")},false);N()},"dom.js":function(e,n,t){var a=function(e){return[].slice.call(e)};var s=function(e,n){n=n||document;return n.querySelector(e)};var i=function(e,n){n=n||document;return a(n.querySelectorAll(e))};e.arrayify=a;e.$=s;e.$$=i;var r=window.Element.prototype;var o=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector||function(e){var n=this,t=(n.parentNode||n.document).querySelectorAll(e),a=-1;while(t[++a]&&t[a]!=n);return!!t[a]};e.matchesSelector=function(e,n){return o.call(e,n)}},"dynks.js":function(e,n,t){n.exports=function(e,n,t){e.classList.add("dynks-enabled");var a={gap:e.dataset.dynksGap||5,min:!isNaN(e.dataset.dynksMin)?+e.dataset.dynksMin:-Infinity,max:!isNaN(e.dataset.dynksMax)?+e.dataset.dynksMax:+Infinity};e.addEventListener("mousedown",function(s){var i=s.pageX;var r=Number(n());var o=0;function c(n){var s=(n.pageX-i)/a.gap;s=~~s;var c=s-o;if(c!==0){var l=1;if(n.shiftKey)l=10;var u=r+c*l;if(u<a.min){u=a.min;e.classList.add("dynks-out-of-range")}else if(u>a.max){u=a.max;e.classList.add("dynks-out-of-range")}else{e.classList.remove("dynks-out-of-range")}t(u);if(r!=u){r=u;o=s}}n.preventDefault()}function l(){e.classList.remove("dynks-active");e.classList.remove("dynks-out-of-range");document.documentElement.classList.remove("dynks-moving");document.removeEventListener("mousemove",c,false);document.removeEventListener("mouseup",l,false)}document.addEventListener("mousemove",c,false);document.addEventListener("mouseup",l,false);e.classList.add("dynks-active");document.documentElement.classList.add("dynks-moving");s.preventDefault()},false)}},"ieee754.js":function(e,n,t){function a(e){var n=new ArrayBuffer(8);new DataView(n).setFloat64(0,e,false);return[].slice.call(new Uint8Array(n))}function s(e){var n=new ArrayBuffer(8);new Uint8Array(n).set(e);return new DataView(n).getFloat64(0,false)}function i(e,n){n=n||8;for(e=e.toString(2);e.length<n;e="0"+e);return e}function r(e){return parseInt(e,2)}function o(e){return e.map(function(e){return i(e)}).join("")}function c(e){return o(a(e))}function l(e){return s(e.match(/.{8}/g).map(r))}function u(e){var n=o(a(e));var t=n.match(/^(.)(.{11})(.{52})$/);var s=t[1];var i=Math.pow(-1,parseInt(s,2));var r=t[2];var c=parseInt(r,2);var l=c-1023;var u=t[3];var f=c===0?"0":"1";return{value:e,bFull:s+r+f+u,bSign:s,bExponent:r,bHidden:f,bSignificand:u,sign:i,exponent:c,exponentNormalized:l}}n.exports={float64ToOctets:a,octetsToFloat64:s,intToBinaryString:i,binaryStringToInt:r,octetsToBinaryString:o,float64ToBinaryString:c,binaryStringToFloat64:l,toIEEE754Parsed:u}}}}})("numbers/src/bits");