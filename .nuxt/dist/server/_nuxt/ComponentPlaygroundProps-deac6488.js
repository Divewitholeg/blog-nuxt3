import __nuxt_component_0 from "./ProseH4-80ffae41.js";
import __nuxt_component_1$1 from "./ProseCodeInline-7ced61c0.js";
import __nuxt_component_2 from "./Badge-e16f021c.js";
import __nuxt_component_3 from "./ProseP-f3b3822f.js";
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useVModel } from "@vueuse/core";
import { _ as _export_sfc } from "../server.mjs";
import "hookable";
import "destr";
import "devalue";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "ohash";
import "cookie-es";
import "nanoid";
import "scule";
import "defu";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "./ContentSlot-2346260f.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ComponentPlaygroundProps",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    componentData: {
      type: Object,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const formData = useVModel(props, "modelValue", emits);
    const componentProps = computed(() => {
      var _a, _b;
      return (_b = (_a = props == null ? void 0 : props.componentData) == null ? void 0 : _a.meta) == null ? void 0 : _b.props;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProseH4 = __nuxt_component_0;
      const _component_ProseCodeInline = __nuxt_component_1$1;
      const _component_Badge = __nuxt_component_2;
      const _component_ProseP = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "component-playground-data-section" }, _attrs))} data-v-acf5a6ce><!--[-->`);
      ssrRenderList(unref(componentProps), (prop) => {
        _push(`<div data-v-acf5a6ce><div${ssrRenderAttr("id", prop.name)} class="prop-title" data-v-acf5a6ce>`);
        _push(ssrRenderComponent(_component_ProseH4, {
          id: prop.name
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(prop.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(prop.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<span data-v-acf5a6ce>`);
        _push(ssrRenderComponent(_component_ProseCodeInline, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(prop.type)}`);
            } else {
              return [
                createTextVNode(toDisplayString(prop.type), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        if (!prop.required) {
          _push(ssrRenderComponent(_component_Badge, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Required `);
              } else {
                return [
                  createTextVNode(" Required ")
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</span></div>`);
        if (prop.description) {
          _push(ssrRenderComponent(_component_ProseP, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(prop.description)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(prop.description), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<input${ssrRenderAttr("value", unref(formData)[prop.name])} data-v-acf5a6ce></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const ComponentPlaygroundProps_vue_vue_type_style_index_0_scoped_acf5a6ce_transformed_true_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-acf5a6ce"]]);
export {
  __nuxt_component_1 as default
};
//# sourceMappingURL=ComponentPlaygroundProps-deac6488.js.map
