<script lang="ts" setup>
import { computed, ref } from "vue"
import "./style/index.less"

defineOptions({name: 'rz-input'})

type InputProps = {
    placeholder: string
    modelValue?: string | number
    disabled?: boolean
    size: 'mini' | 'small' | 'medium'
    password: boolean
}

type InputEmits = {
  (e: "update:modelValue", value: string): void
}

const inputProps = withDefaults(defineProps<InputProps>(), {
    placeholder: '请输入内容',
    modelValue: "",
    disabled: false,
    size: 'medium',
    password: false
})

const styleClass = computed(() => {
  return {
    "is-disabled": inputProps.disabled,
    [`k-input--${inputProps.size}`]: inputProps.size,
  }
})


const inputEmits = defineEmits<InputEmits>();

const changeInputVal = (event: Event) => {
  inputEmits("update:modelValue", (event.target as HTMLInputElement).value)
}

const ipt =ref()
Promise.resolve().then(() => {
  if (inputProps.password) {
    ipt.value.type = "password"
  }
});
</script>


<template>
    <div class="k-input" :class="styleClass">
        <input
            ref="ipt"
            class="k-input__inner"
            :placeholder="inputProps.placeholder"
            :value="inputProps.modelValue"
            @input="changeInputVal"
            :disabled="inputProps.disabled"
        />
  </div>
</template>
  