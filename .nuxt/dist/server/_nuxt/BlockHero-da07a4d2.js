import ContentSlot from "./ContentSlot-2346260f.js";
import __nuxt_component_1 from "./ButtonLink-83e1bffe.js";
import __nuxt_component_2 from "./Terminal-e39200c4.js";
import __nuxt_component_3 from "./VideoPlayer-b51fe4e7.js";
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
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
import "@vueuse/core";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BlockHero",
  __ssrInlineRender: true,
  props: {
    cta: {
      type: Array,
      required: false,
      default: () => []
    },
    secondary: {
      type: Array,
      required: false,
      default: () => []
    },
    video: {
      type: String,
      required: false,
      default: ""
    },
    snippet: {
      type: [Array, String],
      required: false,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentSlot = ContentSlot;
      const _component_ButtonLink = __nuxt_component_1;
      const _component_Terminal = __nuxt_component_2;
      const _component_VideoPlayer = __nuxt_component_3;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "block-hero" }, _attrs))} data-v-b95c8d5e><div class="layout" data-v-b95c8d5e><div class="content" data-v-b95c8d5e>`);
      if (_ctx.$slots.announce) {
        _push(`<p class="announce" data-v-b95c8d5e>`);
        _push(ssrRenderComponent(_component_ContentSlot, {
          use: _ctx.$slots.announce,
          unwrap: "p"
        }, null, _parent));
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="title" data-v-b95c8d5e>`);
      _push(ssrRenderComponent(_component_ContentSlot, {
        use: _ctx.$slots.title,
        unwrap: "p"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Hero Title `);
          } else {
            return [
              createTextVNode(" Hero Title ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h1><p class="description" data-v-b95c8d5e>`);
      _push(ssrRenderComponent(_component_ContentSlot, {
        use: _ctx.$slots.description,
        unwrap: "p"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Hero default description. `);
          } else {
            return [
              createTextVNode(" Hero default description. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p>`);
      if (_ctx.$slots.extra) {
        _push(`<div class="extra" data-v-b95c8d5e>`);
        _push(ssrRenderComponent(_component_ContentSlot, {
          use: _ctx.$slots.extra,
          unwrap: "p"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="actions" data-v-b95c8d5e>`);
      if (_ctx.$slots.actions) {
        _push(ssrRenderComponent(_component_ContentSlot, {
          use: _ctx.$slots.actions,
          unwrap: "p"
        }, null, _parent));
      } else {
        _push(`<!--[-->`);
        if (__props.cta) {
          _push(ssrRenderComponent(_component_ButtonLink, {
            class: "cta",
            bold: "",
            size: "medium",
            href: __props.cta[1]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(__props.cta[0])}`);
              } else {
                return [
                  createTextVNode(toDisplayString(__props.cta[0]), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (__props.secondary) {
          _push(`<a${ssrRenderAttr("href", __props.secondary[1])} class="secondary" data-v-b95c8d5e>${ssrInterpolate(__props.secondary[0])}</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      }
      _push(`</div></div><div class="support" data-v-b95c8d5e>`);
      ssrRenderSlot(_ctx.$slots, "support", {}, () => {
        if (__props.snippet) {
          _push(ssrRenderComponent(_component_Terminal, { content: __props.snippet }, null, _parent));
        } else if (__props.video) {
          _push(ssrRenderComponent(_component_VideoPlayer, { src: __props.video }, null, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`</div></div></section>`);
    };
  }
});
const BlockHero_vue_vue_type_style_index_0_scoped_b95c8d5e_transformed_true_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BlockHero = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b95c8d5e"]]);
export {
  BlockHero as default
};
//# sourceMappingURL=BlockHero-da07a4d2.js.map
