import {defineConfig} from "vite"
import vue from "@vitejs/plugin-vue"
import dts from "vite-plugin-dts"
import DefineOptions from "unplugin-vue-define-options/vite"

export default defineConfig({
    build: {
        //输出文件目录
        outDir: "es",
        //压缩
        // minify: false,
        rollupOptions: {
            //忽略打包vue文件
            external: ["vue"],
            input: ["index.ts"],
            output: [
                {
                    //打包格式，利用ESModule自身的TreeShaking支持实现按需加载
                    format: "es",
                    //打包后的文件名
                    entryFileNames: "[name].mjs",
                    //打包目录和组件目录对应
                    preserveModules: true,
                    exports: "named",
                    //配置打包根目录
                    dir: "../Xrikis/es"
                },
                {
                    format: "cjs",
                    entryFileNames: "[name].cjs",
                    preserveModules: true,
                    exports: "named",
                    dir: "../Xrikis/lib"
                }
            ]
        },
        lib: {
            entry: "./index.ts"
        }
    },
    plugins: [
        vue(),
        //打包过程后自动生成类型声明文件
        dts({
            entryRoot: "./src",
            outputDir: ["../Xrikis/es/src", "../Xrikis/lib/src"],
            //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
            tsConfigFilePath: "../../tsconfig.json",
        }),
        DefineOptions()
    ]
})
