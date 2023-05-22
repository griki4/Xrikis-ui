/// <reference types="vitest" />
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import dts from "vite-plugin-dts"
import DefineOptions from "unplugin-vue-define-options/vite"

export default defineConfig({
  test: {
    environment: "happy-dom"
  },
  build: {
    //输出文件目录，会被rollup的配置选项覆盖
    outDir: "es",
    //压缩
    // minify: false,
    rollupOptions: {
      //忽略打包vue文件
      external: ["vue", /\.less/],
      input: ["index.ts"],
      output: [
        {
          //打包格式
          format: "es",
          //打包后的文件名
          entryFileNames: "[name].mjs",
          //打包目录和组件目录对应
          preserveModules: true,
          //指定导出方式为命名导出而非默认导出，即导入组件时需要按照指定的组件名称进行导入
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
    dts({
      entryRoot: "./src",
      outputDir: ["../Xrikis/es/src", "../Xrikis/lib/src"],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: "../../tsconfig.json"
    }),
    DefineOptions(),
    //解决打包后文件依旧引入less文件的问题
    {
      name: "style",
      generateBundle(config, bundle) {
        //这里可以获取打包后的文件目录以及代码code
        const keys = Object.keys(bundle)

        for (const key of keys) {
          const bundler: any = bundle[key as any]
          //rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件
          this.emitFile({
            type: "asset",
            fileName: key, //文件名名不变
            source: bundler.code.replace(/\.less/g, ".css")
          })
        }
      }
    }
  ]
})
