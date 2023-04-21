import ContentSlot from "./ContentSlot-2346260f.js";
import { h as __nuxt_component_1, _ as _export_sfc } from "../server.mjs";
import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "devalue";
import "ohash";
import "cookie-es";
import "nanoid";
import "scule";
import "defu";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Callout",
  __ssrInlineRender: true,
  props: {
    /**
     * @values info, success, warning, danger
     */
    type: {
      type: String,
      default: "info",
      validator(value) {
        return ["info", "success", "warning", "danger", "primary"].includes(value);
      }
    },
    modelValue: {
      required: false,
      default: () => ref(false)
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const isOpen = ref(props.modelValue);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentSlot = ContentSlot;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["callout", [__props.type]]
      }, _attrs))} data-v-37e0bf51><span class="preview" data-v-37e0bf51><span class="summary" data-v-37e0bf51>`);
      _push(ssrRenderComponent(_component_ContentSlot, {
        use: _ctx.$slots.summary
      }, null, _parent));
      _push(`</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons-outline:chevron-right",
        class: ["icon", [unref(isOpen) && "rotate"]]
      }, null, _parent));
      _push(`</span><div style="${ssrRenderStyle(unref(isOpen) ? null : { display: "none" })}" class="content" data-v-37e0bf51>`);
      _push(ssrRenderComponent(_component_ContentSlot, {
        use: _ctx.$slots.content
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const Callout_vue_vue_type_style_index_0_scoped_37e0bf51_transformed_true_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/Callout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Callout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-37e0bf51"]]);
export {
  Callout as default
};
//# sourceMappingURL=Callout-cb7c3cc8.js.map
