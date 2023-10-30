(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/*!
* reveal.js 4.6.0
* https://revealjs.com
* MIT licensed
*
* Copyright (C) 2011-2023 Hakim El Hattab, https://hakim.se
*/const jt=(g,t)=>{for(let e in t)g[e]=t[e];return g},B=(g,t)=>Array.from(g.querySelectorAll(t)),me=(g,t,e)=>{e?g.classList.add(t):g.classList.remove(t)},Bt=g=>{if(typeof g=="string"){if(g==="null")return null;if(g==="true")return!0;if(g==="false")return!1;if(g.match(/^-?[\d\.]+$/))return parseFloat(g)}return g},Pt=(g,t)=>{g.style.transform=t},ae=(g,t)=>{let e=g.matches||g.matchesSelector||g.msMatchesSelector;return!(!e||!e.call(g,t))},ht=(g,t)=>{if(typeof g.closest=="function")return g.closest(t);for(;g;){if(ae(g,t))return g;g=g.parentNode}return null},In=(g,t,e,n="")=>{let i=g.querySelectorAll("."+e);for(let l=0;l<i.length;l++){let h=i[l];if(h.parentNode===g)return h}let o=document.createElement(t);return o.className=e,o.innerHTML=n,g.appendChild(o),o},be=g=>{let t=document.createElement("style");return t.type="text/css",g&&g.length>0&&(t.styleSheet?t.styleSheet.cssText=g:t.appendChild(document.createTextNode(g))),document.head.appendChild(t),t},Ve=()=>{let g={};location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi,t=>{g[t.split("=").shift()]=t.split("=").pop()});for(let t in g){let e=g[t];g[t]=Bt(unescape(e))}return g.dependencies!==void 0&&delete g.dependencies,g},Dn=(g,t=0)=>{if(g){let e,n=g.style.height;return g.style.height="0px",g.parentNode.style.height="auto",e=t-g.parentNode.offsetHeight,g.style.height=n+"px",g.parentNode.style.removeProperty("height"),e}return t},On={mp4:"video/mp4",m4a:"video/mp4",ogv:"video/ogg",mpeg:"video/mpeg",webm:"video/webm"},cn=navigator.userAgent,Ut=/(iphone|ipod|ipad|android)/gi.test(cn)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,dn=/android/gi.test(cn);var hn={};Object.defineProperty(hn,"__esModule",{value:!0});var Ze=Object.assign||function(g){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(g[n]=e[n])}return g},qn=hn.default=function(g){if(g){var t=function(S){return[].slice.call(S)},e=0,n=1,i=2,o=3,l=[],h=null,c="requestAnimationFrame"in g?function(){g.cancelAnimationFrame(h),h=g.requestAnimationFrame(function(){return v(l.filter(function(S){return S.dirty&&S.active}))})}:function(){},k=function(S){return function(){l.forEach(function(T){return T.dirty=S}),c()}},v=function(S){S.filter(function(C){return!C.styleComputed}).forEach(function(C){C.styleComputed=u(C)}),S.filter(L).forEach(I);var T=S.filter(w);T.forEach(f),T.forEach(function(C){I(C),m(C)}),T.forEach($)},m=function(S){return S.dirty=e},f=function(S){S.availableWidth=S.element.parentNode.clientWidth,S.currentWidth=S.element.scrollWidth,S.previousFontSize=S.currentFontSize,S.currentFontSize=Math.min(Math.max(S.minSize,S.availableWidth/S.currentWidth*S.previousFontSize),S.maxSize),S.whiteSpace=S.multiLine&&S.currentFontSize===S.minSize?"normal":"nowrap"},w=function(S){return S.dirty!==i||S.dirty===i&&S.element.parentNode.clientWidth!==S.availableWidth},u=function(S){var T=g.getComputedStyle(S.element,null);S.currentFontSize=parseFloat(T.getPropertyValue("font-size")),S.display=T.getPropertyValue("display"),S.whiteSpace=T.getPropertyValue("white-space")},L=function(S){var T=!1;return!S.preStyleTestCompleted&&(/inline-/.test(S.display)||(T=!0,S.display="inline-block"),S.whiteSpace!=="nowrap"&&(T=!0,S.whiteSpace="nowrap"),S.preStyleTestCompleted=!0,T)},I=function(S){S.element.style.whiteSpace=S.whiteSpace,S.element.style.display=S.display,S.element.style.fontSize=S.currentFontSize+"px"},$=function(S){S.element.dispatchEvent(new CustomEvent("fit",{detail:{oldValue:S.previousFontSize,newValue:S.currentFontSize,scaleFactor:S.currentFontSize/S.previousFontSize}}))},Z=function(S,T){return function(){S.dirty=T,S.active&&c()}},F=function(S){return function(){l=l.filter(function(T){return T.element!==S.element}),S.observeMutations&&S.observer.disconnect(),S.element.style.whiteSpace=S.originalStyle.whiteSpace,S.element.style.display=S.originalStyle.display,S.element.style.fontSize=S.originalStyle.fontSize}},H=function(S){return function(){S.active||(S.active=!0,c())}},J=function(S){return function(){return S.active=!1}},O=function(S){S.observeMutations&&(S.observer=new MutationObserver(Z(S,n)),S.observer.observe(S.element,S.observeMutations))},tt={minSize:16,maxSize:512,multiLine:!0,observeMutations:"MutationObserver"in g&&{subtree:!0,childList:!0,characterData:!0}},Y=null,U=function(){g.clearTimeout(Y),Y=g.setTimeout(k(i),ct.observeWindowDelay)},G=["resize","orientationchange"];return Object.defineProperty(ct,"observeWindow",{set:function(S){var T=(S?"add":"remove")+"EventListener";G.forEach(function(C){g[T](C,U)})}}),ct.observeWindow=!0,ct.observeWindowDelay=100,ct.fitAll=k(o),ct}function nt(S,T){var C=Ze({},tt,T),gt=S.map(function(ut){var at=Ze({},C,{element:ut,active:!0});return function(pt){pt.originalStyle={whiteSpace:pt.element.style.whiteSpace,display:pt.element.style.display,fontSize:pt.element.style.fontSize},O(pt),pt.newbie=!0,pt.dirty=!0,l.push(pt)}(at),{element:ut,fit:Z(at,o),unfreeze:H(at),freeze:J(at),unsubscribe:F(at)}});return c(),gt}function ct(S){var T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return typeof S=="string"?nt(t(document.querySelectorAll(S)),T):nt([S],T)[0]}}(typeof window>"u"?null:window);let Hn=class{constructor(t){this.Reveal=t,this.startEmbeddedIframe=this.startEmbeddedIframe.bind(this)}shouldPreload(t){let e=this.Reveal.getConfig().preloadIframes;return typeof e!="boolean"&&(e=t.hasAttribute("data-preload")),e}load(t,e={}){t.style.display=this.Reveal.getConfig().display,B(t,"img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach(i=>{(i.tagName!=="IFRAME"||this.shouldPreload(i))&&(i.setAttribute("src",i.getAttribute("data-src")),i.setAttribute("data-lazy-loaded",""),i.removeAttribute("data-src"))}),B(t,"video, audio").forEach(i=>{let o=0;B(i,"source[data-src]").forEach(l=>{l.setAttribute("src",l.getAttribute("data-src")),l.removeAttribute("data-src"),l.setAttribute("data-lazy-loaded",""),o+=1}),Ut&&i.tagName==="VIDEO"&&i.setAttribute("playsinline",""),o>0&&i.load()});let n=t.slideBackgroundElement;if(n){n.style.display="block";let i=t.slideBackgroundContentElement,o=t.getAttribute("data-background-iframe");if(n.hasAttribute("data-loaded")===!1){n.setAttribute("data-loaded","true");let h=t.getAttribute("data-background-image"),c=t.getAttribute("data-background-video"),k=t.hasAttribute("data-background-video-loop"),v=t.hasAttribute("data-background-video-muted");if(h)/^data:/.test(h.trim())?i.style.backgroundImage=`url(${h.trim()})`:i.style.backgroundImage=h.split(",").map(m=>`url(${((f="")=>encodeURI(f).replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/[!'()*]/g,w=>`%${w.charCodeAt(0).toString(16).toUpperCase()}`))(decodeURI(m.trim()))})`).join(",");else if(c&&!this.Reveal.isSpeakerNotes()){let m=document.createElement("video");k&&m.setAttribute("loop",""),v&&(m.muted=!0),Ut&&(m.muted=!0,m.setAttribute("playsinline","")),c.split(",").forEach(f=>{let w=((u="")=>On[u.split(".").pop()])(f);m.innerHTML+=w?`<source src="${f}" type="${w}">`:`<source src="${f}">`}),i.appendChild(m)}else if(o&&e.excludeIframes!==!0){let m=document.createElement("iframe");m.setAttribute("allowfullscreen",""),m.setAttribute("mozallowfullscreen",""),m.setAttribute("webkitallowfullscreen",""),m.setAttribute("allow","autoplay"),m.setAttribute("data-src",o),m.style.width="100%",m.style.height="100%",m.style.maxHeight="100%",m.style.maxWidth="100%",i.appendChild(m)}}let l=i.querySelector("iframe[data-src]");l&&this.shouldPreload(n)&&!/autoplay=(1|true|yes)/gi.test(o)&&l.getAttribute("src")!==o&&l.setAttribute("src",o)}this.layout(t)}layout(t){Array.from(t.querySelectorAll(".r-fit-text")).forEach(e=>{qn(e,{minSize:24,maxSize:.8*this.Reveal.getConfig().height,observeMutations:!1,observeWindow:!1})})}unload(t){t.style.display="none";let e=this.Reveal.getSlideBackground(t);e&&(e.style.display="none",B(e,"iframe[src]").forEach(n=>{n.removeAttribute("src")})),B(t,"video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach(n=>{n.setAttribute("data-src",n.getAttribute("src")),n.removeAttribute("src")}),B(t,"video[data-lazy-loaded] source[src], audio source[src]").forEach(n=>{n.setAttribute("data-src",n.getAttribute("src")),n.removeAttribute("src")})}formatEmbeddedContent(){let t=(e,n,i)=>{B(this.Reveal.getSlidesElement(),"iframe["+e+'*="'+n+'"]').forEach(o=>{let l=o.getAttribute(e);l&&l.indexOf(i)===-1&&o.setAttribute(e,l+(/\?/.test(l)?"&":"?")+i)})};t("src","youtube.com/embed/","enablejsapi=1"),t("data-src","youtube.com/embed/","enablejsapi=1"),t("src","player.vimeo.com/","api=1"),t("data-src","player.vimeo.com/","api=1")}startEmbeddedContent(t){t&&!this.Reveal.isSpeakerNotes()&&(B(t,'img[src$=".gif"]').forEach(e=>{e.setAttribute("src",e.getAttribute("src"))}),B(t,"video, audio").forEach(e=>{if(ht(e,".fragment")&&!ht(e,".fragment.visible"))return;let n=this.Reveal.getConfig().autoPlayMedia;if(typeof n!="boolean"&&(n=e.hasAttribute("data-autoplay")||!!ht(e,".slide-background")),n&&typeof e.play=="function")if(e.readyState>1)this.startEmbeddedMedia({target:e});else if(Ut){let i=e.play();i&&typeof i.catch=="function"&&e.controls===!1&&i.catch(()=>{e.controls=!0,e.addEventListener("play",()=>{e.controls=!1})})}else e.removeEventListener("loadeddata",this.startEmbeddedMedia),e.addEventListener("loadeddata",this.startEmbeddedMedia)}),B(t,"iframe[src]").forEach(e=>{ht(e,".fragment")&&!ht(e,".fragment.visible")||this.startEmbeddedIframe({target:e})}),B(t,"iframe[data-src]").forEach(e=>{ht(e,".fragment")&&!ht(e,".fragment.visible")||e.getAttribute("src")!==e.getAttribute("data-src")&&(e.removeEventListener("load",this.startEmbeddedIframe),e.addEventListener("load",this.startEmbeddedIframe),e.setAttribute("src",e.getAttribute("data-src")))}))}startEmbeddedMedia(t){let e=!!ht(t.target,"html"),n=!!ht(t.target,".present");e&&n&&(t.target.currentTime=0,t.target.play()),t.target.removeEventListener("loadeddata",this.startEmbeddedMedia)}startEmbeddedIframe(t){let e=t.target;if(e&&e.contentWindow){let n=!!ht(t.target,"html"),i=!!ht(t.target,".present");if(n&&i){let o=this.Reveal.getConfig().autoPlayMedia;typeof o!="boolean"&&(o=e.hasAttribute("data-autoplay")||!!ht(e,".slide-background")),/youtube\.com\/embed\//.test(e.getAttribute("src"))&&o?e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"):/player\.vimeo\.com\//.test(e.getAttribute("src"))&&o?e.contentWindow.postMessage('{"method":"play"}',"*"):e.contentWindow.postMessage("slide:start","*")}}}stopEmbeddedContent(t,e={}){e=jt({unloadIframes:!0},e),t&&t.parentNode&&(B(t,"video, audio").forEach(n=>{n.hasAttribute("data-ignore")||typeof n.pause!="function"||(n.setAttribute("data-paused-by-reveal",""),n.pause())}),B(t,"iframe").forEach(n=>{n.contentWindow&&n.contentWindow.postMessage("slide:stop","*"),n.removeEventListener("load",this.startEmbeddedIframe)}),B(t,'iframe[src*="youtube.com/embed/"]').forEach(n=>{!n.hasAttribute("data-ignore")&&n.contentWindow&&typeof n.contentWindow.postMessage=="function"&&n.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}),B(t,'iframe[src*="player.vimeo.com/"]').forEach(n=>{!n.hasAttribute("data-ignore")&&n.contentWindow&&typeof n.contentWindow.postMessage=="function"&&n.contentWindow.postMessage('{"method":"pause"}',"*")}),e.unloadIframes===!0&&B(t,"iframe[data-src]").forEach(n=>{n.setAttribute("src","about:blank"),n.removeAttribute("src")}))}},Bn=class{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="slide-number",this.Reveal.getRevealElement().appendChild(this.element)}configure(t,e){let n="none";t.slideNumber&&!this.Reveal.isPrintingPDF()&&(t.showSlideNumber==="all"||t.showSlideNumber==="speaker"&&this.Reveal.isSpeakerNotes())&&(n="block"),this.element.style.display=n}update(){this.Reveal.getConfig().slideNumber&&this.element&&(this.element.innerHTML=this.getSlideNumber())}getSlideNumber(t=this.Reveal.getCurrentSlide()){let e,n=this.Reveal.getConfig(),i="h.v";if(typeof n.slideNumber=="function")e=n.slideNumber(t);else{typeof n.slideNumber=="string"&&(i=n.slideNumber),/c/.test(i)||this.Reveal.getHorizontalSlides().length!==1||(i="c");let l=t&&t.dataset.visibility==="uncounted"?0:1;switch(e=[],i){case"c":e.push(this.Reveal.getSlidePastCount(t)+l);break;case"c/t":e.push(this.Reveal.getSlidePastCount(t)+l,"/",this.Reveal.getTotalSlides());break;default:let h=this.Reveal.getIndices(t);e.push(h.h+l);let c=i==="h/v"?"/":".";this.Reveal.isVerticalSlide(t)&&e.push(c,h.v+1)}}let o="#"+this.Reveal.location.getHash(t);return this.formatNumber(e[0],e[1],e[2],o)}formatNumber(t,e,n,i="#"+this.Reveal.location.getHash()){return typeof n!="number"||isNaN(n)?`<a href="${i}">
					<span class="slide-number-a">${t}</span>
					</a>`:`<a href="${i}">
					<span class="slide-number-a">${t}</span>
					<span class="slide-number-delimiter">${e}</span>
					<span class="slide-number-b">${n}</span>
					</a>`}destroy(){this.element.remove()}},jn=class{constructor(t){this.Reveal=t,this.onInput=this.onInput.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this)}render(){this.element=document.createElement("div"),this.element.className="jump-to-slide",this.jumpInput=document.createElement("input"),this.jumpInput.type="text",this.jumpInput.className="jump-to-slide-input",this.jumpInput.placeholder="Jump to slide",this.jumpInput.addEventListener("input",this.onInput),this.jumpInput.addEventListener("keydown",this.onKeyDown),this.jumpInput.addEventListener("blur",this.onBlur),this.element.appendChild(this.jumpInput)}show(){this.indicesOnShow=this.Reveal.getIndices(),this.Reveal.getRevealElement().appendChild(this.element),this.jumpInput.focus()}hide(){this.isVisible()&&(this.element.remove(),this.jumpInput.value="",clearTimeout(this.jumpTimeout),delete this.jumpTimeout)}isVisible(){return!!this.element.parentNode}jump(){clearTimeout(this.jumpTimeout),delete this.jumpTimeout;const t=this.jumpInput.value.trim("");let e=this.Reveal.location.getIndicesFromHash(t,{oneBasedIndex:!0});return!e&&/\S+/i.test(t)&&t.length>1&&(e=this.search(t)),e&&t!==""?(this.Reveal.slide(e.h,e.v,e.f),!0):(this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),!1)}jumpAfter(t){clearTimeout(this.jumpTimeout),this.jumpTimeout=setTimeout(()=>this.jump(),t)}search(t){const e=new RegExp("\\b"+t.trim()+"\\b","i"),n=this.Reveal.getSlides().find(i=>e.test(i.innerText));return n?this.Reveal.getIndices(n):null}cancel(){this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),this.hide()}confirm(){this.jump(),this.hide()}destroy(){this.jumpInput.removeEventListener("input",this.onInput),this.jumpInput.removeEventListener("keydown",this.onKeyDown),this.jumpInput.removeEventListener("blur",this.onBlur),this.element.remove()}onKeyDown(t){t.keyCode===13?this.confirm():t.keyCode===27&&(this.cancel(),t.stopImmediatePropagation())}onInput(t){this.jumpAfter(200)}onBlur(){setTimeout(()=>this.hide(),1)}};const fe=g=>{let t=g.match(/^#([0-9a-f]{3})$/i);if(t&&t[1])return t=t[1],{r:17*parseInt(t.charAt(0),16),g:17*parseInt(t.charAt(1),16),b:17*parseInt(t.charAt(2),16)};let e=g.match(/^#([0-9a-f]{6})$/i);if(e&&e[1])return e=e[1],{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)};let n=g.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);if(n)return{r:parseInt(n[1],10),g:parseInt(n[2],10),b:parseInt(n[3],10)};let i=g.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);return i?{r:parseInt(i[1],10),g:parseInt(i[2],10),b:parseInt(i[3],10),a:parseFloat(i[4])}:null};let Un=class{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="backgrounds",this.Reveal.getRevealElement().appendChild(this.element)}create(){this.element.innerHTML="",this.element.classList.add("no-transition"),this.Reveal.getHorizontalSlides().forEach(t=>{let e=this.createBackground(t,this.element);B(t,"section").forEach(n=>{this.createBackground(n,e),e.classList.add("stack")})}),this.Reveal.getConfig().parallaxBackgroundImage?(this.element.style.backgroundImage='url("'+this.Reveal.getConfig().parallaxBackgroundImage+'")',this.element.style.backgroundSize=this.Reveal.getConfig().parallaxBackgroundSize,this.element.style.backgroundRepeat=this.Reveal.getConfig().parallaxBackgroundRepeat,this.element.style.backgroundPosition=this.Reveal.getConfig().parallaxBackgroundPosition,setTimeout(()=>{this.Reveal.getRevealElement().classList.add("has-parallax-background")},1)):(this.element.style.backgroundImage="",this.Reveal.getRevealElement().classList.remove("has-parallax-background"))}createBackground(t,e){let n=document.createElement("div");n.className="slide-background "+t.className.replace(/present|past|future/,"");let i=document.createElement("div");return i.className="slide-background-content",n.appendChild(i),e.appendChild(n),t.slideBackgroundElement=n,t.slideBackgroundContentElement=i,this.sync(t),n}sync(t){const e=t.slideBackgroundElement,n=t.slideBackgroundContentElement,i={background:t.getAttribute("data-background"),backgroundSize:t.getAttribute("data-background-size"),backgroundImage:t.getAttribute("data-background-image"),backgroundVideo:t.getAttribute("data-background-video"),backgroundIframe:t.getAttribute("data-background-iframe"),backgroundColor:t.getAttribute("data-background-color"),backgroundGradient:t.getAttribute("data-background-gradient"),backgroundRepeat:t.getAttribute("data-background-repeat"),backgroundPosition:t.getAttribute("data-background-position"),backgroundTransition:t.getAttribute("data-background-transition"),backgroundOpacity:t.getAttribute("data-background-opacity")},o=t.hasAttribute("data-preload");t.classList.remove("has-dark-background"),t.classList.remove("has-light-background"),e.removeAttribute("data-loaded"),e.removeAttribute("data-background-hash"),e.removeAttribute("data-background-size"),e.removeAttribute("data-background-transition"),e.style.backgroundColor="",n.style.backgroundSize="",n.style.backgroundRepeat="",n.style.backgroundPosition="",n.style.backgroundImage="",n.style.opacity="",n.innerHTML="",i.background&&(/^(http|file|\/\/)/gi.test(i.background)||/\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(i.background)?t.setAttribute("data-background-image",i.background):e.style.background=i.background),(i.background||i.backgroundColor||i.backgroundGradient||i.backgroundImage||i.backgroundVideo||i.backgroundIframe)&&e.setAttribute("data-background-hash",i.background+i.backgroundSize+i.backgroundImage+i.backgroundVideo+i.backgroundIframe+i.backgroundColor+i.backgroundGradient+i.backgroundRepeat+i.backgroundPosition+i.backgroundTransition+i.backgroundOpacity),i.backgroundSize&&e.setAttribute("data-background-size",i.backgroundSize),i.backgroundColor&&(e.style.backgroundColor=i.backgroundColor),i.backgroundGradient&&(e.style.backgroundImage=i.backgroundGradient),i.backgroundTransition&&e.setAttribute("data-background-transition",i.backgroundTransition),o&&e.setAttribute("data-preload",""),i.backgroundSize&&(n.style.backgroundSize=i.backgroundSize),i.backgroundRepeat&&(n.style.backgroundRepeat=i.backgroundRepeat),i.backgroundPosition&&(n.style.backgroundPosition=i.backgroundPosition),i.backgroundOpacity&&(n.style.opacity=i.backgroundOpacity);let l=i.backgroundColor;if(!l||!fe(l)){let c=window.getComputedStyle(e);c&&c.backgroundColor&&(l=c.backgroundColor)}if(l){const c=fe(l);c&&c.a!==0&&(typeof(h=l)=="string"&&(h=fe(h)),(h?(299*h.r+587*h.g+114*h.b)/1e3:null)<128?t.classList.add("has-dark-background"):t.classList.add("has-light-background"))}var h}update(t=!1){let e=this.Reveal.getCurrentSlide(),n=this.Reveal.getIndices(),i=null,o=this.Reveal.getConfig().rtl?"future":"past",l=this.Reveal.getConfig().rtl?"past":"future";if(Array.from(this.element.childNodes).forEach((h,c)=>{h.classList.remove("past","present","future"),c<n.h?h.classList.add(o):c>n.h?h.classList.add(l):(h.classList.add("present"),i=h),(t||c===n.h)&&B(h,".slide-background").forEach((k,v)=>{k.classList.remove("past","present","future"),v<n.v?k.classList.add("past"):v>n.v?k.classList.add("future"):(k.classList.add("present"),c===n.h&&(i=k))})}),this.previousBackground&&this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground,{unloadIframes:!this.Reveal.slideContent.shouldPreload(this.previousBackground)}),i){this.Reveal.slideContent.startEmbeddedContent(i);let h=i.querySelector(".slide-background-content");if(h){let v=h.style.backgroundImage||"";/\.gif/i.test(v)&&(h.style.backgroundImage="",window.getComputedStyle(h).opacity,h.style.backgroundImage=v)}let c=this.previousBackground?this.previousBackground.getAttribute("data-background-hash"):null,k=i.getAttribute("data-background-hash");k&&k===c&&i!==this.previousBackground&&this.element.classList.add("no-transition"),this.previousBackground=i}e&&["has-light-background","has-dark-background"].forEach(h=>{e.classList.contains(h)?this.Reveal.getRevealElement().classList.add(h):this.Reveal.getRevealElement().classList.remove(h)},this),setTimeout(()=>{this.element.classList.remove("no-transition")},1)}updateParallax(){let t=this.Reveal.getIndices();if(this.Reveal.getConfig().parallaxBackgroundImage){let e,n,i=this.Reveal.getHorizontalSlides(),o=this.Reveal.getVerticalSlides(),l=this.element.style.backgroundSize.split(" ");l.length===1?e=n=parseInt(l[0],10):(e=parseInt(l[0],10),n=parseInt(l[1],10));let h,c,k=this.element.offsetWidth,v=i.length;h=typeof this.Reveal.getConfig().parallaxBackgroundHorizontal=="number"?this.Reveal.getConfig().parallaxBackgroundHorizontal:v>1?(e-k)/(v-1):0,c=h*t.h*-1;let m,f,w=this.element.offsetHeight,u=o.length;m=typeof this.Reveal.getConfig().parallaxBackgroundVertical=="number"?this.Reveal.getConfig().parallaxBackgroundVertical:(n-w)/(u-1),f=u>0?m*t.v:0,this.element.style.backgroundPosition=c+"px "+-f+"px"}}destroy(){this.element.remove()}};const qt=".slides section",Ot=".slides>section",Je=".slides>section.present>section",Fn=/registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/,Qe=/fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/;let Ge=0,Wn=class{constructor(t){this.Reveal=t}run(t,e){this.reset();let n=this.Reveal.getSlides(),i=n.indexOf(e),o=n.indexOf(t);if(t.hasAttribute("data-auto-animate")&&e.hasAttribute("data-auto-animate")&&t.getAttribute("data-auto-animate-id")===e.getAttribute("data-auto-animate-id")&&!(i>o?e:t).hasAttribute("data-auto-animate-restart")){this.autoAnimateStyleSheet=this.autoAnimateStyleSheet||be();let l=this.getAutoAnimateOptions(e);t.dataset.autoAnimate="pending",e.dataset.autoAnimate="pending",l.slideDirection=i>o?"forward":"backward";let h=t.style.display==="none";h&&(t.style.display=this.Reveal.getConfig().display);let c=this.getAutoAnimatableElements(t,e).map(k=>this.autoAnimateElements(k.from,k.to,k.options||{},l,Ge++));if(h&&(t.style.display="none"),e.dataset.autoAnimateUnmatched!=="false"&&this.Reveal.getConfig().autoAnimateUnmatched===!0){let k=.8*l.duration,v=.2*l.duration;this.getUnmatchedAutoAnimateElements(e).forEach(m=>{let f=this.getAutoAnimateOptions(m,l),w="unmatched";f.duration===l.duration&&f.delay===l.delay||(w="unmatched-"+Ge++,c.push(`[data-auto-animate="running"] [data-auto-animate-target="${w}"] { transition: opacity ${f.duration}s ease ${f.delay}s; }`)),m.dataset.autoAnimateTarget=w},this),c.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${k}s ease ${v}s; }`)}this.autoAnimateStyleSheet.innerHTML=c.join(""),requestAnimationFrame(()=>{this.autoAnimateStyleSheet&&(getComputedStyle(this.autoAnimateStyleSheet).fontWeight,e.dataset.autoAnimate="running")}),this.Reveal.dispatchEvent({type:"autoanimate",data:{fromSlide:t,toSlide:e,sheet:this.autoAnimateStyleSheet}})}}reset(){B(this.Reveal.getRevealElement(),'[data-auto-animate]:not([data-auto-animate=""])').forEach(t=>{t.dataset.autoAnimate=""}),B(this.Reveal.getRevealElement(),"[data-auto-animate-target]").forEach(t=>{delete t.dataset.autoAnimateTarget}),this.autoAnimateStyleSheet&&this.autoAnimateStyleSheet.parentNode&&(this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet),this.autoAnimateStyleSheet=null)}autoAnimateElements(t,e,n,i,o){t.dataset.autoAnimateTarget="",e.dataset.autoAnimateTarget=o;let l=this.getAutoAnimateOptions(e,i);n.delay!==void 0&&(l.delay=n.delay),n.duration!==void 0&&(l.duration=n.duration),n.easing!==void 0&&(l.easing=n.easing);let h=this.getAutoAnimatableProperties("from",t,n),c=this.getAutoAnimatableProperties("to",e,n);if(e.classList.contains("fragment")&&(delete c.styles.opacity,t.classList.contains("fragment"))&&(t.className.match(Qe)||[""])[0]===(e.className.match(Qe)||[""])[0]&&i.slideDirection==="forward"&&e.classList.add("visible","disabled"),n.translate!==!1||n.scale!==!1){let m=this.Reveal.getScale(),f={x:(h.x-c.x)/m,y:(h.y-c.y)/m,scaleX:h.width/c.width,scaleY:h.height/c.height};f.x=Math.round(1e3*f.x)/1e3,f.y=Math.round(1e3*f.y)/1e3,f.scaleX=Math.round(1e3*f.scaleX)/1e3,f.scaleX=Math.round(1e3*f.scaleX)/1e3;let w=n.translate!==!1&&(f.x!==0||f.y!==0),u=n.scale!==!1&&(f.scaleX!==0||f.scaleY!==0);if(w||u){let L=[];w&&L.push(`translate(${f.x}px, ${f.y}px)`),u&&L.push(`scale(${f.scaleX}, ${f.scaleY})`),h.styles.transform=L.join(" "),h.styles["transform-origin"]="top left",c.styles.transform="none"}}for(let m in c.styles){const f=c.styles[m],w=h.styles[m];f===w?delete c.styles[m]:(f.explicitValue===!0&&(c.styles[m]=f.value),w.explicitValue===!0&&(h.styles[m]=w.value))}let k="",v=Object.keys(c.styles);return v.length>0&&(h.styles.transition="none",c.styles.transition=`all ${l.duration}s ${l.easing} ${l.delay}s`,c.styles["transition-property"]=v.join(", "),c.styles["will-change"]=v.join(", "),k='[data-auto-animate-target="'+o+'"] {'+Object.keys(h.styles).map(m=>m+": "+h.styles[m]+" !important;").join("")+'}[data-auto-animate="running"] [data-auto-animate-target="'+o+'"] {'+Object.keys(c.styles).map(m=>m+": "+c.styles[m]+" !important;").join("")+"}"),k}getAutoAnimateOptions(t,e){let n={easing:this.Reveal.getConfig().autoAnimateEasing,duration:this.Reveal.getConfig().autoAnimateDuration,delay:0};if(n=jt(n,e),t.parentNode){let i=ht(t.parentNode,"[data-auto-animate-target]");i&&(n=this.getAutoAnimateOptions(i,n))}return t.dataset.autoAnimateEasing&&(n.easing=t.dataset.autoAnimateEasing),t.dataset.autoAnimateDuration&&(n.duration=parseFloat(t.dataset.autoAnimateDuration)),t.dataset.autoAnimateDelay&&(n.delay=parseFloat(t.dataset.autoAnimateDelay)),n}getAutoAnimatableProperties(t,e,n){let i=this.Reveal.getConfig(),o={styles:[]};if(n.translate!==!1||n.scale!==!1){let h;if(typeof n.measure=="function")h=n.measure(e);else if(i.center)h=e.getBoundingClientRect();else{let c=this.Reveal.getScale();h={x:e.offsetLeft*c,y:e.offsetTop*c,width:e.offsetWidth*c,height:e.offsetHeight*c}}o.x=h.x,o.y=h.y,o.width=h.width,o.height=h.height}const l=getComputedStyle(e);return(n.styles||i.autoAnimateStyles).forEach(h=>{let c;typeof h=="string"&&(h={property:h}),h.from!==void 0&&t==="from"?c={value:h.from,explicitValue:!0}:h.to!==void 0&&t==="to"?c={value:h.to,explicitValue:!0}:(h.property==="line-height"&&(c=parseFloat(l["line-height"])/parseFloat(l["font-size"])),isNaN(c)&&(c=l[h.property])),c!==""&&(o.styles[h.property]=c)}),o}getAutoAnimatableElements(t,e){let n=(typeof this.Reveal.getConfig().autoAnimateMatcher=="function"?this.Reveal.getConfig().autoAnimateMatcher:this.getAutoAnimatePairs).call(this,t,e),i=[];return n.filter((o,l)=>{if(i.indexOf(o.to)===-1)return i.push(o.to),!0})}getAutoAnimatePairs(t,e){let n=[];const i="h1, h2, h3, h4, h5, h6, p, li";return this.findAutoAnimateMatches(n,t,e,"[data-id]",o=>o.nodeName+":::"+o.getAttribute("data-id")),this.findAutoAnimateMatches(n,t,e,i,o=>o.nodeName+":::"+o.innerText),this.findAutoAnimateMatches(n,t,e,"img, video, iframe",o=>o.nodeName+":::"+(o.getAttribute("src")||o.getAttribute("data-src"))),this.findAutoAnimateMatches(n,t,e,"pre",o=>o.nodeName+":::"+o.innerText),n.forEach(o=>{ae(o.from,i)?o.options={scale:!1}:ae(o.from,"pre")&&(o.options={scale:!1,styles:["width","height"]},this.findAutoAnimateMatches(n,o.from,o.to,".hljs .hljs-ln-code",l=>l.textContent,{scale:!1,styles:[],measure:this.getLocalBoundingBox.bind(this)}),this.findAutoAnimateMatches(n,o.from,o.to,".hljs .hljs-ln-numbers[data-line-number]",l=>l.getAttribute("data-line-number"),{scale:!1,styles:["width"],measure:this.getLocalBoundingBox.bind(this)}))},this),n}getLocalBoundingBox(t){const e=this.Reveal.getScale();return{x:Math.round(t.offsetLeft*e*100)/100,y:Math.round(t.offsetTop*e*100)/100,width:Math.round(t.offsetWidth*e*100)/100,height:Math.round(t.offsetHeight*e*100)/100}}findAutoAnimateMatches(t,e,n,i,o,l){let h={},c={};[].slice.call(e.querySelectorAll(i)).forEach((k,v)=>{const m=o(k);typeof m=="string"&&m.length&&(h[m]=h[m]||[],h[m].push(k))}),[].slice.call(n.querySelectorAll(i)).forEach((k,v)=>{const m=o(k);let f;if(c[m]=c[m]||[],c[m].push(k),h[m]){const w=c[m].length-1,u=h[m].length-1;h[m][w]?(f=h[m][w],h[m][w]=null):h[m][u]&&(f=h[m][u],h[m][u]=null)}f&&t.push({from:f,to:k,options:l})})}getUnmatchedAutoAnimateElements(t){return[].slice.call(t.children).reduce((e,n)=>{const i=n.querySelector("[data-auto-animate-target]");return n.hasAttribute("data-auto-animate-target")||i||e.push(n),n.querySelector("[data-auto-animate-target]")&&(e=e.concat(this.getUnmatchedAutoAnimateElements(n))),e},[])}},Kn=class{constructor(t){this.Reveal=t}configure(t,e){t.fragments===!1?this.disable():e.fragments===!1&&this.enable()}disable(){B(this.Reveal.getSlidesElement(),".fragment").forEach(t=>{t.classList.add("visible"),t.classList.remove("current-fragment")})}enable(){B(this.Reveal.getSlidesElement(),".fragment").forEach(t=>{t.classList.remove("visible"),t.classList.remove("current-fragment")})}availableRoutes(){let t=this.Reveal.getCurrentSlide();if(t&&this.Reveal.getConfig().fragments){let e=t.querySelectorAll(".fragment:not(.disabled)"),n=t.querySelectorAll(".fragment:not(.disabled):not(.visible)");return{prev:e.length-n.length>0,next:!!n.length}}return{prev:!1,next:!1}}sort(t,e=!1){t=Array.from(t);let n=[],i=[],o=[];t.forEach(h=>{if(h.hasAttribute("data-fragment-index")){let c=parseInt(h.getAttribute("data-fragment-index"),10);n[c]||(n[c]=[]),n[c].push(h)}else i.push([h])}),n=n.concat(i);let l=0;return n.forEach(h=>{h.forEach(c=>{o.push(c),c.setAttribute("data-fragment-index",l)}),l++}),e===!0?n:o}sortAll(){this.Reveal.getHorizontalSlides().forEach(t=>{let e=B(t,"section");e.forEach((n,i)=>{this.sort(n.querySelectorAll(".fragment"))},this),e.length===0&&this.sort(t.querySelectorAll(".fragment"))})}update(t,e){let n={shown:[],hidden:[]},i=this.Reveal.getCurrentSlide();if(i&&this.Reveal.getConfig().fragments&&(e=e||this.sort(i.querySelectorAll(".fragment"))).length){let o=0;if(typeof t!="number"){let l=this.sort(i.querySelectorAll(".fragment.visible")).pop();l&&(t=parseInt(l.getAttribute("data-fragment-index")||0,10))}Array.from(e).forEach((l,h)=>{if(l.hasAttribute("data-fragment-index")&&(h=parseInt(l.getAttribute("data-fragment-index"),10)),o=Math.max(o,h),h<=t){let c=l.classList.contains("visible");l.classList.add("visible"),l.classList.remove("current-fragment"),h===t&&(this.Reveal.announceStatus(this.Reveal.getStatusText(l)),l.classList.add("current-fragment"),this.Reveal.slideContent.startEmbeddedContent(l)),c||(n.shown.push(l),this.Reveal.dispatchEvent({target:l,type:"visible",bubbles:!1}))}else{let c=l.classList.contains("visible");l.classList.remove("visible"),l.classList.remove("current-fragment"),c&&(this.Reveal.slideContent.stopEmbeddedContent(l),n.hidden.push(l),this.Reveal.dispatchEvent({target:l,type:"hidden",bubbles:!1}))}}),t=typeof t=="number"?t:-1,t=Math.max(Math.min(t,o),-1),i.setAttribute("data-fragment",t)}return n}sync(t=this.Reveal.getCurrentSlide()){return this.sort(t.querySelectorAll(".fragment"))}goto(t,e=0){let n=this.Reveal.getCurrentSlide();if(n&&this.Reveal.getConfig().fragments){let i=this.sort(n.querySelectorAll(".fragment:not(.disabled)"));if(i.length){if(typeof t!="number"){let l=this.sort(n.querySelectorAll(".fragment:not(.disabled).visible")).pop();t=l?parseInt(l.getAttribute("data-fragment-index")||0,10):-1}t+=e;let o=this.update(t,i);return o.hidden.length&&this.Reveal.dispatchEvent({type:"fragmenthidden",data:{fragment:o.hidden[0],fragments:o.hidden}}),o.shown.length&&this.Reveal.dispatchEvent({type:"fragmentshown",data:{fragment:o.shown[0],fragments:o.shown}}),this.Reveal.controls.update(),this.Reveal.progress.update(),this.Reveal.getConfig().fragmentInURL&&this.Reveal.location.writeURL(),!(!o.shown.length&&!o.hidden.length)}}return!1}next(){return this.goto(null,1)}prev(){return this.goto(null,-1)}},Vn=class{constructor(t){this.Reveal=t,this.active=!1,this.onSlideClicked=this.onSlideClicked.bind(this)}activate(){if(this.Reveal.getConfig().overview&&!this.isActive()){this.active=!0,this.Reveal.getRevealElement().classList.add("overview"),this.Reveal.cancelAutoSlide(),this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()),B(this.Reveal.getRevealElement(),qt).forEach(i=>{i.classList.contains("stack")||i.addEventListener("click",this.onSlideClicked,!0)});const t=70,e=this.Reveal.getComputedSlideSize();this.overviewSlideWidth=e.width+t,this.overviewSlideHeight=e.height+t,this.Reveal.getConfig().rtl&&(this.overviewSlideWidth=-this.overviewSlideWidth),this.Reveal.updateSlidesVisibility(),this.layout(),this.update(),this.Reveal.layout();const n=this.Reveal.getIndices();this.Reveal.dispatchEvent({type:"overviewshown",data:{indexh:n.h,indexv:n.v,currentSlide:this.Reveal.getCurrentSlide()}})}}layout(){this.Reveal.getHorizontalSlides().forEach((t,e)=>{t.setAttribute("data-index-h",e),Pt(t,"translate3d("+e*this.overviewSlideWidth+"px, 0, 0)"),t.classList.contains("stack")&&B(t,"section").forEach((n,i)=>{n.setAttribute("data-index-h",e),n.setAttribute("data-index-v",i),Pt(n,"translate3d(0, "+i*this.overviewSlideHeight+"px, 0)")})}),Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach((t,e)=>{Pt(t,"translate3d("+e*this.overviewSlideWidth+"px, 0, 0)"),B(t,".slide-background").forEach((n,i)=>{Pt(n,"translate3d(0, "+i*this.overviewSlideHeight+"px, 0)")})})}update(){const t=Math.min(window.innerWidth,window.innerHeight),e=Math.max(t/5,150)/t,n=this.Reveal.getIndices();this.Reveal.transformSlides({overview:["scale("+e+")","translateX("+-n.h*this.overviewSlideWidth+"px)","translateY("+-n.v*this.overviewSlideHeight+"px)"].join(" ")})}deactivate(){if(this.Reveal.getConfig().overview){this.active=!1,this.Reveal.getRevealElement().classList.remove("overview"),this.Reveal.getRevealElement().classList.add("overview-deactivating"),setTimeout(()=>{this.Reveal.getRevealElement().classList.remove("overview-deactivating")},1),this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()),B(this.Reveal.getRevealElement(),qt).forEach(e=>{Pt(e,""),e.removeEventListener("click",this.onSlideClicked,!0)}),B(this.Reveal.getBackgroundsElement(),".slide-background").forEach(e=>{Pt(e,"")}),this.Reveal.transformSlides({overview:""});const t=this.Reveal.getIndices();this.Reveal.slide(t.h,t.v),this.Reveal.layout(),this.Reveal.cueAutoSlide(),this.Reveal.dispatchEvent({type:"overviewhidden",data:{indexh:t.h,indexv:t.v,currentSlide:this.Reveal.getCurrentSlide()}})}}toggle(t){typeof t=="boolean"?t?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}onSlideClicked(t){if(this.isActive()){t.preventDefault();let e=t.target;for(;e&&!e.nodeName.match(/section/gi);)e=e.parentNode;if(e&&!e.classList.contains("disabled")&&(this.deactivate(),e.nodeName.match(/section/gi))){let n=parseInt(e.getAttribute("data-index-h"),10),i=parseInt(e.getAttribute("data-index-v"),10);this.Reveal.slide(n,i)}}}},Zn=class{constructor(t){this.Reveal=t,this.shortcuts={},this.bindings={},this.onDocumentKeyDown=this.onDocumentKeyDown.bind(this),this.onDocumentKeyPress=this.onDocumentKeyPress.bind(this)}configure(t,e){t.navigationMode==="linear"?(this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"]="Next slide",this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"]="Previous slide"):(this.shortcuts["N  ,  SPACE"]="Next slide",this.shortcuts["P  ,  Shift SPACE"]="Previous slide",this.shortcuts["&#8592;  ,  H"]="Navigate left",this.shortcuts["&#8594;  ,  L"]="Navigate right",this.shortcuts["&#8593;  ,  K"]="Navigate up",this.shortcuts["&#8595;  ,  J"]="Navigate down"),this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"]="Navigate without fragments",this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"]="Jump to first/last slide",this.shortcuts["B  ,  ."]="Pause",this.shortcuts.F="Fullscreen",this.shortcuts.G="Jump to slide",this.shortcuts["ESC, O"]="Slide overview"}bind(){document.addEventListener("keydown",this.onDocumentKeyDown,!1),document.addEventListener("keypress",this.onDocumentKeyPress,!1)}unbind(){document.removeEventListener("keydown",this.onDocumentKeyDown,!1),document.removeEventListener("keypress",this.onDocumentKeyPress,!1)}addKeyBinding(t,e){typeof t=="object"&&t.keyCode?this.bindings[t.keyCode]={callback:e,key:t.key,description:t.description}:this.bindings[t]={callback:e,key:null,description:null}}removeKeyBinding(t){delete this.bindings[t]}triggerKey(t){this.onDocumentKeyDown({keyCode:t})}registerKeyboardShortcut(t,e){this.shortcuts[t]=e}getShortcuts(){return this.shortcuts}getBindings(){return this.bindings}onDocumentKeyPress(t){t.shiftKey&&t.charCode===63&&this.Reveal.toggleHelp()}onDocumentKeyDown(t){let e=this.Reveal.getConfig();if(typeof e.keyboardCondition=="function"&&e.keyboardCondition(t)===!1||e.keyboardCondition==="focused"&&!this.Reveal.isFocused())return!0;let n=t.keyCode,i=!this.Reveal.isAutoSliding();this.Reveal.onUserInput(t);let o=document.activeElement&&document.activeElement.isContentEditable===!0,l=document.activeElement&&document.activeElement.tagName&&/input|textarea/i.test(document.activeElement.tagName),h=document.activeElement&&document.activeElement.className&&/speaker-notes/i.test(document.activeElement.className),c=!([32,37,38,39,40,78,80].indexOf(t.keyCode)!==-1&&t.shiftKey||t.altKey)&&(t.shiftKey||t.altKey||t.ctrlKey||t.metaKey);if(o||l||h||c)return;let k,v=[66,86,190,191];if(typeof e.keyboard=="object")for(k in e.keyboard)e.keyboard[k]==="togglePause"&&v.push(parseInt(k,10));if(this.Reveal.isPaused()&&v.indexOf(n)===-1)return!1;let m=e.navigationMode==="linear"||!this.Reveal.hasHorizontalSlides()||!this.Reveal.hasVerticalSlides(),f=!1;if(typeof e.keyboard=="object"){for(k in e.keyboard)if(parseInt(k,10)===n){let w=e.keyboard[k];typeof w=="function"?w.apply(null,[t]):typeof w=="string"&&typeof this.Reveal[w]=="function"&&this.Reveal[w].call(),f=!0}}if(f===!1){for(k in this.bindings)if(parseInt(k,10)===n){let w=this.bindings[k].callback;typeof w=="function"?w.apply(null,[t]):typeof w=="string"&&typeof this.Reveal[w]=="function"&&this.Reveal[w].call(),f=!0}}f===!1&&(f=!0,n===80||n===33?this.Reveal.prev({skipFragments:t.altKey}):n===78||n===34?this.Reveal.next({skipFragments:t.altKey}):n===72||n===37?t.shiftKey?this.Reveal.slide(0):!this.Reveal.overview.isActive()&&m?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.left({skipFragments:t.altKey}):n===76||n===39?t.shiftKey?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):!this.Reveal.overview.isActive()&&m?this.Reveal.next({skipFragments:t.altKey}):this.Reveal.right({skipFragments:t.altKey}):n===75||n===38?t.shiftKey?this.Reveal.slide(void 0,0):!this.Reveal.overview.isActive()&&m?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.up({skipFragments:t.altKey}):n===74||n===40?t.shiftKey?this.Reveal.slide(void 0,Number.MAX_VALUE):!this.Reveal.overview.isActive()&&m?this.Reveal.next({skipFragments:t.altKey}):this.Reveal.down({skipFragments:t.altKey}):n===36?this.Reveal.slide(0):n===35?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):n===32?(this.Reveal.overview.isActive()&&this.Reveal.overview.deactivate(),t.shiftKey?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.next({skipFragments:t.altKey})):n===58||n===59||n===66||n===86||n===190||n===191?this.Reveal.togglePause():n===70?(w=>{let u=(w=w||document.documentElement).requestFullscreen||w.webkitRequestFullscreen||w.webkitRequestFullScreen||w.mozRequestFullScreen||w.msRequestFullscreen;u&&u.apply(w)})(e.embedded?this.Reveal.getViewportElement():document.documentElement):n===65?e.autoSlideStoppable&&this.Reveal.toggleAutoSlide(i):n===71?e.jumpToSlide&&this.Reveal.toggleJumpToSlide():f=!1),f?t.preventDefault&&t.preventDefault():n!==27&&n!==79||(this.Reveal.closeOverlay()===!1&&this.Reveal.overview.toggle(),t.preventDefault&&t.preventDefault()),this.Reveal.cueAutoSlide()}},Jn=class{constructor(t){var e,n,i;i=1e3,(n="MAX_REPLACE_STATE_FREQUENCY")in(e=this)?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,this.Reveal=t,this.writeURLTimeout=0,this.replaceStateTimestamp=0,this.onWindowHashChange=this.onWindowHashChange.bind(this)}bind(){window.addEventListener("hashchange",this.onWindowHashChange,!1)}unbind(){window.removeEventListener("hashchange",this.onWindowHashChange,!1)}getIndicesFromHash(t=window.location.hash,e={}){let n=t.replace(/^#\/?/,""),i=n.split("/");if(/^[0-9]*$/.test(i[0])||!n.length){const o=this.Reveal.getConfig();let l,h=o.hashOneBasedIndex||e.oneBasedIndex?1:0,c=parseInt(i[0],10)-h||0,k=parseInt(i[1],10)-h||0;return o.fragmentInURL&&(l=parseInt(i[2],10),isNaN(l)&&(l=void 0)),{h:c,v:k,f:l}}{let o,l;/\/[-\d]+$/g.test(n)&&(l=parseInt(n.split("/").pop(),10),l=isNaN(l)?void 0:l,n=n.split("/").shift());try{o=document.getElementById(decodeURIComponent(n)).closest(".slides>section, .slides>section>section")}catch{}if(o)return{...this.Reveal.getIndices(o),f:l}}return null}readURL(){const t=this.Reveal.getIndices(),e=this.getIndicesFromHash();e?e.h===t.h&&e.v===t.v&&e.f===void 0||this.Reveal.slide(e.h,e.v,e.f):this.Reveal.slide(t.h||0,t.v||0)}writeURL(t){let e=this.Reveal.getConfig(),n=this.Reveal.getCurrentSlide();if(clearTimeout(this.writeURLTimeout),typeof t=="number")this.writeURLTimeout=setTimeout(this.writeURL,t);else if(n){let i=this.getHash();e.history?window.location.hash=i:e.hash&&(i==="/"?this.debouncedReplaceState(window.location.pathname+window.location.search):this.debouncedReplaceState("#"+i))}}replaceState(t){window.history.replaceState(null,null,t),this.replaceStateTimestamp=Date.now()}debouncedReplaceState(t){clearTimeout(this.replaceStateTimeout),Date.now()-this.replaceStateTimestamp>this.MAX_REPLACE_STATE_FREQUENCY?this.replaceState(t):this.replaceStateTimeout=setTimeout(()=>this.replaceState(t),this.MAX_REPLACE_STATE_FREQUENCY)}getHash(t){let e="/",n=t||this.Reveal.getCurrentSlide(),i=n?n.getAttribute("id"):null;i&&(i=encodeURIComponent(i));let o=this.Reveal.getIndices(t);if(this.Reveal.getConfig().fragmentInURL||(o.f=void 0),typeof i=="string"&&i.length)e="/"+i,o.f>=0&&(e+="/"+o.f);else{let l=this.Reveal.getConfig().hashOneBasedIndex?1:0;(o.h>0||o.v>0||o.f>=0)&&(e+=o.h+l),(o.v>0||o.f>=0)&&(e+="/"+(o.v+l)),o.f>=0&&(e+="/"+o.f)}return e}onWindowHashChange(t){this.readURL()}},Qn=class{constructor(t){this.Reveal=t,this.onNavigateLeftClicked=this.onNavigateLeftClicked.bind(this),this.onNavigateRightClicked=this.onNavigateRightClicked.bind(this),this.onNavigateUpClicked=this.onNavigateUpClicked.bind(this),this.onNavigateDownClicked=this.onNavigateDownClicked.bind(this),this.onNavigatePrevClicked=this.onNavigatePrevClicked.bind(this),this.onNavigateNextClicked=this.onNavigateNextClicked.bind(this)}render(){const t=this.Reveal.getConfig().rtl,e=this.Reveal.getRevealElement();this.element=document.createElement("aside"),this.element.className="controls",this.element.innerHTML=`<button class="navigate-left" aria-label="${t?"next slide":"previous slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-right" aria-label="${t?"previous slide":"next slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>
			<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`,this.Reveal.getRevealElement().appendChild(this.element),this.controlsLeft=B(e,".navigate-left"),this.controlsRight=B(e,".navigate-right"),this.controlsUp=B(e,".navigate-up"),this.controlsDown=B(e,".navigate-down"),this.controlsPrev=B(e,".navigate-prev"),this.controlsNext=B(e,".navigate-next"),this.controlsRightArrow=this.element.querySelector(".navigate-right"),this.controlsLeftArrow=this.element.querySelector(".navigate-left"),this.controlsDownArrow=this.element.querySelector(".navigate-down")}configure(t,e){this.element.style.display=t.controls?"block":"none",this.element.setAttribute("data-controls-layout",t.controlsLayout),this.element.setAttribute("data-controls-back-arrows",t.controlsBackArrows)}bind(){let t=["touchstart","click"];dn&&(t=["touchstart"]),t.forEach(e=>{this.controlsLeft.forEach(n=>n.addEventListener(e,this.onNavigateLeftClicked,!1)),this.controlsRight.forEach(n=>n.addEventListener(e,this.onNavigateRightClicked,!1)),this.controlsUp.forEach(n=>n.addEventListener(e,this.onNavigateUpClicked,!1)),this.controlsDown.forEach(n=>n.addEventListener(e,this.onNavigateDownClicked,!1)),this.controlsPrev.forEach(n=>n.addEventListener(e,this.onNavigatePrevClicked,!1)),this.controlsNext.forEach(n=>n.addEventListener(e,this.onNavigateNextClicked,!1))})}unbind(){["touchstart","click"].forEach(t=>{this.controlsLeft.forEach(e=>e.removeEventListener(t,this.onNavigateLeftClicked,!1)),this.controlsRight.forEach(e=>e.removeEventListener(t,this.onNavigateRightClicked,!1)),this.controlsUp.forEach(e=>e.removeEventListener(t,this.onNavigateUpClicked,!1)),this.controlsDown.forEach(e=>e.removeEventListener(t,this.onNavigateDownClicked,!1)),this.controlsPrev.forEach(e=>e.removeEventListener(t,this.onNavigatePrevClicked,!1)),this.controlsNext.forEach(e=>e.removeEventListener(t,this.onNavigateNextClicked,!1))})}update(){let t=this.Reveal.availableRoutes();[...this.controlsLeft,...this.controlsRight,...this.controlsUp,...this.controlsDown,...this.controlsPrev,...this.controlsNext].forEach(n=>{n.classList.remove("enabled","fragmented"),n.setAttribute("disabled","disabled")}),t.left&&this.controlsLeft.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}),t.right&&this.controlsRight.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}),t.up&&this.controlsUp.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}),t.down&&this.controlsDown.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}),(t.left||t.up)&&this.controlsPrev.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}),(t.right||t.down)&&this.controlsNext.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")});let e=this.Reveal.getCurrentSlide();if(e){let n=this.Reveal.fragments.availableRoutes();n.prev&&this.controlsPrev.forEach(i=>{i.classList.add("fragmented","enabled"),i.removeAttribute("disabled")}),n.next&&this.controlsNext.forEach(i=>{i.classList.add("fragmented","enabled"),i.removeAttribute("disabled")}),this.Reveal.isVerticalSlide(e)?(n.prev&&this.controlsUp.forEach(i=>{i.classList.add("fragmented","enabled"),i.removeAttribute("disabled")}),n.next&&this.controlsDown.forEach(i=>{i.classList.add("fragmented","enabled"),i.removeAttribute("disabled")})):(n.prev&&this.controlsLeft.forEach(i=>{i.classList.add("fragmented","enabled"),i.removeAttribute("disabled")}),n.next&&this.controlsRight.forEach(i=>{i.classList.add("fragmented","enabled"),i.removeAttribute("disabled")}))}if(this.Reveal.getConfig().controlsTutorial){let n=this.Reveal.getIndices();!this.Reveal.hasNavigatedVertically()&&t.down?this.controlsDownArrow.classList.add("highlight"):(this.controlsDownArrow.classList.remove("highlight"),this.Reveal.getConfig().rtl?!this.Reveal.hasNavigatedHorizontally()&&t.left&&n.v===0?this.controlsLeftArrow.classList.add("highlight"):this.controlsLeftArrow.classList.remove("highlight"):!this.Reveal.hasNavigatedHorizontally()&&t.right&&n.v===0?this.controlsRightArrow.classList.add("highlight"):this.controlsRightArrow.classList.remove("highlight"))}}destroy(){this.unbind(),this.element.remove()}onNavigateLeftClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.prev():this.Reveal.left()}onNavigateRightClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.next():this.Reveal.right()}onNavigateUpClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.up()}onNavigateDownClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.down()}onNavigatePrevClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.prev()}onNavigateNextClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.next()}};class Gn{constructor(t){this.Reveal=t,this.onProgressClicked=this.onProgressClicked.bind(this)}render(){this.element=document.createElement("div"),this.element.className="progress",this.Reveal.getRevealElement().appendChild(this.element),this.bar=document.createElement("span"),this.element.appendChild(this.bar)}configure(t,e){this.element.style.display=t.progress?"block":"none"}bind(){this.Reveal.getConfig().progress&&this.element&&this.element.addEventListener("click",this.onProgressClicked,!1)}unbind(){this.Reveal.getConfig().progress&&this.element&&this.element.removeEventListener("click",this.onProgressClicked,!1)}update(){if(this.Reveal.getConfig().progress&&this.bar){let t=this.Reveal.getProgress();this.Reveal.getTotalSlides()<2&&(t=0),this.bar.style.transform="scaleX("+t+")"}}getMaxWidth(){return this.Reveal.getRevealElement().offsetWidth}onProgressClicked(t){this.Reveal.onUserInput(t),t.preventDefault();let e=this.Reveal.getSlides(),n=e.length,i=Math.floor(t.clientX/this.getMaxWidth()*n);this.Reveal.getConfig().rtl&&(i=n-i);let o=this.Reveal.getIndices(e[i]);this.Reveal.slide(o.h,o.v)}destroy(){this.element.remove()}}let Xn=class{constructor(t){this.Reveal=t,this.lastMouseWheelStep=0,this.cursorHidden=!1,this.cursorInactiveTimeout=0,this.onDocumentCursorActive=this.onDocumentCursorActive.bind(this),this.onDocumentMouseScroll=this.onDocumentMouseScroll.bind(this)}configure(t,e){t.mouseWheel?(document.addEventListener("DOMMouseScroll",this.onDocumentMouseScroll,!1),document.addEventListener("mousewheel",this.onDocumentMouseScroll,!1)):(document.removeEventListener("DOMMouseScroll",this.onDocumentMouseScroll,!1),document.removeEventListener("mousewheel",this.onDocumentMouseScroll,!1)),t.hideInactiveCursor?(document.addEventListener("mousemove",this.onDocumentCursorActive,!1),document.addEventListener("mousedown",this.onDocumentCursorActive,!1)):(this.showCursor(),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1))}showCursor(){this.cursorHidden&&(this.cursorHidden=!1,this.Reveal.getRevealElement().style.cursor="")}hideCursor(){this.cursorHidden===!1&&(this.cursorHidden=!0,this.Reveal.getRevealElement().style.cursor="none")}destroy(){this.showCursor(),document.removeEventListener("DOMMouseScroll",this.onDocumentMouseScroll,!1),document.removeEventListener("mousewheel",this.onDocumentMouseScroll,!1),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1)}onDocumentCursorActive(t){this.showCursor(),clearTimeout(this.cursorInactiveTimeout),this.cursorInactiveTimeout=setTimeout(this.hideCursor.bind(this),this.Reveal.getConfig().hideCursorTime)}onDocumentMouseScroll(t){if(Date.now()-this.lastMouseWheelStep>1e3){this.lastMouseWheelStep=Date.now();let e=t.detail||-t.wheelDelta;e>0?this.Reveal.next():e<0&&this.Reveal.prev()}}};const Xe=(g,t)=>{const e=document.createElement("script");e.type="text/javascript",e.async=!1,e.defer=!1,e.src=g,typeof t=="function"&&(e.onload=e.onreadystatechange=i=>{(i.type==="load"||/loaded|complete/.test(e.readyState))&&(e.onload=e.onreadystatechange=e.onerror=null,t())},e.onerror=i=>{e.onload=e.onreadystatechange=e.onerror=null,t(new Error("Failed loading script: "+e.src+`
`+i))});const n=document.querySelector("head");n.insertBefore(e,n.lastChild)};class Yn{constructor(t){this.Reveal=t,this.state="idle",this.registeredPlugins={},this.asyncDependencies=[]}load(t,e){return this.state="loading",t.forEach(this.registerPlugin.bind(this)),new Promise(n=>{let i=[],o=0;if(e.forEach(l=>{l.condition&&!l.condition()||(l.async?this.asyncDependencies.push(l):i.push(l))}),i.length){o=i.length;const l=h=>{h&&typeof h.callback=="function"&&h.callback(),--o==0&&this.initPlugins().then(n)};i.forEach(h=>{typeof h.id=="string"?(this.registerPlugin(h),l(h)):typeof h.src=="string"?Xe(h.src,()=>l(h)):(console.warn("Unrecognized plugin format",h),l())})}else this.initPlugins().then(n)})}initPlugins(){return new Promise(t=>{let e=Object.values(this.registeredPlugins),n=e.length;if(n===0)this.loadAsync().then(t);else{let i,o=()=>{--n==0?this.loadAsync().then(t):i()},l=0;i=()=>{let h=e[l++];if(typeof h.init=="function"){let c=h.init(this.Reveal);c&&typeof c.then=="function"?c.then(o):o()}else o()},i()}})}loadAsync(){return this.state="loaded",this.asyncDependencies.length&&this.asyncDependencies.forEach(t=>{Xe(t.src,t.callback)}),Promise.resolve()}registerPlugin(t){arguments.length===2&&typeof arguments[0]=="string"?(t=arguments[1]).id=arguments[0]:typeof t=="function"&&(t=t());let e=t.id;typeof e!="string"?console.warn("Unrecognized plugin format; can't find plugin.id",t):this.registeredPlugins[e]===void 0?(this.registeredPlugins[e]=t,this.state==="loaded"&&typeof t.init=="function"&&t.init(this.Reveal)):console.warn('reveal.js: "'+e+'" plugin has already been registered')}hasPlugin(t){return!!this.registeredPlugins[t]}getPlugin(t){return this.registeredPlugins[t]}getRegisteredPlugins(){return this.registeredPlugins}destroy(){Object.values(this.registeredPlugins).forEach(t=>{typeof t.destroy=="function"&&t.destroy()}),this.registeredPlugins={},this.asyncDependencies=[]}}let ti=class{constructor(t){this.Reveal=t}async setupPDF(){const t=this.Reveal.getConfig(),e=B(this.Reveal.getRevealElement(),qt),n=t.slideNumber&&/all|print/i.test(t.showSlideNumber),i=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),o=Math.floor(i.width*(1+t.margin)),l=Math.floor(i.height*(1+t.margin)),h=i.width,c=i.height;await new Promise(requestAnimationFrame),be("@page{size:"+o+"px "+l+"px; margin: 0px;}"),be(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: "+h+"px; max-height:"+c+"px}"),document.documentElement.classList.add("print-pdf"),document.body.style.width=o+"px",document.body.style.height=l+"px";const k=document.querySelector(".reveal-viewport");let v;if(k){const L=window.getComputedStyle(k);L&&L.background&&(v=L.background)}await new Promise(requestAnimationFrame),this.Reveal.layoutSlideContents(h,c),await new Promise(requestAnimationFrame);const m=e.map(L=>L.scrollHeight),f=[],w=e[0].parentNode;let u=1;e.forEach(function(L,I){if(L.classList.contains("stack")===!1){let $=(o-h)/2,Z=(l-c)/2;const F=m[I];let H=Math.max(Math.ceil(F/l),1);H=Math.min(H,t.pdfMaxPagesPerSlide),(H===1&&t.center||L.classList.contains("center"))&&(Z=Math.max((l-F)/2,0));const J=document.createElement("div");if(f.push(J),J.className="pdf-page",J.style.height=(l+t.pdfPageHeightOffset)*H+"px",v&&(J.style.background=v),J.appendChild(L),L.style.left=$+"px",L.style.top=Z+"px",L.style.width=h+"px",this.Reveal.slideContent.layout(L),L.slideBackgroundElement&&J.insertBefore(L.slideBackgroundElement,L),t.showNotes){const O=this.Reveal.getSlideNotes(L);if(O){const Y=typeof t.showNotes=="string"?t.showNotes:"inline",U=document.createElement("div");U.classList.add("speaker-notes"),U.classList.add("speaker-notes-pdf"),U.setAttribute("data-layout",Y),U.innerHTML=O,Y==="separate-page"?f.push(U):(U.style.left="8px",U.style.bottom="8px",U.style.width=o-2*8+"px",J.appendChild(U))}}if(n){const O=document.createElement("div");O.classList.add("slide-number"),O.classList.add("slide-number-pdf"),O.innerHTML=u++,J.appendChild(O)}if(t.pdfSeparateFragments){const O=this.Reveal.fragments.sort(J.querySelectorAll(".fragment"),!0);let tt;O.forEach(function(Y,U){tt&&tt.forEach(function(nt){nt.classList.remove("current-fragment")}),Y.forEach(function(nt){nt.classList.add("visible","current-fragment")},this);const G=J.cloneNode(!0);if(n){const nt=U+1;G.querySelector(".slide-number-pdf").innerHTML+="."+nt}f.push(G),tt=Y},this),O.forEach(function(Y){Y.forEach(function(U){U.classList.remove("visible","current-fragment")})})}else B(J,".fragment:not(.fade-out)").forEach(function(O){O.classList.add("visible")})}},this),await new Promise(requestAnimationFrame),f.forEach(L=>w.appendChild(L)),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.dispatchEvent({type:"pdf-ready"})}isPrintingPDF(){return/print-pdf/gi.test(window.location.search)}},ei=class{constructor(t){this.Reveal=t,this.touchStartX=0,this.touchStartY=0,this.touchStartCount=0,this.touchCaptured=!1,this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this)}bind(){let t=this.Reveal.getRevealElement();"onpointerdown"in window?(t.addEventListener("pointerdown",this.onPointerDown,!1),t.addEventListener("pointermove",this.onPointerMove,!1),t.addEventListener("pointerup",this.onPointerUp,!1)):window.navigator.msPointerEnabled?(t.addEventListener("MSPointerDown",this.onPointerDown,!1),t.addEventListener("MSPointerMove",this.onPointerMove,!1),t.addEventListener("MSPointerUp",this.onPointerUp,!1)):(t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1))}unbind(){let t=this.Reveal.getRevealElement();t.removeEventListener("pointerdown",this.onPointerDown,!1),t.removeEventListener("pointermove",this.onPointerMove,!1),t.removeEventListener("pointerup",this.onPointerUp,!1),t.removeEventListener("MSPointerDown",this.onPointerDown,!1),t.removeEventListener("MSPointerMove",this.onPointerMove,!1),t.removeEventListener("MSPointerUp",this.onPointerUp,!1),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1)}isSwipePrevented(t){if(ae(t,"video, audio"))return!0;for(;t&&typeof t.hasAttribute=="function";){if(t.hasAttribute("data-prevent-swipe"))return!0;t=t.parentNode}return!1}onTouchStart(t){if(this.isSwipePrevented(t.target))return!0;this.touchStartX=t.touches[0].clientX,this.touchStartY=t.touches[0].clientY,this.touchStartCount=t.touches.length}onTouchMove(t){if(this.isSwipePrevented(t.target))return!0;let e=this.Reveal.getConfig();if(this.touchCaptured)dn&&t.preventDefault();else{this.Reveal.onUserInput(t);let n=t.touches[0].clientX,i=t.touches[0].clientY;if(t.touches.length===1&&this.touchStartCount!==2){let o=this.Reveal.availableRoutes({includeFragments:!0}),l=n-this.touchStartX,h=i-this.touchStartY;l>40&&Math.abs(l)>Math.abs(h)?(this.touchCaptured=!0,e.navigationMode==="linear"?e.rtl?this.Reveal.next():this.Reveal.prev():this.Reveal.left()):l<-40&&Math.abs(l)>Math.abs(h)?(this.touchCaptured=!0,e.navigationMode==="linear"?e.rtl?this.Reveal.prev():this.Reveal.next():this.Reveal.right()):h>40&&o.up?(this.touchCaptured=!0,e.navigationMode==="linear"?this.Reveal.prev():this.Reveal.up()):h<-40&&o.down&&(this.touchCaptured=!0,e.navigationMode==="linear"?this.Reveal.next():this.Reveal.down()),e.embedded?(this.touchCaptured||this.Reveal.isVerticalSlide())&&t.preventDefault():t.preventDefault()}}}onTouchEnd(t){this.touchCaptured=!1}onPointerDown(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchStart(t))}onPointerMove(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchMove(t))}onPointerUp(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchEnd(t))}};const ve="focus",Ye="blur";class ni{constructor(t){this.Reveal=t,this.onRevealPointerDown=this.onRevealPointerDown.bind(this),this.onDocumentPointerDown=this.onDocumentPointerDown.bind(this)}configure(t,e){t.embedded?this.blur():(this.focus(),this.unbind())}bind(){this.Reveal.getConfig().embedded&&this.Reveal.getRevealElement().addEventListener("pointerdown",this.onRevealPointerDown,!1)}unbind(){this.Reveal.getRevealElement().removeEventListener("pointerdown",this.onRevealPointerDown,!1),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)}focus(){this.state!==ve&&(this.Reveal.getRevealElement().classList.add("focused"),document.addEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=ve}blur(){this.state!==Ye&&(this.Reveal.getRevealElement().classList.remove("focused"),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=Ye}isFocused(){return this.state===ve}destroy(){this.Reveal.getRevealElement().classList.remove("focused")}onRevealPointerDown(t){this.focus()}onDocumentPointerDown(t){let e=ht(t.target,".reveal");e&&e===this.Reveal.getRevealElement()||this.blur()}}class ii{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="speaker-notes",this.element.setAttribute("data-prevent-swipe",""),this.element.setAttribute("tabindex","0"),this.Reveal.getRevealElement().appendChild(this.element)}configure(t,e){t.showNotes&&this.element.setAttribute("data-layout",typeof t.showNotes=="string"?t.showNotes:"inline")}update(){this.Reveal.getConfig().showNotes&&this.element&&this.Reveal.getCurrentSlide()&&!this.Reveal.print.isPrintingPDF()&&(this.element.innerHTML=this.getSlideNotes()||'<span class="notes-placeholder">No notes on this slide.</span>')}updateVisibility(){this.Reveal.getConfig().showNotes&&this.hasNotes()&&!this.Reveal.print.isPrintingPDF()?this.Reveal.getRevealElement().classList.add("show-notes"):this.Reveal.getRevealElement().classList.remove("show-notes")}hasNotes(){return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length>0}isSpeakerNotesWindow(){return!!window.location.search.match(/receiver/gi)}getSlideNotes(t=this.Reveal.getCurrentSlide()){if(t.hasAttribute("data-notes"))return t.getAttribute("data-notes");let e=t.querySelectorAll("aside.notes");return e?Array.from(e).map(n=>n.innerHTML).join(`
`):null}destroy(){this.element.remove()}}class si{constructor(t,e){this.diameter=100,this.diameter2=this.diameter/2,this.thickness=6,this.playing=!1,this.progress=0,this.progressOffset=1,this.container=t,this.progressCheck=e,this.canvas=document.createElement("canvas"),this.canvas.className="playback",this.canvas.width=this.diameter,this.canvas.height=this.diameter,this.canvas.style.width=this.diameter2+"px",this.canvas.style.height=this.diameter2+"px",this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),this.render()}setPlaying(t){const e=this.playing;this.playing=t,!e&&this.playing?this.animate():this.render()}animate(){const t=this.progress;this.progress=this.progressCheck(),t>.8&&this.progress<.2&&(this.progressOffset=this.progress),this.render(),this.playing&&requestAnimationFrame(this.animate.bind(this))}render(){let t=this.playing?this.progress:0,e=this.diameter2-this.thickness,n=this.diameter2,i=this.diameter2,o=28;this.progressOffset+=.1*(1-this.progressOffset);const l=-Math.PI/2+t*(2*Math.PI),h=-Math.PI/2+this.progressOffset*(2*Math.PI);this.context.save(),this.context.clearRect(0,0,this.diameter,this.diameter),this.context.beginPath(),this.context.arc(n,i,e+4,0,2*Math.PI,!1),this.context.fillStyle="rgba( 0, 0, 0, 0.4 )",this.context.fill(),this.context.beginPath(),this.context.arc(n,i,e,0,2*Math.PI,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="rgba( 255, 255, 255, 0.2 )",this.context.stroke(),this.playing&&(this.context.beginPath(),this.context.arc(n,i,e,h,l,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#fff",this.context.stroke()),this.context.translate(n-14,i-14),this.playing?(this.context.fillStyle="#fff",this.context.fillRect(0,0,10,o),this.context.fillRect(18,0,10,o)):(this.context.beginPath(),this.context.translate(4,0),this.context.moveTo(0,0),this.context.lineTo(24,14),this.context.lineTo(0,o),this.context.fillStyle="#fff",this.context.fill()),this.context.restore()}on(t,e){this.canvas.addEventListener(t,e,!1)}off(t,e){this.canvas.removeEventListener(t,e,!1)}destroy(){this.playing=!1,this.canvas.parentNode&&this.container.removeChild(this.canvas)}}var ai={width:960,height:700,margin:.04,minScale:.2,maxScale:2,controls:!0,controlsTutorial:!0,controlsLayout:"bottom-right",controlsBackArrows:"faded",progress:!0,slideNumber:!1,showSlideNumber:"all",hashOneBasedIndex:!1,hash:!1,respondToHashChanges:!0,jumpToSlide:!0,history:!1,keyboard:!0,keyboardCondition:null,disableLayout:!1,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,navigationMode:"default",shuffle:!1,fragments:!0,fragmentInURL:!0,embedded:!1,help:!0,pause:!0,showNotes:!1,showHiddenSlides:!1,autoPlayMedia:null,preloadIframes:null,autoAnimate:!0,autoAnimateMatcher:null,autoAnimateEasing:"ease",autoAnimateDuration:1,autoAnimateUnmatched:!0,autoAnimateStyles:["opacity","color","background-color","padding","font-size","line-height","letter-spacing","border-width","border-color","border-radius","outline","outline-offset"],autoSlide:0,autoSlideStoppable:!0,autoSlideMethod:null,defaultTiming:null,mouseWheel:!1,previewLinks:!1,postMessage:!0,postMessageEvents:!1,focusBodyOnPageVisibilityChange:!0,transition:"slide",transitionSpeed:"default",backgroundTransition:"fade",parallaxBackgroundImage:"",parallaxBackgroundSize:"",parallaxBackgroundRepeat:"",parallaxBackgroundPosition:"",parallaxBackgroundHorizontal:null,parallaxBackgroundVertical:null,pdfMaxPagesPerSlide:Number.POSITIVE_INFINITY,pdfSeparateFragments:!0,pdfPageHeightOffset:-1,viewDistance:3,mobileViewDistance:2,display:"block",hideInactiveCursor:!0,hideCursorTime:5e3,sortFragmentsOnSync:!0,dependencies:[],plugins:[]};const un="4.6.0";function pn(g,t){arguments.length<2&&(t=arguments[0],g=document.querySelector(".reveal"));const e={};let n,i,o,l,h,c={},k=!1,v={hasNavigatedHorizontally:!1,hasNavigatedVertically:!1},m=[],f=1,w={layout:"",overview:""},u={},L="idle",I=0,$=0,Z=-1,F=!1,H=new Hn(e),J=new Bn(e),O=new jn(e),tt=new Wn(e),Y=new Un(e),U=new Kn(e),G=new Vn(e),nt=new Zn(e),ct=new Jn(e),S=new Qn(e),T=new Gn(e),C=new Xn(e),gt=new Yn(e),ut=new ti(e),at=new ni(e),pt=new ei(e),mt=new ii(e);function Zt(p){if(!g)throw'Unable to find presentation root (<div class="reveal">).';if(u.wrapper=g,u.slides=g.querySelector(".slides"),!u.slides)throw'Unable to find slides container (<div class="slides">).';return c={...ai,...c,...t,...p,...Ve()},xt(),window.addEventListener("load",kt,!1),gt.load(c.plugins,c.dependencies).then(V),new Promise(b=>e.on("ready",b))}function xt(){c.embedded===!0?u.viewport=ht(g,".reveal-viewport")||g:(u.viewport=document.body,document.documentElement.classList.add("reveal-full-page")),u.viewport.classList.add("reveal-viewport")}function V(){k=!0,P(),a(),R(),y(),x(),Ln(),E(),ct.readURL(),Y.update(!0),setTimeout(()=>{u.slides.classList.remove("no-transition"),u.wrapper.classList.add("ready"),it({type:"ready",data:{indexh:n,indexv:i,currentSlide:l}})},1),ut.isPrintingPDF()&&(D(),document.readyState==="complete"?ut.setupPDF():window.addEventListener("load",()=>{ut.setupPDF()}))}function P(){c.showHiddenSlides||B(u.wrapper,'section[data-visibility="hidden"]').forEach(p=>{p.parentNode.removeChild(p)})}function a(){u.slides.classList.add("no-transition"),Ut?u.wrapper.classList.add("no-hover"):u.wrapper.classList.remove("no-hover"),Y.render(),J.render(),O.render(),S.render(),T.render(),mt.render(),u.pauseOverlay=In(u.wrapper,"div","pause-overlay",c.controls?'<button class="resume-button">Resume presentation</button>':null),u.statusElement=s(),u.wrapper.setAttribute("role","application")}function s(){let p=u.wrapper.querySelector(".aria-status");return p||(p=document.createElement("div"),p.style.position="absolute",p.style.height="1px",p.style.width="1px",p.style.overflow="hidden",p.style.clip="rect( 1px, 1px, 1px, 1px )",p.classList.add("aria-status"),p.setAttribute("aria-live","polite"),p.setAttribute("aria-atomic","true"),u.wrapper.appendChild(p)),p}function r(p){u.statusElement.textContent=p}function d(p){let b="";if(p.nodeType===3)b+=p.textContent;else if(p.nodeType===1){let _=p.getAttribute("aria-hidden"),A=window.getComputedStyle(p).display==="none";_==="true"||A||Array.from(p.childNodes).forEach(M=>{b+=d(M)})}return b=b.trim(),b===""?"":b+" "}function y(){setInterval(()=>{u.wrapper.scrollTop===0&&u.wrapper.scrollLeft===0||(u.wrapper.scrollTop=0,u.wrapper.scrollLeft=0)},1e3)}function x(){document.addEventListener("fullscreenchange",te),document.addEventListener("webkitfullscreenchange",te)}function R(){c.postMessage&&window.addEventListener("message",He,!1)}function E(p){const b={...c};if(typeof p=="object"&&jt(c,p),e.isReady()===!1)return;const _=u.wrapper.querySelectorAll(qt).length;u.wrapper.classList.remove(b.transition),u.wrapper.classList.add(c.transition),u.wrapper.setAttribute("data-transition-speed",c.transitionSpeed),u.wrapper.setAttribute("data-background-transition",c.backgroundTransition),u.viewport.style.setProperty("--slide-width",c.width+"px"),u.viewport.style.setProperty("--slide-height",c.height+"px"),c.shuffle&&le(),me(u.wrapper,"embedded",c.embedded),me(u.wrapper,"rtl",c.rtl),me(u.wrapper,"center",c.center),c.pause===!1&&Kt(),c.previewLinks?(Q(),Rt("[data-preview-link=false]")):(Rt(),Q("[data-preview-link]:not([data-preview-link=false])")),tt.reset(),h&&(h.destroy(),h=null),_>1&&c.autoSlide&&c.autoSlideStoppable&&(h=new si(u.wrapper,()=>Math.min(Math.max((Date.now()-Z)/I,0),1)),h.on("click",Mn),F=!1),c.navigationMode!=="default"?u.wrapper.setAttribute("data-navigation-mode",c.navigationMode):u.wrapper.removeAttribute("data-navigation-mode"),mt.configure(c,b),at.configure(c,b),C.configure(c,b),S.configure(c,b),T.configure(c,b),nt.configure(c,b),U.configure(c,b),J.configure(c,b),Le()}function z(){window.addEventListener("resize",Ue,!1),c.touch&&pt.bind(),c.keyboard&&nt.bind(),c.progress&&T.bind(),c.respondToHashChanges&&ct.bind(),S.bind(),at.bind(),u.slides.addEventListener("click",je,!1),u.slides.addEventListener("transitionend",Be,!1),u.pauseOverlay.addEventListener("click",Kt,!1),c.focusBodyOnPageVisibilityChange&&document.addEventListener("visibilitychange",Fe,!1)}function D(){pt.unbind(),at.unbind(),nt.unbind(),S.unbind(),T.unbind(),ct.unbind(),window.removeEventListener("resize",Ue,!1),u.slides.removeEventListener("click",je,!1),u.slides.removeEventListener("transitionend",Be,!1),u.pauseOverlay.removeEventListener("click",Kt,!1)}function W(){D(),Qt(),Rt(),mt.destroy(),at.destroy(),gt.destroy(),C.destroy(),S.destroy(),T.destroy(),Y.destroy(),J.destroy(),O.destroy(),document.removeEventListener("fullscreenchange",te),document.removeEventListener("webkitfullscreenchange",te),document.removeEventListener("visibilitychange",Fe,!1),window.removeEventListener("message",He,!1),window.removeEventListener("load",kt,!1),u.pauseOverlay&&u.pauseOverlay.remove(),u.statusElement&&u.statusElement.remove(),document.documentElement.classList.remove("reveal-full-page"),u.wrapper.classList.remove("ready","center","has-horizontal-slides","has-vertical-slides"),u.wrapper.removeAttribute("data-transition-speed"),u.wrapper.removeAttribute("data-background-transition"),u.viewport.classList.remove("reveal-viewport"),u.viewport.style.removeProperty("--slide-width"),u.viewport.style.removeProperty("--slide-height"),u.slides.style.removeProperty("width"),u.slides.style.removeProperty("height"),u.slides.style.removeProperty("zoom"),u.slides.style.removeProperty("left"),u.slides.style.removeProperty("top"),u.slides.style.removeProperty("bottom"),u.slides.style.removeProperty("right"),u.slides.style.removeProperty("transform"),Array.from(u.wrapper.querySelectorAll(qt)).forEach(p=>{p.style.removeProperty("display"),p.style.removeProperty("top"),p.removeAttribute("hidden"),p.removeAttribute("aria-hidden")})}function q(p,b,_){g.addEventListener(p,b,_)}function ot(p,b,_){g.removeEventListener(p,b,_)}function St(p){typeof p.layout=="string"&&(w.layout=p.layout),typeof p.overview=="string"&&(w.overview=p.overview),w.layout?Pt(u.slides,w.layout+" "+w.overview):Pt(u.slides,w.overview)}function it({target:p=u.wrapper,type:b,data:_,bubbles:A=!0}){let M=document.createEvent("HTMLEvents",1,2);return M.initEvent(b,A,!0),jt(M,_),p.dispatchEvent(M),p===u.wrapper&&vt(b),M}function vt(p,b){if(c.postMessageEvents&&window.parent!==window.self){let _={namespace:"reveal",eventName:p,state:Oe()};jt(_,b),window.parent.postMessage(JSON.stringify(_),"*")}}function Q(p="a"){Array.from(u.wrapper.querySelectorAll(p)).forEach(b=>{/^(http|www)/gi.test(b.getAttribute("href"))&&b.addEventListener("click",We,!1)})}function Rt(p="a"){Array.from(u.wrapper.querySelectorAll(p)).forEach(b=>{/^(http|www)/gi.test(b.getAttribute("href"))&&b.removeEventListener("click",We,!1)})}function It(p){st(),u.overlay=document.createElement("div"),u.overlay.classList.add("overlay"),u.overlay.classList.add("overlay-preview"),u.wrapper.appendChild(u.overlay),u.overlay.innerHTML=`<header>
				<a class="close" href="#"><span class="icon"></span></a>
				<a class="external" href="${p}" target="_blank"><span class="icon"></span></a>
			</header>
			<div class="spinner"></div>
			<div class="viewport">
				<iframe src="${p}"></iframe>
				<small class="viewport-inner">
					<span class="x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>
				</small>
			</div>`,u.overlay.querySelector("iframe").addEventListener("load",b=>{u.overlay.classList.add("loaded")},!1),u.overlay.querySelector(".close").addEventListener("click",b=>{st(),b.preventDefault()},!1),u.overlay.querySelector(".external").addEventListener("click",b=>{st()},!1)}function bt(p){typeof p=="boolean"?p?_t():st():u.overlay?st():_t()}function _t(){if(c.help){st(),u.overlay=document.createElement("div"),u.overlay.classList.add("overlay"),u.overlay.classList.add("overlay-help"),u.wrapper.appendChild(u.overlay);let p='<p class="title">Keyboard Shortcuts</p><br/>',b=nt.getShortcuts(),_=nt.getBindings();p+="<table><th>KEY</th><th>ACTION</th>";for(let A in b)p+=`<tr><td>${A}</td><td>${b[A]}</td></tr>`;for(let A in _)_[A].key&&_[A].description&&(p+=`<tr><td>${_[A].key}</td><td>${_[A].description}</td></tr>`);p+="</table>",u.overlay.innerHTML=`
				<header>
					<a class="close" href="#"><span class="icon"></span></a>
				</header>
				<div class="viewport">
					<div class="viewport-inner">${p}</div>
				</div>
			`,u.overlay.querySelector(".close").addEventListener("click",A=>{st(),A.preventDefault()},!1)}}function st(){return!!u.overlay&&(u.overlay.parentNode.removeChild(u.overlay),u.overlay=null,!0)}function kt(){if(u.wrapper&&!ut.isPrintingPDF()){if(!c.disableLayout){Ut&&!c.embedded&&document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px");const p=Jt(),b=f;Ct(c.width,c.height),u.slides.style.width=p.width+"px",u.slides.style.height=p.height+"px",f=Math.min(p.presentationWidth/p.width,p.presentationHeight/p.height),f=Math.max(f,c.minScale),f=Math.min(f,c.maxScale),f===1?(u.slides.style.zoom="",u.slides.style.left="",u.slides.style.top="",u.slides.style.bottom="",u.slides.style.right="",St({layout:""})):(u.slides.style.zoom="",u.slides.style.left="50%",u.slides.style.top="50%",u.slides.style.bottom="auto",u.slides.style.right="auto",St({layout:"translate(-50%, -50%) scale("+f+")"}));const _=Array.from(u.wrapper.querySelectorAll(qt));for(let A=0,M=_.length;A<M;A++){const X=_[A];X.style.display!=="none"&&(c.center||X.classList.contains("center")?X.classList.contains("stack")?X.style.top=0:X.style.top=Math.max((p.height-X.scrollHeight)/2,0)+"px":X.style.top="")}b!==f&&it({type:"resize",data:{oldScale:b,scale:f,size:p}})}u.viewport.style.setProperty("--slide-scale",f),T.update(),Y.updateParallax(),G.isActive()&&G.update()}}function Ct(p,b){B(u.slides,"section > .stretch, section > .r-stretch").forEach(_=>{let A=Dn(_,b);if(/(img|video)/gi.test(_.nodeName)){const M=_.naturalWidth||_.videoWidth,X=_.naturalHeight||_.videoHeight,lt=Math.min(p/M,A/X);_.style.width=M*lt+"px",_.style.height=X*lt+"px"}else _.style.width=p+"px",_.style.height=A+"px"})}function Jt(p,b){let _=c.width,A=c.height;c.disableLayout&&(_=u.slides.offsetWidth,A=u.slides.offsetHeight);const M={width:_,height:A,presentationWidth:p||u.wrapper.offsetWidth,presentationHeight:b||u.wrapper.offsetHeight};return M.presentationWidth-=M.presentationWidth*c.margin,M.presentationHeight-=M.presentationHeight*c.margin,typeof M.width=="string"&&/%$/.test(M.width)&&(M.width=parseInt(M.width,10)/100*M.presentationWidth),typeof M.height=="string"&&/%$/.test(M.height)&&(M.height=parseInt(M.height,10)/100*M.presentationHeight),M}function we(p,b){typeof p=="object"&&typeof p.setAttribute=="function"&&p.setAttribute("data-previous-indexv",b||0)}function xe(p){if(typeof p=="object"&&typeof p.setAttribute=="function"&&p.classList.contains("stack")){const b=p.hasAttribute("data-start-indexv")?"data-start-indexv":"data-previous-indexv";return parseInt(p.getAttribute(b)||0,10)}return 0}function Wt(p=l){return p&&p.parentNode&&!!p.parentNode.nodeName.match(/section/i)}function Se(){return!(!l||!Wt(l))&&!l.nextElementSibling}function Ee(){return n===0&&i===0}function oe(){return!!l&&!l.nextElementSibling&&(!Wt(l)||!l.parentNode.nextElementSibling)}function Ae(){if(c.pause){const p=u.wrapper.classList.contains("paused");Qt(),u.wrapper.classList.add("paused"),p===!1&&it({type:"paused"})}}function Kt(){const p=u.wrapper.classList.contains("paused");u.wrapper.classList.remove("paused"),Ht(),p&&it({type:"resumed"})}function Re(p){typeof p=="boolean"?p?Ae():Kt():Vt()?Kt():Ae()}function Vt(){return u.wrapper.classList.contains("paused")}function Sn(p){typeof p=="boolean"?p?O.show():O.hide():O.isVisible()?O.hide():O.show()}function En(p){typeof p=="boolean"?p?Xt():Gt():F?Xt():Gt()}function An(){return!(!I||F)}function Et(p,b,_,A){if(it({type:"beforeslidechange",data:{indexh:p===void 0?n:p,indexv:b===void 0?i:b,origin:A}}).defaultPrevented)return;o=l;const M=u.wrapper.querySelectorAll(Ot);if(M.length===0)return;b!==void 0||G.isActive()||(b=xe(M[p])),o&&o.parentNode&&o.parentNode.classList.contains("stack")&&we(o.parentNode,i);const X=m.concat();m.length=0;let lt=n||0,yt=i||0;n=Te(Ot,p===void 0?n:p),i=Te(Je,b===void 0?i:b);let Tt=n!==lt||i!==yt;Tt||(o=null);let Dt=M[n];l=Dt.querySelectorAll("section")[i]||Dt;let rt=!1;Tt&&o&&l&&!G.isActive()&&(o.hasAttribute("data-auto-animate")&&l.hasAttribute("data-auto-animate")&&o.getAttribute("data-auto-animate-id")===l.getAttribute("data-auto-animate-id")&&!(n>lt||i>yt?l:o).hasAttribute("data-auto-animate-restart")&&(rt=!0,u.slides.classList.add("disable-slide-transitions")),L="running"),ce(),kt(),G.isActive()&&G.update(),_!==void 0&&U.goto(_),o&&o!==l&&(o.classList.remove("present"),o.setAttribute("aria-hidden","true"),Ee()&&setTimeout(()=>{_n().forEach(At=>{we(At,0)})},0));t:for(let At=0,Nn=m.length;At<Nn;At++){for(let ee=0;ee<X.length;ee++)if(X[ee]===m[At]){X.splice(ee,1);continue t}u.viewport.classList.add(m[At]),it({type:m[At]})}for(;X.length;)u.viewport.classList.remove(X.pop());Tt&&it({type:"slidechanged",data:{indexh:n,indexv:i,previousSlide:o,currentSlide:l,origin:A}}),!Tt&&o||(H.stopEmbeddedContent(o),H.startEmbeddedContent(l)),requestAnimationFrame(()=>{r(d(l))}),T.update(),S.update(),mt.update(),Y.update(),Y.updateParallax(),J.update(),U.update(),ct.writeURL(),Ht(),rt&&(setTimeout(()=>{u.slides.classList.remove("disable-slide-transitions")},0),c.autoAnimate&&tt.run(o,l))}function Le(){D(),z(),kt(),I=c.autoSlide,Ht(),Y.create(),ct.writeURL(),c.sortFragmentsOnSync===!0&&U.sortAll(),S.update(),T.update(),ce(),mt.update(),mt.updateVisibility(),Y.update(!0),J.update(),H.formatEmbeddedContent(),c.autoPlayMedia===!1?H.stopEmbeddedContent(l,{unloadIframes:!1}):H.startEmbeddedContent(l),G.isActive()&&G.layout()}function Rn(p=l){Y.sync(p),U.sync(p),H.load(p),Y.update(),mt.update()}function Ln(){$t().forEach(p=>{B(p,"section").forEach((b,_)=>{_>0&&(b.classList.remove("present"),b.classList.remove("past"),b.classList.add("future"),b.setAttribute("aria-hidden","true"))})})}function le(p=$t()){p.forEach((b,_)=>{let A=p[Math.floor(Math.random()*p.length)];A.parentNode===b.parentNode&&b.parentNode.insertBefore(b,A);let M=b.querySelectorAll("section");M.length&&le(M)})}function Te(p,b){let _=B(u.wrapper,p),A=_.length,M=ut.isPrintingPDF(),X=!1,lt=!1;if(A){c.loop&&(b>=A&&(X=!0),(b%=A)<0&&(b=A+b,lt=!0)),b=Math.max(Math.min(b,A-1),0);for(let ft=0;ft<A;ft++){let rt=_[ft],At=c.rtl&&!Wt(rt);rt.classList.remove("past"),rt.classList.remove("present"),rt.classList.remove("future"),rt.setAttribute("hidden",""),rt.setAttribute("aria-hidden","true"),rt.querySelector("section")&&rt.classList.add("stack"),M?rt.classList.add("present"):ft<b?(rt.classList.add(At?"future":"past"),c.fragments&&_e(rt)):ft>b?(rt.classList.add(At?"past":"future"),c.fragments&&Ce(rt)):ft===b&&c.fragments&&(X?Ce(rt):lt&&_e(rt))}let yt=_[b],Tt=yt.classList.contains("present");yt.classList.add("present"),yt.removeAttribute("hidden"),yt.removeAttribute("aria-hidden"),Tt||it({target:yt,type:"visible",bubbles:!1});let Dt=yt.getAttribute("data-state");Dt&&(m=m.concat(Dt.split(" ")))}else b=0;return b}function _e(p){B(p,".fragment").forEach(b=>{b.classList.add("visible"),b.classList.remove("current-fragment")})}function Ce(p){B(p,".fragment.visible").forEach(b=>{b.classList.remove("visible","current-fragment")})}function ce(){let p,b,_=$t(),A=_.length;if(A&&n!==void 0){let M=G.isActive()?10:c.viewDistance;Ut&&(M=G.isActive()?6:c.mobileViewDistance),ut.isPrintingPDF()&&(M=Number.MAX_VALUE);for(let X=0;X<A;X++){let lt=_[X],yt=B(lt,"section"),Tt=yt.length;if(p=Math.abs((n||0)-X)||0,c.loop&&(p=Math.abs(((n||0)-X)%(A-M))||0),p<M?H.load(lt):H.unload(lt),Tt){let Dt=xe(lt);for(let ft=0;ft<Tt;ft++){let rt=yt[ft];b=Math.abs(X===(n||0)?(i||0)-ft:ft-Dt),p+b<M?H.load(rt):H.unload(rt)}}}Ne()?u.wrapper.classList.add("has-vertical-slides"):u.wrapper.classList.remove("has-vertical-slides"),Me()?u.wrapper.classList.add("has-horizontal-slides"):u.wrapper.classList.remove("has-horizontal-slides")}}function Lt({includeFragments:p=!1}={}){let b=u.wrapper.querySelectorAll(Ot),_=u.wrapper.querySelectorAll(Je),A={left:n>0,right:n<b.length-1,up:i>0,down:i<_.length-1};if(c.loop&&(b.length>1&&(A.left=!0,A.right=!0),_.length>1&&(A.up=!0,A.down=!0)),b.length>1&&c.navigationMode==="linear"&&(A.right=A.right||A.down,A.left=A.left||A.up),p===!0){let M=U.availableRoutes();A.left=A.left||M.prev,A.up=A.up||M.prev,A.down=A.down||M.next,A.right=A.right||M.next}if(c.rtl){let M=A.left;A.left=A.right,A.right=M}return A}function $e(p=l){let b=$t(),_=0;t:for(let A=0;A<b.length;A++){let M=b[A],X=M.querySelectorAll("section");for(let lt=0;lt<X.length;lt++){if(X[lt]===p)break t;X[lt].dataset.visibility!=="uncounted"&&_++}if(M===p)break;M.classList.contains("stack")===!1&&M.dataset.visibility!=="uncounted"&&_++}return _}function Tn(){let p=Ie(),b=$e();if(l){let _=l.querySelectorAll(".fragment");if(_.length>0){let A=.9;b+=l.querySelectorAll(".fragment.visible").length/_.length*A}}return Math.min(b/(p-1),1)}function ze(p){let b,_=n,A=i;if(p){let M=Wt(p),X=M?p.parentNode:p,lt=$t();_=Math.max(lt.indexOf(X),0),A=void 0,M&&(A=Math.max(B(p.parentNode,"section").indexOf(p),0))}if(!p&&l&&l.querySelectorAll(".fragment").length>0){let M=l.querySelector(".current-fragment");b=M&&M.hasAttribute("data-fragment-index")?parseInt(M.getAttribute("data-fragment-index"),10):l.querySelectorAll(".fragment.visible").length-1}return{h:_,v:A,f:b}}function de(){return B(u.wrapper,qt+':not(.stack):not([data-visibility="uncounted"])')}function $t(){return B(u.wrapper,Ot)}function Pe(){return B(u.wrapper,".slides>section>section")}function _n(){return B(u.wrapper,Ot+".stack")}function Me(){return $t().length>1}function Ne(){return Pe().length>1}function Cn(){return de().map(p=>{let b={};for(let _=0;_<p.attributes.length;_++){let A=p.attributes[_];b[A.name]=A.value}return b})}function Ie(){return de().length}function De(p,b){let _=$t()[p],A=_&&_.querySelectorAll("section");return A&&A.length&&typeof b=="number"?A?A[b]:void 0:_}function $n(p,b){let _=typeof p=="number"?De(p,b):p;if(_)return _.slideBackgroundElement}function Oe(){let p=ze();return{indexh:p.h,indexv:p.v,indexf:p.f,paused:Vt(),overview:G.isActive()}}function zn(p){if(typeof p=="object"){Et(Bt(p.indexh),Bt(p.indexv),Bt(p.indexf));let b=Bt(p.paused),_=Bt(p.overview);typeof b=="boolean"&&b!==Vt()&&Re(b),typeof _=="boolean"&&_!==G.isActive()&&G.toggle(_)}}function Ht(){if(Qt(),l&&c.autoSlide!==!1){let p=l.querySelector(".current-fragment[data-autoslide]"),b=p?p.getAttribute("data-autoslide"):null,_=l.parentNode?l.parentNode.getAttribute("data-autoslide"):null,A=l.getAttribute("data-autoslide");b?I=parseInt(b,10):A?I=parseInt(A,10):_?I=parseInt(_,10):(I=c.autoSlide,l.querySelectorAll(".fragment").length===0&&B(l,"video, audio").forEach(M=>{M.hasAttribute("data-autoplay")&&I&&1e3*M.duration/M.playbackRate>I&&(I=1e3*M.duration/M.playbackRate+1e3)})),!I||F||Vt()||G.isActive()||oe()&&!U.availableRoutes().next&&c.loop!==!0||($=setTimeout(()=>{typeof c.autoSlideMethod=="function"?c.autoSlideMethod():ge(),Ht()},I),Z=Date.now()),h&&h.setPlaying($!==-1)}}function Qt(){clearTimeout($),$=-1}function Gt(){I&&!F&&(F=!0,it({type:"autoslidepaused"}),clearTimeout($),h&&h.setPlaying(!1))}function Xt(){I&&F&&(F=!1,it({type:"autoslideresumed"}),Ht())}function Yt({skipFragments:p=!1}={}){v.hasNavigatedHorizontally=!0,c.rtl?(G.isActive()||p||U.next()===!1)&&Lt().left&&Et(n+1,c.navigationMode==="grid"?i:void 0):(G.isActive()||p||U.prev()===!1)&&Lt().left&&Et(n-1,c.navigationMode==="grid"?i:void 0)}function he({skipFragments:p=!1}={}){v.hasNavigatedHorizontally=!0,c.rtl?(G.isActive()||p||U.prev()===!1)&&Lt().right&&Et(n-1,c.navigationMode==="grid"?i:void 0):(G.isActive()||p||U.next()===!1)&&Lt().right&&Et(n+1,c.navigationMode==="grid"?i:void 0)}function ue({skipFragments:p=!1}={}){(G.isActive()||p||U.prev()===!1)&&Lt().up&&Et(n,i-1)}function pe({skipFragments:p=!1}={}){v.hasNavigatedVertically=!0,(G.isActive()||p||U.next()===!1)&&Lt().down&&Et(n,i+1)}function qe({skipFragments:p=!1}={}){if(p||U.prev()===!1)if(Lt().up)ue({skipFragments:p});else{let b;if(b=c.rtl?B(u.wrapper,Ot+".future").pop():B(u.wrapper,Ot+".past").pop(),b&&b.classList.contains("stack")){let _=b.querySelectorAll("section").length-1||void 0;Et(n-1,_)}else Yt({skipFragments:p})}}function ge({skipFragments:p=!1}={}){if(v.hasNavigatedHorizontally=!0,v.hasNavigatedVertically=!0,p||U.next()===!1){let b=Lt();b.down&&b.right&&c.loop&&Se()&&(b.down=!1),b.down?pe({skipFragments:p}):c.rtl?Yt({skipFragments:p}):he({skipFragments:p})}}function Pn(p){c.autoSlideStoppable&&Gt()}function He(p){let b=p.data;if(typeof b=="string"&&b.charAt(0)==="{"&&b.charAt(b.length-1)==="}"&&(b=JSON.parse(b),b.method&&typeof e[b.method]=="function"))if(Fn.test(b.method)===!1){const _=e[b.method].apply(e,b.args);vt("callback",{method:b.method,result:_})}else console.warn('reveal.js: "'+b.method+'" is is blacklisted from the postMessage API')}function Be(p){L==="running"&&/section/gi.test(p.target.nodeName)&&(L="idle",it({type:"slidetransitionend",data:{indexh:n,indexv:i,previousSlide:o,currentSlide:l}}))}function je(p){const b=ht(p.target,'a[href^="#"]');if(b){const _=b.getAttribute("href"),A=ct.getIndicesFromHash(_);A&&(e.slide(A.h,A.v,A.f),p.preventDefault())}}function Ue(p){kt()}function Fe(p){document.hidden===!1&&document.activeElement!==document.body&&(typeof document.activeElement.blur=="function"&&document.activeElement.blur(),document.body.focus())}function te(p){(document.fullscreenElement||document.webkitFullscreenElement)===u.wrapper&&(p.stopImmediatePropagation(),setTimeout(()=>{e.layout(),e.focus.focus()},1))}function We(p){if(p.currentTarget&&p.currentTarget.hasAttribute("href")){let b=p.currentTarget.getAttribute("href");b&&(It(b),p.preventDefault())}}function Mn(p){oe()&&c.loop===!1?(Et(0,0),Xt()):F?Xt():Gt()}const Ke={VERSION:un,initialize:Zt,configure:E,destroy:W,sync:Le,syncSlide:Rn,syncFragments:U.sync.bind(U),slide:Et,left:Yt,right:he,up:ue,down:pe,prev:qe,next:ge,navigateLeft:Yt,navigateRight:he,navigateUp:ue,navigateDown:pe,navigatePrev:qe,navigateNext:ge,navigateFragment:U.goto.bind(U),prevFragment:U.prev.bind(U),nextFragment:U.next.bind(U),on:q,off:ot,addEventListener:q,removeEventListener:ot,layout:kt,shuffle:le,availableRoutes:Lt,availableFragments:U.availableRoutes.bind(U),toggleHelp:bt,toggleOverview:G.toggle.bind(G),togglePause:Re,toggleAutoSlide:En,toggleJumpToSlide:Sn,isFirstSlide:Ee,isLastSlide:oe,isLastVerticalSlide:Se,isVerticalSlide:Wt,isPaused:Vt,isAutoSliding:An,isSpeakerNotes:mt.isSpeakerNotesWindow.bind(mt),isOverview:G.isActive.bind(G),isFocused:at.isFocused.bind(at),isPrintingPDF:ut.isPrintingPDF.bind(ut),isReady:()=>k,loadSlide:H.load.bind(H),unloadSlide:H.unload.bind(H),startEmbeddedContent:()=>H.startEmbeddedContent(l),stopEmbeddedContent:()=>H.stopEmbeddedContent(l,{unloadIframes:!1}),showPreview:It,hidePreview:st,addEventListeners:z,removeEventListeners:D,dispatchEvent:it,getState:Oe,setState:zn,getProgress:Tn,getIndices:ze,getSlidesAttributes:Cn,getSlidePastCount:$e,getTotalSlides:Ie,getSlide:De,getPreviousSlide:()=>o,getCurrentSlide:()=>l,getSlideBackground:$n,getSlideNotes:mt.getSlideNotes.bind(mt),getSlides:de,getHorizontalSlides:$t,getVerticalSlides:Pe,hasHorizontalSlides:Me,hasVerticalSlides:Ne,hasNavigatedHorizontally:()=>v.hasNavigatedHorizontally,hasNavigatedVertically:()=>v.hasNavigatedVertically,addKeyBinding:nt.addKeyBinding.bind(nt),removeKeyBinding:nt.removeKeyBinding.bind(nt),triggerKey:nt.triggerKey.bind(nt),registerKeyboardShortcut:nt.registerKeyboardShortcut.bind(nt),getComputedSlideSize:Jt,getScale:()=>f,getConfig:()=>c,getQueryHash:Ve,getSlidePath:ct.getHash.bind(ct),getRevealElement:()=>g,getSlidesElement:()=>u.slides,getViewportElement:()=>u.viewport,getBackgroundsElement:()=>Y.element,registerPlugin:gt.registerPlugin.bind(gt),hasPlugin:gt.hasPlugin.bind(gt),getPlugin:gt.getPlugin.bind(gt),getPlugins:gt.getRegisteredPlugins.bind(gt)};return jt(e,{...Ke,announceStatus:r,getStatusText:d,print:ut,focus:at,progress:T,controls:S,location:ct,overview:G,fragments:U,slideContent:H,slideNumber:J,onUserInput:Pn,closeOverlay:st,updateSlidesVisibility:ce,layoutSlideContents:Ct,transformSlides:St,cueAutoSlide:Ht,cancelAutoSlide:Qt}),Ke}let zt=pn,tn=[];zt.initialize=g=>(Object.assign(zt,new pn(document.querySelector(".reveal"),g)),tn.map(t=>t(zt)),zt.initialize()),["configure","on","off","addEventListener","removeEventListener","registerPlugin"].forEach(g=>{zt[g]=(...t)=>{tn.push(e=>e[g].call(null,...t))}}),zt.isReady=()=>!1,zt.VERSION=un;function ri(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let Ft={baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const oi=/[&<>"']/,li=/[&<>"']/g,ci=/[<>"']|&(?!#?\w+;)/,di=/[<>"']|&(?!#?\w+;)/g,hi={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},en=g=>hi[g];function dt(g,t){if(t){if(oi.test(g))return g.replace(li,en)}else if(ci.test(g))return g.replace(di,en);return g}const ui=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function gn(g){return g.replace(ui,(t,e)=>(e=e.toLowerCase())==="colon"?":":e.charAt(0)==="#"?e.charAt(1)==="x"?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):"")}const pi=/(^|[^\[])\^/g;function et(g,t){g=g.source||g,t=t||"";const e={replace:(n,i)=>(i=(i=i.source||i).replace(pi,"$1"),g=g.replace(n,i),e),getRegex:()=>new RegExp(g,t)};return e}const gi=/[^\w:]/g,mi=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function nn(g,t,e){if(g){let n;try{n=decodeURIComponent(gn(e)).replace(gi,"").toLowerCase()}catch{return null}if(n.indexOf("javascript:")===0||n.indexOf("vbscript:")===0||n.indexOf("data:")===0)return null}t&&!mi.test(e)&&(e=function(n,i){ne[" "+n]||(fi.test(n)?ne[" "+n]=n+"/":ne[" "+n]=se(n,"/",!0)),n=ne[" "+n];const o=n.indexOf(":")===-1;return i.substring(0,2)==="//"?o?i:n.replace(vi,"$1")+i:i.charAt(0)==="/"?o?i:n.replace(bi,"$1")+i:n+i}(t,e));try{e=encodeURI(e).replace(/%25/g,"%")}catch{return null}return e}const ne={},fi=/^[^:]+:\/*[^/]*$/,vi=/^([^:]+:)[\s\S]*$/,bi=/^([^:]+:\/*[^/]*)[\s\S]*$/,re={exec:function(){}};function wt(g){let t,e,n=1;for(;n<arguments.length;n++)for(e in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,e)&&(g[e]=t[e]);return g}function sn(g,t){const e=g.replace(/\|/g,(i,o,l)=>{let h=!1,c=o;for(;--c>=0&&l[c]==="\\";)h=!h;return h?"|":" |"}).split(/ \|/);let n=0;if(e[0].trim()||e.shift(),e.length>0&&!e[e.length-1].trim()&&e.pop(),e.length>t)e.splice(t);else for(;e.length<t;)e.push("");for(;n<e.length;n++)e[n]=e[n].trim().replace(/\\\|/g,"|");return e}function se(g,t,e){const n=g.length;if(n===0)return"";let i=0;for(;i<n;){const o=g.charAt(n-i-1);if(o!==t||e){if(o===t||!e)break;i++}else i++}return g.substr(0,n-i)}function mn(g){g&&g.sanitize&&!g.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function an(g,t){if(t<1)return"";let e="";for(;t>1;)1&t&&(e+=g),t>>=1,g+=g;return e+g}function rn(g,t,e,n){const i=t.href,o=t.title?dt(t.title):null,l=g[1].replace(/\\([\[\]])/g,"$1");if(g[0].charAt(0)!=="!"){n.state.inLink=!0;const h={type:"link",raw:e,href:i,title:o,text:l,tokens:n.inlineTokens(l,[])};return n.state.inLink=!1,h}return{type:"image",raw:e,href:i,title:o,text:dt(l)}}class ye{constructor(t){this.options=t||Ft}space(t){const e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){const e=this.rules.block.code.exec(t);if(e){const n=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?n:se(n,`
`)}}}fences(t){const e=this.rules.block.fences.exec(t);if(e){const n=e[0],i=function(o,l){const h=o.match(/^(\s+)(?:```)/);if(h===null)return l;const c=h[1];return l.split(`
`).map(k=>{const v=k.match(/^\s+/);if(v===null)return k;const[m]=v;return m.length>=c.length?k.slice(c.length):k}).join(`
`)}(n,e[3]||"");return{type:"code",raw:n,lang:e[2]?e[2].trim():e[2],text:i}}}heading(t){const e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(/#$/.test(n)){const o=se(n,"#");this.options.pedantic?n=o.trim():o&&!/ $/.test(o)||(n=o.trim())}const i={type:"heading",raw:e[0],depth:e[1].length,text:n,tokens:[]};return this.lexer.inline(i.text,i.tokens),i}}hr(t){const e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:e[0]}}blockquote(t){const e=this.rules.block.blockquote.exec(t);if(e){const n=e[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:e[0],tokens:this.lexer.blockTokens(n,[]),text:n}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n,i,o,l,h,c,k,v,m,f,w,u,L=e[1].trim();const I=L.length>1,$={type:"list",raw:"",ordered:I,start:I?+L.slice(0,-1):"",loose:!1,items:[]};L=I?`\\d{1,9}\\${L.slice(-1)}`:`\\${L}`,this.options.pedantic&&(L=I?L:"[*+-]");const Z=new RegExp(`^( {0,3}${L})((?: [^\\n]*)?(?:\\n|$))`);for(;t&&(u=!1,e=Z.exec(t))&&!this.rules.block.hr.test(t);){if(n=e[0],t=t.substring(n.length),v=e[2].split(`
`,1)[0],m=t.split(`
`,1)[0],this.options.pedantic?(l=2,w=v.trimLeft()):(l=e[2].search(/[^ ]/),l=l>4?1:l,w=v.slice(l),l+=e[1].length),c=!1,!v&&/^ *$/.test(m)&&(n+=m+`
`,t=t.substring(m.length+1),u=!0),!u){const H=new RegExp(`^ {0,${Math.min(3,l-1)}}(?:[*+-]|\\d{1,9}[.)])`);for(;t&&(f=t.split(`
`,1)[0],v=f,this.options.pedantic&&(v=v.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!H.test(v));){if(v.search(/[^ ]/)>=l||!v.trim())w+=`
`+v.slice(l);else{if(c)break;w+=`
`+v}c||v.trim()||(c=!0),n+=f+`
`,t=t.substring(f.length+1)}}$.loose||(k?$.loose=!0:/\n *\n *$/.test(n)&&(k=!0)),this.options.gfm&&(i=/^\[[ xX]\] /.exec(w),i&&(o=i[0]!=="[ ] ",w=w.replace(/^\[[ xX]\] +/,""))),$.items.push({type:"list_item",raw:n,task:!!i,checked:o,loose:!1,text:w}),$.raw+=n}$.items[$.items.length-1].raw=n.trimRight(),$.items[$.items.length-1].text=w.trimRight(),$.raw=$.raw.trimRight();const F=$.items.length;for(h=0;h<F;h++){this.lexer.state.top=!1,$.items[h].tokens=this.lexer.blockTokens($.items[h].text,[]);const H=$.items[h].tokens.filter(O=>O.type==="space"),J=H.every(O=>{const tt=O.raw.split("");let Y=0;for(const U of tt)if(U===`
`&&(Y+=1),Y>1)return!0;return!1});!$.loose&&H.length&&J&&($.loose=!0,$.items[h].loose=!0)}return $}}html(t){const e=this.rules.block.html.exec(t);if(e){const n={type:"html",raw:e[0],pre:!this.options.sanitizer&&(e[1]==="pre"||e[1]==="script"||e[1]==="style"),text:e[0]};return this.options.sanitize&&(n.type="paragraph",n.text=this.options.sanitizer?this.options.sanitizer(e[0]):dt(e[0]),n.tokens=[],this.lexer.inline(n.text,n.tokens)),n}}def(t){const e=this.rules.block.def.exec(t);if(e)return e[3]&&(e[3]=e[3].substring(1,e[3].length-1)),{type:"def",tag:e[1].toLowerCase().replace(/\s+/g," "),raw:e[0],href:e[2],title:e[3]}}table(t){const e=this.rules.block.table.exec(t);if(e){const n={type:"table",header:sn(e[1]).map(i=>({text:i})),align:e[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:e[3]&&e[3].trim()?e[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){n.raw=e[0];let i,o,l,h,c=n.align.length;for(i=0;i<c;i++)/^ *-+: *$/.test(n.align[i])?n.align[i]="right":/^ *:-+: *$/.test(n.align[i])?n.align[i]="center":/^ *:-+ *$/.test(n.align[i])?n.align[i]="left":n.align[i]=null;for(c=n.rows.length,i=0;i<c;i++)n.rows[i]=sn(n.rows[i],n.header.length).map(k=>({text:k}));for(c=n.header.length,o=0;o<c;o++)n.header[o].tokens=[],this.lexer.inlineTokens(n.header[o].text,n.header[o].tokens);for(c=n.rows.length,o=0;o<c;o++)for(h=n.rows[o],l=0;l<h.length;l++)h[l].tokens=[],this.lexer.inlineTokens(h[l].text,h[l].tokens);return n}}}lheading(t){const e=this.rules.block.lheading.exec(t);if(e){const n={type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}paragraph(t){const e=this.rules.block.paragraph.exec(t);if(e){const n={type:"paragraph",raw:e[0],text:e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1],tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}text(t){const e=this.rules.block.text.exec(t);if(e){const n={type:"text",raw:e[0],text:e[0],tokens:[]};return this.lexer.inline(n.text,n.tokens),n}}escape(t){const e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:dt(e[1])}}tag(t){const e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):dt(e[0]):e[0]}}link(t){const e=this.rules.inline.link.exec(t);if(e){const n=e[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const l=se(n.slice(0,-1),"\\");if((n.length-l.length)%2==0)return}else{const l=function(h,c){if(h.indexOf(c[1])===-1)return-1;const k=h.length;let v=0,m=0;for(;m<k;m++)if(h[m]==="\\")m++;else if(h[m]===c[0])v++;else if(h[m]===c[1]&&(v--,v<0))return m;return-1}(e[2],"()");if(l>-1){const h=(e[0].indexOf("!")===0?5:4)+e[1].length+l;e[2]=e[2].substring(0,l),e[0]=e[0].substring(0,h).trim(),e[3]=""}}let i=e[2],o="";if(this.options.pedantic){const l=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);l&&(i=l[1],o=l[3])}else o=e[3]?e[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(i=this.options.pedantic&&!/>$/.test(n)?i.slice(1):i.slice(1,-1)),rn(e,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:o&&o.replace(this.rules.inline._escapes,"$1")},e[0],this.lexer)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let i=(n[2]||n[1]).replace(/\s+/g," ");if(i=e[i.toLowerCase()],!i||!i.href){const o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return rn(n,i,n[0],this.lexer)}}emStrong(t,e,n=""){let i=this.rules.inline.emStrong.lDelim.exec(t);if(!i||i[3]&&n.match(/[\p{L}\p{N}]/u))return;const o=i[1]||i[2]||"";if(!o||o&&(n===""||this.rules.inline.punctuation.exec(n))){const l=i[0].length-1;let h,c,k=l,v=0;const m=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(m.lastIndex=0,e=e.slice(-1*t.length+l);(i=m.exec(e))!=null;){if(h=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!h)continue;if(c=h.length,i[3]||i[4]){k+=c;continue}if((i[5]||i[6])&&l%3&&!((l+c)%3)){v+=c;continue}if(k-=c,k>0)continue;if(c=Math.min(c,c+k+v),Math.min(l,c)%2){const w=t.slice(1,l+i.index+c);return{type:"em",raw:t.slice(0,l+i.index+c+1),text:w,tokens:this.lexer.inlineTokens(w,[])}}const f=t.slice(2,l+i.index+c-1);return{type:"strong",raw:t.slice(0,l+i.index+c+1),text:f,tokens:this.lexer.inlineTokens(f,[])}}}}codespan(t){const e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(/\n/g," ");const i=/[^ ]/.test(n),o=/^ /.test(n)&&/ $/.test(n);return i&&o&&(n=n.substring(1,n.length-1)),n=dt(n,!0),{type:"codespan",raw:e[0],text:n}}}br(t){const e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){const e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2],[])}}autolink(t,e){const n=this.rules.inline.autolink.exec(t);if(n){let i,o;return n[2]==="@"?(i=dt(this.options.mangle?e(n[1]):n[1]),o="mailto:"+i):(i=dt(n[1]),o=i),{type:"link",raw:n[0],text:i,href:o,tokens:[{type:"text",raw:i,text:i}]}}}url(t,e){let n;if(n=this.rules.inline.url.exec(t)){let i,o;if(n[2]==="@")i=dt(this.options.mangle?e(n[0]):n[0]),o="mailto:"+i;else{let l;do l=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(l!==n[0]);i=dt(n[0]),o=n[1]==="www."?"http://"+i:i}return{type:"link",raw:n[0],text:i,href:o,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(t,e){const n=this.rules.inline.text.exec(t);if(n){let i;return i=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):dt(n[0]):n[0]:dt(this.options.smartypants?e(n[0]):n[0]),{type:"text",raw:n[0],text:i}}}}const j={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:re,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};j.def=et(j.def).replace("label",j._label).replace("title",j._title).getRegex(),j.bullet=/(?:[*+-]|\d{1,9}[.)])/,j.listItemStart=et(/^( *)(bull) */).replace("bull",j.bullet).getRegex(),j.list=et(j.list).replace(/bull/g,j.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+j.def.source+")").getRegex(),j._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",j._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,j.html=et(j.html,"i").replace("comment",j._comment).replace("tag",j._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),j.paragraph=et(j._paragraph).replace("hr",j.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",j._tag).getRegex(),j.blockquote=et(j.blockquote).replace("paragraph",j.paragraph).getRegex(),j.normal=wt({},j),j.gfm=wt({},j.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),j.gfm.table=et(j.gfm.table).replace("hr",j.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",j._tag).getRegex(),j.gfm.paragraph=et(j._paragraph).replace("hr",j.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",j.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",j._tag).getRegex(),j.pedantic=wt({},j.normal,{html:et(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",j._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:re,paragraph:et(j.normal._paragraph).replace("hr",j.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",j.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const N={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:re,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:re,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function yi(g){return g.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function on(g){let t,e,n="";const i=g.length;for(t=0;t<i;t++)e=g.charCodeAt(t),Math.random()>.5&&(e="x"+e.toString(16)),n+="&#"+e+";";return n}N._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",N.punctuation=et(N.punctuation).replace(/punctuation/g,N._punctuation).getRegex(),N.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,N.escapedEmSt=/\\\*|\\_/g,N._comment=et(j._comment).replace("(?:-->|$)","-->").getRegex(),N.emStrong.lDelim=et(N.emStrong.lDelim).replace(/punct/g,N._punctuation).getRegex(),N.emStrong.rDelimAst=et(N.emStrong.rDelimAst,"g").replace(/punct/g,N._punctuation).getRegex(),N.emStrong.rDelimUnd=et(N.emStrong.rDelimUnd,"g").replace(/punct/g,N._punctuation).getRegex(),N._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,N._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,N._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,N.autolink=et(N.autolink).replace("scheme",N._scheme).replace("email",N._email).getRegex(),N._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,N.tag=et(N.tag).replace("comment",N._comment).replace("attribute",N._attribute).getRegex(),N._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,N._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,N._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,N.link=et(N.link).replace("label",N._label).replace("href",N._href).replace("title",N._title).getRegex(),N.reflink=et(N.reflink).replace("label",N._label).replace("ref",j._label).getRegex(),N.nolink=et(N.nolink).replace("ref",j._label).getRegex(),N.reflinkSearch=et(N.reflinkSearch,"g").replace("reflink",N.reflink).replace("nolink",N.nolink).getRegex(),N.normal=wt({},N),N.pedantic=wt({},N.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:et(/^!?\[(label)\]\((.*?)\)/).replace("label",N._label).getRegex(),reflink:et(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",N._label).getRegex()}),N.gfm=wt({},N.normal,{escape:et(N.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),N.gfm.url=et(N.gfm.url,"i").replace("email",N.gfm._extended_email).getRegex(),N.breaks=wt({},N.gfm,{br:et(N.br).replace("{2,}","*").getRegex(),text:et(N.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});class Mt{constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Ft,this.options.tokenizer=this.options.tokenizer||new ye,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:j.normal,inline:N.normal};this.options.pedantic?(e.block=j.pedantic,e.inline=N.pedantic):this.options.gfm&&(e.block=j.gfm,this.options.breaks?e.inline=N.breaks:e.inline=N.gfm),this.tokenizer.rules=e}static get rules(){return{block:j,inline:N}}static lex(t,e){return new Mt(e).lex(t)}static lexInline(t,e){return new Mt(e).inlineTokens(t)}lex(t){let e;for(t=t.replace(/\r\n|\r/g,`
`).replace(/\t/g,"    "),this.blockTokens(t,this.tokens);e=this.inlineQueue.shift();)this.inlineTokens(e.src,e.tokens);return this.tokens}blockTokens(t,e=[]){let n,i,o,l;for(this.options.pedantic&&(t=t.replace(/^ +$/gm,""));t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(h=>!!(n=h.call({lexer:this},t,e))&&(t=t.substring(n.raw.length),e.push(n),!0))))if(n=this.tokenizer.space(t))t=t.substring(n.raw.length),n.raw.length===1&&e.length>0?e[e.length-1].raw+=`
`:e.push(n);else if(n=this.tokenizer.code(t))t=t.substring(n.raw.length),i=e[e.length-1],!i||i.type!=="paragraph"&&i.type!=="text"?e.push(n):(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text);else if(n=this.tokenizer.fences(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.heading(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.hr(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.blockquote(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.list(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.html(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.def(t))t=t.substring(n.raw.length),i=e[e.length-1],!i||i.type!=="paragraph"&&i.type!=="text"?this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title}):(i.raw+=`
`+n.raw,i.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text);else if(n=this.tokenizer.table(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.lheading(t))t=t.substring(n.raw.length),e.push(n);else{if(o=t,this.options.extensions&&this.options.extensions.startBlock){let h=1/0;const c=t.slice(1);let k;this.options.extensions.startBlock.forEach(function(v){k=v.call({lexer:this},c),typeof k=="number"&&k>=0&&(h=Math.min(h,k))}),h<1/0&&h>=0&&(o=t.substring(0,h+1))}if(this.state.top&&(n=this.tokenizer.paragraph(o)))i=e[e.length-1],l&&i.type==="paragraph"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):e.push(n),l=o.length!==t.length,t=t.substring(n.raw.length);else if(n=this.tokenizer.text(t))t=t.substring(n.raw.length),i=e[e.length-1],i&&i.type==="text"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):e.push(n);else if(t){const h="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(h);break}throw new Error(h)}}return this.state.top=!0,e}inline(t,e){this.inlineQueue.push({src:t,tokens:e})}inlineTokens(t,e=[]){let n,i,o,l,h,c,k=t;if(this.tokens.links){const v=Object.keys(this.tokens.links);if(v.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(k))!=null;)v.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(k=k.slice(0,l.index)+"["+an("a",l[0].length-2)+"]"+k.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(k))!=null;)k=k.slice(0,l.index)+"["+an("a",l[0].length-2)+"]"+k.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.escapedEmSt.exec(k))!=null;)k=k.slice(0,l.index)+"++"+k.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;t;)if(h||(c=""),h=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(v=>!!(n=v.call({lexer:this},t,e))&&(t=t.substring(n.raw.length),e.push(n),!0))))if(n=this.tokenizer.escape(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.tag(t))t=t.substring(n.raw.length),i=e[e.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):e.push(n);else if(n=this.tokenizer.link(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.reflink(t,this.tokens.links))t=t.substring(n.raw.length),i=e[e.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):e.push(n);else if(n=this.tokenizer.emStrong(t,k,c))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.codespan(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.br(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.del(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.autolink(t,on))t=t.substring(n.raw.length),e.push(n);else if(this.state.inLink||!(n=this.tokenizer.url(t,on))){if(o=t,this.options.extensions&&this.options.extensions.startInline){let v=1/0;const m=t.slice(1);let f;this.options.extensions.startInline.forEach(function(w){f=w.call({lexer:this},m),typeof f=="number"&&f>=0&&(v=Math.min(v,f))}),v<1/0&&v>=0&&(o=t.substring(0,v+1))}if(n=this.tokenizer.inlineText(o,yi))t=t.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(c=n.raw.slice(-1)),h=!0,i=e[e.length-1],i&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):e.push(n);else if(t){const v="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(v);break}throw new Error(v)}}else t=t.substring(n.raw.length),e.push(n);return e}}class ke{constructor(t){this.options=t||Ft}code(t,e,n){const i=(e||"").match(/\S*/)[0];if(this.options.highlight){const o=this.options.highlight(t,i);o!=null&&o!==t&&(n=!0,t=o)}return t=t.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+dt(i,!0)+'">'+(n?t:dt(t,!0))+`</code></pre>
`:"<pre><code>"+(n?t:dt(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
`+t+`</blockquote>
`}html(t){return t}heading(t,e,n,i){return this.options.headerIds?"<h"+e+' id="'+this.options.headerPrefix+i.slug(n)+'">'+t+"</h"+e+`>
`:"<h"+e+">"+t+"</h"+e+`>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(t,e,n){const i=e?"ol":"ul";return"<"+i+(e&&n!==1?' start="'+n+'"':"")+`>
`+t+"</"+i+`>
`}listitem(t){return"<li>"+t+`</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(t){return"<p>"+t+`</p>
`}table(t,e){return e&&(e="<tbody>"+e+"</tbody>"),`<table>
<thead>
`+t+`</thead>
`+e+`</table>
`}tablerow(t){return`<tr>
`+t+`</tr>
`}tablecell(t,e){const n=e.header?"th":"td";return(e.align?"<"+n+' align="'+e.align+'">':"<"+n+">")+t+"</"+n+`>
`}strong(t){return"<strong>"+t+"</strong>"}em(t){return"<em>"+t+"</em>"}codespan(t){return"<code>"+t+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(t){return"<del>"+t+"</del>"}link(t,e,n){if((t=nn(this.options.sanitize,this.options.baseUrl,t))===null)return n;let i='<a href="'+dt(t)+'"';return e&&(i+=' title="'+e+'"'),i+=">"+n+"</a>",i}image(t,e,n){if((t=nn(this.options.sanitize,this.options.baseUrl,t))===null)return n;let i='<img src="'+t+'" alt="'+n+'"';return e&&(i+=' title="'+e+'"'),i+=this.options.xhtml?"/>":">",i}text(t){return t}}class fn{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,e,n){return""+n}image(t,e,n){return""+n}br(){return""}}class vn{constructor(){this.seen={}}serialize(t){return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(t,e){let n=t,i=0;if(this.seen.hasOwnProperty(n)){i=this.seen[t];do i++,n=t+"-"+i;while(this.seen.hasOwnProperty(n))}return e||(this.seen[t]=i,this.seen[n]=0),n}slug(t,e={}){const n=this.serialize(t);return this.getNextSafeSlug(n,e.dryrun)}}class Nt{constructor(t){this.options=t||Ft,this.options.renderer=this.options.renderer||new ke,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new fn,this.slugger=new vn}static parse(t,e){return new Nt(e).parse(t)}static parseInline(t,e){return new Nt(e).parseInline(t)}parse(t,e=!0){let n,i,o,l,h,c,k,v,m,f,w,u,L,I,$,Z,F,H,J,O="";const tt=t.length;for(n=0;n<tt;n++)if(f=t[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[f.type]&&(J=this.options.extensions.renderers[f.type].call({parser:this},f),J!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(f.type)))O+=J||"";else switch(f.type){case"space":continue;case"hr":O+=this.renderer.hr();continue;case"heading":O+=this.renderer.heading(this.parseInline(f.tokens),f.depth,gn(this.parseInline(f.tokens,this.textRenderer)),this.slugger);continue;case"code":O+=this.renderer.code(f.text,f.lang,f.escaped);continue;case"table":for(v="",k="",l=f.header.length,i=0;i<l;i++)k+=this.renderer.tablecell(this.parseInline(f.header[i].tokens),{header:!0,align:f.align[i]});for(v+=this.renderer.tablerow(k),m="",l=f.rows.length,i=0;i<l;i++){for(c=f.rows[i],k="",h=c.length,o=0;o<h;o++)k+=this.renderer.tablecell(this.parseInline(c[o].tokens),{header:!1,align:f.align[o]});m+=this.renderer.tablerow(k)}O+=this.renderer.table(v,m);continue;case"blockquote":m=this.parse(f.tokens),O+=this.renderer.blockquote(m);continue;case"list":for(w=f.ordered,u=f.start,L=f.loose,l=f.items.length,m="",i=0;i<l;i++)$=f.items[i],Z=$.checked,F=$.task,I="",$.task&&(H=this.renderer.checkbox(Z),L?$.tokens.length>0&&$.tokens[0].type==="paragraph"?($.tokens[0].text=H+" "+$.tokens[0].text,$.tokens[0].tokens&&$.tokens[0].tokens.length>0&&$.tokens[0].tokens[0].type==="text"&&($.tokens[0].tokens[0].text=H+" "+$.tokens[0].tokens[0].text)):$.tokens.unshift({type:"text",text:H}):I+=H),I+=this.parse($.tokens,L),m+=this.renderer.listitem(I,F,Z);O+=this.renderer.list(m,w,u);continue;case"html":O+=this.renderer.html(f.text);continue;case"paragraph":O+=this.renderer.paragraph(this.parseInline(f.tokens));continue;case"text":for(m=f.tokens?this.parseInline(f.tokens):f.text;n+1<tt&&t[n+1].type==="text";)f=t[++n],m+=`
`+(f.tokens?this.parseInline(f.tokens):f.text);O+=e?this.renderer.paragraph(m):m;continue;default:{const Y='Token with "'+f.type+'" type was not found.';if(this.options.silent)return void console.error(Y);throw new Error(Y)}}return O}parseInline(t,e){e=e||this.renderer;let n,i,o,l="";const h=t.length;for(n=0;n<h;n++)if(i=t[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]&&(o=this.options.extensions.renderers[i.type].call({parser:this},i),o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)))l+=o||"";else switch(i.type){case"escape":case"text":l+=e.text(i.text);break;case"html":l+=e.html(i.text);break;case"link":l+=e.link(i.href,i.title,this.parseInline(i.tokens,e));break;case"image":l+=e.image(i.href,i.title,i.text);break;case"strong":l+=e.strong(this.parseInline(i.tokens,e));break;case"em":l+=e.em(this.parseInline(i.tokens,e));break;case"codespan":l+=e.codespan(i.text);break;case"br":l+=e.br();break;case"del":l+=e.del(this.parseInline(i.tokens,e));break;default:{const c='Token with "'+i.type+'" type was not found.';if(this.options.silent)return void console.error(c);throw new Error(c)}}return l}}function K(g,t,e){if(g==null)throw new Error("marked(): input parameter is undefined or null");if(typeof g!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(g)+", string expected");if(typeof t=="function"&&(e=t,t=null),mn(t=wt({},K.defaults,t||{})),e){const n=t.highlight;let i;try{i=Mt.lex(g,t)}catch(h){return e(h)}const o=function(h){let c;if(!h)try{t.walkTokens&&K.walkTokens(i,t.walkTokens),c=Nt.parse(i,t)}catch(k){h=k}return t.highlight=n,h?e(h):e(null,c)};if(!n||n.length<3||(delete t.highlight,!i.length))return o();let l=0;return K.walkTokens(i,function(h){h.type==="code"&&(l++,setTimeout(()=>{n(h.text,h.lang,function(c,k){if(c)return o(c);k!=null&&k!==h.text&&(h.text=k,h.escaped=!0),l--,l===0&&o()})},0))}),void(l===0&&o())}try{const n=Mt.lex(g,t);return t.walkTokens&&K.walkTokens(n,t.walkTokens),Nt.parse(n,t)}catch(n){if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t.silent)return"<p>An error occurred:</p><pre>"+dt(n.message+"",!0)+"</pre>";throw n}}K.options=K.setOptions=function(g){var t;return wt(K.defaults,g),t=K.defaults,Ft=t,K},K.getDefaults=ri,K.defaults=Ft,K.use=function(...g){const t=wt({},...g),e=K.defaults.extensions||{renderers:{},childTokens:{}};let n;g.forEach(i=>{if(i.extensions&&(n=!0,i.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if(o.renderer){const l=e.renderers?e.renderers[o.name]:null;e.renderers[o.name]=l?function(...h){let c=o.renderer.apply(this,h);return c===!1&&(c=l.apply(this,h)),c}:o.renderer}if(o.tokenizer){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");e[o.level]?e[o.level].unshift(o.tokenizer):e[o.level]=[o.tokenizer],o.start&&(o.level==="block"?e.startBlock?e.startBlock.push(o.start):e.startBlock=[o.start]:o.level==="inline"&&(e.startInline?e.startInline.push(o.start):e.startInline=[o.start]))}o.childTokens&&(e.childTokens[o.name]=o.childTokens)})),i.renderer){const o=K.defaults.renderer||new ke;for(const l in i.renderer){const h=o[l];o[l]=(...c)=>{let k=i.renderer[l].apply(o,c);return k===!1&&(k=h.apply(o,c)),k}}t.renderer=o}if(i.tokenizer){const o=K.defaults.tokenizer||new ye;for(const l in i.tokenizer){const h=o[l];o[l]=(...c)=>{let k=i.tokenizer[l].apply(o,c);return k===!1&&(k=h.apply(o,c)),k}}t.tokenizer=o}if(i.walkTokens){const o=K.defaults.walkTokens;t.walkTokens=function(l){i.walkTokens.call(this,l),o&&o.call(this,l)}}n&&(t.extensions=e),K.setOptions(t)})},K.walkTokens=function(g,t){for(const e of g)switch(t.call(K,e),e.type){case"table":for(const n of e.header)K.walkTokens(n.tokens,t);for(const n of e.rows)for(const i of n)K.walkTokens(i.tokens,t);break;case"list":K.walkTokens(e.items,t);break;default:K.defaults.extensions&&K.defaults.extensions.childTokens&&K.defaults.extensions.childTokens[e.type]?K.defaults.extensions.childTokens[e.type].forEach(function(n){K.walkTokens(e[n],t)}):e.tokens&&K.walkTokens(e.tokens,t)}},K.parseInline=function(g,t){if(g==null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof g!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(g)+", string expected");mn(t=wt({},K.defaults,t||{}));try{const e=Mt.lexInline(g,t);return t.walkTokens&&K.walkTokens(e,t.walkTokens),Nt.parseInline(e,t)}catch(e){if(e.message+=`
Please report this to https://github.com/markedjs/marked.`,t.silent)return"<p>An error occurred:</p><pre>"+dt(e.message+"",!0)+"</pre>";throw e}},K.Parser=Nt,K.parser=Nt.parse,K.Renderer=ke,K.TextRenderer=fn,K.Lexer=Mt,K.lexer=Mt.lex,K.Tokenizer=ye,K.Slugger=vn,K.parse=K;/*!
 * The reveal.js markdown plugin. Handles parsing of
 * markdown inside of presentations as well as loading
 * of external markdown documents.
 */const ln="__SCRIPT_END__",ie=/\[\s*((\d*):)?\s*([\s\d,|-]*)\]/,ki={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},wi=()=>{let g;function t(v){let m=(v.querySelector("[data-template]")||v.querySelector("script")||v).textContent;m=m.replace(new RegExp(ln,"g"),"<\/script>");const f=m.match(/^\n?(\s*)/)[1].length,w=m.match(/^\n?(\t*)/)[1].length;return w>0?m=m.replace(new RegExp("\\n?\\t{"+w+"}(.*)","g"),function(u,L){return`
`+L}):f>1&&(m=m.replace(new RegExp("\\n? {"+f+"}(.*)","g"),function(u,L){return`
`+L})),m}function e(v){const m=v.attributes,f=[];for(let w=0,u=m.length;w<u;w++){const L=m[w].name,I=m[w].value;/data\-(markdown|separator|vertical|notes)/gi.test(L)||(I?f.push(L+'="'+I+'"'):f.push(L))}return f.join(" ")}function n(v){const m=g.getConfig().markdown;return(v=v||{}).separator=v.separator||(m==null?void 0:m.separator)||`\r?
---\r?
`,v.verticalSeparator=v.verticalSeparator||(m==null?void 0:m.verticalSeparator)||null,v.notesSeparator=v.notesSeparator||(m==null?void 0:m.notesSeparator)||"^s*notes?:",v.attributes=v.attributes||"",v}function i(v,m){m=n(m);const f=v.split(new RegExp(m.notesSeparator,"mgi"));return f.length===2&&(v=f[0]+'<aside class="notes">'+K(f[1].trim())+"</aside>"),'<script type="text/template">'+(v=v.replace(/<\/script>/g,ln))+"<\/script>"}function o(v,m){m=n(m);const f=new RegExp(m.separator+(m.verticalSeparator?"|"+m.verticalSeparator:""),"mg"),w=new RegExp(m.separator);let u,L,I,$=0,Z=!0,F=[];for(;u=f.exec(v);)L=w.test(u[0]),!L&&Z&&F.push([]),I=v.substring($,u.index),L&&Z?F.push(I):F[F.length-1].push(I),$=f.lastIndex,Z=L;(Z?F:F[F.length-1]).push(v.substring($));let H="";for(let J=0,O=F.length;J<O;J++)F[J]instanceof Array?(H+="<section "+m.attributes+">",F[J].forEach(function(tt){H+="<section data-markdown>"+i(tt,m)+"</section>"}),H+="</section>"):H+="<section "+m.attributes+" data-markdown>"+i(F[J],m)+"</section>";return H}function l(v){return new Promise(function(m){const f=[];[].slice.call(v.querySelectorAll("section[data-markdown]:not([data-markdown-parsed])")).forEach(function(w,u){w.getAttribute("data-markdown").length?f.push(function(L){return new Promise(function(I,$){const Z=new XMLHttpRequest,F=L.getAttribute("data-markdown"),H=L.getAttribute("data-charset");H!==null&&H!==""&&Z.overrideMimeType("text/html; charset="+H),Z.onreadystatechange=(function(J,O){O.readyState===4&&(O.status>=200&&O.status<300||O.status===0?I(O,F):$(O,F))}).bind(this,L,Z),Z.open("GET",F,!0);try{Z.send()}catch(J){console.warn("Failed to get the Markdown file "+F+". Make sure that the presentation and the file are served by a HTTP server and the file can be found there. "+J),I(Z,F)}})}(w).then(function(L,I){w.outerHTML=o(L.responseText,{separator:w.getAttribute("data-separator"),verticalSeparator:w.getAttribute("data-separator-vertical"),notesSeparator:w.getAttribute("data-separator-notes"),attributes:e(w)})},function(L,I){w.outerHTML='<section data-state="alert">ERROR: The attempt to fetch '+I+" failed with HTTP status "+L.status+".Check your browser's JavaScript console for more details.<p>Remember that you need to serve the presentation HTML from a HTTP server.</p></section>"})):w.outerHTML=o(t(w),{separator:w.getAttribute("data-separator"),verticalSeparator:w.getAttribute("data-separator-vertical"),notesSeparator:w.getAttribute("data-separator-notes"),attributes:e(w)})}),Promise.all(f).then(m)})}function h(v,m,f){const w=new RegExp(f,"mg"),u=new RegExp('([^"= ]+?)="([^"]+?)"|(data-[^"= ]+?)(?=[" ])',"mg");let L,I,$=v.nodeValue;if(L=w.exec($)){const Z=L[1];for($=$.substring(0,L.index)+$.substring(w.lastIndex),v.nodeValue=$;I=u.exec(Z);)I[2]?m.setAttribute(I[1],I[2]):m.setAttribute(I[3],"");return!0}return!1}function c(v,m,f,w,u){if(m!==null&&m.childNodes!==void 0&&m.childNodes.length>0){let L=m;for(let I=0;I<m.childNodes.length;I++){const $=m.childNodes[I];if(I>0){let F=I-1;for(;F>=0;){const H=m.childNodes[F];if(typeof H.setAttribute=="function"&&H.tagName!=="BR"){L=H;break}F-=1}}let Z=v;$.nodeName==="section"&&(Z=$,L=$),typeof $.setAttribute!="function"&&$.nodeType!==Node.COMMENT_NODE||c(Z,$,L,w,u)}}m.nodeType===Node.COMMENT_NODE&&h(m,f,w)===!1&&h(m,v,u)}function k(){const v=g.getRevealElement().querySelectorAll("[data-markdown]:not([data-markdown-parsed])");return[].slice.call(v).forEach(function(m){m.setAttribute("data-markdown-parsed",!0);const f=m.querySelector("aside.notes"),w=t(m);m.innerHTML=K(w),c(m,m,null,m.getAttribute("data-element-attributes")||m.parentNode.getAttribute("data-element-attributes")||"\\.element\\s*?(.+?)$",m.getAttribute("data-attributes")||m.parentNode.getAttribute("data-attributes")||"\\.slide:\\s*?(\\S.+?)$"),f&&m.appendChild(f)}),Promise.resolve()}return{id:"markdown",init:function(v){g=v;let{renderer:m,animateLists:f,...w}=g.getConfig().markdown||{};return m||(m=new K.Renderer,m.code=(u,L)=>{let I="",$="";if(ie.test(L)){let Z=L.match(ie)[2];Z&&(I=`data-ln-start-from="${Z.trim()}"`),$=L.match(ie)[3].trim(),$=`data-line-numbers="${$}"`,L=L.replace(ie,"").trim()}return`<pre><code ${$} ${I} class="${L}">${u=u.replace(/([&<>'"])/g,Z=>ki[Z])}</code></pre>`}),f===!0&&(m.listitem=u=>`<li class="fragment">${u}</li>`),K.setOptions({renderer:m,...w}),l(g.getRevealElement()).then(k)},processSlides:l,convertSlides:k,slidify:o,marked:K}};var bn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yn(g){return g&&g.__esModule&&Object.prototype.hasOwnProperty.call(g,"default")?g.default:g}var kn={exports:{}};(function(g,t){(function(e,n){g.exports=n()})(bn,function(){function e(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let n={baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const i=/[&<>"']/,o=/[&<>"']/g,l=/[<>"']|&(?!#?\w+;)/,h=/[<>"']|&(?!#?\w+;)/g,c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},k=P=>c[P];function v(P,a){if(a){if(i.test(P))return P.replace(o,k)}else if(l.test(P))return P.replace(h,k);return P}const m=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function f(P){return P.replace(m,(a,s)=>(s=s.toLowerCase())==="colon"?":":s.charAt(0)==="#"?s.charAt(1)==="x"?String.fromCharCode(parseInt(s.substring(2),16)):String.fromCharCode(+s.substring(1)):"")}const w=/(^|[^\[])\^/g;function u(P,a){P=P.source||P,a=a||"";const s={replace:(r,d)=>(d=(d=d.source||d).replace(w,"$1"),P=P.replace(r,d),s),getRegex:()=>new RegExp(P,a)};return s}const L=/[^\w:]/g,I=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function $(P,a,s){if(P){let r;try{r=decodeURIComponent(f(s)).replace(L,"").toLowerCase()}catch{return null}if(r.indexOf("javascript:")===0||r.indexOf("vbscript:")===0||r.indexOf("data:")===0)return null}a&&!I.test(s)&&(s=function(r,d){Z[" "+r]||(F.test(r)?Z[" "+r]=r+"/":Z[" "+r]=U(r,"/",!0)),r=Z[" "+r];const y=r.indexOf(":")===-1;return d.substring(0,2)==="//"?y?d:r.replace(H,"$1")+d:d.charAt(0)==="/"?y?d:r.replace(J,"$1")+d:r+d}(a,s));try{s=encodeURI(s).replace(/%25/g,"%")}catch{return null}return s}const Z={},F=/^[^:]+:\/*[^/]*$/,H=/^([^:]+:)[\s\S]*$/,J=/^([^:]+:\/*[^/]*)[\s\S]*$/,O={exec:function(){}};function tt(P){let a,s,r=1;for(;r<arguments.length;r++)for(s in a=arguments[r],a)Object.prototype.hasOwnProperty.call(a,s)&&(P[s]=a[s]);return P}function Y(P,a){const s=P.replace(/\|/g,(d,y,x)=>{let R=!1,E=y;for(;--E>=0&&x[E]==="\\";)R=!R;return R?"|":" |"}).split(/ \|/);let r=0;if(s[0].trim()||s.shift(),s.length>0&&!s[s.length-1].trim()&&s.pop(),s.length>a)s.splice(a);else for(;s.length<a;)s.push("");for(;r<s.length;r++)s[r]=s[r].trim().replace(/\\\|/g,"|");return s}function U(P,a,s){const r=P.length;if(r===0)return"";let d=0;for(;d<r;){const y=P.charAt(r-d-1);if(y!==a||s){if(y===a||!s)break;d++}else d++}return P.substr(0,r-d)}function G(P){P&&P.sanitize&&!P.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function nt(P,a){if(a<1)return"";let s="";for(;a>1;)1&a&&(s+=P),a>>=1,P+=P;return s+P}function ct(P,a,s,r){const d=a.href,y=a.title?v(a.title):null,x=P[1].replace(/\\([\[\]])/g,"$1");if(P[0].charAt(0)!=="!"){r.state.inLink=!0;const R={type:"link",raw:s,href:d,title:y,text:x,tokens:r.inlineTokens(x,[])};return r.state.inLink=!1,R}return{type:"image",raw:s,href:d,title:y,text:v(x)}}class S{constructor(a){this.options=a||n}space(a){const s=this.rules.block.newline.exec(a);if(s&&s[0].length>0)return{type:"space",raw:s[0]}}code(a){const s=this.rules.block.code.exec(a);if(s){const r=s[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:s[0],codeBlockStyle:"indented",text:this.options.pedantic?r:U(r,`
`)}}}fences(a){const s=this.rules.block.fences.exec(a);if(s){const r=s[0],d=function(y,x){const R=y.match(/^(\s+)(?:```)/);if(R===null)return x;const E=R[1];return x.split(`
`).map(z=>{const D=z.match(/^\s+/);if(D===null)return z;const[W]=D;return W.length>=E.length?z.slice(E.length):z}).join(`
`)}(r,s[3]||"");return{type:"code",raw:r,lang:s[2]?s[2].trim():s[2],text:d}}}heading(a){const s=this.rules.block.heading.exec(a);if(s){let r=s[2].trim();if(/#$/.test(r)){const y=U(r,"#");this.options.pedantic?r=y.trim():y&&!/ $/.test(y)||(r=y.trim())}const d={type:"heading",raw:s[0],depth:s[1].length,text:r,tokens:[]};return this.lexer.inline(d.text,d.tokens),d}}hr(a){const s=this.rules.block.hr.exec(a);if(s)return{type:"hr",raw:s[0]}}blockquote(a){const s=this.rules.block.blockquote.exec(a);if(s){const r=s[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:s[0],tokens:this.lexer.blockTokens(r,[]),text:r}}}list(a){let s=this.rules.block.list.exec(a);if(s){let r,d,y,x,R,E,z,D,W,q,ot,St,it=s[1].trim();const vt=it.length>1,Q={type:"list",raw:"",ordered:vt,start:vt?+it.slice(0,-1):"",loose:!1,items:[]};it=vt?`\\d{1,9}\\${it.slice(-1)}`:`\\${it}`,this.options.pedantic&&(it=vt?it:"[*+-]");const Rt=new RegExp(`^( {0,3}${it})((?: [^\\n]*)?(?:\\n|$))`);for(;a&&(St=!1,s=Rt.exec(a))&&!this.rules.block.hr.test(a);){if(r=s[0],a=a.substring(r.length),D=s[2].split(`
`,1)[0],W=a.split(`
`,1)[0],this.options.pedantic?(x=2,ot=D.trimLeft()):(x=s[2].search(/[^ ]/),x=x>4?1:x,ot=D.slice(x),x+=s[1].length),E=!1,!D&&/^ *$/.test(W)&&(r+=W+`
`,a=a.substring(W.length+1),St=!0),!St){const bt=new RegExp(`^ {0,${Math.min(3,x-1)}}(?:[*+-]|\\d{1,9}[.)])`);for(;a&&(q=a.split(`
`,1)[0],D=q,this.options.pedantic&&(D=D.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!bt.test(D));){if(D.search(/[^ ]/)>=x||!D.trim())ot+=`
`+D.slice(x);else{if(E)break;ot+=`
`+D}E||D.trim()||(E=!0),r+=q+`
`,a=a.substring(q.length+1)}}Q.loose||(z?Q.loose=!0:/\n *\n *$/.test(r)&&(z=!0)),this.options.gfm&&(d=/^\[[ xX]\] /.exec(ot),d&&(y=d[0]!=="[ ] ",ot=ot.replace(/^\[[ xX]\] +/,""))),Q.items.push({type:"list_item",raw:r,task:!!d,checked:y,loose:!1,text:ot}),Q.raw+=r}Q.items[Q.items.length-1].raw=r.trimRight(),Q.items[Q.items.length-1].text=ot.trimRight(),Q.raw=Q.raw.trimRight();const It=Q.items.length;for(R=0;R<It;R++){this.lexer.state.top=!1,Q.items[R].tokens=this.lexer.blockTokens(Q.items[R].text,[]);const bt=Q.items[R].tokens.filter(st=>st.type==="space"),_t=bt.every(st=>{const kt=st.raw.split("");let Ct=0;for(const Jt of kt)if(Jt===`
`&&(Ct+=1),Ct>1)return!0;return!1});!Q.loose&&bt.length&&_t&&(Q.loose=!0,Q.items[R].loose=!0)}return Q}}html(a){const s=this.rules.block.html.exec(a);if(s){const r={type:"html",raw:s[0],pre:!this.options.sanitizer&&(s[1]==="pre"||s[1]==="script"||s[1]==="style"),text:s[0]};return this.options.sanitize&&(r.type="paragraph",r.text=this.options.sanitizer?this.options.sanitizer(s[0]):v(s[0]),r.tokens=[],this.lexer.inline(r.text,r.tokens)),r}}def(a){const s=this.rules.block.def.exec(a);if(s)return s[3]&&(s[3]=s[3].substring(1,s[3].length-1)),{type:"def",tag:s[1].toLowerCase().replace(/\s+/g," "),raw:s[0],href:s[2],title:s[3]}}table(a){const s=this.rules.block.table.exec(a);if(s){const r={type:"table",header:Y(s[1]).map(d=>({text:d})),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:s[3]&&s[3].trim()?s[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(r.header.length===r.align.length){r.raw=s[0];let d,y,x,R,E=r.align.length;for(d=0;d<E;d++)/^ *-+: *$/.test(r.align[d])?r.align[d]="right":/^ *:-+: *$/.test(r.align[d])?r.align[d]="center":/^ *:-+ *$/.test(r.align[d])?r.align[d]="left":r.align[d]=null;for(E=r.rows.length,d=0;d<E;d++)r.rows[d]=Y(r.rows[d],r.header.length).map(z=>({text:z}));for(E=r.header.length,y=0;y<E;y++)r.header[y].tokens=[],this.lexer.inlineTokens(r.header[y].text,r.header[y].tokens);for(E=r.rows.length,y=0;y<E;y++)for(R=r.rows[y],x=0;x<R.length;x++)R[x].tokens=[],this.lexer.inlineTokens(R[x].text,R[x].tokens);return r}}}lheading(a){const s=this.rules.block.lheading.exec(a);if(s){const r={type:"heading",raw:s[0],depth:s[2].charAt(0)==="="?1:2,text:s[1],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}paragraph(a){const s=this.rules.block.paragraph.exec(a);if(s){const r={type:"paragraph",raw:s[0],text:s[1].charAt(s[1].length-1)===`
`?s[1].slice(0,-1):s[1],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}text(a){const s=this.rules.block.text.exec(a);if(s){const r={type:"text",raw:s[0],text:s[0],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}escape(a){const s=this.rules.inline.escape.exec(a);if(s)return{type:"escape",raw:s[0],text:v(s[1])}}tag(a){const s=this.rules.inline.tag.exec(a);if(s)return!this.lexer.state.inLink&&/^<a /i.test(s[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(s[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(s[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(s[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:s[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):v(s[0]):s[0]}}link(a){const s=this.rules.inline.link.exec(a);if(s){const r=s[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const x=U(r.slice(0,-1),"\\");if((r.length-x.length)%2==0)return}else{const x=function(R,E){if(R.indexOf(E[1])===-1)return-1;const z=R.length;let D=0,W=0;for(;W<z;W++)if(R[W]==="\\")W++;else if(R[W]===E[0])D++;else if(R[W]===E[1]&&(D--,D<0))return W;return-1}(s[2],"()");if(x>-1){const R=(s[0].indexOf("!")===0?5:4)+s[1].length+x;s[2]=s[2].substring(0,x),s[0]=s[0].substring(0,R).trim(),s[3]=""}}let d=s[2],y="";if(this.options.pedantic){const x=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(d);x&&(d=x[1],y=x[3])}else y=s[3]?s[3].slice(1,-1):"";return d=d.trim(),/^</.test(d)&&(d=this.options.pedantic&&!/>$/.test(r)?d.slice(1):d.slice(1,-1)),ct(s,{href:d&&d.replace(this.rules.inline._escapes,"$1"),title:y&&y.replace(this.rules.inline._escapes,"$1")},s[0],this.lexer)}}reflink(a,s){let r;if((r=this.rules.inline.reflink.exec(a))||(r=this.rules.inline.nolink.exec(a))){let d=(r[2]||r[1]).replace(/\s+/g," ");if(d=s[d.toLowerCase()],!d||!d.href){const y=r[0].charAt(0);return{type:"text",raw:y,text:y}}return ct(r,d,r[0],this.lexer)}}emStrong(a,s,r=""){let d=this.rules.inline.emStrong.lDelim.exec(a);if(!d||d[3]&&r.match(/[\p{L}\p{N}]/u))return;const y=d[1]||d[2]||"";if(!y||y&&(r===""||this.rules.inline.punctuation.exec(r))){const x=d[0].length-1;let R,E,z=x,D=0;const W=d[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(W.lastIndex=0,s=s.slice(-1*a.length+x);(d=W.exec(s))!=null;){if(R=d[1]||d[2]||d[3]||d[4]||d[5]||d[6],!R)continue;if(E=R.length,d[3]||d[4]){z+=E;continue}if((d[5]||d[6])&&x%3&&!((x+E)%3)){D+=E;continue}if(z-=E,z>0)continue;if(E=Math.min(E,E+z+D),Math.min(x,E)%2){const ot=a.slice(1,x+d.index+E);return{type:"em",raw:a.slice(0,x+d.index+E+1),text:ot,tokens:this.lexer.inlineTokens(ot,[])}}const q=a.slice(2,x+d.index+E-1);return{type:"strong",raw:a.slice(0,x+d.index+E+1),text:q,tokens:this.lexer.inlineTokens(q,[])}}}}codespan(a){const s=this.rules.inline.code.exec(a);if(s){let r=s[2].replace(/\n/g," ");const d=/[^ ]/.test(r),y=/^ /.test(r)&&/ $/.test(r);return d&&y&&(r=r.substring(1,r.length-1)),r=v(r,!0),{type:"codespan",raw:s[0],text:r}}}br(a){const s=this.rules.inline.br.exec(a);if(s)return{type:"br",raw:s[0]}}del(a){const s=this.rules.inline.del.exec(a);if(s)return{type:"del",raw:s[0],text:s[2],tokens:this.lexer.inlineTokens(s[2],[])}}autolink(a,s){const r=this.rules.inline.autolink.exec(a);if(r){let d,y;return r[2]==="@"?(d=v(this.options.mangle?s(r[1]):r[1]),y="mailto:"+d):(d=v(r[1]),y=d),{type:"link",raw:r[0],text:d,href:y,tokens:[{type:"text",raw:d,text:d}]}}}url(a,s){let r;if(r=this.rules.inline.url.exec(a)){let d,y;if(r[2]==="@")d=v(this.options.mangle?s(r[0]):r[0]),y="mailto:"+d;else{let x;do x=r[0],r[0]=this.rules.inline._backpedal.exec(r[0])[0];while(x!==r[0]);d=v(r[0]),y=r[1]==="www."?"http://"+d:d}return{type:"link",raw:r[0],text:d,href:y,tokens:[{type:"text",raw:d,text:d}]}}}inlineText(a,s){const r=this.rules.inline.text.exec(a);if(r){let d;return d=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):v(r[0]):r[0]:v(this.options.smartypants?s(r[0]):r[0]),{type:"text",raw:r[0],text:d}}}}const T={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:O,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};T.def=u(T.def).replace("label",T._label).replace("title",T._title).getRegex(),T.bullet=/(?:[*+-]|\d{1,9}[.)])/,T.listItemStart=u(/^( *)(bull) */).replace("bull",T.bullet).getRegex(),T.list=u(T.list).replace(/bull/g,T.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+T.def.source+")").getRegex(),T._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",T._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,T.html=u(T.html,"i").replace("comment",T._comment).replace("tag",T._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),T.paragraph=u(T._paragraph).replace("hr",T.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",T._tag).getRegex(),T.blockquote=u(T.blockquote).replace("paragraph",T.paragraph).getRegex(),T.normal=tt({},T),T.gfm=tt({},T.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),T.gfm.table=u(T.gfm.table).replace("hr",T.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",T._tag).getRegex(),T.gfm.paragraph=u(T._paragraph).replace("hr",T.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",T.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",T._tag).getRegex(),T.pedantic=tt({},T.normal,{html:u(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",T._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:O,paragraph:u(T.normal._paragraph).replace("hr",T.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",T.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const C={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:O,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:O,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function gt(P){return P.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function ut(P){let a,s,r="";const d=P.length;for(a=0;a<d;a++)s=P.charCodeAt(a),Math.random()>.5&&(s="x"+s.toString(16)),r+="&#"+s+";";return r}C._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",C.punctuation=u(C.punctuation).replace(/punctuation/g,C._punctuation).getRegex(),C.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,C.escapedEmSt=/\\\*|\\_/g,C._comment=u(T._comment).replace("(?:-->|$)","-->").getRegex(),C.emStrong.lDelim=u(C.emStrong.lDelim).replace(/punct/g,C._punctuation).getRegex(),C.emStrong.rDelimAst=u(C.emStrong.rDelimAst,"g").replace(/punct/g,C._punctuation).getRegex(),C.emStrong.rDelimUnd=u(C.emStrong.rDelimUnd,"g").replace(/punct/g,C._punctuation).getRegex(),C._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,C._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,C._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,C.autolink=u(C.autolink).replace("scheme",C._scheme).replace("email",C._email).getRegex(),C._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,C.tag=u(C.tag).replace("comment",C._comment).replace("attribute",C._attribute).getRegex(),C._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,C._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,C._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,C.link=u(C.link).replace("label",C._label).replace("href",C._href).replace("title",C._title).getRegex(),C.reflink=u(C.reflink).replace("label",C._label).replace("ref",T._label).getRegex(),C.nolink=u(C.nolink).replace("ref",T._label).getRegex(),C.reflinkSearch=u(C.reflinkSearch,"g").replace("reflink",C.reflink).replace("nolink",C.nolink).getRegex(),C.normal=tt({},C),C.pedantic=tt({},C.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:u(/^!?\[(label)\]\((.*?)\)/).replace("label",C._label).getRegex(),reflink:u(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",C._label).getRegex()}),C.gfm=tt({},C.normal,{escape:u(C.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),C.gfm.url=u(C.gfm.url,"i").replace("email",C.gfm._extended_email).getRegex(),C.breaks=tt({},C.gfm,{br:u(C.br).replace("{2,}","*").getRegex(),text:u(C.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});class at{constructor(a){this.tokens=[],this.tokens.links=Object.create(null),this.options=a||n,this.options.tokenizer=this.options.tokenizer||new S,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const s={block:T.normal,inline:C.normal};this.options.pedantic?(s.block=T.pedantic,s.inline=C.pedantic):this.options.gfm&&(s.block=T.gfm,this.options.breaks?s.inline=C.breaks:s.inline=C.gfm),this.tokenizer.rules=s}static get rules(){return{block:T,inline:C}}static lex(a,s){return new at(s).lex(a)}static lexInline(a,s){return new at(s).inlineTokens(a)}lex(a){let s;for(a=a.replace(/\r\n|\r/g,`
`).replace(/\t/g,"    "),this.blockTokens(a,this.tokens);s=this.inlineQueue.shift();)this.inlineTokens(s.src,s.tokens);return this.tokens}blockTokens(a,s=[]){let r,d,y,x;for(this.options.pedantic&&(a=a.replace(/^ +$/gm,""));a;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(R=>!!(r=R.call({lexer:this},a,s))&&(a=a.substring(r.raw.length),s.push(r),!0))))if(r=this.tokenizer.space(a))a=a.substring(r.raw.length),r.raw.length===1&&s.length>0?s[s.length-1].raw+=`
`:s.push(r);else if(r=this.tokenizer.code(a))a=a.substring(r.raw.length),d=s[s.length-1],!d||d.type!=="paragraph"&&d.type!=="text"?s.push(r):(d.raw+=`
`+r.raw,d.text+=`
`+r.text,this.inlineQueue[this.inlineQueue.length-1].src=d.text);else if(r=this.tokenizer.fences(a))a=a.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.heading(a))a=a.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.hr(a))a=a.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.blockquote(a))a=a.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.list(a))a=a.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.html(a))a=a.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.def(a))a=a.substring(r.raw.length),d=s[s.length-1],!d||d.type!=="paragraph"&&d.type!=="text"?this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title}):(d.raw+=`
`+r.raw,d.text+=`
`+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=d.text);else if(r=this.tokenizer.table(a))a=a.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.lheading(a))a=a.substring(r.raw.length),s.push(r);else{if(y=a,this.options.extensions&&this.options.extensions.startBlock){let R=1/0;const E=a.slice(1);let z;this.options.extensions.startBlock.forEach(function(D){z=D.call({lexer:this},E),typeof z=="number"&&z>=0&&(R=Math.min(R,z))}),R<1/0&&R>=0&&(y=a.substring(0,R+1))}if(this.state.top&&(r=this.tokenizer.paragraph(y)))d=s[s.length-1],x&&d.type==="paragraph"?(d.raw+=`
`+r.raw,d.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=d.text):s.push(r),x=y.length!==a.length,a=a.substring(r.raw.length);else if(r=this.tokenizer.text(a))a=a.substring(r.raw.length),d=s[s.length-1],d&&d.type==="text"?(d.raw+=`
`+r.raw,d.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=d.text):s.push(r);else if(a){const R="Infinite loop on byte: "+a.charCodeAt(0);if(this.options.silent){console.error(R);break}throw new Error(R)}}return this.state.top=!0,s}inline(a,s){this.inlineQueue.push({src:a,tokens:s})}inlineTokens(a,s=[]){let r,d,y,x,R,E,z=a;if(this.tokens.links){const D=Object.keys(this.tokens.links);if(D.length>0)for(;(x=this.tokenizer.rules.inline.reflinkSearch.exec(z))!=null;)D.includes(x[0].slice(x[0].lastIndexOf("[")+1,-1))&&(z=z.slice(0,x.index)+"["+nt("a",x[0].length-2)+"]"+z.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(x=this.tokenizer.rules.inline.blockSkip.exec(z))!=null;)z=z.slice(0,x.index)+"["+nt("a",x[0].length-2)+"]"+z.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(x=this.tokenizer.rules.inline.escapedEmSt.exec(z))!=null;)z=z.slice(0,x.index)+"++"+z.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;a;)if(R||(E=""),R=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(D=>!!(r=D.call({lexer:this},a,s))&&(a=a.substring(r.raw.length),s.push(r),!0))))if(r=this.tokenizer.escape(a))a=a.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.tag(a))a=a.substring(r.raw.length),d=s[s.length-1],d&&r.type==="text"&&d.type==="text"?(d.raw+=r.raw,d.text+=r.text):s.push(r);else if(r=this.tokenizer.link(a))a=a.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.reflink(a,this.tokens.links))a=a.substring(r.raw.length),d=s[s.length-1],d&&r.type==="text"&&d.type==="text"?(d.raw+=r.raw,d.text+=r.text):s.push(r);else if(r=this.tokenizer.emStrong(a,z,E))a=a.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.codespan(a))a=a.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.br(a))a=a.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.del(a))a=a.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.autolink(a,ut))a=a.substring(r.raw.length),s.push(r);else if(this.state.inLink||!(r=this.tokenizer.url(a,ut))){if(y=a,this.options.extensions&&this.options.extensions.startInline){let D=1/0;const W=a.slice(1);let q;this.options.extensions.startInline.forEach(function(ot){q=ot.call({lexer:this},W),typeof q=="number"&&q>=0&&(D=Math.min(D,q))}),D<1/0&&D>=0&&(y=a.substring(0,D+1))}if(r=this.tokenizer.inlineText(y,gt))a=a.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(E=r.raw.slice(-1)),R=!0,d=s[s.length-1],d&&d.type==="text"?(d.raw+=r.raw,d.text+=r.text):s.push(r);else if(a){const D="Infinite loop on byte: "+a.charCodeAt(0);if(this.options.silent){console.error(D);break}throw new Error(D)}}else a=a.substring(r.raw.length),s.push(r);return s}}class pt{constructor(a){this.options=a||n}code(a,s,r){const d=(s||"").match(/\S*/)[0];if(this.options.highlight){const y=this.options.highlight(a,d);y!=null&&y!==a&&(r=!0,a=y)}return a=a.replace(/\n$/,"")+`
`,d?'<pre><code class="'+this.options.langPrefix+v(d,!0)+'">'+(r?a:v(a,!0))+`</code></pre>
`:"<pre><code>"+(r?a:v(a,!0))+`</code></pre>
`}blockquote(a){return`<blockquote>
`+a+`</blockquote>
`}html(a){return a}heading(a,s,r,d){return this.options.headerIds?"<h"+s+' id="'+this.options.headerPrefix+d.slug(r)+'">'+a+"</h"+s+`>
`:"<h"+s+">"+a+"</h"+s+`>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(a,s,r){const d=s?"ol":"ul";return"<"+d+(s&&r!==1?' start="'+r+'"':"")+`>
`+a+"</"+d+`>
`}listitem(a){return"<li>"+a+`</li>
`}checkbox(a){return"<input "+(a?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(a){return"<p>"+a+`</p>
`}table(a,s){return s&&(s="<tbody>"+s+"</tbody>"),`<table>
<thead>
`+a+`</thead>
`+s+`</table>
`}tablerow(a){return`<tr>
`+a+`</tr>
`}tablecell(a,s){const r=s.header?"th":"td";return(s.align?"<"+r+' align="'+s.align+'">':"<"+r+">")+a+"</"+r+`>
`}strong(a){return"<strong>"+a+"</strong>"}em(a){return"<em>"+a+"</em>"}codespan(a){return"<code>"+a+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(a){return"<del>"+a+"</del>"}link(a,s,r){if((a=$(this.options.sanitize,this.options.baseUrl,a))===null)return r;let d='<a href="'+v(a)+'"';return s&&(d+=' title="'+s+'"'),d+=">"+r+"</a>",d}image(a,s,r){if((a=$(this.options.sanitize,this.options.baseUrl,a))===null)return r;let d='<img src="'+a+'" alt="'+r+'"';return s&&(d+=' title="'+s+'"'),d+=this.options.xhtml?"/>":">",d}text(a){return a}}class mt{strong(a){return a}em(a){return a}codespan(a){return a}del(a){return a}html(a){return a}text(a){return a}link(a,s,r){return""+r}image(a,s,r){return""+r}br(){return""}}class Zt{constructor(){this.seen={}}serialize(a){return a.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(a,s){let r=a,d=0;if(this.seen.hasOwnProperty(r)){d=this.seen[a];do d++,r=a+"-"+d;while(this.seen.hasOwnProperty(r))}return s||(this.seen[a]=d,this.seen[r]=0),r}slug(a,s={}){const r=this.serialize(a);return this.getNextSafeSlug(r,s.dryrun)}}class xt{constructor(a){this.options=a||n,this.options.renderer=this.options.renderer||new pt,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new mt,this.slugger=new Zt}static parse(a,s){return new xt(s).parse(a)}static parseInline(a,s){return new xt(s).parseInline(a)}parse(a,s=!0){let r,d,y,x,R,E,z,D,W,q,ot,St,it,vt,Q,Rt,It,bt,_t,st="";const kt=a.length;for(r=0;r<kt;r++)if(q=a[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[q.type]&&(_t=this.options.extensions.renderers[q.type].call({parser:this},q),_t!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(q.type)))st+=_t||"";else switch(q.type){case"space":continue;case"hr":st+=this.renderer.hr();continue;case"heading":st+=this.renderer.heading(this.parseInline(q.tokens),q.depth,f(this.parseInline(q.tokens,this.textRenderer)),this.slugger);continue;case"code":st+=this.renderer.code(q.text,q.lang,q.escaped);continue;case"table":for(D="",z="",x=q.header.length,d=0;d<x;d++)z+=this.renderer.tablecell(this.parseInline(q.header[d].tokens),{header:!0,align:q.align[d]});for(D+=this.renderer.tablerow(z),W="",x=q.rows.length,d=0;d<x;d++){for(E=q.rows[d],z="",R=E.length,y=0;y<R;y++)z+=this.renderer.tablecell(this.parseInline(E[y].tokens),{header:!1,align:q.align[y]});W+=this.renderer.tablerow(z)}st+=this.renderer.table(D,W);continue;case"blockquote":W=this.parse(q.tokens),st+=this.renderer.blockquote(W);continue;case"list":for(ot=q.ordered,St=q.start,it=q.loose,x=q.items.length,W="",d=0;d<x;d++)Q=q.items[d],Rt=Q.checked,It=Q.task,vt="",Q.task&&(bt=this.renderer.checkbox(Rt),it?Q.tokens.length>0&&Q.tokens[0].type==="paragraph"?(Q.tokens[0].text=bt+" "+Q.tokens[0].text,Q.tokens[0].tokens&&Q.tokens[0].tokens.length>0&&Q.tokens[0].tokens[0].type==="text"&&(Q.tokens[0].tokens[0].text=bt+" "+Q.tokens[0].tokens[0].text)):Q.tokens.unshift({type:"text",text:bt}):vt+=bt),vt+=this.parse(Q.tokens,it),W+=this.renderer.listitem(vt,It,Rt);st+=this.renderer.list(W,ot,St);continue;case"html":st+=this.renderer.html(q.text);continue;case"paragraph":st+=this.renderer.paragraph(this.parseInline(q.tokens));continue;case"text":for(W=q.tokens?this.parseInline(q.tokens):q.text;r+1<kt&&a[r+1].type==="text";)q=a[++r],W+=`
`+(q.tokens?this.parseInline(q.tokens):q.text);st+=s?this.renderer.paragraph(W):W;continue;default:{const Ct='Token with "'+q.type+'" type was not found.';if(this.options.silent)return void console.error(Ct);throw new Error(Ct)}}return st}parseInline(a,s){s=s||this.renderer;let r,d,y,x="";const R=a.length;for(r=0;r<R;r++)if(d=a[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[d.type]&&(y=this.options.extensions.renderers[d.type].call({parser:this},d),y!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(d.type)))x+=y||"";else switch(d.type){case"escape":case"text":x+=s.text(d.text);break;case"html":x+=s.html(d.text);break;case"link":x+=s.link(d.href,d.title,this.parseInline(d.tokens,s));break;case"image":x+=s.image(d.href,d.title,d.text);break;case"strong":x+=s.strong(this.parseInline(d.tokens,s));break;case"em":x+=s.em(this.parseInline(d.tokens,s));break;case"codespan":x+=s.codespan(d.text);break;case"br":x+=s.br();break;case"del":x+=s.del(this.parseInline(d.tokens,s));break;default:{const E='Token with "'+d.type+'" type was not found.';if(this.options.silent)return void console.error(E);throw new Error(E)}}return x}}function V(P,a,s){if(P==null)throw new Error("marked(): input parameter is undefined or null");if(typeof P!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(P)+", string expected");if(typeof a=="function"&&(s=a,a=null),G(a=tt({},V.defaults,a||{})),s){const r=a.highlight;let d;try{d=at.lex(P,a)}catch(R){return s(R)}const y=function(R){let E;if(!R)try{a.walkTokens&&V.walkTokens(d,a.walkTokens),E=xt.parse(d,a)}catch(z){R=z}return a.highlight=r,R?s(R):s(null,E)};if(!r||r.length<3||(delete a.highlight,!d.length))return y();let x=0;return V.walkTokens(d,function(R){R.type==="code"&&(x++,setTimeout(()=>{r(R.text,R.lang,function(E,z){if(E)return y(E);z!=null&&z!==R.text&&(R.text=z,R.escaped=!0),x--,x===0&&y()})},0))}),void(x===0&&y())}try{const r=at.lex(P,a);return a.walkTokens&&V.walkTokens(r,a.walkTokens),xt.parse(r,a)}catch(r){if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,a.silent)return"<p>An error occurred:</p><pre>"+v(r.message+"",!0)+"</pre>";throw r}}return V.options=V.setOptions=function(P){var a;return tt(V.defaults,P),a=V.defaults,n=a,V},V.getDefaults=e,V.defaults=n,V.use=function(...P){const a=tt({},...P),s=V.defaults.extensions||{renderers:{},childTokens:{}};let r;P.forEach(d=>{if(d.extensions&&(r=!0,d.extensions.forEach(y=>{if(!y.name)throw new Error("extension name required");if(y.renderer){const x=s.renderers?s.renderers[y.name]:null;s.renderers[y.name]=x?function(...R){let E=y.renderer.apply(this,R);return E===!1&&(E=x.apply(this,R)),E}:y.renderer}if(y.tokenizer){if(!y.level||y.level!=="block"&&y.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");s[y.level]?s[y.level].unshift(y.tokenizer):s[y.level]=[y.tokenizer],y.start&&(y.level==="block"?s.startBlock?s.startBlock.push(y.start):s.startBlock=[y.start]:y.level==="inline"&&(s.startInline?s.startInline.push(y.start):s.startInline=[y.start]))}y.childTokens&&(s.childTokens[y.name]=y.childTokens)})),d.renderer){const y=V.defaults.renderer||new pt;for(const x in d.renderer){const R=y[x];y[x]=(...E)=>{let z=d.renderer[x].apply(y,E);return z===!1&&(z=R.apply(y,E)),z}}a.renderer=y}if(d.tokenizer){const y=V.defaults.tokenizer||new S;for(const x in d.tokenizer){const R=y[x];y[x]=(...E)=>{let z=d.tokenizer[x].apply(y,E);return z===!1&&(z=R.apply(y,E)),z}}a.tokenizer=y}if(d.walkTokens){const y=V.defaults.walkTokens;a.walkTokens=function(x){d.walkTokens.call(this,x),y&&y.call(this,x)}}r&&(a.extensions=s),V.setOptions(a)})},V.walkTokens=function(P,a){for(const s of P)switch(a.call(V,s),s.type){case"table":for(const r of s.header)V.walkTokens(r.tokens,a);for(const r of s.rows)for(const d of r)V.walkTokens(d.tokens,a);break;case"list":V.walkTokens(s.items,a);break;default:V.defaults.extensions&&V.defaults.extensions.childTokens&&V.defaults.extensions.childTokens[s.type]?V.defaults.extensions.childTokens[s.type].forEach(function(r){V.walkTokens(s[r],a)}):s.tokens&&V.walkTokens(s.tokens,a)}},V.parseInline=function(P,a){if(P==null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof P!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(P)+", string expected");G(a=tt({},V.defaults,a||{}));try{const s=at.lexInline(P,a);return a.walkTokens&&V.walkTokens(s,a.walkTokens),xt.parseInline(s,a)}catch(s){if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,a.silent)return"<p>An error occurred:</p><pre>"+v(s.message+"",!0)+"</pre>";throw s}},V.Parser=xt,V.parser=xt.parse,V.Renderer=pt,V.TextRenderer=mt,V.Lexer=at,V.lexer=at.lex,V.Tokenizer=S,V.Slugger=Zt,V.parse=V,()=>{let P,a,s=null;function r(){if(s&&!s.closed)s.focus();else{if(s=window.open("about:blank","reveal.js - Notes","width=1100,height=700"),s.marked=V,s.document.write(`<!--
	NOTE: You need to build the notes plugin after making changes to this file.
-->
<html lang="en">
	<head>
		<meta charset="utf-8">

		<title>reveal.js - Speaker View</title>

		<style>
			body {
				font-family: Helvetica;
				font-size: 18px;
			}

			#current-slide,
			#upcoming-slide,
			#speaker-controls {
				padding: 6px;
				box-sizing: border-box;
				-moz-box-sizing: border-box;
			}

			#current-slide iframe,
			#upcoming-slide iframe {
				width: 100%;
				height: 100%;
				border: 1px solid #ddd;
			}

			#current-slide .label,
			#upcoming-slide .label {
				position: absolute;
				top: 10px;
				left: 10px;
				z-index: 2;
			}

			#connection-status {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 20;
				padding: 30% 20% 20% 20%;
				font-size: 18px;
				color: #222;
				background: #fff;
				text-align: center;
				box-sizing: border-box;
				line-height: 1.4;
			}

			.overlay-element {
				height: 34px;
				line-height: 34px;
				padding: 0 10px;
				text-shadow: none;
				background: rgba( 220, 220, 220, 0.8 );
				color: #222;
				font-size: 14px;
			}

			.overlay-element.interactive:hover {
				background: rgba( 220, 220, 220, 1 );
			}

			#current-slide {
				position: absolute;
				width: 60%;
				height: 100%;
				top: 0;
				left: 0;
				padding-right: 0;
			}

			#upcoming-slide {
				position: absolute;
				width: 40%;
				height: 40%;
				right: 0;
				top: 0;
			}

			/* Speaker controls */
			#speaker-controls {
				position: absolute;
				top: 40%;
				right: 0;
				width: 40%;
				height: 60%;
				overflow: auto;
				font-size: 18px;
			}

				.speaker-controls-time.hidden,
				.speaker-controls-notes.hidden {
					display: none;
				}

				.speaker-controls-time .label,
				.speaker-controls-pace .label,
				.speaker-controls-notes .label {
					text-transform: uppercase;
					font-weight: normal;
					font-size: 0.66em;
					color: #666;
					margin: 0;
				}

				.speaker-controls-time, .speaker-controls-pace {
					border-bottom: 1px solid rgba( 200, 200, 200, 0.5 );
					margin-bottom: 10px;
					padding: 10px 16px;
					padding-bottom: 20px;
					cursor: pointer;
				}

				.speaker-controls-time .reset-button {
					opacity: 0;
					float: right;
					color: #666;
					text-decoration: none;
				}
				.speaker-controls-time:hover .reset-button {
					opacity: 1;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock {
					width: 50%;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock,
				.speaker-controls-time .pacing .hours-value,
				.speaker-controls-time .pacing .minutes-value,
				.speaker-controls-time .pacing .seconds-value {
					font-size: 1.9em;
				}

				.speaker-controls-time .timer {
					float: left;
				}

				.speaker-controls-time .clock {
					float: right;
					text-align: right;
				}

				.speaker-controls-time span.mute {
					opacity: 0.3;
				}

				.speaker-controls-time .pacing-title {
					margin-top: 5px;
				}

				.speaker-controls-time .pacing.ahead {
					color: blue;
				}

				.speaker-controls-time .pacing.on-track {
					color: green;
				}

				.speaker-controls-time .pacing.behind {
					color: red;
				}

				.speaker-controls-notes {
					padding: 10px 16px;
				}

				.speaker-controls-notes .value {
					margin-top: 5px;
					line-height: 1.4;
					font-size: 1.2em;
				}

			/* Layout selector */
			#speaker-layout {
				position: absolute;
				top: 10px;
				right: 10px;
				color: #222;
				z-index: 10;
			}
				#speaker-layout select {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					border: 0;
					box-shadow: 0;
					cursor: pointer;
					opacity: 0;

					font-size: 1em;
					background-color: transparent;

					-moz-appearance: none;
					-webkit-appearance: none;
					-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
				}

				#speaker-layout select:focus {
					outline: none;
					box-shadow: none;
				}

			.clear {
				clear: both;
			}

			/* Speaker layout: Wide */
			body[data-speaker-layout="wide"] #current-slide,
			body[data-speaker-layout="wide"] #upcoming-slide {
				width: 50%;
				height: 45%;
				padding: 6px;
			}

			body[data-speaker-layout="wide"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="wide"] #upcoming-slide {
				top: 0;
				left: 50%;
			}

			body[data-speaker-layout="wide"] #speaker-controls {
				top: 45%;
				left: 0;
				width: 100%;
				height: 50%;
				font-size: 1.25em;
			}

			/* Speaker layout: Tall */
			body[data-speaker-layout="tall"] #current-slide,
			body[data-speaker-layout="tall"] #upcoming-slide {
				width: 45%;
				height: 50%;
				padding: 6px;
			}

			body[data-speaker-layout="tall"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="tall"] #upcoming-slide {
				top: 50%;
				left: 0;
			}

			body[data-speaker-layout="tall"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 45%;
				width: 55%;
				height: 100%;
				font-size: 1.25em;
			}

			/* Speaker layout: Notes only */
			body[data-speaker-layout="notes-only"] #current-slide,
			body[data-speaker-layout="notes-only"] #upcoming-slide {
				display: none;
			}

			body[data-speaker-layout="notes-only"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				font-size: 1.25em;
			}

			@media screen and (max-width: 1080px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 16px;
				}
			}

			@media screen and (max-width: 900px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 14px;
				}
			}

			@media screen and (max-width: 800px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 12px;
				}
			}

		</style>
	</head>

	<body>

		<div id="connection-status">Loading speaker view...</div>

		<div id="current-slide"></div>
		<div id="upcoming-slide"><span class="overlay-element label">Upcoming</span></div>
		<div id="speaker-controls">
			<div class="speaker-controls-time">
				<h4 class="label">Time <span class="reset-button">Click to Reset</span></h4>
				<div class="clock">
					<span class="clock-value">0:00 AM</span>
				</div>
				<div class="timer">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
				<div class="clear"></div>

				<h4 class="label pacing-title" style="display: none">Pacing – Time to finish current slide</h4>
				<div class="pacing" style="display: none">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
			</div>

			<div class="speaker-controls-notes hidden">
				<h4 class="label">Notes</h4>
				<div class="value"></div>
			</div>
		</div>
		<div id="speaker-layout" class="overlay-element interactive">
			<span class="speaker-layout-label"></span>
			<select class="speaker-layout-dropdown"></select>
		</div>

		<script>

			(function() {

				var notes,
					notesValue,
					currentState,
					currentSlide,
					upcomingSlide,
					layoutLabel,
					layoutDropdown,
					pendingCalls = {},
					lastRevealApiCallId = 0,
					connected = false

				var connectionStatus = document.querySelector( '#connection-status' );

				var SPEAKER_LAYOUTS = {
					'default': 'Default',
					'wide': 'Wide',
					'tall': 'Tall',
					'notes-only': 'Notes only'
				};

				setupLayout();

				let openerOrigin;

				try {
					openerOrigin = window.opener.location.origin;
				}
				catch ( error ) { console.warn( error ) }

				// In order to prevent XSS, the speaker view will only run if its
				// opener has the same origin as itself
				if( window.location.origin !== openerOrigin ) {
					connectionStatus.innerHTML = 'Cross origin error.<br>The speaker window can only be opened from the same origin.';
					return;
				}

				var connectionTimeout = setTimeout( function() {
					connectionStatus.innerHTML = 'Error connecting to main window.<br>Please try closing and reopening the speaker view.';
				}, 5000 );

				window.addEventListener( 'message', function( event ) {

					clearTimeout( connectionTimeout );
					connectionStatus.style.display = 'none';

					var data = JSON.parse( event.data );

					// The overview mode is only useful to the reveal.js instance
					// where navigation occurs so we don't sync it
					if( data.state ) delete data.state.overview;

					// Messages sent by the notes plugin inside of the main window
					if( data && data.namespace === 'reveal-notes' ) {
						if( data.type === 'connect' ) {
							handleConnectMessage( data );
						}
						else if( data.type === 'state' ) {
							handleStateMessage( data );
						}
						else if( data.type === 'return' ) {
							pendingCalls[data.callId](data.result);
							delete pendingCalls[data.callId];
						}
					}
					// Messages sent by the reveal.js inside of the current slide preview
					else if( data && data.namespace === 'reveal' ) {
						if( /ready/.test( data.eventName ) ) {
							// Send a message back to notify that the handshake is complete
							window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );
						}
						else if( /slidechanged|fragmentshown|fragmenthidden|paused|resumed/.test( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {

							dispatchStateToMainWindow( data.state );

						}
					}

				} );

				/**
				 * Updates the presentation in the main window to match the state
				 * of the presentation in the notes window.
				 */
				const dispatchStateToMainWindow = debounce(( state ) => {
					window.opener.postMessage( JSON.stringify({ method: 'setState', args: [ state ]} ), '*' );
				}, 500);

				/**
				 * Asynchronously calls the Reveal.js API of the main frame.
				 */
				function callRevealApi( methodName, methodArguments, callback ) {

					var callId = ++lastRevealApiCallId;
					pendingCalls[callId] = callback;
					window.opener.postMessage( JSON.stringify( {
						namespace: 'reveal-notes',
						type: 'call',
						callId: callId,
						methodName: methodName,
						arguments: methodArguments
					} ), '*' );

				}

				/**
				 * Called when the main window is trying to establish a
				 * connection.
				 */
				function handleConnectMessage( data ) {

					if( connected === false ) {
						connected = true;

						setupIframes( data );
						setupKeyboard();
						setupNotes();
						setupTimer();
						setupHeartbeat();
					}

				}

				/**
				 * Called when the main window sends an updated state.
				 */
				function handleStateMessage( data ) {

					// Store the most recently set state to avoid circular loops
					// applying the same state
					currentState = JSON.stringify( data.state );

					// No need for updating the notes in case of fragment changes
					if ( data.notes ) {
						notes.classList.remove( 'hidden' );
						notesValue.style.whiteSpace = data.whitespace;
						if( data.markdown ) {
							notesValue.innerHTML = marked( data.notes );
						}
						else {
							notesValue.innerHTML = data.notes;
						}
					}
					else {
						notes.classList.add( 'hidden' );
					}

					// Update the note slides
					currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );

				}

				// Limit to max one state update per X ms
				handleStateMessage = debounce( handleStateMessage, 200 );

				/**
				 * Forward keyboard events to the current slide window.
				 * This enables keyboard events to work even if focus
				 * isn't set on the current slide iframe.
				 *
				 * Block F5 default handling, it reloads and disconnects
				 * the speaker notes window.
				 */
				function setupKeyboard() {

					document.addEventListener( 'keydown', function( event ) {
						if( event.keyCode === 116 || ( event.metaKey && event.keyCode === 82 ) ) {
							event.preventDefault();
							return false;
						}
						currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );
					} );

				}

				/**
				 * Creates the preview iframes.
				 */
				function setupIframes( data ) {

					var params = [
						'receiver',
						'progress=false',
						'history=false',
						'transition=none',
						'autoSlide=0',
						'backgroundTransition=none'
					].join( '&' );

					var urlSeparator = /\\?/.test(data.url) ? '&' : '?';
					var hash = '#/' + data.state.indexh + '/' + data.state.indexv;
					var currentURL = data.url + urlSeparator + params + '&postMessageEvents=true' + hash;
					var upcomingURL = data.url + urlSeparator + params + '&controls=false' + hash;

					currentSlide = document.createElement( 'iframe' );
					currentSlide.setAttribute( 'width', 1280 );
					currentSlide.setAttribute( 'height', 1024 );
					currentSlide.setAttribute( 'src', currentURL );
					document.querySelector( '#current-slide' ).appendChild( currentSlide );

					upcomingSlide = document.createElement( 'iframe' );
					upcomingSlide.setAttribute( 'width', 640 );
					upcomingSlide.setAttribute( 'height', 512 );
					upcomingSlide.setAttribute( 'src', upcomingURL );
					document.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );

				}

				/**
				 * Setup the notes UI.
				 */
				function setupNotes() {

					notes = document.querySelector( '.speaker-controls-notes' );
					notesValue = document.querySelector( '.speaker-controls-notes .value' );

				}

				/**
				 * We send out a heartbeat at all times to ensure we can
				 * reconnect with the main presentation window after reloads.
				 */
				function setupHeartbeat() {

					setInterval( () => {
						window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'heartbeat'} ), '*' );
					}, 1000 );

				}

				function getTimings( callback ) {

					callRevealApi( 'getSlidesAttributes', [], function ( slideAttributes ) {
						callRevealApi( 'getConfig', [], function ( config ) {
							var totalTime = config.totalTime;
							var minTimePerSlide = config.minimumTimePerSlide || 0;
							var defaultTiming = config.defaultTiming;
							if ((defaultTiming == null) && (totalTime == null)) {
								callback(null);
								return;
							}
							// Setting totalTime overrides defaultTiming
							if (totalTime) {
								defaultTiming = 0;
							}
							var timings = [];
							for ( var i in slideAttributes ) {
								var slide = slideAttributes[ i ];
								var timing = defaultTiming;
								if( slide.hasOwnProperty( 'data-timing' )) {
									var t = slide[ 'data-timing' ];
									timing = parseInt(t);
									if( isNaN(timing) ) {
										console.warn("Could not parse timing '" + t + "' of slide " + i + "; using default of " + defaultTiming);
										timing = defaultTiming;
									}
								}
								timings.push(timing);
							}
							if ( totalTime ) {
								// After we've allocated time to individual slides, we summarize it and
								// subtract it from the total time
								var remainingTime = totalTime - timings.reduce( function(a, b) { return a + b; }, 0 );
								// The remaining time is divided by the number of slides that have 0 seconds
								// allocated at the moment, giving the average time-per-slide on the remaining slides
								var remainingSlides = (timings.filter( function(x) { return x == 0 }) ).length
								var timePerSlide = Math.round( remainingTime / remainingSlides, 0 )
								// And now we replace every zero-value timing with that average
								timings = timings.map( function(x) { return (x==0 ? timePerSlide : x) } );
							}
							var slidesUnderMinimum = timings.filter( function(x) { return (x < minTimePerSlide) } ).length
							if ( slidesUnderMinimum ) {
								message = "The pacing time for " + slidesUnderMinimum + " slide(s) is under the configured minimum of " + minTimePerSlide + " seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides).";
								alert(message);
							}
							callback( timings );
						} );
					} );

				}

				/**
				 * Return the number of seconds allocated for presenting
				 * all slides up to and including this one.
				 */
				function getTimeAllocated( timings, callback ) {

					callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
						var allocated = 0;
						for (var i in timings.slice(0, currentSlide + 1)) {
							allocated += timings[i];
						}
						callback( allocated );
					} );

				}

				/**
				 * Create the timer and clock and start updating them
				 * at an interval.
				 */
				function setupTimer() {

					var start = new Date(),
					timeEl = document.querySelector( '.speaker-controls-time' ),
					clockEl = timeEl.querySelector( '.clock-value' ),
					hoursEl = timeEl.querySelector( '.hours-value' ),
					minutesEl = timeEl.querySelector( '.minutes-value' ),
					secondsEl = timeEl.querySelector( '.seconds-value' ),
					pacingTitleEl = timeEl.querySelector( '.pacing-title' ),
					pacingEl = timeEl.querySelector( '.pacing' ),
					pacingHoursEl = pacingEl.querySelector( '.hours-value' ),
					pacingMinutesEl = pacingEl.querySelector( '.minutes-value' ),
					pacingSecondsEl = pacingEl.querySelector( '.seconds-value' );

					var timings = null;
					getTimings( function ( _timings ) {

						timings = _timings;
						if (_timings !== null) {
							pacingTitleEl.style.removeProperty('display');
							pacingEl.style.removeProperty('display');
						}

						// Update once directly
						_updateTimer();

						// Then update every second
						setInterval( _updateTimer, 1000 );

					} );


					function _resetTimer() {

						if (timings == null) {
							start = new Date();
							_updateTimer();
						}
						else {
							// Reset timer to beginning of current slide
							getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
								var slideEndTiming = slideEndTimingSeconds * 1000;
								callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
									var currentSlideTiming = timings[currentSlide] * 1000;
									var previousSlidesTiming = slideEndTiming - currentSlideTiming;
									var now = new Date();
									start = new Date(now.getTime() - previousSlidesTiming);
									_updateTimer();
								} );
							} );
						}

					}

					timeEl.addEventListener( 'click', function() {
						_resetTimer();
						return false;
					} );

					function _displayTime( hrEl, minEl, secEl, time) {

						var sign = Math.sign(time) == -1 ? "-" : "";
						time = Math.abs(Math.round(time / 1000));
						var seconds = time % 60;
						var minutes = Math.floor( time / 60 ) % 60 ;
						var hours = Math.floor( time / ( 60 * 60 )) ;
						hrEl.innerHTML = sign + zeroPadInteger( hours );
						if (hours == 0) {
							hrEl.classList.add( 'mute' );
						}
						else {
							hrEl.classList.remove( 'mute' );
						}
						minEl.innerHTML = ':' + zeroPadInteger( minutes );
						if (hours == 0 && minutes == 0) {
							minEl.classList.add( 'mute' );
						}
						else {
							minEl.classList.remove( 'mute' );
						}
						secEl.innerHTML = ':' + zeroPadInteger( seconds );
					}

					function _updateTimer() {

						var diff, hours, minutes, seconds,
						now = new Date();

						diff = now.getTime() - start.getTime();

						clockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );
						_displayTime( hoursEl, minutesEl, secondsEl, diff );
						if (timings !== null) {
							_updatePacing(diff);
						}

					}

					function _updatePacing(diff) {

						getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
							var slideEndTiming = slideEndTimingSeconds * 1000;

							callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
								var currentSlideTiming = timings[currentSlide] * 1000;
								var timeLeftCurrentSlide = slideEndTiming - diff;
								if (timeLeftCurrentSlide < 0) {
									pacingEl.className = 'pacing behind';
								}
								else if (timeLeftCurrentSlide < currentSlideTiming) {
									pacingEl.className = 'pacing on-track';
								}
								else {
									pacingEl.className = 'pacing ahead';
								}
								_displayTime( pacingHoursEl, pacingMinutesEl, pacingSecondsEl, timeLeftCurrentSlide );
							} );
						} );
					}

				}

				/**
				 * Sets up the speaker view layout and layout selector.
				 */
				function setupLayout() {

					layoutDropdown = document.querySelector( '.speaker-layout-dropdown' );
					layoutLabel = document.querySelector( '.speaker-layout-label' );

					// Render the list of available layouts
					for( var id in SPEAKER_LAYOUTS ) {
						var option = document.createElement( 'option' );
						option.setAttribute( 'value', id );
						option.textContent = SPEAKER_LAYOUTS[ id ];
						layoutDropdown.appendChild( option );
					}

					// Monitor the dropdown for changes
					layoutDropdown.addEventListener( 'change', function( event ) {

						setLayout( layoutDropdown.value );

					}, false );

					// Restore any currently persisted layout
					setLayout( getLayout() );

				}

				/**
				 * Sets a new speaker view layout. The layout is persisted
				 * in local storage.
				 */
				function setLayout( value ) {

					var title = SPEAKER_LAYOUTS[ value ];

					layoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );
					layoutDropdown.value = value;

					document.body.setAttribute( 'data-speaker-layout', value );

					// Persist locally
					if( supportsLocalStorage() ) {
						window.localStorage.setItem( 'reveal-speaker-layout', value );
					}

				}

				/**
				 * Returns the ID of the most recently set speaker layout
				 * or our default layout if none has been set.
				 */
				function getLayout() {

					if( supportsLocalStorage() ) {
						var layout = window.localStorage.getItem( 'reveal-speaker-layout' );
						if( layout ) {
							return layout;
						}
					}

					// Default to the first record in the layouts hash
					for( var id in SPEAKER_LAYOUTS ) {
						return id;
					}

				}

				function supportsLocalStorage() {

					try {
						localStorage.setItem('test', 'test');
						localStorage.removeItem('test');
						return true;
					}
					catch( e ) {
						return false;
					}

				}

				function zeroPadInteger( num ) {

					var str = '00' + parseInt( num );
					return str.substring( str.length - 2 );

				}

				/**
				 * Limits the frequency at which a function can be called.
				 */
				function debounce( fn, ms ) {

					var lastTime = 0,
						timeout;

					return function() {

						var args = arguments;
						var context = this;

						clearTimeout( timeout );

						var timeSinceLastCall = Date.now() - lastTime;
						if( timeSinceLastCall > ms ) {
							fn.apply( context, args );
							lastTime = Date.now();
						}
						else {
							timeout = setTimeout( function() {
								fn.apply( context, args );
								lastTime = Date.now();
							}, ms - timeSinceLastCall );
						}

					}

				}

			})();

		<\/script>
	</body>
