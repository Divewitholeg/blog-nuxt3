import { h as __nuxt_component_1, _ as _export_sfc } from "../server.mjs";
import ContentSlot from "./ContentSlot-2346260f.js";
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
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
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      const _component_ContentSlot = ContentSlot;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-ba21ed10>`);
      if (__props.icon) {
        _push(ssrRenderComponent(_component_Icon, { name: __props.icon }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<div data-v-ba21ed10><h3 class="title" data-v-ba21ed10>`);
      _push(ssrRenderComponent(_component_ContentSlot, {
        use: _ctx.$slots.title,
        unwrap: "p"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Card title `);
          } else {
            return [
              createTextVNode(" Card title ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h3><p class="description" data-v-ba21ed10>`);
      _push(ssrRenderComponent(_component_ContentSlot, {
        use: _ctx.$slots.description,
        unwrap: "p"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Card description `);
          } else {
            return [
              createTextVNode(" Card description ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div></div>`);
    };
  }
});
const Card_vue_vue_type_style_index_0_scoped_ba21ed10_transformed_true_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/landing/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Card = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ba21ed10"]]);
export {
  Card as default
};
//# sourceMappingURL=Card-d82cb6b2.js.map
