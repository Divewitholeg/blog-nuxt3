import { a as __nuxt_component_0$1, b as _sfc_main$1, _ as _export_sfc } from "../server.mjs";
import { f as formatDate } from "./date-d2ab7be4.js";
import { defineComponent, mergeProps, withCtx, openBlock, createBlock, createCommentVNode, createVNode, toDisplayString, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
  __name: "ArticlesListItem",
  __ssrInlineRender: true,
  props: {
    article: {
      type: Object,
      required: true,
      validator: (value) => {
        if ((value == null ? void 0 : value._path) && value.title) {
          return true;
        }
        return false;
      }
    },
    featured: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_NuxtImg = _sfc_main$1;
      if (__props.article._path && __props.article.title) {
        _push(`<article${ssrRenderAttrs(mergeProps({
          class: { "featured": __props.featured }
        }, _attrs))} data-v-6107779a><div class="image" data-v-6107779a>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: __props.article._path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (__props.article.cover) {
                _push2(ssrRenderComponent(_component_NuxtImg, {
                  src: __props.article.cover,
                  alt: __props.article.title,
                  width: "16",
                  height: "9"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                __props.article.cover ? (openBlock(), createBlock(_component_NuxtImg, {
                  key: 0,
                  src: __props.article.cover,
                  alt: __props.article.title,
                  width: "16",
                  height: "9"
                }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="content" data-v-6107779a>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: __props.article._path,
          class: "headline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h1 data-v-6107779a${_scopeId}>${ssrInterpolate(__props.article.title)}</h1>`);
            } else {
              return [
                createVNode("h1", null, toDisplayString(__props.article.title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<p class="description" data-v-6107779a>${ssrInterpolate(__props.article.description)}</p><time data-v-6107779a>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(__props.article.date))}</time></div></article>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const ArticlesListItem_vue_vue_type_style_index_0_scoped_6107779a_transformed_true_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/alpine/components/content/ArticlesListItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6107779a"]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=ArticlesListItem-7ebfdc5f.js.map
