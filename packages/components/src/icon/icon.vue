<script setup lang="ts">
import { defineProps } from "vue"
import type { CSSProperties } from "vue"
import "./script/iconfont.js"
import "./style/index.less"

defineOptions({
  name: "rz-icon"
})

export type IconTypes =
  | "search"
  | "close"
  | "voice"
  | "photo"
  | "delete"
  | "user"
  | "github"
  | "juejin"
  | "lightOrDark"
  | "loading"

export type IconProps = {
  //图标类型
  type: IconTypes
  //点击图标的事件
  onClick?: () => void
  //是否显示图标
  show?: boolean
  //设置图标链接
  href?: string
  //自定义的组件样式
  style: CSSProperties
}

const iconProps = withDefaults(defineProps<IconProps>(), {
  type: "github",
  onClick: () => console.log("点击图标"),
  show: true,
  href: "#"
})
</script>

<template>
  <a :href="href" class="cursor-pointer">
    <svg
      class="icon"
      :style="style"
      aria-hidden="true"
      @click="onClick"
      v-if="show"
    >
      <use :xlink:href="`#icon-${type}`"></use>
    </svg>
  </a>
</template>
