import { defineComponent as o, computed as d, openBlock as s, createElementBlock as r, normalizeClass as c, unref as f, renderSlot as i, createTextVNode as m } from "vue";
import "./style/index.css";
const y = /* @__PURE__ */ m(" Button "), k = o({ name: "rz-button" }), B = /* @__PURE__ */ o({
  ...k,
  props: {
    type: { default: "default" },
    size: { default: "middle" },
    onClick: { type: Function, default: () => console.log("click!") },
    danger: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    square: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, l = d(() => ({ [`ea-button--${t.type}`]: t.type }));
    return (a, n) => (s(), r("button", {
      class: c(["ea-button", [f(l), e.size, { danger: e.danger }, { square: e.square }]]),
      onClick: n[0] || (n[0] = //@ts-ignore
      (...u) => e.onClick && e.onClick(...u))
    }, [
      i(a.$slots, "default", {}, () => [
        y
      ])
    ], 2));
  }
});
export {
  B as default
};
