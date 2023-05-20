import { defineComponent as n, computed as r, openBlock as a, createElementBlock as u, normalizeClass as c, unref as p, toDisplayString as s } from "vue";
import "./style/index.css";
const l = n({ name: "rz-button" }), d = /* @__PURE__ */ n({
  ...l,
  props: {
    type: { default: "primary" },
    content: { default: "主要按钮" }
  },
  setup(t) {
    const e = t, o = r(() => ({ [`ea-button--${e.type}`]: e.type }));
    return (m, f) => (a(), u("button", {
      class: c(["ea-button", p(o)])
    }, s(t.content), 3));
  }
});
export {
  d as default
};
