export declare const Button: import("@Xrikis/utils/dist/lib/defineInstall").SFCWithInstall<import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    size: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    onClick: {
        type: FunctionConstructor;
        required: false;
        default: () => void;
    };
    danger: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    square: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    buttonProps: {
        type: "default" | "primary" | "info" | "warning";
        size: "large" | "middle" | "small";
        onClick: () => void;
        danger: boolean;
        loading: boolean;
        square: boolean;
    };
    buttonStyle: import("vue").ComputedRef<{
        [x: string]: "default" | "primary" | "info" | "warning";
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    size: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    onClick: {
        type: FunctionConstructor;
        required: false;
        default: () => void;
    };
    danger: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    square: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>>, {
    type: string;
    size: string;
    onClick: Function;
    danger: boolean;
    loading: boolean;
    square: boolean;
}>>;
export default Button;
