import * as o from "./src/index.mjs";
import { Button as s } from "./src/button/index.mjs";
import { NavBar as i } from "./src/navbar/index.mjs";
const e = {
  install: (t) => {
    for (const r in o)
      t.use(o[r]);
  }
};
export {
  s as Button,
  i as NavBar,
  e as default
};
