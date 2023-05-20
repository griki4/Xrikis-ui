declare const _sfc_main: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    content: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}, {
    buttonProps: {
        type: "primary" | "warning";
        content: string;
    };
    buttonStyle: import("vue").ComputedRef<{
        [x: string]: "primary" | "warning";
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    content: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>>, {
    type: string;
    content: string;
}>;
export default _sfc_main;
