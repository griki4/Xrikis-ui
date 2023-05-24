# Button 按钮

## 按钮类型
<rz-button>默认按钮</rz-button>&nbsp;&nbsp;&nbsp;&nbsp;
<rz-button type="primary">主要按钮</rz-button>&nbsp;&nbsp;&nbsp;&nbsp;
<rz-button type="info">信息按钮</rz-button>&nbsp;&nbsp;&nbsp;&nbsp;
<rz-button type="warning">警告按钮</rz-button>&nbsp;&nbsp;&nbsp;&nbsp;

::: details 显示代码

```vue
<template>
  <Button>默认按钮</Button>
  <Button type="primary">主要按钮</Button>
  <Button type="info">信息按钮</Button>
  <Button type="warning">警告按钮</Button>
</template>

<script setup lang="ts">
import { Button } from "xrikis"
</script>
```

:::

## 按钮尺寸

支持三种尺寸大小的按钮。
<rz-button type="primary" size="large"></rz-button>&nbsp;&nbsp;&nbsp;&nbsp;
<rz-button type="primary" size="middle"></rz-button>&nbsp;&nbsp;&nbsp;&nbsp;
<rz-button type="primary" size="small"></rz-button>&nbsp;&nbsp;&nbsp;&nbsp;

::: details 显示代码

```vue
<template>
  <Button type="primary" size="large">Button</Button>
  <Button type="primary" size="middle">Button</Button>
  <Button type="primary" size="small">Button</Button>
</template>

<script setup lang="ts">
import { Button } from "xrikis"
</script>
```

:::

## 按钮边框

默认使用圆角边框的按钮，可通过square参数改为使用方形边框。

<rz-button type="primary"></rz-button>&nbsp;&nbsp;&nbsp;&nbsp;
<rz-button type="primary" square="true"></rz-button>&nbsp;&nbsp;&nbsp;&nbsp;

::: details 显示代码

```vue
<template>
  <Button type="primary">Button</Button>
  <Button type="primary" square="true">Button</Button>
</template>

<script setup lang="ts">
import { Button } from "xrikis"
</script>
```

:::

## 危险按钮

danger参数可以指定按钮为危险按钮。此时按钮所有位置都会呈现醒目的红色，类型参数定义的样式会失效。

<rz-button danger="true"></rz-button>&nbsp;&nbsp;&nbsp;&nbsp;
<rz-button type="primary" danger="true"></rz-button>&nbsp;&nbsp;&nbsp;&nbsp;
<rz-button type="primary" square="true" danger="true"></rz-button>&nbsp;&nbsp;&nbsp;&nbsp;

::: details 显示代码

```vue
<template>
  <Button danger="true"></Button>
  <Button type="primary" danger="true"></Button>
  <Button type="primary" square="true" danger="true"></Button>
</template>

<script setup lang="ts">
import { Button } from "xrikis"
</script>
```

:::


