import { describe, expect, it } from "vitest"
import { mount } from "@vue/test-utils"
import NavBar from "../navber.vue"

describe("NavBar", () => {
  //测试默认值功能
  it("renders the component with default props correctly", () => {
    const wrapper = mount(NavBar)

    expect(wrapper.find(".left").text()).toBe("返回")
    expect(wrapper.find(".center").text()).toBe("中间标题")
    expect(wrapper.find(".right").text()).toBe("按钮")
    expect(wrapper.find(".back").exists()).toBe(false)
  })

  //测试props传值是否正常
  it("renders the component with custom props correctly", () => {
    const wrapper = mount(NavBar, {
      props: {
        title: "Custom Title",
        leftText: "Custom Left",
        rightText: "Custom Right",
        leftArrow: true
      }
    })

    expect(wrapper.find(".left").text()).toBe("Custom Left")
    expect(wrapper.find(".center").text()).toBe("Custom Title")
    expect(wrapper.find(".right").text()).toBe("Custom Right")
    expect(wrapper.find(".back").exists()).toBe(true)
  })

  //测试三个插槽的功能是否正常
  it("renders custom content in left slot correctly", () => {
    const wrapper = mount(NavBar, {
      slots: {
        left: "Custom Left Slot"
      }
    })

    expect(wrapper.text()).toContain("Custom Left Slot")
  })

  it("renders custom content in center slot correctly", () => {
    const wrapper = mount(NavBar, {
      slots: {
        center: "<span>Custom Center Slot</span>"
      }
    })

    expect(wrapper.find(".center").text()).toBe("Custom Center Slot")
  })

  it("renders custom content in right slot correctly", () => {
    const wrapper = mount(NavBar, {
      slots: {
        right: "<span>Custom Right Slot</span>"
      }
    })

    expect(wrapper.find(".right").text()).toBe("Custom Right Slot")
  })
})
