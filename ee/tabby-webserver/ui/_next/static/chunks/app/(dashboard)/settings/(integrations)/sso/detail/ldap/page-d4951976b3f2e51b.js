(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1704],{48850:function(e,t,n){Promise.resolve().then(n.bind(n,61367))},61367:function(e,t,n){"use strict";n.r(t),n.d(t,{LdapCredentialDetail:function(){return v}});var r=n(36164),o=n(3546),u=n(11978),c=n(74630),i=n(25937),a=n(40055),s=n(70410),l=n(6230),f=n(90379),d=n(20255),p=n(31988);let v=()=>{let e=(0,u.useRouter)(),[{data:t,fetching:n}]=(0,a.aM)({query:s.wz}),v=null==t?void 0:t.ldapCredential,b=o.useMemo(()=>{if(v)return(0,i.Z)(v,e=>!(0,c.Z)(e))},[v]);return(0,r.jsx)("div",{children:(0,r.jsxs)(l.Z,{loading:n,fallback:(0,r.jsx)(f.cg,{className:"mt-2"}),children:[(0,r.jsx)(p.w,{value:"ldap",readonly:!0}),(0,r.jsx)(d.u,{defaultValues:b,onSuccess:()=>{e.push("/settings/sso")},className:"mt-6"})]})})}},54491:function(e,t,n){"use strict";function r(e,[t,n]){return Math.min(n,Math.max(t,e))}n.d(t,{u:function(){return r}})},30317:function(e,t,n){"use strict";n.d(t,{fC:function(){return _},z$:function(){return g}});var r=n(65122),o=n(3546),u=n(79869),c=n(47091),i=n(65727),a=n(27250),s=n(81544),l=n(96593),f=n(96497),d=n(72205);let p="Checkbox",[v,b]=(0,c.b)(p),[Z,h]=v(p),m=(0,o.forwardRef)((e,t)=>{let{__scopeCheckbox:n,name:c,checked:s,defaultChecked:l,required:f,disabled:p,value:v="on",onCheckedChange:b,...h}=e,[m,y]=(0,o.useState)(null),_=(0,u.e)(t,e=>y(e)),g=(0,o.useRef)(!1),C=!m||!!m.closest("form"),[O=!1,x]=(0,a.T)({prop:s,defaultProp:l,onChange:b}),j=(0,o.useRef)(O);return(0,o.useEffect)(()=>{let e=null==m?void 0:m.form;if(e){let t=()=>x(j.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[m,x]),(0,o.createElement)(Z,{scope:n,state:O,disabled:p},(0,o.createElement)(d.WV.button,(0,r.Z)({type:"button",role:"checkbox","aria-checked":w(O)?"mixed":O,"aria-required":f,"data-state":E(O),"data-disabled":p?"":void 0,disabled:p,value:v},h,{ref:_,onKeyDown:(0,i.M)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,i.M)(e.onClick,e=>{x(e=>!!w(e)||!e),C&&(g.current=e.isPropagationStopped(),g.current||e.stopPropagation())})})),C&&(0,o.createElement)(k,{control:m,bubbles:!g.current,name:c,value:v,checked:O,required:f,disabled:p,style:{transform:"translateX(-100%)"}}))}),y=(0,o.forwardRef)((e,t)=>{let{__scopeCheckbox:n,forceMount:u,...c}=e,i=h("CheckboxIndicator",n);return(0,o.createElement)(f.z,{present:u||w(i.state)||!0===i.state},(0,o.createElement)(d.WV.span,(0,r.Z)({"data-state":E(i.state),"data-disabled":i.disabled?"":void 0},c,{ref:t,style:{pointerEvents:"none",...e.style}})))}),k=e=>{let{control:t,checked:n,bubbles:u=!0,...c}=e,i=(0,o.useRef)(null),a=(0,s.D)(n),f=(0,l.t)(t);return(0,o.useEffect)(()=>{let e=i.current,t=window.HTMLInputElement.prototype,r=Object.getOwnPropertyDescriptor(t,"checked"),o=r.set;if(a!==n&&o){let t=new Event("click",{bubbles:u});e.indeterminate=w(n),o.call(e,!w(n)&&n),e.dispatchEvent(t)}},[a,n,u]),(0,o.createElement)("input",(0,r.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:!w(n)&&n},c,{tabIndex:-1,ref:i,style:{...e.style,...f,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function w(e){return"indeterminate"===e}function E(e){return w(e)?"indeterminate":e?"checked":"unchecked"}let _=m,g=y},99807:function(e,t,n){"use strict";n.d(t,{T:function(){return c},f:function(){return i}});var r=n(65122),o=n(3546),u=n(72205);let c=(0,o.forwardRef)((e,t)=>(0,o.createElement)(u.WV.span,(0,r.Z)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),i=c},26581:function(e,t,n){"use strict";var r=n(74913),o=n(77725),u=Object.prototype.hasOwnProperty;t.Z=function(e,t,n){var c=e[t];u.call(e,t)&&(0,o.Z)(c,n)&&(void 0!==n||t in e)||(0,r.Z)(e,t,n)}},74913:function(e,t,n){"use strict";var r=n(27015);t.Z=function(e,t,n){"__proto__"==t&&r.Z?(0,r.Z)(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}},94219:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(30586),o=n(26581),u=n(81913),c=n(26329),i=n(84639),a=n(80143),s=function(e,t,n,r){if(!(0,i.Z)(e))return e;t=(0,u.Z)(t,e);for(var s=-1,l=t.length,f=l-1,d=e;null!=d&&++s<l;){var p=(0,a.Z)(t[s]),v=n;if("__proto__"===p||"constructor"===p||"prototype"===p)break;if(s!=f){var b=d[p];void 0===(v=r?r(b,p,d):void 0)&&(v=(0,i.Z)(b)?b:(0,c.Z)(t[s+1])?[]:{})}(0,o.Z)(d,p,v),d=d[p]}return e},l=function(e,t,n){for(var o=-1,c=t.length,i={};++o<c;){var a=t[o],l=(0,r.Z)(e,a);n(l,a)&&s(i,(0,u.Z)(a,e),l)}return i}},27015:function(e,t,n){"use strict";var r=n(47404),o=function(){try{var e=(0,r.Z)(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();t.Z=o},9841:function(e,t,n){"use strict";var r=n(95973),o=n(9111),u=n(82149);t.Z=function(e){return(0,r.Z)(e,u.Z,o.Z)}},8621:function(e,t,n){"use strict";var r=(0,n(34659).Z)(Object.getPrototypeOf,Object);t.Z=r},9111:function(e,t,n){"use strict";var r=n(68085),o=n(8621),u=n(45270),c=n(25407),i=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)(0,r.Z)(t,(0,u.Z)(e)),e=(0,o.Z)(e);return t}:c.Z;t.Z=i},82149:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(30762),o=n(84639),u=n(36586),c=function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t},i=Object.prototype.hasOwnProperty,a=function(e){if(!(0,o.Z)(e))return c(e);var t=(0,u.Z)(e),n=[];for(var r in e)"constructor"==r&&(t||!i.call(e,r))||n.push(r);return n},s=n(20568),l=function(e){return(0,s.Z)(e)?(0,r.Z)(e,!0):a(e)}},25937:function(e,t,n){"use strict";var r=n(64143),o=n(51722),u=n(94219),c=n(9841);t.Z=function(e,t){if(null==e)return{};var n=(0,r.Z)((0,c.Z)(e),function(e){return[e]});return t=(0,o.Z)(t),(0,u.Z)(e,n,function(e,n){return t(e,n[0])})}}},function(e){e.O(0,[8415,7430,55,641,340,4007,2546,1283,3449,2578,8511,240,2287,7070,8961,1889,3707,3301,7288,1565,3240,4656,8040,255,3375,5289,1744],function(){return e(e.s=48850)}),_N_E=e.O()}]);