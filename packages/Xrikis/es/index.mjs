import * as o from "./src/index.mjs";
import { Button as f } from "./src/button/index.mjs";
import { NavBar as x } from "./src/navbar/index.mjs";
import { Icon as m } from "./src/icon/index.mjs";
const e = {
  install: (r) => {
    for (const t in o)
      r.use(o[t]);
  }
};
export {
  f as Button,
  m as Icon,
  x as NavBar,
  e as default
};
