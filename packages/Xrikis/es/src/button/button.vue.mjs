import { defineComponent as n, computed as s, openBlock as d, createElementBlock as r, normalizeClass as c, unref as f, normalizeStyle as i, renderSlot as y, createTextVNode as m } from "vue";
import "./style/index.css";
const k = /* @__PURE__ */ m(" Button "), b = n({ name: "rz-button" }), g = /* @__PURE__ */ n({
  ...b,
  props: {
    type: { default: "default" },
    size: { default: "middle" },
    onClick: { type: Function, default: () => console.log("click!") },
    danger: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    square: { type: Boolean, default: !1 },
    style: null
  },
  setup(e) {
    const t = e, o = s(() => ({ [`ea-button--${t.type}`]: t.type }));
    return (a, l) => (d(), r("button", {
      class: c(["ea-button", [f(o), e.size, { danger: e.danger }, { square: e.square }]]),
      style: i(e.style),
      onClick: l[0] || (l[0] = //@ts-ignore
      (...u) => e.onClick && e.onClick(...u))
    }, [
      y(a.$slots, "default", {}, () => [
        k
      ])
    ], 6));
  }
});
export {
  g as default
};
