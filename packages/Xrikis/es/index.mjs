import * as o from "./src/index.mjs";
import { Button as f } from "./src/button/index.mjs";
import { NavBar as s } from "./src/navbar/index.mjs";
import { Input as i } from "./src/input/index.mjs";
const e = {
  install: (t) => {
    for (const r in o)
      t.use(o[r]);
  }
};
export {
  f as Button,
  i as Input,
  s as NavBar,
  e as default
};
