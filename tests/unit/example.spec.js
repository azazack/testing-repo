import {mount} from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("first test", () => {
  it('testing prop' ,() => {
    const wrapper = mount(HelloWorld, {
      props:{msg:"test"}
    });

    const test = wrapper.get("[data-test='test']")
    expect(test.text()).toBe  ("test")
  })
})