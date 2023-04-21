import ContentSlot from "./ContentSlot-2346260f.js";
import { b as _sfc_main$1, _ as _export_sfc } from "../server.mjs";
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
  __name: "Hero",
  __ssrInlineRender: true,
  props: {
    image: {
      type: String,
      default: null
    },
    imageAlt: {
      type: String,
      default: "Hero Image"
    },
    imagePosition: {
      type: String,
      default: "right"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentSlot = ContentSlot;
      const _component_NuxtImg = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))} data-v-6cd63235><div class="layout" data-v-6cd63235><div class="content" data-v-6cd63235><div class="title" data-v-6cd63235>`);
      _push(ssrRenderComponent(_component_ContentSlot, {
        use: _ctx.$slots.title,
        unwrap: "p"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Hero title `);
          } else {
            return [
              createTextVNode(" Hero title ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="description" data-v-6cd63235>`);
      _push(ssrRenderComponent(_component_ContentSlot, {
        use: _ctx.$slots.description,
        unwrap: "p"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Hero description `);
          } else {
            return [
              createTextVNode(" Hero description ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (__props.image) {
        _push(ssrRenderComponent(_component_NuxtImg, {
          class: __props.imagePosition,
          src: __props.image,
          alt: __props.imageAlt,
          width: 16,
          height: 9
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const Hero_vue_vue_type_style_index_0_scoped_6cd63235_transformed_true_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/alpine/components/content/Hero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Hero = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6cd63235"]]);
export {
  Hero as default
};
//# sourceMappingURL=Hero-c0a447a0.js.map
