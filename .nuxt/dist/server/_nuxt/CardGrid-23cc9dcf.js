import ContentSlot from "./ContentSlot-2346260f.js";
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
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
  __name: "CardGrid",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Features"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentSlot = ContentSlot;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "card-grid" }, _attrs))} data-v-71d5d95e>`);
      _push(ssrRenderComponent(_component_ContentSlot, {
        use: _ctx.$slots.root
      }, null, _parent));
      _push(`<h2 class="title" data-v-71d5d95e>`);
      _push(ssrRenderComponent(_component_ContentSlot, {
        use: _ctx.$slots.title,
        unwrap: "p"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h2><div class="layout" data-v-71d5d95e>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></section>`);
    };
  }
});
const CardGrid_vue_vue_type_style_index_0_scoped_71d5d95e_transformed_true_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CardGrid = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-71d5d95e"]]);
export {
  CardGrid as default
};
//# sourceMappingURL=CardGrid-23cc9dcf.js.map
