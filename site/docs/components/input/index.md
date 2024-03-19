# Input 输入框

## 基础用法
<rz-input placeholder="请输入内容"></rz-input> &nbsp;
<rz-input placeholder="Enter in"></rz-input>

::: details 显示代码

```vue
<template>
  <Input placeholder="请输入内容"></Input>
  <Input placeholder="Enter in"></Input>
</template>

<script setup lang="ts">
import { Input } from "xrikis"
</script>
```

:::

## 禁用状态
<rz-input disabled placeholder="输入框禁用"></rz-input>

::: details 显示代码

```vue
<template>
  <Input disabled></Input>
</template>

<script setup lang="ts">
import { Input } from "xrikis"
</script>
```

:::

## 密码框

`password`参数可以隐藏输入框的输入内容，在输入密码等场景可以使用。

<rz-input placeholder="请输入密码" password></rz-input>

::: details 显示代码

```vue
<template>
  <Input placeholder="请输入密码" password></Input>
</template>

<script setup lang="ts">
import { Input } from "xrikis"
</script>
```

:::

## 输入框尺寸

输入包含`mini`、`small`和`medium`三种尺寸，默认情况下为`medium`尺寸。

<rz-input placeholder="请输入内容" size="medium"></rz-input>&nbsp;&nbsp;
<rz-input placeholder="请输入内容" size="small"></rz-input>&nbsp;&nbsp;
<rz-input placeholder="请输入内容" size="mini"></rz-input>

::: details 显示代码

```vue
<template>
  <Input placeholder="请输入密码" size="mini"></Input>
  <Input placeholder="请输入密码" size="small"></Input>
  <Input placeholder="请输入密码" size="medium"></Input>
</template>

<script setup lang="ts">
import { Input } from "xrikis"
</script>
```

:::


## API

|   属性名   |     描述     |                  类型                  |    默认值    |
|:-------:|:----------:|:------------------------------------:|:---------:|
|  placeholder   |    输入框占位内容    | `string` | 请输入内容 |
|  disabled   |    是否禁用输入框    |         `boolean`       | `false`  |
|  size   |   输入框尺寸   |              `mini` `small` `medium`               |  `medium`  |
| password  | 变为密码输入框 |              `boolean`               |  `false`  |