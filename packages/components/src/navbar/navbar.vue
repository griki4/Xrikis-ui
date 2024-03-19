<script setup lang="ts">
import type { CSSProperties } from "vue"
import { defineOptions } from "vue";
import "./style/index.less"

defineOptions({
  name: "rz-navbar"
})

export type NavBarProps = {
  //中间标题
  title?: string
  //左侧文字
  leftText?: string
  //右侧文字
  rightText?: string
  //点击左侧按钮标题触发的事件
  clickLeft?: () => void
  //点击右侧按钮触发事件
  clickRight?: () => void
  //是否显示左侧箭头
  leftArrow: boolean
  //组件自定义样式
  leftStyle: CSSProperties
  centerStyle: CSSProperties
  rightStyle: CSSProperties
}

const navbarProps = withDefaults(defineProps<NavBarProps>(), {
  title: "中间标题",
  leftText: "返回",
  rightText: "按钮",
  clickLeft: () => console.log("左侧按钮被点击了！"),
  clickRight: () => console.log("右侧按钮被点击了！"),
  leftArrow: true
})
</script>

<template>
  <div class="nav-bar">
    <div class="left" @click="clickLeft" :style="leftStyle">
      <img src="./assets/back.svg" v-if="leftArrow" alt="" class="back" />
      <slot name="left">
        {{ leftText }}
      </slot>
    </div>

    <div class="center" :style="centerStyle">
      <slot name="center">
        {{ title }}
      </slot>
    </div>

    <div class="right" @click="clickRight" :style="rightStyle">
      <slot name="right">
        {{ rightText }}
      </slot>
    </div>
  </div>
</template>