</html>`),!s)return void alert("Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.");(function(){const R=a.getConfig().url,E=typeof R=="string"?R:window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search;P=setInterval(function(){s.postMessage(JSON.stringify({namespace:"reveal-notes",type:"connect",state:a.getState(),url:E}),"*")},500),window.addEventListener("message",y)})()}}function d(R){let E=a.getCurrentSlide(),z=E.querySelectorAll("aside.notes"),D=E.querySelector(".current-fragment"),W={namespace:"reveal-notes",type:"state",notes:"",markdown:!1,whitespace:"normal",state:a.getState()};if(E.hasAttribute("data-notes")&&(W.notes=E.getAttribute("data-notes"),W.whitespace="pre-wrap"),D){let q=D.querySelector("aside.notes");q?(W.notes=q.innerHTML,W.markdown=typeof q.getAttribute("data-markdown")=="string",z=null):D.hasAttribute("data-notes")&&(W.notes=D.getAttribute("data-notes"),W.whitespace="pre-wrap",z=null)}z&&(W.notes=Array.from(z).map(q=>q.innerHTML).join(`
`),W.markdown=z[0]&&typeof z[0].getAttribute("data-markdown")=="string"),s.postMessage(JSON.stringify(W),"*")}function y(R){if(function(E){try{return window.location.origin===E.source.location.origin}catch{return!1}}(R)){let E=JSON.parse(R.data);E&&E.namespace==="reveal-notes"&&E.type==="connected"?(clearInterval(P),x()):E&&E.namespace==="reveal-notes"&&E.type==="call"&&function(z,D,W){let q=a[z].apply(a,D);s.postMessage(JSON.stringify({namespace:"reveal-notes",type:"return",result:q,callId:W}),"*")}(E.methodName,E.arguments,E.callId)}}function x(){a.on("slidechanged",d),a.on("fragmentshown",d),a.on("fragmenthidden",d),a.on("overviewhidden",d),a.on("overviewshown",d),a.on("paused",d),a.on("resumed",d),d()}return{id:"notes",init:function(R){a=R,/receiver/i.test(window.location.search)||(window.location.search.match(/(\?|\&)notes/gi)!==null?r():window.addEventListener("message",E=>{if(!s&&typeof E.data=="string"){let D;try{D=JSON.parse(E.data)}catch{}D&&D.namespace==="reveal-notes"&&D.type==="heartbeat"&&(z=E.source,s&&!s.closed?s.focus():(s=z,window.addEventListener("message",y),x()))}var z}),a.addKeyBinding({keyCode:83,key:"S",description:"Speaker notes view"},function(){r()}))},open:r}}})})(kn);var xi=kn.exports;const Si=yn(xi);var wn={exports:{}};(function(g,t){(function(e,n){g.exports=n()})(bn,function(){const e=()=>{let i,o={messageStyle:"none",tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],skipTags:["script","noscript","style","textarea","pre"]},skipStartupTypeset:!0};return{id:"mathjax2",init:function(l){i=l;let h=i.getConfig().mathjax2||i.getConfig().math||{},c={...o,...h},k=(c.mathjax||"https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js")+"?config="+(c.config||"TeX-AMS_HTML-full");c.tex2jax={...o.tex2jax,...h.tex2jax},c.mathjax=c.config=null,function(v,m){let f=document.querySelector("head"),w=document.createElement("script");w.type="text/javascript",w.src=v;let u=()=>{typeof m=="function"&&(m.call(),m=null)};w.onload=u,w.onreadystatechange=()=>{this.readyState==="loaded"&&u()},f.appendChild(w)}(k,function(){MathJax.Hub.Config(c),MathJax.Hub.Queue(["Typeset",MathJax.Hub,i.getRevealElement()]),MathJax.Hub.Queue(i.layout),i.on("slidechanged",function(v){MathJax.Hub.Queue(["Typeset",MathJax.Hub,v.currentSlide])})})}}};return Plugin=Object.assign(e(),{KaTeX:()=>{let i,o={version:"latest",delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\[",right:"\\]",display:!0}],ignoredTags:["script","noscript","style","textarea","pre"]};const l=h=>new Promise((c,k)=>{const v=document.createElement("script");v.type="text/javascript",v.onload=c,v.onerror=k,v.src=h,document.head.append(v)});return{id:"katex",init:function(h){i=h;let c=i.getConfig().katex||{},k={...o,...c};const{local:v,version:m,extensions:f,...w}=k;let u=k.local||"https://cdn.jsdelivr.net/npm/katex",L=k.local?"":"@"+k.version,I=u+L+"/dist/katex.min.css",$=u+L+"/dist/contrib/mhchem.min.js",Z=u+L+"/dist/contrib/auto-render.min.js",F=[u+L+"/dist/katex.min.js"];k.extensions&&k.extensions.includes("mhchem")&&F.push($),F.push(Z);const H=()=>{renderMathInElement(h.getSlidesElement(),w),i.layout()};(J=>{let O=document.createElement("link");O.rel="stylesheet",O.href=J,document.head.appendChild(O)})(I),async function(J){for(const O of J)await l(O)}(F).then(()=>{i.isReady()?H():i.on("ready",H.bind(this))})}}},MathJax2:e,MathJax3:()=>{let i,o={tex:{inlineMath:[["$","$"],["\\(","\\)"]]},options:{skipHtmlTags:["script","noscript","style","textarea","pre"]},startup:{ready:()=>{MathJax.startup.defaultReady(),MathJax.startup.promise.then(()=>{Reveal.layout()})}}};return{id:"mathjax3",init:function(l){i=l;let h=i.getConfig().mathjax3||{},c={...o,...h};c.tex={...o.tex,...h.tex},c.options={...o.options,...h.options},c.startup={...o.startup,...h.startup};let k=c.mathjax||"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";c.mathjax=null,window.MathJax=c,function(v,m){let f=document.createElement("script");f.type="text/javascript",f.id="MathJax-script",f.src=v,f.async=!0,f.onload=()=>{typeof m=="function"&&(m.call(),m=null)},document.head.appendChild(f)}(k,function(){Reveal.addEventListener("slidechanged",function(v){MathJax.typeset()})})}}}})})})(wn);var Ei=wn.exports;const xn=yn(Ei),Ai=`<section>
  <section>
    <h2>Improving ELBO Computation in Graph Diffusion Models</h2>
    <h4>Giulio Zani</h4>
    <h4>Maastricht University</h4>
    <h4>Msc Artificial Intelligence</h4>
    <img
      src="./one_molecule.png"
      class="rounded-image"
      style="max-width: 85%"
    />
  </section>
  <section>
    <h3>The Challenge of Molecular Generative Models</h3>
    <ul>
      <li>
        <strong>Status Quo:</strong> Existing models struggle with accurate ELBO
        representation.
      </li>
      <li>
        <strong>The Hurdle:</strong> Ensuring sample quality and permutation
        equivariance.
      </li>
      <li>
        <strong>The Quest:</strong> To devise a training loss function that
        addresses these gaps.
      </li>
    </ul>
    <aside class="notes">Mention graph compression</aside>
  </section>
  <section>
    <h2>2. Research Question</h2>
    <div class="fragment">
      <i
        >Can we improve on the state-of-the-art ELBO computation using diffusion
        models on graphs while preserving permutation equivariance?</i
      >
    </div>
  </section>
  <section>
    <h2>Background</h2>
    <div class="fragment">What are diffusion models?</div>
    <div class="fragment">What makes them so powerful?</div>
    <div class="fragment">Some note on graph neural networks.</div>
    <div class="fragment">How can we use them on graphs?</div>
  </section>

  <section data-auto-animate>
    <em>
      "As the sun casts its golden glow over the landscape, mechanical puppies
      come to life ..... creating a poignant moment amidst the joyous backdrop."
    </em>
  </section>
  <section data-auto-animate>
    <img src="./mechanical_puppies.png" class="rounded-image" />
  </section>
