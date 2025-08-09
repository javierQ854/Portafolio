(function(){const D=document.createElement("link").relList;if(D&&D.supports&&D.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function h(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(o){if(o.ep)return;o.ep=!0;const t=h(o);fetch(o.href,t)}})();const oe=()=>`<div class="bg-blue-950 text-white py-3">
        <div class="flex flex-col items-center gap-5 md:flex-row md:justify-between md:px-5 md:items-center">
          <p class="text-center md:text-left">&copy; 2025 Javier Danilo Parra Quiñones. Todos los derechos reservados.
          </p>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-1">
              <iconify-icon icon="mdi:github" width="24" height="24"></iconify-icon>
              <a href="https://github.com/javierQ854" target="_blank" rel="noopener noreferrer"
                class="hover:text-gray-400">GitHub</a>
            </div>
            <div class="flex flex-col items-center gap-1">
              <iconify-icon icon="mdi:linkedin" width="24" height="24"></iconify-icon>
              <a href="https://www.linkedin.com/in/javierdaniloparra/" target="_blank" rel="noopener noreferrer"
                class="hover:text-gray-400">LinkedIn</a>
            </div>

            <div class="flex flex-col items-center gap-1">
              <iconify-icon icon="ic:baseline-email" width="24" height="24"></iconify-icon>
              <a href="mailto:javierdaniloparraquinones@gmail.com" class="hover:text-gray-400">Email</a>
            </div>
          </div>
        </div>
      </div>`,ne=()=>`
  <section class="bg-blue-950 border-none text-white py-5 px-4 lg:flex fixed z-50 w-screen ">
    <div class="container mx-auto flex justify-between">
      <h1 class="text-base md:text-2xl">DESARROLLADOR</h1>
      <iconify-icon id="menu_toggle" class="lg:hidden cursor-pointer" icon="material-symbols:menu" width="24" height="24"></iconify-icon>
    </div>
    <nav id="menu_cabecera" class=" hidden flex flex-col text-center gap-5 pt-4 lg:flex lg:pt-0 lg:flex-row lg:gap-5">
        <a class="hover:underline" href="#hero">Inicio</a>
        <a class="hover:underline" href="#about">Perfil</a>
        <a class="hover:underline" href="#formacion">Formacion</a>
        <a class="hover:underline" href="#experiencia">Experiencia</a>
        <a class="hover:underline" href="#tecnologias">Tecnologías</a>
        <a class="hover:underline" href="#proyectos">Proyectos</a>
      </nav>
  </section>`,ie=()=>`<section class=" bg-gradient-to-b from-blue-950 to-blue-700   border-none scroll-mt-20">
          <div class="w-full flex flex-col justify-center items-center">
            <div class="flex justify-center pt-5">
              <img src="./perfil.jpeg" alt="Foto de perfil Javier Parra"
                class="w-40 sm:w-48 md:w-56 lg:w-64 aspect-square object-cover rounded-full shadow-md" />
            </div>
            <p
              class="text-center text-base m-10 text-white font-bold md:text-xl rounded hover:bg-blue-900 bg-blue-950 max-w-xl px-3 py-2">
              Desarrollador Full Stack</p>
          </div>
        </section>`,re=()=>`<section class="pt-10 md:pt-20 ">
          <div class="container mx-auto p-6 flex flex-col gap-5 max-w-10xl">
            <h2 class="text-xl md:text-3xl font-bold text-blue-950 text-center ">¿Quien soy?</h2>
            <p class="text-base md:text-lg">Desarrollador Full Stack con experiencia en JavaScript, ReactJS, Angular,
              Express, MySQL y Java Spring
              Boot. Construyo soluciones web completas, desde el backend robusto hasta interfaces modernas y
              funcionales.
            </p>
          </div>
        </section>`,ae=()=>`<section class="pt-10 md:pt-20">
          <div class="container mx-auto px-6 flex flex-col gap-5 max-w-10xl">
            <h2 class="text-xl font-bold text-blue-950 text-center md:text-3xl">Formacion</h2>
            <section class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <article class="flex flex-col gap-2 border text-center shadow p-2">
                <h3 class="text-base md:text-xl font-bold ">INGENIERIA DE SISTEMAS</h3>
                <h4 class="text-base font-bold">universidad de cundinamarca</h4>
                <p class="text-blue-950 font-bold">2021 - Actualidad</p>
              </article>
              <article class="flex flex-col gap-2 border text-center shadow p-2">
                <h3 class="text-base md:text-xl font-bold">TECNICO EN SISTEMAS</h3>
                <h4 class="text-base font-bold">Academia nacional de aprendizaje</h4>
                <p class="text-blue-950 font-bold">2015 - 2017</p>
              </article>
            </section>
          </div>
        </section>`,se=()=>`<section class="pt-20 md:pt-32">
          <div class="container mx-auto px-6 flex flex-col gap-5 max-w-10xl">
            <h2 class="text-xl font-bold text-blue-950 text-center md:text-3xl">Experiencia</h2>
            <section class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <article class="flex flex-col gap-2 border text-center shadow p-2">
                <h3 class="text-base md:text-xl font-bold "> CONTROLES EMPRESARIALES</h3>
                <h4 class="text-base font-bold">Desarrollador Front End</h4>
                <p class="text-blue-950 font-bold">2022 - 2025</p>
              </article>
              <article class="flex flex-col gap-2 border text-center shadow p-2">
                <h3 class="text-base md:text-xl font-bold">DAALU</h3>
                <h4 class="text-base font-bold">Desarrollador Full Stack</h4>
                <p class="text-blue-950 font-bold">2021 - 2022</p>
              </article>
            </section>
          </div>
        </section>`,ce=()=>`<section class="pt-20 md:pt-32">
          <div class="container mx-auto px-6 flex flex-col gap-5 max-w-10xl">
            <h2 class="text-xl font-bold text-blue-950 text-center md:text-3xl">Tecnologías</h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
              <div class="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
                <iconify-icon icon="logos:javascript" width="40" height="40"></iconify-icon>
                <span class="text-sm font-medium text-gray-700">JavaScript</span>
              </div>
              <div class="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
                <iconify-icon icon="logos:react" width="40" height="40"></iconify-icon>
                <span class="text-sm font-medium text-gray-700">React</span>
              </div>
              <div class="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
                <iconify-icon icon="logos:angular-icon" width="40" height="40"></iconify-icon>
                <span class="text-sm font-medium text-gray-700">Angular</span>
              </div>
              <div class="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
                <iconify-icon icon="logos:nodejs-icon" width="40" height="40"></iconify-icon>
                <span class="text-sm font-medium text-gray-700">Node.js</span>
              </div>
              <div class="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
                <iconify-icon icon="logos:mysql" width="40" height="40"></iconify-icon>
                <span class="text-sm font-medium text-gray-700">MySQL</span>
              </div>
              <div class="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
                <iconify-icon icon="logos:java" width="40" height="40"></iconify-icon>
                <span class="text-sm font-medium text-gray-700">Java</span>
              </div>
              <div class="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
                <iconify-icon icon="logos:spring-icon" width="40" height="40"></iconify-icon>
                <span class="text-sm font-medium text-gray-700">Spring Boot</span>
              </div>
              <div class="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300">
                <iconify-icon icon="logos:tailwindcss-icon" width="40" height="40"></iconify-icon>
                <span class="text-sm font-medium text-gray-700">Tailwind</span>
              </div>
            </div>
          </div>
        </section> `,le=()=>`<section class="py-20 md:pt-32">
          <div class="container mx-auto px-6 flex flex-col justify-center items-center gap-5 max-w-10xl">
            <h2 class="text-xl font-bold text-blue-950 text-center md:text-3xl">Proyectos</h2>
            <section class="grid grid-cols-1  gap-5">
              <article class="shadow border rounded-md flex flex-col gap-7 bg-white p-5 max-w-sm">
                <section id="section_proyecto flex flex-col gap-4">
                  <h3 class="text-base md:text-xl text-blue-950 font-bold text-center pb-4">Lista de tareas</h3>
                  <p class="text-base md:text-lg pb-4 text-center">App para registrar, listar, actualizar y eliminar
                    tareas.
                    Incluye inicio de sesión y registro de usuarios.</p>
                </section>

                <section id="section_tecnologias" class="flex flex-col gap-4 ">
                  <h4 class="text-base md:text-xl text-blue-950 font-semibold text-center">Tecnologias</h4>
                  <ul class="flex flex-wrap gap-4 justify-center items-center">
                    <li class="flex flex-col  items-center">
                      <iconify-icon icon="logos:react" width="40" height="40"></iconify-icon>
                      <p>React.js</p>
                    </li>
                    <li class="flex flex-col items-center">
                      <iconify-icon icon="logos:tailwindcss-icon" width="40" height="40"></iconify-icon>
                      <p>Tailwind</p>
                    </li>
                    <li class="flex flex-col items-center">
                      <iconify-icon icon="logos:nodejs-icon" width="40" height="40"></iconify-icon>
                      <p>Node.js (Express)</p>
                    </li>
                    <li class="flex flex-col items-center">
                      <iconify-icon icon="logos:mysql" width="40" height="40"></iconify-icon>
                      <p>MySQL</p>
                    </li>
                  </ul>
                </section>
                <section id="section_despliegue" class="flex flex-col gap-4">
                  <h4 class="text-base md:text-xl text-blue-950 text-center font-semibold">Despliegue</h4>
                  <ul class="flex flex-wrap gap-4 justify-center">
                    <li>
                      <iconify-icon icon="simple-icons:githubpages" width="40" height="40"></iconify-icon>
                    </li>
                    <li>
                      <iconify-icon icon="logos:aws" width="40" height="40"></iconify-icon>
                    </li>
                  </ul>
                </section>

                <div class="mb-3">
                  <a class="text-center font-bold block  mx-auto  bg-gradient-to-br from-blue-950 to-blue-400 hover:from-blue-900 hover:to-blue-300  text-white px-3 py-2 rounded"
                    href="https://javierq854.github.io/app-to-do-list/" target="_blank" rel="noopener noreferrer">Ver
                    proyecto</a>
                </div>
              </article>
            </section>
          </div>
        </section>`;function de(T){return T&&T.__esModule&&Object.prototype.hasOwnProperty.call(T,"default")?T.default:T}var X={exports:{}},ue=X.exports,te;function fe(){return te||(te=1,function(T,D){(function(h,a){T.exports=a()})(ue,function(){return function(h){function a(t){if(o[t])return o[t].exports;var c=o[t]={exports:{},id:t,loaded:!1};return h[t].call(c.exports,c,c.exports,a),c.loaded=!0,c.exports}var o={};return a.m=h,a.c=o,a.p="dist/",a(0)}([function(h,a,o){function t(i){return i&&i.__esModule?i:{default:i}}var c=Object.assign||function(i){for(var k=1;k<arguments.length;k++){var A=arguments[k];for(var H in A)Object.prototype.hasOwnProperty.call(A,H)&&(i[H]=A[H])}return i},b=o(1),y=(t(b),o(6)),r=t(y),p=o(7),s=t(p),d=o(8),l=t(d),m=o(9),j=t(m),E=o(10),J=t(E),Y=o(11),G=t(Y),K=o(14),W=t(K),S=[],Q=!1,g={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},_=function(){var i=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(i&&(Q=!0),Q)return S=(0,G.default)(S,g),(0,J.default)(S,g.once),S},I=function(){S=(0,W.default)(),_()},n=function(){S.forEach(function(i,k){i.node.removeAttribute("data-aos"),i.node.removeAttribute("data-aos-easing"),i.node.removeAttribute("data-aos-duration"),i.node.removeAttribute("data-aos-delay")})},e=function(i){return i===!0||i==="mobile"&&j.default.mobile()||i==="phone"&&j.default.phone()||i==="tablet"&&j.default.tablet()||typeof i=="function"&&i()===!0},u=function(i){g=c(g,i),S=(0,W.default)();var k=document.all&&!window.atob;return e(g.disable)||k?n():(g.disableMutationObserver||l.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),g.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",g.easing),document.querySelector("body").setAttribute("data-aos-duration",g.duration),document.querySelector("body").setAttribute("data-aos-delay",g.delay),g.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?_(!0):g.startEvent==="load"?window.addEventListener(g.startEvent,function(){_(!0)}):document.addEventListener(g.startEvent,function(){_(!0)}),window.addEventListener("resize",(0,s.default)(_,g.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(_,g.debounceDelay,!0)),window.addEventListener("scroll",(0,r.default)(function(){(0,J.default)(S,g.once)},g.throttleDelay)),g.disableMutationObserver||l.default.ready("[data-aos]",I),S)};h.exports={init:u,refresh:_,refreshHard:I}},function(h,a){},,,,,function(h,a){(function(o){function t(e,u,i){function k(f){var O=L,R=q;return L=q=void 0,B=f,w=e.apply(R,O)}function A(f){return B=f,v=setTimeout($,u),F?k(f):w}function H(f){var O=f-M,R=f-B,ee=u-O;return P?I(ee,z-R):ee}function C(f){var O=f-M,R=f-B;return M===void 0||O>=u||O<0||P&&R>=z}function $(){var f=n();return C(f)?V(f):void(v=setTimeout($,H(f)))}function V(f){return v=void 0,x&&L?k(f):(L=q=void 0,w)}function Z(){v!==void 0&&clearTimeout(v),B=0,L=M=q=v=void 0}function U(){return v===void 0?w:V(n())}function N(){var f=n(),O=C(f);if(L=arguments,q=this,M=f,O){if(v===void 0)return A(M);if(P)return v=setTimeout($,u),k(M)}return v===void 0&&(v=setTimeout($,u)),w}var L,q,z,w,v,M,B=0,F=!1,P=!1,x=!0;if(typeof e!="function")throw new TypeError(d);return u=p(u)||0,b(i)&&(F=!!i.leading,P="maxWait"in i,z=P?_(p(i.maxWait)||0,u):z,x="trailing"in i?!!i.trailing:x),N.cancel=Z,N.flush=U,N}function c(e,u,i){var k=!0,A=!0;if(typeof e!="function")throw new TypeError(d);return b(i)&&(k="leading"in i?!!i.leading:k,A="trailing"in i?!!i.trailing:A),t(e,u,{leading:k,maxWait:u,trailing:A})}function b(e){var u=typeof e>"u"?"undefined":s(e);return!!e&&(u=="object"||u=="function")}function y(e){return!!e&&(typeof e>"u"?"undefined":s(e))=="object"}function r(e){return(typeof e>"u"?"undefined":s(e))=="symbol"||y(e)&&g.call(e)==m}function p(e){if(typeof e=="number")return e;if(r(e))return l;if(b(e)){var u=typeof e.valueOf=="function"?e.valueOf():e;e=b(u)?u+"":u}if(typeof e!="string")return e===0?e:+e;e=e.replace(j,"");var i=J.test(e);return i||Y.test(e)?G(e.slice(2),i?2:8):E.test(e)?l:+e}var s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d="Expected a function",l=NaN,m="[object Symbol]",j=/^\s+|\s+$/g,E=/^[-+]0x[0-9a-f]+$/i,J=/^0b[01]+$/i,Y=/^0o[0-7]+$/i,G=parseInt,K=(typeof o>"u"?"undefined":s(o))=="object"&&o&&o.Object===Object&&o,W=(typeof self>"u"?"undefined":s(self))=="object"&&self&&self.Object===Object&&self,S=K||W||Function("return this")(),Q=Object.prototype,g=Q.toString,_=Math.max,I=Math.min,n=function(){return S.Date.now()};h.exports=c}).call(a,function(){return this}())},function(h,a){(function(o){function t(n,e,u){function i(x){var f=N,O=L;return N=L=void 0,M=x,z=n.apply(O,f)}function k(x){return M=x,w=setTimeout(C,e),B?i(x):z}function A(x){var f=x-v,O=x-M,R=e-f;return F?_(R,q-O):R}function H(x){var f=x-v,O=x-M;return v===void 0||f>=e||f<0||F&&O>=q}function C(){var x=I();return H(x)?$(x):void(w=setTimeout(C,A(x)))}function $(x){return w=void 0,P&&N?i(x):(N=L=void 0,z)}function V(){w!==void 0&&clearTimeout(w),M=0,N=v=L=w=void 0}function Z(){return w===void 0?z:$(I())}function U(){var x=I(),f=H(x);if(N=arguments,L=this,v=x,f){if(w===void 0)return k(v);if(F)return w=setTimeout(C,e),i(v)}return w===void 0&&(w=setTimeout(C,e)),z}var N,L,q,z,w,v,M=0,B=!1,F=!1,P=!0;if(typeof n!="function")throw new TypeError(s);return e=r(e)||0,c(u)&&(B=!!u.leading,F="maxWait"in u,q=F?g(r(u.maxWait)||0,e):q,P="trailing"in u?!!u.trailing:P),U.cancel=V,U.flush=Z,U}function c(n){var e=typeof n>"u"?"undefined":p(n);return!!n&&(e=="object"||e=="function")}function b(n){return!!n&&(typeof n>"u"?"undefined":p(n))=="object"}function y(n){return(typeof n>"u"?"undefined":p(n))=="symbol"||b(n)&&Q.call(n)==l}function r(n){if(typeof n=="number")return n;if(y(n))return d;if(c(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=c(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=n.replace(m,"");var u=E.test(n);return u||J.test(n)?Y(n.slice(2),u?2:8):j.test(n)?d:+n}var p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},s="Expected a function",d=NaN,l="[object Symbol]",m=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,J=/^0o[0-7]+$/i,Y=parseInt,G=(typeof o>"u"?"undefined":p(o))=="object"&&o&&o.Object===Object&&o,K=(typeof self>"u"?"undefined":p(self))=="object"&&self&&self.Object===Object&&self,W=G||K||Function("return this")(),S=Object.prototype,Q=S.toString,g=Math.max,_=Math.min,I=function(){return W.Date.now()};h.exports=t}).call(a,function(){return this}())},function(h,a){function o(p){var s=void 0,d=void 0;for(s=0;s<p.length;s+=1)if(d=p[s],d.dataset&&d.dataset.aos||d.children&&o(d.children))return!0;return!1}function t(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function c(){return!!t()}function b(p,s){var d=window.document,l=t(),m=new l(y);r=s,m.observe(d.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function y(p){p&&p.forEach(function(s){var d=Array.prototype.slice.call(s.addedNodes),l=Array.prototype.slice.call(s.removedNodes),m=d.concat(l);if(o(m))return r()})}Object.defineProperty(a,"__esModule",{value:!0});var r=function(){};a.default={isSupported:c,ready:b}},function(h,a){function o(d,l){if(!(d instanceof l))throw new TypeError("Cannot call a class as a function")}function t(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(a,"__esModule",{value:!0});var c=function(){function d(l,m){for(var j=0;j<m.length;j++){var E=m[j];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(l,E.key,E)}}return function(l,m,j){return m&&d(l.prototype,m),j&&d(l,j),l}}(),b=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,y=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function d(){o(this,d)}return c(d,[{key:"phone",value:function(){var l=t();return!(!b.test(l)&&!y.test(l.substr(0,4)))}},{key:"mobile",value:function(){var l=t();return!(!r.test(l)&&!p.test(l.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),d}();a.default=new s},function(h,a){Object.defineProperty(a,"__esModule",{value:!0});var o=function(c,b,y){var r=c.node.getAttribute("data-aos-once");b>c.position?c.node.classList.add("aos-animate"):typeof r<"u"&&(r==="false"||!y&&r!=="true")&&c.node.classList.remove("aos-animate")},t=function(c,b){var y=window.pageYOffset,r=window.innerHeight;c.forEach(function(p,s){o(p,r+y,b)})};a.default=t},function(h,a,o){function t(r){return r&&r.__esModule?r:{default:r}}Object.defineProperty(a,"__esModule",{value:!0});var c=o(12),b=t(c),y=function(r,p){return r.forEach(function(s,d){s.node.classList.add("aos-init"),s.position=(0,b.default)(s.node,p.offset)}),r};a.default=y},function(h,a,o){function t(r){return r&&r.__esModule?r:{default:r}}Object.defineProperty(a,"__esModule",{value:!0});var c=o(13),b=t(c),y=function(r,p){var s=0,d=0,l=window.innerHeight,m={offset:r.getAttribute("data-aos-offset"),anchor:r.getAttribute("data-aos-anchor"),anchorPlacement:r.getAttribute("data-aos-anchor-placement")};switch(m.offset&&!isNaN(m.offset)&&(d=parseInt(m.offset)),m.anchor&&document.querySelectorAll(m.anchor)&&(r=document.querySelectorAll(m.anchor)[0]),s=(0,b.default)(r).top,m.anchorPlacement){case"top-bottom":break;case"center-bottom":s+=r.offsetHeight/2;break;case"bottom-bottom":s+=r.offsetHeight;break;case"top-center":s+=l/2;break;case"bottom-center":s+=l/2+r.offsetHeight;break;case"center-center":s+=l/2+r.offsetHeight/2;break;case"top-top":s+=l;break;case"bottom-top":s+=r.offsetHeight+l;break;case"center-top":s+=r.offsetHeight/2+l}return m.anchorPlacement||m.offset||isNaN(p)||(d=p),s+d};a.default=y},function(h,a){Object.defineProperty(a,"__esModule",{value:!0});var o=function(t){for(var c=0,b=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)c+=t.offsetLeft-(t.tagName!="BODY"?t.scrollLeft:0),b+=t.offsetTop-(t.tagName!="BODY"?t.scrollTop:0),t=t.offsetParent;return{top:b,left:c}};a.default=o},function(h,a){Object.defineProperty(a,"__esModule",{value:!0});var o=function(t){return t=t||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(t,function(c){return{node:c}})};a.default=o}])})}(X)),X.exports}var pe=fe();const me=de(pe);me.init({duration:800,once:!1});document.addEventListener("DOMContentLoaded",()=>{document.body.insertAdjacentHTML("afterbegin",ne()),document.getElementById("hero").innerHTML=ie(),document.getElementById("about").innerHTML=re(),document.getElementById("formacion").innerHTML=ae(),document.getElementById("experiencia").innerHTML=se(),document.getElementById("tecnologias").innerHTML=ce(),document.getElementById("proyectos").innerHTML=le(),document.getElementById("footer").innerHTML=oe();const T=document.getElementById("menu_toggle"),D=document.getElementById("menu_cabecera"),h=D.querySelectorAll("a");T.addEventListener("click",()=>{D.classList.toggle("hidden")}),h.forEach(a=>{a.addEventListener("click",()=>{window.innerWidth<=768&&D.classList.add("hidden")})})});
