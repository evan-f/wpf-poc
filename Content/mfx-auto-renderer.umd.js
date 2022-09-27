(function(D,d){typeof exports=="object"&&typeof module<"u"?d(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],d):(D=typeof globalThis<"u"?globalThis:D||self,d(D["mfx-auto-renderer"]={},D.Vue))})(this,function(D,d){"use strict";var Os=Object.defineProperty;var Cs=(D,d,te)=>d in D?Os(D,d,{enumerable:!0,configurable:!0,writable:!0,value:te}):D[d]=te;var h=(D,d,te)=>(Cs(D,typeof d!="symbol"?d+"":d,te),te);const te=()=>({state:d.reactive({initialized:!1,mounted:!1})}),Zr=e=>{var n;const t=[];return(n=e.item)==null||n.forEach((r,a)=>{const i=aa(r);t.push({title:r.text,active:!1,complete:!1,inProgress:!1,id:a+1,order:a+1,linkId:r.linkId,invalid:!1,fields:i})}),t},Oe=e=>{var t;if(!!((t=e.code)!=null&&t.length))return e.code[0].code};class ea{constructor(t){h(this,"resource");h(this,"active");h(this,"fields");h(this,"clusters");this.resource=t,this.active=!1,this.fields=ra(t),this.clusters=Zr(t)}}class an{constructor(t,n,r){h(this,"answerOption");h(this,"answerValueSet");h(this,"code");h(this,"definition");h(this,"enableBehavior");h(this,"enableWhen");h(this,"initial");h(this,"item");h(this,"linkId");h(this,"maxLength");h(this,"prefix");h(this,"readOnly");h(this,"repeats");h(this,"required");h(this,"text");h(this,"type");h(this,"responseValue");h(this,"cluster");h(this,"group");this.answerOption=t.answerOption,this.answerValueSet=t.answerValueSet,this.code=t.code,this.definition=t.definition,this.enableBehavior=t.enableBehavior,this.enableWhen=t.enableWhen,this.initial=t.initial,this.item=t.item,this.linkId=t.linkId,this.maxLength=t.maxLength,this.prefix=t.prefix,this.readOnly=t.readOnly,this.repeats=t.repeats,this.required=t.required,this.text=t.text,this.type=t.type,this.responseValue=void 0,this.cluster={linkId:n.linkId,code:Oe(n),text:n.text,repeats:n.repeats},r?this.group={linkId:r.linkId,code:Oe(r),text:r.text,repeats:r.repeats}:this.group={...this.cluster}}}const ta=e=>{var n;let t=new Map;return(n=e.item)==null||n.forEach(r=>{var a;(a=r.item)==null||a.forEach(i=>{if(i.type==="group")t=new Map([...t,...na(i,r)]);else if(i.type!=="display"){const o=Oe(i);o&&t.set(o,new an(i,r))}})}),t},na=(e,t)=>function n(r,a,i){return r.item&&r.item.forEach(o=>{if(o.type==="group")n(o,a,i);else{const s=Oe(r);s&&i.set(s,new an(o,a,r))}}),i}(e,t,new Map),ra=ta,aa=e=>e.item?function t(n,r){var a;return(a=n.item)==null||a.forEach(i=>{i.type!=="group"?r.push(i.linkId):t(i,r)}),r}(e,[]):[e.linkId],ia=()=>{const e=d.reactive({forms:new Map});return{state:e,registerForm:i=>{if(!i.url)throw new Error("Missing Questionnaire.url");e.forms.set(i.url,new ea(i))},getActiveForm:()=>{let i;return e.forms.forEach(o=>{o.active&&(i=o)}),i},setActiveForm:i=>{if(!e.forms.has(i))throw new Error(`Questionnaire.url "${i}" not found in store`);e.forms.forEach((o,s)=>o.active=s===i)},clear:()=>{e.forms.clear()}}},on=Symbol("app"),sn=Symbol("form"),fn=Symbol("patient"),ln=()=>({injectAppStoreKey:on,injectAppStore:()=>d.inject(on),injectFormStoreKey:sn,injectFormStore:()=>d.inject(sn),injectPatientStoreKey:fn,injectPatientStore:()=>d.inject(fn)}),oa=()=>{const e=d.reactive({patientFirstName:void 0,patientLastName:void 0,patientId:void 0});return{state:e,registerPatient:n=>{var r,a,i,o,s;e.patientFirstName=((r=n.name)==null?void 0:r.length)&&((a=n.name[0].given)==null?void 0:a.length)?n.name[0].given[0]:void 0,e.patientLastName=(i=n.name)!=null&&i.length?n.name[0].family:void 0,e.patientId=(s=(o=n.identifier)==null?void 0:o.find(f=>{var l,c,u,m;return((c=(l=f==null?void 0:f.type)==null?void 0:l.coding)==null?void 0:c.length)&&((m=(u=f==null?void 0:f.type)==null?void 0:u.coding[0])==null?void 0:m.code)==="AN"}))==null?void 0:s.value}}},nt=class{constructor(t){h(this,"_config");h(this,"_stores");if(this._config=t,nt._activeIds.includes(t.id))throw new Error(`${this._config.id} is already active`);this._stores={app:te(),form:ia(),patient:oa()},nt._activeIds.push(this._config.id)}get config(){return this._config}get stores(){return this._stores}};let Ce=nt;h(Ce,"_activeIds",[]);class sa{constructor(t){h(this,"_context");this._context=t}query(t){const n=this._context.stores.form.getActiveForm(),r=[];if(!n)throw new Error("No active form set in form store");return Array.isArray(t)?(n.fields.forEach((a,i)=>{t.includes(i)&&r.push(a)}),r):(n.fields.has(t)&&r.push(n.fields.get(t)),r)}getValue(t){var r;const n=this._context.stores.form.getActiveForm();if(!n)throw new Error("No active form set in form store");if(!n.fields.has(t))throw new Error(`Coding "${t}" does not exist in Questionnaire "${(r=n.resource)==null?void 0:r.url}"`);return n.fields.get(t).responseValue}setValue(t,n){var a;const r=this._context.stores.form.getActiveForm();if(!r)throw new Error("No active form set in form store");if(!r.fields.has(t))throw new Error(`Coding "${t}" does not exist in Questionnaire "${(a=r.resource)==null?void 0:a.url}"`);r.fields.get(t).responseValue=n}}class fa{constructor(t,n){h(this,"_context");h(this,"_engine");this._context=t,this._engine=n}}function cn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cn(Object(n),!0).forEach(function(r){N(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cn(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Pe(e){return Pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pe(e)}function la(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function un(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ca(e,t,n){return t&&un(e.prototype,t),n&&un(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rt(e,t){return da(e)||pa(e,t)||dn(e,t)||ha()}function pe(e){return ua(e)||ma(e)||dn(e)||va()}function ua(e){if(Array.isArray(e))return at(e)}function da(e){if(Array.isArray(e))return e}function ma(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function pa(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(f){i=!0,s=f}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function dn(e,t){if(!!e){if(typeof e=="string")return at(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return at(e,t)}}function at(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function va(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ha(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var mn=function(){},it={},pn={},vn=null,hn={mark:mn,measure:mn};try{typeof window<"u"&&(it=window),typeof document<"u"&&(pn=document),typeof MutationObserver<"u"&&(vn=MutationObserver),typeof performance<"u"&&(hn=performance)}catch{}var ga=it.navigator||{},gn=ga.userAgent,bn=gn===void 0?"":gn,X=it,A=pn,yn=vn,Te=hn;X.document;var Y=!!A.documentElement&&!!A.head&&typeof A.addEventListener=="function"&&typeof A.createElement=="function",xn=~bn.indexOf("MSIE")||~bn.indexOf("Trident/"),Ne,Ie,Re,Le,je,V="___FONT_AWESOME___",ot=16,wn="fa",kn="svg-inline--fa",ne="data-fa-i2svg",st="data-fa-pseudo-element",ba="data-fa-pseudo-element-pending",ft="data-prefix",lt="data-icon",An="fontawesome-i2svg",ya="async",xa=["HTML","HEAD","STYLE","SCRIPT"],En=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),E="classic",O="sharp",ct=[E,O];function ve(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[E]}})}var he=ve((Ne={},N(Ne,E,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),N(Ne,O,{fa:"solid",fass:"solid","fa-solid":"solid"}),Ne)),ge=ve((Ie={},N(Ie,E,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),N(Ie,O,{solid:"fass"}),Ie)),be=ve((Re={},N(Re,E,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),N(Re,O,{fass:"fa-solid"}),Re)),wa=ve((Le={},N(Le,E,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),N(Le,O,{"fa-solid":"fass"}),Le)),ka=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Sn="fa-layers-text",Aa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ea=ve((je={},N(je,E,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),N(je,O,{900:"fass"}),je)),_n=[1,2,3,4,5,6,7,8,9,10],Sa=_n.concat([11,12,13,14,15,16,17,18,19,20]),_a=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],re={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ye=new Set;Object.keys(ge[E]).map(ye.add.bind(ye)),Object.keys(ge[O]).map(ye.add.bind(ye));var Oa=[].concat(ct,pe(ye),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",re.GROUP,re.SWAP_OPACITY,re.PRIMARY,re.SECONDARY]).concat(_n.map(function(e){return"".concat(e,"x")})).concat(Sa.map(function(e){return"w-".concat(e)})),xe=X.FontAwesomeConfig||{};function Ca(e){var t=A.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Pa(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(A&&typeof A.querySelector=="function"){var Ta=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ta.forEach(function(e){var t=rt(e,2),n=t[0],r=t[1],a=Pa(Ca(n));a!=null&&(xe[r]=a)})}var On={styleDefault:"solid",familyDefault:"classic",cssPrefix:wn,replacementClass:kn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};xe.familyPrefix&&(xe.cssPrefix=xe.familyPrefix);var se=p(p({},On),xe);se.autoReplaceSvg||(se.observeMutations=!1);var g={};Object.keys(On).forEach(function(e){Object.defineProperty(g,e,{enumerable:!0,set:function(n){se[e]=n,we.forEach(function(r){return r(g)})},get:function(){return se[e]}})}),Object.defineProperty(g,"familyPrefix",{enumerable:!0,set:function(t){se.cssPrefix=t,we.forEach(function(n){return n(g)})},get:function(){return se.cssPrefix}}),X.FontAwesomeConfig=g;var we=[];function Na(e){return we.push(e),function(){we.splice(we.indexOf(e),1)}}var J=ot,H={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ia(e){if(!(!e||!Y)){var t=A.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=A.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return A.head.insertBefore(t,r),e}}var Ra="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ke(){for(var e=12,t="";e-- >0;)t+=Ra[Math.random()*62|0];return t}function fe(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ut(e){return e.classList?fe(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Cn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function La(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Cn(e[n]),'" ')},"").trim()}function Fe(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function dt(e){return e.size!==H.size||e.x!==H.x||e.y!==H.y||e.rotate!==H.rotate||e.flipX||e.flipY}function ja(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:f,path:l}}function Fa(e){var t=e.transform,n=e.width,r=n===void 0?ot:n,a=e.height,i=a===void 0?ot:a,o=e.startCentered,s=o===void 0?!1:o,f="";return s&&xn?f+="translate(".concat(t.x/J-r/2,"em, ").concat(t.y/J-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(t.x/J,"em), calc(-50% + ").concat(t.y/J,"em)) "):f+="translate(".concat(t.x/J,"em, ").concat(t.y/J,"em) "),f+="scale(".concat(t.size/J*(t.flipX?-1:1),", ").concat(t.size/J*(t.flipY?-1:1),") "),f+="rotate(".concat(t.rotate,"deg) "),f}var Ma=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Pn(){var e=wn,t=kn,n=g.cssPrefix,r=g.replacementClass,a=Ma;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Tn=!1;function mt(){g.autoAddCss&&!Tn&&(Ia(Pn()),Tn=!0)}var Da={mixout:function(){return{dom:{css:Pn,insertCss:mt}}},hooks:function(){return{beforeDOMElementCreation:function(){mt()},beforeI2svg:function(){mt()}}}},W=X||{};W[V]||(W[V]={}),W[V].styles||(W[V].styles={}),W[V].hooks||(W[V].hooks={}),W[V].shims||(W[V].shims=[]);var U=W[V],Nn=[],$a=function e(){A.removeEventListener("DOMContentLoaded",e),Me=1,Nn.map(function(t){return t()})},Me=!1;Y&&(Me=(A.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(A.readyState),Me||A.addEventListener("DOMContentLoaded",$a));function za(e){!Y||(Me?setTimeout(e,0):Nn.push(e))}function Ae(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Cn(e):"<".concat(t," ").concat(La(r),">").concat(i.map(Ae).join(""),"</").concat(t,">")}function In(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ua=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},pt=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Ua(n,a):n,f,l,c;for(r===void 0?(f=1,c=t[i[0]]):(f=0,c=r);f<o;f++)l=i[f],c=s(c,t[l],l,t);return c};function Ba(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function vt(e){var t=Ba(e);return t.length===1?t[0].toString(16):null}function qa(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Rn(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ht(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Rn(t);typeof U.hooks.addPack=="function"&&!a?U.hooks.addPack(e,Rn(t)):U.styles[e]=p(p({},U.styles[e]||{}),i),e==="fas"&&ht("fa",t)}var De,$e,ze,le=U.styles,Ha=U.shims,Ya=(De={},N(De,E,Object.values(be[E])),N(De,O,Object.values(be[O])),De),gt=null,Ln={},jn={},Fn={},Mn={},Dn={},Va=($e={},N($e,E,Object.keys(he[E])),N($e,O,Object.keys(he[O])),$e);function Wa(e){return~Oa.indexOf(e)}function Ga(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Wa(a)?a:null}var $n=function(){var t=function(i){return pt(le,function(o,s,f){return o[f]=pt(s,i,{}),o},{})};Ln=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){a[f.toString(16)]=o})}return a}),jn=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){a[f]=o})}return a}),Dn=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(f){a[f]=o}),a});var n="far"in le||g.autoFetchSvg,r=pt(Ha,function(a,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:f}),a},{names:{},unicodes:{}});Fn=r.names,Mn=r.unicodes,gt=Ue(g.styleDefault,{family:g.familyDefault})};Na(function(e){gt=Ue(e.styleDefault,{family:g.familyDefault})}),$n();function bt(e,t){return(Ln[e]||{})[t]}function Ka(e,t){return(jn[e]||{})[t]}function ae(e,t){return(Dn[e]||{})[t]}function zn(e){return Fn[e]||{prefix:null,iconName:null}}function Xa(e){var t=Mn[e],n=bt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Q(){return gt}var yt=function(){return{prefix:null,iconName:null,rest:[]}};function Ue(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?E:n,a=he[r][e],i=ge[r][e]||ge[r][a],o=e in U.styles?e:null;return i||o||null}var Un=(ze={},N(ze,E,Object.keys(be[E])),N(ze,O,Object.keys(be[O])),ze);function Be(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},N(t,E,"".concat(g.cssPrefix,"-").concat(E)),N(t,O,"".concat(g.cssPrefix,"-").concat(O)),t),o=null,s=E;(e.includes(i[E])||e.some(function(l){return Un[E].includes(l)}))&&(s=E),(e.includes(i[O])||e.some(function(l){return Un[O].includes(l)}))&&(s=O);var f=e.reduce(function(l,c){var u=Ga(g.cssPrefix,c);if(le[c]?(c=Ya[s].includes(c)?wa[s][c]:c,o=c,l.prefix=c):Va[s].indexOf(c)>-1?(o=c,l.prefix=Ue(c,{family:s})):u?l.iconName=u:c!==g.replacementClass&&c!==i[E]&&c!==i[O]&&l.rest.push(c),!a&&l.prefix&&l.iconName){var m=o==="fa"?zn(l.iconName):{},v=ae(l.prefix,l.iconName);m.prefix&&(o=null),l.iconName=m.iconName||v||l.iconName,l.prefix=m.prefix||l.prefix,l.prefix==="far"&&!le.far&&le.fas&&!g.autoFetchSvg&&(l.prefix="fas")}return l},yt());return(e.includes("fa-brands")||e.includes("fab"))&&(f.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===O&&(le.fass||g.autoFetchSvg)&&(f.prefix="fass",f.iconName=ae(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=Q()||"fas"),f}var Ja=function(){function e(){la(this,e),this.definitions={}}return ca(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=p(p({},n.definitions[s]||{}),o[s]),ht(s,o[s]);var f=be[E][s];f&&ht(f,o[s]),$n()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,f=o.iconName,l=o.icon,c=l[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(u){typeof u=="string"&&(n[s][u]=l)}),n[s][f]=l}),n}}]),e}(),Bn=[],ce={},ue={},Qa=Object.keys(ue);function Za(e,t){var n=t.mixoutsTo;return Bn=e,ce={},Object.keys(ue).forEach(function(r){Qa.indexOf(r)===-1&&delete ue[r]}),Bn.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Pe(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){ce[o]||(ce[o]=[]),ce[o].push(i[o])})}r.provides&&r.provides(ue)}),n}function xt(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=ce[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ie(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=ce[e]||[];a.forEach(function(i){i.apply(null,n)})}function G(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ue[e]?ue[e].apply(null,t):void 0}function wt(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Q();if(!!t)return t=ae(n,t)||t,In(qn.definitions,n,t)||In(U.styles,n,t)}var qn=new Ja,ei=function(){g.autoReplaceSvg=!1,g.observeMutations=!1,ie("noAuto")},ti={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Y?(ie("beforeI2svg",t),G("pseudoElements2svg",t),G("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;g.autoReplaceSvg===!1&&(g.autoReplaceSvg=!0),g.observeMutations=!0,za(function(){ri({autoReplaceSvgRoot:n}),ie("watch",t)})}},ni={icon:function(t){if(t===null)return null;if(Pe(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ae(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ue(t[0]);return{prefix:r,iconName:ae(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(g.cssPrefix,"-"))>-1||t.match(ka))){var a=Be(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Q(),iconName:ae(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Q();return{prefix:i,iconName:ae(i,t)||t}}}},$={noAuto:ei,config:g,dom:ti,parse:ni,library:qn,findIconDefinition:wt,toHtml:Ae},ri=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?A:n;(Object.keys(U.styles).length>0||g.autoFetchSvg)&&Y&&g.autoReplaceSvg&&$.dom.i2svg({node:r})};function qe(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ae(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Y){var r=A.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function ai(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(dt(o)&&n.found&&!r.found){var s=n.width,f=n.height,l={x:s/f/2,y:.5};a.style=Fe(p(p({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function ii(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(g.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:p(p({},a),{},{id:o}),children:r}]}]}function kt(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,f=e.title,l=e.maskId,c=e.titleId,u=e.extra,m=e.watchable,v=m===void 0?!1:m,S=r.found?r:n,C=S.width,y=S.height,b=a==="fak",x=[g.replacementClass,i?"".concat(g.cssPrefix,"-").concat(i):""].filter(function(ee){return u.classes.indexOf(ee)===-1}).filter(function(ee){return ee!==""||!!ee}).concat(u.classes).join(" "),k={children:[],attributes:p(p({},u.attributes),{},{"data-prefix":a,"data-icon":i,class:x,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(y)})},_=b&&!~u.classes.indexOf("fa-fw")?{width:"".concat(C/y*16*.0625,"em")}:{};v&&(k.attributes[ne]=""),f&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(c||ke())},children:[f]}),delete k.attributes.title);var P=p(p({},k),{},{prefix:a,iconName:i,main:n,mask:r,maskId:l,transform:o,symbol:s,styles:p(p({},_),u.styles)}),I=r.found&&n.found?G("generateAbstractMask",P)||{children:[],attributes:{}}:G("generateAbstractIcon",P)||{children:[],attributes:{}},T=I.children,K=I.attributes;return P.children=T,P.attributes=K,s?ii(P):ai(P)}function Hn(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,f=s===void 0?!1:s,l=p(p(p({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(l[ne]="");var c=p({},o.styles);dt(a)&&(c.transform=Fa({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var u=Fe(c);u.length>0&&(l.style=u);var m=[];return m.push({tag:"span",attributes:l,children:[t]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function oi(e){var t=e.content,n=e.title,r=e.extra,a=p(p(p({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Fe(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var At=U.styles;function Et(e){var t=e[0],n=e[1],r=e.slice(4),a=rt(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(g.cssPrefix,"-").concat(re.GROUP)},children:[{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(re.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(re.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var si={found:!1,width:512,height:512};function fi(e,t){!En&&!g.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function St(e,t){var n=t;return t==="fa"&&g.styleDefault!==null&&(t=Q()),new Promise(function(r,a){if(G("missingIconAbstract"),n==="fa"){var i=zn(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&At[t]&&At[t][e]){var o=At[t][e];return r(Et(o))}fi(e,t),r(p(p({},si),{},{icon:g.showMissingIcons&&e?G("missingIconAbstract")||{}:{}}))})}var Yn=function(){},_t=g.measurePerformance&&Te&&Te.mark&&Te.measure?Te:{mark:Yn,measure:Yn},Ee='FA "6.2.0"',li=function(t){return _t.mark("".concat(Ee," ").concat(t," begins")),function(){return Vn(t)}},Vn=function(t){_t.mark("".concat(Ee," ").concat(t," ends")),_t.measure("".concat(Ee," ").concat(t),"".concat(Ee," ").concat(t," begins"),"".concat(Ee," ").concat(t," ends"))},Ot={begin:li,end:Vn},He=function(){};function Wn(e){var t=e.getAttribute?e.getAttribute(ne):null;return typeof t=="string"}function ci(e){var t=e.getAttribute?e.getAttribute(ft):null,n=e.getAttribute?e.getAttribute(lt):null;return t&&n}function ui(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(g.replacementClass)}function di(){if(g.autoReplaceSvg===!0)return Ye.replace;var e=Ye[g.autoReplaceSvg];return e||Ye.replace}function mi(e){return A.createElementNS("http://www.w3.org/2000/svg",e)}function pi(e){return A.createElement(e)}function Gn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?mi:pi:n;if(typeof e=="string")return A.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Gn(o,{ceFn:r}))}),a}function vi(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ye={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Gn(a),n)}),n.getAttribute(ne)===null&&g.keepOriginalSource){var r=A.createComment(vi(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ut(n).indexOf(g.replacementClass))return Ye.replace(t);var a=new RegExp("".concat(g.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,f){return f===g.replacementClass||f.match(a)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Ae(s)}).join(`
`);n.setAttribute(ne,""),n.innerHTML=o}};function Kn(e){e()}function Xn(e,t){var n=typeof t=="function"?t:He;if(e.length===0)n();else{var r=Kn;g.mutateApproach===ya&&(r=X.requestAnimationFrame||Kn),r(function(){var a=di(),i=Ot.begin("mutate");e.map(a),i(),n()})}}var Ct=!1;function Jn(){Ct=!0}function Pt(){Ct=!1}var Ve=null;function Qn(e){if(!!yn&&!!g.observeMutations){var t=e.treeCallback,n=t===void 0?He:t,r=e.nodeCallback,a=r===void 0?He:r,i=e.pseudoElementsCallback,o=i===void 0?He:i,s=e.observeMutationsRoot,f=s===void 0?A:s;Ve=new yn(function(l){if(!Ct){var c=Q();fe(l).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!Wn(u.addedNodes[0])&&(g.searchPseudoElements&&o(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&g.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&Wn(u.target)&&~_a.indexOf(u.attributeName))if(u.attributeName==="class"&&ci(u.target)){var m=Be(ut(u.target)),v=m.prefix,S=m.iconName;u.target.setAttribute(ft,v||c),S&&u.target.setAttribute(lt,S)}else ui(u.target)&&a(u.target)})}}),Y&&Ve.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function hi(){!Ve||Ve.disconnect()}function gi(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function bi(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Be(ut(e));return a.prefix||(a.prefix=Q()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Ka(a.prefix,e.innerText)||bt(a.prefix,vt(e.innerText))),!a.iconName&&g.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function yi(e){var t=fe(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return g.autoA11y&&(n?t["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(r||ke()):(t["aria-hidden"]="true",t.focusable="false")),t}function xi(){return{iconName:null,title:null,titleId:null,prefix:null,transform:H,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Zn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=bi(e),r=n.iconName,a=n.prefix,i=n.rest,o=yi(e),s=xt("parseNodeAttributes",{},e),f=t.styleParser?gi(e):[];return p({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:H,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var wi=U.styles;function er(e){var t=g.autoReplaceSvg==="nest"?Zn(e,{styleParser:!1}):Zn(e);return~t.extra.classes.indexOf(Sn)?G("generateLayersText",e,t):G("generateSvgReplacementMutation",e,t)}var Z=new Set;ct.map(function(e){Z.add("fa-".concat(e))}),Object.keys(he[E]).map(Z.add.bind(Z)),Object.keys(he[O]).map(Z.add.bind(Z)),Z=pe(Z);function tr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Y)return Promise.resolve();var n=A.documentElement.classList,r=function(u){return n.add("".concat(An,"-").concat(u))},a=function(u){return n.remove("".concat(An,"-").concat(u))},i=g.autoFetchSvg?Z:ct.map(function(c){return"fa-".concat(c)}).concat(Object.keys(wi));i.includes("fa")||i.push("fa");var o=[".".concat(Sn,":not([").concat(ne,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(ne,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=fe(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var f=Ot.begin("onTree"),l=s.reduce(function(c,u){try{var m=er(u);m&&c.push(m)}catch(v){En||v.name==="MissingIcon"&&console.error(v)}return c},[]);return new Promise(function(c,u){Promise.all(l).then(function(m){Xn(m,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),f(),c()})}).catch(function(m){f(),u(m)})})}function ki(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;er(e).then(function(n){n&&Xn([n],t)})}function Ai(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:wt(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:wt(a||{})),e(r,p(p({},n),{},{mask:a}))}}var Ei=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?H:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,f=s===void 0?null:s,l=n.maskId,c=l===void 0?null:l,u=n.title,m=u===void 0?null:u,v=n.titleId,S=v===void 0?null:v,C=n.classes,y=C===void 0?[]:C,b=n.attributes,x=b===void 0?{}:b,k=n.styles,_=k===void 0?{}:k;if(!!t){var P=t.prefix,I=t.iconName,T=t.icon;return qe(p({type:"icon"},t),function(){return ie("beforeDOMElementCreation",{iconDefinition:t,params:n}),g.autoA11y&&(m?x["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(S||ke()):(x["aria-hidden"]="true",x.focusable="false")),kt({icons:{main:Et(T),mask:f?Et(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:I,transform:p(p({},H),a),symbol:o,title:m,maskId:c,titleId:S,extra:{attributes:x,styles:_,classes:y}})})}},Si={mixout:function(){return{icon:Ai(Ei)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=tr,n.nodeCallback=ki,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?A:r,i=n.callback,o=i===void 0?function(){}:i;return tr(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,f=r.transform,l=r.symbol,c=r.mask,u=r.maskId,m=r.extra;return new Promise(function(v,S){Promise.all([St(a,s),c.iconName?St(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var y=rt(C,2),b=y[0],x=y[1];v([n,kt({icons:{main:b,mask:x},prefix:s,iconName:a,transform:f,symbol:l,maskId:u,title:i,titleId:o,extra:m,watchable:!0})])}).catch(S)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,f=Fe(s);f.length>0&&(a.style=f);var l;return dt(o)&&(l=G("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(l||i.icon),{children:r,attributes:a}}}},_i={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return qe({type:"layer"},function(){ie("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(g.cssPrefix,"-layers")].concat(pe(i)).join(" ")},children:o}]})}}}},Oi={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,f=r.attributes,l=f===void 0?{}:f,c=r.styles,u=c===void 0?{}:c;return qe({type:"counter",content:n},function(){return ie("beforeDOMElementCreation",{content:n,params:r}),oi({content:n.toString(),title:i,extra:{attributes:l,styles:u,classes:["".concat(g.cssPrefix,"-layers-counter")].concat(pe(s))}})})}}}},Ci={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?H:a,o=r.title,s=o===void 0?null:o,f=r.classes,l=f===void 0?[]:f,c=r.attributes,u=c===void 0?{}:c,m=r.styles,v=m===void 0?{}:m;return qe({type:"text",content:n},function(){return ie("beforeDOMElementCreation",{content:n,params:r}),Hn({content:n,transform:p(p({},H),i),title:s,extra:{attributes:u,styles:v,classes:["".concat(g.cssPrefix,"-layers-text")].concat(pe(l))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,f=null;if(xn){var l=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/l,f=c.height/l}return g.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Hn({content:n.innerHTML,width:s,height:f,transform:i,title:a,extra:o,watchable:!0})])}}},Pi=new RegExp('"',"ug"),nr=[1105920,1112319];function Ti(e){var t=e.replace(Pi,""),n=qa(t,0),r=n>=nr[0]&&n<=nr[1],a=t.length===2?t[0]===t[1]:!1;return{value:vt(a?t[0]:t),isSecondary:r||a}}function rr(e,t){var n="".concat(ba).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=fe(e.children),o=i.filter(function(T){return T.getAttribute(st)===t})[0],s=X.getComputedStyle(e,t),f=s.getPropertyValue("font-family").match(Aa),l=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!f)return e.removeChild(o),r();if(f&&c!=="none"&&c!==""){var u=s.getPropertyValue("content"),m=~["Sharp"].indexOf(f[2])?O:E,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?ge[m][f[2].toLowerCase()]:Ea[m][l],S=Ti(u),C=S.value,y=S.isSecondary,b=f[0].startsWith("FontAwesome"),x=bt(v,C),k=x;if(b){var _=Xa(C);_.iconName&&_.prefix&&(x=_.iconName,v=_.prefix)}if(x&&!y&&(!o||o.getAttribute(ft)!==v||o.getAttribute(lt)!==k)){e.setAttribute(n,k),o&&e.removeChild(o);var P=xi(),I=P.extra;I.attributes[st]=t,St(x,v).then(function(T){var K=kt(p(p({},P),{},{icons:{main:T,mask:yt()},prefix:v,iconName:k,extra:I,watchable:!0})),ee=A.createElement("svg");t==="::before"?e.insertBefore(ee,e.firstChild):e.appendChild(ee),ee.outerHTML=K.map(function(_s){return Ae(_s)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Ni(e){return Promise.all([rr(e,"::before"),rr(e,"::after")])}function Ii(e){return e.parentNode!==document.head&&!~xa.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(st)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ar(e){if(!!Y)return new Promise(function(t,n){var r=fe(e.querySelectorAll("*")).filter(Ii).map(Ni),a=Ot.begin("searchPseudoElements");Jn(),Promise.all(r).then(function(){a(),Pt(),t()}).catch(function(){a(),Pt(),n()})})}var Ri={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ar,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?A:r;g.searchPseudoElements&&ar(a)}}},ir=!1,Li={mixout:function(){return{dom:{unwatch:function(){Jn(),ir=!0}}}},hooks:function(){return{bootstrap:function(){Qn(xt("mutationObserverCallbacks",{}))},noAuto:function(){hi()},watch:function(n){var r=n.observeMutationsRoot;ir?Pt():Qn(xt("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},or=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},ji={mixout:function(){return{parse:{transform:function(n){return or(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=or(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(a.x*32,", ").concat(a.y*32,") "),l="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(f," ").concat(l," ").concat(c)},m={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:u,path:m};return{tag:"g",attributes:p({},v.outer),children:[{tag:"g",attributes:p({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:p(p({},r.icon.attributes),v.path)}]}]}}}},Tt={x:0,y:0,width:"100%",height:"100%"};function sr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Fi(e){return e.tag==="g"?e.children:[e]}var Mi={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Be(a.split(" ").map(function(o){return o.trim()})):yt();return i.prefix||(i.prefix=Q()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,f=n.transform,l=i.width,c=i.icon,u=o.width,m=o.icon,v=ja({transform:f,containerWidth:u,iconWidth:l}),S={tag:"rect",attributes:p(p({},Tt),{},{fill:"white"})},C=c.children?{children:c.children.map(sr)}:{},y={tag:"g",attributes:p({},v.inner),children:[sr(p({tag:c.tag,attributes:p(p({},c.attributes),v.path)},C))]},b={tag:"g",attributes:p({},v.outer),children:[y]},x="mask-".concat(s||ke()),k="clip-".concat(s||ke()),_={tag:"mask",attributes:p(p({},Tt),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,b]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:Fi(m)},_]};return r.push(P,{tag:"rect",attributes:p({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(x,")")},Tt)}),{children:r,attributes:a}}}},Di={provides:function(t){var n=!1;X.matchMedia&&(n=X.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:p(p({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=p(p({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:p(p({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:p(p({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:p(p({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:p(p({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:p(p({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:p(p({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:p(p({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},$i={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},zi=[Da,Si,_i,Oi,Ci,Ri,Li,ji,Mi,Di,$i];Za(zi,{mixoutsTo:$}),$.noAuto;var fr=$.config;$.library,$.dom;var We=$.parse;$.findIconDefinition,$.toHtml;var Ui=$.icon;$.layer;var Bi=$.text;$.counter;function lr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?lr(Object(n),!0).forEach(function(r){M(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):lr(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ge(e){return Ge=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ge(e)}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qi(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Hi(e,t){if(e==null)return{};var n=qi(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Nt(e){return Yi(e)||Vi(e)||Wi(e)||Gi()}function Yi(e){if(Array.isArray(e))return It(e)}function Vi(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Wi(e,t){if(!!e){if(typeof e=="string")return It(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return It(e,t)}}function It(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Gi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ki=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},cr={exports:{}};(function(e){(function(t){var n=function(b,x,k){if(!l(x)||u(x)||m(x)||v(x)||f(x))return x;var _,P=0,I=0;if(c(x))for(_=[],I=x.length;P<I;P++)_.push(n(b,x[P],k));else{_={};for(var T in x)Object.prototype.hasOwnProperty.call(x,T)&&(_[b(T,k)]=n(b,x[T],k))}return _},r=function(b,x){x=x||{};var k=x.separator||"_",_=x.split||/(?=[A-Z])/;return b.split(_).join(k)},a=function(b){return S(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(x,k){return k?k.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},i=function(b){var x=a(b);return x.substr(0,1).toUpperCase()+x.substr(1)},o=function(b,x){return r(b,x).toLowerCase()},s=Object.prototype.toString,f=function(b){return typeof b=="function"},l=function(b){return b===Object(b)},c=function(b){return s.call(b)=="[object Array]"},u=function(b){return s.call(b)=="[object Date]"},m=function(b){return s.call(b)=="[object RegExp]"},v=function(b){return s.call(b)=="[object Boolean]"},S=function(b){return b=b-0,b===b},C=function(b,x){var k=x&&"process"in x?x.process:x;return typeof k!="function"?b:function(_,P){return k(_,b,P)}},y={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(b,x){return n(C(a,x),b)},decamelizeKeys:function(b,x){return n(C(o,x),b,x)},pascalizeKeys:function(b,x){return n(C(i,x),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=y:t.humps=y})(Ki)})(cr);var Xi=cr.exports,Ji=["class","style"];function Qi(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Xi.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Zi(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Rt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(f){return Rt(f)}),a=Object.keys(e.attributes||{}).reduce(function(f,l){var c=e.attributes[l];switch(l){case"class":f.class=Zi(c);break;case"style":f.style=Qi(c);break;default:f.attrs[l]=c}return f},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Hi(n,Ji);return d.h(e.tag,B(B(B({},t),{},{class:a.class,style:B(B({},a.style),o)},a.attrs),s),r)}var ur=!1;try{ur=process.env.NODE_ENV==="production"}catch{}function eo(){if(!ur&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Se(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?M({},e,t):{}}function to(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},M(t,"fa-".concat(e.size),e.size!==null),M(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),M(t,"fa-pull-".concat(e.pull),e.pull!==null),M(t,"fa-swap-opacity",e.swapOpacity),M(t,"fa-bounce",e.bounce),M(t,"fa-shake",e.shake),M(t,"fa-beat",e.beat),M(t,"fa-fade",e.fade),M(t,"fa-beat-fade",e.beatFade),M(t,"fa-flash",e.flash),M(t,"fa-spin-pulse",e.spinPulse),M(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function dr(e){if(e&&Ge(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(We.icon)return We.icon(e);if(e===null)return null;if(Ge(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var no=d.defineComponent({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=d.computed(function(){return dr(t.icon)}),i=d.computed(function(){return Se("classes",to(t))}),o=d.computed(function(){return Se("transform",typeof t.transform=="string"?We.transform(t.transform):t.transform)}),s=d.computed(function(){return Se("mask",dr(t.mask))}),f=d.computed(function(){return Ui(a.value,B(B(B(B({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});d.watch(f,function(c){if(!c)return eo("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var l=d.computed(function(){return f.value?Rt(f.value.abstract[0],{},r):null});return function(){return l.value}}});d.defineComponent({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=fr.familyPrefix,i=d.computed(function(){return["".concat(a,"-layers")].concat(Nt(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return d.h("div",{class:i.value},r.default?r.default():[])}}}),d.defineComponent({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=fr.familyPrefix,i=d.computed(function(){return Se("classes",[].concat(Nt(t.counter?["".concat(a,"-layers-counter")]:[]),Nt(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=d.computed(function(){return Se("transform",typeof t.transform=="string"?We.transform(t.transform):t.transform)}),s=d.computed(function(){var l=Bi(t.value.toString(),B(B({},o.value),i.value)),c=l.abstract;return t.counter&&(c[0].attributes.class=c[0].attributes.class.replace("fa-layers-text","")),c[0]}),f=d.computed(function(){return Rt(s.value,{},r)});return function(){return f.value}}});const ro={class:"flex flex-row"},ao={class:"flex items-center p-2 text-xl cursor-pointer"},io={class:"text-sm"},oo=["id"],so=d.createElementVNode("span",{class:"w-8 h-4 flex items-center flex-shrink-0 ml-1 p-1 bg-bl-panel-color rounded-full duration-300 ease-in-out after:w-3 after:h-3 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:bg-bl-dk-selected-color peer-checked:after:translate-x-3"},null,-1),fo={class:"ml-1 text-sm"},lo=d.defineComponent({__name:"SlideToggle",props:{inputId:null},emits:["toggleEvent"],setup(e,{emit:t}){const n=r=>{t("toggleEvent",r.target.checked)};return(r,a)=>(d.openBlock(),d.createElementBlock("div",ro,[d.createElementVNode("label",ao,[d.createElementVNode("span",io,[d.renderSlot(r.$slots,"leftTitle")]),d.createElementVNode("input",{id:e.inputId,type:"checkbox",class:"appearance-none peer hidden",onClick:n},null,8,oo),so,d.createElementVNode("span",fo,[d.renderSlot(r.$slots,"rightTitle")])])]))}}),co={class:"form-wrapper grid"},uo={class:"min-h-full overflow-y-scroll"},mo=d.defineComponent({__name:"FormWrapper",setup(e){return(t,n)=>(d.openBlock(),d.createElementBlock("div",co,[d.createElementVNode("div",uo,[d.renderSlot(t.$slots,"default",{},void 0,!0)])]))}}),Ns="",po=((e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n})(mo,[["__scopeId","data-v-a22be3cc"]]),vo={key:0},ho=d.defineComponent({__name:"FormContent",setup(e){const n=ln().injectFormStore().getActiveForm();return(r,a)=>d.unref(n)?(d.openBlock(),d.createElementBlock("pre",vo,d.toDisplayString(d.unref(n).resource),1)):d.createCommentVNode("",!0)}}),go=d.createTextVNode("Light"),bo=d.createTextVNode("Dark"),yo=d.defineComponent({__name:"Renderer",setup(e){const t=n=>{n?R.toggleMode("dark"):R.toggleMode("light")};return(n,r)=>(d.openBlock(),d.createElementBlock(d.Fragment,null,[d.createVNode(lo,{inputId:"themeModeToggle",onToggleEvent:t},{leftTitle:d.withCtx(()=>[go]),rightTitle:d.withCtx(()=>[bo]),_:1}),d.createVNode(po,null,{default:d.withCtx(()=>[d.createVNode(ho)]),_:1})],64))}}),Rs="";class xo{constructor(){h(this,"background-color","");h(this,"panel-color","");h(this,"text-color","");h(this,"focus-color","");h(this,"selected-color","");h(this,"attention-color","");h(this,"success-color","");h(this,"button-background-default-color","");h(this,"button-background-secondary-color","");h(this,"icon-default-color","");h(this,"icon-secondary-color","");h(this,"icon-diminished-color","");h(this,"icon-hover-default-color","");h(this,"icon-hover-secondary-color","");h(this,"icon-hover-diminished-color","")}}var Ke=(e=>(e.JSON="json",e.URL="url",e))(Ke||{});const mr={preferDarkMode:!0,light:{name:"light","background-color":"#faf6eb","panel-color":"#aed6be","text-color":"#7d8d73","focus-color":"#7d654e","selected-color":"#aac1af","attention-color":"#ffe599","success-color":"#90f7b9","button-background-default-color":"#aac1af","button-background-secondary-color":"#cce2f4","icon-default-color":"#bbd9f0","icon-secondary-color":"#93c9a8","icon-diminished-color":"#798c71","icon-hover-default-color":"#cce2f4","icon-hover-secondary-color":"#aed6be","icon-hover-diminished-color":"#92a689"},dark:{name:"dark","background-color":"#1f1f1f","panel-color":"#343434","text-color":"#c9c7c7","focus-color":"#535353","selected-color":"#4fadf8","attention-color":"#e9a23b","success-color":"#6bd38a","button-background-default-color":"#1f1f1f","button-background-secondary-color":"#989898","icon-default-color":"#e3e3e3","icon-secondary-color":"#4fadf8","icon-diminished-color":"#535353","icon-hover-default-color":"#c9c7c7","icon-hover-secondary-color":"#83c8ff","icon-hover-diminished-color":"#848484"}},w=class{};let R=w;h(R,"LIGHT","light"),h(R,"DARK","dark"),h(R,"THEME_MODE_TOGGLE_ID","themeModeToggle"),h(R,"THEME_HTML_ATTRIBUTE","theme-mode"),h(R,"LIGHT_CSS_VAR_PREFIX","--bl-"),h(R,"DARK_CSS_VAR_PREFIX","--bl-dk-"),h(R,"defaultTheme",mr),h(R,"activeTheme",w.defaultTheme),h(R,"applyTheme",t=>{const n=new xo;w.activeTheme=t,t.preferDarkMode?w.toggleMode(w.DARK):w.toggleMode(w.LIGHT),Object.keys(n).forEach(r=>{w._getColorOrFallbackToDefault(r,w.LIGHT),w._getColorOrFallbackToDefault(r,w.DARK)})}),h(R,"getActiveTheme",()=>w.activeTheme),h(R,"toggleMode",t=>{t===w.LIGHT?(document.getElementById(w.THEME_MODE_TOGGLE_ID).checked=!1,document.documentElement.setAttribute(w.THEME_HTML_ATTRIBUTE,w.LIGHT)):(document.getElementById("themeModeToggle").checked=!0,document.documentElement.setAttribute(w.THEME_HTML_ATTRIBUTE,w.DARK))}),h(R,"_getColorOrFallbackToDefault",(t,n)=>{if(t){let r,a;n===w.LIGHT?(a=w.LIGHT_CSS_VAR_PREFIX,r=w.activeTheme.light[t]!==null&&w.activeTheme.light[t]!==void 0&&w.activeTheme.light[t]!==""?w.activeTheme.light[t]:w.defaultTheme.light[t]):(a=w.DARK_CSS_VAR_PREFIX,r=w.activeTheme.dark[t]!==null&&w.activeTheme.dark[t]!==void 0&&w.activeTheme.dark[t]!==""?w.activeTheme.dark[t]:w.defaultTheme.dark[t]),document.documentElement.style.setProperty(`${a}${t}`,r)}});class wo{constructor(t,n){h(this,"_context");h(this,"_engine");h(this,"_vue");this._context=t,this._engine=n;const r=ln();this._vue=d.createApp(yo),this._vue.provide(r.injectAppStoreKey,this._context.stores.app),this._vue.provide(r.injectFormStoreKey,this._context.stores.form),this._vue.provide(r.injectPatientStoreKey,this._context.stores.patient),this._vue.component("font-awesome-icon",no)}mount(t){this._vue.mount(t),this._context.stores.app.state.mounted=!0,R.applyTheme(this._context.config.theme)}}function ko(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pr={exports:{}},Lt={exports:{}},vr=function(t,n){return function(){for(var a=new Array(arguments.length),i=0;i<a.length;i++)a[i]=arguments[i];return t.apply(n,a)}},Ao=vr,oe=Object.prototype.toString;function jt(e){return oe.call(e)==="[object Array]"}function Ft(e){return typeof e>"u"}function Eo(e){return e!==null&&!Ft(e)&&e.constructor!==null&&!Ft(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}function So(e){return oe.call(e)==="[object ArrayBuffer]"}function _o(e){return typeof FormData<"u"&&e instanceof FormData}function Oo(e){var t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function Co(e){return typeof e=="string"}function Po(e){return typeof e=="number"}function hr(e){return e!==null&&typeof e=="object"}function Xe(e){if(oe.call(e)!=="[object Object]")return!1;var t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function To(e){return oe.call(e)==="[object Date]"}function No(e){return oe.call(e)==="[object File]"}function Io(e){return oe.call(e)==="[object Blob]"}function gr(e){return oe.call(e)==="[object Function]"}function Ro(e){return hr(e)&&gr(e.pipe)}function Lo(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}function jo(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function Fo(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function Mt(e,t){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),jt(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}function Dt(){var e={};function t(a,i){Xe(e[i])&&Xe(a)?e[i]=Dt(e[i],a):Xe(a)?e[i]=Dt({},a):jt(a)?e[i]=a.slice():e[i]=a}for(var n=0,r=arguments.length;n<r;n++)Mt(arguments[n],t);return e}function Mo(e,t,n){return Mt(t,function(a,i){n&&typeof a=="function"?e[i]=Ao(a,n):e[i]=a}),e}function Do(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}var z={isArray:jt,isArrayBuffer:So,isBuffer:Eo,isFormData:_o,isArrayBufferView:Oo,isString:Co,isNumber:Po,isObject:hr,isPlainObject:Xe,isUndefined:Ft,isDate:To,isFile:No,isBlob:Io,isFunction:gr,isStream:Ro,isURLSearchParams:Lo,isStandardBrowserEnv:Fo,forEach:Mt,merge:Dt,extend:Mo,trim:jo,stripBOM:Do},de=z;function br(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var yr=function(t,n,r){if(!n)return t;var a;if(r)a=r(n);else if(de.isURLSearchParams(n))a=n.toString();else{var i=[];de.forEach(n,function(f,l){f===null||typeof f>"u"||(de.isArray(f)?l=l+"[]":f=[f],de.forEach(f,function(u){de.isDate(u)?u=u.toISOString():de.isObject(u)&&(u=JSON.stringify(u)),i.push(br(l)+"="+br(u))}))}),a=i.join("&")}if(a){var o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+a}return t},$o=z;function Je(){this.handlers=[]}Je.prototype.use=function(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1},Je.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},Je.prototype.forEach=function(t){$o.forEach(this.handlers,function(r){r!==null&&t(r)})};var zo=Je,Uo=z,Bo=function(t,n){Uo.forEach(t,function(a,i){i!==n&&i.toUpperCase()===n.toUpperCase()&&(t[n]=a,delete t[i])})},xr=function(t,n,r,a,i){return t.config=n,r&&(t.code=r),t.request=a,t.response=i,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t},$t,wr;function kr(){if(wr)return $t;wr=1;var e=xr;return $t=function(n,r,a,i,o){var s=new Error(n);return e(s,r,a,i,o)},$t}var zt,Ar;function qo(){if(Ar)return zt;Ar=1;var e=kr();return zt=function(n,r,a){var i=a.config.validateStatus;!a.status||!i||i(a.status)?n(a):r(e("Request failed with status code "+a.status,a.config,null,a.request,a))},zt}var Ut,Er;function Ho(){if(Er)return Ut;Er=1;var e=z;return Ut=e.isStandardBrowserEnv()?function(){return{write:function(r,a,i,o,s,f){var l=[];l.push(r+"="+encodeURIComponent(a)),e.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),e.isString(o)&&l.push("path="+o),e.isString(s)&&l.push("domain="+s),f===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(r){var a=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Ut}var Bt,Sr;function Yo(){return Sr||(Sr=1,Bt=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}),Bt}var qt,_r;function Vo(){return _r||(_r=1,qt=function(t,n){return n?t.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):t}),qt}var Ht,Or;function Wo(){if(Or)return Ht;Or=1;var e=Yo(),t=Vo();return Ht=function(r,a){return r&&!e(a)?t(r,a):a},Ht}var Yt,Cr;function Go(){if(Cr)return Yt;Cr=1;var e=z,t=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return Yt=function(r){var a={},i,o,s;return r&&e.forEach(r.split(`
`),function(l){if(s=l.indexOf(":"),i=e.trim(l.substr(0,s)).toLowerCase(),o=e.trim(l.substr(s+1)),i){if(a[i]&&t.indexOf(i)>=0)return;i==="set-cookie"?a[i]=(a[i]?a[i]:[]).concat([o]):a[i]=a[i]?a[i]+", "+o:o}}),a},Yt}var Vt,Pr;function Ko(){if(Pr)return Vt;Pr=1;var e=z;return Vt=e.isStandardBrowserEnv()?function(){var n=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),a;function i(o){var s=o;return n&&(r.setAttribute("href",s),s=r.href),r.setAttribute("href",s),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return a=i(window.location.href),function(s){var f=e.isString(s)?i(s):s;return f.protocol===a.protocol&&f.host===a.host}}():function(){return function(){return!0}}(),Vt}var Wt,Tr;function Nr(){if(Tr)return Wt;Tr=1;var e=z,t=qo(),n=Ho(),r=yr,a=Wo(),i=Go(),o=Ko(),s=kr();return Wt=function(l){return new Promise(function(u,m){var v=l.data,S=l.headers,C=l.responseType;e.isFormData(v)&&delete S["Content-Type"];var y=new XMLHttpRequest;if(l.auth){var b=l.auth.username||"",x=l.auth.password?unescape(encodeURIComponent(l.auth.password)):"";S.Authorization="Basic "+btoa(b+":"+x)}var k=a(l.baseURL,l.url);y.open(l.method.toUpperCase(),r(k,l.params,l.paramsSerializer),!0),y.timeout=l.timeout;function _(){if(!!y){var I="getAllResponseHeaders"in y?i(y.getAllResponseHeaders()):null,T=!C||C==="text"||C==="json"?y.responseText:y.response,K={data:T,status:y.status,statusText:y.statusText,headers:I,config:l,request:y};t(u,m,K),y=null}}if("onloadend"in y?y.onloadend=_:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.indexOf("file:")===0)||setTimeout(_)},y.onabort=function(){!y||(m(s("Request aborted",l,"ECONNABORTED",y)),y=null)},y.onerror=function(){m(s("Network Error",l,null,y)),y=null},y.ontimeout=function(){var T="timeout of "+l.timeout+"ms exceeded";l.timeoutErrorMessage&&(T=l.timeoutErrorMessage),m(s(T,l,l.transitional&&l.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",y)),y=null},e.isStandardBrowserEnv()){var P=(l.withCredentials||o(k))&&l.xsrfCookieName?n.read(l.xsrfCookieName):void 0;P&&(S[l.xsrfHeaderName]=P)}"setRequestHeader"in y&&e.forEach(S,function(T,K){typeof v>"u"&&K.toLowerCase()==="content-type"?delete S[K]:y.setRequestHeader(K,T)}),e.isUndefined(l.withCredentials)||(y.withCredentials=!!l.withCredentials),C&&C!=="json"&&(y.responseType=l.responseType),typeof l.onDownloadProgress=="function"&&y.addEventListener("progress",l.onDownloadProgress),typeof l.onUploadProgress=="function"&&y.upload&&y.upload.addEventListener("progress",l.onUploadProgress),l.cancelToken&&l.cancelToken.promise.then(function(T){!y||(y.abort(),m(T),y=null)}),v||(v=null),y.send(v)})},Wt}var L=z,Ir=Bo,Xo=xr,Jo={"Content-Type":"application/x-www-form-urlencoded"};function Rr(e,t){!L.isUndefined(e)&&L.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function Qo(){var e;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(e=Nr()),e}function Zo(e,t,n){if(L.isString(e))try{return(t||JSON.parse)(e),L.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}var Qe={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:Qo(),transformRequest:[function(t,n){return Ir(n,"Accept"),Ir(n,"Content-Type"),L.isFormData(t)||L.isArrayBuffer(t)||L.isBuffer(t)||L.isStream(t)||L.isFile(t)||L.isBlob(t)?t:L.isArrayBufferView(t)?t.buffer:L.isURLSearchParams(t)?(Rr(n,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):L.isObject(t)||n&&n["Content-Type"]==="application/json"?(Rr(n,"application/json"),Zo(t)):t}],transformResponse:[function(t){var n=this.transitional,r=n&&n.silentJSONParsing,a=n&&n.forcedJSONParsing,i=!r&&this.responseType==="json";if(i||a&&L.isString(t)&&t.length)try{return JSON.parse(t)}catch(o){if(i)throw o.name==="SyntaxError"?Xo(o,this,"E_JSON_PARSE"):o}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300}};Qe.headers={common:{Accept:"application/json, text/plain, */*"}},L.forEach(["delete","get","head"],function(t){Qe.headers[t]={}}),L.forEach(["post","put","patch"],function(t){Qe.headers[t]=L.merge(Jo)});var Gt=Qe,es=z,ts=Gt,ns=function(t,n,r){var a=this||ts;return es.forEach(r,function(o){t=o.call(a,t,n)}),t},Kt,Lr;function jr(){return Lr||(Lr=1,Kt=function(t){return!!(t&&t.__CANCEL__)}),Kt}var Fr=z,Xt=ns,rs=jr(),as=Gt;function Jt(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var is=function(t){Jt(t),t.headers=t.headers||{},t.data=Xt.call(t,t.data,t.headers,t.transformRequest),t.headers=Fr.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),Fr.forEach(["delete","get","head","post","put","patch","common"],function(a){delete t.headers[a]});var n=t.adapter||as.adapter;return n(t).then(function(a){return Jt(t),a.data=Xt.call(t,a.data,a.headers,t.transformResponse),a},function(a){return rs(a)||(Jt(t),a&&a.response&&(a.response.data=Xt.call(t,a.response.data,a.response.headers,t.transformResponse))),Promise.reject(a)})},F=z,Mr=function(t,n){n=n||{};var r={},a=["url","method","data"],i=["headers","auth","proxy","params"],o=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function f(m,v){return F.isPlainObject(m)&&F.isPlainObject(v)?F.merge(m,v):F.isPlainObject(v)?F.merge({},v):F.isArray(v)?v.slice():v}function l(m){F.isUndefined(n[m])?F.isUndefined(t[m])||(r[m]=f(void 0,t[m])):r[m]=f(t[m],n[m])}F.forEach(a,function(v){F.isUndefined(n[v])||(r[v]=f(void 0,n[v]))}),F.forEach(i,l),F.forEach(o,function(v){F.isUndefined(n[v])?F.isUndefined(t[v])||(r[v]=f(void 0,t[v])):r[v]=f(void 0,n[v])}),F.forEach(s,function(v){v in n?r[v]=f(t[v],n[v]):v in t&&(r[v]=f(void 0,t[v]))});var c=a.concat(i).concat(o).concat(s),u=Object.keys(t).concat(Object.keys(n)).filter(function(v){return c.indexOf(v)===-1});return F.forEach(u,l),r},Dr={name:"axios",version:"0.21.4",description:"Promise based HTTP client for the browser and node.js",main:"index.js",scripts:{test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},repository:{type:"git",url:"https://github.com/axios/axios.git"},keywords:["xhr","http","ajax","promise","node"],author:"Matt Zabriskie",license:"MIT",bugs:{url:"https://github.com/axios/axios/issues"},homepage:"https://axios-http.com",devDependencies:{coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},browser:{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},jsdelivr:"dist/axios.min.js",unpkg:"dist/axios.min.js",typings:"./index.d.ts",dependencies:{"follow-redirects":"^1.14.0"},bundlesize:[{path:"./dist/axios.min.js",threshold:"5kB"}]},Qt={};["object","boolean","number","function","string","symbol"].forEach(function(e,t){Qt[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});var $r={},os=Dr.version.split(".");function zr(e,t){for(var n=t?t.split("."):os,r=e.split("."),a=0;a<3;a++){if(n[a]>r[a])return!0;if(n[a]<r[a])return!1}return!1}Qt.transitional=function(t,n,r){var a=n&&zr(n);function i(o,s){return"[Axios v"+Dr.version+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return function(o,s,f){if(t===!1)throw new Error(i(s," has been removed in "+n));return a&&!$r[s]&&($r[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,f):!0}};function ss(e,t,n){if(typeof e!="object")throw new TypeError("options must be an object");for(var r=Object.keys(e),a=r.length;a-- >0;){var i=r[a],o=t[i];if(o){var s=e[i],f=s===void 0||o(s,i,e);if(f!==!0)throw new TypeError("option "+i+" must be "+f);continue}if(n!==!0)throw Error("Unknown option "+i)}}var fs={isOlderVersion:zr,assertOptions:ss,validators:Qt},Ur=z,ls=yr,Br=zo,qr=is,Ze=Mr,Hr=fs,me=Hr.validators;function _e(e){this.defaults=e,this.interceptors={request:new Br,response:new Br}}_e.prototype.request=function(t){typeof t=="string"?(t=arguments[1]||{},t.url=arguments[0]):t=t||{},t=Ze(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;n!==void 0&&Hr.assertOptions(n,{silentJSONParsing:me.transitional(me.boolean,"1.0.0"),forcedJSONParsing:me.transitional(me.boolean,"1.0.0"),clarifyTimeoutError:me.transitional(me.boolean,"1.0.0")},!1);var r=[],a=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(t)===!1||(a=a&&m.synchronous,r.unshift(m.fulfilled,m.rejected))});var i=[];this.interceptors.response.forEach(function(m){i.push(m.fulfilled,m.rejected)});var o;if(!a){var s=[qr,void 0];for(Array.prototype.unshift.apply(s,r),s=s.concat(i),o=Promise.resolve(t);s.length;)o=o.then(s.shift(),s.shift());return o}for(var f=t;r.length;){var l=r.shift(),c=r.shift();try{f=l(f)}catch(u){c(u);break}}try{o=qr(f)}catch(u){return Promise.reject(u)}for(;i.length;)o=o.then(i.shift(),i.shift());return o},_e.prototype.getUri=function(t){return t=Ze(this.defaults,t),ls(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},Ur.forEach(["delete","get","head","options"],function(t){_e.prototype[t]=function(n,r){return this.request(Ze(r||{},{method:t,url:n,data:(r||{}).data}))}}),Ur.forEach(["post","put","patch"],function(t){_e.prototype[t]=function(n,r,a){return this.request(Ze(a||{},{method:t,url:n,data:r}))}});var cs=_e,Zt,Yr;function Vr(){if(Yr)return Zt;Yr=1;function e(t){this.message=t}return e.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},e.prototype.__CANCEL__=!0,Zt=e,Zt}var en,Wr;function us(){if(Wr)return en;Wr=1;var e=Vr();function t(n){if(typeof n!="function")throw new TypeError("executor must be a function.");var r;this.promise=new Promise(function(o){r=o});var a=this;n(function(o){a.reason||(a.reason=new e(o),r(a.reason))})}return t.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},t.source=function(){var r,a=new t(function(o){r=o});return{token:a,cancel:r}},en=t,en}var tn,Gr;function ds(){return Gr||(Gr=1,tn=function(t){return function(r){return t.apply(null,r)}}),tn}var nn,Kr;function ms(){return Kr||(Kr=1,nn=function(t){return typeof t=="object"&&t.isAxiosError===!0}),nn}var Xr=z,ps=vr,et=cs,vs=Mr,hs=Gt;function Jr(e){var t=new et(e),n=ps(et.prototype.request,t);return Xr.extend(n,et.prototype,t),Xr.extend(n,t),n}var q=Jr(hs);q.Axios=et,q.create=function(t){return Jr(vs(q.defaults,t))},q.Cancel=Vr(),q.CancelToken=us(),q.isCancel=jr(),q.all=function(t){return Promise.all(t)},q.spread=ds(),q.isAxiosError=ms(),Lt.exports=q,Lt.exports.default=q,function(e){e.exports=Lt.exports}(pr);const Qr=ko(pr.exports).create();var tt,gs=new Uint8Array(16);function bs(){if(!tt&&(tt=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!tt))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return tt(gs)}const ys=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function xs(e){return typeof e=="string"&&ys.test(e)}for(var j=[],rn=0;rn<256;++rn)j.push((rn+256).toString(16).substr(1));function ws(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(j[e[t+0]]+j[e[t+1]]+j[e[t+2]]+j[e[t+3]]+"-"+j[e[t+4]]+j[e[t+5]]+"-"+j[e[t+6]]+j[e[t+7]]+"-"+j[e[t+8]]+j[e[t+9]]+"-"+j[e[t+10]]+j[e[t+11]]+j[e[t+12]]+j[e[t+13]]+j[e[t+14]]+j[e[t+15]]).toLowerCase();if(!xs(n))throw TypeError("Stringified UUID is invalid");return n}function ks(e,t,n){e=e||{};var r=e.random||(e.rng||bs)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(var a=0;a<16;++a)t[n+a]=r[a];return t}return ws(r)}function As(e={}){return{id:e.id||ks(),fhirVersion:e.fhirVersion||"R4",form:e.form||{type:Ke.URL,sources:["/Questionnaire.json"],patient:"/Patient.json"},theme:e.theme||mr,plugins:e.plugins||[]}}async function Es(e){const t={forms:[],patient:void 0},n=e.sources;switch(e.type){case Ke.JSON:{n.forEach(r=>t.forms.push(r)),t.patient=e.patient;break}case Ke.URL:{n.forEach(async r=>{try{const a=await Qr.get(r);t.forms.push(a.data)}catch{throw new Error("Unable to lookup Questionnaire:"+r)}});try{const r=await Qr.get(e.patient);t.patient=r.data}catch{throw new Error("Unable to lookup Patient: "+e.patient)}break}default:throw new Error("Incorrect FormType used in the supplied LaunchConfig. See documentation.")}return t}class Ss{constructor(t){h(this,"_context");h(this,"_engine");h(this,"_plugin");h(this,"_renderer");this._context=new Ce(As(t)),this._engine=new sa(this._context),this._plugin=new fa(this._context,this._engine),this._renderer=new wo(this._context,this._engine)}get id(){return this._context.config.id}async init(){const t=this._context.config,n=this._context.stores.app,r=this._context.stores.form,a=this._context.stores.patient;if(n.state.initialized)return;const i=await Es(t.form);for(const o of i.forms)r.registerForm(o);r.setActiveForm(i.forms[0].url),a.registerPatient(i.patient),n.state.initialized=!0,console.log("AutoRenderer intialized"),console.log("Store Initializer",i),console.log("useAppStore.state",n.state),console.log("useFormStore.state",r.state),console.log("usePatientStore.state",a.state)}mount(t){this._renderer.mount(t)}}D.AutoRenderer=Ss,Object.defineProperties(D,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
