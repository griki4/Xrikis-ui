import type { CSSProperties } from "vue";
export declare type ButtonProps = {
    type?: "default" | "primary" | "info" | "warning";
    size?: "large" | "middle" | "small";
    onClick?: () => void;
    danger?: boolean;
    loading?: boolean;
    square?: boolean;
    style: CSSProperties;
};
declare const _sfc_main: import("vue").DefineComponent<{
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
    style: {
        type: null;
        required: true;
    };
}, {
    buttonProps: any;
    buttonStyle: import("vue").ComputedRef<{
        [x: string]: any;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
    style: {
        type: null;
        required: true;
    };
}>>, {
    type: string;
    size: string;
    onClick: Function;
    danger: boolean;
    loading: boolean;
    square: boolean;
}, {}>;
export default _sfc_main;
