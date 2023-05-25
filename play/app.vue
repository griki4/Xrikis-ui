<template>
  <Button :square="true" :style="{ width: '100px' }"></Button>
  <rz-button :style="{ width: '100px' }"></rz-button>
  <NavBar :left-arrow="true" :left-style="{ fontSize: '30px' }"></NavBar>
  <Icon
    type="juejin"
    :style="{ width: '25px', height: '25px', fill: 'blue' }"
    href="https://github.com/"
    :onClick="handleClick"
  ></Icon>
  <Icon type="github"></Icon>
</template>

<script setup lang="ts">
import { Button, NavBar, Icon } from "xrikis"

function handleClick() {
  alert("确定要离开吗？")
}
</script>
