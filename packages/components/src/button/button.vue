<script lang="ts" setup>
import { computed } from "vue"
import "./style/index.less"
//注意：Vue3.3已经原生支持defineOptions定义组件选项
defineOptions({ name: "rz-button" })

//定义组件接收的参数类型
type ButtonProps = {
  //按钮类型
  type?: "default" | "primary" | "info" | "warning"
  //按钮大小
  size?: "large" | "middle" | "small"
  //点击事件
  onClick?: () => void
  //是否为危险按钮
  danger?: boolean
  //是否加载中
  loading?: boolean
  //是否使用方形边框
  square?: boolean
}
//获取组件参数
const buttonProps = withDefaults(defineProps<ButtonProps>(), {
  type: "default",
  size: "middle",
  onClick: () => console.log("click!"),
  danger: false,
  loading: false,
  square: false
})
//根据参数动态计算出组件的样式
const buttonStyle = computed(() => {
  return { [`ea-button--${buttonProps.type}`]: buttonProps.type }
})
</script>

<template>
  <button
    class="ea-button"
    :class="[buttonStyle, size, { danger: danger }, { square: square }]"
    @click="onClick"
  >
    <slot> Button </slot>
  </button>
</template>
