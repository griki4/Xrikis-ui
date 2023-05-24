<template>
  <Button>默认按钮</Button>
  <NavBar
    title="标题"
    left-text="左侧标题"
    right-text="右侧标题"
    :left-arrow="true"
    :click-left="handleClick"
  ></NavBar>
  <NavBar :left-arrow="false"></NavBar>
</template>

<script setup lang="ts">
import { Button, NavBar } from "@Xrikis-ui/components"

function handleClick() {
  console.log("我被点击了")
}
</script>