</section>
<section id="after-this">
  <section>
    <h3>Generative Models</h3>
    <img
      src="./supervised_vs_unsupervised.png"
      class="rounded-image"
      style="width: 150% !important"
    />
  </section>
</section>
<section>
  <section>
    <h2>Diffusion Models Architecture</h2>
    <img
      src="./ink_spreading_v2.png"
      class="rounded-image"
      style="max-width: 60%"
    />
  </section>
  <section>
    <figure>
      <img src="./DDPM.png" class="rounded-image" />
      <figcaption>Image source: Jo et al. 2020</figcaption>
    </figure>
  </section>
  <section>
    <h2>Data Type</h2>
    <div class="fragment">Images: Continuous</div>
    <div class="fragment">Graphs: Discrete</div>
  </section>
  <section>
    <h2>This Work is based on</h2>
    <img src="./digress.png" class="rounded-image" />
  </section>
  <section>
    <h2>Basic Components of this architecture</h2>
    <table>
      <tr class="fragment">
        <td>Noise function</td>
        <td>$$q(\\mathbf{x}_{T} \\vert \\mathbf{x}_0)$$</td>
      </tr>
      <tr class="fragment">
        <td>Noise schedule</td>
        <td>$$q(\\mathbf{x}_{t+1} \\vert \\mathbf{x}_t)$$</td>
      </tr>
      <tr class="fragment">
        <td>Probabilistic Model</td>
        <td>$$p_\\theta(\\mathbf{x}_{t-1} \\vert \\mathbf{x}_{t})$$</td>
      </tr>
    </table>
  </section>
  <section data-auto-animate data-auto-animate-id="group1">
    <h2>Noise Function</h2>
    <p data-id="p">$$q(\\mathbf{x}_{T} \\vert \\mathbf{x}_0)$$</p>
  </section>
  <section data-auto-animate data-auto-animate-id="group1">
    <h2>Noise Function</h2>
    <p data-id="p">$$q(\\mathbf{x}_{T})$$</p>
  </section>
  <section data-auto-animate data-auto-animate-id="group1">
    <h2>Noise Function</h2>
    <img src="./gaussian_distribution.png" class="rounded-image" />
  </section>
  <section data-auto-animate data-auto-animate-id="group1">
    <h2>Noise Function</h2>
    <img src="./categorical_distribution.png" class="rounded-image" />
  </section>
  <section data-auto-animate data-auto-animate-id="group2">
    <h2>Noise Schedule</h2>
    <p>$$q(\\mathbf{x}_{t+1} \\vert \\mathbf{x}_t)$$</p>
  </section>

  <section data-auto-animate data-auto-animate-id="group2">
    <h2>Noise Schedule</h2>
    <h4>Cosine Schedule</h4>
    <img
      src="./cosine_schedule.png"
      class="rounded-image"
      style="max-width: 90%"
    />
  </section>
  <section data-auto-animate data-auto-animate-id="group2">
    <h2>Noise Schedule</h2>
    <h4>Cosine Schedule</h4>
    <figure>
      <img
        src="./cosine_vs_linear_dog.png"
        class="rounded-image"
        style="max-width: 90%"
      />
      <figcaption>
        Cosine schedule vs linear. Image source: Jo et al. 2020
      </figcaption>
    </figure>
  </section>
  <section data-auto-animate data-auto-animate-id="group3">
    <h2>Deep Probabilistic Model</h2>
    <p>$$p_\\theta(\\mathbf{x}_{t-1} \\vert \\mathbf{x}_{t})$$</p>
  </section>
  <section data-auto-animate data-auto-animate-id="group3">
    <h2>Deep Probabilistic Model</h2>
    <p>Graph Neural Network</p>
    <div class="image-wrapper">
      <img
        src="./message_passing.png"
        style="max-width: 50%"
        class="foreground"
      />
    </div>
  </section>
  <section data-auto-animate data-auto-animate-id="group3">
    <h2>Deep Probabilistic Model</h2>

    <div class="image-wrapper">
      <img
        src="./cnn_vs_gnn_2.png"
        style="max-width: 90%; margin: -7%; margin-top: -5%"
        class="foreground"
      />
    </div>
  </section>
  <section data-auto-animate data-auto-animate-id="group3">
    <h2>Deep Probabilistic Model</h2>
    <h4>Graph Neural Network (GNN)</h4>
    <p class="smaller-math">
      $$ h_u^{(k+1)} = \\text{UPDATE}^{(k)} \\left( h_u^{(k)},
      \\text{AGGREGATE}^{(k)} \\left\\{ h_v^{(k)}, \\, \\forall v \\in \\mathcal{N}(u)
      \\right\\} \\right) $$
    </p>
  </section>
  <section data-auto-animate data-auto-animate-id="group3">
    <h2>Deep Probabilistic Model</h2>
    <h4>Graph Neural Network (GNN)</h4>
    <img src="./isomorphism_problem.png" style="max-width: 100%" />
  </section>
  <section data-auto-animate data-auto-animate-id="group3">
    <h2>Deep Probabilistic Model</h2>
    <h4 data-id="g">Graph Neural Network (GNN)</h4>
    <p>Drawbacks:</p>
    <ul>
      <li class="fragment">Oversmoothing</li>
      <li class="fragment">Oversquashing</li>
      <li class="fragment">Inability to detect loops</li>
    </ul>
  </section>
  <section data-auto-animate data-auto-animate-id="group3">
    <h2>Deep Probabilistic Model</h2>
    <h4 data-id="g">Graph Transformer</h4>
    <img src="./gtn.png" class="rounded-image" style="max-width: 90%" />
  </section>
