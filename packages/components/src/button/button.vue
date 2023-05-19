<script lang="ts" setup>
import {computed} from "vue"
import "./style/index.less"
//注意：Vue3.3已经原生支持defineOptions定义组件选项
defineOptions({name: "rz-button"})

//定义组件接收的参数类型
type ButtonProps = {
  type?: string
}
//获取组件参数
const buttonProps = defineProps<ButtonProps>()
//根据参数动态计算出组件的样式
const buttonStyle = computed(() => {
  return {[`ea-button--${buttonProps.type}`]: buttonProps.type}
})
</script>

<template>
  <button class="ea-button" :class="buttonStyle">主要按钮</button>
</template>

<style scoped>

</style>
