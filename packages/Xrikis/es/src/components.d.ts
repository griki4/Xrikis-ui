import * as components from "./index"

declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        RzButton: typeof components.Button
        RzNavBar: typeof components.NavBar
        RzIcon: typeof components.Icon
    }
}
export {}
