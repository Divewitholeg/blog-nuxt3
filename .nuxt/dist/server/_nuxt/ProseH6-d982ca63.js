import { d as useAppConfig, a as __nuxt_component_0, h as __nuxt_component_1, _ as _export_sfc } from "../server.mjs";
import { defineComponent, computed, mergeProps, withCtx, unref, renderSlot, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import "hookable";
import "destr";
import "devalue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProseH6",
  __ssrInlineRender: true,
  props: {
    id: null
  },
  setup(__props) {
    const { prose } = useAppConfig();
    const hasIcon = computed(() => {
      var _a, _b;
      return ((_a = prose == null ? void 0 : prose.h6) == null ? void 0 : _a.icon) && ((_b = prose == null ? void 0 : prose.headings) == null ? void 0 : _b.icon);
    });
    const icon = computed(() => {
      var _a, _b;
      return ((_a = prose == null ? void 0 : prose.h6) == null ? void 0 : _a.icon) || ((_b = prose == null ? void 0 : prose.headings) == null ? void 0 : _b.icon);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<h6${ssrRenderAttrs(mergeProps({ id: __props.id }, _attrs))} data-v-dfc5fb9b>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: `#${__props.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            if (unref(hasIcon)) {
              _push2(ssrRenderComponent(_component_Icon, { name: unref(icon) }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true),
              unref(hasIcon) ? (openBlock(), createBlock(_component_Icon, {
                key: 0,
                name: unref(icon)
              }, null, 8, ["name"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</h6>`);
    };
  }
});
const ProseH6_vue_vue_type_style_index_0_scoped_dfc5fb9b_transformed_true_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/typography/components/global/ProseH6.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProseH6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dfc5fb9b"]]);
export {
  ProseH6 as default
};
//# sourceMappingURL=ProseH6-d982ca63.js.map
