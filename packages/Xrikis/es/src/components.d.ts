import * as components from "./index";

declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        RzButton: typeof components.Button;
        RzIcon: typeof components.Icon;
    }
}
export {};
