function g(){}const yt=t=>t;function X(t,n){for(const e in n)t[e]=n[e];return t}function O(t){return t()}function D(){return Object.create(null)}function x(t){t.forEach(O)}function q(t){return typeof t=="function"}function gt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function Y(t){return Object.keys(t).length===0}function Z(t,...n){if(t==null)return g;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function xt(t,n,e){t.$$.on_destroy.push(Z(n,e))}function bt(t,n,e,i){if(t){const r=B(t,n,e,i);return t[0](r)}}function B(t,n,e,i){return t[1]&&i?X(e.ctx.slice(),t[1](i(n))):e.ctx}function $t(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(n.dirty.length,r.length);for(let o=0;o<s;o+=1)l[o]=n.dirty[o]|r[o];return l}return n.dirty|r}return n.dirty}function wt(t,n,e,i,r,l){if(r){const s=B(n,e,i,l);t.p(s,r)}}function vt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function Et(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function kt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function At(t,n,e){return t.set(e),n}function Tt(t){return t&&q(t.destroy)?t.destroy:g}const z=typeof window!="undefined";let Nt=z?()=>window.performance.now():()=>Date.now(),F=z?t=>requestAnimationFrame(t):g;const d=new Set;function G(t){d.forEach(n=>{n.c(t)||(d.delete(n),n.f())}),d.size!==0&&F(G)}function St(t){let n;return d.size===0&&F(G),{promise:new Promise(e=>{d.add(n={c:t,f:e})}),abort(){d.delete(n)}}}let k=!1;function tt(){k=!0}function nt(){k=!1}function et(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function it(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<n.length;u++){const f=n[u];f.claim_order!==void 0&&c.push(f)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const u=n[c].claim_order,f=(r>0&&n[e[r]].claim_order<=u?r+1:et(1,r,b=>n[e[b]].claim_order,u))-1;i[c]=e[f]+1;const a=f+1;e[a]=c,r=Math.max(a,r)}const l=[],s=[];let o=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(l.push(n[c-1]);o>=c;o--)s.push(n[o]);o--}for(;o>=0;o--)s.push(n[o]);l.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<l.length&&s[c].claim_order>=l[u].claim_order;)u++;const f=u<l.length?l[u]:null;t.insertBefore(s[c],f)}}function rt(t,n){if(k){for(it(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function st(t,n,e){t.insertBefore(n,e||null)}function ct(t,n,e){k&&!e?rt(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function E(t){t.parentNode.removeChild(t)}function jt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function I(t){return document.createElement(t)}function R(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function Ct(){return j(" ")}function Mt(){return j("")}function Dt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Ht(t){return function(n){return n.preventDefault(),t.call(this,n)}}function ot(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Lt(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set?t[i]=n[i]:ot(t,i,n[i])}function lt(t){return Array.from(t.childNodes)}function W(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function J(t,n,e,i,r=!1){W(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(n(o)){const c=e(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(n(o)){const c=e(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function K(t,n,e,i){return J(t,r=>r.nodeName===n,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];e[o.name]||l.push(o.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(n))}function Pt(t,n,e){return K(t,n,e,I)}function Ot(t,n,e){return K(t,n,e,R)}function ut(t,n){return J(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>j(n),!0)}function qt(t){return ut(t," ")}function H(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function Bt(t,n){const e=H(t,"HTML_TAG_START",0),i=H(t,"HTML_TAG_END",e);if(e===i)return new L(void 0,n);W(t);const r=t.splice(e,i-e+1);E(r[0]),E(r[r.length-1]);const l=r.slice(1,r.length-1);for(const s of l)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new L(l,n)}function zt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Ft(t,n){t.value=n==null?"":n}function Gt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function It(t,n,e){t.classList[e?"add":"remove"](n)}function at(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}function Rt(t,n=document.body){return Array.from(n.querySelectorAll(t))}class ft{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=R(e.nodeName):this.e=I(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)st(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(E)}}class L extends ft{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)ct(this.t,this.n[e],n)}}let y;function p(t){y=t}function h(){if(!y)throw new Error("Function called outside component initialization");return y}function Wt(t){h().$$.on_mount.push(t)}function Jt(t){h().$$.after_update.push(t)}function Kt(t){h().$$.on_destroy.push(t)}function Qt(){const t=h();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const l=at(n,e,{cancelable:i});return r.slice().forEach(s=>{s.call(t,l)}),!l.defaultPrevented}return!0}}function Ut(t,n){return h().$$.context.set(t,n),n}function Vt(t){return h().$$.context.get(t)}function Xt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const m=[],P=[],w=[],T=[],Q=Promise.resolve();let N=!1;function U(){N||(N=!0,Q.then(V))}function Yt(){return U(),Q}function S(t){w.push(t)}function Zt(t){T.push(t)}const A=new Set;let $=0;function V(){const t=y;do{for(;$<m.length;){const n=m[$];$++,p(n),_t(n.$$)}for(p(null),m.length=0,$=0;P.length;)P.pop()();for(let n=0;n<w.length;n+=1){const e=w[n];A.has(e)||(A.add(e),e())}w.length=0}while(m.length);for(;T.length;)T.pop()();N=!1,A.clear(),p(t)}function _t(t){if(t.fragment!==null){t.update(),x(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const v=new Set;let _;function tn(){_={r:0,c:[],p:_}}function nn(){_.r||x(_.c),_=_.p}function dt(t,n){t&&t.i&&(v.delete(t),t.i(n))}function en(t,n,e,i){if(t&&t.o){if(v.has(t))return;v.add(t),_.c.push(()=>{v.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function rn(t,n){const e={},i={},r={$$scope:1};let l=t.length;for(;l--;){const s=t[l],o=n[l];if(o){for(const c in s)c in o||(i[c]=1);for(const c in o)r[c]||(e[c]=o[c],r[c]=1);t[l]=o}else for(const c in s)r[c]=1}for(const s in i)s in e||(e[s]=void 0);return e}function sn(t){return typeof t=="object"&&t!==null?t:{}}function cn(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function on(t){t&&t.c()}function ln(t,n){t&&t.l(n)}function ht(t,n,e,i){const{fragment:r,on_mount:l,on_destroy:s,after_update:o}=t.$$;r&&r.m(n,e),i||S(()=>{const c=l.map(O).filter(q);s?s.push(...c):x(c),t.$$.on_mount=[]}),o.forEach(S)}function mt(t,n){const e=t.$$;e.fragment!==null&&(x(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function pt(t,n){t.$$.dirty[0]===-1&&(m.push(t),U(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function un(t,n,e,i,r,l,s,o=[-1]){const c=y;p(t);const u=t.$$={fragment:null,ctx:null,props:l,update:g,not_equal:r,bound:D(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:D(),dirty:o,skip_bound:!1,root:n.target||c.$$.root};s&&s(u.root);let f=!1;if(u.ctx=e?e(t,n.props||{},(a,b,...C)=>{const M=C.length?C[0]:b;return u.ctx&&r(u.ctx[a],u.ctx[a]=M)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](M),f&&pt(t,a)),b}):[],u.update(),f=!0,x(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){tt();const a=lt(n.target);u.fragment&&u.fragment.l(a),a.forEach(E)}else u.fragment&&u.fragment.c();n.intro&&dt(t.$$.fragment),ht(t,n.target,n.anchor,n.customElement),nt(),V()}p(c)}class an{$destroy(){mt(this,1),this.$destroy=g}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!Y(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Dt as $,sn as A,mt as B,X as C,Yt as D,g as E,bt as F,Rt as G,L as H,Bt as I,rt as J,wt as K,vt as L,$t as M,Lt as N,It as O,kt as P,Qt as Q,Et as R,an as S,Tt as T,jt as U,Nt as V,St as W,yt as X,R as Y,Ot as Z,xt as _,lt as a,x as a0,Z as a1,Xt as a2,P as a3,q as a4,Ht as a5,cn as a6,Zt as a7,Ft as a8,At as a9,Kt as aa,Vt as ab,ot as b,Pt as c,E as d,I as e,Gt as f,ct as g,ut as h,un as i,zt as j,Ct as k,Mt as l,qt as m,tn as n,en as o,nn as p,dt as q,Ut as r,gt as s,j as t,Jt as u,Wt as v,on as w,ln as x,ht as y,rn as z};
