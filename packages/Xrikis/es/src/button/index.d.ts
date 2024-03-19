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
}, {}>>;
export default Button;
