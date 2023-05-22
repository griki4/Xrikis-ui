import { describe, expect, it } from "vitest"
import { mount } from "@vue/test-utils"
import button from "../button.vue"

// The component to test
describe("test button", () => {
  //测试插槽功能
  it("should render slot", () => {
    const wrapper = mount(button, {
      slots: {
        default: "Raizex"
      }
    })
    expect(wrapper.text()).toContain("Raizex")
  })

  //测试类型
  const types = ["primary", "default", "info", "warning"]
  it.each(types)("should have class", (type) => {
    const wrapper = mount(button, {
      props: {
        type
      }
    })
    expect(wrapper.classes()).toContain(`ea-button--${type}`)
  })

  //测试danger显示颜色是否正常
  it("should have danger", () => {
    const wrapper = mount(button, {
      props: {
        type: "primary",
        danger: true
      }
    })
    expect(wrapper.classes()).toContain("danger")
  })

  //测试方形边框是否生效
  it("should have square", () => {
    const wrapper = mount(button, {
      props: {
        square: true
      }
    })
    expect(wrapper.classes()).toContain("square")
  })
})
