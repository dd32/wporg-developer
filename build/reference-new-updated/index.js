(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.blocks,r=window.React,o=window.wp.blockEditor,n=window.wp.serverSideRender;var s=e.n(n);const c=JSON.parse('{"N9":"wporg/reference-new-updated"}');(0,t.registerBlockType)(c.N9,{edit:function({name:e,attributes:t,context:n}){const c=(0,o.useBlockProps)(),{postId:d}=n;return(0,r.createElement)("div",{...c},(0,r.createElement)(s(),{block:e,attributes:t,skipBlockSupportAttributes:!0,urlQueryArgs:{post_id:d}}))}})})();