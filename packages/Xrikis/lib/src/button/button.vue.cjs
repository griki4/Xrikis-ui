"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue");require("./style/index.css");const d=e.createTextVNode(" Button "),r=e.defineComponent({name:"rz-button"}),s=e.defineComponent({...r,props:{type:{default:"default"},size:{default:"middle"},onClick:{type:Function,default:()=>console.log("click!")},danger:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},square:{type:Boolean,default:!1}},setup(t){const n=t,l=e.computed(()=>({[`ea-button--${n.type}`]:n.type}));return(u,o)=>(e.openBlock(),e.createElementBlock("button",{class:e.normalizeClass(["ea-button",[e.unref(l),t.size,{danger:t.danger},{square:t.square}]]),onClick:o[0]||(o[0]=(...a)=>t.onClick&&t.onClick(...a))},[e.renderSlot(u.$slots,"default",{},()=>[d])],2))}});exports.default=s;
