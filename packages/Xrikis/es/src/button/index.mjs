import a from "./button.vue.mjs";
const s = (n) => (n.install = (t) => {
  const e = n.name;
  t.component(e, n);
}, n), l = s(a);
export {
  l as Button,
  l as default
};
