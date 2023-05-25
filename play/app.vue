<template>
  <Button square="true"></Button>
  <rz-navbar></rz-navbar>
  <NavBar></NavBar>
</template>

<script setup lang="ts">
import { Button, NavBar } from "xrikis"

function handleClick() {
  console.log("我被点击了")
}
</script>