</section>
<section>
  <section>
    <h2>Validation and Training loss</h2>
  </section>
  <section>
    <h2>What is the ELBO?</h2>
    <p>Evidence Lower BOund</p>
    <p>$$-\\log(p(\\textbf{x})) \\leq \\textbf{ELBO}(\\textbf{x})$$</p>
  </section>
  <section data-auto-animate>
    <h2>ELBO for diffusion models</h2>
    <p>
      $$L_{\\text{ELBO}} = L_{\\text{prior}} + L_{\\text{diff}} + L_{\\text{rec}}$$
    </p>
  </section>
  <section data-auto-animate>
    <h2>ELBO for diffusion models</h2>
    <p>
      $$L_{\\text{prior}} = D_\\text{KL}(q(\\mathbf{x}_T \\vert \\mathbf{x}_0)
      \\parallel p(\\mathbf{x}_T))$$
    </p>
  </section>
  <section data-auto-animate>
    <h2>ELBO for diffusion models</h2>
    <p>$$L_{\\text{prior}} = 0!$$</p>
  </section>
  <section data-auto-animate>
    <h2>ELBO for diffusion models</h2>
    <p>
      $$ L_{\\text{diff}} = \\mathbb{E}_{q(\\mathbf{x}_t \\vert \\mathbf{x}_0)}\\left[
      \\sum_{t=2}^T D_\\text{KL}(q(\\mathbf{x}_{t-1} \\vert \\mathbf{x}_t,
      \\mathbf{x}_0) \\parallel p_\\theta(\\mathbf{x}_{t-1} \\vert\\mathbf{x}_t))
      \\right] $$
    </p>
  </section>
  <section data-auto-animate>
    <h2>ELBO for diffusion models</h2>
    <p>
      $$L_{\\text{rec}} = \\mathbb{E}_{q(\\mathbf{x}_1 \\vert \\mathbf{x}_0)} \\left[-
      \\log p_\\theta(\\mathbf{x}_0 \\vert \\mathbf{x}_1) \\right]$$
    </p>
  </section>
  <section data-auto-animate data-auto-animate-id="group5">
    <h2>Denoising all the way</h2>
  </section>
  <section data-auto-animate data-auto-animate-id="group5">
    <h2>Denoising all the way</h2>
    <p data-id="a">$$p_{\\theta}(\\mathbf{x}_0 | \\mathbf{x}_t)$$</p>
  </section>
  <section data-auto-animate data-auto-animate-id="group5">
    <h2>Denoising all the way</h2>
    <a data-id="a" target="_blank" href="http://localhost:5174/">Animation</a>
  </section>
  <section data-auto-animate data-auto-animate-id="group6">
    <h2>Additional Denoising Term</h2>
  </section>
  <section data-auto-animate data-auto-animate-id="group6">
    <h2>Additional Denoising Term</h2>
    <figure>
      <p>
        $$\\begin{align*} L_\\text{den} & = \\mathbb{E}_{t \\sim \\text{Uniform}(1,
        T)}\\mathbb{E}_{q(\\mathbf{x}_1 \\vert \\mathbf{x}_0)} \\left[- \\log
        p_\\theta(\\mathbf{x}_0 \\vert \\mathbf{x}_t) \\right], \\\\ & = \\mathbb{E}_{t
        \\sim \\text{Uniform}(1, T)}\\text{cross-entropy}(p_\\theta(\\mathbf{x}_0
        \\vert \\mathbf{x}_t), \\mathbf{x}_0) \\end{align*}$$
      </p>
      <figcaption>Introduced by: Chen et al. 2021</figcaption>
    </figure>
  </section>
  <section>
    <h2>Training Loss</h2>
    <p>
      $$\\text{Training loss} = \\lambda (\\hat{L}_{\\text{diff}} +
      \\hat{L}_{\\text{rec}}) + (1 - \\lambda) L_{\\text{den}}$$ $$\\lambda \\in [0,
      1]$$
    </p>
  </section>
