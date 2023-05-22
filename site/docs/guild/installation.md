# 安装

- 安装包管理工具pnpm
```shell
npm i pnpm -g
```

- 安装组件库
```shell
pnpm install xrikis
```

- 安装依赖
```shell
cd xrikis
pnpm i
```

# 在Vue项目中使用组件库

## 全局引入

在项目的入口文件`main.ts`当中写入下列代码
```ts
import { createApp } from "vue"
import App from "./app.vue"
import rzex from "@Xrikis-ui/components"

const app = createApp(App)
app.use(rzex)

app.mount("#app")
```

在`app.vue`中使用组件

```vue
<template>
  <div>
    <rz-button>默认按钮</rz-button>
  </div>
</template>

<script setup lang="ts">
</script>
```

## 单独引入

在需要使用组件库的组件中，可参照以下示例代码
```vue
<template>
  <div>
    <Button>默认按钮</Button>
  </div>
</template>

<script setup lang="ts">
import {Button} from "@Xrikis-ui/components"
</script>
```
    
