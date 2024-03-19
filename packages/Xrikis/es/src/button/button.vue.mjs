import { defineComponent as l, computed as u, openBlock as r, createElementBlock as d, normalizeClass as p, normalizeStyle as f, renderSlot as i, createTextVNode as y } from "vue";
import "./style/index.css";
const c = l({ name: "rz-button" }), b = /* @__PURE__ */ l({
  ...c,
  props: {
    type: { default: "default" },
    size: { default: "middle" },
    onClick: { type: Function, default: () => console.log("click!") },
    danger: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    square: { type: Boolean, default: !1 },
    style: {}
  },
  setup(n) {
    const t = n, a = u(() => ({ [`ea-button--${t.type}`]: t.type }));
    return (e, o) => (r(), d("button", {
      class: p(["ea-button", [a.value, e.size, { danger: e.danger }, { square: e.square }]]),
      style: f(e.style),
      onClick: o[0] || (o[0] = //@ts-ignore
      (...s) => e.onClick && e.onClick(...s))
    }, [
      i(e.$slots, "default", {}, () => [
        y(" Button ")
      ])
    ], 6));
  }
});
export {
  b as default
};
