# Icon
利用 iconfont 下载下来的 js，以 symbol 形式引用，会根据当前字体颜色和大小改变 icon 的颜色和大小

## 基本使用
<div style="display: flex">
  <rz-icon></rz-icon>
  <rz-icon type="juejin" href="https://juejin.cn/"></rz-icon>
  <rz-icon type="voice"></rz-icon>
  <rz-icon type="search" :style="{'width': '20px', 'height': '20px', 'fill': 'blue'}"></rz-icon>
  <rz-icon type="delete" :style="{ 'fill': 'red'}"></rz-icon>
</div>


::: details 显示代码

```vue
<template>
  <Icon></Icon>
  <Icon type="juejin" href="https://juejin.cn/"></Icon>
  <Icon type="voice"></Icon>
  <Icon type="search" :style="{ 'fill': 'blue'}"></Icon>
  <Icon type="delete" :style="{ 'fill': 'red'}"></Icon>
</template>

<script setup lang="ts">
import { Icon } from "xrikis"

function handleClick() {
  alert("确定要离开吗？")
}
</script>

```

:::

## 所有可选图标

<div style="display: flex">
    <div v-for="(item) in ['search','close','voice','photo','delete','user','github','juejin','lightOrDark','loading']">
        <rz-icon :type="item" :style="{'margin-left': '20px'}"></rz-icon>&nbsp;
        <rz-button>{{item}}</rz-button>
    </div>
</div>

::: details 显示代码

```vue
<template>
  <div style="display: flex">
    <div v-for="(item) in iconNames">
      <Icon :type="item" :style="{'margin-left': '20px'}"></Icon>&nbsp;
      <Button>{{item}}</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "xrikis"

const iconNames = ['search','close','voice','photo','delete','user','github','juejin','lightOrDark','loading']
</script>

```

:::

## API

|   属性    |    描述     |       类型        |   默认值    |
|:-------:|:---------:|:---------------:|:--------:|
|  type   | 图标类型，必选参数 |   `IconTypes`   | `github` |
| onClick | 点击图标触发事件  |  `() => void`   |    -     |
|  show   |  是否显示图标   |    `boolean`    |  `true`  |
|  href   |   图标链接    |    `string`     |    -     |
|  style  |  组件自定义样式  | `CSSProperties` |    -     |

！注意，使用`style`自定义样式时，必须按照 `:style="{'margin-left': '20px'}"`的方式传递样式，且`color`须使用`fill`来代替。

