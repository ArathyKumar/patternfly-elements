!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()}(0,function(){"use strict";var Ge="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};(function(){var e,t="undefined"!=typeof window&&window===this?this:void 0!==Ge&&null!=Ge?Ge:this,h={};function c(){this.end=this.start=0,this.rules=this.parent=this.previous=null,this.cssText=this.parsedCssText="",this.atRule=!1,this.type=0,this.parsedSelector=this.selector=this.keyframesName=""}function u(e){var t=f,n=e=e.replace(y,"").replace(S,""),r=new c;r.start=0,r.end=n.length;for(var o=r,s=0,i=n.length;s<i;s++)if("{"===n[s]){o.rules||(o.rules=[]);var a=o,l=a.rules[a.rules.length-1]||null;(o=new c).start=s+1,o.parent=a,o.previous=l,a.rules.push(o)}else"}"===n[s]&&(o.end=s+1,o=o.parent||r);return t(r,e)}function f(e,t){var n=t.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=n.trim(),e.parent&&(n=t.substring(e.previous?e.previous.end:e.parent.start,e.start-1),n=(n=(n=n.replace(/\\([0-9a-f]{1,6})\s/gi,function(e,t){for(t=6-(e=t).length;t--;)e="0"+e;return"\\"+e})).replace(a," ")).substring(n.lastIndexOf(";")+1),n=e.parsedSelector=e.selector=n.trim(),e.atRule=0===n.indexOf("@"),e.atRule?0===n.indexOf("@media")?e.type=p:n.match(i)&&(e.type=d,e.keyframesName=e.selector.split(a).pop()):e.type=0===n.indexOf("--")?m:l),n=e.rules)for(var r,o=0,s=n.length;o<s&&(r=n[o]);o++)f(r,t);return e}var l=1,d=7,p=4,m=1e3,y=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,S=/@import[^;]*;/gim,v=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,g=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,w=/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,b=/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,i=/^@[^\s]*keyframes/,a=/\s+/g,C=Promise.resolve();function n(e){(e=h[e])&&(e._applyShimCurrentVersion=e._applyShimCurrentVersion||0,e._applyShimValidatingVersion=e._applyShimValidatingVersion||0,e._applyShimNextVersion=(e._applyShimNextVersion||0)+1)}function x(e){return e._applyShimCurrentVersion===e._applyShimNextVersion}var r,k=!(window.ShadyDOM&&window.ShadyDOM.inUse);function o(e){r=(!e||!e.shimcssproperties)&&(k||!(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)||!window.CSS||!CSS.supports||!CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?r=window.ShadyCSS.nativeCss:window.ShadyCSS?(o(window.ShadyCSS),window.ShadyCSS=void 0):o(window.WebComponents&&window.WebComponents.flags);var _=r,N=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,O=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,T=/(--[\w-]+)\s*([:,;)]|$)/gi,A=/(animation\s*:)|(animation-name\s*:)/,E=/@media\s(.*)/,s=/\{[^}]*\}/g,V=new Set;function R(e,t){return e?("string"==typeof e&&(e=u(e)),t&&M(e,t),function e(t,n,r){r=void 0===r?"":r;var o="";if(t.cssText||t.rules){var s,i=t.rules;if((s=i)&&(s=!((s=i[0])&&s.selector&&0===s.selector.indexOf("--"))),s){s=0;for(var a,l=i.length;s<l&&(a=i[s]);s++)o=e(a,n,o)}else(o=(n=n?t.cssText:(n=(n=t.cssText).replace(v,"").replace(g,"")).replace(w,"").replace(b,"")).trim())&&(o="  "+o+"\n")}return o&&(t.selector&&(r+=t.selector+" {\n"),r+=o,t.selector&&(r+="}\n\n")),r}(e,_)):""}function j(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=u(e.textContent)),e.__cssRules||null}function I(e){return!!e.parent&&e.parent.type===d}function M(e,t,n,r){if(e){var o=!1,s=e.type;if(r&&s===p){var i=e.selector.match(E);i&&(window.matchMedia(i[1]).matches||(o=!0))}if(s===l?t(e):n&&s===d?n(e):s===m&&(o=!0),(e=e.rules)&&!o){o=0,s=e.length;for(var a;o<s&&(a=e[o]);o++)M(a,t,n,r)}}}function D(e,t,n,r){var o=document.createElement("style");return t&&o.setAttribute("scope",t),o.textContent=e,q(o,n,r),o}var P=null;function q(e,t,n){(t=t||document.head).insertBefore(e,n&&n.nextSibling||t.firstChild),P?e.compareDocumentPosition(P)===Node.DOCUMENT_POSITION_PRECEDING&&(P=e):P=e}function L(e,t){k?e.setAttribute("class",t):window.ShadyDOM.nativeMethods.setAttribute.call(e,"class",t)}function F(e){var t=e.localName,n="";return t?-1<t.indexOf("-")||(n=t,t=e.getAttribute&&e.getAttribute("is")||""):(t=e.is,n=e.extends),{is:t,s:n}}function $(){}function B(e,t,n){var r=fe;e.__styleScoped?e.__styleScoped=null:function e(t,n,r,o){n.nodeType===Node.ELEMENT_NODE&&W(n,r,o);if(n="template"===n.localName?(n.content||n.P).childNodes:n.children||n.childNodes)for(var s=0;s<n.length;s++)e(t,n[s],r,o)}(r,e,t||"",n)}function W(e,t,n){if(t)if(e.classList)n?(e.classList.remove("style-scope"),e.classList.remove(t)):(e.classList.add("style-scope"),e.classList.add(t));else if(e.getAttribute){var r=e.getAttribute(ue);n?r&&L(e,t=r.replace("style-scope","").replace(t,"")):L(e,(r?r+" ":"")+"style-scope "+t)}}function H(e,t,n){var r,o,s,i,a,l,c=fe,u=e.__cssBuild;return(t=k||"shady"===u?R(t,n):(e=F(e),r=c,o=t,s=e.is,i=e.s,a=n,l=G(s,i),s=s?le+s:"",R(o,function(e){e.c||(e.selector=e.g=K(r,e,r.b,s,l),e.c=!0),a&&a(e,s,l)})+"\n\n")).trim()}function G(e,t){return t?"[is="+e+"]":e}function K(e,t,n,r,o){var s=t.selector.split(Y);if(!I(t)){t=0;for(var i,a=s.length;t<a&&(i=s[t]);t++)s[t]=n.call(e,i,r,o)}return s.join(Y)}function U(e){return e.replace(Q,function(e,t,n){return-1<n.indexOf("+")?n=n.replace(/\+/g,"___"):-1<n.indexOf("___")&&(n=n.replace(/___/g,"+")),":"+t+"("+n+")"})}function J(e,t){return(e=e.split(ce))[0]+=t,e.join(ce)}function z(e){e.selector===ne&&(e.selector="html")}$.prototype.b=function(e,r,o){var s=!1;e=e.trim();var t=Q.test(e);return t&&(e=U(e=e.replace(Q,function(e,t,n){return":"+t+"("+n.replace(/\s/g,"")+")"}))),e=(e=e.replace(oe,te+" $1")).replace(Z,function(e,t,n){return s||(e=function(e,t,n,r){var o=e.indexOf(re);if(0<=e.indexOf(te)?(i=e,a=r,l=i.match(se),e=(l=l&&l[2].trim()||"")?l[0].match(ee)?i.replace(se,function(e,t,n){return a+n}):l.split(ee)[0]===a?l:he:i.replace(te,a)):0!==o&&(e=n?J(e,n):e),n=!1,0<=o&&(n=!(t="")),n){var s=!0;n&&(e=e.replace(ie,function(e,t){return" > "+t}))}var i,a,l;return{value:e=e.replace(ae,function(e,t,n){return'[dir="'+n+'"] '+t+", "+t+'[dir="'+n+'"]'}),G:t,stop:s}}(n,t,r,o),s=s||e.stop,t=e.G,n=e.value),t+n}),t&&(e=U(e)),e},$.prototype.c=function(e){return e.match(re)?this.b(e,X):J(e.trim(),X)},t.Object.defineProperties($.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return"style-scope"}}});var Q=/:(nth[-\w]+)\(([^)]+)\)/,X=":not(.style-scope)",Y=",",Z=/(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,ee=/[[.:#*]/,te=":host",ne=":root",re="::slotted",oe=new RegExp("^("+re+")"),se=/(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,ie=/(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,ae=/(.*):dir\((?:(ltr|rtl))\)/,le=".",ce=":",ue="class",he="should_not_match",fe=new $;function de(){}function pe(e){for(var t=0;t<e.length;t++){var n=e[t];if(n.target!==document.documentElement&&n.target!==document.head)for(var r=0;r<n.addedNodes.length;r++){var o=n.addedNodes[r];if(o.nodeType===Node.ELEMENT_NODE){var s=o.getRootNode(),i=o,a=[];if(i.classList?a=Array.from(i.classList):i instanceof window.SVGElement&&i.hasAttribute("class")&&(a=i.getAttribute("class").split(/\s+/)),(i=-1<(a=(i=a).indexOf(fe.a))?i[a+1]:"")&&s===o.ownerDocument)B(o,i,!0);else if(s.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(s=s.host))if(i===(s=F(s).is))for(o=window.ShadyDOM.nativeMethods.querySelectorAll.call(o,":not(."+fe.a+")"),s=0;s<o.length;s++)W(o[s],i);else i&&B(o,i,!0),B(o,s)}}}}if(!k){var me=new MutationObserver(pe),ye=function(e){me.observe(e,{childList:!0,subtree:!0})};if(window.customElements&&!window.customElements.polyfillWrapFlushCallback)ye(document);else{var Se=function(){ye(document.body)};window.HTMLImports?window.HTMLImports.whenReady(Se):requestAnimationFrame(function(){if("loading"===document.readyState){document.addEventListener("readystatechange",function e(){Se(),document.removeEventListener("readystatechange",e)})}else Se()})}de=function(){pe(me.takeRecords())}}var ve=de;function ge(e,t,n,r,o){this.j=e||null,this.b=t||null,this.A=n||[],this.o=null,this.s=o||"",this.a=this.h=this.m=null}function we(e){return e?e.__styleInfo:null}function be(e,t){return e.__styleInfo=t}function Ce(e){var t=this.matches||this.matchesSelector||this.mozMatchesSelector||this.msMatchesSelector||this.oMatchesSelector||this.webkitMatchesSelector;return t&&t.call(this,e)}ge.prototype._getStyleRules=ge.prototype.c=function(){return this.j};var xe=navigator.userAgent.match("Trident");function ke(){}function _e(e){if(!e.f){var t={},n={};Ne(e,n)&&(t.i=n,e.rules=null),t.cssText=e.parsedCssText.replace(s,"").replace(N,""),e.f=t}}function Ne(e,t){var n=e.f;if(!n){n=e.parsedCssText;for(var r;e=N.exec(n);)"inherit"===(r=(e[2]||e[3]).trim())&&"unset"===r||(t[e[1].trim()]=r),r=!0;return r}if(n.i)return Object.assign(t,n.i),!0}function Oe(o,e,s){return e&&(e=0<=e.indexOf(";")?Te(o,e,s):function e(t,n){var r=t.indexOf("var(");if(-1===r)return n(t,"","","");e:{for(var o=0,s=r+3,i=t.length;s<i;s++)if("("===t[s])o++;else if(")"===t[s]&&0==--o)break e;s=-1}return o=t.substring(r+4,s),r=t.substring(0,r),t=e(t.substring(s+1),n),-1===(s=o.indexOf(","))?n(r,o.trim(),"",t):n(r,o.substring(0,s).trim(),o.substring(s+1).trim(),t)}(e,function(e,t,n,r){return t?((t=Oe(o,s[t],s))&&"initial"!==t?"apply-shim-inherit"===t&&(t="inherit"):t=Oe(o,s[n]||n,s)||n,e+(t||"")+r):e+r})),e&&e.trim()||""}function Te(e,t,n){t=t.split(";");for(var r,o,s=0;s<t.length;s++)if(r=t[s]){if(O.lastIndex=0,o=O.exec(r))r=Oe(e,n[o[1]],n);else if(-1!==(o=r.indexOf(":"))){var i=r.substring(o);i=Oe(e,i=i.trim(),n)||i,r=r.substring(0,o)+i}t[s]=r&&r.lastIndexOf(";")===r.length-1?r.slice(0,-1):r||""}return t.join(";")}function Ae(n,e){var r={},o={},s=je,i=e&&e.__cssBuild;return M(e,function(t){!function(e,t,n,r,o){if(n.f||_e(n),n.f.i){e=(t=F(t)).is,t=t.s,t=e?G(e,t):"html";var s=n.parsedSelector,i=":host > *"===s||"html"===s,a=0===s.indexOf(":host")&&!i;"shady"===r&&(a=!(i=s===t+" > *."+t||-1!==s.indexOf("html"))&&0===s.indexOf(t)),"shadow"===r&&(i=":host > *"===s||"html"===s,a=a&&!i),(i||a)&&(r=t,a&&(n.g||(n.g=K(fe,n,fe.b,e?le+e:"",t)),r=n.g||t),o({L:r,J:a,R:i}))}}(s,n,t,i,function(e){Ce.call(n.w||n,e.L)&&(e.J?Ne(t,r):Ne(t,o))})},null,!0),{K:o,I:r}}function Ee(i,e,a,l){var t=F(e),c=G(t.is,t.s),u=new RegExp("(?:^|[^.#[:])"+(e.extends?"\\"+c.slice(0,-1)+"\\]":c)+"($|[.:[\\s>+~])"),h=function(e,t){e=e.b;var n={};if(!k&&e)for(var r=0,o=e[r];r<e.length;o=e[++r]){var s=o,i=t;s.l=new RegExp("\\b"+s.keyframesName+"(?!\\B|-)","g"),s.a=s.keyframesName+"-"+i,s.g=s.g||s.selector,s.selector=s.g.replace(s.keyframesName,s.a),n[o.keyframesName]=Ve(o)}return n}(t=we(e).j,l);return H(e,t,function(e){var t="";if(e.f||_e(e),e.f.cssText&&(t=Te(i,e.f.cssText,a)),e.cssText=t,!k&&!I(e)&&e.cssText){var n=t=e.cssText;if(null==e.B&&(e.B=A.test(t)),e.B)if(null==e.v)for(var r in e.v=[],h)t!==(n=(n=h[r])(t))&&(t=n,e.v.push(r));else{for(r=0;r<e.v.length;++r)t=(n=h[e.v[r]])(t);n=t}e.cssText=n,e.g=e.g||e.selector,t="."+l,n=0;for(var o,s=(r=e.g.split(",")).length;n<s&&(o=r[n]);n++)r[n]=o.match(u)?o.replace(c,t):t+" "+o;e.selector=r.join(",")}})}function Ve(t){return function(e){return e.replace(t.l,t.a)}}function Re(e,n){var r=je,t=j(e);e.textContent=R(t,function(e){var t=e.cssText=e.parsedCssText;e.f&&e.f.cssText&&(t=t.replace(v,"").replace(g,""),e.cssText=Te(r,t,n))})}t.Object.defineProperties(ke.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return"x-scope"}}});var je=new ke,Ie={},Me=window.customElements;if(Me&&!k){var De=Me.define;Me.define=function(e,t,n){var r=document.createComment(" Shady DOM styles for "+e+" "),o=document.head;o.insertBefore(r,(P?P.nextSibling:null)||o.firstChild),P=r,Ie[e]=r,De.call(Me,e,t,n)}}var Pe=new function(){this.cache={},this.a=100};function qe(){this.w={},this.c=document.documentElement;var e=new c;e.rules=[],this.l=be(this.c,new ge(e)),this.u=!1,this.b=this.a=null}function Le(e){var t;!e.a&&window.ShadyCSS&&window.ShadyCSS.ApplyShim&&(e.a=window.ShadyCSS.ApplyShim,e.a.invalidCallback=n),!(t=e).b&&window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface&&(t.b=window.ShadyCSS.CustomStyleInterface,t.b.transformCallback=function(e){t.C(e)},t.b.validateCallback=function(){requestAnimationFrame(function(){(t.b.enqueued||t.u)&&t.flushCustomStyles()})})}function Fe(e,t){return(t=t.getRootNode().host)?we(t)?t:Fe(e,t):e.c}function $e(e,t,n){var r=we(e=Fe(e,t));e=Object.create(r.m||null);var o,s,i,a,l=Ae(t,n.j);for(var c in t=(o=r.j,s=t,i={},a=[],M(o,function(e){e.f||_e(e);var t=e.g||e.parsedSelector;s&&e.f.i&&t&&Ce.call(s,t)&&(Ne(e,i),e=e.index,t=parseInt(e/32,10),a[t]=(a[t]||0)|1<<e%32)},null,!0),{i:i,key:a}).i,Object.assign(e,l.I,t,l.K),t=n.o)((l=t[c])||0===l)&&(e[c]=l);for(c=je,t=Object.getOwnPropertyNames(e),l=0;l<t.length;l++)e[r=t[l]]=Oe(c,e[r],e);n.m=e}(e=qe.prototype).D=function(){ve()},e.H=function(e){return j(e)},e.N=function(e){return R(e)},e.prepareTemplate=function(e,t,n){if(!e.l){e.l=!0,e.name=t,e.extends=n;for(var r=(r=(h[t]=e).content.querySelector("style"))&&r.getAttribute("css-build")||"",o=[],s=e.content.querySelectorAll("style"),i=0;i<s.length;i++){var a=s[i];if(a.hasAttribute("shady-unscoped")){if(!k){var l=a.textContent;V.has(l)||(V.add(l),l=a.cloneNode(!0),document.head.appendChild(l)),a.parentNode.removeChild(a)}}else o.push(a.textContent),a.parentNode.removeChild(a)}o=o.join("").trim(),n={is:t,extends:n,O:r},k||B(e.content,t),Le(this),s=O.test(o)||N.test(o),O.lastIndex=0,N.lastIndex=0,o=u(o),s&&_&&this.a&&this.a.transformRules(o,t),e._styleAst=o,e.u=r,r=[],_||(r=function(e){var r={},t=[],o=0;for(var n in M(e,function(e){_e(e),e.index=o++,e=e.f.cssText;for(var t;t=T.exec(e);){var n=t[1];":"!==t[2]&&(r[n]=!0)}},function(e){t.push(e)}),e.b=t,e=[],r)e.push(n);return e}(e._styleAst)),r.length&&!_||(o=k?e.content:null,t=Ie[t],t=(s=H(n,e._styleAst)).length?D(s,n.is,o,t):void 0,e.a=t),e.c=r}},e.flushCustomStyles=function(){if(Le(this),this.b){var e=this.b.processStyles();if(this.b.enqueued){if(_)for(var t=0;t<e.length;t++){var n=this.b.getStyleForCustomStyle(e[t]);if(n&&_&&this.a){var r=j(n);Le(this),this.a.transformRules(r),n.textContent=R(r)}}else for($e(this,this.c,this.l),t=0;t<e.length;t++)(n=this.b.getStyleForCustomStyle(e[t]))&&Re(n,this.l.m);this.b.enqueued=!1,this.u&&!_&&this.styleDocument()}}},e.styleElement=function(e,t){var n,r=F(e).is,o=we(e);if(!o){var s=F(e);o=s.is,s=s.s;var i=Ie[o];if(o=h[o])var a=o._styleAst,l=o.c;o=be(e,new ge(a,i,l,0,s))}if(e!==this.c&&(this.u=!0),t&&(o.o=o.o||{},Object.assign(o.o,t)),_){if(o.o)for(var c in t=o.o)null===c?e.style.removeProperty(c):e.style.setProperty(c,t[c]);((c=h[r])||e===this.c)&&c&&c.a&&!x(c)&&((x(c)||c._applyShimValidatingVersion!==c._applyShimNextVersion)&&(Le(this),this.a&&this.a.transformRules(c._styleAst,r),c.a.textContent=H(e,o.j),(n=c)._applyShimValidatingVersion=n._applyShimNextVersion,n.b||(n.b=!0,C.then(function(){n._applyShimCurrentVersion=n._applyShimNextVersion,n.b=!1}))),k&&(r=e.shadowRoot)&&(r.querySelector("style").textContent=H(e,o.j)),o.j=c._styleAst)}else if($e(this,e,o),o.A&&o.A.length){r=o,c=F(e).is;e:{if(t=Pe.cache[c])for(a=t.length-1;0<=a;a--){l=t[a];t:{for(o=r.A,s=0;s<o.length;s++)if(i=o[s],l.i[i]!==r.m[i]){o=!1;break t}o=!0}if(o){t=l;break e}}t=void 0}o=t?t.styleElement:null,a=r.h,(l=t&&t.h)||(l=c+"-"+(l=this.w[c]=(this.w[c]||0)+1)),r.h=l,l=r.h,s=je,s=o?o.textContent||"":Ee(s,e,r.m,l);var u=(i=we(e)).a;u&&!k&&u!==o&&(u._useCount--,u._useCount<=0&&u.parentNode&&u.parentNode.removeChild(u)),k?i.a?(i.a.textContent=s,o=i.a):s&&(o=D(s,l,e.shadowRoot,i.b)):o?o.parentNode||(xe&&-1<s.indexOf("@media")&&(o.textContent=s),q(o,null,i.b)):s&&(o=D(s,l,null,i.b)),o&&(o._useCount=o._useCount||0,i.a!=o&&o._useCount++,i.a=o),l=o,k||(o=r.h,i=s=e.getAttribute("class")||"",a&&(i=s.replace(new RegExp("\\s*x-scope\\s*"+a+"\\s*","g")," ")),s!==(i+=(i?" ":"")+"x-scope "+o)&&L(e,i)),t||((e=Pe.cache[c]||[]).push({i:r.m,styleElement:l,h:r.h}),e.length>Pe.a&&e.shift(),Pe.cache[c]=e)}},e.styleDocument=function(e){this.styleSubtree(this.c,e)},e.styleSubtree=function(e,t){var n=e.shadowRoot;if((n||e===this.c)&&this.styleElement(e,t),t=n&&(n.children||n.childNodes))for(e=0;e<t.length;e++)this.styleSubtree(t[e]);else if(e=e.children||e.childNodes)for(t=0;t<e.length;t++)this.styleSubtree(e[t])},e.C=function(e){var n=this,t=j(e);M(t,function(e){if(k)z(e);else{var t=fe;e.selector=e.parsedSelector,z(e),e.selector=e.g=K(t,e,t.c,void 0,void 0)}_&&(Le(n),n.a&&n.a.transformRule(e))}),_?e.textContent=R(t):this.l.j.rules.push(t)},e.getComputedStyleValue=function(e,t){var n;return _||(n=(we(e)||we(Fe(this,e))).m[t]),(n=n||window.getComputedStyle(e).getPropertyValue(t))?n.trim():""},e.M=function(e,t){var n=e.getRootNode();if(t=t?t.split(/\s/):[],!(n=n.host&&n.host.localName)){var r=e.getAttribute("class");if(r){r=r.split(/\s/);for(var o=0;o<r.length;o++)if(r[o]===fe.a){n=r[o+1];break}}}n&&t.push(fe.a,n),_||(n=we(e))&&n.h&&t.push(je.a,n.h),L(e,t.join(" "))},e.F=function(e){return we(e)},qe.prototype.flush=qe.prototype.D,qe.prototype.prepareTemplate=qe.prototype.prepareTemplate,qe.prototype.styleElement=qe.prototype.styleElement,qe.prototype.styleDocument=qe.prototype.styleDocument,qe.prototype.styleSubtree=qe.prototype.styleSubtree,qe.prototype.getComputedStyleValue=qe.prototype.getComputedStyleValue,qe.prototype.setElementClass=qe.prototype.M,qe.prototype._styleInfoForNode=qe.prototype.F,qe.prototype.transformCustomStyleForDocument=qe.prototype.C,qe.prototype.getStyleAst=qe.prototype.H,qe.prototype.styleAstToString=qe.prototype.N,qe.prototype.flushCustomStyles=qe.prototype.flushCustomStyles,Object.defineProperties(qe.prototype,{nativeShadow:{get:function(){return k}},nativeCss:{get:function(){return _}}});var Be,We,He=new qe;window.ShadyCSS&&(Be=window.ShadyCSS.ApplyShim,We=window.ShadyCSS.CustomStyleInterface),window.ShadyCSS={ScopingShim:He,prepareTemplate:function(e,t,n){He.flushCustomStyles(),He.prepareTemplate(e,t,n)},styleSubtree:function(e,t){He.flushCustomStyles(),He.styleSubtree(e,t)},styleElement:function(e){He.flushCustomStyles(),He.styleElement(e)},styleDocument:function(e){He.flushCustomStyles(),He.styleDocument(e)},flushCustomStyles:function(){He.flushCustomStyles()},getComputedStyleValue:function(e,t){return He.getComputedStyleValue(e,t)},nativeCss:_,nativeShadow:k},Be&&(window.ShadyCSS.ApplyShim=Be),We&&(window.ShadyCSS.CustomStyleInterface=We)}).call(Ge),function(){var o={};function c(){this.end=this.start=0,this.rules=this.parent=this.previous=null,this.cssText=this.parsedCssText="",this.atRule=!1,this.type=0,this.parsedSelector=this.selector=this.keyframesName=""}function t(e){var t=u,n=e=e.replace(p,"").replace(m,""),r=new c;r.start=0,r.end=n.length;for(var o=r,s=0,i=n.length;s<i;s++)if("{"===n[s]){o.rules||(o.rules=[]);var a=o,l=a.rules[a.rules.length-1]||null;(o=new c).start=s+1,o.parent=a,o.previous=l,a.rules.push(o)}else"}"===n[s]&&(o.end=s+1,o=o.parent||r);return t(r,e)}function u(e,t){var n=t.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=n.trim(),e.parent&&(n=t.substring(e.previous?e.previous.end:e.parent.start,e.start-1),n=(n=(n=n.replace(/\\([0-9a-f]{1,6})\s/gi,function(e,t){for(t=6-(e=t).length;t--;)e="0"+e;return"\\"+e})).replace(a," ")).substring(n.lastIndexOf(";")+1),n=e.parsedSelector=e.selector=n.trim(),e.atRule=0===n.indexOf("@"),e.atRule?0===n.indexOf("@media")?e.type=f:n.match(i)&&(e.type=h,e.keyframesName=e.selector.split(a).pop()):e.type=0===n.indexOf("--")?d:l),n=e.rules)for(var r,o=0,s=n.length;o<s&&(r=n[o]);o++)u(r,t);return e}var l=1,h=7,f=4,d=1e3,p=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,m=/@import[^;]*;/gim,y=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,S=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,v=/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,g=/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,i=/^@[^\s]*keyframes/,a=/\s+/g,s=Promise.resolve();function e(e){(e=o[e])&&(e._applyShimCurrentVersion=e._applyShimCurrentVersion||0,e._applyShimValidatingVersion=e._applyShimValidatingVersion||0,e._applyShimNextVersion=(e._applyShimNextVersion||0)+1)}function w(e){return e._applyShimCurrentVersion===e._applyShimNextVersion}var n,b=!(window.ShadyDOM&&window.ShadyDOM.inUse);function r(e){n=(!e||!e.shimcssproperties)&&(b||!(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)||!window.CSS||!CSS.supports||!CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?n=window.ShadyCSS.nativeCss:window.ShadyCSS?(r(window.ShadyCSS),window.ShadyCSS=void 0):r(window.WebComponents&&window.WebComponents.flags);var C=n,x=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,k=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,_=/@media\s(.*)/,N=new Set;function O(e){return e?("string"==typeof e&&(e=t(e)),function e(t,n,r){r=void 0===r?"":r;var o="";if(t.cssText||t.rules){var s,i=t.rules;if((s=i)&&(s=!((s=i[0])&&s.selector&&0===s.selector.indexOf("--"))),s){s=0;for(var a,l=i.length;s<l&&(a=i[s]);s++)o=e(a,n,o)}else(o=(n=n?t.cssText:(n=(n=t.cssText).replace(y,"").replace(S,"")).replace(v,"").replace(g,"")).trim())&&(o="  "+o+"\n")}return o&&(t.selector&&(r+=t.selector+" {\n"),r+=o,t.selector&&(r+="}\n\n")),r}(e,C)):""}function T(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=t(e.textContent)),e.__cssRules||null}function A(e,t,n,r){if(e){var o=!1,s=e.type;if(r&&s===f){var i=e.selector.match(_);i&&(window.matchMedia(i[1]).matches||(o=!0))}if(s===l?t(e):n&&s===h?n(e):s===d&&(o=!0),(e=e.rules)&&!o){o=0,s=e.length;for(var a;o<s&&(a=e[o]);o++)A(a,t,n,r)}}}var E=/;\s*/m,V=/^\s*(initial)|(inherit)\s*$/,R=/\s*!important/;function j(){this.a={}}j.prototype.set=function(e,t){e=e.trim(),this.a[e]={h:t,i:{}}},j.prototype.get=function(e){return e=e.trim(),this.a[e]||null};var I=null;function M(){this.b=this.c=null,this.a=new j}function D(e,t){for(var n;n=k.exec(t);){var r=n[0],o=n[1];n=n.index;var s=t.slice(0,n+r.indexOf("@apply"));t=t.slice(n+r.length);var i=P(e,s);r=void 0;var a=e;o=o.replace(E,"");var l=[],c=a.a.get(o);if(c||(a.a.set(o,{}),c=a.a.get(o)),c){a.c&&(c.i[a.c]=!0);var u=c.h;for(r in u)c=[r,": var(",o,"_-_",r],(a=i&&i[r])&&c.push(",",a.replace(R,"")),c.push(")"),R.test(u[r])&&c.push(" !important"),l.push(c.join(""))}t=""+s+(r=l.join("; "))+t,k.lastIndex=n+r.length}return t}function P(e,t){t=t.split(";");for(var n,r,o,s={},i=0;i<t.length;i++)if((n=t[i])&&1<(o=n.split(":")).length){var a=e;r=n=o[0].trim(),o=o.slice(1).join(":");var l=V.exec(o);l&&(o=r=l[1]?(a.b||(a.b=document.createElement("meta"),a.b.setAttribute("apply-shim-measure",""),a.b.style.all="initial",document.head.appendChild(a.b)),window.getComputedStyle(a.b).getPropertyValue(r)):"apply-shim-inherit"),r=o,s[n]=r}return s}M.prototype.o=function(e){return e=k.test(e)||x.test(e),k.lastIndex=0,x.lastIndex=0,e},M.prototype.m=function(e,t){if(void 0===e.a){for(var n=[],r=e.content.querySelectorAll("style"),o=0;o<r.length;o++){var s=r[o];if(s.hasAttribute("shady-unscoped")){if(!b){var i=s.textContent;N.has(i)||(N.add(i),i=s.cloneNode(!0),document.head.appendChild(i)),s.parentNode.removeChild(s)}}else n.push(s.textContent),s.parentNode.removeChild(s)}n=(n=n.join("").trim())?((r=document.createElement("style")).textContent=n,e.content.insertBefore(r,e.content.firstChild),r):null,e.a=n}return(e=e.a)?this.j(e,t):null},M.prototype.j=function(e,t){t=void 0===t?"":t;var n=T(e);return this.l(n,t),e.textContent=O(n),n},M.prototype.f=function(e){var t=this,n=T(e);return A(n,function(e){":root"===e.selector&&(e.selector="html"),t.g(e)}),e.textContent=O(n),n},M.prototype.l=function(e,t){var n=this;this.c=t,A(e,function(e){n.g(e)}),this.c=null},M.prototype.g=function(e){var o,t;e.cssText=(o=this,t=(t=e.parsedCssText).replace(x,function(e,t,n,r){return function(n,e,t,r,o){if(r&&function e(t,n){var r=t.indexOf("var(");if(-1===r)return n(t,"","","");e:{for(var o=0,s=r+3,i=t.length;s<i;s++)if("("===t[s])o++;else if(")"===t[s]&&0==--o)break e;s=-1}return o=t.substring(r+4,s),r=t.substring(0,r),t=e(t.substring(s+1),n),-1===(s=o.indexOf(","))?n(r,o.trim(),"",t):n(r,o.substring(0,s).trim(),o.substring(s+1).trim(),t)}(r,function(e,t){t&&n.a.get(t)&&(o="@apply "+t+";")}),!o)return e;var s=D(n,""+o),i=e.slice(0,e.indexOf("--")),a=s=P(n,s),l=n.a.get(t),c=l&&l.h;c?a=Object.assign(Object.create(c),s):n.a.set(t,a);var u,h=[],f=!1;for(u in a){var d=s[u];void 0===d&&(d="initial"),!c||u in c||(f=!0),h.push(t+"_-_"+u+": "+d)}return f&&function(e,t){if(I)for(var n in t.i)n!==e.c&&I(n)}(n,l),l&&(l.h=a),r&&(i=e+";"+i),""+i+h.join("; ")+";"}(o,e,t,n,r)}),D(o,t)),":root"===e.selector&&(e.selector=":host > *")},M.prototype.detectMixin=M.prototype.o,M.prototype.transformStyle=M.prototype.j,M.prototype.transformCustomStyle=M.prototype.f,M.prototype.transformRules=M.prototype.l,M.prototype.transformRule=M.prototype.g,M.prototype.transformTemplate=M.prototype.m,M.prototype._separator="_-_",Object.defineProperty(M.prototype,"invalidCallback",{get:function(){return I},set:function(e){I=e}});var q=new M;function L(){this.a=null,q.invalidCallback=e}function F(e){e.a||(e.a=window.ShadyCSS.CustomStyleInterface,e.a&&(e.a.transformCallback=function(e){q.f(e)},e.a.validateCallback=function(){requestAnimationFrame(function(){e.a.enqueued&&e.flushCustomStyles()})}))}if(L.prototype.prepareTemplate=function(e,t){F(this),o[t]=e,t=q.m(e,t),e._styleAst=t},L.prototype.flushCustomStyles=function(){if(F(this),this.a){var e=this.a.processStyles();if(this.a.enqueued){for(var t=0;t<e.length;t++){var n=this.a.getStyleForCustomStyle(e[t]);n&&q.f(n)}this.a.enqueued=!1}}},L.prototype.styleSubtree=function(e,t){if(F(this),t)for(var n in t)null===n?e.style.removeProperty(n):e.style.setProperty(n,t[n]);if(e.shadowRoot)for(this.styleElement(e),e=e.shadowRoot.children||e.shadowRoot.childNodes,t=0;t<e.length;t++)this.styleSubtree(e[t]);else for(e=e.children||e.childNodes,t=0;t<e.length;t++)this.styleSubtree(e[t])},L.prototype.styleElement=function(e){F(this);var t,n,r=e.localName;t=r?-1<r.indexOf("-")?r:e.getAttribute&&e.getAttribute("is")||"":e.is,(r=o[t])&&!w(r)&&((w(r)||r._applyShimValidatingVersion!==r._applyShimNextVersion)&&(this.prepareTemplate(r,t),(n=r)._applyShimValidatingVersion=n._applyShimNextVersion,n.b||(n.b=!0,s.then(function(){n._applyShimCurrentVersion=n._applyShimNextVersion,n.b=!1}))),(e=e.shadowRoot)&&(e=e.querySelector("style"))&&(e.__cssRules=r._styleAst,e.textContent=O(r._styleAst)))},L.prototype.styleDocument=function(e){F(this),this.styleSubtree(document.body,e)},!window.ShadyCSS||!window.ShadyCSS.ScopingShim){var $=new L,B=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate:function(e,t){$.flushCustomStyles(),$.prepareTemplate(e,t)},styleSubtree:function(e,t){$.flushCustomStyles(),$.styleSubtree(e,t)},styleElement:function(e){$.flushCustomStyles(),$.styleElement(e)},styleDocument:function(e){$.flushCustomStyles(),$.styleDocument(e)},getComputedStyleValue:function(e,t){return(e=window.getComputedStyle(e).getPropertyValue(t))?e.trim():""},flushCustomStyles:function(){$.flushCustomStyles()},nativeCss:C,nativeShadow:b},B&&(window.ShadyCSS.CustomStyleInterface=B)}window.ShadyCSS.ApplyShim=q}.call(void 0),function(){var t,n=!(window.ShadyDOM&&window.ShadyDOM.inUse);function e(e){t=(!e||!e.shimcssproperties)&&(n||!(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)||!window.CSS||!CSS.supports||!CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?t=window.ShadyCSS.nativeCss:window.ShadyCSS?(e(window.ShadyCSS),window.ShadyCSS=void 0):e(window.WebComponents&&window.WebComponents.flags);var r=t;function o(e,t){for(var n in t)null===n?e.style.removeProperty(n):e.style.setProperty(n,t[n])}var s,i=null,a=window.HTMLImports&&window.HTMLImports.whenReady||null;function l(e){requestAnimationFrame(function(){a?a(e):(i||(i=new Promise(function(e){s=e}),"complete"===document.readyState?s():document.addEventListener("readystatechange",function(){"complete"===document.readyState&&s()})),i.then(function(){e&&e()}))})}var c=null,u=null;function h(){this.customStyles=[],this.enqueued=!1,l(function(){window.ShadyCSS.flushCustomStyles()})}function f(e){!e.enqueued&&u&&(e.enqueued=!0,l(u))}h.prototype.c=function(e){e.__seenByShadyCSS||(e.__seenByShadyCSS=!0,this.customStyles.push(e),f(this))},h.prototype.b=function(e){return e.__shadyCSSCachedStyle?e.__shadyCSSCachedStyle:e.getStyle?e.getStyle():e},h.prototype.a=function(){for(var e=this.customStyles,t=0;t<e.length;t++){var n=e[t];if(!n.__shadyCSSCachedStyle){var r=this.b(n);r&&(r=r.__appliedElement||r,c&&c(r),n.__shadyCSSCachedStyle=r)}}return e},h.prototype.addCustomStyle=h.prototype.c,h.prototype.getStyleForCustomStyle=h.prototype.b,h.prototype.processStyles=h.prototype.a,Object.defineProperties(h.prototype,{transformCallback:{get:function(){return c},set:function(e){c=e}},validateCallback:{get:function(){return u},set:function(e){var t=!1;u||(t=!0),u=e,t&&f(this)}}});var d=new h;window.ShadyCSS||(window.ShadyCSS={prepareTemplate:function(){},styleSubtree:function(e,t){d.a(),o(e,t)},styleElement:function(){d.a()},styleDocument:function(e){d.a(),o(document.body,e)},getComputedStyleValue:function(e,t){return(e=window.getComputedStyle(e).getPropertyValue(t))?e.trim():""},flushCustomStyles:function(){},nativeCss:r,nativeShadow:n}),window.ShadyCSS.CustomStyleInterface=d}.call(void 0),function(){var e="cp-theme";if(!document.getElementById(e)){var t=document.createElement("div");t.setAttribute("style","display: none;"),t.setAttribute("id",e),t.innerHTML='<style id="'+e+'-style">:root {\n  --rh-theme--color--text: #333;\n  --rh-theme--color--text--on-dark: #fff;\n  --rh-theme--color--text--on-saturated: #fff;\n  --rh-theme--color--ui-link: #06c;\n  --rh-theme--color--ui-link--visited: #7551a6;\n  --rh-theme--color--ui-link--hover: #004080;\n  --rh-theme--color--ui-link--focus: #004080;\n  --rh-theme--color--ui-link--on-dark: #73bcf7;\n  --rh-theme--color--ui-link--on-dark--visited: #967abd;\n  --rh-theme--color--ui-link--on-dark--hover: #2b9af3;\n  --rh-theme--color--ui-link--on-dark--focus: #2b9af3;\n  --rh-theme--color--ui-link--on-saturated: #73bcf7;\n  --rh-theme--color--ui-link--on-saturated--visited: #967abd;\n  --rh-theme--color--ui-link--on-saturated--hover: #2b9af3;\n  --rh-theme--color--ui-link--on-saturated--focus: #2b9af3;\n  --rh-theme--color--ui-base: #0076e0;\n  --rh-theme--color--ui-base--hover: #004080;\n  --rh-theme--color--ui-base--text: #fff;\n  --rh-theme--color--ui-base--text--hover: #fff;\n  --rh-theme--color--ui-complement: #464646;\n  --rh-theme--color--ui-complement--hover: #1e1e1e;\n  --rh-theme--color--ui-complement--text: #fff;\n  --rh-theme--color--ui-complement--text--hover: #fff;\n  --rh-theme--color--ui-accent: #c00;\n  --rh-theme--color--ui-accent--hover: #820000;\n  --rh-theme--color--ui-accent--text: #fff;\n  --rh-theme--color--ui-accent--text--hover: #fff;\n  --rh-theme--color--ui-disabled: #d2d2d2;\n  --rh-theme--color--ui-disabled--hover: #d2d2d2;\n  --rh-theme--color--ui-disabled--text: #aaa;\n  --rh-theme--color--ui-disabled--text--hover: #aaa;\n  --rh-theme--color--surface--lightest: #fff;\n  --rh-theme--color--surface--lightest--text: #333;\n  --rh-theme--color--surface--lightest--link: #06c;\n  --rh-theme--color--surface--lightest--link--visited: #7551a6;\n  --rh-theme--color--surface--lightest--link--hover: #004080;\n  --rh-theme--color--surface--lightest--link--focus: #004080;\n  --rh-theme--color--surface--lighter: #f0f0f0;\n  --rh-theme--color--surface--lighter--text: #333;\n  --rh-theme--color--surface--lighter--link: #06c;\n  --rh-theme--color--surface--lighter--link--visited: #7551a6;\n  --rh-theme--color--surface--lighter--link--hover: #004080;\n  --rh-theme--color--surface--lighter--link--focus: #004080;\n  --rh-theme--color--surface--base: #d2d2d2;\n  --rh-theme--color--surface--base--text: #333;\n  --rh-theme--color--surface--base--link: #06c;\n  --rh-theme--color--surface--base--link--visited: #7551a6;\n  --rh-theme--color--surface--base--link--hover: #004080;\n  --rh-theme--color--surface--base--link--focus: #004080;\n  --rh-theme--color--surface--darker: #464646;\n  --rh-theme--color--surface--darker--text: #fff;\n  --rh-theme--color--surface--darker--link: #73bcf7;\n  --rh-theme--color--surface--darker--link--visited: #967abd;\n  --rh-theme--color--surface--darker--link--hover: #2b9af3;\n  --rh-theme--color--surface--darker--link--focus: #2b9af3;\n  --rh-theme--color--surface--darkest: #1e1e1e;\n  --rh-theme--color--surface--darkest--text: #fff;\n  --rh-theme--color--surface--darkest--link: #73bcf7;\n  --rh-theme--color--surface--darkest--link--visited: #967abd;\n  --rh-theme--color--surface--darkest--link--hover: #2b9af3;\n  --rh-theme--color--surface--darkest--link--focus: #2b9af3;\n  --rh-theme--color--surface--complement: #264a60;\n  --rh-theme--color--surface--complement--text: #fff;\n  --rh-theme--color--surface--complement--link: #fff;\n  --rh-theme--color--surface--complement--link--visited: #fff;\n  --rh-theme--color--surface--complement--link--hover: #e6e6e6;\n  --rh-theme--color--surface--complement--link--focus: #e6e6e6;\n  --rh-theme--color--surface--accent: #c00;\n  --rh-theme--color--surface--accent--text: #fff;\n  --rh-theme--color--surface--accent--link: #fff;\n  --rh-theme--color--surface--accent--link--visited: #fff;\n  --rh-theme--color--surface--accent--link--hover: #e6e6e6;\n  --rh-theme--color--surface--accent--link--focus: #e6e6e6;\n  --rh-theme--color--surface--border: #ccc;\n  --rh-theme--color--surface--border--lightest: #e7e7e7;\n  --rh-theme--color--surface--border--darkest: #333;\n  --rh-theme--color--feedback--critical: #f44336;\n  --rh-theme--color--feedback--critical--lightest: #ffebee;\n  --rh-theme--color--feedback--critical--darkest: #b71c1c;\n  --rh-theme--color--feedback--important: #ff5722;\n  --rh-theme--color--feedback--important--lightest: #fbe9e7;\n  --rh-theme--color--feedback--important--darkest: #bf360c;\n  --rh-theme--color--feedback--moderate: #ff8f00;\n  --rh-theme--color--feedback--moderate--lightest: #fff8e1;\n  --rh-theme--color--feedback--moderate--darkest: #bd5200;\n  --rh-theme--color--feedback--success: #2e7d32;\n  --rh-theme--color--feedback--success--lightest: #e8f5e9;\n  --rh-theme--color--feedback--success--darkest: #1b5e20;\n  --rh-theme--color--feedback--info: #0277bd;\n  --rh-theme--color--feedback--info--lightest: #e1f5fe;\n  --rh-theme--color--feedback--info--darkest: #01579b;\n  --rh-theme--color--feedback--default: #606060;\n  --rh-theme--color--feedback--default--lightest: #dfdfdf;\n  --rh-theme--color--feedback--default--darkest: #464646; }</style>',document.head.appendChild(t),window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface.addCustomStyle(document.querySelector("#"+e+"-style"))}}()});
//# sourceMappingURL=cp-theme.umd.js.map
