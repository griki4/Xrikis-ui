<template>
  <Button :square="true" :style="{ width: '100px' }"></Button>
  <NavBar :left-arrow="true" :left-style="{ fontSize: '16px' }"></NavBar>
  <Input
    placeholder="请输入内容"
    :modelValue="tel"
    @update:modelValue="tel = $event"
    password
  />
  <Icon type="photo"></Icon>>
</template>

<script setup lang="ts">
import { Button, NavBar, Input, Icon } from "xrikis"

function handleClick() {
  alert("确定要离开吗？")
}
</script>
