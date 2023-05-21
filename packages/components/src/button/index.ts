import _Button from "./button.vue"
import type { App, Plugin } from "vue"
//定义交叉类型
type SFCWithInstall<T> = T & Plugin
//给组件添加Install方法的函数
const defineInstall = <T>(comp: T) => {
  ;(comp as SFCWithInstall<T>).install = (app: App) => {
    //获取组件名
    const name = (comp as any).name
    //全局注册组件
    app.component(name, comp as SFCWithInstall<T>)
  }
  //返回处理后的组件
  return comp as SFCWithInstall<T>
}
//暴露处理后的组件
export const Button = defineInstall(_Button)
export default Button
