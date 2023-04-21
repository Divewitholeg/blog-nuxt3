import { o as useContent, l as useRoute, G as useHead, a as __nuxt_component_0, h as __nuxt_component_1, _ as _export_sfc } from "../server.mjs";
import { defineComponent, computed, unref, withCtx, createVNode, useSSRContext } from "vue";
import "hookable";
import "destr";
import "devalue";
import { f as formatDate } from "./date-d2ab7be4.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
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
  __name: "article",
  __ssrInlineRender: true,
  setup(__props) {
    const { page } = useContent();
    const route = useRoute();
    if (page.value && page.value.cover) {
      useHead({
        meta: [
          { property: "og:image", content: page.value.cover }
        ]
      });
    }
    const parentPath = computed(
      () => {
        const pathTabl = route.path.split("/");
        pathTabl.pop();
        return pathTabl.join("/");
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<article${ssrRenderAttrs(_attrs)} data-v-d563bb21>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(parentPath),
        class: "back"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "ph:arrow-left" }, null, _parent2, _scopeId));
            _push2(`<span class="text-primary-900 dark:text-primary-100" data-v-d563bb21${_scopeId}> Back </span>`);
          } else {
            return [
              createVNode(_component_Icon, { name: "ph:arrow-left" }),
              createVNode("span", { class: "text-primary-900 dark:text-primary-100" }, " Back ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<header data-v-d563bb21>`);
      if ((_a = unref(page)) == null ? void 0 : _a.title) {
        _push(`<h1 class="title" data-v-d563bb21>${ssrInterpolate(unref(page).title)}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if ((_b = unref(page)) == null ? void 0 : _b.date) {
        _push(`<time class="text-primary-700 dark:text-primary-400"${ssrRenderAttr("datetime", unref(page).date)} data-v-d563bb21>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(unref(page).date))}</time>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><div class="prose" data-v-d563bb21>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></article>`);
    };
  }
});
const article_vue_vue_type_style_index_0_scoped_d563bb21_transformed_true_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/alpine/layouts/article.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const article = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d563bb21"]]);
export {
  article as default
};
//# sourceMappingURL=article-91195ceb.js.map
