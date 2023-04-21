import { defineComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      required: true
    },
    field: {
      type: Object,
      required: true,
      validator: (value) => {
        if (!value.name) {
          return false;
        }
        return true;
      }
    }
  },
  emits: ["update:modelValue"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-24772345><label${ssrRenderAttr("for", __props.field.name)} data-v-24772345>${ssrInterpolate(__props.field.label)}</label>`);
      if (__props.field.type !== "textarea") {
        _push(`<input${ssrRenderAttr("id", __props.field.name)}${ssrRenderAttr("name", __props.field.name)}${ssrRenderAttr("value", __props.modelValue)}${ssrRenderAttr("type", __props.field.type ? __props.field.type : "text")}${ssrRenderAttr("placeholder", __props.field.placeholder ? __props.field.placeholder : "")} data-v-24772345>`);
      } else {
        _push(`<textarea${ssrRenderAttr("id", __props.field.name)}${ssrRenderAttr("name", __props.field.name)}${ssrRenderAttr("type", __props.field.type ? __props.field.type : "text")}${ssrRenderAttr("placeholder", __props.field.placeholder ? __props.field.placeholder : "")} data-v-24772345>${ssrInterpolate(__props.modelValue)}</textarea>`);
      }
      _push(`</div>`);
    };
  }
});
const Input_vue_vue_type_style_index_0_scoped_24772345_transformed_true_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/alpine/components/data-entry/Input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-24772345"]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=Input-295d755c.js.map
