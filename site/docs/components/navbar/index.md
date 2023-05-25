# NavBar 导航栏

## 基础使用方法
<rz-navbar></rz-navbar>


::: details 显示代码

```vue
<template>
  <NavBar></NavBar>
</template>

<script setup lang="ts">
import { NavBar } from "xrikis"
</script>
```

:::

## 左侧箭头是否显示
<rz-navbar></rz-navbar>
<br/>
<rz-navbar :left-arrow="false"></rz-navbar>

::: details 显示代码

```vue
<template>
  <NavBar></NavBar>
  <NavBar :left-arrow="false"></NavBar>
</template>

<script setup lang="ts">
import { NavBar } from "xrikis"
</script>
```

:::




## 自定义标题内容
<rz-navbar left-text="左侧按钮" title="导航栏" right-text="右侧按钮"></rz-navbar>

::: details 显示代码

```vue
<template>
  <NavBar left-text="左侧按钮" title="导航栏" right-text="右侧按钮"></NavBar>
</template>

<script setup lang="ts">
import { NavBar } from "xrikis"
</script>
```

:::

## 通过插槽自定义内容

除了通过`props`传值的方式定义导航栏的文字内容，还可以通过插槽的方式自定义导航栏内容。
<rz-navbar>
    <template v-slot:left>
        <span style="color: red">左侧插槽</span>
    </template>>
    <template v-slot:center>
        <span style="color: skyblue">中间插槽</span>
    </template>
    <template v-slot:right>
        <span style="color: gray">右侧插槽</span>
    </template>
</rz-navbar>

::: details 显示代码

```vue
<template>
  <NavBar>
    <template v-slot:left>
      <span style="color: red">左侧插槽</span>
    </template>>
    <template v-slot:center>
      <span style="color: skyblue">中间插槽</span>
    </template>
    <template v-slot:right>
      <span style="color: gray">右侧插槽</span>
    </template>
  </NavBar>
</template>

<script setup lang="ts">
import { NavBar } from "xrikis"
</script>
```

:::

## API

|     属性名     |     描述     |      类型      |  默认值 |
|:-----------:|:----------:|:------------:|:--:|
|    title    |   导航栏标题    |   `string`   | 中间标题 |
|  left-text  |  导航栏左侧标题   |   `string`   |  返回 |
| right-text  |  导航栏右侧标题   |   `string`   |  按钮 |
| click-left  | 点击左侧标题触发事件 | `() => void` |   - |
| click-right | 点击右侧标题触发事件 | `() => void` |   - |
| left-arrow  |  左侧箭头是否显示  |  `boolean`   | `true` |

## Slot

|  插槽名   |     描述      |
|:------:|:-----------:|
|  left  | 左侧插槽（不包含箭头） |
| center |    中间插槽     |
| right  |    右侧插槽     |