</section>
<section>
  <section>
    <h2>Experiments</h2>
  </section>
  <section>
    <h2>Dataset: QM9</h2>
    <ul>
      <li>133k small organic molecules</li>
      <li>12 properties</li>
      <li>Graphs with 9 nodes</li>
    </ul>
  </section>
  <section>
    <h2>Main Experiment: ELBO computation</h2>
    <table border="1" style="text-align: center; border-collapse: collapse">
      <tr>
        <th>Model</th>
        <th>ELBO <span class="small">[nats/graph]</span></th>
      </tr>
      <tr>
        <td>DiGress</td>
        <td>69.2</td>
      </tr>
      <tr>
        <td>DDGD</td>
        <td><strong>52.3</strong></td>
      </tr>
      <caption>
        ELBO results on the QM9 dataset (the lower the better).
      </caption>
    </table>
  </section>
  <section>
    <h2>Experiment: Molecule generation</h2>
    <table
      border="1"
      style="text-align: center; border-collapse: collapse"
      class="medium"
    >
      <caption>
        Comparative Analysis of Molecule Generation: Validity and Uniqueness
        Metrics across Models
      </caption>
      <tr>
        <th>Model</th>
        <th>Relaxed Validity</th>
        <th>Uniqueness</th>
      </tr>
      <tr>
        <td>Dataset</td>
        <td>99.3</td>
        <td>100</td>
      </tr>
      <tr>
        <td>DiGress</td>
        <td><strong>99.0</strong></td>
        <td>96.2</td>
      </tr>
      <tr>
        <td>Set2GraphVAE</td>
        <td>59.9</td>
        <td>93.8</td>
      </tr>
      <tr>
        <td>SPECTRE</td>
        <td>87.3</td>
        <td>35.7</td>
      </tr>
      <tr>
        <td>GraphNVP</td>
        <td>83.1</td>
        <td>99.2</td>
      </tr>
      <tr>
        <td>GDSS</td>
        <td>95.7</td>
        <td>98.5</td>
      </tr>
      <tr>
        <td>DDGD (ours)</td>
        <td>96.0</td>
        <td><strong>100.0</strong></td>
      </tr>
    </table>
  </section>

  <section>
    <h2 style="z-index: 100; position: relative">Qualitative Analysis</h2>
    <div
      style="
        position: relative;
        z-index: -100;
        overflow: hidden;
        max-height: 60%;
      "
    >
      <img
        src="./smiles_plot.png"
        class="rounded-image"
        style="max-width: 100%; height: auto; top: -30%; position: relative"
      />
    </div>
  </section>
  <section>
    <h2 style="z-index: 100; position: relative">Qualitative Analysis</h2>
    <div
      style="
        position: relative;
        z-index: -100;
        overflow: hidden;
        max-height: 60%;
      "
    >
      <img
        src="./smiles_data_plot.png"
        class="rounded-image"
        style="max-width: 100%; height: auto; top: -30%; position: relative"
      />
    </div>
  </section>
</section>
<section>
  <h2>Conclusion</h2>
</section>
`,Ri=document.getElementsByClassName("reveal")[0];Ri.innerHTML=`
  <div class='slides'>
    ${Ai}
  </div>
`;function Li(g){const t=document.getElementById(g);if(!t){console.error("Element not found");return}const e=[["GANs.svg","Generative Adversarial Networks","Adversarial training"],["VAEs.svg","Variational Autoencoders","Maximize variational lower bound"],["Diffusion models.svg","Diffusion models","Maximize variational lower bound"],["Normalizing Flows.svg","Normalizing Flows","Maximize likelihood of invertible transforms of distributions"],["Autoregressive Models.svg","Autoregressive Models","Maximize likelihood of next token"]].map(([n,i,o])=>`<section>
      <h2>${i}</h2>
      <p>${o}</p>
      <img src="${n}" />
    </section>`);t.innerHTML+=e.join(`
`)}Li("after-this");console.log(xn);let Ti=new zt({plugins:[wi,Si,xn],slideNumber:"c/t",hash:!0});Ti.initialize();
