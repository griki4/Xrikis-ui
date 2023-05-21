import * as components from "./src/index"
export * from "./src/index"
import type { App } from "vue"

export default {
  install: (app: App) => {
    for (const c in components) {
      //调用每个组件的install方法
      app.use(components[c])
    }
  }
}
