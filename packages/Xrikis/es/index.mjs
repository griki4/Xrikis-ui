import * as o from "./src/index.mjs";
import { Button as p } from "./src/button/index.mjs";
import { NavBar as a } from "./src/navbar/index.mjs";
import { Input as s } from "./src/input/index.mjs";
import { Icon as c } from "./src/icon/index.mjs";
const e = {
  install: (r) => {
    for (const t in o)
      r.use(o[t]);
  }
};
export {
  p as Button,
  c as Icon,
  s as Input,
  a as NavBar,
  e as default
};
